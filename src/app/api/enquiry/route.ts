import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface EnquiryPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location?: string;
  sessionType: string;
  sessionLocationType: string;
  heardAbout?: string;
  message: string;
}

const REQUIRED_FIELDS: (keyof EnquiryPayload)[] = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "sessionType",
  "sessionLocationType",
  "message",
];

function isValidPayload(body: unknown): body is EnquiryPayload {
  if (typeof body !== "object" || body === null) return false;
  const record = body as Record<string, unknown>;
  return REQUIRED_FIELDS.every((field) => typeof record[field] === "string" && record[field] !== "");
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!isValidPayload(body)) {
    return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
  }

  const airtableResult = await writeToAirtable(body);
  const emailResult = await sendNotificationEmail(body);
  await sendClientConfirmationEmail(body);

  if (!airtableResult.ok && !emailResult.ok) {
    return NextResponse.json({ success: false }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

async function writeToAirtable(data: EnquiryPayload): Promise<{ ok: boolean }> {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableId = process.env.AIRTABLE_TABLE_ID;

  if (!token || !baseId || !tableId) {
    console.warn("Airtable env vars not configured — skipping Airtable write");
    return { ok: false };
  }

  try {
    const res = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        typecast: true,
        fields: {
          "First Name": data.firstName,
          "Last Name": data.lastName,
          Email: data.email,
          Phone: data.phone,
          Location: data.location || "",
          "Session Type": data.sessionType,
          "Session Location": data.sessionLocationType,
          "How Heard": data.heardAbout || "",
          Message: data.message,
          "Date received": new Date().toISOString(),
          Source: "Website",
        },
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error("Airtable error:", JSON.stringify(error));
      return { ok: false };
    }

    return { ok: true };
  } catch (err) {
    console.error("Airtable request failed:", err);
    return { ok: false };
  }
}

async function sendNotificationEmail(data: EnquiryPayload): Promise<{ ok: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.ENQUIRY_NOTIFY_EMAIL || "hello@camvelucci.com";

  if (!apiKey) {
    console.warn("RESEND_API_KEY not configured — skipping email notification");
    return { ok: false };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Cam Velucci Photography <enquiries@camvelucci.com>",
      to: notifyTo,
      replyTo: data.email,
      subject: `New enquiry — ${data.firstName} ${data.lastName} (${data.sessionType})`,
      text: [
        `Name: ${data.firstName} ${data.lastName}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Location: ${data.location || "—"}`,
        `Session type: ${data.sessionType}`,
        `At home or outdoors: ${data.sessionLocationType}`,
        `How heard: ${data.heardAbout || "—"}`,
        "",
        "Message:",
        data.message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return { ok: false };
    }

    return { ok: true };
  } catch (err) {
    console.error("Resend request failed:", err);
    return { ok: false };
  }
}

async function sendClientConfirmationEmail(data: EnquiryPayload): Promise<{ ok: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("RESEND_API_KEY not configured — skipping client confirmation email");
    return { ok: false };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Cam Velucci Photography <hello@camvelucci.com>",
      to: data.email,
      replyTo: "hello@camvelucci.com",
      subject: "Your message has landed safely",
      text: [
        `Hi ${data.firstName},`,
        "",
        "Thank you so much for getting in touch! Your message has landed safely with me.",
        "",
        "I'm likely behind a camera or knee-deep in family life right now (both, probably), so this is just a quick note to say: I've got you. I'll come back to you personally in the next couple of days with a proper reply and everything you need to know.",
        "",
        "In the meantime, if you'd like to get a feel for how I work, have a wander through my recent stories here: instagram.com/camvelucciphotography",
        "",
        "Talk very soon,",
        "Cam x",
      ].join("\n"),
    });

    if (error) {
      console.error("Resend client-confirmation error:", JSON.stringify(error));
      return { ok: false };
    }

    return { ok: true };
  } catch (err) {
    console.error("Resend client-confirmation request failed:", err);
    return { ok: false };
  }
}

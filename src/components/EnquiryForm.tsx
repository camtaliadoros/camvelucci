"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";

const SESSION_TYPES = ["Maternity", "Lifestyle Newborn", "Family", "Not sure yet"];
const HEARD_OPTIONS = [
  "Instagram",
  "Google search",
  "Friend or family recommendation",
  "Local listing or directory",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status === "success") {
      document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [status]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <p className="font-body text-[15px] italic text-forest">
          Thank you, your enquiry is on its way. I&rsquo;ve sent a confirmation to your inbox with my brochure, and I&rsquo;ll come back to you personally as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="font-body space-y-[30px]">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-[12.5px] mb-[10px]">
            First Name <span className="text-terracotta">*</span>
          </label>
          <input name="firstName" type="text" required className="w-full border-0 border-b border-forest/30 bg-transparent text-[12.5px] py-2 outline-none focus:border-terracotta transition-colors" />
        </div>
        <div>
          <label className="block text-[12.5px] mb-[10px]">
            Last Name <span className="text-terracotta">*</span>
          </label>
          <input name="lastName" type="text" required className="w-full border-0 border-b border-forest/30 bg-transparent text-[12.5px] py-2 outline-none focus:border-terracotta transition-colors" />
        </div>
      </div>

      <div>
        <label className="block text-[12.5px] mb-[10px]">
          Email address <span className="text-terracotta">*</span>
        </label>
        <input name="email" type="email" required className="w-full border-0 border-b border-forest/30 bg-transparent text-[12.5px] py-2 outline-none focus:border-terracotta transition-colors" />
      </div>

      <div>
        <label className="block text-[12.5px] mb-[10px]">
          Phone number <span className="text-terracotta">*</span>
        </label>
        <input name="phone" type="tel" required className="w-full border-0 border-b border-forest/30 bg-transparent text-[12.5px] py-2 outline-none focus:border-terracotta transition-colors" />
      </div>

      <div>
        <label className="block text-[12.5px] mb-[10px]">Your location</label>
        <input name="location" type="text" placeholder="Town or postcode" className="w-full border-0 border-b border-forest/30 bg-transparent text-[12.5px] py-2 outline-none focus:border-terracotta transition-colors placeholder:text-forest/40" />
      </div>

      <div>
        <label className="block text-[12.5px] mb-[10px]">
          Session type <span className="text-terracotta">*</span>
        </label>
        <select name="sessionType" required defaultValue="" className="w-full border-0 border-b border-forest/30 bg-transparent text-[12.5px] py-2 outline-none focus:border-terracotta transition-colors">
          <option value="" disabled>Select option</option>
          {SESSION_TYPES.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-[12.5px] mb-[10px]">
          Where are you thinking of having your session — at home or outdoors? <span className="text-terracotta">*</span>
        </label>
        <input name="sessionLocationType" type="text" required className="w-full border-0 border-b border-forest/30 bg-transparent text-[12.5px] py-2 outline-none focus:border-terracotta transition-colors" />
      </div>

      <div>
        <label className="block text-[12.5px] mb-[10px]">How did you hear about me?</label>
        <select name="heardAbout" defaultValue="" className="w-full border-0 border-b border-forest/30 bg-transparent text-[12.5px] py-2 outline-none focus:border-terracotta transition-colors">
          <option value="" disabled>Choose your option</option>
          {HEARD_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-[12.5px] mb-[10px]">
          Tell me more about what you&rsquo;re looking for <span className="text-terracotta">*</span>
        </label>
        <textarea name="message" required className="w-full border-0 border-b border-forest/30 bg-transparent text-[12.5px] py-2 outline-none focus:border-terracotta transition-colors min-h-[90px] resize-y" />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-[3px] h-4 w-4 shrink-0 accent-[#9c5841]"
        />
        <label htmlFor="consent" className="text-[12.5px] leading-relaxed">
          I agree to my details being used to respond to my enquiry, as
          described in the{" "}
          <Link href="/privacy" className="underline underline-offset-2 text-terracotta">
            Privacy Policy
          </Link>
          . <span className="text-terracotta">*</span>
        </label>
      </div>

      <div className="flex items-start gap-3">
        <input
          id="newsletter"
          name="newsletter"
          type="checkbox"
          value="yes"
          className="mt-[3px] h-4 w-4 shrink-0 accent-[#9c5841]"
        />
        <label htmlFor="newsletter" className="text-[12.5px] leading-relaxed">
          Tick if you&rsquo;d like to join my mailing list and be the first to
          know about exclusive offers, discounts, access to priority bookings and
          more. You can unsubscribe at any time.
        </label>
      </div>

      {status === "error" && (
        <p className="text-terracotta text-sm text-center">
          Something went wrong sending your enquiry — please try again or email hello@camvelucci.com directly.
        </p>
      )}

      <div className="text-center pt-[10px]">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="font-head font-bold text-[10.5px] tracking-[0.04em] px-[42px] py-[15px] rounded-sm bg-[#9c5841] text-linen hover:bg-[#834933] transition-colors disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send enquiry"}
        </button>
      </div>
    </form>
  );
}

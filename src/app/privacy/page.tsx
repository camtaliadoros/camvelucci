import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Cam Velucci Photography',
  description:
    'How Cam Velucci Photography collects, uses and protects your personal data.',
};

export default function PrivacyPage() {
  return (
    <div className='page'>
      <nav>
        <div className='nav-tag'>
          <Link href='/' className='legal-back'>
            ‹ Back to home
          </Link>
        </div>
      </nav>

      <main className='legal'>
        <div className='legal-inner'>
          <h1 className='legal-title'>Privacy Policy</h1>
          <p className='legal-updated'>Last updated: 15 July 2026</p>

          <p>
            This privacy policy explains how <strong>Cam Velucci Photography</strong>{' '}
            (&ldquo;I&rdquo;, &ldquo;me&rdquo;, &ldquo;my&rdquo;) collects, uses
            and protects your personal information when you contact me through
            this website. I am the data controller responsible for your personal
            data.
          </p>

          <h2 className='legal-h2'>Who I am</h2>
          <p>
            Cam Velucci Photography is a photography business based in
            Hertfordshire, England. If you have any questions about this policy
            or your data, you can reach me at{' '}
            <a href='mailto:hello@camvelucci.com'>hello@camvelucci.com</a>.
          </p>

          <h2 className='legal-h2'>What information I collect</h2>
          <p>When you complete the enquiry form on this website, I collect:</p>
          <ul className='legal-list'>
            <li>Your first and last name</li>
            <li>Your email address</li>
            <li>Your phone number</li>
            <li>Your location (town or postcode), if you provide it</li>
            <li>
              Details about the session you&rsquo;re interested in — session
              type, preferred setting, how you heard about me, and anything you
              tell me in your message
            </li>
          </ul>
          <p>
            I also collect limited anonymous usage data through analytics (see{' '}
            <a href='#analytics'>Analytics &amp; cookies</a> below).
          </p>

          <h2 className='legal-h2'>How I use your information</h2>
          <p>I use the details you submit to:</p>
          <ul className='legal-list'>
            <li>Respond to your enquiry and answer your questions</li>
            <li>Arrange and discuss a potential photography session</li>
            <li>Keep a record of our correspondence</li>
          </ul>
          <p>
            I will <strong>not</strong> use your details to send you marketing or
            promotional messages unless you have separately agreed to receive
            them.
          </p>

          <h2 className='legal-h2'>Lawful basis for processing</h2>
          <p>
            I process your enquiry data on the basis of my{' '}
            <strong>legitimate interests</strong> in responding to enquiries and
            running my photography business, and, where relevant, in order to{' '}
            <strong>take steps to enter into a contract</strong> with you at your
            request. Where you tick the consent box on the form, that also
            records your agreement to this policy.
          </p>

          <h2 className='legal-h2'>Who I share it with</h2>
          <p>
            I don&rsquo;t sell your data or share it for advertising. I do use a
            small number of trusted third-party services to run my enquiry
            process, which act as data processors on my behalf:
          </p>
          <ul className='legal-list'>
            <li>
              <strong>Airtable</strong> — securely stores enquiry submissions
            </li>
            <li>
              <strong>Resend</strong> — sends the email notification of your
              enquiry and your confirmation email
            </li>
            <li>
              <strong>Vercel</strong> — hosts this website
            </li>
            <li>
              <strong>Google Analytics</strong> — provides anonymised website
              usage statistics
            </li>
          </ul>
          <p>
            Some of these providers are based in the United States, so your data
            may be transferred and stored outside the UK. Where that happens,
            these providers rely on appropriate safeguards (such as the UK
            extension to the EU-US Data Privacy Framework or Standard
            Contractual Clauses) to protect your information.
          </p>

          <h2 className='legal-h2'>How long I keep it</h2>
          <p>
            I keep enquiry data for as long as needed to respond to you and for a
            reasonable period afterwards (normally up to two years) in case you
            get back in touch. If you go on to book a session, your details will
            be kept for the duration of our working relationship and any period
            required for tax or legal reasons. You can ask me to delete your data
            at any time.
          </p>

          <h2 className='legal-h2' id='analytics'>
            Analytics &amp; cookies
          </h2>
          <p>
            This website uses Google Analytics to understand how visitors use the
            site. This may set cookies on your device and collect anonymised
            information such as pages visited and approximate location. This
            helps me improve the site. You can block cookies through your browser
            settings at any time.
          </p>

          <h2 className='legal-h2'>Your rights</h2>
          <p>Under UK data protection law, you have the right to:</p>
          <ul className='legal-list'>
            <li>Access the personal data I hold about you</li>
            <li>Ask me to correct inaccurate data</li>
            <li>Ask me to delete your data</li>
            <li>Object to or restrict how I use your data</li>
            <li>Request a copy of your data in a portable format</li>
          </ul>
          <p>
            To exercise any of these rights, email me at{' '}
            <a href='mailto:hello@camvelucci.com'>hello@camvelucci.com</a>. If
            you&rsquo;re unhappy with how I&rsquo;ve handled your data, you can
            also complain to the Information Commissioner&rsquo;s Office (ICO) at{' '}
            <a href='https://ico.org.uk' target='_blank' rel='noopener noreferrer'>
              ico.org.uk
            </a>
            .
          </p>

          <h2 className='legal-h2'>Changes to this policy</h2>
          <p>
            I may update this policy from time to time. Any changes will be
            posted on this page with a revised &ldquo;last updated&rdquo; date.
          </p>

          <p className='legal-footer-note'>
            <Link href='/' className='legal-back'>
              ‹ Back to home
            </Link>
          </p>
        </div>
      </main>

      <footer>
        <div className='footer-copy'>
          © {new Date().getFullYear()} Cam Velucci Photography. All rights
          reserved.
        </div>
        <div className='footer-loc'>Hertfordshire, England</div>
      </footer>
    </div>
  );
}

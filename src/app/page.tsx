import Image from 'next/image';
import PortfolioSection from '@/components/PortfolioSection';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className='page'>
      <nav>
        <div className='nav-logo'>
          <Image
            src='/images/Full Logo_Forest and Terracotta.png'
            alt='Cam Velucci Photography'
            width={1200}
            height={400}
            className='block h-[48px] w-auto'
            priority
          />
        </div>
        <div className='nav-tag'>Lifestyle family &amp; motherhood photographer in Hertfordshire, England</div>
      </nav>

      <section className='hero'>
        <h1 className='hero-headline'>
          Expressive photography
          <br />
          for families who
          <br />
          <em>feel it all</em>
        </h1>

        <div className='ornament'>
          <div className='ornament-line' />
          <div className='ornament-dot' />
          <div className='ornament-line' />
        </div>

        <div className='tagline'>Story-led summer sessions available</div>
      </section>

      <PortfolioSection />

      <section className='contact' id='contact'>
        <div className='contact-inner'>
          <div className='contact-eyebrow'>In the meantime</div>

          <h2 className='contact-headline'>
            Let&apos;s start a
            <br />
            conversation
          </h2>

          <p className='contact-sub'>
            Interested in a session, or just want to know more?
            <br />
            I&apos;d love to hear from you.
            <br />
            Packages from £150 — introductory offer for early bookings
          </p>

          <div className='contact-options'>
            <a href='mailto:hello@camvelucci.com' className='contact-option'>
              <div className='contact-option-icon'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#B5674E'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  aria-hidden
                >
                  <rect x='2' y='4' width='20' height='16' rx='2' />
                  <polyline points='2,4 12,13 22,4' />
                </svg>
              </div>
              <div className='contact-option-text'>
                <div className='contact-option-label'>Email</div>
                <div className='contact-option-value'>hello@camvelucci.com</div>
              </div>
              <div className='contact-option-arrow'>›</div>
            </a>

            <a
              href='https://instagram.com/camvelucciphotography'
              target='_blank'
              rel='noopener noreferrer'
              className='contact-option'
            >
              <div className='contact-option-icon'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='#B5674E'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  aria-hidden
                >
                  <rect x='2' y='2' width='20' height='20' rx='5' />
                  <circle cx='12' cy='12' r='4' />
                  <circle cx='17.5' cy='6.5' r='.8' fill='#B5674E' />
                </svg>
              </div>
              <div className='contact-option-text'>
                <div className='contact-option-label'>Instagram</div>
                <div className='contact-option-value'>
                  @camvelucciphotography
                </div>
              </div>
              <div className='contact-option-arrow'>›</div>
            </a>
          </div>
        </div>
      </section>

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

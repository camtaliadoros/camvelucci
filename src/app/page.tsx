import Image from 'next/image';

const CVP_ICON = '/images/CVP Icon.png';

export default function Home() {
  return (
    <div className='page'>
      <nav>
        <div className='nav-logo'>
          <div className='nav-logo-row'>
            <Image
              src={CVP_ICON}
              alt='Cam Velucci Photography icon'
              width={560}
              height={1074}
              className='block h-[38px] w-auto shrink-0'
              priority
            />
            <div>
              <div className='nav-logo-name'>Cam Velucci</div>
              <div className='nav-logo-sub'>Photography</div>
            </div>
          </div>
        </div>
        <div className='nav-tag'>Hertfordshire, England</div>
      </nav>

      <section className='hero'>
        <div className='hero-eyebrow'>Something beautiful is coming</div>

        <div className='monogram'>
          <Image
            src={CVP_ICON}
            alt='Cam Velucci Photography icon'
            width={560}
            height={1074}
            className='block w-[48px] h-auto'
          />
        </div>

        <h1 className='hero-headline'>
          Emotive lifestyle
          <br />
          motherhood <em>&amp;</em> family
          <br />
          photography
        </h1>

        <div className='ornament'>
          <div className='ornament-line' />
          <div className='ornament-dot' />
          <div className='ornament-line' />
        </div>

        <div className='tagline'>Website coming soon</div>
      </section>

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

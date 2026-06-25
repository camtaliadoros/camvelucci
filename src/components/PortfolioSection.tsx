import Image from 'next/image';
import { getPortfolioImages, urlForImage } from '@/sanity/client';

export default async function PortfolioSection() {
  const images = await getPortfolioImages();

  if (images.length === 0) {
    return null;
  }

  return (
    <section className='portfolio' id='portfolio'>
      <div className='section-divider'>
        <div className='section-divider-line' />
        <div className='section-divider-label'>Some of my work</div>
        <div className='section-divider-line' />
      </div>

      <div className='portfolio-grid'>
        {images.map((item) => {
          const url = urlForImage(item.image).width(800).quality(80).url();
          const width = item.width || 800;
          const height = item.height || 600;

          return (
            <div key={item._id} className='portfolio-item'>
              <Image
                src={url}
                alt={item.alt}
                width={width}
                height={height}
                sizes='(max-width: 700px) 50vw, 25vw'
                className='portfolio-image'
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

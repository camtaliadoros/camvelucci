import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
});

const builder = createImageUrlBuilder(sanityClient);

export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}

export type PortfolioImage = {
  _id: string;
  alt: string;
  category?: string;
  featured?: boolean;
  order?: number;
  orientation?: 'portrait' | 'landscape' | 'square';
  image: SanityImageSource;
  width: number;
  height: number;
};

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export async function getPortfolioImages(): Promise<PortfolioImage[]> {
  const images: PortfolioImage[] = await sanityClient.fetch(
    `*[_type == "portfolioImage"]{
      _id,
      alt,
      category,
      featured,
      order,
      orientation,
      image,
      "width": image.asset->metadata.dimensions.width,
      "height": image.asset->metadata.dimensions.height
    }`
  );

  return shuffle(images);
}

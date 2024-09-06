import { LinkDefaultConfig } from '../../link/link-default/link-default.model';

export interface HeroDefaultImage {
  imagePath: string;
  imageAlt: string;
  imagePriority: 'high' | 'low';
}

export interface HeroDefaultContentMiddle {
  contentText: string;
  cta: LinkDefaultConfig;
}

export interface HeroDefaultContentEnd {
  contentText: string;
  cta: LinkDefaultConfig;
}

export interface HeroDefaultConfig {
  heroHeadingText: string;
  heroImage: HeroDefaultImage;
  heroContentMiddle: HeroDefaultContentMiddle;
  heroContentEnd: HeroDefaultContentEnd;
}

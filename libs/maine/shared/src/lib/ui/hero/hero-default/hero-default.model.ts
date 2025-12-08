import { LinkArrowConfig } from '../../link/link-arrow/link-arrow.model';
import { LinkDefaultConfig } from '../../link/link-default/link-default.model';

export interface HeroDefaultImage {
  imagePath: string;
  imageAlt: string;
  imagePriority: 'high' | 'low';
}

export interface HeroDefaultContentMiddle {
  contentText: string;
  ctaDefault?: LinkDefaultConfig;
  ctaArrow?: LinkArrowConfig;
}

export interface HeroDefaultContentEnd {
  contentText: string;
  ctaDefault?: LinkDefaultConfig;
  ctaArrow?: LinkArrowConfig;
}

export interface HeroDefaultConfig {
  heroHeadingText: string;
  heroImage: HeroDefaultImage;
  heroContentMiddle: HeroDefaultContentMiddle;
  heroContentEnd: HeroDefaultContentEnd;
}

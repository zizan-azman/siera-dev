export interface HeroContentMiddle {
  imagePath: string;
  contentText: string;
  ctaType: string;
  ctaText: string;
  ctaUrl: string;
}

export interface HeroContentEnd {
  contentText: string;
  ctaType: string;
  ctaText: string;
  ctaUrl: string;
}

export interface HeroConfig {
  heroHeadingText: string;
  heroContentMiddle: HeroContentMiddle;
  heroContentEnd: HeroContentEnd;
}

import { HeroDefaultConfig } from '@siera-dev/maine-shared';

export const MockHeroDefault: HeroDefaultConfig = {
  heroHeadingText: `A serene <span class="ma-hero-default__highlight">sanctuary</span> where every cat thrives`,
  heroImage: {
    imagePath: 'images/siera-1.png',
    imageAlt: 'Siera Cat Sanctuary 2D Illustration',
    imagePriority: 'high',
  },
  heroContentMiddle: {
    contentText:
      'Discover our internationally recognized sanctuary, providing open habitats, medical care, and meaningful adoption opportunities for cats from around the world.',
    ctaArrow: {
      url: '/',
      linkArrowText: { text: 'Explore the sanctuary', textSize: 'default' },
      type: 'ghost',
      color: 'primary',
    },
  },
  heroContentEnd: {
    contentText: `Siera is dedicated to creating a compassionate and sustainable environment where cats receive world-class care — and people connect with nature in a whole new way.`,
    ctaDefault: {
      url: '',
      type: 'outline',
      linkDefaultText: {
        text: 'Learn more',
        textSize: 'default',
      },
    },
  },
};

export const MockHeroDefault2: HeroDefaultConfig = {
  heroHeadingText: `Protecting vulnerable <span class="ma-hero-default__highlight">cats</span> — and giving them a second chance at life`,
  heroImage: {
    imagePath: 'images/siera-2.png',
    imageAlt: 'Siera Cat Sanctuary Illustration',
    imagePriority: 'high',
  },
  heroContentMiddle: {
    contentText:
      'Every day, our sanctuary rescues, rehabilitates, and supports cats in need. Explore how our dedicated team provides medical care, nurturing habitats, and pathways to loving homes.',
    ctaArrow: {
      url: '/sanctuary',
      linkArrowText: { text: 'Our mission', textSize: 'default' },
      type: 'ghost',
      color: 'primary',
    },
  },
  heroContentEnd: {
    contentText: `At Siera, we believe every cat deserves comfort, safety, and dignity — and we're committed to making that a reality through compassionate, global-first care.`,
    ctaDefault: {
      url: '/about',
      type: 'outline',
      linkDefaultText: {
        text: 'Learn more',
        textSize: 'default',
      },
    },
  },
};

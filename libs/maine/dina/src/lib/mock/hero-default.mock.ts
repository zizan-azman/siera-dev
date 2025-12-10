import { HeroDefaultConfig } from '@siera-dev/maine-shared';

export const MockHeroDefault: HeroDefaultConfig = {
  heroHeading: true,
  heroHeadingText: `Providing urgent <span class="ma-hero-default__highlight">safe haven</span> for rescued exotic animals`,
  heroImage: {
    imagePath: 'maine-assets/images/siera-1.png',
    imageAlt: 'Dina Exotic Animal Sanctuary Illustration',
    imagePriority: 'high',
  },
  heroContentMiddle: {
    contentText:
      'From illegally traded species to neglected pets, Dina rescues exotic animals in critical conditions and provides the medical treatment, rehabilitation, and protection they deserve.',
    ctaArrow: {
      url: '/cases',
      linkArrowText: { text: 'View rescue cases', textSize: 'default' },
      type: 'ghost',
      color: 'primary',
    },
  },
  heroContentEnd: {
    contentText: `Our mission is to offer responsible, ethical care for endangered and vulnerable species — ensuring every rescued animal receives safety, dignity, and a chance to recover.`,
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

export const MockHeroDefault2: HeroDefaultConfig = {
  heroHeading: true,
  heroHeadingText: `A global <span class="ma-hero-default__highlight">sanctuary</span> protecting rare and endangered species`,
  heroImage: {
    imagePath: 'maine-assets/images/siera-2.png',
    imageAlt: 'Dina Wildlife Conservation Illustration',
    imagePriority: 'high',
  },
  heroContentMiddle: {
    contentText:
      'Dina partners with authorities, conservation groups, and rescue teams to shelter exotic animals seized from harmful environments — providing rehabilitation and long-term care.',
    ctaArrow: {
      url: '/sanctuary',
      linkArrowText: { text: 'Explore the sanctuary', textSize: 'default' },
      type: 'ghost',
      color: 'primary',
    },
  },
  heroContentEnd: {
    contentText: `We are committed to preserving wildlife diversity through ethical sanctuary care, education, and conservation efforts that safeguard species for future generations.`,
    ctaDefault: {
      url: '/initiatives',
      type: 'outline',
      linkDefaultText: {
        text: 'Our initiatives',
        textSize: 'default',
      },
    },
  },
};

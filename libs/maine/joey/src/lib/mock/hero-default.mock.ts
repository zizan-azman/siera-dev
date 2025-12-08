import { HeroDefaultConfig } from '@siera-dev/maine-shared';

export const MockHeroDefault: HeroDefaultConfig = {
  heroHeadingText: `Every dog deserves a <span class="ma-heroDefault__highlight">second chance</span> to run, play, and belong`,
  heroImage: {
    imagePath: 'images/joey-1.png',
    imageAlt: 'Joey Dog Shelter Illustration',
    imagePriority: 'high',
  },
  heroContentMiddle: {
    contentText:
      'From abandoned pups to senior dogs needing care, Joey provides shelter, rehabilitation, and compassionate adoption opportunities for dogs of all backgrounds.',
    ctaArrow: {
      url: '/adoption',
      linkArrowText: { text: 'Meet our dogs', textSize: 'default' },
      type: 'ghost',
      color: 'primary',
    },
  },
  heroContentEnd: {
    contentText: `Our mission is simple: create a safe, nurturing environment where every dog receives love, care, and the opportunity to find a forever home.`,
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
  heroHeadingText: `A joyful <span class="ma-heroDefault__highlight">sanctuary</span> where dogs heal, grow, and rediscover happiness`,
  heroImage: {
    imagePath: 'images/joey-2.png',
    imageAlt: 'Joey Dog Sanctuary Landscape Illustration',
    imagePriority: 'high',
  },
  heroContentMiddle: {
    contentText:
      'Explore our open-space dog sanctuary, complete with enrichment zones, professional training support, veterinary care, and guided visitor sessions.',
    ctaArrow: {
      url: '/visit',
      linkArrowText: { text: 'Plan your visit', textSize: 'default' },
      type: 'ghost',
      color: 'primary',
    },
  },
  heroContentEnd: {
    contentText: `At Joey, we believe every dog deserves a life filled with comfort, connection, and joy — supported by a community that truly cares.`,
    ctaDefault: {
      url: '/our-work',
      type: 'outline',
      linkDefaultText: {
        text: 'Discover our work',
        textSize: 'default',
      },
    },
  },
};

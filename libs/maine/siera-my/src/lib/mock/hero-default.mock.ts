import { HeroDefaultConfig } from '@siera-dev/maine-shared';

export const HeroConfig: HeroDefaultConfig = {
  heroHeadingText: `Green <span class="ma-heroDefault__highlight">Energy</span> to power lasting
    positive impact`,
  heroImage: {
    imagePath: 'images/siera-1.png',
    imageAlt: 'Siera Animal Shelter 2D Illustration',
    imagePriority: 'high',
  },
  heroContentMiddle: {
    contentText:
      'Read our sustainability report and discover how our renewable energy solutions are contributing to a planet where nature and people thrive.',
    cta: {
      url: '',
      type: 'ghost',
      linkDefaultText: {
        text: 'Sustainability report',
        textSize: 'default',
      },
    },
  },
  heroContentEnd: {
    contentText: `We are a
      <span class="ma-heroDefault__highlight">renewable energy</span> company
      with a clear vision to create a world that runs entirely on green energy.`,
    cta: {
      url: '',
      type: 'outline',
      linkDefaultText: {
        text: 'Read more',
        textSize: 'default',
      },
    },
  },
};

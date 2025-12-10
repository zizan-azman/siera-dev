import { CardTeaserConfig } from '@siera-dev/maine-shared';

export const MockCardGhostTeaser: CardTeaserConfig = {
  heading: 'About Dina',
  cardsType: 'ghost',
  cards: [
    {
      cardType: 'ghost',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-2.png',
        alt: 'Who is Dina',
        priority: 'low',
      },
      cardContentTitle: { text: 'Who we are' },
      cardContentBody: {
        text: `Dina.com specialises in the rescue and rehabilitation of exotic and endangered wildlife affected by illegal trade and unsafe captivity.`,
      },
    },
    {
      cardType: 'ghost',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-1.png',
        alt: 'Dina purpose',
        priority: 'low',
      },
      cardContentTitle: { text: 'Our mission' },
      cardContentBody: {
        text: `We support wildlife rehabilitation through specialised veterinary care, safe enclosures, and long-term conservation programmes.`,
      },
    },
    {
      cardType: 'ghost',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-1.png',
        alt: 'How Dina operates',
        priority: 'low',
      },
      cardContentTitle: { text: 'How we work' },
      cardContentBody: {
        text: `Our team of wildlife specialists collaborates with authorities to ensure rescued animals receive proper treatment and stable environments.`,
      },
    },
    {
      cardType: 'ghost',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-1.png',
        alt: 'Conservation initiatives',
        priority: 'low',
      },
      cardContentTitle: { text: 'Conservation & impact' },
      cardContentBody: {
        text: `We contribute to biodiversity preservation through education, advocacy, and sustainable wildlife protection efforts.`,
      },
    },
  ],
};

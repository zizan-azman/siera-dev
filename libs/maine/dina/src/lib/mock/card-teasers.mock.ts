import { CardTeaserConfig } from '@siera-dev/maine-shared';

export const MockCardTeasers: CardTeaserConfig[] = [
  // --- Top Row (2 cards) ---
  {
    cardsType: 'default',
    cards: [
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-2.png',
          alt: 'Dina exotic animal rescue',
          priority: 'low',
        },
        cardContentTitle: { text: 'Rescuing Exotic Animals in Need' },
        cardContentBody: {
          text: `We provide a safe refuge for exotic species rescued from cramped displays, illegal trade, or unsafe living conditions.`,
        },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-1.png',
          alt: 'Dina exotic habitat',
          priority: 'low',
        },
        cardContentTitle: { text: 'Specialized Care for Rare Species' },
        cardContentBody: {
          text: `From reptiles to tropical birds, each animal receives a habitat tailored to its unique environmental and biological needs.`,
        },
      },
    ],
  },

  // --- Middle Row (3 cards) ---
  {
    cardsType: 'default',
    cards: [
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-2.png',
          alt: 'Dina emergency rescue',
          priority: 'low',
        },
        cardContentTitle: { text: 'Emergency Response for At-Risk Animals' },
        cardContentBody: {
          text: `When authorities or the public report urgent cases, our team mobilizes to relocate exotic animals to safety quickly and responsibly.`,
        },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-1.png',
          alt: 'Dina veterinary care',
          priority: 'low',
        },
        cardContentTitle: { text: 'Medical Expertise for Exotic Health' },
        cardContentBody: {
          text: `Our specialists provide advanced veterinary care and rehabilitation to animals recovering from neglect or trauma.`,
        },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-1.png',
          alt: 'Dina conservation education',
          priority: 'low',
        },
        cardContentTitle: { text: 'Educating for Ethical Conservation' },
        cardContentBody: {
          text: `We work to raise awareness on responsible ownership, legal requirements, and the importance of protecting vulnerable species.`,
        },
      },
    ],
  },

  // --- Bottom Row (2 cards) ---
  {
    cardsType: 'default',
    cards: [
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-2.png',
          alt: 'Dina guided visit',
          priority: 'low',
        },
        cardContentTitle: { text: 'Experience a Sanctuary of Discovery' },
        cardContentBody: {
          text: `Plan a visit and explore habitats where animals live safely while learning from our caretakers about their unique behaviours.`,
        },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-1.png',
          alt: 'Dina donor impact',
          priority: 'low',
        },
        cardContentTitle: { text: 'Your Contribution Protects Lives' },
        cardContentBody: {
          text: `Donations help us rescue endangered animals, expand safe habitats, and provide long-term care to species that need protection.`,
        },
      },
    ],
  },
];

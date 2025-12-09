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
          alt: 'Joey dog rescue',
          priority: 'low',
        },
        cardContentTitle: { text: 'Giving Every Dog a Second Chance' },
        cardContentBody: {
          text: `Our rescue team provides safety, medical care, and emotional support to dogs rescued from the streets or surrendered by owners.`,
        },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-1.png',
          alt: 'Joey dog sanctuary',
          priority: 'low',
        },
        cardContentTitle: { text: 'A Sanctuary Filled With Hope' },
        cardContentBody: {
          text: `Each dog in our care enjoys clean spaces, enrichment activities, and loving interaction designed to rebuild trust and confidence.`,
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
          alt: 'Joey adoption program',
          priority: 'low',
        },
        cardContentTitle: { text: 'Find Your Forever Companion' },
        cardContentBody: {
          text: `Our guided adoption process helps families connect with dogs that match their lifestyle, personality, and care capacity.`,
        },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-1.png',
          alt: 'Joey veterinary care',
          priority: 'low',
        },
        cardContentTitle: { text: 'Health-Centred, Heart-Led Care' },
        cardContentBody: {
          text: `From vaccinations to rehabilitation, our veterinary team supports every dog's physical and emotional wellbeing.`,
        },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-1.png',
          alt: 'Joey community outreach',
          priority: 'low',
        },
        cardContentTitle: { text: 'Creating a Kinder Community' },
        cardContentBody: {
          text: `Join our events and educational programmes to help raise awareness on responsible pet ownership and animal welfare.`,
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
          alt: 'Joey shelter visit',
          priority: 'low',
        },
        cardContentTitle: { text: 'Visit, Volunteer, Make an Impact' },
        cardContentBody: {
          text: `Experience our shelter firsthand and discover how spending time with our dogs contributes to their social development.`,
        },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-1.png',
          alt: 'Joey impact support',
          priority: 'low',
        },
        cardContentTitle: { text: 'Your Support Saves Lives' },
        cardContentBody: {
          text: `Every donation, adoption, and act of volunteerism helps us rescue more dogs and build a safe environment for them to thrive.`,
        },
      },
    ],
  },
];

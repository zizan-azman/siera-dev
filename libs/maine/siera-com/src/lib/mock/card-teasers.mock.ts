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
          path: 'maine-assets/images/card-teaser/siera-card-teaser-1.jpg',
          alt: 'Siera cat sanctuary',
          priority: 'low',
        },
        cardContentTitle: { text: 'A Second Chance for Every Cat' },
        cardContentBody: {
          text: `Discover how our rescue team rehabilitates vulnerable cats from unsafe environments and prepares them for a healthier, happier future.`,
        },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/card-teaser/siera-card-teaser-2a.jpg',
          alt: 'Siera sanctuary environment',
          priority: 'low',
        },
        cardContentTitle: { text: 'Where Nature Meets Compassion' },
        cardContentBody: {
          text: `Explore our open-habitat sanctuary designed to give cats the freedom, comfort, and care they need — while offering visitors a meaningful experience.`,
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
          path: 'maine-assets/images/card-teaser/siera-card-teaser-3a.jpg',
          alt: 'Cat adoption program',
          priority: 'low',
        },
        cardContentTitle: { text: 'Find Your New Best Friend' },
        cardContentBody: {
          text: `Meet cats ready for adoption and learn how our guided process ensures the perfect match between humans and their future companions.`,
        },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/card-teaser/siera-card-teaser-4a.jpg',
          alt: 'Veterinary services',
          priority: 'low',
        },
        cardContentTitle: { text: 'Care That Goes Beyond Shelter' },
        cardContentBody: {
          text: `From medical treatment to long-term support, our veterinary team champions the wellbeing of every cat that enters our sanctuary.`,
        },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/card-teaser/siera-card-teaser-5a.jpg',
          alt: 'Community programmes',
          priority: 'low',
        },
        cardContentTitle: { text: 'Building a Caring Community' },
        cardContentBody: {
          text: `Join our workshops, tours, and outreach programmes designed to educate the public on responsible cat care and ethical animal welfare.`,
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
          path: 'maine-assets/images/card-teaser/siera-card-teaser-6a.jpg',
          alt: 'Visitor pass experience',
          priority: 'low',
        },
        cardContentTitle: { text: 'A Place to Relax, Learn, and Connect' },
        cardContentBody: {
          text: `Book a visit to Siera and experience a peaceful environment where cats roam safely and visitors can enjoy guided sessions with our caretakers.`,
        },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/card-teaser/siera-card-teaser-7a.jpg',
          alt: 'Sanctuary impact highlight',
          priority: 'low',
        },
        cardContentTitle: { text: 'Your Support Makes a Difference' },
        cardContentBody: {
          text: `Learn how community contributions help us expand our rescue efforts, enhance our habitats, and provide essential care to cats in need.`,
        },
      },
    ],
  },
];

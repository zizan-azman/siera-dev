import { CardTeaserStickyConfig } from '@siera-dev/maine-shared';

export const MockCardTeaserSticky: CardTeaserStickyConfig = {
  heading: `Learn how Dina.com safeguards exotic wildlife through expert-led
      <span class="ma-color--primary">rescue, rehabilitation, and conservation-focused care</span>. Explore our core missions and the animals we protect.`,
  cta: {
    type: 'outline',
    url: '/',
    linkDefaultText: {
      text: 'Explore our wildlife programmes',
      textSize: 'default',
    },
  },
  cardsType: 'default',
  cards: [
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-1.png',
        alt: 'Exotic animal rescue',
        priority: 'low',
      },
      cardContentTitle: { text: 'Critical Wildlife Rescue' },
      cardContentBody: {
        text: `Emergency extraction of exotic animals from unsafe conditions, illegal trade, or improper captivity.`,
      },
      cardContentIcon: { color: 'primary', path: 'paw' },
    },
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-2.png',
        alt: 'Veterinary care for exotic species',
        priority: 'low',
      },
      cardContentTitle: { text: 'Specialised Exotic Vet Care' },
      cardContentBody: {
        text: `Species-specific diagnostics, treatment, and long-term health management led by exotic animal specialists.`,
      },
      cardContentIcon: { color: 'primary', path: 'paw' },
    },
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-1.png',
        alt: 'Exotic animal enrichment',
        priority: 'low',
      },
      cardContentTitle: { text: 'Behavioural Recovery' },
      cardContentBody: {
        text: `Therapeutic enrichment and behavioural rehabilitation for abused, stressed, or trafficked animals.`,
      },
      cardContentIcon: { color: 'primary', path: 'paw' },
    },
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-2.png',
        alt: 'Sanctuary placements',
        priority: 'low',
      },
      cardContentTitle: { text: 'Sanctuary Placement' },
      cardContentBody: {
        text: `Collaboration with global sanctuaries to relocate animals to species-appropriate long-term habitats.`,
      },
      cardContentIcon: { color: 'primary', path: 'paw' },
    },
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-1.png',
        alt: 'Habitat design for exotic species',
        priority: 'low',
      },
      cardContentTitle: { text: 'Naturalistic Habitats' },
      cardContentBody: {
        text: `Custom-designed enclosures that simulate natural ecosystems for comfort, exploration, and survival instincts.`,
      },
      cardContentIcon: { color: 'primary', path: 'paw' },
    },
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-2.png',
        alt: 'Wildlife conservation awareness',
        priority: 'low',
      },
      cardContentTitle: { text: 'Conservation Education' },
      cardContentBody: {
        text: `Public programmes raising awareness about exotic species protection and responsible wildlife stewardship.`,
      },
      cardContentIcon: { color: 'primary', path: 'paw' },
    },
  ],
};

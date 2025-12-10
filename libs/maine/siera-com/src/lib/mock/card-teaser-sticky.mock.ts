import { CardTeaserStickyConfig } from '@siera-dev/maine-shared';

export const MockCardTeaserSticky: CardTeaserStickyConfig = {
  heading: `Discover how Siera provides world-class care for cats through specialised
      <span class="ma-color--primary">rescue, rehabilitation, and adoption services</span>. Explore our core programmes and how they help create safer futures.`,
  cta: {
    color: 'default',
    type: 'outline',
    url: '/',
    linkDefaultText: {
      text: 'Explore our care programmes',
      textSize: 'default',
    },
  },
  cardsType: 'default',
  cards: [
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-2.png',
        alt: 'Siera rescue programme',
        priority: 'low',
      },
      cardContentTitle: { text: 'Rescue & Recovery' },
      cardContentBody: {
        text: `Emergency response for abandoned, injured, or unsafe-condition cats.`,
      },
      cardContentIcon: { color: 'primary', path: 'paw' },
    },
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-1.png',
        alt: 'Siera medical care',
        priority: 'low',
      },
      cardContentTitle: { text: 'Veterinary Care' },
      cardContentBody: {
        text: `From diagnostics to long-term treatment, our vets ensure holistic wellbeing.`,
      },
      cardContentIcon: { color: 'primary', path: 'paw' },
    },
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-2.png',
        alt: 'Siera behavioural programme',
        priority: 'low',
      },
      cardContentTitle: { text: 'Behavioural Rehabilitation' },
      cardContentBody: {
        text: `Gentle socialisation and training for traumatised or timid cats.`,
      },
      cardContentIcon: { color: 'primary', path: 'paw' },
    },
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-1.png',
        alt: 'Siera adoption system',
        priority: 'low',
      },
      cardContentTitle: { text: 'Ethical Adoption' },
      cardContentBody: {
        text: `Guided matching to ensure every cat joins a safe and committed home.`,
      },
      cardContentIcon: { color: 'primary', path: 'paw' },
    },
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-2.png',
        alt: 'Siera sanctuary environment',
        priority: 'low',
      },
      cardContentTitle: { text: 'Open-Habitat Sanctuary' },
      cardContentBody: {
        text: `Nature-inspired spaces designed for comfort, freedom, and enrichment.`,
      },
      cardContentIcon: { color: 'primary', path: 'paw' },
    },
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-1.png',
        alt: 'Siera community initiative',
        priority: 'low',
      },
      cardContentTitle: { text: 'Community Education' },
      cardContentBody: {
        text: `Workshops and outreach programmes promoting ethical cat care.`,
      },
      cardContentIcon: { color: 'primary', path: 'paw' },
    },
  ],
};

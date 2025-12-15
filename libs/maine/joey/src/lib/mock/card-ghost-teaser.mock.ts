import { CardTeaserConfig } from '@siera-dev/maine-shared';

export const MockCardGhostTeaser: CardTeaserConfig = {
  heading: 'About Joey',
  cardsType: 'ghost',
  cards: [
    {
      cardType: 'ghost',
      cardURL: '/',
      cardImage: {
        path: 'joey-assets/images/card-ghost-teaser/joey-card-ghost-teaser-1a.jpg',
        alt: 'Who is Joey',
        priority: 'low',
      },
      cardContentTitle: { text: 'Who we are' },
      cardContentBody: {
        text: `Joey is a dog rescue organisation committed to saving strays, rehabilitating abused dogs, and building safer communities for canines.`,
      },
    },
    {
      cardType: 'ghost',
      cardURL: '/',
      cardImage: {
        path: 'joey-assets/images/card-ghost-teaser/joey-card-ghost-teaser-2a.jpg',
        alt: 'Purpose of Joey.com',
        priority: 'low',
      },
      cardContentTitle: { text: 'Our purpose' },
      cardContentBody: {
        text: `We focus on medical care, social training, and structured adoption to give every rescued dog a second chance at life.`,
      },
    },
    {
      cardType: 'ghost',
      cardURL: '/',
      cardImage: {
        path: 'joey-assets/images/card-ghost-teaser/joey-card-ghost-teaser-3a.jpg',
        alt: 'How Joey operates',
        priority: 'low',
      },
      cardContentTitle: { text: 'How we operate' },
      cardContentBody: {
        text: `Our dedicated handlers, trainers, and volunteers collaborate to help dogs regain trust, confidence, and emotional balance.`,
      },
    },
    {
      cardType: 'ghost',
      cardURL: '/',
      cardImage: {
        path: 'joey-assets/images/card-ghost-teaser/joey-card-ghost-teaser-4a.jpg',
        alt: 'Joey initiatives',
        priority: 'low',
      },
      cardContentTitle: { text: 'Impact & initiatives' },
      cardContentBody: {
        text: `Through community outreach and responsible pet programmes, we work towards reducing abandonment and improving canine welfare.`,
      },
    },
  ],
};

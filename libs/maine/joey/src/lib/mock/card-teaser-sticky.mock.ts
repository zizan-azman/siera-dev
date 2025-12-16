import { CardTeaserStickyConfig } from '@siera-dev/maine-shared';

export const MockCardTeaserSticky: CardTeaserStickyConfig = {
  heading: `See how Joey champions the wellbeing of dogs through dedicated
      <span class="ma-color--primary">rescue, rehabilitation, and rehoming programmes</span>. Explore our initiatives and how they transform lives.`,
  cta: {
    color: 'default',
    type: 'outline',
    url: '/',
    linkDefaultText: {
      text: 'Explore our dog care programmes',
      textSize: 'default',
    },
  },
  cardsType: 'default',
  cards: [
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'joey-assets/images/card-sticky-teaser/joey-card-sticky-teaser-1a.jpg',
        alt: 'Joey dog rescue',
        priority: 'low',
      },
      cardContentTitle: { text: 'Rescue & First Response' },
      cardContentBody: {
        text: `Rapid support for abandoned, injured, or abused dogs that require urgent safety.`,
      },
      cardContentIcon: { color: 'primary', path: 'empathize' },
    },
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'joey-assets/images/card-sticky-teaser/joey-card-sticky-teaser-2a.jpg',
        alt: 'Joey veterinary services',
        priority: 'low',
      },
      cardContentTitle: { text: 'Comprehensive Vet Care' },
      cardContentBody: {
        text: `Health checks, treatments, vaccinations, and long-term medical care for every dog in need.`,
      },
      cardContentIcon: { color: 'primary', path: 'building-hospital' },
    },
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'joey-assets/images/card-sticky-teaser/joey-card-sticky-teaser-3a.jpg',
        alt: 'Dog behavioural therapy',
        priority: 'low',
      },
      cardContentTitle: { text: 'Behaviour Training' },
      cardContentBody: {
        text: `Gentle behavioural therapy and socialisation for anxious or previously mistreated dogs.`,
      },
      cardContentIcon: { color: 'primary', path: 'paw' },
    },
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'joey-assets/images/card-sticky-teaser/joey-card-sticky-teaser-4a.jpg',
        alt: 'Dog adoption process',
        priority: 'low',
      },
      cardContentTitle: { text: 'Responsible Adoption' },
      cardContentBody: {
        text: `Careful pairing to ensure each dog finds a patient, loving, and prepared forever home.`,
      },
      cardContentIcon: { color: 'primary', path: 'home-heart' },
    },
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'joey-assets/images/card-sticky-teaser/joey-card-sticky-teaser-5a.jpg',
        alt: 'Dog-friendly spaces',
        priority: 'low',
      },
      cardContentTitle: { text: 'Enriched Living Spaces' },
      cardContentBody: {
        text: `Clean, safe, and enriching habitats tailored for play, rest, and emotional comfort.`,
      },
      cardContentIcon: { color: 'primary', path: 'plant' },
    },
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'joey-assets/images/card-sticky-teaser/joey-card-sticky-teaser-6a.jpg',
        alt: 'Community dog education',
        priority: 'low',
      },
      cardContentTitle: { text: 'Community Awareness' },
      cardContentBody: {
        text: `Outreach efforts encouraging responsible pet ownership and humane treatment of dogs.`,
      },
      cardContentIcon: { color: 'primary', path: 'home-infinity' },
    },
  ],
};

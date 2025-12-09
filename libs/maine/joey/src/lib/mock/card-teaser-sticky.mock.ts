import { CardTeaserStickyConfig } from '@siera-dev/maine-shared';

export const MockCardTeaserSticky: CardTeaserStickyConfig = {
  heading: `See how Joey.com champions the wellbeing of dogs through dedicated
      <span class="ma-color--primary">rescue, rehabilitation, and rehoming programmes</span>. Explore our initiatives and how they transform lives.`,
  cta: {
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
        path: 'maine-assets/images/siera-1.png',
        alt: 'Joey dog rescue',
        priority: 'low',
      },
      cardContentTitle: { text: 'Rescue & First Response' },
      cardContentBody: {
        text: `Rapid support for abandoned, injured, or abused dogs that require urgent safety.`,
      },
      cardContentIcon: { color: 'primary', path: 'paw' },
    },
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-2.png',
        alt: 'Joey veterinary services',
        priority: 'low',
      },
      cardContentTitle: { text: 'Comprehensive Vet Care' },
      cardContentBody: {
        text: `Health checks, treatments, vaccinations, and long-term medical care for every dog in need.`,
      },
      cardContentIcon: { color: 'primary', path: 'paw' },
    },
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-1.png',
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
        path: 'maine-assets/images/siera-2.png',
        alt: 'Dog adoption process',
        priority: 'low',
      },
      cardContentTitle: { text: 'Responsible Adoption' },
      cardContentBody: {
        text: `Careful pairing to ensure each dog finds a patient, loving, and prepared forever home.`,
      },
      cardContentIcon: { color: 'primary', path: 'paw' },
    },
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-1.png',
        alt: 'Dog-friendly spaces',
        priority: 'low',
      },
      cardContentTitle: { text: 'Enriched Living Spaces' },
      cardContentBody: {
        text: `Clean, safe, and enriching habitats tailored for play, rest, and emotional comfort.`,
      },
      cardContentIcon: { color: 'primary', path: 'paw' },
    },
    {
      cardType: 'default',
      cardURL: '/',
      cardImage: {
        path: 'maine-assets/images/siera-2.png',
        alt: 'Community dog education',
        priority: 'low',
      },
      cardContentTitle: { text: 'Community Awareness' },
      cardContentBody: {
        text: `Outreach efforts encouraging responsible pet ownership and humane treatment of dogs.`,
      },
      cardContentIcon: { color: 'primary', path: 'paw' },
    },
  ],
};

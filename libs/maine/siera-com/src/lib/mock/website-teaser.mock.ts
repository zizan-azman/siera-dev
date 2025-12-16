import { WebsiteTeaserConfig } from '@siera-dev/maine-shared';

export const WebsiteTeaserMock: WebsiteTeaserConfig = {
  headline: 'Websites',
  cards: [
    {
      title: 'Siera Global',
      cta: {
        url: 'https://siera-shelter.netlify.app/',
        type: 'ghost',
        color: 'primary',
        linkArrowText: { text: 'siera.com', textSize: 'default' },
        isRouteNavigation: false,
      },
    },
    {
      title: 'Siera Malaysia',
      cta: {
        url: 'https://siera-my.netlify.app/',
        type: 'ghost',
        color: 'primary',
        linkArrowText: { text: 'siera.my', textSize: 'default' },
        isRouteNavigation: false,
      },
    },
    {
      title: 'Joey Dog Shelter',
      cta: {
        url: 'https://joey-shelter.netlify.app/',
        type: 'ghost',
        color: 'primary',
        linkArrowText: { text: 'joey.com', textSize: 'default' },
        isRouteNavigation: false,
      },
    },
    {
      title: 'Dina Exotic Sanctuary',
      cta: {
        url: 'https://dina-sanctuary.netlify.app/',
        type: 'ghost',
        color: 'primary',
        linkArrowText: { text: 'dina.com', textSize: 'default' },
        isRouteNavigation: false,
      },
    },
  ],
};

import { WebsiteTeaserConfig } from '@siera-dev/maine-shared';

export const WebsiteTeaserMock: WebsiteTeaserConfig = {
  headline: 'Websites',
  cards: [
    {
      title: 'Siera Global',
      cta: {
        url: '/',
        type: 'ghost',
        color: 'primary',
        linkArrowText: { text: 'siera.com', textSize: 'default' },
      },
    },
    {
      title: 'Siera Malaysia',
      cta: {
        url: '/',
        type: 'ghost',
        color: 'primary',
        linkArrowText: { text: 'siera.my', textSize: 'default' },
      },
    },
    {
      title: 'Joint Venture',
      cta: {
        url: '/',
        type: 'ghost',
        color: 'primary',
        linkArrowText: { text: 'joey.com', textSize: 'default' },
      },
    },
    {
      title: 'Joint Venture',
      cta: {
        url: '/',
        type: 'ghost',
        color: 'primary',
        linkArrowText: { text: 'dina.com', textSize: 'default' },
      },
    },
  ],
};

export const WebsiteTeaserMock2: WebsiteTeaserConfig = {
  headline: 'Asia Pacific',
  cards: [
    {
      title: 'Malaysia',
      cta: {
        url: '/',
        type: 'ghost',
        color: 'primary',
        linkArrowText: { text: 'siera.my', textSize: 'default' },
      },
    },
  ],
};

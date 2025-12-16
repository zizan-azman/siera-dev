import { NewsTeaserDefaultConfig } from '@siera-dev/maine-shared';

export const MockNewsTeaserDefault: NewsTeaserDefaultConfig = {
  heading: 'Latest updates',
  news: [
    {
      cardUrl: '/',
      cardDateDay: '13',
      cardDateMonth: 'Jul',
      cardContentTitle: 'News',
      cardContentBody:
        'Dina rescues 12 exotic animals after major enforcement action in a local marketplace.',
    },
    {
      cardUrl: '/',
      cardDateDay: '1',
      cardDateMonth: 'Jul',
      cardContentTitle: 'News',
      cardContentBody:
        'Dina completes the largest habitat reconstruction for rescued reptiles this year.',
    },
    {
      cardUrl: '/',
      cardDateDay: '18',
      cardDateMonth: 'Jun',
      cardContentTitle: 'Announcement',
      cardContentBody:
        'New medical wing for exotic mammals officially begins operation.',
    },
    {
      cardUrl: '/',
      cardDateDay: '23',
      cardDateMonth: 'May',
      cardContentTitle: 'News',
      cardContentBody:
        'Dina partners with wildlife authorities to handle emergency confiscation cases.',
    },
    {
      cardUrl: '/',
      cardDateDay: '2',
      cardDateMonth: 'Apr',
      cardContentTitle: 'News',
      cardContentBody:
        'Successful rehabilitation of a rare fennec fox marks a milestone for the centre.',
    },
    {
      cardUrl: '/',
      cardDateDay: '10',
      cardDateMonth: 'Mar',
      cardContentTitle: 'Announcement',
      cardContentBody:
        'Dina announces expansion of its exotic species behavioural programme.',
    },
  ],
  cta: {
    url: '/',
    color: 'primary',
    type: 'ghost',
    linkArrowText: { text: 'See all updates', textSize: 'default' },
    isRouteNavigation: true,
  },
};

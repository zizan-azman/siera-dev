import { NewsTeaserDefaultConfig } from '@siera-dev/maine-shared';

export const MockNewsTeaserDefault: NewsTeaserDefaultConfig = {
  heading: 'Latest updates',
  news: [
    {
      cardUrl: '/',
      cardDateDay: '8',
      cardDateMonth: 'Jul',
      cardContentTitle: 'News',
      cardContentBody:
        'Joey opens a new open-playyard zone to help dogs socialize safely.',
    },
    {
      cardUrl: '/',
      cardDateDay: '26',
      cardDateMonth: 'Jun',
      cardContentTitle: 'News',
      cardContentBody:
        'Large rescue operation brings 40 neglected dogs into emergency care.',
    },
    {
      cardUrl: '/',
      cardDateDay: '4',
      cardDateMonth: 'Jun',
      cardContentTitle: 'Announcement',
      cardContentBody:
        'Joey introduces its first behavioural support hotline for new adopters.',
    },
    {
      cardUrl: '/',
      cardDateDay: '18',
      cardDateMonth: 'May',
      cardContentTitle: 'News',
      cardContentBody:
        'Therapy dog programme expands to partner with local hospitals.',
    },
    {
      cardUrl: '/',
      cardDateDay: '9',
      cardDateMonth: 'Apr',
      cardContentTitle: 'News',
      cardContentBody: 'Record adoption weekend: 34 dogs found new homes.',
    },
    {
      cardUrl: '/',
      cardDateDay: '6',
      cardDateMonth: 'Mar',
      cardContentTitle: 'Announcement',
      cardContentBody:
        'New volunteer onboarding system launched to support intake growth.',
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

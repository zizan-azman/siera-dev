import { TeaserDefaultConfig } from '@siera-dev/maine-shared';

export const MockTeaserDefault: TeaserDefaultConfig = {
  heading: `Stay connected with
      <span class="ma-color--primary">cat welfare stories</span> that matter. Get updates on rescues, sanctuary life, and our latest community initiatives.`,
  cta: {
    color: 'default',
    type: 'outline',
    url: '/',
    linkDefaultText: { text: 'Subscribe for updates', textSize: 'default' },
  },
};

export const MockTeaserDefault2: TeaserDefaultConfig = {
  heading: `Sign up and get the
      <span class="ma-color--primary">latest</span> details. You'll hear stories from our experts, and we'll update you regularly about our projects, partnerships, and more.`,
  cta: {
    color: 'default',
    type: 'outline',
    url: '/',
    linkDefaultText: { text: 'Subscribe to newsletter', textSize: 'default' },
  },
};

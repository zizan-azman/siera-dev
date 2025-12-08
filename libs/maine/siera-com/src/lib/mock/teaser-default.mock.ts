import { TeaserDefaultConfig } from '@siera-dev/maine-shared';

export const MockTeaserDefault: TeaserDefaultConfig = {
  heading: `We are a
      <span class="ma-color--primary">renewable energy</span> company
      with a clear vision to create a world that runs entirely on green energy.`,
  cta: {
    type: 'outline',
    url: '/',
    linkDefaultText: { text: 'Read more', textSize: 'default' },
  },
};

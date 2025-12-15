import { NavbarDefaultConfig } from '@siera-dev/maine-shared';

export const MockNavbarDefault: NavbarDefaultConfig = {
  navbarDefaultLogo: {
    logoPath: 'siera-my-assets/svgs/sprite.svg#siera-my',
    logoUrl: '/',
    logoAlt: 'Siera MY Logo',
    logoWidth: 133,
    logoHeight: 24,
  },
  navbarDefaultLinkList: [
    { linkText: 'Who we are', linkUrl: '/who-we-are' },
    { linkText: 'What we do', linkUrl: '/what-we-do' },
    { linkText: 'News', linkUrl: '/news' },
  ],
  navbarDefaultContentEnd: { showAllWebsites: false, showModeSwitcher: true },
};

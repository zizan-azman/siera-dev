import { NavbarDefaultConfig } from '@siera-dev/maine-shared';

export const MockNavbarDefault: NavbarDefaultConfig = {
  navbarDefaultLogo: {
    logoPath: 'maine-assets/svgs/icon/sprite.svg#siera',
    logoUrl: '/',
    logoAlt: 'Siera Logo',
    logoWidth: 92,
    logoHeight: 24,
  },
  navbarDefaultLinkList: [
    { linkText: 'Who we are', linkUrl: '/who-we-are' },
    { linkText: 'What we do', linkUrl: '/what-we-do' },
    { linkText: 'News', linkUrl: '/news' },
  ],
  navbarDefaultContentEnd: { showAllWebsites: true, showModeSwitcher: true },
};

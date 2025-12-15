import { NavbarDefaultConfig } from '@siera-dev/maine-shared';

export const MockNavbarDefault: NavbarDefaultConfig = {
  navbarDefaultLogo: {
    logoPath: 'maine-assets/svgs/icon/sprite.svg#siera',
    logoUrl: '/',
    logoAlt: 'Dina Exotic Animal Sanctuary Logo',
    logoWidth: 92,
    logoHeight: 24,
  },
  navbarDefaultLinkList: [
    { linkText: 'Who we are', linkUrl: '/who-we-are' },
    { linkText: 'What we do', linkUrl: '/what-we-do' },
    { linkText: 'News', linkUrl: '/news' },
  ],
  navbarDefaultContentEnd: { showAllWebsites: false, showModeSwitcher: true },
};

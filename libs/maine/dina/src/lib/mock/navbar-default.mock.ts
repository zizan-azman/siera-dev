import { NavbarDefaultConfig } from '@siera-dev/maine-shared';

export const MockNavbarDefault: NavbarDefaultConfig = {
  navbarDefaultLogo: {
    logoPath: 'dina-assets/svgs/sprite.svg#dina',
    logoUrl: '/',
    logoAlt: 'Dina Exotic Animal Sanctuary Logo',
    logoWidth: 87,
    logoHeight: 38,
  },
  navbarDefaultLinkList: [
    { linkText: 'Who we are', linkUrl: '/who-we-are' },
    { linkText: 'What we do', linkUrl: '/what-we-do' },
    { linkText: 'News', linkUrl: '/news' },
  ],
  navbarDefaultContentEnd: { showAllWebsites: false, showModeSwitcher: true },
};

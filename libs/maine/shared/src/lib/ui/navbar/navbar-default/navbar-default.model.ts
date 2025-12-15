export interface NavbarDefaultLogo {
  logoPath: string;
  logoUrl: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
}

export interface NavbarDefaultLink {
  linkText: string;
  linkUrl: string;
}
export interface NavbarDefaultContentEnd {
  showModeSwitcher: boolean;
  showAllWebsites: boolean;
}

export interface NavbarDefaultConfig {
  navbarDefaultLogo: NavbarDefaultLogo;
  navbarDefaultLinkList: NavbarDefaultLink[];
  navbarDefaultContentEnd: NavbarDefaultContentEnd;
}

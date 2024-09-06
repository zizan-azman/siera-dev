export interface LinkDefaultText {
  show: boolean;
  text: string;
  textSize: 'default' | 'small';
}
export interface LinkDefaultPrefixIcon {
  show: boolean;
  iconPath?: string;
}

export interface LinkDefaultSuffixIcon {
  show: boolean;
  arrow?: boolean;
  iconPath?: string;
}

export interface LinkDefaultConfig {
  // color: 'primary' | 'secondary' | 'cool';
  type: 'outline' | 'ghost' | 'fill';
  url: string;
  linkDefaultText?: LinkDefaultText;
  linkDefaultPrefixIcon?: LinkDefaultPrefixIcon;
  linkDefaultSuffixIcon?: LinkDefaultSuffixIcon;
}

export interface LinkDefaultText {
  show: boolean;
  text: string;
  textSize: 'default' | 'small';
}
export interface LinkDefaultPrefixIcon {
  show: boolean;
  iconPath: string;
}

export interface LinkDefaultSuffixIcon {
  show: boolean;
  arrow: boolean;
  iconPath: string;
}

export interface LinkDefaultConfig {
  type: 'outline' | 'ghost' | 'fill';
  color: 'primary' | 'secondary' | 'cool';
  linkDefaultText: LinkDefaultText;
  linkDefaultPrefixIcon: LinkDefaultPrefixIcon;
  linkDefaultSuffixIcon: LinkDefaultSuffixIcon;
}

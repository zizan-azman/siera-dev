export interface LinkDefaultText {
  text: string;
  textSize: 'default' | 'small';
}
export interface LinkDefaultPrefixIcon {
  iconPath: string;
}

export interface LinkDefaultSuffixIcon {
  iconPath: string;
}

export interface LinkDefaultConfig {
  color: 'primary' | 'default';
  url: string;
  type: 'fill' | 'outline' | 'ghost';
  linkDefaultText?: LinkDefaultText;
  linkDefaultPrefixIcon?: LinkDefaultPrefixIcon;
  linkDefaultSuffixIcon?: LinkDefaultSuffixIcon;
}

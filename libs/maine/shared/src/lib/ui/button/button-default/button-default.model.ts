export interface ButtonDefaultText {
  show: boolean;
  text: string;
  textSize: 'default' | 'small';
}
export interface ButtonDefaultPrefixIcon {
  show: boolean;
  iconPath: string;
}

export interface ButtonDefaultSuffixIcon {
  show: boolean;
  arrow: boolean;
  iconPath: string;
}

export interface ButtonDefaultConfig {
  type: 'outline' | 'ghost' | 'fill';
  color: 'primary' | 'secondary' | 'cool';
  buttonDefaultText: ButtonDefaultText;
  buttonDefaultPrefixIcon: ButtonDefaultPrefixIcon;
  buttonDefaultSuffixIcon: ButtonDefaultSuffixIcon;
}

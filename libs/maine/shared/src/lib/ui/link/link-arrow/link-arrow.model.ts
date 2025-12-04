export interface LinkArrowText {
  text: string;
  textSize: 'default' | 'small';
}

export interface LinkArrowConfig {
  url: string;
  type: 'fill' | 'outline' | 'ghost';
  color: 'default' | 'primary';
  linkArrowText: LinkArrowText;
}

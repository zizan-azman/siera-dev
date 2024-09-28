export interface LayoutBackgroundContentImage {
  url: string;
}

export interface LayoutBackgroundContentConfig {
  bgColor: 'default' | 'subtle';
  spacing: 'small' | 'medium';
  image?: LayoutBackgroundContentImage;
}

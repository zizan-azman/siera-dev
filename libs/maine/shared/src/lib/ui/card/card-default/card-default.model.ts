import { LinkDefaultConfig } from '../../link/link-default/link-default.model';

export interface CardDefaultImage {
  path: string;
  alt: string;
  width: string;
  height: string;
  priority: 'high' | 'low';
}
export interface CardContentTitle {
  text: string;
}

export interface CardContentBody {
  text: string;
}

export interface CardContentIcon {
  path: string;
  bgColor: string;
  color: string;
}

export interface CardDefaultConfig {
  cardImage: CardDefaultImage;
  cardContentTitle: CardContentTitle;
  cardContentBody: CardContentBody;
  cardContentIcon?: CardContentIcon;
  cardContentCTA?: LinkDefaultConfig;
}

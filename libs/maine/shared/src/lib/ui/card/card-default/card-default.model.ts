import { LinkArrowConfig } from '../../link/link-arrow/link-arrow.model';
import { LinkDefaultConfig } from '../../link/link-default/link-default.model';

export interface CardDefaultImage {
  path: string;
  alt: string;
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
  cardType: 'default' | 'ghost';
  cardImage: CardDefaultImage;
  cardContentTitle: CardContentTitle;
  cardContentBody: CardContentBody;
  cardContentIcon?: CardContentIcon;
  cardContentCTA?: LinkDefaultConfig | LinkArrowConfig;
}

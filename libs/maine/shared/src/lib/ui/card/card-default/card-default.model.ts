import { IconChipConfig } from '../../icon/icon-chip/icon-chip.model';
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

export interface CardDefaultConfig {
  cardType: 'default' | 'ghost';
  cardURL?: string;
  cardImage: CardDefaultImage;
  cardContentTitle: CardContentTitle;
  cardContentBody: CardContentBody;
  cardContentIcon?: IconChipConfig;
  cardContentCTA?: LinkDefaultConfig | LinkArrowConfig;
}

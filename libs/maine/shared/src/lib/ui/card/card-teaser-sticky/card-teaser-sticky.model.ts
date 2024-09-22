import { LinkDefaultConfig } from '../../link/link-default/link-default.model';
import { CardDefaultConfig } from '../card-default/card-default.model';

export interface CardTeaserStickyConfig {
  heading: string;
  cta: LinkDefaultConfig;
  cardsType: 'default' | 'ghost';
  cards: CardDefaultConfig[];
}

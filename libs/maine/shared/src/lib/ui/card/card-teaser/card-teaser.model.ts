import { CardDefaultConfig } from '../card-default/card-default.model';

export interface CardTeaserConfig {
  heading?: string;
  cardsType: 'default' | 'ghost';
  cards: CardDefaultConfig[];
}

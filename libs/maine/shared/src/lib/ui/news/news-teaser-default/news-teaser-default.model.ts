import { CardDateConfig } from '../../card/card-date/card-date.model';
import { LinkArrowConfig } from '../../link/link-arrow/link-arrow.model';

export interface NewsTeaserDefaultConfig {
  heading: string;
  news: CardDateConfig[];
  cta: LinkArrowConfig;
}

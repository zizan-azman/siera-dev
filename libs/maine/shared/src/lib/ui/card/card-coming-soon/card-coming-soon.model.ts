import { LinkArrowConfig } from '../../link/link-arrow/link-arrow.model';
import { LinkDefaultConfig } from '../../link/link-default/link-default.model';

export interface CardComingSoonConfig {
  headlineText: string;
  ctaArrow?: LinkArrowConfig;
  ctaDefault?: LinkDefaultConfig;
}

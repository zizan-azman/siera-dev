import { LinkArrowConfig } from '../../link/link-arrow/link-arrow.model';
import { LinkDefaultConfig } from '../../link/link-default/link-default.model';

export interface TeaserImageConfig {
  heading: string;
  ctaDefault?: LinkDefaultConfig;
  ctaArrow?: LinkArrowConfig;
  imgURL: string;
  imgAlt: string;
  imgPriority?: 'low' | 'high';
  imgOnLeft: boolean;
}

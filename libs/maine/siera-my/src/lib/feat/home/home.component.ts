import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardTeaserComponent,
  CardTeaserConfig,
  CardTeaserStickyComponent,
  CardTeaserStickyConfig,
  HeroDefaultComponent,
  HeroDefaultConfig,
  LayoutBackgroundContentComponent,
  LayoutDefaultComponent,
  LayoutImageComponent,
  LayoutImageConfig,
  NewsTeaserDefaultComponent,
  NewsTeaserDefaultConfig,
  TeaserDefaultComponent,
  TeaserDefaultConfig,
} from '@siera-dev/maine-shared';
import { MockCardTeasers } from '../../mock/card-teasers.mock';
import { MockCardGhostTeaser } from '../../mock/card-ghost-teaser.mock';
import { MockHeroDefault } from '../../mock/hero-default.mock';
import { MockCardTeaserSticky } from '../../mock/card-teaser-sticky.mock';
import { MockNewsTeaserDefault } from '../../mock/news-teaser-default.mock';
import { MockLayoutImage } from '../../mock/layout-image.mock';
import { MockTeaserDefault } from '../../mock/teaser-default.mock';

@Component({
  selector: 'siera-my-home',
  standalone: true,
  imports: [
    CommonModule,
    CardTeaserComponent,
    CardTeaserStickyComponent,
    HeroDefaultComponent,
    LayoutDefaultComponent,
    LayoutImageComponent,
    LayoutBackgroundContentComponent,
    NewsTeaserDefaultComponent,
    TeaserDefaultComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  heroDefaultMockData: HeroDefaultConfig = MockHeroDefault;
  cardTeasersMockData: CardTeaserConfig[] = MockCardTeasers;
  cardGhostTeaserMockData: CardTeaserConfig = MockCardGhostTeaser;
  cardTeaserStickyMockData: CardTeaserStickyConfig = MockCardTeaserSticky;
  layoutImageMockData: LayoutImageConfig = MockLayoutImage;
  newsTeaserDefaultMockData: NewsTeaserDefaultConfig = MockNewsTeaserDefault;
  teaserDefaultMockData: TeaserDefaultConfig = MockTeaserDefault;
}

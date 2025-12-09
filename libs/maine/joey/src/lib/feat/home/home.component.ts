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
  NewsTeaserDefaultComponent,
  TeaserDefaultComponent,
} from '@siera-dev/maine-shared';
import { MockHeroDefault } from '../../mock/hero-default.mock';
import { MockCardTeasers } from '../../mock/card-teasers.mock';
import { MockCardTeaserSticky } from '../../mock/card-teaser-sticky.mock';

@Component({
  selector: 'joey-home',
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
  // cardGhostTeaserMockData: CardTeaserConfig = MockCardGhostTeaser;
  cardTeaserStickyMockData: CardTeaserStickyConfig = MockCardTeaserSticky;
  // layoutImageMockData: LayoutImageConfig = MockLayoutImage;
  // newsTeaserDefaultMockData: NewsTeaserDefaultConfig = MockNewsTeaserDefault;
  // teaserDefaultMockData: TeaserDefaultConfig = MockTeaserDefault;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardTeaserComponent,
  CardTeaserConfig,
  CardTeaserStickyComponent,
  HeroDefaultComponent,
  HeroDefaultConfig,
  LayoutBackgroundContentComponent,
  LayoutDefaultComponent,
  LayoutImageComponent,
  NewsTeaserDefaultComponent,
  TeaserDefaultComponent,
} from '@siera-dev/maine-shared';
import { MockCardTeasers } from '../../mock/card-teasers.mock';
import { MockCardGhostTeaser } from '../../mock/card-ghost-teaser.mock';
import { MockHeroDefault } from '../../mock/hero-default.mock';

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
}

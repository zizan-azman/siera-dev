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
} from '@siera-dev/maine-shared';
import { HeroConfig } from '../../mock/hero-default.mock';
import { CardTeasersMock } from '../../mock/card-teasers.mock';
import { CardGhostTeaserMock } from '../../mock/card-ghost-teaser.mock';

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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  heroDefaultConfig: HeroDefaultConfig = HeroConfig;
  cardTeasersConfig: CardTeaserConfig[] = CardTeasersMock;
  cardGhostTeaserConfig: CardTeaserConfig = CardGhostTeaserMock;
}

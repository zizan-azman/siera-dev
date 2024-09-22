import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardDateComponent,
  CardTeaserComponent,
  CardTeaserConfig,
  CardTeaserStickyComponent,
  HeroDefaultComponent,
  HeroDefaultConfig,
  LayoutDefaultComponent,
  LayoutImageComponent,
} from '@siera-dev/maine-shared';
import { HeroConfig } from '../../mock/hero-default.mock';
import { CardTeasersMock } from '../../mock/card-teasers.mock';

@Component({
  selector: 'siera-my-home',
  standalone: true,
  imports: [
    CommonModule,
    CardDateComponent,
    CardTeaserComponent,
    CardTeaserStickyComponent,
    HeroDefaultComponent,
    LayoutDefaultComponent,
    LayoutImageComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  heroDefaultConfig: HeroDefaultConfig = HeroConfig;
  cardTeasersConfig: CardTeaserConfig[] = CardTeasersMock;
}

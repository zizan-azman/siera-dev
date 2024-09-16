import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonDefaultComponent,
  CardDefaultComponent,
  CardTeaserComponent,
  CardTeaserConfig,
  HeroDefaultComponent,
  HeroDefaultConfig,
  LayoutDefaultComponent,
} from '@siera-dev/maine-shared';
import { HeroConfig } from '../../mock/hero-default.mock';
import { CardTeasersMock } from '../../mock/card-teasers.mock';

@Component({
  selector: 'siera-my-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonDefaultComponent,
    LayoutDefaultComponent,
    HeroDefaultComponent,
    CardDefaultComponent,
    CardTeaserComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  heroDefaultConfig: HeroDefaultConfig = HeroConfig;
  cardTeasersConfig: CardTeaserConfig[] = CardTeasersMock;
}

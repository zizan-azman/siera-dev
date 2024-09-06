import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonDefaultComponent,
  HeroDefaultComponent,
  HeroDefaultConfig,
  LayoutDefaultComponent,
} from '@siera-dev/maine-shared';
import { HeroConfig } from '../../mock/hero-default.mock';

@Component({
  selector: 'siera-my-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonDefaultComponent,
    LayoutDefaultComponent,
    HeroDefaultComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  heroDefaultConfig: HeroDefaultConfig = HeroConfig;
}

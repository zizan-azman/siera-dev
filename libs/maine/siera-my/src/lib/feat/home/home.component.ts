import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonDefaultComponent,
  HeroDefaultComponent,
  LayoutDefaultComponent,
} from '@siera-dev/maine-shared';

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
export class HomeComponent {}

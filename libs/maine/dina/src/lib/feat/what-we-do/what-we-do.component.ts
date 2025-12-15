import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComingSoonComponent,
  CardComingSoonConfig,
  LayoutDefaultComponent,
} from '@siera-dev/maine-shared';
import { MockCardComingSoon } from '../../mock/card-coming-soon.mock';

@Component({
  selector: 'dina-what-we-do',
  standalone: true,
  imports: [CommonModule, LayoutDefaultComponent, CardComingSoonComponent],
  templateUrl: './what-we-do.component.html',
  styleUrl: './what-we-do.component.scss',
})
export class WhatWeDoComponent {
  cardComingSoonMockData: CardComingSoonConfig = MockCardComingSoon;
}

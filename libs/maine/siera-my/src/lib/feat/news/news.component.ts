import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComingSoonComponent,
  CardComingSoonConfig,
  LayoutDefaultComponent,
} from '@siera-dev/maine-shared';
import { MockCardComingSoon } from '../../mock/card-coming-soon.mock';

@Component({
  selector: 'siera-my-news',
  standalone: true,
  imports: [CommonModule, LayoutDefaultComponent, CardComingSoonComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  cardComingSoonMockData: CardComingSoonConfig = MockCardComingSoon;
}

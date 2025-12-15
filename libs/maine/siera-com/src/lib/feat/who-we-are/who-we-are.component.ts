import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComingSoonComponent,
  CardComingSoonConfig,
  LayoutDefaultComponent,
} from '@siera-dev/maine-shared';
import { MockCardComingSoon } from '../../mock/card-coming-soon.mock';

@Component({
  selector: 'siera-com-who-we-are',
  standalone: true,
  imports: [CommonModule, LayoutDefaultComponent, CardComingSoonComponent],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.scss',
})
export class WhoWeAreComponent {
  cardComingSoonMockData: CardComingSoonConfig = MockCardComingSoon;
}

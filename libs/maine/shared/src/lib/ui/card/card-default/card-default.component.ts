import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LinkDefaultComponent } from '../../link/link-default/link-default.component';
import { CardDefaultConfig } from './card-default.model';
import { LinkArrowComponent } from '../../link/link-arrow/link-arrow.component';
import { IconChipComponent } from '../../icon/icon-chip/icon-chip.component';

@Component({
  selector: 'maine-card-default',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    LinkDefaultComponent,
    LinkArrowComponent,
    IconChipComponent,
  ],
  templateUrl: './card-default.component.html',
  styleUrl: './card-default.component.scss',
})
export class CardDefaultComponent {
  cardDefaultPlaceholder: CardDefaultConfig = {
    cardType: 'default',
    cardImage: {
      path: 'maine-assets/images/siera-2.png',
      alt: 'Inside Siera Animal Shelter',
      priority: 'low',
    },
    cardContentTitle: { text: 'Comfy and spacious indoor space' },
    cardContentBody: {
      text: `Siera is equipped with spacious and comfortable indoor shelter.`,
    },
  };

  @Input() cardDefaultConfig: CardDefaultConfig = this.cardDefaultPlaceholder;
}

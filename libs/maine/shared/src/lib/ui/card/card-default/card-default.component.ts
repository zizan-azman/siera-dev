import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LinkDefaultComponent } from '../../link/link-default/link-default.component';
import { CardDefaultConfig } from './card-default.model';
import { LinkArrowComponent } from '../../link/link-arrow/link-arrow.component';

@Component({
  selector: 'maine-card-default',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    LinkDefaultComponent,
    LinkArrowComponent,
  ],
  templateUrl: './card-default.component.html',
  styleUrl: './card-default.component.scss',
})
export class CardDefaultComponent {
  @Input() cardDefaultConfig!: CardDefaultConfig;
}

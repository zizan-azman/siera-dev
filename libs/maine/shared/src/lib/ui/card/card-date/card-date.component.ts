import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CardDateConfig } from './card-date.model';

@Component({
  selector: 'maine-card-date',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-date.component.html',
  styleUrl: './card-date.component.scss',
})
export class CardDateComponent {
  cardDatePlaceholder: CardDateConfig = {
    cardUrl: '/',
    cardDateDay: '14',
    cardDateMonth: 'Jun',
    cardContentTitle: 'News',
    cardContentBody:
      'Offshore wind leaders and the Carbon Trust to develop first industry-backed method for calculating life cycle carbon footprints',
  };

  @Input() cardDateData: CardDateConfig = this.cardDatePlaceholder;
}

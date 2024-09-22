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
    cardUrl: '',
    cardDate: '',
    cardContentTitle: { text: 'News' },
    cardContentBody: {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore inventore iste facere quasi mollitia, iure harum excepturi, aspernatur ipsam, reiciendis error repudiandae iusto maiores.',
    },
  };

  @Input() cardDateConfig: CardDateConfig = this.cardDatePlaceholder;
}

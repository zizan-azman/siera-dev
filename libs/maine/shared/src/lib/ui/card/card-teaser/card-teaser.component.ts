import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDefaultComponent } from '../card-default/card-default.component';
import { CardTeaserConfig } from './card-teaser.model';

@Component({
  selector: 'maine-card-teaser',
  standalone: true,
  imports: [CommonModule, CardDefaultComponent],
  templateUrl: './card-teaser.component.html',
  styleUrl: './card-teaser.component.scss',
})
export class CardTeaserComponent implements OnInit {
  cardTeaserPlaceholder: CardTeaserConfig = {
    heading: 'This is heading',
    cardsType: 'default',
    cards: [
      {
        cardType: 'default',
        cardImage: {
          path: 'maine-assets/images/siera-2.png',
          alt: 'Test',
          priority: 'low',
        },
        cardContentTitle: { text: 'Title' },
        cardContentBody: {
          text: `Siera is equipped with spacious and comfortable indoor shelter.`,
        },
      },
      {
        cardType: 'default',
        cardImage: {
          path: 'maine-assets/images/siera-1.png',
          alt: 'Test',
          priority: 'low',
        },
        cardContentTitle: { text: 'New' },
        cardContentBody: {
          text: `Beautiful.`,
        },
      },
    ],
  };

  @Input() cardTeaserConfig: CardTeaserConfig = this.cardTeaserPlaceholder;

  ngOnInit() {
    this.setCardType();
  }

  setCardTeaserContainer() {
    if (this.cardTeaserConfig.cards.length === 4) {
      return 'wide';
    } else if (
      this.cardTeaserConfig.cards.length > 1 &&
      this.cardTeaserConfig.cards.length <= 3
    ) {
      return 'narrow';
    } else {
      return 'narrow';
    }
  }

  setCardType() {
    this.cardTeaserConfig.cards.forEach((card) => {
      card.cardType = this.cardTeaserConfig.cardsType;
    });
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { CardTeaserStickyConfig } from './card-teaser-sticky.model';
import { LinkDefaultComponent } from '../../link/link-default/link-default.component';
import { CardDefaultComponent } from '../card-default/card-default.component';

@Component({
  selector: 'maine-card-teaser-sticky',
  standalone: true,
  imports: [CommonModule, LinkDefaultComponent, CardDefaultComponent],
  templateUrl: './card-teaser-sticky.component.html',
  styleUrl: './card-teaser-sticky.component.scss',
})
export class CardTeaserStickyComponent {
  cardTeaserStickyPlaceholder: CardTeaserStickyConfig = {
    heading: `We are a
      <span class="ma-color--primary">renewable energy</span> company
      with a clear vision to create a world that runs entirely on green energy.`,
    cta: {
      type: 'outline',
      url: '/',
      linkDefaultText: { text: 'Read more', textSize: 'default' },
    },
    cardsType: 'default',
    cards: [
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-2.png',
          alt: 'Test',
          priority: 'low',
        },
        cardContentTitle: { text: 'Title' },
        cardContentBody: {
          text: `Siera is equipped with spacious and comfortable indoor shelter.`,
        },
        cardContentIcon: { color: 'primary', path: 'paw' },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-1.png',
          alt: 'Test',
          priority: 'low',
        },
        cardContentTitle: { text: 'New' },
        cardContentBody: {
          text: `Beautiful.`,
        },
        cardContentIcon: { color: 'primary', path: 'paw' },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-2.png',
          alt: 'Test',
          priority: 'low',
        },
        cardContentTitle: { text: 'Title' },
        cardContentBody: {
          text: `Siera is equipped with spacious and comfortable indoor shelter.`,
        },
        cardContentIcon: { color: 'primary', path: 'paw' },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-1.png',
          alt: 'Test',
          priority: 'low',
        },
        cardContentTitle: { text: 'New' },
        cardContentBody: {
          text: `Beautiful.`,
        },
        cardContentIcon: { color: 'primary', path: 'paw' },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-2.png',
          alt: 'Test',
          priority: 'low',
        },
        cardContentTitle: { text: 'Title' },
        cardContentBody: {
          text: `Siera is equipped with spacious and comfortable indoor shelter.`,
        },
        cardContentIcon: { color: 'primary', path: 'paw' },
      },
      {
        cardType: 'default',
        cardURL: '/',
        cardImage: {
          path: 'maine-assets/images/siera-1.png',
          alt: 'Test',
          priority: 'low',
        },
        cardContentTitle: { text: 'New' },
        cardContentBody: {
          text: `Beautiful.`,
        },
        cardContentIcon: { color: 'primary', path: 'paw' },
      },
    ],
  };
  @Input() cardTeaserStickyConfig: CardTeaserStickyConfig =
    this.cardTeaserStickyPlaceholder;
  constructor(private _sanitizer: DomSanitizer) {}
  safeContentEndText() {
    return this._sanitizer.bypassSecurityTrustHtml(
      this.cardTeaserStickyConfig.heading
    );
  }
}

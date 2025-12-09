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
    heading: `We provide countries and companies with green energy. Find out about the different
      <span class="ma-color--primary">renewable energy technologies</span>, their benefits, projected growth, and locations.`,
    cta: {
      type: 'outline',
      url: '/',
      linkDefaultText: {
        text: 'Renewable energy solutions',
        textSize: 'default',
      },
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
        cardContentTitle: { text: 'Offshore wind energy' },
        cardContentBody: {
          text: `Using the wind to create electricity in turbines built on the seabed.`,
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
        cardContentTitle: { text: 'Floating offshore wind' },
        cardContentBody: {
          text: `Mooring wind turbines to the seabed in deeper waters.`,
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
        cardContentTitle: { text: 'Power-to-X' },
        cardContentBody: {
          text: `Renewable hydrogen and other green fuels.`,
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
        cardContentTitle: { text: 'Onshore wind energy' },
        cardContentBody: {
          text: `Generating power from wind turbines on land.`,
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
        cardContentTitle: { text: 'Solar and Storage' },
        cardContentBody: {
          text: `Using solar power and batteries to maintain a stable electric grid.`,
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
        cardContentTitle: { text: 'Biomass energy' },
        cardContentBody: {
          text: `Burning organic matter for Danish heating and backup power.`,
        },
        cardContentIcon: { color: 'primary', path: 'paw' },
      },
    ],
  };
  @Input() cardTeaserStickyData: CardTeaserStickyConfig =
    this.cardTeaserStickyPlaceholder;
  constructor(private _sanitizer: DomSanitizer) {}
  safeContentEndText() {
    return this._sanitizer.bypassSecurityTrustHtml(
      this.cardTeaserStickyData.heading
    );
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkArrowComponent } from '../../link/link-arrow/link-arrow.component';
import { CardComingSoonConfig } from './card-coming-soon.model';
import { LinkDefaultComponent } from '../../link/link-default/link-default.component';

@Component({
  selector: 'maine-card-coming-soon',
  standalone: true,
  imports: [CommonModule, LinkArrowComponent, LinkDefaultComponent],
  templateUrl: './card-coming-soon.component.html',
  styleUrl: './card-coming-soon.component.scss',
})
export class CardComingSoonComponent {
  cardComingSoonPlaceholder: CardComingSoonConfig = {
    headlineText: 'Coming Soon',
    ctaDefault: {
      color: 'primary',
      linkDefaultText: { text: 'Back to home', textSize: 'default' },
      url: '/',
      type: 'ghost',
    },
  };

  @Input() cardComingSoonData: CardComingSoonConfig =
    this.cardComingSoonPlaceholder;
}

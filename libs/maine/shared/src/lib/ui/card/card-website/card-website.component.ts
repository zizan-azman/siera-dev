import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkArrowComponent } from '../../link/link-arrow/link-arrow.component';
import { CardWebsiteConfig } from './card-website.model';

@Component({
  selector: 'maine-card-website',
  standalone: true,
  imports: [CommonModule, LinkArrowComponent],
  templateUrl: './card-website.component.html',
  styleUrl: './card-website.component.scss',
})
export class CardWebsiteComponent {
  cardWebsitePlaceholder: CardWebsiteConfig = {
    title: 'Global Website',
    cta: {
      type: 'ghost',
      color: 'primary',
      url: '/',
      linkArrowText: { text: 'siera.com', textSize: 'default' },
      isRouteNavigation: true,
    },
  };

  @Input() cardWebsiteData: CardWebsiteConfig = this.cardWebsitePlaceholder;
}

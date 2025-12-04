import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWebsiteComponent } from '../../card/card-website/card-website.component';
import { WebsiteTeaserConfig } from './website-teaser.model';

@Component({
  selector: 'maine-website-teaser',
  standalone: true,
  imports: [CommonModule, CardWebsiteComponent],
  templateUrl: './website-teaser.component.html',
  styleUrl: './website-teaser.component.scss',
})
export class WebsiteTeaserComponent {
  websiteTeaserPlaceholder: WebsiteTeaserConfig = {
    headline: 'International',
    cards: [
      {
        title: 'Global Website',
        cta: {
          type: 'ghost',
          color: 'primary',
          url: '/',
          linkArrowText: { text: 'siera.com', textSize: 'default' },
        },
      },
    ],
  };
  @Input() websiteTeaserConfig: WebsiteTeaserConfig =
    this.websiteTeaserPlaceholder;
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsTeaserDefaultConfig } from './news-teaser-default.model';
import { CardDateComponent } from '../../card/card-date/card-date.component';
import { LinkArrowComponent } from '../../link/link-arrow/link-arrow.component';

@Component({
  selector: 'maine-news-teaser-default',
  standalone: true,
  imports: [CommonModule, CardDateComponent, LinkArrowComponent],
  templateUrl: './news-teaser-default.component.html',
  styleUrl: './news-teaser-default.component.scss',
})
export class NewsTeaserDefaultComponent {
  newsTeaserDefaultPlaceholder: NewsTeaserDefaultConfig = {
    heading: 'This is heading',
    news: [
      {
        cardUrl: '/',
        cardDateDay: '14',
        cardDateMonth: 'Jun',
        cardContentTitle: 'News',
        cardContentBody:
          'Offshore wind leaders and the Carbon Trust to develop first industry-backed method for calculating life cycle carbon footprints',
      },
      {
        cardUrl: '/',
        cardDateDay: '14',
        cardDateMonth: 'Jun',
        cardContentTitle: 'News',
        cardContentBody:
          'Offshore wind leaders and the Carbon Trust to develop first industry-backed method for calculating life cycle carbon footprints',
      },
      {
        cardUrl: '/',
        cardDateDay: '14',
        cardDateMonth: 'Jun',
        cardContentTitle: 'News',
        cardContentBody:
          'Offshore wind leaders and the Carbon Trust to develop first industry-backed method for calculating life cycle carbon footprints',
      },
      {
        cardUrl: '/',
        cardDateDay: '14',
        cardDateMonth: 'Jun',
        cardContentTitle: 'News',
        cardContentBody:
          'Offshore wind leaders and the Carbon Trust to develop first industry-backed method for calculating life cycle carbon footprints',
      },
    ],
    cta: {
      url: '/',
      color: 'default',
      type: 'ghost',
      linkArrowText: { text: 'Read more', textSize: 'default' },
      isRouteNavigation: true,
    },
  };

  @Input() newsTeaserDefaultData: NewsTeaserDefaultConfig =
    this.newsTeaserDefaultPlaceholder;
}

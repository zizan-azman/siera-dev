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
        cardDate: 'test',
        cardContentTitle: { text: 'News' },
        cardContentBody: { text: 'This is a body.' },
      },
      {
        cardUrl: '/',
        cardDate: 'test',
        cardContentTitle: { text: 'News' },
        cardContentBody: { text: 'This is a body.' },
      },
      {
        cardUrl: '/',
        cardDate: 'test',
        cardContentTitle: { text: 'News' },
        cardContentBody: { text: 'This is a body.' },
      },
      {
        cardUrl: '/',
        cardDate: 'test',
        cardContentTitle: { text: 'News' },
        cardContentBody: { text: 'This is a body.' },
      },
      {
        cardUrl: '/',
        cardDate: 'test',
        cardContentTitle: { text: 'News' },
        cardContentBody: { text: 'This is a body.' },
      },
      {
        cardUrl: '/',
        cardDate: 'test',
        cardContentTitle: { text: 'News' },
        cardContentBody: { text: 'This is a body.' },
      },
    ],
    cta: {
      url: '/',
      type: 'ghost',
      linkArrowText: { text: 'Read more', textSize: 'default' },
    },
  };

  @Input() newsTeaserDefaultConfig: NewsTeaserDefaultConfig =
    this.newsTeaserDefaultPlaceholder;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LayoutDefaultComponent,
  WebsiteTeaserComponent,
  WebsiteTeaserConfig,
} from '@siera-dev/maine-shared';
import {
  WebsiteTeaserMock,
  WebsiteTeaserMock2,
} from '../../mock/website-teaser.mock';

@Component({
  selector: 'siera-my-all-websites',
  standalone: true,
  imports: [CommonModule, WebsiteTeaserComponent, LayoutDefaultComponent],
  templateUrl: './all-websites.component.html',
  styleUrl: './all-websites.component.scss',
})
export class AllWebsitesComponent {
  websiteTeaserData: WebsiteTeaserConfig = WebsiteTeaserMock;
  websiteTeaserData2: WebsiteTeaserConfig = WebsiteTeaserMock2;
}

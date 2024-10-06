import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { TeaserDefaultConfig } from './teaser-default.model';
import { LinkDefaultComponent } from '../../link/link-default/link-default.component';

@Component({
  selector: 'maine-teaser-default',
  standalone: true,
  imports: [CommonModule, LinkDefaultComponent],
  templateUrl: './teaser-default.component.html',
  styleUrl: './teaser-default.component.scss',
})
export class TeaserDefaultComponent {
  teaserDefaultPlaceholder: TeaserDefaultConfig = {
    heading: `We are a
      <span class="ma-color--primary">renewable energy</span> company
      with a clear vision to create a world that runs entirely on green energy.`,
    cta: {
      type: 'outline',
      url: '/',
      linkDefaultText: { text: 'Read more', textSize: 'default' },
    },
  };
  @Input() teaserDefaultConfig: TeaserDefaultConfig =
    this.teaserDefaultPlaceholder;
  constructor(private _sanitizer: DomSanitizer) {}
  safeContentEndText() {
    return this._sanitizer.bypassSecurityTrustHtml(
      this.teaserDefaultConfig.heading
    );
  }
}

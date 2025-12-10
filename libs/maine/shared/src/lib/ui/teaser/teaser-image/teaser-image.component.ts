import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkDefaultComponent } from '../../link/link-default/link-default.component';
import { LinkArrowComponent } from '../../link/link-arrow/link-arrow.component';
import { TeaserImageConfig } from './teaser-image.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'maine-teaser-image',
  standalone: true,
  imports: [CommonModule, LinkDefaultComponent, LinkArrowComponent],
  templateUrl: './teaser-image.component.html',
  styleUrl: './teaser-image.component.scss',
})
export class TeaserImageComponent {
  teaserImagePlaceholder: TeaserImageConfig = {
    heading: `We are a
        <span class="ma-color--primary">renewable energy</span> company
        with a clear vision to create a world that runs entirely on green energy.`,
    ctaDefault: {
      color: 'default',
      type: 'fill',
      url: '/',
      linkDefaultText: { text: 'Read more', textSize: 'default' },
    },
    imgURL: 'maine-assets/images/siera-1.png',
    imgAlt: 'Teaser Image Placeholder',
    imgOnLeft: true,
  };
  @Input() teaserImageData: TeaserImageConfig = this.teaserImagePlaceholder;
  constructor(private _sanitizer: DomSanitizer) {}
  safeContentEndText() {
    return this._sanitizer.bypassSecurityTrustHtml(
      this.teaserImageData.heading
    );
  }
}

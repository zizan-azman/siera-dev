import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LinkDefaultComponent } from '../../link/link-default/link-default.component';
import { HeroDefaultConfig } from './hero-default.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'maine-hero-default',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, LinkDefaultComponent],
  templateUrl: './hero-default.component.html',
  styleUrl: './hero-default.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeroDefaultComponent {
  @Input() heroDefaultConfig!: HeroDefaultConfig;
  constructor(private _sanitizer: DomSanitizer) {}

  safeHeadingText() {
    return this._sanitizer.bypassSecurityTrustHtml(
      this.heroDefaultConfig.heroHeadingText
    );
  }
  safeContentEndText() {
    return this._sanitizer.bypassSecurityTrustHtml(
      this.heroDefaultConfig.heroContentEnd.contentText
    );
  }
}

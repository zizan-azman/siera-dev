import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutBackgroundContentConfig } from './layout-background-content.model';

@Component({
  selector: 'maine-layout-background-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout-background-content.component.html',
  styleUrl: './layout-background-content.component.scss',
})
export class LayoutBackgroundContentComponent {
  layoutBackgroundContentBgColorPlaceholder: LayoutBackgroundContentConfig['bgColor'] =
    'default';
  layoutBackgroundContentSpacingPlaceholder: LayoutBackgroundContentConfig['spacing'] =
    'small';

  @Input() bgColor: LayoutBackgroundContentConfig['bgColor'] =
    this.layoutBackgroundContentBgColorPlaceholder;

  @Input() spacing: LayoutBackgroundContentConfig['spacing'] =
    this.layoutBackgroundContentSpacingPlaceholder;

  getSpacing() {
    if (this.spacing === 'small') {
      return 'spacing-sm';
    } else {
      return 'spacing-md';
    }
  }
}

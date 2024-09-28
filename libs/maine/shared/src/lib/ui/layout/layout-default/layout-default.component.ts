import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutDefaultConfig } from './layout-default.model';

@Component({
  selector: 'maine-layout-default',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout-default.component.html',
  styleUrl: './layout-default.component.scss',
})
export class LayoutDefaultComponent {
  layoutDefaultBgColorPlaceholder: LayoutDefaultConfig['bgColor'] = 'default';
  layoutDefaultSpacingPlaceholder: LayoutDefaultConfig['spacing'] = 'small';

  @Input() bgColor: LayoutDefaultConfig['bgColor'] =
    this.layoutDefaultBgColorPlaceholder;

  @Input() spacing: LayoutDefaultConfig['spacing'] =
    this.layoutDefaultSpacingPlaceholder;

  getSpacing() {
    if (this.spacing === 'small') {
      return 'spacing-sm';
    } else {
      return 'spacing-md';
    }
  }
}

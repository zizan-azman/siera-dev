import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LayoutImageConfig } from './layout-image.model';

@Component({
  selector: 'maine-layout-image',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './layout-image.component.html',
  styleUrl: './layout-image.component.scss',
})
export class LayoutImageComponent {
  layoutImagePlaceholder: LayoutImageConfig = {
    imgURL: 'maine-assets/images/siera-2.png',
    imgAlt: 'This is a sample image',
    imgPriority: 'low',
  };

  @Input() layoutImageData: LayoutImageConfig = this.layoutImagePlaceholder;
}

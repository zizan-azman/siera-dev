import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'maine-layout-image',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './layout-image.component.html',
  styleUrl: './layout-image.component.scss',
})
export class LayoutImageComponent {
  layoutImageUrlPlaceholder = 'maine-assets/images/siera-2.png';
  layoutImageAltPlaceholder = 'This is a sample image';
  layoutImagePriorityPlaceholder: 'low' | 'high' = 'low';

  @Input() layoutImageUrl: string = this.layoutImageUrlPlaceholder;
  @Input() layoutImageAlt: string = this.layoutImageAltPlaceholder;
  @Input() layoutImagePriority: 'low' | 'high' =
    this.layoutImagePriorityPlaceholder;
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LinkArrowConfig } from './link-arrow.model';

@Component({
  selector: 'maine-link-arrow',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './link-arrow.component.html',
  styleUrl: './link-arrow.component.scss',
})
export class LinkArrowComponent {
  @Input() linkArrowConfig!: LinkArrowConfig;
}

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
  @Input() layoutDefaultConfig!: LayoutDefaultConfig;
  @Input() bgColor!: 'default' | 'subtle';
}

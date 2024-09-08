import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconChipConfig } from './icon-chip.model';

@Component({
  selector: 'maine-icon-chip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-chip.component.html',
  styleUrl: './icon-chip.component.scss',
})
export class IconChipComponent {
  @Input() iconChipConfig: IconChipConfig = { color: 'primary', path: 'cat' };
}

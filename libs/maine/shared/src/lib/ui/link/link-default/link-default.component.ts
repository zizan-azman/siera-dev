import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkDefaultConfig } from './link-default.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'maine-link-default',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './link-default.component.html',
  styleUrl: './link-default.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LinkDefaultComponent {
  @Input() linkDefaultConfig!: LinkDefaultConfig;
}

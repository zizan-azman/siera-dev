import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { LinkDefaultComponent } from '../../link/link-default/link-default.component';

@Component({
  selector: 'maine-hero-default',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, LinkDefaultComponent],
  templateUrl: './hero-default.component.html',
  styleUrl: './hero-default.component.scss',
})
export class HeroDefaultComponent {}

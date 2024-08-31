import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'maine-hero-default',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './hero-default.component.html',
  styleUrl: './hero-default.component.scss',
})
export class HeroDefaultComponent {}

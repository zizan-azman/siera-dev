import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComingSoonComponent,
  LayoutDefaultComponent,
} from '@siera-dev/maine-shared';

@Component({
  selector: 'siera-my-what-we-do',
  standalone: true,
  imports: [CommonModule, LayoutDefaultComponent, CardComingSoonComponent],
  templateUrl: './what-we-do.component.html',
  styleUrl: './what-we-do.component.scss',
})
export class WhatWeDoComponent {}

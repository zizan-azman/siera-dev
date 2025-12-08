import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComingSoonComponent,
  LayoutDefaultComponent,
} from '@siera-dev/maine-shared';

@Component({
  selector: 'siera-com-who-we-are',
  standalone: true,
  imports: [CommonModule, LayoutDefaultComponent, CardComingSoonComponent],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.scss',
})
export class WhoWeAreComponent {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button-default',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-default.component.html',
  styleUrl: './button-default.component.scss',
})
export class ButtonDefaultComponent {}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDefaultConfig } from './button-default.model';

@Component({
  selector: 'maine-button-default',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-default.component.html',
  styleUrl: './button-default.component.scss',
})
export class ButtonDefaultComponent {
  @Input() buttonDefaultConfig!: ButtonDefaultConfig;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}

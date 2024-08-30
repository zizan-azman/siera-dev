import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'maine-button-navbar-toggle-mode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-navbar-toggle-mode.component.html',
  styleUrl: './button-navbar-toggle-mode.component.scss',
})
export class ButtonNavbarToggleModeComponent {
  constructor(private _renderer: Renderer2) {}
  isDarkMode = false;
  onToggleMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('mode', this.isDarkMode ? 'dark' : 'light');
    this.applyMode();
  }
  applyMode(): void {
    // Remove the old mode attribute
    this._renderer.setAttribute(
      document.body,
      'data-mode',
      this.isDarkMode ? 'dark' : 'light'
    );
  }
}

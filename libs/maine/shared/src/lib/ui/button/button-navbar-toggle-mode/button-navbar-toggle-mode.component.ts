import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'maine-button-navbar-toggle-mode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-navbar-toggle-mode.component.html',
  styleUrl: './button-navbar-toggle-mode.component.scss',
})
export class ButtonNavbarToggleModeComponent implements OnInit {
  isDarkMode = false;

  constructor(private _renderer: Renderer2) {}

  ngOnInit(): void {
    // Read saved mode on startup
    const savedMode = localStorage.getItem('mode');

    if (savedMode === 'dark') {
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }

    this.applyMode();
  }

  onToggleMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('mode', this.isDarkMode ? 'dark' : 'light');
    this.applyMode();
  }

  applyMode(): void {
    this._renderer.setAttribute(
      document.body,
      'data-mode',
      this.isDarkMode ? 'dark' : 'light'
    );
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavbarDefaultComponent,
  NavbarDefaultConfig,
} from '@siera-dev/maine-shared';
import { MockNavbarDefault } from './mock/navbar-default.mock';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'dina-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarDefaultComponent],
  templateUrl: './dina-shell.component.html',
  styleUrl: './dina-shell.component.scss',
})
export class DinaShellComponent {
  navbarDefaultMockData: NavbarDefaultConfig = MockNavbarDefault;
}

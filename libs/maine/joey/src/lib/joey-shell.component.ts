import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  NavbarDefaultComponent,
  NavbarDefaultConfig,
} from '@siera-dev/maine-shared';
import { MockNavbarDefault } from './mock/navbar-default.mock';

@Component({
  selector: 'joey-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarDefaultComponent],
  templateUrl: './joey-shell.component.html',
  styleUrl: './joey-shell.component.scss',
})
export class JoeyShellComponent {
  navbarDefaultMockData: NavbarDefaultConfig = MockNavbarDefault;
}

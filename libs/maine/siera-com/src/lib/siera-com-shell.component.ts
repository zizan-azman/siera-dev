import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  NavbarDefaultComponent,
  NavbarDefaultConfig,
} from '@siera-dev/maine-shared';
import { MockNavbarDefault } from './mock/navbar-default.mock';

@Component({
  selector: 'siera-com-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarDefaultComponent],
  templateUrl: './siera-com-shell.component.html',
  styleUrl: './siera-com-shell.component.scss',
})
export class SieraComShellComponent {
  navbarDefaultMockData: NavbarDefaultConfig = MockNavbarDefault;
}

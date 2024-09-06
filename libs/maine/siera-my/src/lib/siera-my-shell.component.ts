import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  NavbarDefaultComponent,
  NavbarDefaultConfig,
} from '@siera-dev/maine-shared';
import { NavbarConfig } from './mock/navbar-default.mock';

@Component({
  selector: 'siera-my-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarDefaultComponent],
  templateUrl: './siera-my-shell.component.html',
  styleUrl: './siera-my-shell.component.scss',
})
export class SieraMyShellComponent {
  navbarDefaultConfig: NavbarDefaultConfig = NavbarConfig;
}

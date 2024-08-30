import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  NavbarDefaultComponent,
  NavbarDefaultConfig,
} from '@siera-dev/maine-shared';

@Component({
  selector: 'siera-my-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarDefaultComponent],
  templateUrl: './siera-my-shell.component.html',
  styleUrl: './siera-my-shell.component.scss',
})
export class SieraMyShellComponent {
  navbarConfig: NavbarDefaultConfig = {
    navbarDefaultLogo: {
      logoPath: 'maine-assets/svgs/icon/sprite.svg#siera-logo',
      logoUrl: '/',
      logoAlt: 'Siera Logo',
    },
    navbarDefaultLinkList: [
      { linkText: 'Who we are', linkUrl: '/who-we-are' },
      { linkText: 'What we do', linkUrl: '/what-we-do' },
      { linkText: 'News', linkUrl: '/news' },
    ],
    navbarDefaultContentEnd: { showAllWebsites: true, showModeSwitcher: true },
  };
}

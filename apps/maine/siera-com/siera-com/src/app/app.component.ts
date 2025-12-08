import { Component } from '@angular/core';
import { SieraComShellComponent } from '@siera-dev/siera-com-shell';

@Component({
  standalone: true,
  imports: [SieraComShellComponent],
  selector: 'app-root',
  template: `<siera-com-shell />`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'siera-com';
}

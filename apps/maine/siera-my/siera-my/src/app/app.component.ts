import { Component } from '@angular/core';
import { SieraMyShellComponent } from '@siera-dev/siera-my-shell';

@Component({
  standalone: true,
  imports: [SieraMyShellComponent],
  selector: 'app-root',
  template: `<siera-my-shell />`,
})
export class AppComponent {
  title = 'siera-my';
}

import { Component } from '@angular/core';
import { JoeyShellComponent } from '@siera-dev/joey-shell';

@Component({
  standalone: true,
  imports: [JoeyShellComponent],
  selector: 'app-root',
  template: `<joey-shell />`,
})
export class AppComponent {
  title = 'joey';
}

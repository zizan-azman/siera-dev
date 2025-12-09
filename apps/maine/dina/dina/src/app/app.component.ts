import { Component } from '@angular/core';
import { DinaShellComponent } from '@siera-dev/dina-shell';

@Component({
  standalone: true,
  imports: [DinaShellComponent],
  selector: 'app-root',
  template: `<dina-shell />`,
})
export class AppComponent {
  title = 'dina';
}

import { GyButtonComponent } from '@ps-p2/button';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, GyButtonComponent, TranslocoModule],
  selector: 'app-root',
  template: `
    <div>
      <gy-button>{{ 'test' | transloco }}</gy-button>
    </div>
    <app-nx-welcome></app-nx-welcome>
    <router-outlet></router-outlet>
  `,
  styles: `
  `,
})
export class AppComponent {
  title = 'garry-p1';
}

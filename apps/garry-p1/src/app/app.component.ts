import { GyButtonComponent } from '@ps-p2/button';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

import { MyFirst, MySecond } from '@ps-p2/my-first-plugin';


@Component({
  standalone: true,
  imports: [RouterModule, GyButtonComponent, TranslocoModule],
  selector: 'app-root',
  template: `
    <div>
      <gy-button>{{ 'test' | transloco }}</gy-button>
    </div>
    <button (click)="logMessage(tInput.value)">send message</button>
    <input type="text" #tInput>
    <router-outlet></router-outlet>
  `,
  styles: `
  `,
})
export class AppComponent {
  title = 'garry-p1';


  async logMessage(msg: string) {

    const { message } = await MyFirst.logMessage({ message: msg })
    console.log('MyFirstPlugin:', message);

    const message2 = await MySecond.logMessageee({ message: msg })
    console.log('MySecondPlugin:', message2.message);
  }
}

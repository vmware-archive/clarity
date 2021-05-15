import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      :host header img {
        height: 3rem;
        width: 3rem;
      }
    `,
  ],
})
export class AppComponent {}

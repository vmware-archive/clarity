import { Component } from '@angular/core';
import { DemoTabData } from '../components/demo.component';

@Component({
  selector: 'app-card',
  template: `
    <h1>Card</h1>

    <app-eslint-intro-block rule="no-clr-card"></app-eslint-intro-block>

    <demo [tabs]="demo1">
      <h3 cds-text="section">Card with title and body</h3>
    </demo>
    <demo [tabs]="demo2">
      <h3 cds-text="section">Card media block</h3>
    </demo>
  `,
})
export class CardPage {
  demo1: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'card/card.1.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'card/card.1.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];

  demo2: DemoTabData[] = [
    {
      name: 'Angular',
      files: {
        'src/app/app.component.ts': 'card/card.2.angular.txt',
      },
      language: 'ts',
      template: 'angular',
    },
    {
      name: 'Core',
      files: {
        'src/app/app.component.ts': 'card/card.2.core.txt',
      },
      language: 'ts',
      template: 'core',
    },
  ];
}

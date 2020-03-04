/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClarityDocComponent } from '../clarity-doc';

const EXAMPLE1 = `
import { Component, AfterViewInit } from '@angular/core';
import { ClrAriaLiveService } from '@clr/angular';

@Component({
  selector: 'my-component',
  providers: [ClrAriaLiveService],
  template: '...'
})

class MyComponent implements AfterViewInit {
  constructor(public ariaLiveService: ClrAriaLiveService) {}

  ngAfterViewInit() {
   this.ariaLiveService.announce('Message to broadcast to screen reader');
  }
}
`;

const EXAMPLE2 = `
import { ClrAriaLiveService, ClrAriaLivePoliteness } from '@clr/angular';

// ...
this.ariaLiveService.announce(
  'Message to broadcast to screen reader',
  ClrAriaLivePoliteness.assertive
);
`;

const EXAMPLE3 = `
import { Component, AfterViewInit } from '@angular/core';
import { ClrAriaLiveService } from '@clr/angular';
import { download } from 'my-code'

@Component({
  selector: 'download-progress',
  providers: [ClrAriaLiveService],
  template: \`
    <button (click)="startDownload()">Start download</button>
    <clr-progress-bar
      *ngIf="progressValue > 0"
      clrValue="progressValue"
      clrMax="100"
      ></clr-progress-bar>
  \`
})

class MyComponent implements AfterViewInit {
  public progressValue: number = 0;

  constructor(public ariaLiveService: ClrAriaLiveService) {}

  startDownload() {
    // Do some work and return progress value as number.
    download()
      .then((progress) => {
        this.progressValue = progress;
        this.ariaLiveService.announce(\`Download progress is \${progress} proccent done.\`);
      })
  }
}
`;

@Component({
  selector: 'clr-accessibility-demo',
  templateUrl: './accessibility.demo.html',
  host: {
    '[class.content-area]': 'true',
    '[class.dox-content-panel]': 'true',
  },
})
export class AccessibilityDemo extends ClarityDocComponent {
  example1 = EXAMPLE1;
  example2 = EXAMPLE2;
  example3 = EXAMPLE3;

  constructor() {
    super('accessibility');
  }
  newLayout = true;
}

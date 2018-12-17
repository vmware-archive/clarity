/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ProgBarExample } from './progbar-example';

@Component({
  selector: 'clr-progress-bar-animations-demo',
  styleUrls: ['progress-bars.demo.scss'],
  templateUrl: './progress-bar-animations.html',
})
export class ProgressBarAnimationsDemo {
  examples: ProgBarExample[];

  constructor() {
    this.examples = [
      new ProgBarExample('progress-fade', 'Fade Out'),
      new ProgBarExample('flash progress-fade', 'Flash Then Fade'),
      new ProgBarExample('flash-danger', 'Flash Red, No Fade'),
      new ProgBarExample('flash progress-fade labeled', 'Labeled With Success Flash And Fade', true),
    ];
  }
}

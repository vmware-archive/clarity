/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-progress-bar-component',
  styleUrls: ['progress-bars.demo.scss'],
  templateUrl: './progress-bar-component.html',
})
export class ProgressBarComponentDemo {
  examples: {
    name: string;
    label: string;
    state: boolean;
    value: number;
    interval: any;
    setup: { flash: boolean; fade: boolean };
  }[] = [
    {
      name: 'flash',
      label: 'Flash only',
      state: false,
      value: 20,
      interval: null,
      setup: { flash: true, fade: false },
    },
    {
      name: 'demo',
      label: 'Flash & Fade',
      state: false,
      value: 20,
      interval: null,
      setup: { flash: true, fade: true },
    },
  ];

  toggle(name: string) {
    const example = this.examples.find(expl => expl.name === name);

    if (example === undefined) {
      return;
    }
    example.state = !example.state;

    if (example.state) {
      example.interval = setInterval(() => {
        example.value = example.value + 20;
        if (example.value >= 100) {
          clearInterval(example.interval);
        }
      }, 1000);
    }

    if (!example.state) {
      example.value = 20;
      clearInterval(example.interval);
    }
  }
}

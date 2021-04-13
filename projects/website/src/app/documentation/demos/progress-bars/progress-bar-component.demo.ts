/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

const EXAMPLE = `<clr-progress-bar clrValue="40" clrMax="100"></clr-progress-bar>`;
const EXAMPLE1 = `<clr-progress-bar clrValue="65" clrSuccess clrLabeled></clr-progress-bar>`;
const EXAMPLE2 = `
<div class="progress-block">
  <label for="demoProgressBar">Text on the left</label>
  <clr-progress-bar id="demoProgressBar" clrValue="85"></clr-progress-bar>
  <span>Text on the right</span>
</div>
`;
const EXAMPLE3 = `<clr-progress-bar clrValue="75" clrLoop></clr-progress-bar>`;
const EXAMPLE4 = `<clr-progress-bar clrValue="65" clrLabeled clrDisplayval="65$"></clr-progress-bar>`;

@Component({
  selector: 'clr-progress-bar-component-demos',
  styleUrls: ['progress-bars.demo.scss'],
  templateUrl: './progress-bar-component.demo.html',
})
export class ProgressBarComponentDemo {
  example = EXAMPLE;
  example1 = EXAMPLE1;
  example2 = EXAMPLE2;
  example3 = EXAMPLE3;
  example4 = EXAMPLE4;

  props = [
    {
      name: '[id]',
      type: 'String',
      defaultValue: 'Random ID',
      description: 'HTML ID to bind label to progress bar',
    },
    {
      name: '[clrValue]',
      type: 'Number',
      defaultValue: '0',
      description:
        'This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and max',
    },
    {
      name: '[clrMax]',
      type: 'Number',
      defaultValue: '100',
      description:
        'This attribute describes how much work the task indicated by the progress element requires. The max attribute, if present, must have a value greater than zero and be a valid floating point number. The default value is 100',
    },
    {
      name: '[clrDisplayval]',
      type: 'String',
      defaultValue: 'Empty string',
      description: 'Overwrite the default value representation.',
    },
    {
      name: '[clrPolite]',
      type: 'Boolean',
      defaultValue: 'true',
      description: 'Change the default aria-live value to polite',
    },
    {
      name: '[clrAssertive]',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Change the default aria-live value to assertive',
    },
    {
      name: '[clrOff]',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Change the default aria-live value to off. No aria-live event will be trigger',
    },
    {
      name: '[clrLabeled]',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Display progress value or displayval',
    },
    {
      name: '[clrLoop]',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Add looping animation',
    },
    {
      name: '[clrFade]',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Flash animation',
    },
    {
      name: '[clrFlashDanger]',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Flash in danger animation',
    },
    {
      name: '[clrSuccess]',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Add success style',
    },
    {
      name: '[clrDanger]',
      type: 'Boolean',
      defaultValue: 'false',
      description: 'Add danger style',
    },
  ];
}

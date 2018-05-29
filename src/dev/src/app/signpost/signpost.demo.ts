/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({ selector: 'clr-signpost-demo', styleUrls: ['./signpost.demo.scss'], templateUrl: 'signpost.demo.html' })
export class SignpostDemo {
  openState: boolean = false;
  positions = [
    { description: 'Right bottom', position: 'right-bottom', id: 'rightBottomTrigger' },
    { description: 'Bottom middle', position: 'bottom-middle', id: 'bottomMiddleTrigger' },
    { description: 'Left bottom', position: 'left-bottom', id: 'leftBottomTrigger' },
    { description: 'Right middle', position: 'right-middle', id: 'rightMiddleTrigger' },
    { description: 'Left middle', position: 'left-middle', id: 'leftMiddleTrigger' },
    { description: 'Left top', position: 'left-top', id: 'leftTopTrigger' },
    { description: 'Right top', position: 'right-top', id: 'rightTopTrigger' },
    { description: 'Bottom right', position: 'bottom-right', id: 'bottomRightTrigger' },
    { description: 'Bottom left', position: 'bottom-left', id: 'bottomLeftTrigger' },
    { description: 'Top right', position: 'top-right', id: 'topRightTrigger' },
    { description: 'Top middle', position: 'top-middle', id: 'topMiddleTrigger' },
    { description: 'Top left', position: 'top-left', id: 'topLeftTrigger' },
  ];
}

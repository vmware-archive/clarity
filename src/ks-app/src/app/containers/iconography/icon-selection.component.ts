/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { ClarityIcons } from '@clr/icons';
import { ChartShapes } from '@clr/icons/shapes/chart-shapes';
import { CommerceShapes } from '@clr/icons/shapes/commerce-shapes';
import { CoreShapes } from '@clr/icons/shapes/core-shapes';
import { EssentialShapes } from '@clr/icons/shapes/essential-shapes';
import { MediaShapes } from '@clr/icons/shapes/media-shapes';
import { SocialShapes } from '@clr/icons/shapes/social-shapes';
import { TechnologyShapes } from '@clr/icons/shapes/technology-shapes';
import { TextEditShapes } from '@clr/icons/shapes/text-edit-shapes';
import { TravelShapes } from '@clr/icons/shapes/travel-shapes';

@Component({ templateUrl: './icon-selection.component.html', styleUrls: ['./icon-selection.component.scss'] })
export class KSIconSelection {
  constructor() {
    ClarityIcons.add(CoreShapes);
    ClarityIcons.add(CommerceShapes);
    ClarityIcons.add(EssentialShapes);
    ClarityIcons.add(MediaShapes);
    ClarityIcons.add(SocialShapes);
    ClarityIcons.add(TechnologyShapes);
    ClarityIcons.add(TravelShapes);
    ClarityIcons.add(ChartShapes);
    ClarityIcons.add(TextEditShapes);
  }
  previewClasses: any = { 'is-solid': false, 'has-alert': false, 'has-badge': false };

  onChangeSolid(event: any): void {
    this.previewClasses['is-solid'] = event.target.checked;
  }

  onChangeStatus(event: any): void {
    const radioId = event.target.getAttribute('id');

    if (radioId === 'alertRadio') {
      this.previewClasses['has-badge'] = false;
      this.previewClasses['has-alert'] = true;
    } else if (radioId === 'badgeRadio') {
      this.previewClasses['has-alert'] = false;
      this.previewClasses['has-badge'] = true;
    } else {
      this.previewClasses['has-alert'] = false;
      this.previewClasses['has-badge'] = false;
    }
  }

  allShapeSets = [
    { name: 'Core Shapes', shapes: Object.keys(CoreShapes) },
    { name: 'Commerce Shapes', shapes: Object.keys(CommerceShapes) },
    { name: 'Essential Shapes', shapes: Object.keys(EssentialShapes) },
    { name: 'Media Shapes', shapes: Object.keys(MediaShapes) },
    { name: 'Social Shapes', shapes: Object.keys(SocialShapes) },
    { name: 'Travel Shapes', shapes: Object.keys(TravelShapes) },
    { name: 'Technology Shapes', shapes: Object.keys(TechnologyShapes) },
    { name: 'Chart Shapes', shapes: Object.keys(ChartShapes) },
    { name: 'Text Edit Shapes', shapes: Object.keys(TextEditShapes) },
  ];
}

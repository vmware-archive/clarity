/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import {
  ClrChartSet,
  ClrCommerceSet,
  ClrCoreSet,
  ClrEssentialSet,
  ClrMediaSet,
  ClrSocialSet,
  ClrTechnologySet,
  ClrTextEditSet,
  ClrTravelSet,
} from '@clr/icons';

@Component({
  selector: 'clr-icon-selection-demo',
  styleUrls: ['./iconography.demo.scss'],
  templateUrl: './icon-selection.demo.html',
})
export class IconSelectionDemo {
  commonPath = '@clr/icons/shapes/svg-source/';
  allSetsLink = this.commonPath + 'all.zip';

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
    { name: 'Core Shapes', shapes: Object.keys(ClrCoreSet) },
    { name: 'Commerce Shapes', shapes: Object.keys(ClrCommerceSet) },
    { name: 'Essential Shapes', shapes: Object.keys(ClrEssentialSet) },
    { name: 'Media Shapes', shapes: Object.keys(ClrMediaSet) },
    { name: 'Social Shapes', shapes: Object.keys(ClrSocialSet) },
    { name: 'Travel Shapes', shapes: Object.keys(ClrTravelSet) },
    { name: 'Technology Shapes', shapes: Object.keys(ClrTechnologySet) },
    { name: 'Chart Shapes', shapes: Object.keys(ClrChartSet) },
    { name: 'Text Edit Shapes', shapes: Object.keys(ClrTextEditSet) },
  ];
}

/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClrIconCustomTag, ClrLoading, ClrMainContainer } from '@clr/angular';
import { ClarityIcons } from '@clr/icons';
import { ClrShapeStore } from '@clr/icons/shapes/commerce-shapes';
import { ClrShapePin } from '@clr/icons/shapes/essential-shapes';
import { ClrShapeHeadphones } from '@clr/icons/shapes/media-shapes';
import { ClrShapeStar } from '@clr/icons/shapes/social-shapes';
import { ClrShapeHelix } from '@clr/icons/shapes/technology-shapes';
import { ClrShapeCar } from '@clr/icons/shapes/travel-shapes';

@Component({ selector: 'KS-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss'] })
export class AppComponent {
  /**
   * @description
   * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
   * This is a catchall for entities w/o explicit app demos.
   */
  private aClrIconCustomTag: ClrIconCustomTag;
  private aClrMainContainer: ClrMainContainer;
  private aClrLoading: ClrLoading;

  title = 'KS';
  links = [
    { path: 'alerts', title: 'Alerts' },
    { path: 'badges', title: 'Badges' },
    { path: 'buttons', title: 'Buttons' },
    { path: 'cards', title: 'Cards' },
    { path: 'checkboxes', title: 'Checkboxes' },
    { path: 'code', title: 'Code' },
    { path: 'colors', title: 'Colors' },
    { path: 'datagrids', title: 'Datagrid' },
    { path: 'drag-and-drop', title: 'Drag and Drop' },
    { path: 'datepicker', title: 'Datepicker' },
    { path: 'dropdowns', title: 'Dropdowns' },
    { path: 'forms', title: 'Forms' },
    { path: 'iconography', title: 'Iconography' },
    { path: 'inputs', title: 'Inputs' },
    { path: 'labels', title: 'Labels' },
    { path: 'lists', title: 'Lists' },
    { path: 'login', title: 'Login' },
    { path: 'modals', title: 'Modals' },
    { path: 'progress-bars', title: 'Progress' },
    { path: 'radios', title: 'Radios' },
    { path: 'selects', title: 'Selects' },
    { path: 'signposts', title: 'Signposts' },
    { path: 'spinners', title: 'Spinners' },
    { path: 'stackviews', title: 'Stack Views' },
    { path: 'tables', title: 'Tables' },
    { path: 'tabs', title: 'Tabs' },
    { path: 'tooltips', title: 'Tooltips' },
    { path: 'toggle', title: 'Toggle' },
    { path: 'treeviews', title: 'Tree Views' },
    { path: 'typography', title: 'Typography' },
    { path: 'vertical-nav', title: 'Vertical Nav' },
    { path: 'wizards', title: 'Wizards' },
  ];

  constructor() {
    ClarityIcons.add({
      store: ClrShapeStore,
      pin: ClrShapePin,
      headphones: ClrShapeHeadphones,
      star: ClrShapeStar,
      car: ClrShapeCar,
      helix: ClrShapeHelix,
    });
  }
}

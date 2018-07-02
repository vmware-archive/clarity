/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClrIconCustomTag, ClrLoading, ClrMainContainer, IconCustomTag, Loading, MainContainer } from '@clr/angular';
import {
  ClarityIcons,
  ClrShapeBarChart,
  ClrShapeBold,
  ClrShapeCar,
  ClrShapeHeadphones,
  ClrShapeHelix,
  ClrShapePin,
  ClrShapeStar,
  ClrShapeStore,
} from '@clr/icons';

@Component({ selector: 'KS-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss'] })
export class AppComponent {
  /**
   * @description
   * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
   * This is a catchall for entities w/o explicit app demos.
   */
  private aIconCustomTag: IconCustomTag;
  private aClrIconCustomTag: ClrIconCustomTag;
  private aMainContainer: MainContainer;
  private aClrMainContainer: ClrMainContainer;
  private aLoading: Loading;
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
      bold: ClrShapeBold,
      'bar-chart': ClrShapeBarChart,
    });
  }
}

/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { COMPONENT_MAP } from '../../utils/component-list';

export class ClarityDocComponent {
  ui = -1;
  ng = -1;
  title = '';
  newLayout = false;

  constructor(componentName: string) {
    const component = COMPONENT_MAP.get(componentName);
    this.populateComponentDetails(component.text, component.ui, component.ng, component.newLayout);
  }

  populateComponentDetails(title: string, ui: number, ng: number, newLayout: boolean) {
    this.ui = ui;
    this.ng = ng;
    this.title = title;
    this.newLayout = newLayout;
  }
}

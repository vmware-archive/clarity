/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

import { ClarityIcons } from '@clr/icons';
import { AllShapes } from '@clr/icons/shapes/all-shapes';
import COMPONENTS from '../../settings/componentlist.json';

@Component({
  selector: 'documentation',
  templateUrl: 'documentation.component.html',
  host: {
    '[class.content-container]': 'true',
  },
})
export class DocumentationComponent {
  environment = environment;
  components = COMPONENTS.list;
  navExpandedState = {
    pattern: true,
    component: true,
  };

  constructor() {
    ClarityIcons.add(AllShapes);
    const cache = localStorage.getItem('navExpandedCache');
    if (cache) {
      try {
        const state = JSON.parse(cache);
        this.navExpandedState = state;
      } catch (e) {
        // Do nothing, defaults are set to open
      }
    }
  }

  cacheNavState($event, state) {
    this.navExpandedState[state] = $event;
    localStorage.setItem('navExpandedCache', JSON.stringify(this.navExpandedState));
  }
}

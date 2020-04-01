/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import * as COMPONENTS from '../../../settings/componentlist.json';

@Component({
  selector: 'component-status',
  templateUrl: 'component-status.component.html',
  host: {
    '[class.content-area]': 'true',
  },
})
export class ComponentStatusComponent {
  components = COMPONENTS.list;

  getUrl(item) {
    return item.url.split('#')[0];
  }

  getFragment(item) {
    return item.url.split('#')[1];
  }
}

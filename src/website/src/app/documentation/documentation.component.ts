/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

import { ClarityIcons } from '@clr/icons';
import { EssentialShapes } from '@clr/icons/shapes/essential-shapes';

@Component({
  selector: 'documentation',
  templateUrl: 'documentation.component.html',
  host: {
    '[class.content-container]': 'true',
  },
})
export class DocumentationComponent {
  environment = environment;
  constructor() {
    ClarityIcons.add(EssentialShapes);
  }
}

/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, Input, HostBinding } from '@angular/core';
import { environment } from '../../environments/environment';

import LATEST from '../../settings/global.json';

@Directive({
  selector: '[sketchTemplateLink]',
  host: {
    '[attr.target]': "'_blank'",
  },
})
export class SketchTemplateLinkDirective {
  @Input() version = LATEST.latest_sketch_template;
  @Input() type: 'light' | 'dark' = 'light';

  @HostBinding('attr.href')
  get href() {
    return `${environment.sketch_base_url}/${this.type}/clarity-library-${this.type}-${this.version}.sketch?raw=true`;
  }
}

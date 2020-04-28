/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';

// TODO: if we find more components that could use this, consider moving this to utils
@Injectable()
export class AriaService {
  public ariaLabelledBy: string;
  public ariaControls: string;
}

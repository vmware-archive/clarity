/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { DayModel } from './day.model';

export class DayViewModel {
  constructor(
    public dayModel: DayModel,
    public isTodaysDate: boolean = false,
    public isDisabled: boolean = false,
    public isSelected: boolean = false,
    public isFocusable: boolean = false
  ) {}

  /**
   * Gets the tab index based on the isFocusable flag.
   */
  get tabIndex(): number {
    return this.isFocusable ? 0 : -1;
  }
}

/**
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { SingleSelectComboboxModel } from './single-select-combobox.model';
import { BehaviorSubject, Observable } from 'rxjs';

export class PseudoFocusModel<T> extends SingleSelectComboboxModel<T> {
  private _focusChanged: BehaviorSubject<T> = new BehaviorSubject(null);
  get focusChanged(): Observable<T> {
    return this._focusChanged.asObservable();
  }

  select(item: T): void {
    if (this.model !== item) {
      this.model = item;
      this._focusChanged.next(item);
    }
  }
}

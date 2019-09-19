/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

let idGenerator = 0;

export class UniqueId {
  private _id: number;

  get _uniqueId() {
    if (typeof this._id === 'undefined') {
      this._id = idGenerator++;
    }
    return this._id;
  }

  get _idPrefix() {
    return (this as Partial<HTMLElement>).tagName.toLowerCase() + '-';
  }
}

/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DragHandleRegistrarService } from './drag-handle-registrar.service';

export class MockDragHandleRegistrar {
  private _customHandleEl: any;

  get customHandle() {
    return this._customHandleEl;
  }

  public registerCustomHandle(handleElement: Node) {
    this._customHandleEl = handleElement;
  }

  public unregisterCustomHandle() {
    delete this._customHandleEl;
  }
}

export const MOCK_DRAG_HANDLE_REGISTRAR_PROVIDER = {
  provide: DragHandleRegistrarService,
  useClass: MockDragHandleRegistrar,
};

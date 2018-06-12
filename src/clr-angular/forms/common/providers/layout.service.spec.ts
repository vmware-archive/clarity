/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Layouts, LayoutService } from './layout.service';

export default function(): void {
  describe('LayoutService', function() {
    let service;
    beforeEach(() => {
      service = new LayoutService();
    });

    it('sets layout to vertical by default', function() {
      expect(service.layout).toEqual(Layouts.VERTICAL);
    });

    it('handles checking isVertical based on current layout', function() {
      expect(service.isVertical()).toBeTrue();
      service.layout = Layouts.HORIZONTAL;
      expect(service.isVertical()).toBeFalse();
      service.layout = Layouts.COMPACT;
      expect(service.isVertical()).toBeFalse();
    });

    it('provides the class name', function() {
      expect(service.layoutClass).toEqual('clr-form-vertical');
      service.layout = Layouts.HORIZONTAL;
      expect(service.layoutClass).toEqual('clr-form-horizontal');
    });
  });
}

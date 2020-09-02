/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClrFormLayout, LayoutService } from './layout.service';

export default function (): void {
  describe('LayoutService', function () {
    let service;
    beforeEach(() => {
      service = new LayoutService();
    });

    it('sets layout to horizontal by default', function () {
      expect(service.layout).toEqual(ClrFormLayout.HORIZONTAL);
    });

    it('handles checking isVertical based on current layout', function () {
      expect(service.isVertical()).toBeFalse();
      service.layout = ClrFormLayout.VERTICAL;
      expect(service.isVertical()).toBeTrue();
      service.layout = ClrFormLayout.COMPACT;
      expect(service.isVertical()).toBeFalse();
    });

    it('handles checking isCompact based on current layout', function () {
      expect(service.isCompact()).toBeFalse();
      service.layout = ClrFormLayout.VERTICAL;
      expect(service.isCompact()).toBeFalse();
      service.layout = ClrFormLayout.COMPACT;
      expect(service.isCompact()).toBeTrue();
    });

    it('handles checking isHorizontal based on current layout', function () {
      expect(service.isHorizontal()).toBeTrue();
      service.layout = ClrFormLayout.VERTICAL;
      expect(service.isHorizontal()).toBeFalse();
      service.layout = ClrFormLayout.COMPACT;
      expect(service.isHorizontal()).toBeFalse();
    });

    it('provides the class name', function () {
      expect(service.layoutClass).toEqual('clr-form-horizontal');
      service.layout = ClrFormLayout.VERTICAL;
      expect(service.layoutClass).toEqual('clr-form-vertical');
    });

    it('can validate layouts by string value', () => {
      expect(service.isValid('vertical')).toBeTrue();
      expect(service.isValid('horizontal')).toBeTrue();
      expect(service.isValid('compact')).toBeTrue();
      expect(service.isValid('asdf')).toBeFalse();
    });
  });
}

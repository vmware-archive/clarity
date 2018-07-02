/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ControlClassService } from './control-class.service';

export default function(): void {
  describe('ControlClassService', function() {
    let service;
    beforeEach(() => {
      service = new ControlClassService();
    });

    it('should return no classes when no grid or invalid', function() {
      expect(service.controlClass()).toBe('');
    });

    it('should return clr-error when invalid', function() {
      expect(service.controlClass(true)).toBe('clr-error');
    });

    it('should return grid classes when using grid', function() {
      expect(service.controlClass(false, true)).toBe('clr-col-md-10 clr-col-xs-12');
    });

    it('should return error and grid classes when invalid and using grid', function() {
      expect(service.controlClass(true, true)).toBe('clr-error clr-col-md-10 clr-col-xs-12');
    });

    it('should not add grid classes if already present ', function() {
      service.className = 'clr-col-md-3 clr-col-xs-12';
      expect(service.controlClass(false, true)).toBe('');
    });
  });
}

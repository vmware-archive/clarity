/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { GlobalDragModeService } from './global-drag-mode.service';

export default function(): void {
  describe('Global Drag Mode Service', function() {
    beforeEach(function() {
      TestBed.configureTestingModule({ declarations: [TestComponent] });

      this.fixture = TestBed.createComponent(TestComponent);
      this.fixture.detectChanges();
      this.globalDragMode = this.fixture.debugElement.injector.get(GlobalDragModeService);
    });

    it('should give in-drag class to document when enter method is called', function() {
      this.globalDragMode.enter();
      this.fixture.detectChanges();
      expect(document.body.classList.contains('in-drag')).toBeTruthy();
    });

    it('should remove in-drag class from document when exit method is called', function() {
      this.globalDragMode.exit();
      this.fixture.detectChanges();
      expect(document.body.classList.contains('in-drag')).toBeFalsy();
    });
  });
}

@Component({ providers: [GlobalDragModeService], template: `<div>test</div>` })
class TestComponent {
  // tslint:disable-next-line
  constructor(private renderer: Renderer2, private globalDragMode: GlobalDragModeService) {}
}

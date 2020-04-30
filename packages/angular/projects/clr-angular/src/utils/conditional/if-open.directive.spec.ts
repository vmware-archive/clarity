/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ClrIfOpen } from './if-open.directive';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';

export default function (): void {
  describe('IfOpen Directive', function () {
    describe('Typescript API', function () {
      beforeEach(function () {
        TestBed.configureTestingModule({ declarations: [ClrIfOpen, IfOpenTest], providers: [ClrPopoverToggleService] });
        this.fixture = TestBed.createComponent(IfOpenTest);
        this.fixture.detectChanges();
        this.testComponent = this.fixture.componentInstance;
        this.testElement = this.fixture.nativeElement;
        this.clarityDirective = this.fixture.componentInstance.directive;
        this.toggleService = TestBed.get(ClrPopoverToggleService);
      });

      afterEach(function () {
        this.fixture.destroy();
      });

      it('sets the open state of the directive', function () {
        this.testComponent.openState = true;
        this.fixture.detectChanges();
        expect(this.clarityDirective.open).toEqual(true);
      });

      it('gets the current value of the open state', function () {
        this.toggleService.open = true;
        expect(this.testComponent.openState).toEqual(true);
        this.toggleService.open = false;
        expect(this.testComponent.openState).toEqual(false);
      });

      it('provides a function to update the view', function () {
        expect(this.clarityDirective.updateView).toBeDefined();

        // when openState is false there should be no embedded views
        expect(this.clarityDirective.container.length).toEqual(0);

        // We can call the updateView function
        this.clarityDirective.updateView(true);
        expect(this.clarityDirective.container.length).toEqual(1);
      });

      it('emits an openChange event', function () {
        let nbChanges = 0;
        let currentChange: boolean;
        this.testComponent.directive.openChange.subscribe((change: boolean) => {
          currentChange = change;
          nbChanges++;
        });
        expect(nbChanges).toBe(0);
        expect(currentChange).toBeUndefined();
        this.toggleService.open = true;
        this.fixture.detectChanges();
        expect(nbChanges).toBe(1);
        expect(currentChange).toBe(true);
      });
    });

    describe('View', function () {
      beforeEach(function () {
        TestBed.configureTestingModule({ declarations: [ClrIfOpen, IfOpenTest], providers: [ClrPopoverToggleService] });
        this.fixture = TestBed.createComponent(IfOpenTest);
        this.fixture.detectChanges();
        this.testComponent = this.fixture.componentInstance;
        this.testElement = this.fixture.nativeElement;
        this.clarityDirective = this.fixture.componentInstance.directive;
        this.toggleService = TestBed.get(ClrPopoverToggleService);
      });

      afterEach(function () {
        this.fixture.destroy();
      });

      // More for view tests.
      it('should not display anything when false', function () {
        expect(this.testElement.textContent.trim()).toBe('');
      });

      it('projects content when true', function () {
        this.toggleService.open = true;
        this.fixture.detectChanges();
        expect(this.testElement.textContent.trim()).toBe('Hello Template!');
      });
    });
  });
}

@Component({
  template: `
    <ng-template [(clrIfOpen)]="openState">
      Hello Template!
    </ng-template>
  `,
})
class IfOpenTest {
  @ViewChild(ClrIfOpen) directive: ClrIfOpen;
  openState = false;
}

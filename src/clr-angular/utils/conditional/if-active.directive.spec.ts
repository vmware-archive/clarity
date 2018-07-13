/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ClrIfActive } from './if-active.directive';
import { IF_ACTIVE_ID_PROVIDER, IfActiveService } from './if-active.service';

export default function(): void {
  describe('IfActive Directive', function() {
    describe('Typescript API', function() {
      beforeEach(function() {
        TestBed.configureTestingModule({
          declarations: [ClrIfActive, IfOpenTest],
          providers: [IfActiveService, IF_ACTIVE_ID_PROVIDER],
        });
        this.fixture = TestBed.createComponent(IfOpenTest);
        this.fixture.detectChanges();
        this.testComponent = this.fixture.componentInstance;
        this.testElement = this.fixture.nativeElement;
        this.clarityDirective = this.fixture.componentInstance.directive;
        this.ifActiveService = TestBed.get(IfActiveService);
      });

      afterEach(function() {
        this.fixture.destroy();
      });

      it('sets the active state of the directive', function() {
        this.testComponent.activeState = true;
        this.fixture.detectChanges();
        expect(this.clarityDirective.active).toEqual(true);
      });

      it('gets the current value of the active state', function() {
        this.ifActiveService.current = new Object();
        this.fixture.detectChanges();
        expect(this.testComponent.activeState).toEqual(false);
      });

      it('provides a function to update the view', function() {
        expect(this.clarityDirective.updateView).toBeDefined();

        // when activeState is false there should be no embedded views
        expect(this.clarityDirective.container._embeddedViews.length).toEqual(0);

        // We can call the updateView function
        this.clarityDirective.updateView(true);
        expect(this.clarityDirective.container._embeddedViews.length).toEqual(1);
      });

      it('emits an activeChange event only if the active state changes', function() {
        let nbChanges: number = 0;
        let currentChange: boolean;
        this.testComponent.directive.activeChange.subscribe((change: boolean) => {
          currentChange = change;
          nbChanges++;
        });
        expect(nbChanges).toBe(0);
        expect(currentChange).toBeUndefined();

        // setting the current to something other than the test directive's id
        this.ifActiveService.current = this.testComponent.directive.id + 1;
        this.fixture.detectChanges();
        expect(nbChanges).toBe(0);
        expect(currentChange).toBeUndefined();

        // setting the current to the test directive's id
        this.ifActiveService.current = this.testComponent.directive.id;
        this.fixture.detectChanges();
        expect(nbChanges).toBe(1);
        expect(currentChange).toBe(true);

        // setting the current to the test directive's id again
        this.ifActiveService.current = this.testComponent.directive.id;
        this.fixture.detectChanges();
        expect(nbChanges).toBe(1);
        expect(currentChange).toBe(true);

        // setting the current to something other than the test directive's id again
        this.ifActiveService.current = this.testComponent.directive.id + 1;
        this.fixture.detectChanges();
        expect(nbChanges).toBe(2);
        expect(currentChange).toBe(false);
      });
    });

    describe('View', function() {
      beforeEach(function() {
        TestBed.configureTestingModule({
          declarations: [ClrIfActive, IfOpenTest],
          providers: [IfActiveService, IF_ACTIVE_ID_PROVIDER],
        });
        this.fixture = TestBed.createComponent(IfOpenTest);
        this.fixture.detectChanges();
        this.testComponent = this.fixture.componentInstance;
        this.testElement = this.fixture.nativeElement;
        this.clarityDirective = this.fixture.componentInstance.directive;
        this.ifActiveService = TestBed.get(IfActiveService);
      });

      afterEach(function() {
        this.fixture.destroy();
      });

      // More for view tests.
      it('should not display anything when false', function() {
        expect(this.testElement.textContent.trim()).toBe('');
      });

      it('projects content when this directive is set to current', function() {
        this.ifActiveService.current = this.clarityDirective.id;
        this.fixture.detectChanges();
        expect(this.testElement.textContent.trim()).toBe('Hello Template!');
      });
    });
  });
}

@Component({
  template: `
        <ng-template [(clrIfActive)]="activeState">
            Hello Template!
        </ng-template>
    `,
})
class IfOpenTest {
  @ViewChild(ClrIfActive) directive: ClrIfActive;
  activeState: boolean = false;
}

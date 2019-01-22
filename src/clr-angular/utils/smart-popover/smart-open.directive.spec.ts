/*
 *  Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { Component, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ClrSmartOpen } from './smart-open.directive';
import { IfOpenService } from '../conditional/if-open.service';

export default function(): void {
  describe('SmartOpen Directive', function() {
    let nodes: NodeList;

    describe('Typescript API', function() {
      beforeEach(function() {
        TestBed.configureTestingModule({ declarations: [ClrSmartOpen, SmartOpenTest], providers: [IfOpenService] });
        this.fixture = TestBed.createComponent(SmartOpenTest);
        this.fixture.detectChanges();
        this.testComponent = this.fixture.componentInstance;
        this.testElement = this.fixture.nativeElement;
        this.clarityDirective = this.fixture.componentInstance.directive;
        this.ifOpenService = TestBed.get(IfOpenService);
      });

      afterEach(function() {
        // Remove nodes from the body after each test.
        nodes = null;
        this.fixture.destroy();
      });

      it('sets the open state of the directive', function() {
        this.testComponent.openState = true;
        this.fixture.detectChanges();
        expect(this.clarityDirective.open).toEqual(true);
      });

      it('gets the current value of the open state', function() {
        this.ifOpenService.open = true;
        expect(this.testComponent.openState).toEqual(true);
        this.ifOpenService.open = false;
        expect(this.testComponent.openState).toEqual(false);
      });

      it('provides a function to update the view', function() {
        expect(this.clarityDirective.updateView).toBeDefined();

        // when openState is false there should be no embedded views
        expect(this.clarityDirective.container._embeddedViews.length).toEqual(0);

        this.clarityDirective.updateView(true);
        expect(this.clarityDirective.container._embeddedViews.length).toEqual(1);
      });

      it('emits an openChange event', function() {
        let nbChanges: number = 0;
        let currentChange: boolean;
        this.testComponent.directive.openChange.subscribe((change: boolean) => {
          currentChange = change;
          nbChanges++;
        });
        expect(nbChanges).toBe(0);
        expect(currentChange).toBeUndefined();
        this.ifOpenService.open = true;
        this.fixture.detectChanges();
        expect(nbChanges).toBe(1);
        expect(currentChange).toBe(true);
      });
    });

    describe('View', function() {
      beforeEach(function() {
        TestBed.configureTestingModule({ declarations: [ClrSmartOpen, SmartOpenTest], providers: [IfOpenService] });
        this.fixture = TestBed.createComponent(SmartOpenTest);
        this.fixture.detectChanges();
        this.testComponent = this.fixture.componentInstance;
        this.testElement = this.fixture.nativeElement;
        this.clarityDirective = this.fixture.componentInstance.directive;
        this.ifOpenService = TestBed.get(IfOpenService);
      });

      afterEach(function() {
        // Remove nodes from the body after each test.
        nodes = null;
        this.fixture.destroy();
      });

      it('should not add nodes to the body when false', function() {
        nodes = document.body.querySelectorAll('.test-element');
        expect(nodes.length).toEqual(0);
      });

      it('adds all child nodes to the body when true', function() {
        this.ifOpenService.open = true;
        this.fixture.detectChanges();
        nodes = document.body.querySelectorAll('.test-element');
        nodes.forEach((node: Element) => {
          expect(node.textContent).toEqual('Element');
        });
      });

      it('projects content when true', function() {
        this.ifOpenService.open = true;
        this.fixture.detectChanges();
        nodes = document.body.querySelectorAll('.test-element');
        nodes.forEach((node: HTMLElement) => {
          expect(node.innerText).toBe('Element');
        });
      });

      it('removes the popover from the body element', function() {
        this.ifOpenService.open = true;
        this.fixture.detectChanges();
        this.ifOpenService.open = false;
        this.fixture.detectChanges();
        nodes = document.body.querySelectorAll('.test-element');
        expect(nodes.length).toBe(0);
      });
    });
  });
}

@Component({
  template: `
        <ng-template [(clrSmartOpen)]="openState">
            <div class="test-element">Element</div>
            <div class="test-element">Element</div>
        </ng-template>
    `,
})
class SmartOpenTest {
  @ViewChild(ClrSmartOpen) directive: ClrSmartOpen;
  openState: boolean = false;
}

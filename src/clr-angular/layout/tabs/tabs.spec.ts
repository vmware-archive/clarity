/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, Type, ViewChild } from '@angular/core';

import { addHelpers, TestContext } from '../../data/datagrid/helpers.spec';

import { TabsService } from './providers/tabs.service';
import { TabsLayout } from './enums/tabs-layout.enum';
import { ClrTab } from './tab';
import { ClrTabs } from './tabs';

@Component({
  template: `
    <clr-tabs [clrLayout]="layout">
        <clr-tab #first>
            <button clrTabLink>Tab1</button>
            <clr-tab-content *clrIfActive>
                <p>Content1</p>
            </clr-tab-content>
        </clr-tab>

        <clr-tab>
            <button clrTabLink>Tab2</button>
            <clr-tab-content *clrIfActive>
                <p>Content2</p>
            </clr-tab-content>
        </clr-tab>

        <clr-tab>
            <button clrTabLink>Tab3</button>
            <clr-tab-content *clrIfActive>
                <p>Content3</p>
            </clr-tab-content>
        </clr-tab>

        <clr-tab>
            <button clrTabLink [clrTabLinkInOverflow]="inOverflow" class="tab4">Tab4</button>
            <clr-tab-content *clrIfActive>
                <p class="content-overflow">Content4</p>
            </clr-tab-content>
        </clr-tab>
    </clr-tabs>
   `,
})
class TestComponent {
  @ViewChild(ClrTabs) tabsInstance: ClrTabs;
  @ViewChild('first') firstTab: ClrTab;
  inOverflow: boolean = false;
  layout: TabsLayout = TabsLayout.HORIZONTAL;
}

@Component({
  template: `
    <clr-tabs>
        <clr-tab *ngIf="true" #first>
            <button clrTabLink>Tab1</button>
            <clr-tab-content *clrIfActive>Content1</clr-tab-content>
        </clr-tab>
        <clr-tab>
            <button clrTabLink>Tab2</button>
            <clr-tab-content *clrIfActive>Content2</clr-tab-content>
        </clr-tab>
    </clr-tabs>
   `,
})
class NgIfFirstTest {
  @ViewChild('first') firstTab: ClrTab;
}

@Component({
  template: `
    <clr-tabs>
        <clr-tab #first>
            <button clrTabLink>Tab1</button>
            <clr-tab-content *clrIfActive>Content1</clr-tab-content>
        </clr-tab>
        <clr-tab *ngIf="true">
            <button clrTabLink>Tab2</button>
            <clr-tab-content *clrIfActive>Content2</clr-tab-content>
        </clr-tab>
    </clr-tabs>
   `,
})
class NgIfSecondTest {
  @ViewChild('first') firstTab: ClrTab;
}

@Component({
  template: `
    <clr-tabs>
        <clr-tab>
            <button clrTabLink>ParentTab 1</button>
            <clr-tab-content *clrIfActive>Parent Content 1</clr-tab-content>
        </clr-tab>
        <clr-tab>
            <button clrTabLink>Parent Tab 2</button>
                <clr-tab-content *clrIfActive="true">
                    <clr-tabs>
                        <clr-tab>
                            <button clrTabLink>Child Tab1</button>
                            <clr-tab-content *clrIfActive>Child Content1</clr-tab-content>
                        </clr-tab>
                        <clr-tab *ngIf="true">
                            <button clrTabLink>Child Tab2</button>
                            <clr-tab-content *clrIfActive>Child Content2</clr-tab-content>
                        </clr-tab>
                    </clr-tabs>
                </clr-tab-content>
        </clr-tab>
    </clr-tabs>
    `,
})
class NestedTabsTest {
  @ViewChild(ClrTabs) tabsInstance: ClrTabs;
}

@Component({
  template: `
    <clr-tabs>
        <clr-tab>
            <button clrTabLink>Tab1</button>
            <clr-tab-content>Content1</clr-tab-content>
        </clr-tab>
        <clr-tab>
            <button clrTabLink>Tab2</button>
            <clr-tab-content>Content2</clr-tab-content>
        </clr-tab>
    </clr-tabs>
   `,
})
class NoClrIfActiveTest {
  @ViewChild(ClrTabs) tabsInstance: ClrTabs;
}

@Component({
  template: `
    <div style="height: 456px">
        <clr-tabs>
            <clr-tab>
                <button clrTabLink>Tab1</button>
                <clr-tab-content *clrIfActive>
                    <p #content style="height: 100%">Content1</p>
                </clr-tab-content>
            </clr-tab>
        </clr-tabs>
    </div>
   `,
})
class ScalingTestComponent {
  @ViewChild('content') content: ElementRef;
}

describe('Tabs', () => {
  addHelpers();

  describe('Projection', () => {
    let context: TestContext<ClrTabs, TestComponent>;
    let compiled: any;

    beforeEach(function() {
      context = this.create(ClrTabs, TestComponent);
      context.fixture.detectChanges();
      compiled = context.fixture.nativeElement;
    });

    afterEach(() => {
      context.fixture.destroy();
    });

    it('sets the role to tab on overflow button', () => {
      expect(compiled.querySelector('button.nav-link').getAttribute('role')).toEqual('tab');
    });

    it('projects all the links and just the active content', () => {
      expect(compiled.querySelectorAll('button.nav-link').length).toEqual(4);
      expect(compiled.querySelectorAll('section').length).toEqual(1);
      expect(compiled.querySelectorAll('p').length).toEqual(1);

      const content: HTMLElement = compiled.querySelector('p');
      expect(content.textContent.trim()).toMatch('Content1');
    });

    it("projects correctly when there's one or more overflow tabs", () => {
      expect(compiled.querySelector('.tabs-overflow')).toBeNull();
      expect(compiled.querySelector('.tab4')).toBeDefined();
      expect(compiled.querySelector('.tabs-overflow .tab4')).toBeNull();

      context.fixture.componentInstance.inOverflow = true;
      context.fixture.detectChanges();
      expect(compiled.querySelector('.tabs-overflow')).toBeDefined();

      const toggle: HTMLElement = compiled.querySelector('.dropdown-toggle');
      toggle.click();
      context.fixture.detectChanges();
      expect(compiled.querySelector('.tabs-overflow .tab4')).toBeDefined();
    });

    it('does not activate overflow in vertical mode', () => {
      expect(compiled.querySelector('.tabs-overflow')).toBeNull();

      context.fixture.componentInstance.inOverflow = true;
      context.fixture.detectChanges();
      expect(compiled.querySelector('.tabs-overflow')).toBeDefined();

      context.fixture.componentInstance.layout = TabsLayout.VERTICAL;
      context.fixture.detectChanges();
      expect(compiled.querySelector('.tabs-overflow')).toBeNull();
    });

    it('sets the role on the overflow button li to presentation', () => {
      context.fixture.componentInstance.inOverflow = true;
      context.fixture.detectChanges();
      expect(compiled.querySelector('.tabs-overflow .nav-item').getAttribute('role')).toEqual('presentation');
    });
  });

  describe('Nested Projection', () => {
    let context: TestContext<ClrTabs, NestedTabsTest>;
    let compiled: any;

    beforeEach(function() {
      context = this.create(ClrTabs, NestedTabsTest);
      context.fixture.detectChanges();
      compiled = context.fixture.nativeElement;
    });

    afterEach(() => {
      context.fixture.destroy();
    });

    it("shouldn't project nested tab links in parent tabs", () => {
      expect(compiled.querySelectorAll('button.nav-link').length).toEqual(4);
      const parentLevelNav = compiled.querySelectorAll('ul.nav')[0];
      const childLevelNav = compiled.querySelectorAll('ul.nav')[1];
      expect(parentLevelNav.querySelectorAll('button.nav-link').length).toEqual(2);
      expect(childLevelNav.querySelectorAll('button.nav-link').length).toEqual(2);
    });
  });

  describe('Default tab', function() {
    function expectFirstTabActive<T extends TestComponent | NgIfFirstTest | NgIfSecondTest>(testType: Type<T>) {
      const context: TestContext<ClrTabs, T> = this.create(ClrTabs, testType);
      const tabsService = context.getClarityProvider(TabsService);
      expect(tabsService.activeTab).toEqual(context.testComponent.firstTab);
    }

    it('sets the first tab as active by default', function() {
      expectFirstTabActive.call(this, TestComponent);
    });

    it("doesn't ignore tabs with *ngIf", function() {
      expectFirstTabActive.call(this, NgIfFirstTest);
    });

    it("doesn't prioritize tabs with *ngIf", function() {
      expectFirstTabActive.call(this, NgIfSecondTest);
    });
  });

  describe('Tabs layout', function() {
    let context: TestContext<ClrTabs, any>;
    let compiled: any;
    let tabsService: TabsService;

    function initialize<T extends TestComponent | NoClrIfActiveTest>(testType: Type<T>) {
      context = this.create(ClrTabs, testType);
      tabsService = context.fixture.componentInstance.tabsInstance.tabsService;
      compiled = context.fixture.nativeElement;
    }

    it('service defaults to horizontal', function() {
      initialize.call(this, NoClrIfActiveTest);
      expect(context.fixture.componentInstance.tabsInstance.tabsService.layout).toEqual(TabsLayout.HORIZONTAL);
    });

    it('does not contain class for vertical', function() {
      initialize.call(this, TestComponent);
      compiled = context.fixture.nativeElement;
      expect(compiled.querySelector('.tabs-vertical')).toBeNull();
    });

    it('can be switched to vertical', function() {
      initialize.call(this, TestComponent);
      context.fixture.componentInstance.layout = TabsLayout.VERTICAL;
      context.detectChanges();
      expect(tabsService.layout).toBe(TabsLayout.VERTICAL);
      expect(compiled.querySelector('.tabs-vertical')).toBeDefined();
    });
  });

  describe('Without *clrIfActive', () => {
    let context: TestContext<ClrTabs, NoClrIfActiveTest>;
    let compiled: any;
    let contents: HTMLElement;

    beforeEach(function() {
      context = this.create(ClrTabs, NoClrIfActiveTest);
      context.fixture.componentInstance.tabsInstance.ngAfterContentInit();
      context.fixture.detectChanges();
      compiled = context.fixture.nativeElement;
      contents = compiled.querySelectorAll('section');
    });

    afterEach(() => {
      context.fixture.destroy();
    });

    it('projects all the links and all the contents', () => {
      expect(compiled.querySelectorAll('button.nav-link').length).toEqual(2);
      expect(compiled.querySelectorAll('section').length).toEqual(2);

      expect(contents[0].textContent.trim()).toMatch('Content1');
      expect(contents[1].textContent.trim()).toMatch('Content2');
    });

    it('has only one of the elements visible', () => {
      expect(window.getComputedStyle(contents[0]).display).not.toBe('none');
      expect(window.getComputedStyle(contents[1]).display).toBe('none');
    });
  });

  describe('Content scale', () => {
    let context: TestContext<ClrTabs, ScalingTestComponent>;
    let component: ScalingTestComponent;

    beforeEach(function() {
      context = this.create(ClrTabs, ScalingTestComponent);
      component = context.testComponent;
      context.fixture.detectChanges();
    });

    afterEach(() => {
      context.fixture.destroy();
    });

    it('should scale to tabs parent height', () => {
      expect(component.content.nativeElement.offsetHeight).toBe(456);
    });
  });
});

/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ClrTree } from './tree';
import { spec, TestContext } from '../../utils/testing/helpers.spec';
import { ClrTreeViewModule } from './tree-view.module';
import { TreeFeaturesService } from './tree-features.service';
import { RecursiveChildren } from './recursive-children';
import { TreeFocusManagerService } from './tree-focus-manager.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  template: `<clr-tree [clrLazy]="lazy">Hello world <clr-tree-node *ngIf="hasChild">Child</clr-tree-node></clr-tree>`,
})
class TestComponent {
  @ViewChild(ClrTree) tree: ClrTree<void>;

  lazy = false;
  hasChild = false;
}

export default function (): void {
  describe('ClrTree Component', function () {
    type Context = TestContext<ClrTree<void>, TestComponent>;
    spec(ClrTree, TestComponent, ClrTreeViewModule, { imports: [NoopAnimationsModule] });

    it('declares a TreeFeaturesService provider', function (this: Context) {
      expect(this.getClarityProvider(TreeFeaturesService, null)).not.toBeNull();
    });

    it('accepts a [clrLazy] input and forwards it to the TreeFeaturesService', function (this: Context) {
      const featuresService = this.getClarityProvider(TreeFeaturesService);
      expect(featuresService.eager).toBe(true);
      this.hostComponent.lazy = true;
      this.detectChanges();
      expect(featuresService.eager).toBe(false);
    });

    it('projects content', function (this: Context) {
      expect(this.clarityElement.textContent).toContain('Hello world');
    });

    it('adds the aria-multiselectable if tree is selectable and has children', function (this: Context) {
      expect(this.clarityElement.getAttribute('aria-multiselectable')).toBe('false');
      this.getClarityProvider(TreeFeaturesService).selectable = true;
      this.hostComponent.hasChild = true;
      this.detectChanges();
      expect(this.clarityElement.getAttribute('aria-multiselectable')).toBe('true');
    });

    it('creates a clr-recursive-children component if the tree is recursive', function (this: Context) {
      expect(this.fixture.debugElement.query(By.directive(RecursiveChildren))).toBeFalsy();
      // Using an empty tree and checking reference equality because I don't want to create full models for this.
      const emptyTree = [];
      this.getClarityProvider(TreeFeaturesService).recursion = {
        template: null,
        root: emptyTree,
      };
      this.detectChanges();
      const recursiveChildrenDE = this.fixture.debugElement.query(By.directive(RecursiveChildren));
      expect(recursiveChildrenDE).toBeTruthy();
      expect((recursiveChildrenDE.componentInstance as RecursiveChildren<void>).children).toBe(emptyTree);
    });

    it('gets tree role by default', function (this: Context) {
      expect(this.clarityElement.getAttribute('role')).toBe('tree');
    });

    it('calls focusManager.focusFirstVisibleNode when focus is received', function (this: Context) {
      const focusManager = this.getClarityProvider(TreeFocusManagerService);
      spyOn(focusManager, 'focusFirstVisibleNode');
      this.clarityElement.focus();
      expect(focusManager.focusFirstVisibleNode).toHaveBeenCalled();
    });

    it('removes tabindex once focus is shifted to the first visiible child', function (this: Context) {
      expect(this.clarityDirective.tabindex).toBe(0);
      this.clarityElement.focus();
      expect(this.clarityDirective.tabindex).toBeUndefined();
    });
  });
}

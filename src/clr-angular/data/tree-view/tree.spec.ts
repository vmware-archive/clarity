/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
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

@Component({
  template: `<clr-tree [clrLazy]="lazy">Hello world</clr-tree>`,
})
class TestComponent {
  @ViewChild(ClrTree) tree: ClrTree<void>;

  lazy = false;
}

export default function(): void {
  describe('ClrTree Component', function() {
    type Context = TestContext<ClrTree<void>, TestComponent>;
    spec(ClrTree, TestComponent, ClrTreeViewModule);

    it('declares a TreeFeaturesService provider', function(this: Context) {
      expect(this.getClarityProvider(TreeFeaturesService, null)).not.toBeNull();
    });

    it('accepts a [clrLazy] input and forwards it to the TreeFeaturesService', function(this: Context) {
      const featuresService = this.getClarityProvider(TreeFeaturesService);
      expect(featuresService.eager).toBe(true);
      this.hostComponent.lazy = true;
      this.detectChanges();
      expect(featuresService.eager).toBe(false);
    });

    it('projects content', function(this: Context) {
      expect(this.clarityElement.textContent).toContain('Hello world');
    });

    it('creates a clr-recursive-children component if the tree is recursive', function(this: Context) {
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
      expect((<RecursiveChildren<void>>recursiveChildrenDE.componentInstance).children).toBe(emptyTree);
    });
  });
}

/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Expand } from '../../utils/expand/providers/expand';
import { spec, TestContext } from '../../utils/testing/helpers.spec';
import { RecursiveTreeNodeModel } from './models/recursive-tree-node.model';
import { RecursiveChildren } from './recursive-children';
import { TreeFeaturesService } from './tree-features.service';
import { ClrRecursiveForOfContext } from './recursive-for-of';

/*
 * Some utilities for this spec
 */

interface TestNode {
  name: string;
  children?: TestNode[];
}

function getChildren(node: TestNode) {
  return node.children;
}

const TEST_ROOT: RecursiveTreeNodeModel<TestNode> = new RecursiveTreeNodeModel(
  {
    name: 'root',
    children: [
      { name: 'A', children: [{ name: 'AA' }, { name: 'AB' }] },
      { name: 'B', children: [{ name: 'BA' }, { name: 'BB' }] },
      { name: 'C' },
    ],
  },
  null,
  getChildren
);

@Component({
  template: `
    <clr-recursive-children [parent]="parent" [children]="children"></clr-recursive-children>
    <ng-template #template let-node>{{node.name}}</ng-template>
  `,
})
class TestComponent {
  @ViewChild('template') template: TemplateRef<ClrRecursiveForOfContext<TestNode>>;

  parent = TEST_ROOT;
  children: RecursiveTreeNodeModel<TestNode>[];
}

export default function(): void {
  describe('RecursiveChildren Component', function() {
    type Context = TestContext<RecursiveChildren<TestNode>, TestComponent> & {
      featuresService: TreeFeaturesService<TestNode>;
      expandService: Expand;
    };
    spec(RecursiveChildren, TestComponent, undefined, { providers: [TreeFeaturesService, Expand] });

    beforeEach(function(this: Context) {
      this.featuresService = this.getProvider<TreeFeaturesService<TestNode>>(TreeFeaturesService);
      this.expandService = this.getProvider(Expand);
    });

    it('can create a ClrRecursiveForOfContext for a node', function(this: Context) {
      expect(this.clarityDirective.getContext(TEST_ROOT)).toEqual({
        $implicit: TEST_ROOT.model,
        clrModel: TEST_ROOT,
      });
    });

    it('does not render anything if the tree is not recursive', function(this: Context) {
      expect(this.clarityElement.textContent.trim()).toBe('');
    });

    it('renders children if the tree is eager', function(this: Context) {
      this.featuresService.recursion = {
        template: this.hostComponent.template,
        root: [TEST_ROOT],
      };
      this.detectChanges();
      expect(this.clarityElement.textContent).toMatch(/A\s*B\s*C/);
    });

    it('does not render anything if the tree is lazy and the parent is collapsed', function(this: Context) {
      this.featuresService.recursion = {
        template: this.hostComponent.template,
        root: [TEST_ROOT],
      };
      this.featuresService.eager = false;
      this.detectChanges();
      expect(this.clarityElement.textContent.trim()).toBe('');
    });

    it('renders children if the tree is lazy and the parent is expanded', function(this: Context) {
      this.featuresService.recursion = {
        template: this.hostComponent.template,
        root: [TEST_ROOT],
      };
      this.featuresService.eager = false;
      this.expandService.expanded = true;
      this.detectChanges();
      expect(this.clarityElement.textContent).toMatch(/A\s*B\s*C/);
    });

    it('renders children even if there is no parent', function(this: Context) {
      this.featuresService.recursion = {
        template: this.hostComponent.template,
        root: [TEST_ROOT],
      };
      delete this.hostComponent.parent;
      this.hostComponent.children = TEST_ROOT.children;
      this.detectChanges();
      expect(this.clarityElement.textContent).toMatch(/A\s*B\s*C/);
    });

    // Just like other specs, this is not nearly as exhaustive as I would like it to be due to time constraints.
  });
}

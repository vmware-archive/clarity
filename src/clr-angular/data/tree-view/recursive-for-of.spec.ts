/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecursiveTreeNodeModel } from './models/recursive-tree-node.model';
import { TreeFeaturesService } from './tree-features.service';
import { ClrRecursiveForOf, ClrRecursiveForOfContext } from './recursive-for-of';

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

const TEST_ROOT: TestNode = {
  name: 'root',
  children: [
    { name: 'A', children: [{ name: 'AA' }, { name: 'AB' }] },
    { name: 'B', children: [{ name: 'BA' }, { name: 'BB' }] },
    { name: 'C' },
  ],
};

@Component({
  template: `
    <div *clrRecursiveFor="let node of root; getChildren: getChildren"></div>
  `,
})
class TestComponent {
  @ViewChild(ClrRecursiveForOf) recursiveForOf: ClrRecursiveForOf<TestNode>;
  @ViewChild(TemplateRef) template: TemplateRef<ClrRecursiveForOfContext<TestNode>>;

  root: TestNode | TestNode[] = TEST_ROOT;
  getChildren = getChildren;
}

interface Context {
  fixture: ComponentFixture<TestComponent>;
  hostComponent: TestComponent;
  clarityDirective: ClrRecursiveForOf<TestNode>;
  featuresService: TreeFeaturesService<TestNode>;
}

export default function(): void {
  describe('RecursiveChildren Component', function() {
    // Can't use our helpers in their current state because it's a structural directive
    beforeEach(function(this: Context) {
      TestBed.configureTestingModule({
        declarations: [ClrRecursiveForOf, TestComponent],
        providers: [TreeFeaturesService],
      });
      this.fixture = TestBed.createComponent(TestComponent);
      this.fixture.detectChanges();
      this.hostComponent = this.fixture.componentInstance;
      this.clarityDirective = this.fixture.componentInstance.recursiveForOf;
      this.featuresService = TestBed.get(TreeFeaturesService);
    });

    it('accepts a [clrRecursiveForOf] input', function(this: Context) {
      expect(this.clarityDirective.nodes).toBe(TEST_ROOT);
    });

    it('accepts a [clrRecursiveForOfGetChildren] input', function(this: Context) {
      expect(this.clarityDirective.getChildren).toBe(getChildren);
    });

    it('initializes the recursion service with the correct values', function(this: Context) {
      expect(this.featuresService.recursion).toBeTruthy();
      expect(this.featuresService.recursion.template).toBe(this.hostComponent.template);
      expect(this.featuresService.recursion.root).toEqual([new RecursiveTreeNodeModel(TEST_ROOT, null, getChildren)]);
    });

    it('updates the recursion service if the nodes change', function(this: Context) {
      this.hostComponent.root = TEST_ROOT.children[0];
      this.fixture.detectChanges();
      expect(this.featuresService.recursion.root).toEqual([
        new RecursiveTreeNodeModel(TEST_ROOT.children[0], null, getChildren),
      ]);
    });

    it('accepts multiple roots', function(this: Context) {
      this.hostComponent.root = [TEST_ROOT, TEST_ROOT];
      this.fixture.detectChanges();
      const wrappedRoot = new RecursiveTreeNodeModel(TEST_ROOT, null, getChildren);
      expect(this.featuresService.recursion.root).toEqual([wrappedRoot, wrappedRoot]);
    });
  });
}

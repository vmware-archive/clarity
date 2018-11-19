/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import { fakeAsync, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RecursiveTreeNodeModel } from './models/recursive-tree-node.model';

import { ClrTreeViewModule } from './tree-view.module';
import { ClrIconModule } from '../../icon/icon.module';
import { Expand } from '../../utils/expand/providers/expand';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { UNIQUE_ID } from '../../utils/id-generator/id-generator.service';
import { spec, TestContext } from '../../utils/testing/helpers.spec';
import { DeclarativeTreeNodeModel } from './models/declarative-tree-node.model';
import { ClrSelectedState } from './models/selected-state.enum';
import { TreeFeaturesService } from './tree-features.service';
import { ClrTreeNode } from './tree-node';

@Component({
  template: `<clr-tree-node #node [(clrSelected)]="selected" [(clrExpanded)]="expanded" [clrExpandable]="expandable">
    Hello world
    <clr-tree-node *ngIf="withChild">Child</clr-tree-node>
  </clr-tree-node>`,
})
class TestComponent {
  @ViewChild('node') tree: ClrTreeNode<void>;

  selected = ClrSelectedState.UNSELECTED;
  expanded = false;
  withChild = true;
  expandable: boolean | undefined;
}

interface TsApiContext {
  node: ClrTreeNode<void>;
  parent: ClrTreeNode<void>;
  featureService: TreeFeaturesService<void>;
  expandService: Expand;
}

export default function(): void {
  describe('ClrTreeNode Component', function() {
    type Context = TestContext<ClrTreeNode<void>, TestComponent>;

    describe('Providers', function() {
      spec(ClrTreeNode, TestComponent, ClrTreeViewModule, { imports: [NoopAnimationsModule, ClrIconModule] });

      it('declares a unique id provider', function(this: Context) {
        expect(this.getClarityProvider(UNIQUE_ID, null)).not.toBeNull();
      });

      it('declares a TreeFeaturesService provider', function(this: Context) {
        expect(this.getClarityProvider(TreeFeaturesService, null)).not.toBeNull();
      });
    });

    describe('Typescript API', function() {
      beforeEach(function(this: TsApiContext) {
        this.featureService = new TreeFeaturesService<void>();
        this.expandService = new Expand();
        const stringsService = new ClrCommonStringsService();
        this.parent = new ClrTreeNode(
          'parent',
          undefined,
          this.featureService,
          this.expandService,
          stringsService,
          null
        );
        this.node = new ClrTreeNode('node', this.parent, this.featureService, this.expandService, stringsService, null);
      });

      it('instantiates a DeclarativeTreeNodeModel', function(this: TsApiContext) {
        expect(this.node._model instanceof DeclarativeTreeNodeModel).toBeTrue();
        expect(this.node._model.parent).toBe(this.parent._model);
      });

      it('is selected if the model is selected', function(this: TsApiContext) {
        expect(this.node.selected).toBe(ClrSelectedState.UNSELECTED);
        this.node._model.selected.next(ClrSelectedState.SELECTED);
        expect(this.node.selected).toBe(ClrSelectedState.SELECTED);
      });

      it('selects the model when selected and propagates selection if the tree is eager', function(this: TsApiContext) {
        this.featureService.eager = true;
        const spy = spyOn(this.node._model, 'setSelected');
        this.node.selected = ClrSelectedState.SELECTED;
        expect(spy).toHaveBeenCalledWith(ClrSelectedState.SELECTED, true, true);
        this.node.selected = ClrSelectedState.INDETERMINATE;
        expect(spy).toHaveBeenCalledWith(ClrSelectedState.INDETERMINATE, true, true);
      });

      it('selects the model when selected and does not propagate selection if the tree is lazy', function(this: TsApiContext) {
        this.featureService.eager = false;
        const spy = spyOn(this.node._model, 'setSelected');
        this.node.selected = ClrSelectedState.SELECTED;
        expect(spy).toHaveBeenCalledWith(ClrSelectedState.SELECTED, false, false);
        this.node.selected = ClrSelectedState.INDETERMINATE;
        expect(spy).toHaveBeenCalledWith(ClrSelectedState.INDETERMINATE, false, false);
      });

      it('gracefully handles boolean selection', function(this: TsApiContext) {
        this.node.selected = true;
        expect(this.node._model.selected.value).toBe(ClrSelectedState.SELECTED);
        this.node.selected = false;
        expect(this.node._model.selected.value).toBe(ClrSelectedState.UNSELECTED);
      });

      it('makes the tree selectable if selection is set', function(this: TsApiContext) {
        expect(this.featureService.selectable).toBeFalse();
        this.node.selected = ClrSelectedState.UNSELECTED;
        expect(this.featureService.selectable).toBeTrue();
      });

      it('is not expandable by default', function(this: TsApiContext) {
        expect(this.node.isExpandable()).toBeFalse();
      });

      it('is expandable if the Expand service is expandable', function(this: TsApiContext) {
        this.expandService.expandable++;
        expect(this.node.isExpandable()).toBeTrue();
      });

      it('is expandable if it has children', function(this: TsApiContext) {
        this.node._model.children.push(new DeclarativeTreeNodeModel(<DeclarativeTreeNodeModel<void>>this.node._model));
        expect(this.node.isExpandable()).toBeTrue();
      });

      it('is expanded if the expand service is', function(this: TsApiContext) {
        expect(this.node.expanded).toBeFalse();
        this.expandService.toggle();
        expect(this.node.expanded).toBeTrue();
      });

      it('is expandable and does not fetch children if overriden to be expandable', function(this: TsApiContext) {
        const recursiveModel = new RecursiveTreeNodeModel(null, null, () => undefined);
        const spy = spyOnProperty(recursiveModel, 'children', 'get');
        this.node._model = recursiveModel;
        this.node.expandable = true;
        expect(this.node.isExpandable()).toBeTrue();
        expect(spy).not.toHaveBeenCalled();
      });

      it('is not expandable and does not fetch children if overriden not to be expandable', function(this: TsApiContext) {
        const recursiveModel = new RecursiveTreeNodeModel(null, null, () => undefined);
        const spy = spyOnProperty(recursiveModel, 'children', 'get');
        this.node._model = recursiveModel;
        this.node.expandable = false;
        expect(this.node.isExpandable()).toBeFalse();
        expect(spy).not.toHaveBeenCalled();
      });

      it('tells the expand service to expand', function(this: TsApiContext) {
        this.node.expanded = true;
        expect(this.expandService.expanded).toBeTrue();
      });
    });

    describe('Template API', function() {
      spec(ClrTreeNode, TestComponent, ClrTreeViewModule, { imports: [NoopAnimationsModule, ClrIconModule] });

      it(
        'offers a [(clrSelected)] two-way binding',
        fakeAsync(function(this: Context) {
          this.hostComponent.selected = ClrSelectedState.SELECTED;
          this.detectChanges();
          expect(this.clarityDirective.selected).toBe(ClrSelectedState.SELECTED);
          this.clarityDirective.selected = ClrSelectedState.INDETERMINATE;
          // We need fakeAsync and tick because the EventEmitter is asynchronous
          tick();
          // I don't know why Typescript forces me to cast this
          expect<ClrSelectedState>(this.hostComponent.selected).toBe(ClrSelectedState.INDETERMINATE);
        })
      );

      it('offers a [(clrExpanded)] two-way binding', function(this: Context) {
        this.hostComponent.expanded = true;
        this.detectChanges();
        expect(this.clarityDirective.expanded).toBeTrue();
        this.clarityDirective.expanded = false;
        expect(this.hostComponent.expanded).toBeFalse();
      });
    });

    describe('View', function() {
      spec(ClrTreeNode, TestComponent, ClrTreeViewModule, { imports: [NoopAnimationsModule, ClrIconModule] });

      it('projects content', function(this: Context) {
        expect(this.clarityElement.textContent).toContain('Hello world');
      });

      it('hides children when not expanded', function(this: Context) {
        const childrenContainer = this.clarityElement.querySelector('.clr-treenode-children');
        expect(childrenContainer.textContent).toContain('Child');
        expect(getComputedStyle(childrenContainer).height).toBe('0px');
        this.clarityDirective.expanded = true;
        this.detectChanges();
        expect(getComputedStyle(childrenContainer).height).not.toBe('0px');
      });

      it('adds the .clr-tree-node class to the host', function(this: Context) {
        expect(this.clarityElement.classList).toContain('clr-tree-node');
      });

      it('adds the tree role to root nodes', function(this: Context) {
        expect(this.clarityElement.getAttribute('role')).toBe('tree');
      });

      it('adds the treeitem role to children nodes', function(this: Context) {
        expect(this.clarityElement.querySelector('clr-tree-node').getAttribute('role')).toBe('treeitem');
      });

      it('adds the aria-multiselectable attribute to the root node when the tree is selectable', function(this: Context) {
        expect(this.clarityElement.getAttribute('aria-multiselectable')).toBe('true');
        expect(this.clarityElement.querySelector('clr-tree-node').getAttribute('aria-multiselectable')).toBeNull();
        this.getClarityProvider(TreeFeaturesService).selectable = false;
        this.detectChanges();
        expect(this.clarityElement.getAttribute('aria-multiselectable')).toBeNull();
      });

      it('adds the aria-selected attribute to all nodes when the tree is selectable', function(this: Context) {
        expect(this.clarityElement.getAttribute('aria-selected')).toBe('false');
        expect(this.clarityElement.querySelector('clr-tree-node').getAttribute('aria-selected')).toBe('false');
        this.clarityDirective.selected = ClrSelectedState.SELECTED;
        this.detectChanges();
        expect(this.clarityElement.getAttribute('aria-selected')).toBe('true');
        this.getClarityProvider(TreeFeaturesService).selectable = false;
        this.detectChanges();
        expect(this.clarityElement.getAttribute('aria-multiselectable')).toBeNull();
      });

      it('displays a caret when expandable', function(this: Context) {
        expect(this.clarityElement.querySelector('.clr-treenode-caret')).not.toBeNull();
        this.hostComponent.withChild = false;
        this.detectChanges();
        expect(this.clarityElement.querySelector('.clr-treenode-caret')).toBeNull();
      });

      it('replaces the caret with a spinner when the expand service is loading', function(this: Context) {
        this.getClarityProvider(Expand).loading = true;
        this.detectChanges();
        expect(this.clarityElement.querySelector('.clr-treenode-caret')).toBeNull();
        expect(this.clarityElement.querySelector('.clr-treenode-spinner')).not.toBeNull();
      });

      it('replaces the caret with a spinner when the model is loading', function(this: Context) {
        this.clarityDirective._model.loading = true;
        this.detectChanges();
        expect(this.clarityElement.querySelector('.clr-treenode-caret')).toBeNull();
        expect(this.clarityElement.querySelector('.clr-treenode-spinner')).not.toBeNull();
      });

      it('expands and collapses when the caret is clicked', function(this: Context) {
        const caret: HTMLElement = this.clarityElement.querySelector('.clr-treenode-caret');
        caret.click();
        expect(this.clarityDirective.expanded).toBeTrue();
        caret.click();
        expect(this.clarityDirective.expanded).toBeFalse();
      });

      it('adds the aria-expanded attribute on the caret', function(this: Context) {
        const caret = this.clarityElement.querySelector('.clr-treenode-caret');
        expect(caret.getAttribute('aria-expanded')).toBe('false');
        this.clarityDirective.expanded = true;
        this.detectChanges();
        expect(caret.getAttribute('aria-expanded')).toBe('true');
      });

      it('displays a checkbox when selectable', function(this: Context) {
        expect(this.clarityElement.querySelector('input[type=checkbox]')).not.toBeNull();
        this.getClarityProvider(TreeFeaturesService).selectable = false;
        this.detectChanges();
        expect(this.clarityElement.querySelector('input[type=checkbox]')).toBeNull();
      });

      it('toggles selection when the checkbox is clicked', function(this: Context) {
        const spy = spyOn(this.clarityDirective._model, 'toggleSelection').and.callThrough();
        const checkbox: HTMLElement = this.clarityElement.querySelector('input[type=checkbox]');
        checkbox.click();
        // Smart tree propagates selection
        expect(spy).toHaveBeenCalledWith(true);
        this.getClarityProvider(TreeFeaturesService).eager = false;
        checkbox.click();
        // Non-smart tree does not propagate selection
        expect(spy).toHaveBeenCalledWith(false);
      });

      it('marks the checkbox as unchecked when unselected', function(this: Context) {
        const checkbox: HTMLInputElement = this.clarityElement.querySelector('input[type=checkbox]');
        this.clarityDirective.selected = ClrSelectedState.UNSELECTED;
        this.detectChanges();
        expect(checkbox.checked).toBeFalse();
        expect(checkbox.indeterminate).toBeFalse();
      });

      it('marks the checkbox as checked when selected', function(this: Context) {
        const checkbox: HTMLInputElement = this.clarityElement.querySelector('input[type=checkbox]');
        this.clarityDirective.selected = ClrSelectedState.SELECTED;
        this.detectChanges();
        expect(checkbox.checked).toBeTrue();
        expect(checkbox.indeterminate).toBeFalse();
      });

      it('marks the checkbox as indeterminate when indeterminate', function(this: Context) {
        const checkbox: HTMLInputElement = this.clarityElement.querySelector('input[type=checkbox]');
        this.clarityDirective.selected = ClrSelectedState.INDETERMINATE;
        this.detectChanges();
        expect(checkbox.checked).toBeFalse();
        expect(checkbox.indeterminate).toBeTrue();
      });

      it('adds the group role on the children container if the node has children', function(this: Context) {
        const childrenContainer = this.clarityElement.querySelector('.clr-treenode-children');
        expect(childrenContainer.getAttribute('role')).toBe('group');
        this.hostComponent.withChild = false;
        this.detectChanges();
        expect(childrenContainer.getAttribute('role')).toBeNull();
      });
    });
  });
}

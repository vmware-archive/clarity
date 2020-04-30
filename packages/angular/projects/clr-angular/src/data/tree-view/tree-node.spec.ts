/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild, PLATFORM_ID } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RecursiveTreeNodeModel } from './models/recursive-tree-node.model';

import { ClrTreeViewModule } from './tree-view.module';
import { ClrIconModule } from '../../icon/icon.module';
import { IfExpandService } from '../../utils/conditional/if-expanded.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { UNIQUE_ID } from '../../utils/id-generator/id-generator.service';
import { spec, TestContext } from '../../utils/testing/helpers.spec';
import { DeclarativeTreeNodeModel } from './models/declarative-tree-node.model';
import { ClrSelectedState } from './models/selected-state.enum';
import { TreeFeaturesService } from './tree-features.service';
import { TreeFocusManagerService } from './tree-focus-manager.service';
import { ClrTreeNode } from './tree-node';
import { KeyCodes } from './../../utils/enums/key-codes.enum';

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
  expandService: IfExpandService;
  focusManagerService: TreeFocusManagerService<void>;
}

export default function (): void {
  describe('ClrTreeNode Component', function () {
    type Context = TestContext<ClrTreeNode<void>, TestComponent>;

    describe('Providers', function () {
      spec(ClrTreeNode, TestComponent, ClrTreeViewModule, {
        imports: [NoopAnimationsModule, ClrIconModule],
        providers: [TreeFocusManagerService],
      });

      it('declares a unique id provider', function (this: Context) {
        expect(this.getClarityProvider(UNIQUE_ID, null)).not.toBeNull();
      });

      it('declares a TreeFeaturesService provider', function (this: Context) {
        expect(this.getClarityProvider(TreeFeaturesService, null)).not.toBeNull();
      });
    });

    describe('Typescript API', function () {
      beforeEach(function (this: TsApiContext) {
        this.featureService = new TreeFeaturesService<void>();
        this.expandService = new IfExpandService();
        const stringsService = new ClrCommonStringsService();
        this.focusManagerService = new TreeFocusManagerService<void>();
        const platformID = { provide: PLATFORM_ID, useValue: 'browser' };
        this.parent = new ClrTreeNode(
          'parent',
          platformID,
          undefined,
          this.featureService,
          this.expandService,
          stringsService,
          this.focusManagerService,
          null
        );
        this.node = new ClrTreeNode(
          'node',
          platformID,
          this.parent,
          this.featureService,
          this.expandService,
          stringsService,
          this.focusManagerService,
          null
        );
      });

      it('instantiates a DeclarativeTreeNodeModel', function (this: TsApiContext) {
        expect(this.node._model instanceof DeclarativeTreeNodeModel).toBeTrue();
        expect(this.node._model.parent).toBe(this.parent._model);
      });

      it('is selected if the model is selected', function (this: TsApiContext) {
        expect(this.node.selected).toBe(ClrSelectedState.UNSELECTED);
        this.node._model.selected.next(ClrSelectedState.SELECTED);
        expect(this.node.selected).toBe(ClrSelectedState.SELECTED);
      });

      it('selects the model when selected and propagates selection if the tree is eager', function (this: TsApiContext) {
        this.featureService.eager = true;
        const spy = spyOn(this.node._model, 'setSelected');
        this.node.selected = ClrSelectedState.SELECTED;
        expect(spy).toHaveBeenCalledWith(ClrSelectedState.SELECTED, true, true);
        this.node.selected = ClrSelectedState.INDETERMINATE;
        expect(spy).toHaveBeenCalledWith(ClrSelectedState.INDETERMINATE, true, true);
      });

      it('selects the model when selected and does not propagate selection if the tree is lazy', function (this: TsApiContext) {
        this.featureService.eager = false;
        const spy = spyOn(this.node._model, 'setSelected');
        this.node.selected = ClrSelectedState.SELECTED;
        expect(spy).toHaveBeenCalledWith(ClrSelectedState.SELECTED, false, false);
        this.node.selected = ClrSelectedState.INDETERMINATE;
        expect(spy).toHaveBeenCalledWith(ClrSelectedState.INDETERMINATE, false, false);
      });

      it('gracefully handles boolean selection', function (this: TsApiContext) {
        this.node.selected = true;
        expect(this.node._model.selected.value).toBe(ClrSelectedState.SELECTED);
        this.node.selected = false;
        expect(this.node._model.selected.value).toBe(ClrSelectedState.UNSELECTED);
      });

      it('makes the tree selectable if selection is set', function (this: TsApiContext) {
        expect(this.featureService.selectable).toBeFalse();
        this.node.selected = ClrSelectedState.UNSELECTED;
        expect(this.featureService.selectable).toBeTrue();
      });

      it('is not expandable by default', function (this: TsApiContext) {
        expect(this.node.isExpandable()).toBeFalse();
      });

      it('is expandable if the Expand service is expandable', function (this: TsApiContext) {
        this.expandService.expandable++;
        expect(this.node.isExpandable()).toBeTrue();
      });

      it('is expandable if it has children', function (this: TsApiContext) {
        this.node._model.children.push(
          new DeclarativeTreeNodeModel(this.node._model as DeclarativeTreeNodeModel<void>)
        );
        expect(this.node.isExpandable()).toBeTrue();
      });

      it('is expandable handles no children', function (this: TsApiContext) {
        this.node._model.children = undefined;
        expect(() => {
          this.node.isExpandable();
        }).not.toThrow();
      });

      it('is expanded if the expand service is', function (this: TsApiContext) {
        expect(this.node.expanded).toBeFalse();
        this.expandService.toggle();
        expect(this.node.expanded).toBeTrue();
      });

      it('is expandable and does not fetch children if overriden to be expandable', function (this: TsApiContext) {
        const recursiveModel = new RecursiveTreeNodeModel(null, null, () => undefined, this.featureService);
        const spy = spyOnProperty(recursiveModel, 'children', 'get');
        this.node._model = recursiveModel;
        this.node.expandable = true;
        expect(this.node.isExpandable()).toBeTrue();
        expect(spy).not.toHaveBeenCalled();
      });

      it('is not expandable and does not fetch children if overriden not to be expandable', function (this: TsApiContext) {
        const recursiveModel = new RecursiveTreeNodeModel(null, null, () => undefined, this.featureService);
        const spy = spyOnProperty(recursiveModel, 'children', 'get');
        this.node._model = recursiveModel;
        this.node.expandable = false;
        expect(this.node.isExpandable()).toBeFalse();
        expect(spy).not.toHaveBeenCalled();
      });

      it('tells the expand service to expand', function (this: TsApiContext) {
        this.node.expanded = true;
        expect(this.expandService.expanded).toBeTrue();
      });
    });

    describe('Template API', function () {
      spec(ClrTreeNode, TestComponent, ClrTreeViewModule, {
        imports: [NoopAnimationsModule, ClrIconModule],
        providers: [TreeFocusManagerService],
      });

      it('offers a [(clrSelected)] two-way binding, but skips emitting output when setting input', function (this: Context) {
        this.hostComponent.selected = ClrSelectedState.SELECTED;
        this.detectChanges();
        expect(this.clarityDirective.selected).toBe(ClrSelectedState.SELECTED);
        this.clarityDirective.selected = ClrSelectedState.UNSELECTED;
        this.detectChanges();
        // This may seem unintuitive, but actually is due to the tree flickering issues.
        // We don't want to emit the change in this case, or it can get confused.
        // Here we are expecting that the output has not emitted.
        // See https://github.com/vmware/clarity/issues/3073
        expect<ClrSelectedState>(this.hostComponent.selected).toBe(ClrSelectedState.SELECTED);
        // By setting the model here, we will emit the binding since it's not through the input
        this.clarityDirective._model.setSelected(ClrSelectedState.INDETERMINATE, true, true);
        this.detectChanges();
        expect<ClrSelectedState>(this.hostComponent.selected).toBe(ClrSelectedState.INDETERMINATE);
      });

      it('offers a [(clrExpanded)] two-way binding', function (this: Context) {
        this.hostComponent.expanded = true;
        this.detectChanges();
        expect(this.clarityDirective.expanded).toBeTrue();
        this.clarityDirective.expanded = false;
        expect(this.hostComponent.expanded).toBeFalse();
      });
    });

    describe('View', function () {
      spec(ClrTreeNode, TestComponent, ClrTreeViewModule, {
        imports: [NoopAnimationsModule, ClrIconModule],
        providers: [TreeFocusManagerService],
      });

      it('projects content', function (this: Context) {
        expect(this.clarityElement.textContent).toContain('Hello world');
      });

      it('hides children when not expanded', function (this: Context) {
        expect(this.clarityElement.querySelector('.clr-treenode-children').clientHeight).toBe(0);
        this.clarityDirective.expanded = true;
        this.detectChanges();
        expect(this.clarityElement.querySelector('.clr-treenode-children').clientHeight).not.toBe(0);
        expect(this.clarityElement.querySelector('.clr-treenode-children').textContent).toContain('Child');
      });

      it('adds the .clr-tree-node class to the host', function (this: Context) {
        expect(this.clarityElement.classList).toContain('clr-tree-node');
      });

      it('displays a caret when expandable', function (this: Context) {
        expect(this.clarityElement.querySelector('.clr-treenode-caret')).not.toBeNull();
        this.hostComponent.withChild = false;
        this.detectChanges();
        expect(this.clarityElement.querySelector('.clr-treenode-caret')).toBeNull();
      });

      it('replaces the caret with a spinner when the expand service is loading', function (this: Context) {
        this.getClarityProvider(IfExpandService).loading = true;
        this.detectChanges();
        expect(this.clarityElement.querySelector('.clr-treenode-caret')).toBeNull();
        expect(this.clarityElement.querySelector('.clr-treenode-spinner')).not.toBeNull();
      });

      it('replaces the caret with a spinner when the model is loading', function (this: Context) {
        this.clarityDirective._model.loading = true;
        this.detectChanges();
        expect(this.clarityElement.querySelector('.clr-treenode-caret')).toBeNull();
        expect(this.clarityElement.querySelector('.clr-treenode-spinner')).not.toBeNull();
      });

      it('expands and collapses when the caret is clicked', function (this: Context) {
        const caret: HTMLElement = this.clarityElement.querySelector('.clr-treenode-caret');
        caret.click();
        expect(this.clarityDirective.expanded).toBeTrue();
        caret.click();
        expect(this.clarityDirective.expanded).toBeFalse();
      });

      it('displays a checkbox when selectable', function (this: Context) {
        expect(this.clarityElement.querySelector('input[type=checkbox]')).not.toBeNull();
        this.getClarityProvider(TreeFeaturesService).selectable = false;
        this.detectChanges();
        expect(this.clarityElement.querySelector('input[type=checkbox]')).toBeNull();
      });

      it('toggles selection when the checkbox is clicked', function (this: Context) {
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

      it('marks the checkbox as unchecked when unselected', function (this: Context) {
        const checkbox: HTMLInputElement = this.clarityElement.querySelector('input[type=checkbox]');
        this.clarityDirective.selected = ClrSelectedState.UNSELECTED;
        this.detectChanges();
        expect(checkbox.checked).toBeFalse();
        expect(checkbox.indeterminate).toBeFalse();
      });

      it('marks the checkbox as checked when selected', function (this: Context) {
        const checkbox: HTMLInputElement = this.clarityElement.querySelector('input[type=checkbox]');
        this.clarityDirective.selected = ClrSelectedState.SELECTED;
        this.detectChanges();
        expect(checkbox.checked).toBeTrue();
        expect(checkbox.indeterminate).toBeFalse();
      });

      it('marks the checkbox as indeterminate when indeterminate', function (this: Context) {
        const checkbox: HTMLInputElement = this.clarityElement.querySelector('input[type=checkbox]');
        this.clarityDirective.selected = ClrSelectedState.INDETERMINATE;
        this.detectChanges();
        expect(checkbox.checked).toBeFalse();
        expect(checkbox.indeterminate).toBeTrue();
      });

      it('adds the group role on the children container if the node has children', function (this: Context) {
        this.clarityDirective.expanded = true;
        this.detectChanges();
        const childrenContainer = this.clarityElement.querySelector('.clr-treenode-children');
        expect(childrenContainer.getAttribute('role')).toBe('group');
        this.hostComponent.withChild = false;
        this.detectChanges();
        expect(childrenContainer.getAttribute('role')).toBeNull();
      });
    });

    describe('A11y and Focus Management', function () {
      spec(ClrTreeNode, TestComponent, ClrTreeViewModule, {
        imports: [NoopAnimationsModule, ClrIconModule],
        providers: [TreeFocusManagerService],
      });

      let contentContainer: HTMLElement;
      let focusManager: TreeFocusManagerService<void>;

      beforeEach(function () {
        focusManager = this.getProvider(TreeFocusManagerService);
        contentContainer = this.clarityElement.querySelector('.clr-tree-node-content-container');
      });

      it('adds role treeitem to node content container by default', function (this: Context) {
        expect(contentContainer.getAttribute('role')).toBe('treeitem');
      });

      it('adds the aria-selected attribute to all nodes when the tree is selectable', function (this: Context) {
        expect(contentContainer.getAttribute('aria-selected')).toBe('false');
        this.clarityDirective.selected = ClrSelectedState.SELECTED;
        this.detectChanges();
        expect(contentContainer.getAttribute('aria-selected')).toBe('true');
        this.getClarityProvider(TreeFeaturesService).selectable = false;
        this.detectChanges();
        expect(contentContainer.getAttribute('aria-selected')).toBeNull();
      });

      it('focuses on node content container', function (this: Context) {
        this.clarityDirective.focusTreeNode();
        expect(document.activeElement).toBe(contentContainer);
      });

      it('focuses node content container if caret button is focused', function (this: Context) {
        const caretButton: HTMLElement = this.clarityElement.querySelector('.clr-treenode-caret');
        caretButton.focus();
        expect(document.activeElement).toBe(contentContainer);
      });

      it('focuses node content container if checkbox is focused', function (this: Context) {
        const checkbox: HTMLElement = this.clarityElement.querySelector('.clr-checkbox');
        checkbox.focus();
        expect(document.activeElement).toBe(contentContainer);
      });

      it('assigns tabindex of -1 to content container by default', function (this: Context) {
        expect(this.clarityDirective.contentContainerTabindex).toBe(-1);
        expect(contentContainer.getAttribute('tabindex')).toBe('-1');
      });

      it('focuses node content container if focus is requested', function (this: Context) {
        this.getProvider<TreeFocusManagerService<void>>(TreeFocusManagerService).focusNode(
          this.clarityDirective._model
        );
        expect(document.activeElement).toBe(contentContainer);
      });

      it('assigns tabindex of 0 to content container if focus is requested', function (this: Context) {
        this.getProvider<TreeFocusManagerService<void>>(TreeFocusManagerService).focusNode(
          this.clarityDirective._model
        );
        this.detectChanges();
        expect(this.clarityDirective.contentContainerTabindex).toBe(0);
        expect(contentContainer.getAttribute('tabindex')).toBe('0');
      });

      it('assigns tabindex of -1 to content container if focus is requested on another node', function (this: Context) {
        // the child node model requests focus here
        const anotherNodeModel = this.clarityDirective._model.children[0];
        this.getProvider<TreeFocusManagerService<void>>(TreeFocusManagerService).focusNode(anotherNodeModel);
        expect(this.clarityDirective.contentContainerTabindex).toBe(-1);
        this.detectChanges();
        expect(contentContainer.getAttribute('tabindex')).toBe('-1');
      });

      it('takes default action which is toggling selection state on Enter key if node is selectable', function (this: Context) {
        this.clarityDirective.selected = ClrSelectedState.UNSELECTED;
        expect(this.clarityDirective.selected as ClrSelectedState).toEqual(ClrSelectedState.UNSELECTED);
        contentContainer.dispatchEvent(new KeyboardEvent('keydown', { key: KeyCodes.Enter }));
        expect(this.clarityDirective.selected as ClrSelectedState).toEqual(ClrSelectedState.SELECTED);
        contentContainer.dispatchEvent(new KeyboardEvent('keydown', { key: KeyCodes.Enter }));
        expect(this.clarityDirective.selected as ClrSelectedState).toEqual(ClrSelectedState.UNSELECTED);
      });

      it('takes default action which is toggling selection state on Space key if node is selectable', function (this: Context) {
        this.clarityDirective.selected = ClrSelectedState.UNSELECTED;
        expect(this.clarityDirective.selected as ClrSelectedState).toBe(ClrSelectedState.UNSELECTED);
        contentContainer.dispatchEvent(new KeyboardEvent('keydown', { key: KeyCodes.Space }));
        expect(this.clarityDirective.selected as ClrSelectedState).toBe(ClrSelectedState.SELECTED);
        contentContainer.dispatchEvent(new KeyboardEvent('keydown', { key: KeyCodes.Space }));
        expect(this.clarityDirective.selected as ClrSelectedState).toBe(ClrSelectedState.UNSELECTED);
      });

      it('calls focusManager.focusFirstVisibleNode on Home key', function (this: Context) {
        spyOn(focusManager, 'focusFirstVisibleNode');
        contentContainer.dispatchEvent(new KeyboardEvent('keydown', { key: KeyCodes.Home }));
        expect(focusManager.focusFirstVisibleNode).toHaveBeenCalled();
      });

      it('calls focusManager.focusLastVisibleNode on End key', function (this: Context) {
        spyOn(focusManager, 'focusLastVisibleNode');
        contentContainer.dispatchEvent(new KeyboardEvent('keydown', { key: KeyCodes.End }));
        expect(focusManager.focusLastVisibleNode).toHaveBeenCalled();
      });

      it('calls focusManager.focusNodeAbove on ArrowUp key', function (this: Context) {
        spyOn(focusManager, 'focusNodeAbove');
        contentContainer.dispatchEvent(new KeyboardEvent('keydown', { key: KeyCodes.ArrowUp }));
        expect(focusManager.focusNodeAbove).toHaveBeenCalledWith(this.clarityDirective._model);
      });

      it('calls focusManager.focusNodeBelow on ArrowDown key', function (this: Context) {
        spyOn(focusManager, 'focusNodeBelow');
        contentContainer.dispatchEvent(new KeyboardEvent('keydown', { key: KeyCodes.ArrowDown }));
        expect(focusManager.focusNodeBelow).toHaveBeenCalledWith(this.clarityDirective._model);
      });

      it('expands collapsed node if expandable on ArrowRight key', function (this: Context) {
        this.clarityDirective._model.children = [null]; // children array needs to have something
        expect(this.clarityDirective.expanded).toBeFalse();
        expect(this.clarityDirective.isExpandable()).toBeTrue();
        contentContainer.dispatchEvent(new KeyboardEvent('keydown', { key: KeyCodes.ArrowRight }));
        expect(this.clarityDirective.expanded).toBeTrue();
      });

      it('toggles aria-expanded on expanded property value change on node content container', function (this: Context) {
        this.clarityDirective._model.children = [null]; // children array needs to have something
        expect(this.clarityDirective.expanded).toBeFalse();
        expect(contentContainer.getAttribute('aria-expanded')).toBe('false');
        contentContainer.dispatchEvent(new KeyboardEvent('keydown', { key: KeyCodes.ArrowRight }));
        expect(this.clarityDirective.expanded).toBeTrue();
        this.detectChanges();
        expect(contentContainer.getAttribute('aria-expanded')).toBe('true');
      });

      it('calls focusManager.focusNodeBelow if node is already expanded on ArrowRight key', function (this: Context) {
        this.clarityDirective._model.children = [null]; // children array needs to have something
        this.clarityDirective.expanded = true;
        spyOn(focusManager, 'focusNodeBelow');
        contentContainer.dispatchEvent(new KeyboardEvent('keydown', { key: KeyCodes.ArrowRight }));
        expect(focusManager.focusNodeBelow).toHaveBeenCalledWith(this.clarityDirective._model);
      });

      it('collapses expanded node on ArrowLeft key', function (this: Context) {
        this.clarityDirective._model.children = [null]; // children array needs to have something
        this.clarityDirective.expanded = true;
        contentContainer.dispatchEvent(new KeyboardEvent('keydown', { key: KeyCodes.ArrowLeft }));
        expect(this.clarityDirective.expanded).toBeFalse();
      });

      it('calls focusManager.focusParent if node is already collapsed or not expandable on ArrowLeft key', function (this: Context) {
        spyOn(focusManager, 'focusParent');
        contentContainer.dispatchEvent(new KeyboardEvent('keydown', { key: KeyCodes.ArrowLeft }));
        expect(focusManager.focusParent).toHaveBeenCalledWith(this.clarityDirective._model);
      });
    });
  });
}

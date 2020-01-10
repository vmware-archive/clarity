/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ClrStackBlock } from './stack-block';
import { ClrStackView } from './stack-view';
import { ClrStackViewModule } from './stack-view.module';

@Component({
  template: `
    <clr-stack-block [clrStackViewLevel]="ariaLevel" [clrStackViewSetsize]="ariaSetsize" [clrStackViewPosinset]="ariaPosinset">
      <clr-stack-label>Label</clr-stack-label>
      <clr-stack-content>Content</clr-stack-content>
    </clr-stack-block>
  `,
})
class BasicBlock {
  @ViewChild(ClrStackBlock, { static: false })
  blockInstance: ClrStackBlock;
  ariaLevel: number;
  ariaSetsize: number;
  ariaPosinset: number;
}

@Component({
  template: `
        <clr-stack-block #main>
            <clr-stack-label>Label</clr-stack-label>
            <clr-stack-content>Content</clr-stack-content>
            <clr-stack-block>
                <clr-stack-label>Sub-Label 1</clr-stack-label>
                <clr-stack-content>Sub-Content 1</clr-stack-content>
            </clr-stack-block>
            <clr-stack-block>
                <clr-stack-label>Sub-Label 2</clr-stack-label>
                <clr-stack-content>Sub-Content 2</clr-stack-content>
            </clr-stack-block>
        </clr-stack-block>
   `,
})
class NestedBlocks {
  @ViewChild('main', { static: false })
  blockInstance: ClrStackBlock;
}

@Component({
  template: `
        <clr-stack-block [clrSbExpandable]="true" [(clrSbExpanded)]="expanded">
            <clr-stack-label id="STACK_LABEL_ID">Label</clr-stack-label>
            <clr-stack-content>Content</clr-stack-content>
        </clr-stack-block>
   `,
})
class DynamicBlock {
  @ViewChild(ClrStackBlock, { static: false })
  blockInstance: ClrStackBlock;

  expanded: boolean = false;
}

export default function(): void {
  'use strict';
  describe('StackBlock', () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrStackViewModule, NoopAnimationsModule, FormsModule],
        declarations: [BasicBlock, DynamicBlock, NestedBlocks],
        providers: [ClrStackView],
      });
    });

    afterEach(() => {
      fixture.destroy();
    });

    function getBlockInstance(bFixture: ComponentFixture<any>): ClrStackBlock {
      return bFixture.componentInstance.blockInstance;
    }

    describe('Accessibility', () => {
      let label: HTMLElement;
      beforeEach(() => {
        fixture = TestBed.createComponent(BasicBlock);
        fixture.componentInstance.ariaLevel = 42;
        fixture.componentInstance.ariaPosinset = 32;
        fixture.componentInstance.ariaSetsize = 100;
        fixture.detectChanges();
        label = fixture.nativeElement.querySelector('.stack-block-label');
      });

      it('should attach aria-level to dd.stack-block-content', () => {
        expect(label.getAttribute('aria-level')).toBe(fixture.componentInstance.ariaLevel.toString());
      });

      it('should attach aria-posinset to dd.stack-block-content', () => {
        expect(label.getAttribute('aria-posinset')).toBe(fixture.componentInstance.ariaPosinset.toString());
      });

      it('should attach aria-setsize to dd.stack-block-content', () => {
        expect(label.getAttribute('aria-setsize')).toBe(fixture.componentInstance.ariaSetsize.toString());
      });
    });

    it('projects content', () => {
      fixture = TestBed.createComponent(BasicBlock);
      fixture.detectChanges();
      compiled = fixture.nativeElement;

      expect(compiled.textContent).toMatch(/Label/);
      expect(compiled.textContent).toMatch(/Content/);
    });

    it('is not expandable by default', () => {
      fixture = TestBed.createComponent(BasicBlock);
      fixture.detectChanges();

      expect(getBlockInstance(fixture).expandable).toBeFalsy();
    });

    it('is automatically expandable if has block children', () => {
      fixture = TestBed.createComponent(NestedBlocks);
      fixture.detectChanges();

      expect(getBlockInstance(fixture).expandable).toBeTruthy();
    });

    it('can be made expandable without block children', () => {
      fixture = TestBed.createComponent(DynamicBlock);
      fixture.detectChanges();

      expect(getBlockInstance(fixture).expandable).toBeTruthy();
    });

    it('displays a caret when the stack block is expandable', () => {
      fixture = TestBed.createComponent(DynamicBlock);
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.stack-block-caret')).not.toBeNull();

      getBlockInstance(fixture).expandable = false;

      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.stack-block-caret')).toBeNull();
    });

    it('adds a unique id to the label', () => {
      fixture = TestBed.createComponent(BasicBlock);
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.stack-block-label').id).toContain('clr-id-');
    });

    it('toggles the caret direction based on the expandable property', () => {
      fixture = TestBed.createComponent(DynamicBlock);
      fixture.detectChanges();

      const caret: HTMLElement = fixture.nativeElement.querySelector('.stack-block-caret');

      expect(caret.getAttribute('dir')).toBe('right');

      getBlockInstance(fixture).expanded = true;

      fixture.detectChanges();

      expect(caret.getAttribute('dir')).toBe('down');
    });

    it('adds the on-focus class when the stack label is focused in an expandable but collapsed stack block', () => {
      fixture = TestBed.createComponent(DynamicBlock);
      fixture.detectChanges();

      const block: HTMLElement = fixture.nativeElement.querySelector('clr-stack-block');
      const label: HTMLElement = fixture.nativeElement.querySelector('.stack-block-label');

      expect(block.classList.contains('on-focus')).toBe(false);

      label.focus();
      fixture.detectChanges();

      expect(block.classList.contains('on-focus')).toBe(true);

      label.blur();
      fixture.detectChanges();

      expect(block.classList.contains('on-focus')).toBe(false);
    });

    it('does not add the on-focus class when the stack block is not expandable', () => {
      fixture = TestBed.createComponent(DynamicBlock);
      fixture.detectChanges();

      getBlockInstance(fixture).expandable = false;
      fixture.detectChanges();

      const block: HTMLElement = fixture.nativeElement.querySelector('clr-stack-block');
      const label: HTMLElement = fixture.nativeElement.querySelector('.stack-block-label');

      expect(block.classList.contains('on-focus')).toBe(false);

      label.focus();
      fixture.detectChanges();

      expect(block.classList.contains('on-focus')).toBe(false);
    });

    it('adds a button role on a stack label in an expandable stack block', () => {
      fixture = TestBed.createComponent(DynamicBlock);
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.stack-block-label').getAttribute('role')).toBe('button');

      getBlockInstance(fixture).expandable = false;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.stack-block-label').getAttribute('role')).toBeNull();
    });

    it('adds a tabindex on a stack label in an expandable stack block', () => {
      fixture = TestBed.createComponent(DynamicBlock);
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.stack-block-label').getAttribute('tabindex')).toBe('0');

      getBlockInstance(fixture).expandable = false;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.stack-block-label').getAttribute('tabindex')).toBeNull();
    });

    it('adds the aria-expanded attribute when the stack block is expandable', () => {
      fixture = TestBed.createComponent(DynamicBlock);
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.stack-block-label').getAttribute('aria-expanded')).not.toBeNull();

      getBlockInstance(fixture).expandable = false;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.stack-block-label').getAttribute('aria-expanded')).toBeNull();
    });

    it('sets the aria-expanded attribute to true when the stack block is expanded', () => {
      fixture = TestBed.createComponent(DynamicBlock);
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.stack-block-label').getAttribute('aria-expanded')).toBe('false');

      getBlockInstance(fixture).expanded = true;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.stack-block-label').getAttribute('aria-expanded')).toBe('true');
    });

    it('starts collapsed', () => {
      fixture = TestBed.createComponent(DynamicBlock);
      fixture.detectChanges();

      expect(getBlockInstance(fixture).expanded).toBeFalsy();
    });

    it('expands and collapses when clicking on the label', () => {
      fixture = TestBed.createComponent(DynamicBlock);
      fixture.detectChanges();
      expect(getBlockInstance(fixture).expanded).toBeFalsy();

      fixture.nativeElement.querySelector('clr-stack-label').click();
      fixture.detectChanges();
      expect(getBlockInstance(fixture).expanded).toBeTruthy();

      fixture.nativeElement.querySelector('clr-stack-label').click();
      fixture.detectChanges();
      expect(getBlockInstance(fixture).expanded).toBeFalsy();
    });

    it('offers two-way binding on clrSbExpanded', () => {
      fixture = TestBed.createComponent(DynamicBlock);
      fixture.componentInstance.expanded = true;
      fixture.detectChanges();
      expect(getBlockInstance(fixture).expanded).toBeTruthy();

      fixture.nativeElement.querySelector('clr-stack-label').click();
      fixture.detectChanges();
      expect(fixture.componentInstance.expanded).toBeFalsy();
    });

    it('sets aria-controls attribute corresponding to stack-children id', () => {
      fixture = TestBed.createComponent(DynamicBlock);
      fixture.detectChanges();

      const stackLabel = fixture.nativeElement.querySelector('.stack-block-label');
      // make sure the attribute does not exist when collapsed
      expect(stackLabel.getAttribute('aria-controls')).toBeNull();
      fixture.componentInstance.expanded = true;
      fixture.detectChanges();
      const controlsId = stackLabel.getAttribute('aria-controls');
      expect(controlsId).not.toBeNull();
      const childrenId = fixture.nativeElement.querySelector('.stack-children').getAttribute('id');
      expect(childrenId).toBe(controlsId);
    });
  });
}

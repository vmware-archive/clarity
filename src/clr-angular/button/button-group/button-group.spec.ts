/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrButtonGroup } from './button-group';
import { ClrButtonGroupModule } from './button-group.module';

export default function(): void {
  describe('Button Group', () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;
    let testBtnGroup: ClrButtonGroup;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrButtonGroupModule],
        declarations: [
          BtnGroupInlineViewContainer,
          BtnGroupBothViewContainersTest,
          BtnGroupMenuViewContainer,
          BtnGroupFlipTest1,
          BtnGroupFlipTest2,
          BtnGroupProjectionUpdateTest,
          BtnGroupEHCAIWCTest,
        ],
      });
    });

    describe('Buttons in Inline Buttons View Container', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(BtnGroupInlineViewContainer);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
        testBtnGroup = fixture.componentInstance.btnGroup;
      });

      afterEach(() => {
        fixture.destroy();
      });

      it('renders all the inline buttons', () => {
        expect(compiled.textContent).toMatch(/Button 1/);
        expect(compiled.textContent).toMatch(/Button 2/);
        expect(compiled.textContent).toMatch(/Button 3/);
        expect(compiled.textContent).toMatch(/Button 4/);
        expect(compiled.textContent).toMatch(/Button 5/);
      });

      it('does not render the overflow', () => {
        const overflow: HTMLElement = compiled.querySelector('.btn-group-overflow');
        expect(overflow).toBeNull();
      });

      it('renders all buttons in the inline buttons view container', () => {
        const btnGroupChildrenCompiled: HTMLCollection = compiled.children[0].children;
        expect(btnGroupChildrenCompiled.length).toBe(5);

        // Should be a button
        expect(btnGroupChildrenCompiled[0].classList.contains('btn')).toBe(true);
        expect(btnGroupChildrenCompiled[1].classList.contains('btn')).toBe(true);
        expect(btnGroupChildrenCompiled[2].classList.contains('btn')).toBe(true);
        expect(btnGroupChildrenCompiled[3].classList.contains('btn')).toBe(true);
        expect(btnGroupChildrenCompiled[4].classList.contains('btn')).toBe(true);
      });
    });

    describe('Buttons in both View Containers', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(BtnGroupBothViewContainersTest);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
        testBtnGroup = fixture.componentInstance.btnGroup;
      });

      afterEach(() => {
        fixture.destroy();
      });

      it('renders the inline buttons', () => {
        expect(compiled.textContent).toMatch(/Button 1/);
        expect(compiled.textContent).toMatch(/Button 2/);
        expect(compiled.textContent).not.toMatch(/Button 3/);
        expect(compiled.textContent).not.toMatch(/Button 4/);
        expect(compiled.textContent).not.toMatch(/Button 5/);
      });

      it('initializes the button groups based on the clrInMenu input', () => {
        expect(testBtnGroup.inlineButtons.length).toBe(2);
        expect(testBtnGroup.menuButtons.length).toBe(3);
      });

      it('overflow is visible when atleast one button exists in the menu', () => {
        const overflow: HTMLElement = compiled.querySelector('.btn-group-overflow');
        expect(overflow).not.toBeNull();
      });

      it('renders inline buttons in the inline buttons view container', () => {
        const btnGroupChildrenCompiled: HTMLCollection = compiled.children[0].children;
        expect(btnGroupChildrenCompiled.length).toBe(3);

        // Should be a button
        expect(btnGroupChildrenCompiled[0].classList.contains('btn')).toBe(true);
        expect(btnGroupChildrenCompiled[1].classList.contains('btn')).toBe(true);

        // Should be the overflow
        expect(btnGroupChildrenCompiled[2].classList.contains('btn')).toBe(false);
        expect(btnGroupChildrenCompiled[2].classList.contains('btn-group-overflow')).toBe(true);
      });

      it('renders menu buttons in the menu buttons view container', () => {
        const dropdownToggle: HTMLElement = compiled.querySelector('.dropdown-toggle');
        dropdownToggle.click();

        fixture.detectChanges();

        const dropdownMenu: HTMLElement = compiled.querySelector('.dropdown-menu');
        expect(dropdownMenu.children.length).toBe(3);

        // Should be a button
        expect(dropdownMenu.children[0].classList.contains('btn')).toBe(true);
        expect(dropdownMenu.children[1].classList.contains('btn')).toBe(true);
        expect(dropdownMenu.children[2].classList.contains('btn')).toBe(true);
      });
    });

    describe('Flip Test 1', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(BtnGroupFlipTest1);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
        testBtnGroup = fixture.componentInstance.btnGroup;
      });

      afterEach(() => {
        fixture.destroy();
      });

      it('renders all the inline buttons', () => {
        expect(compiled.textContent).toMatch(/Button 1/);
        expect(compiled.textContent).toMatch(/Button 2/);
        expect(compiled.textContent).toMatch(/Button 3/);
        expect(compiled.textContent).toMatch(/Button 4/);
        expect(compiled.textContent).toMatch(/Button 5/);
      });

      it('initializes the buttons correctly', () => {
        expect(testBtnGroup.inlineButtons.length).toBe(5);
        expect(testBtnGroup.menuButtons.length).toBe(0);
      });

      it('does not render the overflow initially', () => {
        const overflow: HTMLElement = compiled.querySelector('.btn-group-overflow');
        expect(overflow).toBeNull();
      });

      it('renders all buttons in the inline buttons view container', () => {
        const btnGroupChildrenCompiled: HTMLCollection = compiled.children[0].children;
        expect(btnGroupChildrenCompiled.length).toBe(5);

        // Should be a button
        expect(btnGroupChildrenCompiled[0].classList.contains('btn')).toBe(true);
        expect(btnGroupChildrenCompiled[1].classList.contains('btn')).toBe(true);
        expect(btnGroupChildrenCompiled[2].classList.contains('btn')).toBe(true);
        expect(btnGroupChildrenCompiled[3].classList.contains('btn')).toBe(true);
        expect(btnGroupChildrenCompiled[4].classList.contains('btn')).toBe(true);
      });

      it('re-initializes the buttons correctly when the clrInMenu Input is set to true', () => {
        fixture.componentInstance.flip = true;

        fixture.detectChanges();

        expect(testBtnGroup.inlineButtons.length).toBe(4);
        expect(testBtnGroup.menuButtons.length).toBe(1);
      });

      it('renders the overflow when the clrInMenu Input is set to true', () => {
        let overflow: HTMLElement = compiled.querySelector('.btn-group-overflow');
        expect(overflow).toBeNull();

        fixture.componentInstance.flip = true;

        fixture.detectChanges();
        overflow = compiled.querySelector('.btn-group-overflow');
        expect(overflow).not.toBeNull();
      });

      it('renders the overflow when the clrInMenu Input is set to true', () => {
        let overflow: HTMLElement = compiled.querySelector('.btn-group-overflow');
        expect(overflow).toBeNull();

        fixture.componentInstance.flip = true;

        fixture.detectChanges();
        overflow = compiled.querySelector('.btn-group-overflow');
        expect(overflow).not.toBeNull();
      });

      it('renders only the inline buttons in the menu view container', () => {
        fixture.componentInstance.flip = true;

        fixture.detectChanges();

        expect(compiled.textContent).toMatch(/Button 1/);
        expect(compiled.textContent).toMatch(/Button 2/);
        expect(compiled.textContent).toMatch(/Button 3/);
        expect(compiled.textContent).toMatch(/Button 4/);
      });

      it('renders all buttons in the menu view container', () => {
        fixture.componentInstance.flip = true;

        fixture.detectChanges();

        const dropdownToggle: HTMLElement = compiled.querySelector('.dropdown-toggle');
        dropdownToggle.click();

        fixture.detectChanges();

        const overflowMenu: HTMLElement = compiled.querySelector('.dropdown-menu');

        expect(overflowMenu.children.length).toBe(1);

        // Should be a button
        expect(overflowMenu.children[0].classList.contains('btn')).toBe(true);
        expect(overflowMenu.children[0].textContent).toMatch(/Button 5/);
      });
    });

    describe('Flip Test 2', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(BtnGroupFlipTest2);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
        testBtnGroup = fixture.componentInstance.btnGroup;
      });

      afterEach(() => {
        fixture.destroy();
      });

      it('projects the inline buttons projected by the user', () => {
        expect(compiled.textContent).toMatch(/Button 1/);
        expect(compiled.textContent).toMatch(/Button 2/);
        expect(compiled.textContent).toMatch(/Button 3/);
        expect(compiled.textContent).toMatch(/Button 4/);
      });

      it('projects the menu buttons projected by the user when the menu is open', () => {
        const dropdownToggle: HTMLElement = compiled.querySelector('.dropdown-toggle');
        dropdownToggle.click();

        fixture.detectChanges();

        expect(compiled.textContent).toMatch(/Button 5/);
      });

      it('renders the overflow initially', () => {
        const overflow: HTMLElement = compiled.querySelector('.btn-group-overflow');
        expect(overflow).not.toBeNull();
      });

      it('initializes the buttons correctly', () => {
        expect(testBtnGroup.inlineButtons.length).toBe(4);
        expect(testBtnGroup.menuButtons.length).toBe(1);
      });

      it('does not hide the overflow clrInMenu Input is set to toggled', () => {
        let overflow: HTMLElement = compiled.querySelector('.btn-group-overflow');
        expect(overflow).not.toBeNull();

        fixture.componentInstance.flip = true;

        fixture.detectChanges();
        overflow = compiled.querySelector('.btn-group-overflow');
        expect(overflow).not.toBeNull();

        fixture.componentInstance.flip = true;
        fixture.detectChanges();
        overflow = compiled.querySelector('.btn-group-overflow');
        expect(overflow).not.toBeNull();
      });
    });

    describe('Content Projection Update', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(BtnGroupProjectionUpdateTest);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
        testBtnGroup = fixture.componentInstance.btnGroup;
      });

      afterEach(() => {
        fixture.destroy();
      });

      it('initializes the buttons correctly', () => {
        expect(testBtnGroup.inlineButtons.length).toBe(3);
        expect(testBtnGroup.menuButtons.length).toBe(2);
      });

      it('projects the inline buttons', () => {
        expect(compiled.textContent).toMatch(/Button 1/);
        expect(compiled.textContent).toMatch(/Button 2/);
        expect(compiled.textContent).toMatch(/Button 3/);
        expect(compiled.textContent).not.toMatch(/Button 4/);
        expect(compiled.textContent).not.toMatch(/Button 5/);
      });

      it('renders the overflow initially', () => {
        const overflow: HTMLElement = compiled.querySelector('.btn-group-overflow');
        expect(overflow).not.toBeNull();
      });

      it('hides the overflow when there are no buttons in it', () => {
        fixture.componentInstance.show = false;

        fixture.detectChanges();

        const overflow: HTMLElement = compiled.querySelector('.btn-group-overflow');
        expect(overflow).toBeNull();
      });

      it('shows only the projected buttons', () => {
        fixture.componentInstance.show = false;

        fixture.detectChanges();

        expect(compiled.textContent).toMatch(/Button 1/);
        expect(compiled.textContent).toMatch(/Button 3/);

        fixture.componentInstance.show = true;

        fixture.detectChanges();

        expect(compiled.textContent).toMatch(/Button 1/);
        expect(compiled.textContent).toMatch(/Button 2/);
        expect(compiled.textContent).toMatch(/Button 3/);
      });

      it('re-initializes the buttons correctly when the content projection is updated', () => {
        fixture.componentInstance.show = false;

        fixture.detectChanges();

        expect(testBtnGroup.inlineButtons.length).toBe(2);
        expect(testBtnGroup.menuButtons.length).toBe(0);
      });
    });

    /* This feature is not recommended but we are just testing the fallback */
    describe('Buttons in Menu View Container', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(BtnGroupMenuViewContainer);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
        testBtnGroup = fixture.componentInstance.btnGroup;
      });

      afterEach(() => {
        fixture.destroy();
      });

      it('does not render any buttons initially', () => {
        expect(compiled.textContent).not.toMatch(/Button 1/);
        expect(compiled.textContent).not.toMatch(/Button 2/);
        expect(compiled.textContent).not.toMatch(/Button 3/);
        expect(compiled.textContent).not.toMatch(/Button 4/);
        expect(compiled.textContent).not.toMatch(/Button 5/);
      });

      it('renders the overflow', () => {
        const overflow: HTMLElement = compiled.querySelector('.btn-group-overflow');
        expect(overflow).not.toBeNull();
      });

      it('renders all buttons in the menu view container', () => {
        const dropdownToggle: HTMLElement = compiled.querySelector('.dropdown-toggle');
        dropdownToggle.click();

        fixture.detectChanges();

        const overflowMenu: HTMLElement = compiled.querySelector('.dropdown-menu');
        expect(overflowMenu.children.length).toBe(5);

        // Should be a button
        expect(overflowMenu.children[0].classList.contains('btn')).toBe(true);
        expect(overflowMenu.children[1].classList.contains('btn')).toBe(true);
        expect(overflowMenu.children[2].classList.contains('btn')).toBe(true);
        expect(overflowMenu.children[3].classList.contains('btn')).toBe(true);
        expect(overflowMenu.children[4].classList.contains('btn')).toBe(true);

        expect(compiled.textContent).toMatch(/Button 1/);
        expect(compiled.textContent).toMatch(/Button 2/);
        expect(compiled.textContent).toMatch(/Button 3/);
        expect(compiled.textContent).toMatch(/Button 4/);
        expect(compiled.textContent).toMatch(/Button 5/);
      });
    });

    describe('Toggling Button Group Overflow Menus', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(BtnGroupEHCAIWCTest);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
      });

      afterEach(() => {
        fixture.destroy();
      });

      it('renders only the views created in the dropdown menu', () => {
        const dropdownToggle1: HTMLElement = compiled.querySelector('.test-btn-group-1 .dropdown-toggle');
        const dropdownToggle2: HTMLElement = compiled.querySelector('.test-btn-group-2 .dropdown-toggle');

        dropdownToggle1.click();

        fixture.detectChanges();

        expect(compiled.textContent).toMatch(/Button 1/);
        expect(compiled.textContent).toMatch(/Button 2/);
        expect(compiled.textContent).toMatch(/Button 3/);
        expect(compiled.textContent).toMatch(/Button 4/);
        expect(compiled.textContent).toMatch(/Button 5/);
        expect(compiled.textContent).toMatch(/Button 6/);
        expect(compiled.textContent).toMatch(/Button 7/);
        expect(compiled.textContent).toMatch(/Button 8/);

        expect(compiled.textContent).not.toMatch(/Button 9/);
        expect(compiled.textContent).not.toMatch(/Button 10/);

        dropdownToggle2.click();

        fixture.detectChanges();

        expect(compiled.textContent).toMatch(/Button 1/);
        expect(compiled.textContent).toMatch(/Button 2/);
        expect(compiled.textContent).toMatch(/Button 3/);

        expect(compiled.textContent).not.toMatch(/Button 4/);
        expect(compiled.textContent).not.toMatch(/Button 5/);

        expect(compiled.textContent).toMatch(/Button 6/);
        expect(compiled.textContent).toMatch(/Button 7/);
        expect(compiled.textContent).toMatch(/Button 8/);
        expect(compiled.textContent).toMatch(/Button 9/);
        expect(compiled.textContent).toMatch(/Button 10/);

        dropdownToggle1.click();

        fixture.detectChanges();

        expect(compiled.textContent).toMatch(/Button 1/);
        expect(compiled.textContent).toMatch(/Button 2/);
        expect(compiled.textContent).toMatch(/Button 3/);
        expect(compiled.textContent).toMatch(/Button 4/);
        expect(compiled.textContent).toMatch(/Button 5/);
        expect(compiled.textContent).toMatch(/Button 6/);
        expect(compiled.textContent).toMatch(/Button 7/);
        expect(compiled.textContent).toMatch(/Button 8/);

        expect(compiled.textContent).not.toMatch(/Button 9/);
        expect(compiled.textContent).not.toMatch(/Button 10/);
      });
    });
  });
}

@Component({
  template: `
        <clr-button-group>
            <clr-button>Button 1</clr-button>
            <clr-button>Button 2</clr-button>
            <clr-button>Button 3</clr-button>
            <clr-button>Button 4</clr-button>
            <clr-button>Button 5</clr-button>
        </clr-button-group>
    `,
})
class BtnGroupInlineViewContainer {
  @ViewChild(ClrButtonGroup) btnGroup: ClrButtonGroup;
}

@Component({
  template: `
        <clr-button-group>
            <clr-button>Button 1</clr-button>
            <clr-button>Button 2</clr-button>
            <clr-button [clrInMenu]="true">Button 3</clr-button>
            <clr-button [clrInMenu]="true">Button 4</clr-button>
            <clr-button [clrInMenu]="true">Button 5</clr-button>
        </clr-button-group>
    `,
})
class BtnGroupBothViewContainersTest {
  @ViewChild(ClrButtonGroup) btnGroup: ClrButtonGroup;
}

@Component({
  template: `
        <clr-button-group>
            <clr-button>Button 1</clr-button>
            <clr-button>Button 2</clr-button>
            <clr-button>Button 3</clr-button>
            <clr-button>Button 4</clr-button>
            <clr-button [clrInMenu]="flip">Button 5</clr-button>
        </clr-button-group>
    `,
})
class BtnGroupFlipTest1 {
  @ViewChild(ClrButtonGroup) btnGroup: ClrButtonGroup;

  flip: boolean = false;
}

@Component({
  template: `
        <clr-button-group>
            <clr-button>Button 1</clr-button>
            <clr-button>Button 2</clr-button>
            <clr-button>Button 3</clr-button>
            <clr-button [clrInMenu]="flip">Button 4</clr-button>
            <clr-button [clrInMenu]="true">Button 5</clr-button>
        </clr-button-group>
    `,
})
class BtnGroupFlipTest2 {
  @ViewChild(ClrButtonGroup) btnGroup: ClrButtonGroup;

  flip: boolean = false;
}

@Component({
  template: `
        <clr-button-group>
            <clr-button>Button 1</clr-button>
            <clr-button *ngIf="show">Button 2</clr-button>
            <clr-button>Button 3</clr-button>
            <clr-button *ngIf="show" [clrInMenu]="true">Button 4</clr-button>
            <clr-button *ngIf="show" [clrInMenu]="true">Button 5</clr-button>
        </clr-button-group>
    `,
})
class BtnGroupProjectionUpdateTest {
  @ViewChild(ClrButtonGroup) btnGroup: ClrButtonGroup;

  show: boolean = true;
}

/* This feature is not recommended but we are just testing the fallback */
@Component({
  template: `
        <clr-button-group>
            <clr-button [clrInMenu]="true">Button 1</clr-button>
            <clr-button [clrInMenu]="true">Button 2</clr-button>
            <clr-button [clrInMenu]="true">Button 3</clr-button>
            <clr-button [clrInMenu]="true">Button 4</clr-button>
            <clr-button [clrInMenu]="true">Button 5</clr-button>
        </clr-button-group>
    `,
})
class BtnGroupMenuViewContainer {
  @ViewChild(ClrButtonGroup) btnGroup: ClrButtonGroup;
}

/*
 * Testing the case which was throwing the Expression has changed error
 * after the popover integration
 */
@Component({
  template: `
        <clr-button-group #btnGroup1 class="test-btn-group-1">
            <clr-button>Button 1</clr-button>
            <clr-button>Button 2</clr-button>
            <clr-button>Button 3</clr-button>
            <clr-button [clrInMenu]="true">Button 4</clr-button>
            <clr-button [clrInMenu]="true">Button 5</clr-button>
        </clr-button-group>

        <clr-button-group #btnGroup2 class="test-btn-group-2">
            <clr-button>Button 6</clr-button>
            <clr-button>Button 7</clr-button>
            <clr-button>Button 8</clr-button>
            <clr-button [clrInMenu]="true">Button 9</clr-button>
            <clr-button [clrInMenu]="true">Button 10</clr-button>
        </clr-button-group>
    `,
})
class BtnGroupEHCAIWCTest {
  @ViewChild('btnGroup1') btnGroup1: ClrButtonGroup;
  @ViewChild('btnGroup2') btnGroup2: ClrButtonGroup;
}

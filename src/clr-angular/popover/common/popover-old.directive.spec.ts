/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, QueryList, ViewChildren } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDirectiveOld } from './popover-old.directive';

describe('Popover directive (old)', () => {
  let fixture: ComponentFixture<any>;
  let compiled: any;

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [TestComponent, DesugaredSyntaxComponent, PopoverDirectiveOld] });
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('projects content', function() {
    fixture = TestBed.createComponent(TestComponent);
    compiled = fixture.nativeElement;

    expect(compiled.textContent).toMatch(/anchor1/);
    expect(compiled.textContent).toMatch(/anchor2/);
  });

  it('shows popover content if open', function() {
    fixture = TestBed.createComponent(TestComponent);
    compiled = fixture.nativeElement;

    fixture.componentInstance.open1 = true;
    fixture.detectChanges();
    expect(compiled.textContent).toMatch(/popover1/);
    expect(compiled.textContent).not.toMatch(/popover2/);
  });

  it('queues up opening of subsequent popovers if one is already open', function() {
    fixture = TestBed.createComponent(TestComponent);
    compiled = fixture.nativeElement;

    fixture.componentInstance.open1 = true;
    fixture.componentInstance.open2 = true;
    fixture.componentInstance.open3 = true;
    fixture.detectChanges();

    // should only display the first popover
    expect(compiled.textContent).toMatch(/popover1/);
    expect(compiled.textContent).not.toMatch(/popover2/);
    expect(compiled.textContent).not.toMatch(/popover3/);

    fixture.componentInstance.open1 = false;
    fixture.detectChanges();

    // should display the second popover, now that first one is closed
    expect(compiled.textContent).not.toMatch(/popover1/);
    expect(compiled.textContent).toMatch(/popover2/);
    expect(compiled.textContent).not.toMatch(/popover3/);

    fixture.componentInstance.open2 = false;
    fixture.detectChanges();

    // should display the third popover, now that second one is closed
    expect(compiled.textContent).not.toMatch(/popover1/);
    expect(compiled.textContent).not.toMatch(/popover2/);
    expect(compiled.textContent).toMatch(/popover3/);
  });

  it('shows popover content when using desugared syntax', function() {
    fixture = TestBed.createComponent(DesugaredSyntaxComponent);
    compiled = fixture.nativeElement;

    fixture.componentInstance.open1 = true;
    fixture.detectChanges();
    expect(compiled.textContent).toMatch(/popover1/);
    expect(compiled.textContent).not.toMatch(/popover2/);
  });
});

@Component({
  template: `
        <span #anchor1>anchor1</span>
        <div *clrPopoverOld="open1; anchor: anchor1">
            <span>popover1</span>
        </div>
        <span #anchor2>anchor2</span>
        <div *clrPopoverOld="open2; anchor: anchor2">
            <span>popover2</span>
        </div>
        <span #anchor3>anchor3</span>
        <div *clrPopoverOld="open3; anchor: anchor3">
            <span>popover3</span>
        </div>
    `,
})
class TestComponent {
  open1: boolean = false;
  open2: boolean = false;
  open3: boolean = false;
}

@Component({
  template: `
        <span #anchor1>anchor1</span>
        <ng-template [(clrPopoverOld)]="open1" [clrPopoverOldAnchor]="anchor1">
            <span>popover1</span>
        </ng-template>
        <span #anchor2>anchor2</span>
        <ng-template [(clrPopoverOld)]="open2" [clrPopoverOldAnchor]="anchor2">
            <span>popover2</span>
        </ng-template>
    `,
})
class DesugaredSyntaxComponent {
  @ViewChildren(PopoverDirectiveOld) popoverDirectives: QueryList<PopoverDirectiveOld>;

  open1: boolean = false;
  open2: boolean = false;
}

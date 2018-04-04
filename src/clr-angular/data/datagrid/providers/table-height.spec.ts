/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeightService } from './table-height.service';

@Component({
  template: `
        <div>Datagrid Table</div>
    `,
})
class TestComponent {
  constructor(public elementRef: ElementRef) {}
}

describe('TableHeightService', function() {
  let fixture: ComponentFixture<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [TestComponent] });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('sets a tableRef property with an elementReference', function() {
    const table: TableHeightService = new TableHeightService();
    table.tableRef = fixture.debugElement.componentInstance.elementRef;
    expect(table.tableRef).toBe(fixture.debugElement.componentInstance.elementRef);
  });
});

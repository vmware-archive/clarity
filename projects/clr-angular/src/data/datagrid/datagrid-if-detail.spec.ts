/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ClrIfDetail } from './datagrid-if-detail';
import { DetailService } from './providers/detail.service';

const content = 'Detail Pane';

export default function (): void {
  describe('ClrIfDetail Directive', function () {
    let fixture, testElement;
    let detailService: DetailService;
    let testComponent: IfDetailTest;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ClrIfDetail, IfDetailTest],
        providers: [DetailService],
      });
      fixture = TestBed.createComponent(IfDetailTest);
      testComponent = fixture.debugElement.componentInstance;
      testElement = fixture.debugElement.nativeElement;
      detailService = TestBed.get(DetailService);
      spyOn(detailService, 'close').and.callThrough();
      fixture.detectChanges();
    });

    afterEach(() => {
      fixture.destroy();
    });

    describe('Typescript API', () => {
      it('should initialize the detail service', () => {
        expect(detailService.close).toHaveBeenCalled();
      });

      it('should project input state', () => {
        const input = `${content}${content}`;
        testComponent.detailState = input;
        fixture.detectChanges();
        expect(testElement.innerHTML).toContain(input);
      });

      it('should emit changes', () => {
        expect(testComponent.detailState).toBeNull();
        detailService.open(content);
        fixture.detectChanges();
        expect(testComponent.detailState).toEqual(content);
        detailService.close();
        fixture.detectChanges();
        expect(testComponent.detailState).toBeNull();
      });

      it('should not update the service when showing the panel through state change', () => {
        spyOn(detailService, 'toggle');
        spyOn(testComponent.detail.stateChange, 'emit').and.callThrough();
        detailService.open(content);
        fixture.detectChanges();
        expect(detailService.toggle).not.toHaveBeenCalled();
        expect(testComponent.detail.stateChange.emit).toHaveBeenCalledWith(testComponent.detailState);
      });
    });

    describe('Template API', () => {
      it('should show and hide the panel', () => {
        expect(testElement.innerHTML).not.toContain(content);
        detailService.open({});
        fixture.detectChanges();
        expect(testElement.innerHTML).toContain(content);
        detailService.close();
        fixture.detectChanges();
        expect(testElement.innerHTML).not.toContain(content);
      });

      it('should update the service when input changes', () => {
        spyOn(detailService, 'toggle').and.callThrough();
        testComponent.detailState = true;
        fixture.detectChanges();
        expect(detailService.toggle).toHaveBeenCalled();
        expect(testElement.innerHTML).toContain(content);
      });
    });
  });
}

@Component({
  template: `<ng-template [(clrIfDetail)]="detailState">${content}</ng-template>`,
})
class IfDetailTest {
  @ViewChild(ClrIfDetail) detail: ClrIfDetail;
  detailState = null;
}

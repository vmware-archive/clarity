/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { QueryList } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrEmphasisModule } from './../../emphasis.module';
import { ClrAlert } from './../alert';
import { MultiAlertService } from './multi-alert.service';

export default function () {
  describe('Multi Alert provider', function () {
    let queryList: QueryList<ClrAlert>;
    let alert: ComponentFixture<ClrAlert>;
    let anotherAlert: ComponentFixture<ClrAlert>;
    let thirdAlert: ComponentFixture<ClrAlert>;
    let multiAlertService: MultiAlertService;

    beforeEach(function () {
      multiAlertService = new MultiAlertService();

      TestBed.configureTestingModule({
        imports: [ClrEmphasisModule],
        providers: [{ provide: MultiAlertService, useValue: multiAlertService }],
      });

      alert = TestBed.createComponent(ClrAlert);
      anotherAlert = TestBed.createComponent(ClrAlert);
      thirdAlert = TestBed.createComponent(ClrAlert);

      queryList = new QueryList<ClrAlert>();
      queryList.reset([alert.componentInstance, anotherAlert.componentInstance]);

      multiAlertService.manage(queryList);
    });

    it('next updates the current alert index and cycles when the last index is found', function () {
      expect(multiAlertService.current).toBe(0);
      multiAlertService.next();
      expect(multiAlertService.current).toBe(1);
      multiAlertService.next();
      expect(multiAlertService.current).toBe(0);
    });

    it('previous method updates the current alert index and cycles when the first index is found', function () {
      multiAlertService.next();
      expect(multiAlertService.current).toBe(1);
      multiAlertService.previous();
      expect(multiAlertService.current).toBe(0);
      multiAlertService.previous();
      expect(multiAlertService.current).toBe(1);
    });

    it('close reduces the number of active alerts and updates the index', function () {
      multiAlertService.next();
      expect(multiAlertService.count).toBe(2);
      expect(multiAlertService.current).toBe(1);
      anotherAlert.componentInstance.close();
      expect(multiAlertService.count).toBe(1);
      expect(multiAlertService.current).toBe(0);
      // Ensure current alert does not drop below 0
      alert.componentInstance.close();
      expect(multiAlertService.count).toBe(0);
      expect(multiAlertService.current).toBe(0);
    });

    it('closing first alert show new first alert', function () {
      queryList.reset([alert.componentInstance, anotherAlert.componentInstance, thirdAlert.componentInstance]);
      queryList.notifyOnChanges();
      expect(multiAlertService.count).toBe(3);
      expect(multiAlertService.current).toBe(0);
      alert.componentInstance.close();
      expect(multiAlertService.count).toBe(2);
      expect(multiAlertService.current).toBe(0);
    });

    it('stays within bounds if alerts change dynamically', function () {
      multiAlertService.current = 1;
      queryList.reset([alert.componentInstance]);
      queryList.notifyOnChanges();
      expect(multiAlertService.count).toBe(1);
      expect(multiAlertService.current).toBe(0);
    });

    it('keeps the current index to 0 if all alerts disappear', function () {
      queryList.reset([]);
      queryList.notifyOnChanges();
      expect(multiAlertService.count).toBe(0);
      expect(multiAlertService.current).toBe(0);
    });

    it('notifies of changes even when closing does not change index', function () {
      let changesEmitted = false;
      multiAlertService.changes.subscribe(() => {
        changesEmitted = true;
      });
      alert.componentInstance.close();
      expect(changesEmitted).toBeTrue();
    });

    it('updates current alert when alerts programmatically closed', function () {
      let changesEmitted = false;
      multiAlertService.changes.subscribe(() => {
        changesEmitted = true;
      });
      alert.componentInstance.closed = true;
      expect(multiAlertService.current).toBe(0);
      expect(multiAlertService.currentAlert).toBe(anotherAlert.componentInstance);
      expect(changesEmitted).toBeTrue();
    });
  });
}

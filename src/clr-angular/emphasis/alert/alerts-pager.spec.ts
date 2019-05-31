/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, QueryList, Type, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ClrEmphasisModule } from '../../emphasis/emphasis.module';

import { ClrAlert } from './alert';
import { ClrAlertsPager } from './alerts-pager';
import { MultiAlertService } from './providers/multi-alert.service';

export default function() {
  describe('ClrAlerts pager component', function() {
    describe('Typescript API', function() {
      let component: ClrAlertsPager;
      let service: MultiAlertService;

      beforeEach(() => {
        service = new MultiAlertService();
        component = new ClrAlertsPager(service, {});
      });

      afterEach(() => {
        service = null;
        component = null;
      });

      it('page up calls the multi alert service', function() {
        spyOn(service, 'next').and.callFake(() => {});
        component.pageUp();
        expect(service.next).toHaveBeenCalled();
      });

      it('page down calls the multi alert service', function() {
        spyOn(service, 'previous').and.callFake(() => {});
        component.pageDown();
        expect(service.previous).toHaveBeenCalled();
      });
    });

    describe('Template API', function() {
      beforeEach(function() {
        const service = new MultiAlertService();
        const queryList = new QueryList<ClrAlert>();

        this.create = <T>(componentType: Type<T>) => {
          TestBed.configureTestingModule({
            imports: [ClrEmphasisModule],
            declarations: [componentType],
            providers: [{ provide: MultiAlertService, useValue: service }],
          });
          this.fixture = TestBed.createComponent(componentType);

          this.alertFixture = TestBed.createComponent(ClrAlert);
          this.alert = this.alertFixture.componentInstance;
          this.secondAlertFixture = TestBed.createComponent(ClrAlert);
          this.secondAlert = this.secondAlertFixture.componentInstance;

          queryList.reset([this.alert, this.secondAlert]);
          service.manage(queryList);

          this.fixture.detectChanges();
        };
      });

      afterEach(function() {
        this.fixture.destroy();
        this.alertFixture.destroy();
        this.secondAlertFixture.destroy();
      });

      it('offers two way binding on the alert index', function() {
        this.create(TestIndex);
        this.fixture.componentInstance.index = 1;
        this.fixture.detectChanges();
        expect(this.fixture.componentInstance.pagerInstance.currentAlertIndex).toEqual(1);

        this.fixture.componentInstance.pagerInstance.currentAlertIndex = 0;
        this.fixture.detectChanges();
        expect(this.fixture.componentInstance.index).toEqual(0);
      });

      it('offers two way binding on the alert instance', function() {
        this.create(TestInstance);
        this.fixture.componentInstance.currentAlert = this.secondAlert;
        this.fixture.detectChanges();
        expect(this.fixture.componentInstance.pagerInstance.currentAlert).toEqual(this.secondAlert);

        this.fixture.componentInstance.pagerInstance.currentAlert = this.alert;
        this.fixture.detectChanges();
        expect(this.fixture.componentInstance.currentAlert).toEqual(this.alert);
      });
    });
  });
}

@Component({ template: `<clr-alerts-pager [(clrCurrentAlertIndex)]="index"></clr-alerts-pager>` })
export class TestIndex {
  @ViewChild(ClrAlertsPager) pagerInstance: ClrAlertsPager;
  index: number = 0;
}

@Component({ template: `<clr-alerts-pager [(clrCurrentAlert)]="currentAlert"></clr-alerts-pager>` })
export class TestInstance {
  @ViewChild(ClrAlertsPager) pagerInstance: ClrAlertsPager;
  currentAlert: ClrAlert;
}

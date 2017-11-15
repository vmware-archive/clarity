/**
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {QueryList} from "@angular/core";
import {ComponentFixture, inject, TestBed} from "@angular/core/testing";

import {ClrEmphasisModule} from "./../../emphasis.module";
import {Alert} from "./../alert";
import {MultiAlertService} from "./multi-alert-service";

describe("Multi Alert provider", function() {
    let queryList: QueryList<Alert>;
    let alert: ComponentFixture<Alert>;
    let anotherAlert: ComponentFixture<Alert>;
    let multiAlertService: MultiAlertService;

    beforeEach(function() {
        multiAlertService = new MultiAlertService();

        TestBed.configureTestingModule(
            {imports: [ClrEmphasisModule], providers: [{provide: MultiAlertService, useValue: multiAlertService}]});

        alert = TestBed.createComponent(Alert);
        anotherAlert = TestBed.createComponent(Alert);

        queryList = new QueryList<Alert>();
        queryList.reset([alert.componentInstance, anotherAlert.componentInstance]);

        multiAlertService.manage(queryList);
    });

    it("next updates the current alert index and cycles when the last index is found", function() {
        expect(multiAlertService.current).toBe(0);
        multiAlertService.next();
        expect(multiAlertService.current).toBe(1);
        multiAlertService.next();
        expect(multiAlertService.current).toBe(0);
    });

    it("previous method updates the current alert index and cycles when the first index is found", function() {
        multiAlertService.next();
        expect(multiAlertService.current).toBe(1);
        multiAlertService.previous();
        expect(multiAlertService.current).toBe(0);
        multiAlertService.previous();
        expect(multiAlertService.current).toBe(1);
    });

    it("close reduces the number of active alerts and updates the index", function() {
        multiAlertService.next();
        expect(multiAlertService.count).toBe(2);
        expect(multiAlertService.current).toBe(1);
        anotherAlert.componentInstance.close();
        expect(multiAlertService.count).toBe(1);
        expect(multiAlertService.current).toBe(0);
    });
});

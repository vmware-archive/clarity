/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewChild, Injectable} from "@angular/core";
import {TestBed} from "@angular/core/testing";
import {Loading} from "./loading";
import {LoadingListener} from "./loading-listener";

describe("Loading directive", function() {
    beforeEach(function () {
        TestBed.configureTestingModule({
            declarations: [Loading, FullTest],
            providers: [{provide: LoadingListener, useClass: DummyListener}]
        });
        this.fixture = TestBed.createComponent(FullTest);
        this.fixture.detectChanges();
        this.testComponent = this.fixture.componentInstance;
        this.clarityDirective = this.fixture.componentInstance.loadingDirective;
        this.listener = TestBed.get(LoadingListener);
    });

    afterEach(function() {
        this.fixture.destroy();
    });

    it("notifies the listener when the [clrLoading] input changes", function () {
        expect(this.listener.loading).toBe(false);
        this.testComponent.loading = true;
        this.fixture.detectChanges();
        expect(this.listener.loading).toBe(true);
        this.testComponent.loading = false;
        this.fixture.detectChanges();
        expect(this.listener.loading).toBe(false);
    });

    it("ignores successive inputs with the same value", function () {
        spyOn(this.listener, "startLoading");
        spyOn(this.listener, "doneLoading");
        this.testComponent.loading = false;
        this.fixture.detectChanges();
        this.testComponent.loading = null;
        this.fixture.detectChanges();
        expect(this.listener.doneLoading).toHaveBeenCalledTimes(0);
        this.testComponent.loading = true;
        this.fixture.detectChanges();
        this.testComponent.loading = 42;
        this.fixture.detectChanges();
        expect(this.listener.startLoading).toHaveBeenCalledTimes(1);
    });

    it("stops loading when destroyed", function () {
        this.testComponent.loading = true;
        this.fixture.detectChanges();
        expect(this.listener.loading).toBe(true);
        this.testComponent.displayed = false;
        this.fixture.detectChanges();
        expect(this.listener.loading).toBe(false);
    });
});


@Component({
    template: `<div *ngIf="displayed" [clrLoading]="loading"></div>`
})
class FullTest {
    @ViewChild(Loading) loadingDirective: Loading;

    public displayed = true;
    public loading = false;
}

@Injectable()
class DummyListener implements LoadingListener {
    public loading = false;

    startLoading(): void {
        this.loading = true;
    }

    doneLoading(): void {
        this.loading = false;
    }
}
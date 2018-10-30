/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Injectable, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ClrLoading, ClrLoadingState } from './loading';
import { LoadingListener } from './loading-listener';

describe('Loading directive', function() {
  beforeEach(function() {
    TestBed.configureTestingModule({
      declarations: [ClrLoading, FullTest],
      providers: [{ provide: LoadingListener, useClass: DummyListener }],
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

  it('notifies the listener when the [clrLoading] input changes', function() {
    expect(this.listener.loading).toBe(false);
    this.testComponent.loading = true;
    this.fixture.detectChanges();
    expect(this.listener.loading).toBe(true);
    this.testComponent.loading = false;
    this.fixture.detectChanges();
    expect(this.listener.loading).toBe(false);
  });

  it('ignores successive inputs with the same value', function() {
    spyOn(this.listener, 'loadingStateChange');
    this.testComponent.loading = false;
    this.fixture.detectChanges();
    this.testComponent.loading = false;
    this.fixture.detectChanges();
    expect(this.listener.loadingStateChange).toHaveBeenCalledTimes(0);
    this.testComponent.loading = true;
    this.fixture.detectChanges();
    this.testComponent.loading = true;
    this.fixture.detectChanges();
    expect(this.listener.loadingStateChange).toHaveBeenCalledTimes(1);
  });

  it('handles null or other falsy values as false', function() {
    this.testComponent.loading = null;
    this.fixture.detectChanges();
    expect(this.clarityDirective.loadingState).toEqual(ClrLoadingState.DEFAULT);
    this.testComponent.loading = undefined;
    this.fixture.detectChanges();
    expect(this.clarityDirective.loadingState).toEqual(ClrLoadingState.DEFAULT);
    this.testComponent.loading = 0;
    this.fixture.detectChanges();
    expect(this.clarityDirective.loadingState).toEqual(ClrLoadingState.DEFAULT);
  });

  it('stops loading when destroyed', function() {
    this.testComponent.loading = true;
    this.fixture.detectChanges();
    expect(this.listener.loading).toBe(true);
    this.testComponent.displayed = false;
    this.fixture.detectChanges();
    expect(this.listener.loading).toBe(false);
  });
});

describe('Loading directive without listener', function() {
  beforeEach(function() {
    TestBed.configureTestingModule({
      declarations: [ClrLoading, FullTest],
    });
    this.fixture = TestBed.createComponent(FullTest);
    this.fixture.detectChanges();
    this.testComponent = this.fixture.componentInstance;
    this.clarityDirective = this.fixture.componentInstance.loadingDirective;
  });

  afterEach(function() {
    this.fixture.destroy();
  });

  it('keeps loading state without exceptions', function() {
    expect(this.clarityDirective.loadingState).toEqual(ClrLoadingState.DEFAULT);
    this.testComponent.loading = true;
    this.fixture.detectChanges();
    expect(this.clarityDirective.loadingState).toEqual(ClrLoadingState.LOADING);
    this.testComponent.loading = false;
    this.fixture.detectChanges();
    expect(this.clarityDirective.loadingState).toEqual(ClrLoadingState.DEFAULT);
  });
});

@Component({ template: `<div *ngIf="displayed" [clrLoading]="loading"></div>` })
class FullTest {
  @ViewChild(ClrLoading) loadingDirective: ClrLoading;

  public displayed = true;
  public loading = false;
}

@Injectable()
class DummyListener implements LoadingListener {
  public loading = false;

  loadingStateChange(state: ClrLoadingState): void {
    this.loading = state === ClrLoadingState.LOADING;
  }
}

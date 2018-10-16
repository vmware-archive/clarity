/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * These helpers are local to Datagrid at the moment, but I wrote them generic enough to move them globally
 * when we have the time. This will be very helpful in future refactors due to Angular upgrades, or simply
 * just to avoid leaks since destroying fixtures is automatic with this.
 */
import { DebugElement, InjectionToken, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClarityModule } from '../../clr-angular.module';

export class TestContext<D, C> {
  fixture: ComponentFixture<C>;
  testComponent: C;
  testElement: any;
  clarityDirective: D;
  clarityElement: any;

  private clarityDebugElement: DebugElement;

  constructor(clarityDirectiveType: Type<D>, componentType: Type<C>) {
    this.fixture = TestBed.createComponent(componentType);
    this.fixture.detectChanges();
    this.testComponent = this.fixture.componentInstance;
    this.testElement = this.fixture.nativeElement;
    this.clarityDebugElement = this.fixture.debugElement.query(By.directive(clarityDirectiveType));
    if (!this.clarityDebugElement) {
      const componentName = (<any>componentType).name;
      const clarityDirectiveName = (<any>clarityDirectiveType).name;
      throw new Error(`Test component ${componentName} doesn't contain a ${clarityDirectiveName}`);
    }
    this.clarityDirective = this.clarityDebugElement.injector.get(clarityDirectiveType);
    this.clarityElement = this.clarityDebugElement.nativeElement;
  }

  // The Function type here is just to tell Typescript to be nice with abstract classes. Weird.
  getClarityProvider<T>(token: Type<T> | InjectionToken<T> | Function): T {
    return this.clarityDebugElement.injector.get(token);
  }

  /**
   * Delegate method to avoid verbosity
   */
  detectChanges() {
    this.fixture.detectChanges();
  }
}

export function addHelpers(): void {
  beforeEach(function() {
    /*
         * Ideally we would just make "this" a TestContext, but typing "this" in typescript
         * is a bit too new for all IDEs to correctly process it.
         */
    this.create = <D, C>(
      clarityDirective: Type<D>,
      testComponent: Type<C>,
      providers: any[] = [],
      extraDirectives: Type<any>[] = []
    ) => {
      TestBed.configureTestingModule({
        imports: [ClarityModule],
        declarations: [testComponent, ...extraDirectives],
        providers: providers,
      });
      return (this._context = new TestContext<D, C>(clarityDirective, testComponent));
    };

    this.createOnly = <D, C>(
      clarityDirective: Type<D>,
      testComponent: Type<C>,
      providers: any[] = [],
      extraDirectives: Type<any>[] = []
    ) => {
      TestBed.configureTestingModule({
        declarations: [clarityDirective, testComponent, ...extraDirectives],
        providers: providers,
      });
      return (this._context = new TestContext<D, C>(clarityDirective, testComponent));
    };

    this.createWithOverride = <D, C>(
      clarityDirective: Type<D>,
      testComponent: Type<C>,
      providers: any[] = [],
      extraDirectives: Type<any>[] = [],
      serviceOverrides: any[]
    ) => {
      TestBed.configureTestingModule({
        imports: [ClarityModule],
        declarations: [testComponent, ...extraDirectives],
        providers: providers,
      }).overrideComponent(clarityDirective, {
        set: {
          providers: serviceOverrides,
        },
      });
      return (this._context = new TestContext<D, C>(clarityDirective, testComponent));
    };
  });
  afterEach(function() {
    if (this._context) {
      this._context.fixture.destroy();
    }
  });
}

/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * These helpers are local to Datagrid at the moment, but I wrote them generic enough to move them globally
 * when we have the time. This will be very helpful in future refactors due to Angular upgrades, or simply
 * just to avoid leaks since destroying fixtures is automatic with this.
 */
import { Type, DebugElement, ModuleWithProviders } from "@angular/core";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
// import { reportSlowSpecs } from "./slow-specs.spec";

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
            let componentName = (<any>componentType).name;
            let clarityDirectiveName = (<any>clarityDirectiveType).name;
            throw new Error(`Test component ${componentName} doesn't contain a ${clarityDirectiveName}`);
        }
        this.clarityDirective = this.clarityDebugElement.injector.get(clarityDirectiveType);
        this.clarityElement = this.clarityDebugElement.nativeElement;
    }

    getClarityProvider(token: any) {
        return this.clarityDebugElement.injector.get(token);
    }

    /**
     * Delegate method to avoid verbosity
     */
    detectChanges() {
        this.fixture.detectChanges();
    }
}

// This is so unusable right now, we need to fix it ASAP.
export function addHelpers(modulesToImport?: Array<Type<any> | ModuleWithProviders | any[]>): void {
    beforeEach(function() {
        /*
         * Ideally we would just make "this" a TestContext, but typing "this" in typescript
         * is a bit too new for all IDEs to correctly process it.
         */
        this.create = <D, C>(clarityDirective: Type<D>, testComponent: Type<C>, providers: any[] = []) => {
            TestBed.configureTestingModule({
                imports: modulesToImport,
                declarations: [testComponent],
                providers: providers
            });
            return this._context = new TestContext<D, C>(clarityDirective, testComponent);
        };
    });
    afterEach(function() {
        if (this._context) {
            this._context.fixture.destroy();
        }
    });
}


/*
 * uncomment the line below to show how long it takes specs to run
 * need to also uncomment the import up top.
 * would be nice to be able to pass karma/jasmine a flag to turn this off and on.
 */
// reportSlowSpecs();

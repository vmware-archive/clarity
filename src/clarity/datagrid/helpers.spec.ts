/**
 * These helpers are local to Datagrid at the moment, but I wrote them generic enough to move them globally
 * when we have the time. This will be very helpful in future refactors due to Angular upgrades, or simply
 * just to avoid leaks since destroying fixtures is automatic with this.
 */
import {Type} from "@angular/core";
import {TestBed, ComponentFixture} from "@angular/core/testing";
import {ClarityModule} from "../clarity.module";
import {By} from "@angular/platform-browser";

export class TestContext<D, C> {
    fixture: ComponentFixture<C>;
    testComponent: C;
    testElement: any;
    clarityDirective: D;
    clarityElement: any;

    constructor(clarityDirectiveType: Type<D>, componentType: Type<C>) {
        this.fixture = TestBed.createComponent(componentType);
        this.fixture.detectChanges();
        this.testComponent = this.fixture.componentInstance;
        this.testElement = this.fixture.nativeElement;
        let clarityDebugElement = this.fixture.debugElement.query(By.directive(clarityDirectiveType));
        if (!clarityDebugElement) {
            let componentName = (<any>componentType).name;
            let clarityDirectiveName = (<any>clarityDirectiveType).name;
            throw new Error(`Test component ${componentName} doesn't contain a ${clarityDirectiveName}`);
        }
        this.clarityDirective = clarityDebugElement.componentInstance;
        this.clarityElement = clarityDebugElement.nativeElement;
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
        this.create = <D, C>(clarityDirective: Type<D>, testComponent: Type<C>, providers: any[] = []) => {
            TestBed.configureTestingModule({
                imports: [ClarityModule],
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
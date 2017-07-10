import {AfterContentChecked, ChangeDetectorRef} from "@angular/core";
import {WillyWonka} from "./willy-wonka";

export abstract class OompaLoompa implements AfterContentChecked {

    // FIXME: Request Injector once we move to Angular 4.2+, it'll allow easier refactors
    constructor(cdr: ChangeDetectorRef, willyWonka: WillyWonka) {
        willyWonka.chocolate.subscribe(() => {
            if (this.latestFlavor !== this.flavor) {
                cdr.detectChanges();
            }
        });
    }

    private latestFlavor: any;

    abstract get flavor(): any;

    ngAfterContentChecked() {
        this.latestFlavor = this.flavor;
    }
}

/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {TestBed} from "@angular/core/testing";
import {WillyWonka} from "./willy-wonka";
import {OompaLoompa} from "./oompa-loompa";
import {By} from "@angular/platform-browser";

describe("Chocolate factory", function() {
    // Can't use the helpers right now because they don't offer a way to declare more than one component for the test.
    // I've been meaning to go back on them for a while now.

    describe("projected content", function() {
        beforeEach(function () {
            TestBed.configureTestingModule({
                declarations: [ChocolateTest, ChocolateParent, ChocolateChild]
            });
            this.fixture = TestBed.createComponent(ChocolateTest);
            this.fixture.detectChanges();
            this.testComponent = this.fixture.componentInstance;
        });

        afterEach(function() {
            this.fixture.destroy();
        });

        it("handles chocolate", function () {
            this.testComponent.children.push(0);
            expect(() => this.fixture.detectChanges()).not.toThrow();
        });

        it("only detects changes on out-of-date views", function () {
            let parent: ChocolateParent = this.fixture.debugElement
                .query(By.directive(ChocolateParent)).componentInstance;
            let children: ChocolateChild[] = this.fixture.debugElement
                .queryAll(By.directive(ChocolateChild))
                .map((child: any) => child.componentInstance);
            parent.changes = 0;
            children.forEach(child => child.changes = 0);

            this.testComponent.children.push(0);
            this.fixture.detectChanges();

            /*
             * We have one extra change detection for each because of dev mode
             */
            // Parent: no changes after the children are created, so a single change detection.
            expect(parent.changes).toBe(2);
            // Children:
            // First one was already not last, so a single change detection is enough.
            // Second one is not last anymore after the new child has been created, it needs an extra change detection
            expect(children.map(child => child.changes)).toEqual([2, 3]);
        });
    });
});


@Component({
    template: `
        <parent>
            <child *ngFor="let child of children"></child>
        </parent>
    `
})
class ChocolateTest extends WillyWonka {
    nbChildren = 0;

    children = [0, 0];
}

@Component({
    selector: "parent",
    template: `
        {{nbChildren}} children
        <ng-content></ng-content>
        {{incrementChange()}}
    `,
    providers: [{provide: WillyWonka, useExisting: ChocolateParent}]
})
class ChocolateParent extends WillyWonka {
    nbChildren = 0;

    public changes = 0;
    incrementChange() {
        this.changes++;
    }
}

@Component({
    selector: "child",
    template: "{{last}} {{incrementChange()}}"
})
class ChocolateChild extends OompaLoompa implements OnInit, OnDestroy {
    constructor(cdr: ChangeDetectorRef, public parent: ChocolateParent) {
        super(cdr, parent);
    }

    private index: number;

    ngOnInit() {
        this.index = this.parent.nbChildren++;
    }

    ngOnDestroy() {
        this.parent.nbChildren--;
    }

    get flavor() {
        return this.last;
    }

    get last() {
        return this.index === this.parent.nbChildren - 1;
    }

    public changes = 0;
    incrementChange() {
        this.changes++;
    }
}

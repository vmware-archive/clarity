/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Component, EventEmitter, HostBinding, Input, OnInit, Optional, Output, SkipSelf} from "@angular/core";

@Component({
    selector: "clr-stack-block",
    template: `
        <dt class="stack-block-label" (click)="toggleExpand()">
            <ng-content select="clr-stack-label"></ng-content>
        </dt>
        <dd class="stack-block-content">
            <ng-content></ng-content>
        </dd>
        <!-- FIXME: remove this string concatenation when boolean states are supported -->
        <div [@collapse]="''+!expanded" class="stack-children">
            <ng-content select="clr-stack-block"></ng-content>
        </div>
    `,
    // Custom elements are inline by default
    styles: [`
        :host { display: block; }
    `],
    // Make sure the host has the proper class for styling purposes
    host: {"[class.stack-block]": "true"},
    animations:
        [trigger("collapse",
                 [
                     state("true", style({"height": 0, "overflow-y": "hidden"})),
                     transition("true => false",
                                [animate("0.2s ease-in-out", style({"height": "*", "overflow-y": "hidden"}))]),
                     transition("false => true",
                                [style({"height": "*", "overflow-y": "hidden"}), animate("0.2s ease-in-out")])
                 ])]
})
export class StackBlock implements OnInit {
    @HostBinding("class.stack-block-expanded") @Input("clrSbExpanded") expanded: boolean = false;
    @Output("clrSbExpandedChange") expandedChange: EventEmitter<boolean> = new EventEmitter<boolean>(false);
    @HostBinding("class.stack-block-expandable") @Input("clrSbExpandable") expandable: boolean = false;

    private _changedChildren: number = 0;
    private _fullyInitialized: boolean = false;
    private _changed: boolean = false;

    @HostBinding("class.stack-block-changed")
    get getChangedValue(): boolean {
        return this._changed || (this._changedChildren > 0 && !this.expanded);
    }

    @Input("clrSbNotifyChange")
    set setChangedValue(value: boolean) {
        this._changed = value;

        if (this.parent && this._fullyInitialized) {
            if (value) {
                this.parent._changedChildren++;
            } else {
                this.parent._changedChildren--;
            }
        }
    }

    /*
     * This would be more efficient with @ContentChildren, with the parent StackBlock
     * querying for children StackBlocks, but this feature is not available when downgrading
     * the component for Angular 1.
     */
    constructor(@SkipSelf() @Optional() private parent: StackBlock) {
        if (parent) {
            parent.addChild();
        }
    }

    ngOnInit(): void {
        // in order to access the parent StackBlock's properties,
        // the child StackBlock  has to be fully initialized at first.
        this._fullyInitialized = true;
    }

    addChild(): void {
        this.expandable = true;
    }

    toggleExpand(): void {
        if (this.expandable) {
            this.expanded = !this.expanded;
            this.expandedChange.emit(this.expanded);
        }
    }
}
/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    Component,
    EventEmitter,
    HostBinding,
    Input,
    Output,
    OnInit,
    Optional,
    SkipSelf,
    trigger
} from "@angular/core";
import {collapse} from "../animations/collapse/index";

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
    host: {
        "[class.stack-block]": "true"
    },
    animations: [trigger("collapse", collapse())]
})
export class StackBlock implements OnInit {

    @HostBinding("class.stack-block-expanded")
    @Input("clrSbExpanded") expanded: boolean = false;
    @Output("clrSbExpandedChange") expandedChange: EventEmitter<boolean> = new EventEmitter<boolean>(false);
    @HostBinding("class.stack-block-expandable")
    @Input("clrSbExpandable") expandable: boolean = false;

    private _changedChildren: number = 0;
    private _fullyInitialized: boolean = false;
    private _changed: boolean = false;

    @HostBinding("class.stack-block-changed") get getChangedValue(): boolean {
        return this._changed || (this._changedChildren > 0 && !this.expanded);
    }

    @Input("clrSbNotifyChange") set setChangedValue(value: boolean) {
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

        //in order to access the parent StackBlock's properties,
        //the child StackBlock  has to be fully initialized at first.
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
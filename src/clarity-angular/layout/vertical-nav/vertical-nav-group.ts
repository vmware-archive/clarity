/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {animate, state, style, transition, trigger} from "@angular/animations";
import {AfterContentInit, Component, EventEmitter, HostBinding, Input, OnDestroy, Output} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {Expand} from "../../utils/expand/providers/expand";

import {VerticalNavGroupService} from "./providers/vertical-nav-group.service";
import {VerticalNavService} from "./providers/vertical-nav.service";

const EXPANDED_STATE: string = "expanded";
const COLLAPSED_STATE: string = "collapsed";

@Component({
    selector: "clr-vertical-nav-group",
    templateUrl: "./vertical-nav-group.html",
    providers: [Expand],
    animations: [trigger("clrExpand",
                         [
                           state(EXPANDED_STATE, style({"height": "*"})),
                           state(COLLAPSED_STATE, style({"height": 0, "overflow-y": "hidden"})),
                           transition(`${EXPANDED_STATE} <=> ${COLLAPSED_STATE}`, animate("0.2s ease-in-out"))
                         ])],
    host: {"class": "nav-group"}
})
export class VerticalNavGroup implements AfterContentInit, OnDestroy {
    constructor(private _itemExpand: Expand, private _verticalNavGroupService: VerticalNavGroupService,
                private _verticalNavService: VerticalNavService) {
        this._verticalNavGroupService.registerNavGroup(this);


        // FIXME: This subscription handles a corner case
        // Vertical Nav collapse requires the animation to run first and then
        // remove the nodes from the DOM. If the user directly sets the input
        // on the clrIfExpanded directive, we have no chance to run the animation
        // and wait for it to complete. This subscription makes sure that the
        // animation states are correct for that edge case.
        this._subscriptions.push(this._itemExpand.expandChange.subscribe(value => {
            if (value && this.expandAnimationState === COLLAPSED_STATE) {
                if (this._verticalNavService.collapsed) {
                    this._verticalNavService.collapsed = false;
                }
                this.expandAnimationState = EXPANDED_STATE;
            } else if (!value && this.expandAnimationState === EXPANDED_STATE) {
                this.expandAnimationState = COLLAPSED_STATE;
            }
        }));

        // If the nav is collapsing, close the open nav group + save its state
        // If the nav is expanding, expand if the previous state was expanding
        this._subscriptions.push(this._verticalNavService.animateOnCollapsed.subscribe((goingToCollapse: boolean) => {
            if (goingToCollapse && this.expanded) {
                this.wasExpanded = true;
                this.expandAnimationState = COLLAPSED_STATE;
            } else if (!goingToCollapse && this.wasExpanded) {
                this.expandGroup();
                this.wasExpanded = false;
            }
        }));
    }

    private wasExpanded: boolean = false;

    @HostBinding("class.is-expanded")
    get expanded(): boolean {
        return this._itemExpand.expanded;
    }

    set expanded(value: boolean) {
        if (this._itemExpand.expanded !== value) {
            this._itemExpand.expanded = value;
            this.expandedChange.emit(value);
        }
    }

    @Input("clrVerticalNavGroupExpanded")
    set userExpandedInput(value: boolean) {
        value = !!value;
        if (this.expanded !== value) {
            // We have to call toggleExpand because some cases require animations to occur first
            // Directly setting the Expand service value skips the animation and can result in
            // nodes in the DOM but the nav group still being collapsed
            this.toggleExpand();
        }
    }

    @Output("clrVerticalNavGroupExpandedChange")
    expandedChange: EventEmitter<boolean> = new EventEmitter<boolean>(true);

    private _subscriptions: Subscription[] = [];

    private _expandAnimationState: string = COLLAPSED_STATE;

    expandGroup(): void {
        this.expanded = true;
        // Expanded animation occurs after Expand.expand is set to true
        this.expandAnimationState = EXPANDED_STATE;
    }

    collapseGroup(): void {
        // If a Vertical Nav Group toggle button is clicked while the Vertical Nav is in Collapsed state,
        // the Vertical Nav should be expanded first.
        this.expandAnimationState = COLLAPSED_STATE;
    }

    // closes a group after the collapse animation
    expandAnimationDone($event: any) {
        if ($event.toState === COLLAPSED_STATE) {
            this.expanded = false;
        }
    }

    get expandAnimationState(): string {
        return this._expandAnimationState;
    }

    set expandAnimationState(value: string) {
        if (value !== this._expandAnimationState) {
            this._expandAnimationState = value;
        }
    }

    toggleExpand(): void {
        if (this.expanded) {
            this.collapseGroup();
        } else {
            // If nav is collasped, first open the nav
            if (this._verticalNavService.collapsed) {
                this._verticalNavService.collapsed = false;
            }
            // then expand the nav group
            this.expandGroup();
        }
    }

    // TODO: FIXME: This is horrible. I really need to refactor VerticalNavGroup
    // but I have spent way too much time on VerticalNav and I don't have the patience
    // to do it right now. Have tested that it works and does not cause any side-effects
    onNavContentClick() {
        if (this._verticalNavService.collapsible && this._verticalNavService.collapsed) {
            this.expandGroup();
        }
    }

    ngAfterContentInit() {
        // This makes sure that if someone marks a nav group expanded in a collapsed nav
        // the expanded property is switched back to collapsed state.
        if (this._verticalNavService.collapsed && this.expanded) {
            this.wasExpanded = true;
            this.expandAnimationState = COLLAPSED_STATE;
        }
    }

    ngOnDestroy() {
        this._subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
        this._verticalNavGroupService.unregisterNavGroup(this);
    }
}

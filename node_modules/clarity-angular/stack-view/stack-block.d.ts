import { EventEmitter, OnInit } from "@angular/core";
export declare class StackBlock implements OnInit {
    private parent;
    expanded: boolean;
    expandedChange: EventEmitter<boolean>;
    expandable: boolean;
    private _changedChildren;
    private _fullyInitialized;
    private _changed;
    readonly getChangedValue: boolean;
    setChangedValue: boolean;
    constructor(parent: StackBlock);
    ngOnInit(): void;
    addChild(): void;
    toggleExpand(): void;
}

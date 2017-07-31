/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {TemplateRef} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";


/**
 * @class DatagridHideableColumn
 *
 * @description
 * A utility class for that adds hide/show functionality to a column, its cells and enables a toggler in the
 * DatagridColumnToggle Component.
 *
 */
export class DatagridHideableColumn {
    /**
     * @property hiddenChanges
     *
     * @description
     * A stream of state changes an instance of DatagridHideableColumn will broadcast to subscribers.
     *
     * @type {Subject<boolean>}
     */
    private hiddenChangesState: Subject<boolean> = new Subject<boolean>();

    /**
     * @constructor
     *
     * @description
     * The init function for DatagridHideableColumn instances that does the following:
     *
     * 1. Set values for the private variables that enable a hideable column
     * 2. Broadcast the next hidden change for anyone (already) subscribed to this DatagridHideableColumn
     * TODO: Debug and verify that #2 is really necessary.
     *
     * @param _template
     * @param _id
     * @param _hidden
     */
    constructor(private _template: TemplateRef<any>, private _id: string, private _hidden: boolean = false) {}

    /**
     * @function template
     *
     * @description
     * A getter function that returns an TemplateRef of the DatagridColumn that is hideable. This is currently used to
     * populate the DatagridColumnToggle UI with the correct Column name.
     *
     * @returns {TemplateRef<any>}
     */
    get template() {
        return this._template;
    }

    /**
     * @function id
     *
     * @description
     * public function that returns the id of a HideableCOlumn instance. Used by the HideableCOlumnService for passing
     * state and actions between DateGridColumns, DataGridCells & the DatagridColumnToggle Components.
     *
     * @returns {string}
     */
    get id(): string {
        return this._id;
    }

    /**
     * @function hidden
     *
     * @description
     * A getter that returns the hidden value of a DatagridHideableColumn instance.
     * TODO: debug and make sure you really need this since we have the hiddenCHanges observable.
     *
     * @returns {boolean}
     */
    get hidden(): boolean {
        return this._hidden;
    }

    /**
     * @function hidden
     *
     * @description
     * The setter for setting the hidden state of a DatagridHideableColumn instance.
     * It also broadcasts the change after its set.
     *
     * @param value
     */
    set hidden(value: boolean) {
        if (this._hidden === value) {
            return;
        }
        this._hidden = value;
        this.hiddenChangesState.next(value);
    }

    /**
     * @function hiddenChangeState
     *
     * @description
     * An Observable for the HideableColumns hidden changes.
     *
     * @returns {Observable<boolean>}
     */
    get hiddenChangeState(): Observable<boolean> {
        return this.hiddenChangesState.asObservable();
    }

    // Flag this true when the service only has one visible column open.

    public lastVisibleColumn: boolean = false;
}

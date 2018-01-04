/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {DatagridRenderOrganizer} from "./render-organizer";

/**
 * Mock that gives direct access to the subjects, to trigger specific parts of the render cycle.
 */
@Injectable()
export class MockDatagridRenderOrganizer extends DatagridRenderOrganizer {
    public get noLayout(): Subject<boolean> {
        return this._noLayout;
    }

    public get clearWidths(): Subject<any> {
        return this._clearWidths;
    }

    public get detectStrictWidths(): Subject<any> {
        return this._detectStrictWidths;
    }

    public get tableMode(): Subject<boolean> {
        return this._tableMode;
    }

    public get computeWidths(): Subject<any> {
        return this._computeWidths;
    }

    public get alignColumns(): Subject<any> {
        return this._alignColumns;
    }
}

export const MOCK_ORGANIZER_PROVIDER = {
    provide: DatagridRenderOrganizer,
    useClass: MockDatagridRenderOrganizer
};

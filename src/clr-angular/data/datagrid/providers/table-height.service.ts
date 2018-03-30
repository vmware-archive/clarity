/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {ElementRef, Injectable} from "@angular/core";

/**
 * @description
 * Internal datagrid service that holds a reference to the clr-dg-table element and exposes a method to get height.
 */
@Injectable()
export class TableHeightService {
    public tableRef: ElementRef;

    getHeight(): string {
        return `${this.tableRef.nativeElement.clientHeight}px`;
    }
}
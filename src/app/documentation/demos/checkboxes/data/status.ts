/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import { Server } from "./server";
import { SERVERS } from "./values";

@Injectable()
export class Status {
    private _all: Server[];
    constructor() {
        this._all = SERVERS;
    }
    fetch(): Server[] {
        return this._all;
    }
}

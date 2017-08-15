/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Server} from "./server";
import {SERVERS} from "./values";

export class Status {
    private _all: Server[];
    constructor() {
        this._all = SERVERS;
    }
    fetch(): Server[] {
        return this._all;
    }
}
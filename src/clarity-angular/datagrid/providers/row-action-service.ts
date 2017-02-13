/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable} from "@angular/core";

@Injectable()
export class RowActionService {
    /**
     * a value of 0 means no rows with action
     */
    private _actionableCount = 0;
    public get actionableCount(): number {
        return this._actionableCount;
    }

    public register() {
        this._actionableCount++;
    }

    public deregister() {
        this._actionableCount--;
    }



}

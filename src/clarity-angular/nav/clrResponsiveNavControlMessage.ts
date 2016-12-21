/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export class ClrResponsiveNavControlMessage {
    constructor(private _controlCode: string, private _navLevel: number) {}

    get controlCode(): string {
        return this._controlCode;
    }

    get navLevel(): number {
        return this._navLevel;
    }
}

/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Comparator} from "./comparator";
import {Filter} from "./filter";

export interface State {
    page?: {from?: number; to?: number; size?: number;};
    sort?: {by: string|Comparator<any>; reverse: boolean;};
    filters?: ({property: string, value: string}|Filter<any>)[];
}
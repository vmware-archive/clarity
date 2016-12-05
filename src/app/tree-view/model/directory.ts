/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {File} from "./file";

export class Directory {

    constructor(
        public dirName: string,
        public childFiles: File[],
        public childDirs: Directory[]
    ) {}
}

/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class ActiveFragmentService {

    // fragment anchor link elements
    fragmentLinks: any = {};

    activeFragment: Subject<string> = new Subject<string>();
}
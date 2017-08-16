/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable} from "@angular/core";
import {VerticalNavGroup} from "../vertical-nav-group";

@Injectable()
export class VerticalNavGroupService {
    public navGroups: VerticalNavGroup[] = [];

    registerNavGroup(navGroup: VerticalNavGroup) {
        this.navGroups.push(navGroup);
    }

    unregisterNavGroup(navGroup: VerticalNavGroup): void {
        const index = this.navGroups.indexOf(navGroup);
        if (index > -1) {
            this.navGroups.splice(index, 1);
        }
    }
}

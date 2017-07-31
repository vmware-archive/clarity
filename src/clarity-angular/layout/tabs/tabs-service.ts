/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable} from "@angular/core";
import {Tab} from "./tab";

@Injectable()
export class TabsService {
    private _children: Tab[] = [];

    register(tab: Tab) {
        this._children.push(tab);
    }

    get children() {
        return this._children;
    }

    get activeTab() {
        return this.children.find((tab: Tab) => {
            return tab.active;
        });
    }

    get overflowTabs() {
        return this.children.filter((tab: Tab) => {
            return tab.tabLink.inOverflow === true;
        });
    }

    unregister(tab: Tab) {
        const index = this.children.indexOf(tab);
        if (index > -1) {
            this.children.splice(index, 1);
        }
    }
}

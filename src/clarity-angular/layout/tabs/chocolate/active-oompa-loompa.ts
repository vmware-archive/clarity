/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ChangeDetectorRef, Directive, Inject} from "@angular/core";

import {OompaLoompa} from "../../../utils/chocolate/oompa-loompa";
import {IF_ACTIVE_ID, IfActiveService} from "../../../utils/conditional/if-active.service";

import {TabsWillyWonka} from "./tabs-willy-wonka";

@Directive({selector: "[clrTabLink], clr-tab-content"})
export class ActiveOompaLoompa extends OompaLoompa {
    constructor(cdr: ChangeDetectorRef, willyWonka: TabsWillyWonka, @Inject(IF_ACTIVE_ID) private id: number,
                private ifActive: IfActiveService) {
        super(cdr, willyWonka);
    }

    get flavor() {
        return this.ifActive.current === this.id;
    }
}

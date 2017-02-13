/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable} from "@angular/core";

import { ClrResponsiveNavCodes } from "./clrResponsiveNavCodes";
import { ClrResponsiveNavControlMessage } from "./clrResponsiveNavControlMessage";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ClrResponsiveNavigationService {
    public responsiveNavList: number[] = [];
    private registerNavSubject: Subject<number[]>
        = new Subject<number[]>();
    private controlNavSubject: Subject<ClrResponsiveNavControlMessage>
        = new Subject<ClrResponsiveNavControlMessage>();

    get registeredNavs(): Observable<number[]> {
        return this.registerNavSubject.asObservable();
    }

    get navControl(): Observable<ClrResponsiveNavControlMessage> {
        return this.controlNavSubject.asObservable();
    }

    constructor() {
        this.closeAllNavs(); //We start with all navs closed
    }

    registerNav(navLevel: number): void {
        if (!navLevel || this.isNavRegistered(navLevel)) {
            return;
        }
        this.responsiveNavList.push(navLevel);
        this.registerNavSubject.next(this.responsiveNavList);
    }

    isNavRegistered(navLevel: number): boolean {
        if (this.responsiveNavList.indexOf(navLevel) > -1) {
            console.error("Multiple clr-nav-level " + navLevel
                + " attributes found. Please make sure that only one exists");
            return true;
        }
        return false;
    }

    unregisterNav(navLevel: number) {
        let index = this.responsiveNavList.indexOf(navLevel);
        if (index > -1) {
            this.responsiveNavList.splice(index, 1);
            this.registerNavSubject.next(this.responsiveNavList);
        }
    }

    sendControlMessage(controlCode: string, navLevel: number) {
        let message: ClrResponsiveNavControlMessage
            = new ClrResponsiveNavControlMessage(controlCode, navLevel);
        this.controlNavSubject.next(message);
    }

    closeAllNavs() {
        let message: ClrResponsiveNavControlMessage
            = new ClrResponsiveNavControlMessage(
                ClrResponsiveNavCodes.NAV_CLOSE_ALL, -999
            );
        this.controlNavSubject.next(message);
    }
}

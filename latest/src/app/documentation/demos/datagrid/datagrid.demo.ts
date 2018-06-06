/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, OnDestroy, OnInit, ViewChild} from "@angular/core";
import {ClarityDocComponent} from "../clarity-doc";
import {ActivatedRoute, NavigationEnd, Route, Router} from "@angular/router";
import {Subscription} from "rxjs";
import { environment } from "../../../../environments/environment";

@Component({
    selector: "clr-datagrid-demo",
    templateUrl: "./datagrid.demo.html",
    styleUrls: ["./datagrid.demo.main.scss"],
    host: {
        "[class.content-area]": "true",
        "[class.dox-content-panel]": "true"
    }
})
export class DatagridDemo extends ClarityDocComponent implements OnInit, OnDestroy {
    @ViewChild("demoView") demoView;

    constructor(private route: ActivatedRoute, private router: Router) {
        super("datagrid");
    }

    private _subscriptions: Subscription[] = [];

    childRoutes: Route[];

    previous: boolean = false;
    next: boolean = false;

    previousRoute: Route;
    nextRoute: Route;

    parentRoute: string = "";

    ngOnInit() {
        let tempArr: any[] = this.route.routeConfig.children;
        if (tempArr.length > 1) {
            this.childRoutes = tempArr.slice(1);
        }
        this._subscriptions.push(this.router.events.subscribe((change: any) => {
            if (change instanceof NavigationEnd) {
                if (change.url.includes("datagrid")) {
                    this.initializePagination(change.url);
                }
            }
        }));
        this.initializePagination('/documentation/' + environment.version + '/datagrid/' + this.route.children[0].routeConfig.path);
    }

    initializePagination(url: string): void {
        let tempArr: string[] = url.split("/");
        this.parentRoute = url.substr(0, url.indexOf("datagrid")) + "datagrid/";
        if (tempArr.length > 1) {
            let subRoute: string = tempArr[tempArr.length - 1];
            if (subRoute === "datagrid") {
                this.nextRoute = this.childRoutes[1];
                this.next = true;
            } else {
                for (let i = 0; i < this.childRoutes.length; i++) {
                    if (this.childRoutes[i].path === subRoute) {
                        if (i === 0) {
                            this.previous = false;
                        } else {
                            this.previousRoute = this.childRoutes[i - 1];
                            this.previous = true;
                        }

                        if (i < this.childRoutes.length - 1) {
                            this.nextRoute = this.childRoutes[i + 1];
                            this.next = true;
                        } else {
                            this.next = false;
                        }
                        break;
                    }
                }
            }
        }
    }

    scrollToDemoView() {
        if (this.demoView) {
            this.demoView.nativeElement.scrollIntoView();
        }
    }

    moveNext() {
        if (this.nextRoute) {
            let tempPath = this.parentRoute + this.nextRoute.path;
            this.router.navigate(['./' + tempPath]);
            this.scrollToDemoView();
        }
    }

    movePrevious() {
        if (this.previousRoute) {
            let tempPath = this.parentRoute + this.previousRoute.path;
            this.router.navigate([tempPath]);
            this.scrollToDemoView();
        }
    }

    ngOnDestroy() {
        this._subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }
}

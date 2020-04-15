/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ClarityDocComponent } from '../clarity-doc';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'clr-datagrid-demo',
  templateUrl: './datagrid.demo.html',
  styleUrls: ['./datagrid.demo.main.scss'],
  host: {
    '[class.content-area]': 'true',
    '[class.dox-content-panel]': 'true',
  },
})
export class DatagridDemo extends ClarityDocComponent implements OnInit, OnDestroy {
  @ViewChild('demoView', { static: true })
  demoView;

  constructor(private route: ActivatedRoute, private router: Router) {
    super('datagrid');
  }

  private _subscriptions: Subscription[] = [];

  childRoutes: Route[];

  previous = false;
  next = false;

  previousRoute: Route;
  nextRoute: Route;

  parentRoute = '';

  ngOnInit() {
    const tempArr: any[] = this.route.routeConfig.children;
    if (tempArr.length > 1) {
      this.childRoutes = tempArr.slice(1);
    }
    this._subscriptions.push(
      this.router.events.subscribe((change: any) => {
        if (change instanceof NavigationEnd) {
          if (change.url.includes('datagrid')) {
            this.initializePagination(change.url);
          }
        }
      })
    );
    this.initializePagination('/documentation/datagrid/' + this.route.children[0].routeConfig.path);
  }

  initializePagination(url: string): void {
    const tempArr: string[] = url.split('/');
    this.parentRoute = url.substr(0, url.indexOf('datagrid')) + 'datagrid/';
    if (tempArr.length > 1) {
      const subRoute: string = tempArr[tempArr.length - 1];
      if (subRoute === 'datagrid') {
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
      const tempPath = this.parentRoute + this.nextRoute.path;
      this.router.navigate(['./' + tempPath]);
      this.scrollToDemoView();
    }
  }

  movePrevious() {
    if (this.previousRoute) {
      const tempPath = this.parentRoute + this.previousRoute.path;
      this.router.navigate([tempPath]);
      this.scrollToDemoView();
    }
  }

  ngOnDestroy() {
    this._subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}

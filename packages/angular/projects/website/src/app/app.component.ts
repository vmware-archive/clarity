/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';

declare let ga: Function;

import * as GLOBAL from '../settings/global.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild('content', { static: true })
  contentRef: ElementRef;
  environment = environment;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    public router: Router,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.router.events.subscribe((change: any) => {
      if (change instanceof NavigationEnd) {
        this.bodyClasses.forEach(className => this.renderer.removeClass(this.el.nativeElement, className));
        this.updateBodyClasses();
        this.bodyClasses.forEach(className => this.renderer.addClass(this.el.nativeElement, className));

        this.updateBrowserTitle();

        // ga may not exist if we aren't on the actual site
        if (typeof ga !== 'undefined') {
          ga('send', 'pageview', change.urlAfterRedirects);
        }
      }
    });
  }

  bodyClasses = [];

  updateBodyClasses() {
    this.bodyClasses.length = 0;
    this.bodyClasses = this.collectRouteData('bodyClass');
  }

  public productTitle = GLOBAL.alt_title;

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  public updateBrowserTitle() {
    const browserTitles = this.collectRouteData('browserTitle');

    browserTitles.unshift(this.defaultBrowserTitle);

    // some weirdness with routing was giving us duplicate titles
    // like "Clarity Design System - Releases - Releases"
    const dupes = new Set();

    const filteredTitles = browserTitles.filter(function (ttl) {
      if (!dupes.has(ttl)) {
        dupes.add(ttl);
        return true;
      }
    });

    this.setTitle(filteredTitles.join(this.browserTitleSeparator));
  }

  getDocumentationUrl() {
    if (window.location.hostname === 'clarity.design' && environment.latest !== environment.version) {
      return `https://${environment.latest}.clarity.design`;
    } else {
      return `/documentation`;
    }
  }

  private defaultBrowserTitle = 'Clarity Design System';
  private browserTitleSeparator = ' - ';

  private collectRouteData(key: string) {
    let route = this.router.routerState.snapshot.root;
    const returnArray = [];

    while (route) {
      if (route.data && route.data[key]) {
        returnArray.push(route.data[key]);
      }
      route = route.firstChild;
    }

    return returnArray;
  }
}

/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

interface Version {
  version: string;
  status: string;
  url: string;
}

@Component({
  selector: 'version-switcher',
  templateUrl: 'version-switcher.component.html',
  styleUrls: ['./version-switcher.component.scss'],
})
export class VersionSwitcherComponent {
  versions: Version[] = [];
  environment = environment;
  current: string;
  child: string;
  subscription: Subscription;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Record<string, any>
  ) {
    this.subscription = this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        let first = this.route.firstChild;
        this.child = first.snapshot.url.length ? first.snapshot.url[0].path : '';
        while (first.firstChild !== null) {
          if (first.firstChild.snapshot.url.length) {
            this.child += '/' + first.firstChild.snapshot.url[0].path;
          }
          first = first.firstChild;
        }
      }
    });
  }

  ngOnInit() {
    this.current = environment.version;
    if (isPlatformBrowser(this.platformId)) {
      this.http.get<Version[]>(environment.versions_url).subscribe(
        versions => {
          this.versions = versions;
        },
        error => {
          console.log("couldn't load", error);
        }
      );
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

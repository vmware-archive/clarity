/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { AfterViewInit, Component, OnDestroy, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { compareReleases, VERSIONS } from './release-page/release-organizer';
import { Release } from './release/release.directive';
import { NavigationEnd, Router } from '@angular/router';
import { BreakingChange } from './counters/breaking-change.directive';
import { BugFix } from './counters/bug-fix.directive';
import { NewComponent } from './counters/new-component.directive';
import { Subscription } from 'rxjs';
import { environment } from './../../environments/environment';

import * as RELEASES from '../../releases/release-list.json';

@Component({
  selector: 'news',
  templateUrl: '../../releases/final-template/auto-generated-news.component.html',
  styleUrls: ['./news.component.scss'],
  host: {
    '[class.content-container]': 'true',
  },
})
export class NewsComponent implements OnDestroy, AfterViewInit {
  @ViewChildren(Release) releaseTemplates: QueryList<Release>;
  @ViewChildren(BreakingChange) breakingChanges: QueryList<BreakingChange>;
  @ViewChildren(BugFix) bugFixes: QueryList<BugFix>;
  @ViewChildren(NewComponent) newComponents: QueryList<NewComponent>;

  nbBreakingChanges: number;
  nbBugFixes: number;
  nbNewComponents: number;
  newPackageFormat = false;
  hasDarkTheme = false;

  figmaUrl: string;

  releaseNumber: string;
  releaseDate: string;
  sketchVersion: string;
  commit: string;

  private _subscriptions: Subscription[] = [];

  private _hasIcons = false;

  get hasIcons(): boolean {
    return this._hasIcons;
  }

  set hasIcons(value: boolean) {
    this._hasIcons = value;
  }

  private _hasGitHub = false;

  get hasGitHub(): boolean {
    return this._hasGitHub;
  }

  set hasGitHub(value: boolean) {
    this._hasGitHub = value;
  }

  currentTemplate: TemplateRef<any>;

  current = RELEASES.current;
  versions = VERSIONS;

  get releaseArr(): Release[] {
    if (this.releaseTemplates) {
      return this.releaseTemplates.toArray();
    } else {
      return [];
    }
  }

  constructor(private router: Router) {
    this._subscriptions.push(
      this.router.events.subscribe((change: any) => {
        if (change instanceof NavigationEnd) {
          const url: string[] = change.url.split('/');
          const urlLength: number = url.length;
          this.resetCounts();
          setTimeout(() => {
            if (urlLength > 0 && url[urlLength - 1] !== 'news') {
              this.setTemplate(url[urlLength - 1]);
            } else if (url[urlLength - 1] === 'news') {
              this.setTemplate(this.current);
            }
          }, 0);
        }
      })
    );
  }

  orderVersions(a: any, b: any) {
    if (parseFloat(b.key.substring(1)) > 1) {
      return parseFloat(b.key.substring(1)) - parseFloat(a.key.substring(1));
    } else {
      return parseFloat(b.key.substring(3)) - parseFloat(a.key.substring(3));
    }
  }

  resetCounts(): void {
    this.nbBreakingChanges = 0;
    this.nbNewComponents = 0;
    this.nbBugFixes = 0;
  }

  setTemplate(releaseNo: string): void {
    const tempArr: Release[] = this.releaseArr.filter(release => release.clrRelease === releaseNo);
    if (tempArr.length > 0) {
      this.currentTemplate = tempArr[0].templateRef;
      this.setInfo(releaseNo, (RELEASES.all as Record<string, any>)[releaseNo]);
    }
  }

  newPackages() {
    return compareReleases(this.releaseNumber, '0.11.0');
  }

  setInfo(releaseNo: string, releaseInfo: any): void {
    this.releaseNumber = releaseNo;
    this.releaseDate = releaseInfo.date;
    this.sketchVersion = releaseInfo.sketch;
    this.commit = releaseInfo.commit;
    this.hasIcons = compareReleases('0.5.4', releaseNo) >= 0;
    this.hasDarkTheme = compareReleases('0.11.0', releaseNo) >= 0;
    this.hasGitHub = compareReleases('0.6.0', releaseNo) >= 0;
    this.nbBreakingChanges = this.breakingChanges ? this.breakingChanges.length : 0;
    this.nbBugFixes = this.bugFixes ? this.bugFixes.length : 0;
    this.nbNewComponents = this.newComponents ? this.newComponents.length : 0;
    this.newPackageFormat = compareReleases('0.11.0-beta', releaseNo) >= 0;
    this.figmaUrl = environment.figma_url;
  }

  ngAfterViewInit() {
    this._subscriptions.push(
      this.bugFixes.changes.subscribe(() => {
        setTimeout(() => {
          this.nbBreakingChanges = this.breakingChanges ? this.breakingChanges.length : 0;
          this.nbBugFixes = this.bugFixes ? this.bugFixes.length : 0;
          this.nbNewComponents = this.newComponents ? this.newComponents.length : 0;
        }, 0);
      })
    );
  }

  ngOnDestroy() {
    this._subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }
}

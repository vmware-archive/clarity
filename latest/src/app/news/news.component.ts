import {
    AfterViewInit,
    Component,
    OnDestroy,
    QueryList,
    TemplateRef,
    ViewChildren
} from "@angular/core";
import {compareReleases, MAJORS, MINORS, PATCHES} from "./release-page/release-organizer";
import {Release} from "./release/release.directive";
import {NavigationEnd, Router} from "@angular/router";
import {BreakingChange} from "./counters/breaking-change.directive";
import {BugFix} from "./counters/bug-fix.directive";
import {NewComponent} from "./counters/new-component.directive";
import {Subscription} from "rxjs";

const RELEASES = require("../../releases/release-list.json");


@Component({
    selector: "news",
    templateUrl: "../../releases/final-template/auto-generated-news.component.html",
    host: {
        "[class.content-container]": "true"
    }
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

    releaseNumber: string;
    releaseDate: string;
    sketchVersion: string;
    commit: string;

    private _subscriptions: Subscription[] = [];

    private _hasIcons: boolean = false;

    get hasIcons(): boolean {
        return this._hasIcons;
    }

    set hasIcons(value: boolean) {
        this._hasIcons = value;
    }

    private _hasGitHub: boolean = false;

    get hasGitHub(): boolean {
        return this._hasGitHub;
    }

    set hasGitHub(value: boolean) {
        this._hasGitHub = value;
    }

    currentTemplate: TemplateRef<any>;

    current = RELEASES.current;
    minors = MINORS;
    patches = PATCHES;
    versions = Object.keys(MINORS).sort((a: string, b: string) => (Number(b) - Number(a)));

    get releaseArr(): Release[] {
        if (this.releaseTemplates) {
            return this.releaseTemplates.toArray();
        } else {
            return [];
        }
    }

    constructor(private router: Router) {
        this._subscriptions.push(this.router.events.subscribe((change: any) => {
            if (change instanceof NavigationEnd) {
                let url: string[] = change.url.split("/");
                let urlLength: number = url.length;
                this.resetCounts();
                setTimeout(() => {
                    if (urlLength > 0 && url[urlLength - 1] !== "news") {
                        this.setTemplate(url[urlLength - 1]);
                    } else if (url[urlLength - 1] === "news") {
                        this.setTemplate(this.current);
                    }
                }, 0);
            }
        }));
    }

    resetCounts(): void {
        this.nbBreakingChanges = 0;
        this.nbNewComponents = 0;
        this.nbBugFixes = 0;
    }

    setTemplate(releaseNo: string): void {
        let tempArr: Release[] = this.releaseArr.filter(release => release.clrRelease === releaseNo);
        if (tempArr.length > 0) {
            this.currentTemplate = tempArr[0].templateRef;
            this.setInfo(releaseNo, RELEASES.all[releaseNo]);
        }
    }

    newPackages(a, b) {
        return compareReleases(this.releaseNumber, "0.11.0");
    }

    setInfo(releaseNo: string, releaseInfo: any): void {
        this.releaseNumber = releaseNo;
        this.releaseDate = releaseInfo.date;
        this.sketchVersion = releaseInfo.sketch;
        this.commit = releaseInfo.commit;
        this.hasIcons = (compareReleases("0.5.4", releaseNo) >= 0);
        this.hasGitHub = (compareReleases("0.6.0", releaseNo) >= 0);
        this.nbBreakingChanges = this.breakingChanges ? this.breakingChanges.length : 0;
        this.nbBugFixes = this.bugFixes ? this.bugFixes.length : 0;
        this.nbNewComponents = this.newComponents ? this.newComponents.length : 0;
        this.newPackageFormat = (compareReleases("0.11.0-beta", releaseNo) >= 0);
    }

    ngAfterViewInit() {
        this._subscriptions.push(this.bugFixes.changes.subscribe(() => {
            setTimeout(() => {
                this.nbBreakingChanges = this.breakingChanges ? this.breakingChanges.length : 0;
                this.nbBugFixes = this.bugFixes ? this.bugFixes.length : 0;
                this.nbNewComponents = this.newComponents ? this.newComponents.length : 0;
            }, 0);
        }));
    }

    ngOnDestroy() {
        this._subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }
}

import {AfterViewInit, Component, OnInit, QueryList, TemplateRef, ViewChildren} from "@angular/core";
import {MINORS, PATCHES} from "./release-page/release-organizer";
import {Release} from "./release/release.directive";
import {NavigationEnd, Router} from "@angular/router";

const RELEASES = require("../../releases/release-list.json");


@Component({
    selector: "news",
    templateUrl: "news.component.html",
    host: {
        "[class.content-container]": "true"
    }
})
export class NewsComponent implements AfterViewInit, OnInit {
    @ViewChildren(Release) releaseTemplates: QueryList<Release>;

    currentTemplate: TemplateRef<any>;

    current = RELEASES.current;

    minors = MINORS["0"];
    patches = PATCHES;

    get releaseArr(): Release[] {
        return this.releaseTemplates.toArray();
    }

    ngAfterViewInit() {
        if (this.releaseArr.length > 0) {
            let temp: Release[] = this.releaseArr.filter(release => release.clrRelease === this.current);
            if (temp.length > 0) {
                this.currentTemplate = temp[0].templateRef;
            }
        }
    }

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.router.events.subscribe((change: any) => {
            if (change instanceof NavigationEnd) {
                let url: string[] = change.url.split("/");
                let urlLength: number = url.length;
                if (urlLength > 0 && url[urlLength - 1] !== "news") {
                    this.setTemplate(url[urlLength - 1]);
                }
            }
        });
    }

    setTemplate(releaseNo: string): void {
        let tempArr: Release[] = this.releaseTemplates.filter(release => release.clrRelease === releaseNo);
        if (tempArr.length > 0) {
            this.currentTemplate = tempArr[0].templateRef;
        }
    }

}

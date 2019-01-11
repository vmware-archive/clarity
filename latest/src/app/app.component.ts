import {Component, Inject, ElementRef, OnInit, Renderer,InjectionToken, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {Router, NavigationEnd, NavigationStart} from "@angular/router";
import {Title} from '@angular/platform-browser';
import {environment} from "../environments/environment";

export const PLATFORM_TOKEN = new InjectionToken<string>("clarity");

declare let ga: Function;

const PRODUCT_TITLE = require('../settings/global.json').alt_title;

@Component({
    selector: 'root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    
    environment = environment;

    constructor(private renderer: Renderer, private el: ElementRef, public router: Router, private titleService: Title, @Inject(PLATFORM_ID) private platformId: Object) {}

    ngOnInit() {
        this.router.events.subscribe((change: any) => {
            // This block redirects all pages to the new website! There are a few url changes to handle here.
            if (change instanceof NavigationStart) {
                let url = `https://clarity.design${change.url}`;
                url = url.replace('/v1.0', '');
                url = url.replace('/icons/icon-sets', '/icons');
                url = url.replace('/icons/clarity-icons', '/icons/get-started');
                if (isPlatformBrowser(this.platformId)) {
                    window.location.href = url;
                }
            }
            if (change instanceof NavigationEnd) {
                this.bodyClasses.forEach(className => this.renderer.setElementClass(this.el.nativeElement, className, false));
                this.updateBodyClasses();
                this.bodyClasses.forEach(className => this.renderer.setElementClass(this.el.nativeElement, className, true));

                this.updateBrowserTitle();

                // ga may not exist if we aren't on the actual site
                if (typeof ga !== "undefined") {
                    ga('send', 'pageview', change.urlAfterRedirects);
                }
            }
        });
    }

    bodyClasses = [];

    updateBodyClasses() {
        this.bodyClasses.length = 0;
        this.bodyClasses = this.collectRouteData("bodyClass");
    }

    trackBannerAction(eventLabel: string) {
        if (window["trackHiringAlert"]){
            window["trackHiringAlert"](eventLabel);
        }
    }

    public productTitle = PRODUCT_TITLE;

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    public updateBrowserTitle() {
        let browserTitles = this.collectRouteData("browserTitle");

        browserTitles.unshift(this.defaultBrowserTitle);

        // some weirdness with routing was giving us duplicate titles
        // like "Clarity Design System - Releases - Releases"
        let dupes = new Set;

        let filteredTitles = browserTitles.filter(function (ttl) {
            if (!dupes.has(ttl)) {
                dupes.add(ttl);
                return true;
            }
        });

        this.setTitle(filteredTitles.join(this.browserTitleSeparator));
    }

    private defaultBrowserTitle = "Clarity Design System";
    private browserTitleSeparator = " - ";

    private collectRouteData(key: string) {
        let route = this.router.routerState.snapshot.root;
        let returnArray = [];

        while (route) {
            if (route.data && route.data[key]) {
                returnArray.push(route.data[key]);
            }
            route = route.firstChild;
        }

        return returnArray;
    }
}

import {Component, ElementRef, OnInit, Renderer,InjectionToken, Inject} from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import {Title} from '@angular/platform-browser';
import { environment } from '../environments/environment';

export const PLATFORM_TOKEN = new InjectionToken<string>("clarity");

declare let ga: Function;

const PRODUCT_TITLE = require('../settings/global.json').alt_title;

@Component({
    selector: 'root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    environment = environment;

    constructor(private renderer: Renderer, private el: ElementRef, private router: Router, private titleService: Title) {
    }

    ngOnInit() {
        this.router.events.subscribe((change: any) => {
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

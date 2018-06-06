import { Component, Inject, PLATFORM_ID } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Location, isPlatformBrowser } from "@angular/common";
import { ActivatedRoute, Router, NavigationEnd, UrlSegment } from "@angular/router";
import { Subscription } from "rxjs";
import {environment} from "../../../environments/environment";

interface Version {
  version: string;
  status: string;
}

@Component({
  selector: "version-switcher",
  templateUrl: "version-switcher.component.html",
  styleUrls: ["./version-switcher.component.scss"],
})
export class VersionSwitcherComponent {
  versions: Version[] = [];
  environment = environment;
  current: string;
  child: string;
  subscription: Subscription;

  constructor(private http: HttpClient, private location: Location, private route: ActivatedRoute, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    this.subscription = this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        let route = this.route.firstChild;
        this.child = (route.snapshot.url.length) ? route.snapshot.url[0].path : "";
        while (route.firstChild !== null) {
          if (route.firstChild.snapshot.url.length) {
            this.child += '/' + route.firstChild.snapshot.url[0].path;
          }
          route = route.firstChild;
        }
      }
    });
  }

  ngOnInit() {
    this.current = environment.version;
    if (isPlatformBrowser(this.platformId)) {
      const segments = this.location.path().split('/');
      if (segments.length > 2) {
        this.current = segments[2];
      }
      this.http.get<Version[]>(environment.versions_url).subscribe(versions => {
        this.versions = versions;
      }, error => {
        console.log('couldn\'t load', error);
      });
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

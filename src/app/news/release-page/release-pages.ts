import {Component, ViewChildren, QueryList, AfterViewInit} from "@angular/core";
import {TEMPLATES} from "../../../releases/release-templates-stub";
import {BreakingChange} from "../counters/breaking-change.directive";
import {BugFix} from "../counters/bug-fix.directive";
import {NewComponent} from "../counters/new-component.directive";
import {compareReleases} from "./release-organizer";

const RELEASES = require("../../../releases/release-list.json");
const GENERIC_TEMPLATE = require("./release-page.template.html");

export const RELEASE_ROUTES = [];

let indexComponent;
for (let release in RELEASES.all) {
  if (TEMPLATES[release]) {
    let template = GENERIC_TEMPLATE.replace("${content}", TEMPLATES[release]);
    let releaseInfo = RELEASES.all[release];

    let component = createChangeLogComponent(release, releaseInfo);

    RELEASE_ROUTES.push({
      path: release,
      component: component,
      data: {
        browserTitle: release
      }
    });

    if (release == RELEASES.current) {
      indexComponent = component;
    }
  }
}
RELEASE_ROUTES.push({
  path: "",
  component: indexComponent
});


// Closures, I don't miss you. But apparently you're still there.
function createChangeLogComponent(releaseNumber, releaseInfo) {
  let template = GENERIC_TEMPLATE.replace("${content}", TEMPLATES[releaseNumber]);

  @Component({
    template: template,
    host: {
      "[class.content-area]": "true"
    }
  })
  class ChangelogComponent implements AfterViewInit {
    @ViewChildren(BreakingChange) breakingChanges: QueryList<BreakingChange>;
    @ViewChildren(BugFix) bugFixes: QueryList<BugFix>;
    @ViewChildren(NewComponent) newComponents: QueryList<NewComponent>;

    nbBreakingChanges: number;
    nbBugFixes: number;
    nbNewComponents: number;

    ngAfterViewInit(): void {
      // No need to subscribe to changes, we know this is all just static
      this.nbBreakingChanges = this.breakingChanges ? this.breakingChanges.length : 0;
      this.nbBugFixes = this.bugFixes ? this.bugFixes.length : 0;
      this.nbNewComponents = this.newComponents ? this.newComponents.length : 0;
    }

    releaseNumber = releaseNumber;
    releaseInfo = releaseInfo;
    hasIcons = (compareReleases("0.5.4", releaseNumber) >= 0);
    hasGitHub = (compareReleases("0.6.0", releaseNumber) >= 0);
  }
  return ChangelogComponent;
}

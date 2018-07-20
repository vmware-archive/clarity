import { Component } from '@angular/core';
const CLARITYTEAM = require("../../community/team.json");
const CONTRIBUTORS = require("../../community/contributors.json");

@Component({
  selector: 'community',
  templateUrl: 'community.component.html',
  host: {
    "[class.content-container]": "true"
  }
})
export class CommunityComponent {
  team: any[] = CLARITYTEAM.members;
  contributors: string[] = CONTRIBUTORS.contributors;
  teamImgUrl: string = "assets/images/team/";

  onReqClick(url: string) {
      if (window["trackHiringAlert"]){
          window["trackHiringAlert"](url, true);
          return false;
      }
      return true;
  }
}

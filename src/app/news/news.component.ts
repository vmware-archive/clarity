import { Component } from '@angular/core';
import {MINORS, PATCHES} from "./release-page/release-organizer";

const RELEASES = require("../../releases/release-list.json");


@Component({
  selector: 'news',
  templateUrl: 'news.component.html',
  host: {
    "[class.content-container]": "true"
  }
})
export class NewsComponent {
  current = RELEASES.current;

  minors = MINORS["0"];
  patches = PATCHES;

}

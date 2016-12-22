/*
 * Hack while waiting for https://github.com/angular/angular/issues/6595 to be fixed.
 */

import {Injectable} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Injectable()
export class AnchorLinksHandler {

  constructor(private route: ActivatedRoute) {
    this.route.fragment.subscribe(f => {
      if (f) {
        const element = document.querySelector("#" + f);
        if (element) {
          element.scrollIntoView(element);
        }
      }
    })
  }
}

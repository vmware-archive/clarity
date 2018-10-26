import { Component } from "@angular/core";

const COMPONENTS = require("../../../settings/componentlist.json");

@Component({
  selector: "component-status",
  templateUrl: "component-status.component.html",
  host: {
    "[class.content-area]": "true"
  }
})
export class ComponentStatusComponent {
  components = COMPONENTS.list;

  getUrl(item) {
    return item.url.split("#")[0];
  }

  getFragment(item) {
    return item.url.split("#")[1];
  }
}

/*
import {Component} from "@angular/core";
import {TEMPLATES} from "../documentation-templates-stub";

const COMPONENTS = require("../../../settings/componentlist.json");
const GENERIC_TEMPLATE = require("./component-doc-page.template.html");

export const ALL_DOCS = [];

for (let component of COMPONENTS.list) {
  if (component.url && TEMPLATES[component.url]) {
    let template = GENERIC_TEMPLATE.replace("${content}", TEMPLATES[component.url]);

    @Component({
      selector: component.url + "-docs",
      template: template,
      host: {
        "[class.content-area]": "true",
        "[class.dox-content-panel]": "true"
      }
    })
    class DocComponent {
      title = component.text;

      get useNewLayout() {
        return !!component.newLayout;
      }

      get uiDone() {
        return component.ui > 19;
      }

      get uiInProgress() {
        return 4 < component.ui && component.ui < 20;
      }

      get ngDone() {
        return component.ng > 19;
      }

      get ngInProgress() {
        return 4 < component.ng && component.ui < 20;
      }
    }

    ALL_DOCS.push({
      path: component.url,
      component: DocComponent,
      data: {
        bodyClass: "page-"+component.url,
        browserTitle: component.text
      },
    });
  }
}
*/

/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {AfterViewInit, Component, QueryList, ViewChildren} from "@angular/core";
import {ClrCodeHighlight, CodeHighlight} from "@clr/angular";

/** @deprecated since 0.12 */
const CSS_EXAMPLE = `.some-component {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}`;

/** @deprecated since 0.12 */
const HTML_EXAMPLE = `<pre>
  <code clr-code-highlight="language-css">
    .some-component {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
  </code>
</pre>`;

/** @deprecated since 0.12 */
const JAVASCRIPT_EXAMPLE = `var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
};`;

/** @deprecated since 0.12 */
const TYPESCRIPT_EXAMPLE = `import {Component} from "@angular/core";
import {Items} from "./providers/items";
import {Page} from "./providers/page";

@Component({
    selector: "clr-dg-placeholder",
    template: \`
        <div
            class="datagrid-placeholder"
            [class.datagrid-empty]="emptyDatagrid">
                <div class="datagrid-placeholder-image" *ngIf="emptyDatagrid"></div>
                <ng-content *ngIf="emptyDatagrid"></ng-content>
        </div>
    \`,
    host: {"[class.datagrid-placeholder-container]": "true"}
})
export class ClrDatagridPlaceholder {
    constructor(private items: Items, private page: Page) {}

    /**
     * Tests if the datagrid is empty, meaning it doesn't contain any items
     */
    public get emptyDatagrid() {
        return !this.items.loading && (!this.items.displayed || this.items.displayed.length === 0);
    }
}`;

/** @deprecated since 0.12 */
const JSON_EXAMPLE = `{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/app",
    "baseUrl": "./",
    "module": "es2015",
    "types": []
  },
  "exclude": [
    "test.ts",
    "**/*.spec.ts",
    "ks-app/**/*"
  ]
}`;

/** @deprecated since 0.12 */
@Component({templateUrl: "./code.component.html"})
export class KSCode implements AfterViewInit {
    /**
     * @description
     * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
     */
    private aCodeHighlight: CodeHighlight;
    private aClrCodeHighlight: ClrCodeHighlight;

    @ViewChildren(ClrCodeHighlight) highlights: QueryList<ClrCodeHighlight>;
    CSS_EXAMPLE = CSS_EXAMPLE;
    HTML_EXAMPLE = HTML_EXAMPLE;
    JAVASCRIPT_EXAMPLE = JAVASCRIPT_EXAMPLE;
    TYPESCRIPT_EXAMPLE = TYPESCRIPT_EXAMPLE;
    JSON_EXAMPLE = JSON_EXAMPLE;

    ngAfterViewInit() {
        this.highlights.forEach(highlight => {
            highlight.redraw();
        });
    }
}

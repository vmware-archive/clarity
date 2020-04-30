/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { CodeHighlight } from './code-highlight';

/**
 * Describe ES5/6 module import
 * let something = require('!raw-loader!/path-to-file')
 * => { default: <content of path-to-file as string> }
 */
type ESModuleImport = { default: string };

@Component({
  selector: 'clr-code-snippet',
  template: `
    <ng-container *ngIf="!disablePrism">
      <pre><code [clr-code-highlight]="'language-'+language">{{code}}</code></pre>
    </ng-container>
    <ng-container *ngIf="disablePrism">
      <pre><code class="clr-code">{{code}}</code></pre>
    </ng-container>
  `,
  styles: [
    `
      pre {
        background: transparent;
        padding: 12px;
      }
    `,
  ],
})
export class CodeSnippet implements AfterViewInit {
  @ViewChild(CodeHighlight) codeHighlight: CodeHighlight;

  private _code;
  @Input('clrCode')
  set code(code: ESModuleImport) {
    /**
     * handle ES5/6 Module imports
     */
    if (code && code.default) {
      this._code = code.default;
      return;
    }
    /**
     * in case that code is simple string
     */
    if (typeof code === 'string') {
      this._code = code;
      return;
    }

    // set to default to string so later code will be render as expected.
    this._code = '';
  }
  get code() {
    // make sure that there will be no empty new line or space at the end of the string
    return this._code.trim();
  }

  @Input('clrLanguage') public language = 'html';
  @Input('clrDisablePrism') public disablePrism = false;

  ngAfterViewInit(): void {
    if (this.codeHighlight) {
      this.codeHighlight.redraw();
    }
  }
}

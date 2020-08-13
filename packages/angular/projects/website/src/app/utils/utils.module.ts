/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { SketchTemplateLinkDirective } from './sketch-template-link.directive';
import { HashListener } from './hash-listener.directive';
import { ScrollSpy } from './scrollspy.directive';
import { CodeSnippet } from './code-snippet';
import { CodeHighlight } from './code-highlight';
// import { ExternalLinkDirective } from './external-link.directive';

@NgModule({
  imports: [CommonModule, ClarityModule],
  declarations: [
    SketchTemplateLinkDirective,
    HashListener,
    ScrollSpy,
    CodeSnippet,
    CodeHighlight,
    // Not working on production, removing for now.
    // ExternalLinkDirective,
  ],
  exports: [SketchTemplateLinkDirective, HashListener, ScrollSpy, CodeSnippet, CodeHighlight /*ExternalLinkDirective*/],
})
export class UtilsModule {}

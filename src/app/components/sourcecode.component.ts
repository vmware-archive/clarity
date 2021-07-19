/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Input } from '@angular/core';

import { highlight, languages } from 'prismjs';

import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';

const MAP_TYPE_HIGHLIGHT: { [extension: string]: string } = {
  js: 'javascript',
  json: 'json',
  ts: 'typescript',
  html: 'html',
  bash: 'bash',
};

export type SourceCodeLanguages = 'ts' | 'js' | 'html' | 'bash' | 'json' | undefined;

@Component({
  selector: 'sourcecode',
  template: '<pre style="overflow-x: scroll;"><code [innerHTML]="formattedContent"></code></pre>',
})
export class SourceCodeComponent {
  @Input() content: string | null = '';
  @Input() language: SourceCodeLanguages = 'ts';
  @Input() src = '';
  formattedContent = '';

  ngOnInit() {
    if (this.content) {
      this.formattedContent = this.render(this.content, this.language);
    }

    if (this.src) {
      const lang: SourceCodeLanguages = this.language || this.getExtension(this.src);
      import(`!!raw-loader!../migrations/${this.src}`).then(resolve => {
        this.formattedContent = this.render(resolve.default, this.mapTypeToHighlight(lang));
      });
    }
  }

  private render(content: string, lang = 'typescript'): string {
    return highlight(content.trim(), languages[lang], lang);
  }

  private getExtension(string: string): SourceCodeLanguages {
    return string.split('.').pop() as SourceCodeLanguages;
  }

  private mapTypeToHighlight(type: SourceCodeLanguages = 'html'): string {
    return MAP_TYPE_HIGHLIGHT[type];
  }
}

import { Component, Input } from '@angular/core';

import * as Prism from 'prismjs';

import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';

const MAP_TYPE_HIGHLIGHT = {
  ts: 'typescript',
  html: 'html',
  '': 'html',
  undefined: 'html',
};

@Component({
  selector: 'sourcecode',
  template: '<pre><code [innerHTML]="formattedContent"></code></pre>',
})
export class SourceCodeComponent {
  @Input() content: string;
  @Input() language = 'html';
  @Input() src = '';
  formattedContent = '';

  ngOnInit() {
    if (this.content) {
      this.formattedContent = this.render(this.content, this.language);
    }

    if (this.src) {
      import(`!!raw-loader!../migrations/${this.src}`).then(resolve => {
        this.formattedContent = this.render(resolve.default, this.mapTypeToHighlight(this.getExtension(this.src)));
      });
    }
  }

  private render(content, lang?: string) {
    return Prism.highlight(content.trim(), Prism.languages[lang || 'html']);
  }

  private getExtension(string) {
    return string.split('.').pop();
  }

  private mapTypeToHighlight(type) {
    return MAP_TYPE_HIGHLIGHT[type];
  }
}

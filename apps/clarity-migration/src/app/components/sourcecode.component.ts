import { Component, Input } from '@angular/core';

import * as Prism from 'prismjs';

import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';

const MAP_TYPE_HIGHLIGHT = {
  ts: 'typescript',
  '': 'html',
  undefined: 'html',
};

@Component({
  selector: 'sourcecode',
  template: '<pre><code [innerHTML]="formattedContent"></code></pre>',
})
export class SourceCodeComponent {
  @Input() content: string;
  @Input() language: string = 'html';
  @Input() src: string = '';
  formattedContent: string = '';

  ngOnInit() {
    if (this.content) {
      this.formattedContent = this.render(this.content);
    }

    if (this.src) {
      import(`!!raw-loader!../migrations/${this.src}`).then(resolve => {
        this.formattedContent = this.render(resolve.default, this.mapTypeToHighlight(this.getExtension(this.src)));
      });
    }
  }

  private render(content, lang?: string) {
    return Prism.highlight(content, Prism.languages[lang || 'html']);
  }

  private getExtension(string) {
    return string.split('.').pop();
  }

  private mapTypeToHighlight(type) {
    return MAP_TYPE_HIGHLIGHT[type];
  }
}

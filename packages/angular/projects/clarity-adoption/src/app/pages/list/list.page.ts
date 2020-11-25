import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
})
export class ListPage {
  orderedAngularExamples = ['4.0.0/lists/list-ordered.ng.html', '4.0.0/lists/list-ordered.ng.ts'];
  orderedCoreExamples = ['4.0.0/lists/list-ordered.core.html', '4.0.0/lists/list-ordered.core.ts'];
  unorderedAngularExamples = ['4.0.0/lists/list-unordered.ng.html', '4.0.0/lists/list-unordered.ng.ts'];
  unorderedCoreExamples = ['4.0.0/lists/list-unordered.core.html', '4.0.0/lists/list-unordered.core.ts'];
  unstyledAngularExamples = ['4.0.0/lists/list-unstyled.ng.html', '4.0.0/lists/list-unstyled.ng.ts'];
  unstyledCoreExamples = ['4.0.0/lists/list-unstyled.core.html', '4.0.0/lists/list-unstyled.core.ts'];
}

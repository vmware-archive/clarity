import { Component } from '@angular/core';
import '@cds/core/tag/register.js';

@Component({
  selector: 'app-label',
  templateUrl: './label.page.html',
})
export class LabelPage {
  basicAngularExamples = ['4.0.0/labels/label.ng.html', '4.0.0/labels/label.ng.ts'];
  basicCoreExamples = ['4.0.0/labels/tag.core.html', '4.0.0/labels/tag.core.ts'];
  statusAngularExamples = ['4.0.0/labels/label-status.ng.html', '4.0.0/labels/label-status.ng.ts'];
  statusCoreExamples = ['4.0.0/labels/tag-status.core.html', '4.0.0/labels/tag-status.core.ts'];
  colorAngularExamples = ['4.0.0/labels/label-color.ng.html', '4.0.0/labels/label-color.ng.ts'];
  colorCoreExamples = ['4.0.0/labels/tag-color.core.html', '4.0.0/labels/tag-color.core.ts'];
  badgesAngularExamples = ['4.0.0/labels/label-badges.ng.html', '4.0.0/labels/label-badges.ng.ts'];
  badgesCoreExamples = ['4.0.0/labels/tag-badges.core.html', '4.0.0/labels/tag-badges.core.ts'];
  clickableAngularExamples = ['4.0.0/labels/label-clickable.ng.html', '4.0.0/labels/label-clickable.ng.ts'];
  clickableCoreExamples = ['4.0.0/labels/tag-clickable.core.html', '4.0.0/labels/tag-clickable.core.ts'];
}

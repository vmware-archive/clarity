import { Component } from '@angular/core';
import '@cds/core/badge/register.js';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
})
export class BadgePage {
  colorAngularExamples = ['4.0.0/badges/badge-color.ng.html', '4.0.0/badges/badge-color.ng.ts'];
  colorCoreExamples = ['4.0.0/badges/badge-color.core.html', '4.0.0/badges/badge-color.core.ts'];

  statusAngularExamples = ['4.0.0/badges/badge-status.ng.html', '4.0.0/badges/badge-status.ng.ts'];

  statusCoreExamples = ['4.0.0/badges/badge-status.core.html', '4.0.0/badges/badge-status.core.ts'];
}

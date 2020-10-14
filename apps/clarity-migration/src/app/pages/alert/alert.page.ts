import { Component } from '@angular/core';
import '@clr/core/alert/register.js';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
})
export class AlertPage {
  angularExamples = ['4.0.0/alerts/alert.ng.html', '4.0.0/alerts/alert.ng.ts'];
  coreExamples = ['4.0.0/alerts/alert.core.html', '4.0.0/alerts/alert.core.ts'];
}

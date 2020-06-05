import { Component } from '@angular/core';
import '@clr/core/alert/register.js';
import '@clr/core/button/register.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  show = false;
}

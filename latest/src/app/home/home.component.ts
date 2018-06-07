import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  host: {
    "[class.content-container]": "true"
  }
})
export class HomeComponent {

  environment = environment;

}

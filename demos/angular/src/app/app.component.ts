import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showDgDemos = true;
  activeRoute = '';

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.router.events.subscribe(value => (this.activeRoute = this.router.url.toString()));
  }

  handleGroupExpand(event: Event) {
    this.showDgDemos = !this.showDgDemos;
    console.log(event);
  }
}

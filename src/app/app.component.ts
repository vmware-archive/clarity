import { Component, ViewEncapsulation } from "@angular/core";
import { Route } from "@angular/router";
import { APP_ROUTES } from "./app.routing";

@Component({
    selector: "my-app",
    moduleId: module.id,
    templateUrl: "./app.html",
    styleUrls: ["./app.css"],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    public routes: Route[] = APP_ROUTES;
}

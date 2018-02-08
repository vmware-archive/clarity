import {Component} from "@angular/core";
import {environment} from "../../environments/environment";

@Component({
    selector: "documentation",
    templateUrl: "documentation.component.html",
    host: {
        "[class.content-container]": "true"
    }
})
export class DocumentationComponent {
    environment = environment;
}

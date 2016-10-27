import {Component} from "@angular/core";

@Component({
    selector: "clr-modal-angular-not-closable-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./modal.demo.css"],
    templateUrl: "./modal-angular-not-closable.demo.html"
})
export class ModalAngularNotClosableDemo {
    // Booleans to open each example modal
    public closable: boolean = false;
}

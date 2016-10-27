import {Component} from "@angular/core";

@Component({
    selector: "clr-modal-angular-show-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./modal.demo.css"],
    templateUrl: "./modal-angular-show.demo.html"
})
export class ModalAngularShowDemo {
    // Booleans to open each example modal
    public basic: boolean = false;
}

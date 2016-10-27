import {Component} from "@angular/core";

@Component({
    selector: "clr-modal-angular-size-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./modal.demo.css"],
    templateUrl: "./modal-angular-size.demo.html"
})
export class ModalAngularSizeDemo {
    // Booleans to open each example modal
    public small: boolean = false;
    public large: boolean = false;
}

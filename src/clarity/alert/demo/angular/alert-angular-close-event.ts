import {Component} from "@angular/core";

@Component({
    selector: "clr-alert-close-event-demo-angular",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../alert.demo.css"],
    templateUrl: "./alert-angular-close-event.demo.html"
})
export class AlertAngularCloseEventDemo {
    closeMessage: string = "";

    onClose(): void {
        this.closeMessage = "The alert has been closed";
    }
}

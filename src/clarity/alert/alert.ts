import {
    Component,
    EventEmitter,
    Input,
    Output
} from "@angular/core";

@Component({
    selector: "clr-alert",
    templateUrl: "./alert.html"
})
export class Alert {
    @Input("clrAlertSizeSmall") isSmall: boolean = false;
    @Input("clrAlertType") type: string = "alert-info";
    @Input("clrAlertClosable") closable: boolean = true;
    @Input("clrAlertAppLevel") isAppLevel: boolean = false;

    @Input("clrAlertClosed") _closed: boolean = false;
    @Output("clrAlertClosedChange") _closedChanged: EventEmitter<boolean> = new EventEmitter<boolean>(false);

    private alertTypes: string[] = [ "alert-info", "alert-warning", "alert-danger", "alert-success"];

    close(): void {
        if (!this.closable) {
            return;
        }
        this._closed = true;
        this._closedChanged.emit(true);
    }

    open(): void {
        this._closed = false;
        this._closedChanged.emit(false);
    }

    get alertType(): string {
        if (this.alertTypes.indexOf(this.type) > -1) {
            return this.type;
        }
        return "alert-info";
    }
}

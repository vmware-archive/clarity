import {Component} from "@angular/core";
import {ProgBarExample} from "./progbar-example";

@Component({
    selector: "clr-progress-bar-colors-demo",
    styleUrls: ["progress-bars.demo.css"],
    templateUrl: "./progress-bar-colors.html"
})
export class ProgressBarColorsDemo {
    colorTypes: ProgBarExample[];

    constructor() {
        this.colorTypes = [
            new ProgBarExample("", "Normal"),
            new ProgBarExample("success", "Success"),
            new ProgBarExample("danger", "Danger/Warning")
        ];
    }
}

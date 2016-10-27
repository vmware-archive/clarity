import {Component} from "@angular/core";
import {ProgBarExample} from "./progbar-example";

@Component({
    selector: "clr-progress-bar-examples-demo",
    styleUrls: ["progress-bars.demo.css"],
    templateUrl: "./progress-bar-examples.html"
})
export class ProgressBarExamplesDemo {
    examples: ProgBarExample[];

    constructor() {
        this.examples = [
            new ProgBarExample(),
            new ProgBarExample("labeled", "Labeled", true),
            new ProgBarExample("progress-fade", "Fade Out")
        ];
    }
}

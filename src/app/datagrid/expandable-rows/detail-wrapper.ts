import {Component} from "@angular/core";

@Component({
    selector: "detail-wrapper",
    template: `
        <clr-dg-row-detail [clrDgReplace]="true">
            <clr-dg-cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</clr-dg-cell>
            <clr-dg-cell>Proin in neque in ante placerat mattis id sed quam.</clr-dg-cell>
            <clr-dg-cell>Proin rhoncus lacus et tempor dignissim.</clr-dg-cell>
            <clr-dg-cell>Vivamus sem quam, pellentesque aliquet suscipit eget, pellentesque sed arcu.</clr-dg-cell>
            <clr-dg-cell>Vivamus in dui lectus. Suspendisse cursus est ac nisl imperdiet viverra.</clr-dg-cell>
        </clr-dg-row-detail>
    `
})
export class DetailWrapper {

}
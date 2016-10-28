import {
    Component,
    Input
} from "@angular/core";

@Component({
    selector: "clr-tab-content",
    templateUrl: "./tab-content.html",
    host: {
        "[id]" : "id",
        "role" : "tabpanel",
        "[attr.aria-hidden]" : "!active",
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[attr.data-hidden]": "!active",
        "[class.active]" : "active"
    }
})
export class TabContent {
    @Input("clrTabContentActive") active: boolean = false;
    @Input("clrTabContentId") id: string;
    ariaLabelledBy: string;
}
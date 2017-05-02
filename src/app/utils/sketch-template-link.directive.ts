import {Directive, Input, HostBinding} from "@angular/core";

const LATEST = require("../../settings/global.json")["latest_sketch_template"];

@Directive({
    selector: "[sketchTemplateLink]",
    host: {
        "[attr.target]": "'_blank'"
    }
})
export class SketchTemplateLinkDirective {
    @Input() version = LATEST;

    @HostBinding("attr.href")
    get href() {
        return `assets/images/sketchTemplates/Clarity-Template-${this.version}.sketch`;
    }
}

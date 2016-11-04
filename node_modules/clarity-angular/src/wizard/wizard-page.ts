import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild
} from "@angular/core";
import {TabContent} from "../tabs/tab-content";

@Component({
    selector: "clr-wizard-page",
    templateUrl: "./wizard-page.html",
    host: {
        "[id]": "id",
        "[class.clr-nav-content]": "true",
        "role": "tabpanel",
        "[attr.aria-hidden]": "!active",
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[attr.data-hidden]": "!active",
        "[class.active]": "active"
    }
})

export class WizardPage extends TabContent {
    @ViewChild("titleContainer") titleContainer: ElementRef;

    // title of the page, assigned by Wizard if this component doesn't have projected title content
    title: string;

    hasProjectedTitleContent: boolean = false;

    // User can bind his event handler for onCommit of the main content
    @Output("clrWizardPageOnCommit") onCommit: EventEmitter<any> =
        new EventEmitter<any>(false);

    // User can bind his/her event handler for onLoad of the main content
    @Output("clrWizardPageOnLoad") onLoad: EventEmitter<any> = new EventEmitter(false);

    // input variable, optional, to set if this tab is skipped
    @Input("clrWizardPageIsSkipped") isSkipped: Boolean = false;

    // input variable, optional, to set if this tab is skipped
    @Input("clrWizardPagePreventDefault") preventDefault: Boolean = false;

    // Next button disabled
    @Input("clrWizardPageNextDisabled") public nextDisabled: boolean;

    // Error Flag Raised
    @Input("clrWizardPageErrorFlag") public errorFlag: boolean;

    // Emitter for Next button state changes
    @Output("clrWizardPageNextDisabledChanged") nextDisabledChanged: EventEmitter<any> =
        new EventEmitter(false);

    constructor() {
        super();
    }

    ngOnInit() {
        let projectedTitleHTML: string = this.titleContainer.nativeElement.innerHTML.trim();
        this.hasProjectedTitleContent = projectedTitleHTML.length > 0;
    }
}

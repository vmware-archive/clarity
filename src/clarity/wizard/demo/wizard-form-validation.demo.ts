import {Component, ViewChild} from "@angular/core";
import {Wizard} from "../wizard";

@Component({
    selector: "clr-wizard-form-validation",
    templateUrl: "./wizard-form-validation.demo.html"
})
export class WizardFormValidation {
    @ViewChild("wizard") wizard: Wizard;

    model = {
        name: "",
        favorite: ""
    };

    code: string = `
import {Component, ViewChild} from "@angular/core";
import {Wizard} from "clarity-angular";

@Component({
    ...
})
export class WizardFormValidation {
    @ViewChild("wizard") wizard: Wizard;
    open: boolean = false;

    model = {
        name: "",
        favorite: ""
    }; 
}
    `;

    html: string = `
<clr-wizard #wizard [(clrWizardOpen)]="open">
    <div class="wizard-title">
        Wizard Title
    </div>

    <clr-wizard-step>Form with validation</clr-wizard-step>
    <clr-wizard-step>Wizard complete</clr-wizard-step>

    <clr-wizard-page [clrWizardPageNextDisabled]="!myForm.form.valid">
        <form #myForm="ngForm">
            <section class="form-block">
                <label>My Form</label>
                <div class="form-group">
                    <label class="required">Name</label>
                    <label for="nameInput" aria-haspopup="true" role="tooltip"
                           [class.invalid]="name.touched && !name.valid"
                           class="tooltip tooltip-validation tooltip-md tooltip-bottom-right">
                        <input type="text" id="nameInput" required [(ngModel)]="model.name" name="name" #name="ngModel">
                        <span class="tooltip-content">
                          This field cannot be empty!
                      </span>
                    </label>
                </div>
                <div class="form-group">
                    <label for="favInput">Favorite food</label>
                    <input type="text" id="favInput" [(ngModel)]="model.favorite" name="favorite">
                </div>
            </section>
        </form>
    </clr-wizard-page>
    <clr-wizard-page>
        Congratulations! You are done with this wizard.
    </clr-wizard-page>
</clr-wizard>
    `;
}

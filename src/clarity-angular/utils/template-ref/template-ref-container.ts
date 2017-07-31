import {Component, TemplateRef, ViewChild} from "@angular/core";

@Component({
    template: `
      <ng-template>
        <ng-content></ng-content>
      </ng-template>
    `,
})
export class TemplateRefContainer {
    @ViewChild(TemplateRef) template: TemplateRef<any>;
}

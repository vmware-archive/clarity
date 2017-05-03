/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<clr-modal [(clrModalOpen)]="opened" [clrModalClosable]="false">
    <h3 class="modal-title">No "x" in the top-right corner</h3>
    <div class="modal-body">
        <p>Clicking on the backdrop doesn't do anything.</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="opened = false">
            I'm the only way to close the modal!
        </button>
    </div>
</clr-modal>
`;

@Component({
    selector: "clr-modal-angular-not-closable-demo",
    templateUrl: "./modal-angular-not-closable.demo.html"
})
export class ModalAngularNotClosableDemo {
    // Booleans to open each example modal
    public closable: boolean = false;
    example = EXAMPLE;
}

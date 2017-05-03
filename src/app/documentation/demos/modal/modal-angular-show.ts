/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<clr-modal [(clrModalOpen)]="basic">
    <h3 class="modal-title">I have a nice title</h3>
    <div class="modal-body">
        <p>But not much to say...</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-outline" (click)="basic = false">Cancel</button>
        <button type="button" class="btn btn-primary" (click)="basic = false">Ok</button>
    </div>
</clr-modal>
`;

@Component({
    selector: "clr-modal-angular-show-demo",
    templateUrl: "./modal-angular-show.demo.html"
})
export class ModalAngularShowDemo {
    // Booleans to open each example modal
    public basic: boolean = false;

    example = EXAMPLE;
}

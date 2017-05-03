/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, OnInit} from "@angular/core";

const EXAMPLE = `
<div class="modal">
    <div class="modal-dialog fadeDown in" role="dialog" aria-hidden="true">
        <div class="modal-content">
            ...
        </div>
    </div>
</div>
<div class="modal-backdrop fade in" aria-hidden="true"></div>
`;

@Component({
    selector: "clr-modal-animation-demo",
    templateUrl: "./modal-animation.demo.html"
})
export class ModalAnimationDemo implements OnInit {
    animatedExampleIn: boolean = false;

    ngOnInit(): void {
        // If you want interactivity, go to the Angular component demo. :-P
        setInterval(() => this.animatedExampleIn = !this.animatedExampleIn, 2000);
    }

    example = EXAMPLE;
}

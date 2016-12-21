/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, OnInit} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "clr-modal-animation-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./modal.demo.css"],
    templateUrl: "./modal-animation.demo.html"
})
export class ModalAnimationDemo implements OnInit {
    animatedExampleIn: boolean = false;

    ngOnInit(): void {
        // If you want interactivity, go to the Angular component demo. :-P
        setInterval(() => this.animatedExampleIn = !this.animatedExampleIn, 2000);
    }
}

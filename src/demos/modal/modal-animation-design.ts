/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, OnInit} from "@angular/core";

@Component({
    selector: "clr-modal-animation-design-demo",
    templateUrl: "./modal-animation-design.demo.html"
})
export class ModalAnimationDesignDemo implements OnInit {
    animatedExampleIn: boolean = false;

    ngOnInit(): void {
        // If you want interactivity, go to the Angular component demo. :-P
        setInterval(() => this.animatedExampleIn = !this.animatedExampleIn, 2000);
    }
}

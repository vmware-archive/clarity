/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<div class="modal">
    <div class="modal-dialog modal-sm" role="dialog" aria-hidden="true">
        <div class="modal-content">
            ...
        </div>
    </div>
</div>
<div class="modal-backdrop" aria-hidden="true"></div>
`;

const EXAMPLE_1 = `
<div class="modal">
    <div class="modal-dialog modal-lg" role="dialog" aria-hidden="true">
        <div class="modal-content">
            ...
        </div>
    </div>
</div>
<div class="modal-backdrop" aria-hidden="true"></div>
`;

const EXAMPLE_2 = `
<div class="modal">
    <div class="modal-dialog modal-xl" role="dialog" aria-hidden="true">
        <div class="modal-content">
            ...
        </div>
    </div>
</div>
<div class="modal-backdrop" aria-hidden="true"></div>
`;

@Component({
    selector: "clr-modal-sizes-demo",
    templateUrl: "./modal-sizes.demo.html"
})
export class ModalSizesDemo {
    example = EXAMPLE;
    example1 = EXAMPLE_1;
    example2 = EXAMPLE_2;
}

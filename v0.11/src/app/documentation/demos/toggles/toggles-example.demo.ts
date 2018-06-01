/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<form>
    <section class="form-block">
        <div class="form-group">
            <label>Toggles</label>
            <div class="toggle-switch">
                <input type="checkbox" id="toggle_1">
                <label for="toggle_1">Toggles turn on and off</label>
            </div>
            <div class="toggle-switch">
                <input type="checkbox" id="toggle_2" disabled>
                <label for="toggle_2">Toggle off and disabled</label>
            </div>
            <div class="toggle-switch">
                <input type="checkbox" id="toggle_3" checked disabled>
                <label for="toggle_3">Toggle on and disabled</label>
            </div>
        </div>
    </section>
    <section class="form-block">
        <div class="form-group">
            <label>Toggles without any label</label>
            <div class="toggle-switch">
                <input type="checkbox" id="toggle_4">
                <label for="toggle_4"></label>
            </div>
            <label for="formGroupExampleInput">Toggles without any label</label>
            <div class="toggle-switch">
                <input type="checkbox" id="toggle_5" checked>
                <label for="toggle_5"></label>
            </div>
            <label for="formGroupExampleInput">Toggles without any label</label>
            <div class="toggle-switch">
                <input type="checkbox" id="toggle_6" checked disabled>
                <label for="toggle_6"></label>
            </div>
            <label for="formGroupExampleInput">Toggles without any label</label>
            <div class="toggle-switch">
                <input type="checkbox" id="toggle_7" disabled>
                <label for="toggle_7"></label>
            </div>
        </div>
    </section>
</form>
`;

@Component({
    selector: "clr-toggles-example-demo",
    templateUrl: "./toggles-example.demo.html"
})
export class TogglesExampleDemo {
    example = EXAMPLE;
}

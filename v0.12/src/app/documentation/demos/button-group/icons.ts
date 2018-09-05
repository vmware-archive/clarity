/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<div class="btn-group btn-primary btn-icon">
    <button class="btn">
        <clr-icon shape="home"></clr-icon>
        <span class="clr-icon-title">Home</span>
    </button>
    <button class="btn">
        <clr-icon shape="cog"></clr-icon>
        <span class="clr-icon-title">Settings</span>
    </button>
    <div class="btn-group-overflow open">
        <button class="btn dropdown-toggle">
            <clr-icon shape="ellipsis-horizontal"></clr-icon>
        </button>
        <div class="dropdown-menu">
            <button class="btn">
                <clr-icon shape="user"></clr-icon>
                <span class="clr-icon-title">User</span>
            </button>
            <button class="btn">
                <clr-icon shape="cloud"></clr-icon>
                <span class="clr-icon-title">Cloud</span>
            </button>
        </div>
    </div>
</div>
`;

const HTML_EXAMPLE_2 = `
<div class="btn-group btn-primary">
    <button class="btn">
        <clr-icon shape="home"></clr-icon>
        Home
    </button>
    <button class="btn">
        <clr-icon shape="cog"></clr-icon>
        Settings
    </button>
    <div class="btn-group-overflow open">
        <button class="btn dropdown-toggle">
            <clr-icon shape="ellipsis-horizontal"></clr-icon>
        </button>
        <div class="dropdown-menu">
            <button class="btn">
                <clr-icon shape="user"></clr-icon>
                User
            </button>
            <button class="btn">
                <clr-icon shape="cloud"></clr-icon>
                Cloud
            </button>
        </div>
    </div>
</div>
`;

@Component({
    selector: "clr-button-group-icons-demo",
    templateUrl: "./icons.html"
})
export class ButtonGroupIconsDemo {
    htmlExample = HTML_EXAMPLE;
    htmlExample2 = HTML_EXAMPLE_2;
}

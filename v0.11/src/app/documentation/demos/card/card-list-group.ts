/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<div class="card">
    <div class="card-img">
        <img src="...">
    </div>
    <div class="card-block">
        <h4 class="card-title">Title</h4>
        <p class="card-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, aut.
        Nihil nemo, necessitatibus earum.
        </p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Lorem ipsum dolor.</li>
        <li class="list-group-item">Lorem ipsum dolor sit.</li>
        <li class="list-group-item">Lorem ipsum.</li>
    </ul>
    <div class="card-footer">
        <a href="..." class="btn btn-sm btn-link">Action 1</a>
        <a href="..." class="btn btn-sm btn-link">Action 2</a>
    </div>
</div>
`;

@Component({
    selector: "clr-list-group-demo",
    styleUrls: ["./card.demo.scss"],
    templateUrl: "./card-list-group.html"
})
export class CardListGroupDemo {
    htmlExample = HTML_EXAMPLE;
}

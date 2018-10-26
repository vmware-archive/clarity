/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { ClarityDocComponent } from "../clarity-doc";

@Component({
    selector: "clr-color-demo",
    templateUrl: "./color.demo.html",
    styleUrls: ["./color.demo.scss"],
    host: {
        "[class.content-area]": "true",
        "[class.dox-content-panel]": "true"
    }

})
export class ColorDemo extends ClarityDocComponent {
    constructor() {
        super("color");
    }

    monochromeNeutralSchemes = [
        {
            schemeColors: [
                {hex: "#25333D"},
                {hex: "#A6D8E7"},
                {hex: "#798893"},
                {hex: "#49AFD9"},
                {hex: "#C1CDD4"},
                {hex: "#0065AB"}
            ]
        },
        {
            schemeColors: [
                {hex: "#798893"},
                {hex: "#495A67"},
                {hex: "#FFCCB5"},
                {hex: "#C1CDD4"},
                {hex: "#FF8142"},
                {hex: "#CD3517"}
            ]
        },
        {
            schemeColors: [
                {hex: "#61717D"},
                {hex: "#C7E59C"},
                {hex: "#318700"},
                {hex: "#1D5100"},
                {hex: "#C1CDD4"},
                {hex: "#85C81A"}
            ]
        },
        {
            schemeColors: [
                {hex: "#C1CDD4"},
                {hex: "#4D007A"},
                {hex: "#AC75C6"},
                {hex: "#61717D"},
                {hex: "#D0ACE4"},
                {hex: "#8939AD"}
            ]
        },
        {
            schemeColors: [
                {hex: "#00D4B8"},
                {hex: "#CCCCCC"},
                {hex: "#007E7A"},
                {hex: "#9A9A9A"},
                {hex: "#747474"},
                {hex: "#6FEAD9"}
            ]
        },
        {
            schemeColors: [
                {hex: "#CCCCCC"},
                {hex: "#4E56B8"},
                {hex: "#B7BDE7"},
                {hex: "#444444"},
                {hex: "#838ACF"},
                {hex: "#0F1E82"}
            ]
        }
    ];

    multicolorSchemes = [

        {
            schemeColors: [
                {hex: "#314351"},
                {hex: "#9B56BB"},
                {hex: "#A3EDF6"},
                {hex: "#00B7D6"},
                {hex: "#61717D"},
                {hex: "#006690"}
            ]
        },
        {
            schemeColors: [
                {hex: "#FF5500"},
                {hex: "#0094D3"},
                {hex: "#0065AB"},
                {hex: "#FFB38F"},
                {hex: "#003D79"},
                {hex: "#A6D8E7"}
            ]
        },
        {
            schemeColors: [
                {hex: "#919FA8"},
                {hex: "#85C81A"},
                {hex: "#0095D3"},
                {hex: "#C1CDD4"},
                {hex: "#48960C"},
                {hex: "#004D8A"}
            ]
        },
        {
            schemeColors: [
                {hex: "#FF681C"},
                {hex: "#314351"},
                {hex: "#00968B"},
                {hex: "#FFB38F"},
                {hex: "#C1CDD4"},
                {hex: "#00BFA9"}
            ]
        },
        {
            schemeColors: [
                {hex: "#00BFA9"},
                {hex: "#80746D"},
                {hex: "#6FEAD9"},
                {hex: "#BBB3A9"},
                {hex: "#0F1E82"},
                {hex: "#6870C4"}
            ]
        },
        {
            schemeColors: [
                {hex: "#FF5500"},
                {hex: "#80746D"},
                {hex: "#FF9A69"},
                {hex: "#CFC8BD"},
                {hex: "#0F1E82"},
                {hex: "#6870C4"}
            ]
        }
    ];


}


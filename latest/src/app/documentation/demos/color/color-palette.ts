/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";

@Component({
    selector: "clr-color-palette",
    styleUrls: ["./color-palette.demo.scss"],
    templateUrl: "./color-palette.demo.html"
})
export class ColorPalette {

    copyContent: string;

    copyNotificationOnClick(color: any) {
        color.copied = true;
        setTimeout(() => {
            delete color.copied;
        }, 1000)
    }


    palettes = [
        {
            type: "Red",
            colors: [
                {value: "#F52F22", text: "dark", primary: true},
                {value: "#A32100", text: "light"},
                {value: "#C92100", text: "light"},
                {value: "#e12200", text: "light", bulleted: true},
                {value: "#F52F22", text: "dark"},
                {value: "#F54F47", text: "dark"},
                {value: "#F76F6C", text: "dark"},
                {value: "#F89997", text: "dark"},
                {value: "#F8B7B6", text: "dark"},
                {value: "#F5DBD9", text: "dark"},
                {value: "#FFF0EE", text: "dark"}
            ]
        },
        {
            type: "Pink",
            colors: [
                {value: "#F1428A", text: "dark", primary: true},
                {value: "#9B0D54", text: "light"},
                {value: "#B0105B", text: "light"},
                {value: "#C41261", text: "light"},
                {value: "#D91468", text: "light"},
                {value: "#ED186F", text: "dark"},
                {value: "#F1428A", text: "dark"},
                {value: "#F46CA5", text: "dark"},
                {value: "#F897BF", text: "dark"},
                {value: "#FBC1DA", text: "dark"},
                {value: "#FFEBF5", text: "dark"}
            ]
        },
        {
            type: "Purple",
            colors: [
                {value: "#781DA0", text: "light", primary: true},
                {value: "#4D007A", text: "light"},
                {value: "#660092", text: "light"},
                {value: "#781DA0", text: "light"},
                {value: "#8939AD", text: "light"},
                {value: "#9B56BB", text: "light"},
                {value: "#AD73C8", text: "dark"},
                {value: "#BE90D6", text: "dark"},
                {value: "#D0ACE4", text: "dark"},
                {value: "#E1C9F1", text: "dark"},
                {value: "#F3E6FF", text: "dark"}
            ]
        },
        {
            type: "Ultramarine",
            colors: [
                {value: "#343DAC", text: "light", primary: true},
                {value: "#0F1E82", text: "light"},
                {value: "#1A23A0", text: "light"},
                {value: "#343DAC", text: "light"},
                {value: "#4E56B8", text: "light"},
                {value: "#6870C4", text: "dark"},
                {value: "#838ACF", text: "dark"},
                {value: "#9DA3DB", text: "dark"},
                {value: "#B7BDE7", text: "dark"},
                {value: "#D1D6F3", text: "dark"},
                {value: "#EBF0FF", text: "dark"}
            ]
        },
        {
            type: "Blue",
            colors: [
                {value: "#0065AB", text: "light", primary: true},
                {value: "#003D79", text: "light"},
                {value: "#004D8A", text: "light"},
                {value: "#0065AB", text: "light"},
                {value: "#0079B8", text: "light", bulleted: true},
                {value: "#0095D3", text: "dark"},
                {value: "#49AFD9", text: "dark"},
                {value: "#89CBDF", text: "dark"},
                {value: "#A6D8E7", text: "dark"},
                {value: "#C5E5EF", text: "dark"},
                {value: "#E1F1F6", text: "dark"}
            ]
        },
        {
            type: "Cyan",
            colors: [
                {value: "#00B7D6", text: "dark", primary: true},
                {value: "#004A70", text: "light"},
                {value: "#005680", text: "light"},
                {value: "#006690", text: "light"},
                {value: "#0081A7", text: "dark"},
                {value: "#009CBF", text: "dark"},
                {value: "#00B7D6", text: "dark"},
                {value: "#36C9E1", text: "dark"},
                {value: "#6DDBEB", text: "dark"},
                {value: "#A3EDF6", text: "dark"},
                {value: "#CCFBFF", text: "dark"}
            ]
        },

        {
            type: "Teal",
            colors: [
                {value: "#00968B", text: "dark", primary: true},
                {value: "#006668", text: "light"},
                {value: "#007E7A", text: "light"},
                {value: "#00968B", text: "dark"},
                {value: "#00AB9A", text: "dark"},
                {value: "#00BFA9", text: "dark"},
                {value: "#00D4B8", text: "dark"},
                {value: "#38DFC8", text: "dark"},
                {value: "#6FEAD9", text: "dark"},
                {value: "#A7F4E9", text: "dark"},
                {value: "#DEFFF9", text: "dark"}
            ]
        },
        {
            type: "Green",
            colors: [
                {value: "#48960C", text: "dark", primary: true},
                {value: "#1D5100", text: "light"},
                {value: "#266900", text: "light"},
                {value: "#2F8400", text: "light", bulleted: true},
                {value: "#48960C", text: "dark"},
                {value: "#62A420", text: "dark"},
                {value: "#60B515", text: "dark"},
                {value: "#85C81A", text: "dark"},
                {value: "#AADB1E", text: "dark"},
                {value: "#C7E59C", text: "dark"},
                {value: "#DFF0D0", text: "dark"}
            ]
        },
        {
            type: "Yellow",
            colors: [
                {value: "#FFDC0B", text: "dark", primary: true},
                {value: "#C47D00", text: "dark"},
                {value: "#D28F00", text: "dark"},
                {value: "#DFA100", text: "dark"},
                {value: "#EDB200", text: "dark"},
                {value: "#FAC400", text: "dark"},
                {value: "#FDD006", text: "dark"},
                {value: "#FFDC0B", text: "dark"},
                {value: "#FFE860", text: "dark"},
                {value: "#FEF3B5", text: "dark"},
                {value: "#FFFCE8", text: "dark"}
            ]
        },
        {
            type: "Orange",
            colors: [
                {value: "#F57600", text: "dark", primary: true},
                {value: "#AA4500", text: "light"},
                {value: "#C25400", text: "mid"},
                {value: "#D36000", text: "dark"},
                {value: "#E46C00", text: "dark"},
                {value: "#F57600", text: "dark"},
                {value: "#FF8400", text: "dark"},
                {value: "#FF9C32", text: "dark"},
                {value: "#FFB565", text: "dark"},
                {value: "#FFCD97", text: "dark"},
                {value: "#FFE5C9", text: "dark"}
            ]
        },
        {
            type: "Red-orange",
            colors: [
                {value: "#EE4A08", text: "dark", primary: true},
                {value: "#CD3517", text: "light"},
                {value: "#DE400F", text: "dark"},
                {value: "#EE4A08", text: "dark"},
                {value: "#FF5500", text: "dark"},
                {value: "#FF681C", text: "dark"},
                {value: "#FF8142", text: "dark"},
                {value: "#FF9A69", text: "dark"},
                {value: "#FFB38F", text: "dark"},
                {value: "#FFCCB5", text: "dark"},
                {value: "#FFE5DC", text: "dark"}
            ]
        },
        {
            type: "Warm-grey",
            colors: [
                {value: "#80746D", text: "light", primary: true},
                {value: "#5B4D47", text: "light"},
                {value: "#6C5F59", text: "light"},
                {value: "#80746D", text: "mid"},
                {value: "#948981", text: "dark"},
                {value: "#A89E95", text: "dark"},
                {value: "#BBB3A9", text: "dark"},
                {value: "#CFC8BD", text: "dark"},
                {value: "#E3DDD1", text: "dark"},
                {value: "#F4F1E6", text: "dark"},
                {value: "#FAF9F5", text: "dark"}
            ]
        },
        {
            type: "Neutral-grey",
            colors: [
                {value: "#737373", text: "light", primary: true},
                {value: "#313131", text: "light"},
                {value: "#444444", text: "light"},
                {value: "#565656", text: "light", bulleted: true},
                {value: "#737373", text: "light"},
                {value: "#9A9A9A", text: "dark"},
                {value: "#CCCCCC", text: "dark"},
                {value: "#DDDDDD", text: "dark"},
                {value: "#EEEEEE", text: "dark"},
                {value: "#F2F2F2", text: "dark"},
                {value: "#FAFAFA", text: "dark", bulleted: true}
            ]
        },
        {
            type: "Cool-grey",
            colors: [
                {value: "#61717D", text: "light", primary: true},
                {value: "#25333D", text: "light"},
                {value: "#314351", text: "light"},
                {value: "#495A67", text: "light"},
                {value: "#61717D", text: "light"},
                {value: "#798893", text: "dark"},
                {value: "#919FA8", text: "dark"},
                {value: "#A9B6BE", text: "dark"},
                {value: "#C1CDD4", text: "dark"},
                {value: "#D9E4EA", text: "dark", bulleted: true},
                {value: "#F3F6FA", text: "dark"}
            ]
        },
        {
            type: "Black-white",
            colors: [
                {value: "#000000", text: "light"},
                {value: "#FFFFFF", text: "dark"}
            ]
        }
    ];
}

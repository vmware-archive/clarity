/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";

@Component({
    selector: "clr-color-palette-functional",
    styleUrls: ["./color-palette-functional.demo.scss"],
    templateUrl: "./color-palette-functional.demo.html"
})
export class ColorFunctional {

    copyContent: string;

    copyNotificationOnClick(color: any) {
        color.copied = true;
        setTimeout(() => {
            delete color.copied;
        }, 1000)
    }

    lightThemePalettes = [
        {
            legend: "Backgrounds and borders",
            colors: [
                {value: "#FFFFFF", text: "dark"},
                {value: "#FAFAFA", text: "dark"},
                {value: "#EEEEEE", text: "dark"},
                {value: "#DDDDDD", text: "dark"},
                {value: "#CCCCCC", text: "dark"},
                {value: "#9A9A9A", text: "dark"}
            ]
        },
        {
            legend: "Row hover, selection",
            colors: [
                {value: "#EEEEEE", text: "dark"},
                {value: "#D9E4EA", text: "dark"}
            ]
        },
        {
            legend: "Typography",
            colors: [
                {value: "#737373", text: "light"},
                {value: "#565656", text: "light"},
                {value: "#313131", text: "light"},
                {value: "#000000", text: "light"}
            ]
        },
        {
            legend: "Buttons and app-level alerts",
            colors: [
                {value: "#0079B8", text: "light"},
                {value: "#e12200", text: "light"},
                {value: "#C92100", text: "light"},
                {value: "#C25400", text: "light"},
                {value: "#2F8400", text: "light"},
                {value: "#CCCCCC", text: "dark"}
            ]
        },
        {
            legend: "Standard alerts",
            colors: [
                {value: "#E1F1F6", text: "dark"},
                {value: "#DFF0D0", text: "dark"},
                {value: "#F5DBD9", text: "dark"},
                {value: "#FEF3B5", text: "dark"}
            ]
        },
        {
            legend: "Labels & badges",
            colors: [
                {value: "#E1F1F6", text: "dark"},
                {value: "#DFF0D0", text: "dark"},
                {value: "#F5DBD9", text: "dark"},
                {value: "#FEF3B5", text: "dark"},
                {value: "#737373", text: "light"},
                {value: "#9B56BB", text: "light"},
                {value: "#004A70", text: "light"},
                {value: "#FF8400", text: "dark"},
                {value: "#89CBDF", text: "dark"},
                {value: "#2F8400", text: "light"},
                {value: "#FFDC0B", text: "dark"},
                {value: "#C92100", text: "light"}
            ]
        },
        {
            legend: "Headers",
            colors: [
                {value: "#313131", text: "light"},
                {value: "#485969", text: "light"},
                {value: "#281336", text: "light"},
                {value: "#006A91", text: "light"},
                {value: "#004A70", text: "light"},
                {value: "#002438", text: "light"}
            ]
        }
    ];

    darkThemePalettes = [
        {
            legend: "Backgrounds and borders",
            colors: [
                {value: "#0F171C", text: "light"},
                {value: "#17242B", text: "light"},
                {value: "#1B2A32", text: "light"},
                {value: "#22343C", text: "light"},
                {value: "#485764", text: "light"},
                {value: "#566572", text: "light"},
                {value: "#6D7884", text: "mid"}
            ]
        },
        {
            legend: "Row hover, selection",
            colors: [
                {value: "#29414E", text: "light"},
                {value: "#324F61", text: "light"}
            ]
        },
        {
            legend: "Typography",
            colors: [
                {value: "#8F9BA3", text: "dark"},
                {value: "#ADBBC4", text: "dark"},
                {value: "#E9ECEF", text: "dark"},
                {value: "#FFFFFF", text: "dark"},
                {value: "#000000", text: "light"}
            ]
        },
        {
            legend: "Buttons and app-level alerts",
            colors: [
                {value: "#49AFD9", text: "dark"},
                {value: "#F54F47", text: "dark"},
                {value: "#FDD006", text: "dark"},
                {value: "#60B515", text: "dark"},
                {value: "#6D7884", text: "dark"}
            ]
        },
        {
            legend: "Standard alerts",
            colors: [
                {value: "#0F6082", text: "light"},
                {value: "#882D31", text: "light"},
                {value: "#205522", text: "light"},
                {value: "#7F6509", text: "light"}
            ]
        },
        {
            legend: "Labels & badges",
            colors: [
                {value: "#0F6082", text: "light"},
                {value: "#882D31", text: "light"},
                {value: "#205522", text: "light"},
                {value: "#7F6509", text: "light"},
                {value: "#737373", text: "light"},
                {value: "#AD73C8", text: "dark"},
                {value: "#0079B8", text: "light"},
                {value: "#FF9C32", text: "dark"},
                {value: "#89CBDF", text: "dark"}
            ]
        },
        {
            legend: "Headers",
            colors: [
                {value: "#404E60", text: "light"},
                {value: "#165266", text: "light"},
                {value: "#1A4C72", text: "light"},
                {value: "#5C3552", text: "light"},
                {value: "#3E436A", text: "light"},
                {value: "#000000", text: "light"}
            ]
        }
    ];
}

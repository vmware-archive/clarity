import {transition, style, animate, AnimationMetadata} from "@angular/core";

export function fadeSlide(direction: string): AnimationMetadata[] {
    "use strict";
    let transform: string = null;
    if (direction === "up") {
        transform = "translate(0, 25%)";
    } else if (direction === "down") {
        transform = "translate(0, -25%)";
    } else if (direction === "left") {
        transform = "translate(25%, 0)";
    } else if (direction === "right") {
        transform = "translate(-25%, 0)";
    } else {
        throw new Error("Unknown direction " + direction + " for slide animation.");
    }
    return [
        transition("void => *", [
            style({
                opacity: 0,
                transform: transform
            }),
            animate("0.2s ease-in-out")]
        ),
        transition("* => void", [
            animate("0.2s ease-in-out", style({
                opacity: 0,
                transform: transform
            }))]
        )
    ];
};
import {transition, style, animate, AnimationMetadata} from "@angular/core";

export function fade(opacity: number = 1): AnimationMetadata[] {
    "use strict";
    return [
        transition("void => *", [
                style({
                    opacity: 0
                }),
                animate("0.2s ease-in-out", style({
                    opacity: opacity
                }))
            ]
        ),
        transition("* => void", [
                animate("0.2s ease-in-out", style({
                    opacity: 0
                }))
            ]
        )
    ];

}
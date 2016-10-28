import {state, transition, style, animate, AnimationMetadata} from "@angular/core";

export function collapse(): AnimationMetadata[] {
    "use strict";
    return [
        state("true", style({
            "height": 0,
            "overflow-y": "hidden"
        })),
        transition("true => false", [
            animate("0.2s ease-in-out", style({
                "height": "*",
                "overflow-y": "hidden"
            }))
        ]),
        transition("false => true", [
            style({
                "height": "*",
                "overflow-y": "hidden"
            }),
            animate("0.2s ease-in-out")
        ])
    ];
};

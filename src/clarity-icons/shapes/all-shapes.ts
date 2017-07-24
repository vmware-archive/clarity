/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CoreShapes } from "./core-shapes";
import { CommerceShapes } from "./commerce-shapes";
import { EssentialShapes } from "./essential-shapes";
import { MediaShapes } from "./media-shapes";
import { SocialShapes } from "./social-shapes";
import { TechnologyShapes } from "./technology-shapes";
import { TravelShapes } from "./travel-shapes";

const allShapesSets = [
    CoreShapes,
    CommerceShapes,
    EssentialShapes,
    MediaShapes,
    SocialShapes,
    TechnologyShapes,
    TravelShapes
];

let allShapes: any = {};

for (let set of allShapesSets) {
    for (let shape in set) {
        if (set.hasOwnProperty(shape)) {
            allShapes[shape] = set[shape];
        }
    }
}

if (typeof window !== "undefined" && window.hasOwnProperty("ClarityIcons")) {
    window["ClarityIcons"].add(allShapes);
}

export { allShapes as AllShapes };

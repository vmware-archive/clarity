/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CoreShapes } from "./core-shapes";
import { EssentialShapes } from "./essential-shapes";
import { SocialShapes } from "./social-shapes";
import { TechnologyShapes } from "./technology-shapes";

const allShapesSets = [
    CoreShapes,
    EssentialShapes,
    SocialShapes,
    TechnologyShapes
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

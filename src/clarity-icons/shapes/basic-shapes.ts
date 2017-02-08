/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/* TODO: BasicShapes is deprecated and will be removed in 0.9.0 */
import { essentialShapes } from "./essential-shapes";

if (typeof window !== "undefined" && window.hasOwnProperty("ClarityIcons")) {

    window[ "ClarityIcons" ].add(essentialShapes);
}

export { essentialShapes as BasicShapes };
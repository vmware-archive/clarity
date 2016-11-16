/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    AnimationAnimateMetadata,
    AnimationMetadata,
    AnimationStateDeclarationMetadata,
    AnimationStateTransitionMetadata,
    AnimationStyleMetadata,
    style
} from "@angular/core";
import {collapse} from "./index";

describe("Collapse", () => {
    let myCollapse: AnimationMetadata[] = collapse();
    let state: AnimationStateDeclarationMetadata = myCollapse[0] as AnimationStateDeclarationMetadata;
    let transition1: AnimationStateTransitionMetadata = myCollapse[1] as AnimationStateTransitionMetadata;
    let transition2: AnimationStateTransitionMetadata = myCollapse[2] as AnimationStateTransitionMetadata;

    it("should return an array of AnimationMetadata", () => {
        expect(myCollapse.length).toEqual(3);
    });

    it("should contain a default state with correct style", () => {
        expect(state.styles).toEqual(style({"height": 0, "overflow-y": "hidden"}));
    });

    it("should contain a transition for true => false", () => {
        expect(transition1.stateChangeExpr).toEqual("true => false");
    });

    it("should contain a transition for false => true", () => {
        expect(transition2.stateChangeExpr).toEqual("false => true");
    });

    it("should contain a transition with height of * and timing of 0.2s ease-in-out for true => false", () => {
        let step1: AnimationAnimateMetadata = (transition1.steps as any)._steps[0];

        expect(step1.styles).toEqual(style({"height": "*", "overflow-y": "hidden"}));
    });

    it("should contain a transition with height of * and timing of 0.2s ease-in-out for false => true", () => {
        let step1: AnimationStyleMetadata = (transition2.steps as any)._steps[0];
        let step2: AnimationAnimateMetadata = (transition2.steps as any)._steps[1];

        expect(step1).toEqual(style({"height": "*", "overflow-y": "hidden"}));
        expect(step2.timings).toEqual("0.2s ease-in-out");
    });
});
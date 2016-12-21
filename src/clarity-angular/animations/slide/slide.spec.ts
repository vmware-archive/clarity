/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    AnimationAnimateMetadata,
    AnimationMetadata,
    AnimationStateTransitionMetadata,
    AnimationStyleMetadata,
    style
} from "@angular/core";
import {slide} from "./index";

describe("Slide", () => {

    describe("invalid direction", () => {
        it("should throw an error", () => {
            expect(() => { slide("invalid"); }).toThrow();
        });
    });

    describe("up", () => {
        let mySlide: AnimationMetadata[] = slide("up");
        let enterTransition: AnimationStateTransitionMetadata = mySlide[0] as AnimationStateTransitionMetadata;
        let exitTransition: AnimationStateTransitionMetadata = mySlide[1] as AnimationStateTransitionMetadata;

        it("should return an array of AnimationMetadata", () => {
            expect(mySlide.length).toEqual(2);
        });

        it("should contain an AnimationStateTransitionMetadata for void => * ", () => {
            expect(enterTransition.stateChangeExpr).toEqual("void => *");
        });

        it("should contain a transition with correct style and timing of 0.2s ease-in-out for void => *", () => {
            let step1: AnimationStyleMetadata = (enterTransition.steps as any)._steps[0];
            let step2: AnimationAnimateMetadata = (enterTransition.steps as any)._steps[1];

            expect(step1).toEqual(style({transform: "translate(0, 25%)"}));
            expect(step2.timings).toEqual("0.2s ease-in-out");
        });

        it("should contain a transition for * => void", () => {
            expect(exitTransition.stateChangeExpr).toEqual("* => void");
        });

        it("should contain a transition with opacity of 0 and timing of 0.2s ease-in-out for * => void", () => {
            let step1: AnimationAnimateMetadata = (exitTransition.steps as any)._steps[0];

            expect(step1.styles).toEqual(style({transform: "translate(0, 25%)"}));
        });
    });

    describe("down", () => {
        let mySlide: AnimationMetadata[] = slide("down");
        let enterTransition: AnimationStateTransitionMetadata = mySlide[0] as AnimationStateTransitionMetadata;
        let exitTransition: AnimationStateTransitionMetadata = mySlide[1] as AnimationStateTransitionMetadata;

        it("should return an array of AnimationMetadata", () => {
            expect(mySlide.length).toEqual(2);
        });

        it("should contain an AnimationStateTransitionMetadata for void => * ", () => {
            expect(enterTransition.stateChangeExpr).toEqual("void => *");
        });

        it("should contain a transition with correct style and timing of 0.2s ease-in-out for void => *", () => {
            let step1: AnimationStyleMetadata = (enterTransition.steps as any)._steps[0];
            let step2: AnimationAnimateMetadata = (enterTransition.steps as any)._steps[1];

            expect(step1).toEqual(style({transform: "translate(0, -25%)"}));
            expect(step2.timings).toEqual("0.2s ease-in-out");
        });

        it("should contain a transition for * => void", () => {
            expect(exitTransition.stateChangeExpr).toEqual("* => void");
        });

        it("should contain a transition with opacity of 0 and timing of 0.2s ease-in-out for * => void", () => {
            let step1: AnimationAnimateMetadata = (exitTransition.steps as any)._steps[0];

            expect(step1.styles).toEqual(style({transform: "translate(0, -25%)"}));
        });
    });

    describe("left", () => {
        let mySlide: AnimationMetadata[] = slide("left");
        let enterTransition: AnimationStateTransitionMetadata = mySlide[0] as AnimationStateTransitionMetadata;
        let exitTransition: AnimationStateTransitionMetadata = mySlide[1] as AnimationStateTransitionMetadata;

        it("should return an array of AnimationMetadata", () => {
            expect(mySlide.length).toEqual(2);
        });

        it("should contain an AnimationStateTransitionMetadata for void => * ", () => {
            expect(enterTransition.stateChangeExpr).toEqual("void => *");
        });

        it("should contain a transition with correct style and timing of 0.2s ease-in-out for void => *", () => {
            let step1: AnimationStyleMetadata = (enterTransition.steps as any)._steps[0];
            let step2: AnimationAnimateMetadata = (enterTransition.steps as any)._steps[1];

            expect(step1).toEqual(style({transform: "translate(25%, 0)"}));
            expect(step2.timings).toEqual("0.2s ease-in-out");
        });

        it("should contain a transition for * => void", () => {
            expect(exitTransition.stateChangeExpr).toEqual("* => void");
        });

        it("should contain a transition with opacity of 0 and timing of 0.2s ease-in-out for * => void", () => {
            let step1: AnimationAnimateMetadata = (exitTransition.steps as any)._steps[0];

            expect(step1.styles).toEqual(style({transform: "translate(25%, 0)"}));
        });
    });

    describe("right", () => {
        let mySlide: AnimationMetadata[] = slide("right");
        let enterTransition: AnimationStateTransitionMetadata = mySlide[0] as AnimationStateTransitionMetadata;
        let exitTransition: AnimationStateTransitionMetadata = mySlide[1] as AnimationStateTransitionMetadata;

        it("should return an array of AnimationMetadata", () => {
            expect(mySlide.length).toEqual(2);
        });

        it("should contain an AnimationStateTransitionMetadata for void => * ", () => {
            expect(enterTransition.stateChangeExpr).toEqual("void => *");
        });

        it("should contain a transition with correct style and timing of 0.2s ease-in-out for void => *", () => {
            let step1: AnimationStyleMetadata = (enterTransition.steps as any)._steps[0];
            let step2: AnimationAnimateMetadata = (enterTransition.steps as any)._steps[1];

            expect(step1).toEqual(style({transform: "translate(-25%, 0)"}));
            expect(step2.timings).toEqual("0.2s ease-in-out");
        });

        it("should contain a transition for * => void", () => {
            expect(exitTransition.stateChangeExpr).toEqual("* => void");
        });

        it("should contain a transition with opacity of 0 and timing of 0.2s ease-in-out for * => void", () => {
            let step1: AnimationAnimateMetadata = (exitTransition.steps as any)._steps[0];

            expect(step1.styles).toEqual(style({transform: "translate(-25%, 0)"}));
        });
    });
});
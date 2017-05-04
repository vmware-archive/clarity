/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
    AnimationAnimateMetadata,
    AnimationMetadata,
    AnimationTransitionMetadata,
    AnimationStyleMetadata,
    style
} from "@angular/animations";
import {slide} from "./index";

describe("Slide", () => {

    describe("invalid direction", () => {
        it("should throw an error", () => {
            expect(() => { slide("invalid"); }).toThrow();
        });
    });

    describe("up", () => {
        let mySlide: AnimationMetadata[] = slide("up");
        let enterTransition: AnimationTransitionMetadata = mySlide[0] as AnimationTransitionMetadata;
        let exitTransition: AnimationTransitionMetadata = mySlide[1] as AnimationTransitionMetadata;

        it("should return an array of AnimationMetadata", () => {
            expect(mySlide.length).toEqual(2);
        });

        it("should contain an AnimationTransitionMetadata for void => * ", () => {
            expect(enterTransition.expr).toEqual("void => *");
        });

        it("should contain a transition with correct style and timing of 0.2s ease-in-out for void => *", () => {
            let step1: AnimationStyleMetadata = (enterTransition.animation as any)[0];
            let step2: AnimationAnimateMetadata = (enterTransition.animation as any)[1];

            expect(step1).toEqual(style({transform: "translate(0, 25%)"}));
            expect(step2.timings).toEqual("0.2s ease-in-out");
        });

        it("should contain a transition for * => void", () => {
            expect(exitTransition.expr).toEqual("* => void");
        });

        it("should contain a transition with opacity of 0 and timing of 0.2s ease-in-out for * => void", () => {
            let step1: AnimationAnimateMetadata = (exitTransition.animation as any)[0];

            expect(step1.styles).toEqual(style({transform: "translate(0, 25%)"}));
        });
    });

    describe("down", () => {
        let mySlide: AnimationMetadata[] = slide("down");
        let enterTransition: AnimationTransitionMetadata = mySlide[0] as AnimationTransitionMetadata;
        let exitTransition: AnimationTransitionMetadata = mySlide[1] as AnimationTransitionMetadata;

        it("should return an array of AnimationMetadata", () => {
            expect(mySlide.length).toEqual(2);
        });

        it("should contain an AnimationTransitionMetadata for void => * ", () => {
            expect(enterTransition.expr).toEqual("void => *");
        });

        it("should contain a transition with correct style and timing of 0.2s ease-in-out for void => *", () => {
            let step1: AnimationStyleMetadata = (enterTransition.animation as any)[0];
            let step2: AnimationAnimateMetadata = (enterTransition.animation as any)[1];

            expect(step1).toEqual(style({transform: "translate(0, -25%)"}));
            expect(step2.timings).toEqual("0.2s ease-in-out");
        });

        it("should contain a transition for * => void", () => {
            expect(exitTransition.expr).toEqual("* => void");
        });

        it("should contain a transition with opacity of 0 and timing of 0.2s ease-in-out for * => void", () => {
            let step1: AnimationAnimateMetadata = (exitTransition.animation as any)[0];

            expect(step1.styles).toEqual(style({transform: "translate(0, -25%)"}));
        });
    });

    describe("left", () => {
        let mySlide: AnimationMetadata[] = slide("left");
        let enterTransition: AnimationTransitionMetadata = mySlide[0] as AnimationTransitionMetadata;
        let exitTransition: AnimationTransitionMetadata = mySlide[1] as AnimationTransitionMetadata;

        it("should return an array of AnimationMetadata", () => {
            expect(mySlide.length).toEqual(2);
        });

        it("should contain an AnimationTransitionMetadata for void => * ", () => {
            expect(enterTransition.expr).toEqual("void => *");
        });

        it("should contain a transition with correct style and timing of 0.2s ease-in-out for void => *", () => {
            let step1: AnimationStyleMetadata = (enterTransition.animation as any)[0];
            let step2: AnimationAnimateMetadata = (enterTransition.animation as any)[1];

            expect(step1).toEqual(style({transform: "translate(25%, 0)"}));
            expect(step2.timings).toEqual("0.2s ease-in-out");
        });

        it("should contain a transition for * => void", () => {
            expect(exitTransition.expr).toEqual("* => void");
        });

        it("should contain a transition with opacity of 0 and timing of 0.2s ease-in-out for * => void", () => {
            let step1: AnimationAnimateMetadata = (exitTransition.animation as any)[0];

            expect(step1.styles).toEqual(style({transform: "translate(25%, 0)"}));
        });
    });

    describe("right", () => {
        let mySlide: AnimationMetadata[] = slide("right");
        let enterTransition: AnimationTransitionMetadata = mySlide[0] as AnimationTransitionMetadata;
        let exitTransition: AnimationTransitionMetadata = mySlide[1] as AnimationTransitionMetadata;

        it("should return an array of AnimationMetadata", () => {
            expect(mySlide.length).toEqual(2);
        });

        it("should contain an AnimationTransitionMetadata for void => * ", () => {
            expect(enterTransition.expr).toEqual("void => *");
        });

        it("should contain a transition with correct style and timing of 0.2s ease-in-out for void => *", () => {
            let step1: AnimationStyleMetadata = (enterTransition.animation as any)[0];
            let step2: AnimationAnimateMetadata = (enterTransition.animation as any)[1];

            expect(step1).toEqual(style({transform: "translate(-25%, 0)"}));
            expect(step2.timings).toEqual("0.2s ease-in-out");
        });

        it("should contain a transition for * => void", () => {
            expect(exitTransition.expr).toEqual("* => void");
        });

        it("should contain a transition with opacity of 0 and timing of 0.2s ease-in-out for * => void", () => {
            let step1: AnimationAnimateMetadata = (exitTransition.animation as any)[0];

            expect(step1.styles).toEqual(style({transform: "translate(-25%, 0)"}));
        });
    });
});
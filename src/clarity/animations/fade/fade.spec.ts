import {
    AnimationAnimateMetadata,
    AnimationMetadata,
    AnimationStateTransitionMetadata,
    AnimationStyleMetadata,
    style
} from "@angular/core";
import {fade} from "./index";

describe("Fade", () => {

    describe("default", () => {

        let defaultFade: AnimationMetadata[] = fade();
        let enterTransition: AnimationStateTransitionMetadata = defaultFade[0] as AnimationStateTransitionMetadata;
        let exitTransition: AnimationStateTransitionMetadata = defaultFade[1] as AnimationStateTransitionMetadata;

        it("should return an array of AnimationMetadata", () => {
            expect(defaultFade.length).toEqual(2);
        });

        it("should contain a transition for void => *", () => {
            expect(enterTransition.stateChangeExpr).toEqual("void => *");
        });

        it("should contain a transition with opacity of 0 and timing of 0.2s ease-in-out for void => *", () => {
            let step1: AnimationStyleMetadata = (enterTransition.steps as any)._steps[0];
            let step2: AnimationAnimateMetadata = (enterTransition.steps as any)._steps[1];

            expect(step1).toEqual(style({ opacity: 0 }));
            expect(step2.timings).toEqual("0.2s ease-in-out");
        });

        it("should contain a transition for * => void", () => {
            expect(exitTransition.stateChangeExpr).toEqual("* => void");
        });

        it("should contain a transition with opacity of 0 and timing of 0.2s ease-in-out for * => void", () => {
            let step1: AnimationAnimateMetadata = (exitTransition.steps as any)._steps[0];

            expect(step1.styles).toEqual(style({ opacity: 0 }));
        });

    });

    describe("fade with custom opacity", () => {
        let opacityValue: number = 0.8;
        let customOpacityFade: AnimationMetadata[] = fade(opacityValue);
        let enterTransition: AnimationStateTransitionMetadata =
            customOpacityFade[0] as AnimationStateTransitionMetadata;
        let exitTransition: AnimationStateTransitionMetadata =
            customOpacityFade[1] as AnimationStateTransitionMetadata;

        it("should return an array of AnimationMetadata", () => {
            expect(customOpacityFade.length).toEqual(2);
        });

        it("should contain a transition for void => * ", () => {
            expect(enterTransition.stateChangeExpr).toEqual("void => *");
        });

        it("should contain a transition with opacity of 0 and timing of 0.2s ease-in-out for void => *", () => {
            let step1: AnimationStyleMetadata = (enterTransition.steps as any)._steps[0];
            let step2: AnimationAnimateMetadata = (enterTransition.steps as any)._steps[1];

            expect(step1).toEqual(style({ opacity: 0 }));
            expect(step2.timings).toEqual("0.2s ease-in-out");
        });

        it("should contain a transition for * => void", () => {
            expect(exitTransition.stateChangeExpr).toEqual("* => void");
        });

        it("should contain a transition with opacity of 0 and timing of 0.2s ease-in-out for * => void", () => {
            let step1: AnimationAnimateMetadata = (exitTransition.steps as any)._steps[0];

            expect(step1.styles).toEqual(style({ opacity: 0 }));
        });

    });

});
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  AnimationAnimateMetadata,
  AnimationMetadata,
  AnimationStyleMetadata,
  AnimationTransitionMetadata,
  style,
} from '@angular/animations';

import { fade } from './index';

describe('Fade', () => {
  describe('default', () => {
    const defaultFade: AnimationMetadata[] = fade();
    const enterTransition: AnimationTransitionMetadata = defaultFade[0] as AnimationTransitionMetadata;
    const exitTransition: AnimationTransitionMetadata = defaultFade[1] as AnimationTransitionMetadata;

    it('should return an array of AnimationMetadata', () => {
      expect(defaultFade.length).toEqual(2);
    });

    it('should contain a transition for void => *', () => {
      expect(enterTransition.expr).toEqual('void => *');
    });

    it('should contain a transition with opacity of 0 and timing of 0.2s ease-in-out for void => *', () => {
      const step1: AnimationStyleMetadata = (enterTransition.animation as any)[0];
      const step2: AnimationAnimateMetadata = (enterTransition.animation as any)[1];

      expect(step1).toEqual(style({ opacity: 0 }));
      expect(step2.timings).toEqual('0.2s ease-in-out');
    });

    it('should contain a transition for * => void', () => {
      expect(exitTransition.expr).toEqual('* => void');
    });

    it('should contain a transition with opacity of 0 and timing of 0.2s ease-in-out for * => void', () => {
      const step1: AnimationAnimateMetadata = (exitTransition.animation as any)[0];

      expect(step1.styles).toEqual(style({ opacity: 0 }));
    });
  });

  describe('fade with custom opacity', () => {
    const opacityValue: number = 0.8;
    const customOpacityFade: AnimationMetadata[] = fade(opacityValue);
    const enterTransition: AnimationTransitionMetadata = customOpacityFade[0] as AnimationTransitionMetadata;
    const exitTransition: AnimationTransitionMetadata = customOpacityFade[1] as AnimationTransitionMetadata;

    it('should return an array of AnimationMetadata', () => {
      expect(customOpacityFade.length).toEqual(2);
    });

    it('should contain a transition for void => * ', () => {
      expect(enterTransition.expr).toEqual('void => *');
    });

    it('should contain a transition with opacity of 0 and timing of 0.2s ease-in-out for void => *', () => {
      const step1: AnimationStyleMetadata = (enterTransition.animation as any)[0];
      const step2: AnimationAnimateMetadata = (enterTransition.animation as any)[1];

      expect(step1).toEqual(style({ opacity: 0 }));
      expect(step2.timings).toEqual('0.2s ease-in-out');
    });

    it('should contain a transition for * => void', () => {
      expect(exitTransition.expr).toEqual('* => void');
    });

    it('should contain a transition with opacity of 0 and timing of 0.2s ease-in-out for * => void', () => {
      const step1: AnimationAnimateMetadata = (exitTransition.animation as any)[0];

      expect(step1.styles).toEqual(style({ opacity: 0 }));
    });
  });
});

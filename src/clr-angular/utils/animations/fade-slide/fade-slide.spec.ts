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

import { fadeSlide } from './index';

describe('FadeSlide', () => {
  describe('invalid direction', () => {
    it('should throw an error', () => {
      expect(() => {
        fadeSlide('invalid');
      }).toThrow();
    });
  });

  describe('up', () => {
    const mySlide: AnimationMetadata[] = fadeSlide('up');
    const enterTransition: AnimationTransitionMetadata = mySlide[0] as AnimationTransitionMetadata;
    const exitTransition: AnimationTransitionMetadata = mySlide[1] as AnimationTransitionMetadata;

    it('should return an array of AnimationMetadata', () => {
      expect(mySlide.length).toEqual(2);
    });

    it('should contain an AnimationStateTransitionMetadata for void => * ', () => {
      expect(enterTransition.expr).toEqual('void => *');
    });

    it('should contain a transition with correct style and timing of 0.2s ease-in-out for void => *', () => {
      const step1: AnimationStyleMetadata = (enterTransition.animation as any)[0];
      const step2: AnimationAnimateMetadata = (enterTransition.animation as any)[1];

      expect(step1).toEqual(style({ opacity: 0, transform: 'translate(0, 25%)' }));

      expect(step2.timings).toEqual('0.2s ease-in-out');
    });

    it('should contain a transition for * => void', () => {
      expect(exitTransition.expr).toEqual('* => void');
    });

    it('should contain a transition with opacity of 0 and timing of 0.2s ease-in-out for * => void', () => {
      const step1: AnimationAnimateMetadata = (exitTransition.animation as any)[0];
      expect(step1.styles).toEqual(style({ opacity: 0, transform: 'translate(0, 25%)' }));
    });
  });

  describe('down', () => {
    const mySlide: AnimationMetadata[] = fadeSlide('down');
    const enterTransition: AnimationTransitionMetadata = mySlide[0] as AnimationTransitionMetadata;
    const exitTransition: AnimationTransitionMetadata = mySlide[1] as AnimationTransitionMetadata;

    it('should return an array of AnimationMetadata', () => {
      expect(mySlide.length).toEqual(2);
    });

    it('should contain an AnimationStateTransitionMetadata for void => * ', () => {
      expect(enterTransition.expr).toEqual('void => *');
    });

    it('should contain a transition with correct style and timing of 0.2s ease-in-out for void => *', () => {
      const step1: AnimationStyleMetadata = (enterTransition.animation as any)[0];
      const step2: AnimationAnimateMetadata = (enterTransition.animation as any)[1];

      expect(step1).toEqual(style({ opacity: 0, transform: 'translate(0, -25%)' }));
      expect(step2.timings).toEqual('0.2s ease-in-out');
    });

    it('should contain a transition for * => void', () => {
      expect(exitTransition.expr).toEqual('* => void');
    });

    it('should contain a transition with opacity of 0 and timing of 0.2s ease-in-out for * => void', () => {
      const step1: AnimationAnimateMetadata = (exitTransition.animation as any)[0];
      expect(step1.styles).toEqual(style({ opacity: 0, transform: 'translate(0, -25%)' }));
    });
  });

  describe('left', () => {
    const mySlide: AnimationMetadata[] = fadeSlide('left');
    const enterTransition: AnimationTransitionMetadata = mySlide[0] as AnimationTransitionMetadata;
    const exitTransition: AnimationTransitionMetadata = mySlide[1] as AnimationTransitionMetadata;

    it('should return an array of AnimationMetadata', () => {
      expect(mySlide.length).toEqual(2);
    });

    it('should contain an AnimationStateTransitionMetadata for void => * ', () => {
      expect(enterTransition.expr).toEqual('void => *');
    });

    it('should contain a transition with correct style and timing of 0.2s ease-in-out for void => *', () => {
      const step1: AnimationStyleMetadata = (enterTransition.animation as any)[0];
      const step2: AnimationAnimateMetadata = (enterTransition.animation as any)[1];

      expect(step1).toEqual(style({ opacity: 0, transform: 'translate(25%, 0)' }));
      expect(step2.timings).toEqual('0.2s ease-in-out');
    });

    it('should contain a transition for * => void', () => {
      expect(exitTransition.expr).toEqual('* => void');
    });

    it('should contain a transition with opacity of 0 and timing of 0.2s ease-in-out for * => void', () => {
      const step1: AnimationAnimateMetadata = (exitTransition.animation as any)[0];
      expect(step1.styles).toEqual(style({ opacity: 0, transform: 'translate(25%, 0)' }));
    });
  });

  describe('right', () => {
    const mySlide: AnimationMetadata[] = fadeSlide('right');
    const enterTransition: AnimationTransitionMetadata = mySlide[0] as AnimationTransitionMetadata;
    const exitTransition: AnimationTransitionMetadata = mySlide[1] as AnimationTransitionMetadata;

    it('should return an array of AnimationMetadata', () => {
      expect(mySlide.length).toEqual(2);
    });

    it('should contain an AnimationStateTransitionMetadata for void => * ', () => {
      expect(enterTransition.expr).toEqual('void => *');
    });

    it('should contain a transition with correct style and timing of 0.2s ease-in-out for void => *', () => {
      const step1: AnimationStyleMetadata = (enterTransition.animation as any)[0];
      const step2: AnimationAnimateMetadata = (enterTransition.animation as any)[1];

      expect(step1).toEqual(style({ opacity: 0, transform: 'translate(-25%, 0)' }));
      expect(step2.timings).toEqual('0.2s ease-in-out');
    });

    it('should contain a transition for * => void', () => {
      expect(exitTransition.expr).toEqual('* => void');
    });

    it('should contain a transition with opacity of 0 and timing of 0.2s ease-in-out for * => void', () => {
      const step1: AnimationAnimateMetadata = (exitTransition.animation as any)[0];
      expect(step1.styles).toEqual(style({ opacity: 0, transform: 'translate(-25%, 0)' }));
    });
  });
});

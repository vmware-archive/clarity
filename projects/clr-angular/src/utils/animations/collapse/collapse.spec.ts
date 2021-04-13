/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  AnimationAnimateMetadata,
  AnimationMetadata,
  AnimationStateMetadata,
  AnimationStyleMetadata,
  AnimationTransitionMetadata,
  style,
} from '@angular/animations';

import { collapse } from './index';

describe('Collapse', () => {
  const myCollapse: AnimationMetadata[] = collapse();
  const state: AnimationStateMetadata = myCollapse[0] as AnimationStateMetadata;
  const transition1: AnimationTransitionMetadata = myCollapse[1] as AnimationTransitionMetadata;
  const transition2: AnimationTransitionMetadata = myCollapse[2] as AnimationTransitionMetadata;

  it('should return an array of AnimationMetadata', () => {
    expect(myCollapse.length).toEqual(3);
  });

  it('should contain a default state with correct style', () => {
    expect(state.styles).toEqual(style({ height: 0, 'overflow-y': 'hidden' }));
  });

  it('should contain a transition for true => false', () => {
    expect(transition1.expr).toEqual('true => false');
  });

  it('should contain a transition for false => true', () => {
    expect(transition2.expr).toEqual('false => true');
  });

  it('should contain a transition with height of * and timing of 0.2s ease-in-out for true => false', () => {
    const step1: AnimationAnimateMetadata = (transition1.animation as any)[0];

    expect(step1.styles).toEqual(style({ height: '*', 'overflow-y': 'hidden' }));
  });

  it('should contain a transition with height of * and timing of 0.2s ease-in-out for false => true', () => {
    const step1: AnimationStyleMetadata = (transition2.animation as any)[0];
    const step2: AnimationAnimateMetadata = (transition2.animation as any)[1];

    expect(step1).toEqual(style({ height: '*', 'overflow-y': 'hidden' }));
    expect(step2.timings).toEqual('0.2s ease-in-out');
  });
});

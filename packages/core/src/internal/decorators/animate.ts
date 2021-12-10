/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  AnimatableElement,
  AnimationStatus,
  PropertyDrivenAnimation,
  PRIVATE_ANIMATION_STATUS_ATTR_NAME,
} from '../motion/interfaces.js';
import { runPropertyAnimations } from '../motion/utils.js';

// decorator factory that extends the component constructor to inject animations code into it
export function animate(config: PropertyDrivenAnimation) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function _animationDecorator<T extends { new (...args: any[]): AnimatableElement }>(constructor: T) {
    return (class extends constructor {
      private _animationReady = false;

      private _animationDemoMode = false;

      _animations = config;

      updated(props: Map<string, any>) {
        super.updated(props);

        if (!this._animationReady && !this.hasAttribute(PRIVATE_ANIMATION_STATUS_ATTR_NAME)) {
          // this prevents animations from loading onpageload
          this.setAttribute(PRIVATE_ANIMATION_STATUS_ATTR_NAME, AnimationStatus.ready);
          this._animationReady = true;
          return;
        }

        if (this._animationDemoMode === true || this.hasAttribute('_demo-mode')) {
          // ignore if element has the _demo-mode attribute set;
          // _demo-mode is used for docs, static examples, and stories
          // _demo-mode is not intended for external use
          this._animationDemoMode = true;
          return;
        }

        runPropertyAnimations(props, this);
      }
    } as unknown) as T;
  };
}

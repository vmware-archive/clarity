/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  AnimatableElement,
  AnimationOptions,
  AnimationStatus,
  AnimationKeyframes,
  CLARITY_MOTION_ENTER_LEAVE_PROPERTY,
  CLARITY_MOTION_FALLBACK_DURATION_IN_MS,
  CLARITY_MOTION_FALLBACK_EASING,
  CLARITY_MOTION_REVERSE_ANIMATION_LABEL,
  CLARITY_MOTION_REVERSE_ANIMATION_SUFFIX,
  PropertyDrivenAnimation,
  TargetedAnimation,
  TargetedAnimationAsPropertyTuple,
} from './interfaces.js';
import { LogService } from '../services/log.service.js';
import { ClarityMotion } from './motion.service.js';
import clone from 'ramda/es/clone.js';
import { getCssPropertyValue, isCssPropertyName } from '../utils/css.js';
import { isPrefixedBy, isSuffixedBy, getNumericValueFromCssSecondsStyleValue, removePrefix } from '../utils/string.js';
import { queryChildFromLightOrShadowDom } from '../utils/dom.js';
import { allPropertiesPass } from '../utils/identity.js';
import { getMillisecondsFromSeconds } from '../utils/math.js';
import { PropertyValues } from 'lit';

/**
 * runPropertyAnimations() is a utility function called by the @animate(). It is a single point of entry
 * to execute the property-driven animations found in components like the accordion and overlay.
 *
 * Other utilities here are exported to break up the unit tests covering the animation/motion
 * library. While they could be called or used in isolation, it is not recommended for most use cases.
 *
 * runPropertyAnimations returns a boolean so that we know if it ran successfully or not. This is
 * mostly to make testing the function easier.
 *
 * @internal
 */
/* c8 ignore next */
export async function runPropertyAnimations(props: PropertyValues<any>, hostEl: AnimatableElement): Promise<boolean> {
  if (!hostEl._animations) {
    LogService.warn(`${hostEl.tagName.toLocaleLowerCase()} is trying to animate but no animations are defined.`);
    return false;
  }

  // this runs through animations for each property sequentially
  // animations passed into getPropertyAnimations are the Property-Driven Animations
  // passed into the @animate decorator
  // { hidden: { true: 'cds-modal-enter-reverse', false: 'enter' }, status: { error: 'cds-component-shake' } }

  // getPropertyAnimations transforms the @animate decorator config into an array of
  // tuples so they are easier to work with.
  // ['hidden', { true: 'cds-modal-enter-reverse', false: 'enter' }], ['status', { error: 'cds-component-shake' }]
  // * inactive animations are filtered out
  const propertyAnimations = getPropertyAnimations(hostEl._animations, props);

  const animationsRan = await Promise.all(
    propertyAnimations.map((propNameAnimationTuple: TargetedAnimationAsPropertyTuple) => {
      const [propname, propertyAnimationsByValue] = propNameAnimationTuple;

      if (props.get(propname) === (hostEl as any)[propname]) {
        // a weird/unlikely state where an update is sent but the property value didn't actually change
        return false;
      }

      // gets animations to run based on the property's value
      const animatedPropertyValueAsString = propertyAnimationsByValue[(hostEl as any)[propname].toString()];
      const cdsMotionValue = hostEl.cdsMotion;

      // looping through each tuple value in order, getAnimationConfigForPropertyValue()
      // returns a tuple with the animation name from Clarity Motion and the TargetedAnimation
      // config (also returned from the Clarity Motion service)
      // ['enter-reverse', [ { target: '.private-host', animation: [ { opacity: 0 }, { opacity: 1 } ], options: { duration: 300 }}]

      const [motionName, returnedMotion] = getAnimationConfigForPropertyValue(
        animatedPropertyValueAsString,
        getInlineOverride(cdsMotionValue, propname, (hostEl as any)[propname].toString())
      );
      let motionForMyValue = clone(returnedMotion); // have to jump through this hoop to keep typescript happy

      // jumps out if there are no animation routines
      if (motionForMyValue.length < 1) {
        return false;
      }

      motionForMyValue = setAnimationConfigOptions(motionName, motionForMyValue, hostEl);

      // loops through animation config and runs them; assigns the promises to an array we can Promise.all() at the end
      const animations = getAnimationPromiseInstructions(animatedPropertyValueAsString, motionForMyValue, hostEl);

      return Promise.all(animations).then(() => {
        resolveAnimationEndStatus(animatedPropertyValueAsString, hostEl);
        return true;
      });
    })
  )
    .then(result => {
      return result.indexOf(true) > -1;
    })
    .catch(() => {
      return false;
    });

  return animationsRan;
}

// --- CONTROL FLOW UTILS ---

/* c8 ignore next */
export function setAnimationStartStatus(animatedPropertyValueAsString: string, hostEl: AnimatableElement) {
  // accesses and manipulates the private animation status attr;
  if (hostEl.getAttribute('_cds-animation-status') !== AnimationStatus.active) {
    hostEl.setAttribute('_cds-animation-status', AnimationStatus.active);
    // this is here so we only emit the start event once, right when the whole animation starts...
    hostEl.cdsMotionChange.emit(`${animatedPropertyValueAsString} animation ${AnimationStatus.start}`);
  }
}

/* c8 ignore next */
export function resolveAnimationEndStatus(animatedPropertyValueAsString: string, hostEl: AnimatableElement) {
  // sets super secret animation attr back to 'ready'
  hostEl.setAttribute('_cds-animation-status', AnimationStatus.ready); // A

  // emits the name of the animation and that it ended
  hostEl.cdsMotionChange.emit(`${animatedPropertyValueAsString} animation ${AnimationStatus.end}`); // A
}

/* c8 ignore next */
export function setAnimationConfigOptions(
  motionName: string,
  motionForMyValue: TargetedAnimation[],
  hostEl: AnimatableElement
): TargetedAnimation[] {
  const cdsMotionValue = hostEl.cdsMotion;
  const animationsAreTurnedOff = !cdsMotionValue || cdsMotionValue === 'off';

  // the following set of functions – reverseAnimationConfig(), zeroOutAnimationConfig(),
  // setAnimationDuration(), setAnimationEasing() – modify the "options" portion of the animation routine
  // in the tuple above that is returned from getAnimationConfigForPropertyValue
  if (animationIsReversed(motionName)) {
    motionForMyValue = reverseAnimationConfig(motionForMyValue);
  }

  if (animationsAreTurnedOff) {
    // cdsMotion is turned off, so zero out the duration
    motionForMyValue = zeroOutAnimationConfig(motionForMyValue);
  } else {
    // sets duration and easing based on CSS properties, passed values, or a global fallback
    motionForMyValue = setAnimationDuration(motionForMyValue, hostEl);
    motionForMyValue = setAnimationEasing(motionForMyValue, hostEl);
  }

  return motionForMyValue;
}

/* c8 ignore next */
export function getAnimationPromiseInstructions(
  animatedPropertyValueAsString: string,
  motionConfigs: TargetedAnimation[],
  hostEl: AnimatableElement
): Promise<unknown>[] {
  return motionConfigs
    .filter(config => !config.onlyIf || allPropertiesPass(hostEl, config.onlyIf))
    .map(config => {
      setAnimationStartStatus(animatedPropertyValueAsString, hostEl);

      return new Promise(resolve => {
        const animationPlayer = getAnimationTarget(hostEl, config.target).animate(
          getAnimationKeyframesOrPropertyIndexedFrames(config.animation, hostEl),
          config.options || {}
        );

        const listener = () => {
          resolve('animation finished');
          animationPlayer.removeEventListener('finish', listener);
        };

        animationPlayer.addEventListener('finish', listener);
      });
    });
}

/* c8 ignore next */
export function getAnimationTarget(hostEl: HTMLElement, targetSelector?: string): Element {
  return queryChildFromLightOrShadowDom(hostEl, targetSelector) || hostEl;
}

/* c8 ignore next */
export function getAnimationKeyframesOrPropertyIndexedFrames(
  animationConfig: AnimationKeyframes | PropertyIndexedKeyframes,
  hostEl: HTMLElement
): AnimationKeyframes | PropertyIndexedKeyframes {
  return !Array.isArray(animationConfig) ? animationConfig : sizeDimensionKeyframes(animationConfig, hostEl);
}

// --- REVERSING UTILS ---

// string -> boolean
/* c8 ignore next */
export function animationIsReversed(nameOfAnimation: string) {
  return isSuffixedBy(nameOfAnimation, CLARITY_MOTION_REVERSE_ANIMATION_SUFFIX);
}

// { target: '.my-selector', animation: [<keyframes>], options: { duration: 500 }} ->
// { target: '.my-selector', animation: [<keyframes>], options: { duration: 500, direction: 'reverse' }}
/* c8 ignore next */
export function reverseAnimationConfig(config: TargetedAnimation[]): TargetedAnimation[] {
  return config.map((anim: TargetedAnimation) => {
    if (anim.options) {
      anim.options.direction = CLARITY_MOTION_REVERSE_ANIMATION_LABEL;
    } else {
      anim.options = { direction: CLARITY_MOTION_REVERSE_ANIMATION_LABEL };
    }
    return anim;
  });
}

// 'my-animation' -> 'my-animation-reverse'
/* c8 ignore next */
export function reverseAnimation(animationName: string) {
  return [animationName, '-', CLARITY_MOTION_REVERSE_ANIMATION_LABEL].join('');
}

// --- ANIMATION CONFIG RETRIEVAL ---

// returns an animation name from a stringified @animate decorator config passed into the
// cds-motion attr. looks it up by property first and value second. returns empty string
// if no animation name matches the property and property value.
/* c8 ignore next */
export function getInlineOverride(cdsMotionValue: string, propName: string, propValue: string): string {
  if (!cdsMotionValue || !propName || typeof propValue === 'undefined') {
    return '';
  }

  if (cdsMotionValue === 'on' || cdsMotionValue === 'off') {
    return '';
  }

  let inlineOverride: any | null;

  try {
    inlineOverride = JSON.parse(cdsMotionValue);
  } catch (e) {
    return '';
  }

  const overrideValue = inlineOverride[propName] && inlineOverride[propName][propValue];

  return overrideValue ? overrideValue : '';
}

// 'i-am-reverse' -> 'i-am'
/* c8 ignore next */
export function extractAnimationNameIfReversed(name: string): string {
  return animationIsReversed(name) ? name.slice(0, -1 * CLARITY_MOTION_REVERSE_ANIMATION_SUFFIX.length) : name;
}

// if the name retrieved from the cds-motion config is present in Clarity Motion, it is returned
/* c8 ignore next */
export function getAnimationFromOverrideOrDecorator(decoratorValue: string, overrideValue?: string) {
  if (!overrideValue) {
    return decoratorValue;
  }

  return ClarityMotion.has(extractAnimationNameIfReversed(overrideValue)) ? overrideValue : decoratorValue;
}

// ('animation-name') -> ['animation-name', [ { target: '.an-element', animation: [<keyframes>], options: { ... }}]];
// ('animation-name', 'name-retrieved-from-cds-motion-config') ->
// ['name-retrieved-from-cds-motion-config', [ { target: ..., animation: [<keyframes>], options: { ... }}]];0
/* c8 ignore next */
export function getAnimationConfigForPropertyValue(
  nameOfAnimationFromObject: string,
  cdsMotionOverride?: string
): [string, TargetedAnimation[]] {
  const nameOfAnimation = getAnimationFromOverrideOrDecorator(nameOfAnimationFromObject, cdsMotionOverride);
  return [nameOfAnimation, clone(ClarityMotion.get(extractAnimationNameIfReversed(nameOfAnimation)))];
}

// --- SETTING ANIMATION CONFIG VALUES ---

/* c8 ignore next */
export function setAnimationDuration(config: TargetedAnimation[], hostEl: AnimatableElement): TargetedAnimation[] {
  return setAnimationProperty('duration', hostEl, config, CLARITY_MOTION_FALLBACK_DURATION_IN_MS, (val: string) => {
    return getMillisecondsFromSeconds(getNumericValueFromCssSecondsStyleValue(val));
  });
}

/* c8 ignore next */
export function setAnimationEasing(config: TargetedAnimation[], hostEl: AnimatableElement): TargetedAnimation[] {
  /* c8 ignore next */
  return setAnimationProperty('easing', hostEl, config, CLARITY_MOTION_FALLBACK_EASING);
}

/* c8 ignore next */
export function zeroOutAnimationConfig(config: TargetedAnimation[]): TargetedAnimation[] {
  /* c8 ignore next */
  return config.map(anim => {
    if (anim.options) {
      anim.options.duration = 0;
      anim.options.easing = CLARITY_MOTION_FALLBACK_EASING;
    } else {
      anim.options = { duration: 0, easing: CLARITY_MOTION_FALLBACK_EASING };
    }
    return anim;
  });
}

/* c8 ignore next */
export function setAnimationProperty(
  propertyName: string,
  hostEl: AnimatableElement,
  config: TargetedAnimation[],
  staticFallback: string | number,
  valueConverter?: (arg: string) => string | number
) {
  return config.map((anim: TargetedAnimation) => {
    if (anim.options) {
      if (!(anim.options as AnimationOptions)[propertyName]) {
        (anim.options as AnimationOptions)[propertyName] = staticFallback;
      } else if (isCssPropertyName((anim.options as { [key: string]: any })[propertyName])) {
        const myConfigOption = (anim.options as AnimationOptions)[propertyName];
        let valFromProperty: string | number = getCssPropertyValue(myConfigOption as string, hostEl);

        if (!valFromProperty) {
          valFromProperty = staticFallback;
        } else if (valueConverter) {
          valFromProperty = valueConverter(valFromProperty);
        }

        (anim.options as AnimationOptions)[propertyName] = valFromProperty;
      }
      // else fallthrough not required because option is already set to intended value
    } else {
      const newConfigOptions: AnimationOptions = {};
      newConfigOptions[propertyName] = staticFallback;
      anim.options = newConfigOptions;
    }
    return anim;
  });
}

// -- TRANSFORM PROPERTY-DRIVEN ANIMATION OBJECTS TO ANIMATION CONFIG OBJECTS ---

/* c8 ignore next */
export function sizeDimensionKeyframes(
  animationKeyframes: AnimationKeyframes,
  hostEl: HTMLElement
): AnimationKeyframes {
  if (!Array.isArray(animationKeyframes)) {
    return animationKeyframes;
  }

  return animationKeyframes.map((kf: Keyframe) => {
    if (Object.prototype.hasOwnProperty.call(kf, 'height') && isPrefixedBy(kf?.height?.toString() || '', 'from:')) {
      const selector = removePrefix(kf?.height?.toString() || '', 'from:');
      const measureTarget = queryChildFromLightOrShadowDom(hostEl, selector) || null;
      kf.height = !measureTarget ? 'auto' : measureTarget.getBoundingClientRect().height + 'px';
    }
    if (Object.prototype.hasOwnProperty.call(kf, 'width') && isPrefixedBy(kf?.width?.toString() || '', 'from:')) {
      const selector = removePrefix(kf?.width?.toString() || '', 'from:');
      const measureTarget = queryChildFromLightOrShadowDom(hostEl, selector) || null;
      kf.width = !measureTarget ? 'auto' : measureTarget.getBoundingClientRect().width + 'px';
    }
    return kf;
  });
}

/* c8 ignore next */
export function filterAnimationsByUpdatedProperties(
  animations: PropertyDrivenAnimation,
  updatingProps: PropertyValues<any>
): PropertyDrivenAnimation | null {
  if (animations === null || animations === undefined) {
    return null;
  }

  let objectIsEmpty = true;
  const returnObject: PropertyDrivenAnimation = {};

  Object.getOwnPropertyNames(animations).forEach((prop: string) => {
    // test here against undefined value because Lit is running initializations
    // with properties with an "undefined" value. as a result of this change,
    // animations should only run on explicitly set values...
    if (updatingProps.has(prop) && updatingProps.get(prop) !== undefined) {
      returnObject[prop] = clone(animations[prop]);
      objectIsEmpty = false;
    }
  });

  return objectIsEmpty ? null : returnObject;
}

type TupleOfHiddenAndOtherAnimations = [TargetedAnimationAsPropertyTuple[], TargetedAnimationAsPropertyTuple[]];

/* c8 ignore next */
export function flattenAndSortAnimations(
  hiddenAndNotAnimationTuple: TupleOfHiddenAndOtherAnimations,
  isHiding: boolean
): TargetedAnimationAsPropertyTuple[] {
  if (hiddenAndNotAnimationTuple === null || hiddenAndNotAnimationTuple === undefined) {
    return [];
  }

  const [hiddenAnimations, otherAnimations] = hiddenAndNotAnimationTuple;

  if (hiddenAnimations.length > 0) {
    if (isHiding) {
      // hiding hostEl
      return [].concat(otherAnimations as never[], hiddenAnimations as never[]);
    } else {
      // showing hostEl
      return [].concat(hiddenAnimations as never[], otherAnimations as never[]);
    }
  } else {
    return otherAnimations;
  }
}

/* c8 ignore next */
export function getHidingAndNonHidingPropertyAnimations(
  animations: PropertyDrivenAnimation
): [TargetedAnimationAsPropertyTuple[], TargetedAnimationAsPropertyTuple[]] {
  const hiddenAnimations: TargetedAnimationAsPropertyTuple[] = [];
  const otherAnimations: TargetedAnimationAsPropertyTuple[] = [];

  Object.getOwnPropertyNames(animations || {}).forEach((prop: string) => {
    const animationTuple: TargetedAnimationAsPropertyTuple = [prop, clone(animations[prop])];
    if (prop === CLARITY_MOTION_ENTER_LEAVE_PROPERTY) {
      hiddenAnimations.push(animationTuple);
    } else {
      otherAnimations.push(animationTuple);
    }
  });

  return [hiddenAnimations, otherAnimations];
}

/* c8 ignore next */
export function getPropertyAnimations(
  animations: PropertyDrivenAnimation,
  updatingProps: PropertyValues<any>
): TargetedAnimationAsPropertyTuple[] {
  const activeAnimations = filterAnimationsByUpdatedProperties(animations || {}, updatingProps);

  if (activeAnimations === null) {
    return [];
  }

  const hidingAndOtherAnimationsAsTuple = getHidingAndNonHidingPropertyAnimations(activeAnimations);
  const isHiding = updatingProps.get(CLARITY_MOTION_ENTER_LEAVE_PROPERTY) as boolean;

  return flattenAndSortAnimations(hidingAndOtherAnimationsAsTuple, isHiding);
}

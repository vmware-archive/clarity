/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { EventEmitter } from '../decorators/event.js';

/* GLOBALS */

export enum AnimationStatus {
  ready = 'ready',
  active = 'active',
  start = 'starting',
  end = 'done',
}

export const CLARITY_MOTION_ENTER_LEAVE_PROPERTY = 'hidden';
export const CLARITY_MOTION_REVERSE_ANIMATION_LABEL = 'reverse';
export const CLARITY_MOTION_REVERSE_ANIMATION_SUFFIX = '-' + CLARITY_MOTION_REVERSE_ANIMATION_LABEL;
export const CLARITY_MOTION_FALLBACK_DURATION_IN_MS = 300;
export const CLARITY_MOTION_FALLBACK_EASING = 'linear';

export const PRIVATE_ANIMATION_STATUS_ATTR_NAME = '_cds-animation-status';

/* ANIMATION CONFIGURATION */

// a type to use in the { options } property of an animation configuration
export type AnimationOptions = { [key: string]: string | number };
export type AnimationKeyframes = Keyframe[] | PropertyIndexedKeyframes;

// this is the actual animation. it goes in the Clarity Motion configs
// { 'cds-modal-enter': TargetedAnimation[] }
export interface TargetedAnimation {
  target?: string;
  onlyIf?: string;
  animation: AnimationKeyframes;
  options?: KeyframeAnimationOptions;
  playback?: { reverse?: boolean };
}

// this goes into @animate's config
// { 'property-attribute-name': {} as TargetedAnimationByPropertyValue }
export interface TargetedAnimationByPropertyValue {
  [key: string]: string; // property value-as-string associated with one or more animations targeted to selectors
}

export type TargetedAnimationAsPropertyTuple = [string, TargetedAnimationByPropertyValue];

export interface PropertyDrivenAnimation {
  // property name
  [key: string]: TargetedAnimationByPropertyValue;
}

export interface AnimationConfig {
  [key: string]: TargetedAnimation[];
}

/* ANIMATION REGISTRY */

export interface MotionRegistry {
  [key: string]: TargetedAnimation[];
}

/* ANIMATED COMPONENTS */

export interface Animatable {
  cdsMotion: string;
  cdsMotionChange: EventEmitter<string>;
}

export type AnimatableElement = Element & Animatable & { [key: string]: any; _animations: PropertyDrivenAnimation };

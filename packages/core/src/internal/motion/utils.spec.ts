/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit-element';
import clone from 'ramda/es/clone.js';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import {
  animate,
  Animatable,
  AnimatableElement,
  event,
  EventEmitter,
  CLARITY_MOTION_FALLBACK_EASING,
  CLARITY_MOTION_FALLBACK_DURATION_IN_MS,
  CLARITY_MOTION_REVERSE_ANIMATION_SUFFIX,
  ClarityMotion,
  LogService,
  property,
  PropertyDrivenAnimation,
  registerElementSafely,
} from '@cds/core/internal';
import {
  filterAnimationsByUpdatedProperties,
  flattenAndSortAnimations,
  extractAnimationNameIfReversed,
  getAnimationConfigForPropertyValue,
  getAnimationFromOverrideOrDecorator,
  getAnimationKeyframesOrPropertyIndexedFrames,
  getHidingAndNonHidingPropertyAnimations,
  getAnimationPromiseInstructions,
  getInlineOverride,
  getPropertyAnimations,
  reverseAnimation,
  reverseAnimationConfig,
  runPropertyAnimations,
  setAnimationProperty,
  sizeDimensionKeyframes,
  zeroOutAnimationConfig,
  resolveAnimationEndStatus,
  setAnimationStartStatus,
  setAnimationConfigOptions,
  getAnimationTarget,
} from './utils.js';
import { AnimationStatus, TargetedAnimation } from './interfaces.js';

declare global {
  interface HTMLElementTagNameMap {
    'test-animate-utils-element': HTMLElement;
  }
}

type PropMap = Map<string, any>;

@animate({
  everythingIsFine: {
    true: 'something',
    false: 'nothing',
  },
})
export class TestAnimateUtilsElement extends LitElement implements Animatable {
  @property({ type: String })
  cdsMotion = 'on';

  @event()
  cdsMotionChange: EventEmitter<string>;

  @property({ type: Boolean }) everythingIsFine: boolean;

  render() {
    return html`<slot></slot>`;
  }
}

registerElementSafely('test-animate-utils-element', TestAnimateUtilsElement);

describe('Animation Helpers: ', () => {
  const mockPropertyAnimation: PropertyDrivenAnimation = {
    hidden: {
      true: 'leave-animation',
      false: 'enter-animation',
    },
    isValid: {
      true: 'validation-passed',
      false: 'validation-failed',
    },
    status: {
      loading: 'loading-animation',
      success: 'success-animation',
      error: 'error-animation',
    },
  };

  const setConfig = [
    {
      target: '.test',
      animation: [{ opacity: 0 }, { opacity: 1 }],
      options: {
        duration: 350,
        easing: 'ease-out',
      },
    },
  ];

  const noConfig = [
    {
      target: '.test',
      animation: [{ opacity: 0 }, { opacity: 1 }],
    },
  ];

  describe('runPropertyAnimations()', () => {
    it('logs a warning if the element it is passed is not animatable', async done => {
      const testElement = await createTestElement(html`<div>ohai</div>`);
      spyOn(LogService, 'warn');
      expect(testElement).toBeDefined();
      const didRun = await runPropertyAnimations(new Map(), (testElement as unknown) as AnimatableElement);
      expect(LogService.warn).toHaveBeenCalled();
      expect(didRun).toBe(false);
      removeTestElement(testElement);
      done();
    });

    it('bails if the host element does not have the property (weird edge case)', async done => {
      const testElement = await createTestElement(html`<div>ohai</div>`);
      const propMap: Map<string, any> = new Map();
      propMap.set('jabberwocky', 'wat');

      const didRun = await runPropertyAnimations(propMap, (testElement as unknown) as AnimatableElement);
      expect(didRun).toBe(false);
      removeTestElement(testElement);
      done();
    });

    it('bails if the host element property and the new propval have not changed (another weird edge case)', async done => {
      const testElement = await createTestElement(html`<test-animate-utils-element>ohai</test-animate-utils-element>`);
      const component = testElement.querySelector<TestAnimateUtilsElement & AnimatableElement>(
        'test-animate-utils-element'
      );
      component.everythingIsFine = false;

      const propMap: Map<string, any> = new Map();
      propMap.set('everythingIsFine', false);

      const didRun = await runPropertyAnimations(propMap, component);
      expect(didRun).toBe(false);
      removeTestElement(testElement);
      done();
    });

    it('bails if there is no animation associated with the property value', async done => {
      const testElement = await createTestElement(html`<div class="hayy">ohai</div>`);
      const component = testElement.querySelector('.hayy');
      const propMap: Map<string, any> = new Map();
      propMap.set('jabberwocky', 'wat');
      (component as any).jabberwocky = 'wat';
      const didRun = await runPropertyAnimations(propMap, (component as unknown) as AnimatableElement);
      expect(didRun).toBe(false);
      removeTestElement(testElement);
      done();
    });

    it('runs if there is an animation associated with the property value', async done => {
      const testElement = await createTestElement(html`<test-animate-utils-element>ohai</test-animate-utils-element>`);
      const component = testElement.querySelector<TestAnimateUtilsElement>('test-animate-utils-element');
      ClarityMotion.add('something', [{ animation: [{ opacity: 0 }, { opacity: 1 }] }]);
      component.everythingIsFine = true;
      await componentIsStable(component);
      const propMap: Map<string, any> = new Map();
      propMap.set('everythingIsFine', !component.everythingIsFine); // wants to run the 'something' animation
      const didRun = await runPropertyAnimations(propMap, (component as unknown) as AnimatableElement);
      expect(didRun).toBe(true);
      removeTestElement(testElement);
      done();
    });

    it('does NOT run if there is an animation label associated with the property value but no animation in ClarityMotion', async done => {
      const testElement = await createTestElement(html`<test-animate-utils-element>ohai</test-animate-utils-element>`);
      const component = testElement.querySelector<TestAnimateUtilsElement>('test-animate-utils-element');
      component.everythingIsFine = false;
      await componentIsStable(component);
      const propMap: Map<string, any> = new Map();
      propMap.set('everythingIsFine', !component.everythingIsFine); // wants to run a 'nothing' animation; which does not exist!
      const didRun = await runPropertyAnimations(propMap, (component as unknown) as AnimatableElement);
      expect(didRun).toBe(false);
      removeTestElement(testElement);
      done();
    });
  });

  describe('reverseAnimationConfig() ', () => {
    it('adds expected reverse direction', () => {
      const test = reverseAnimationConfig(clone(setConfig));
      expect(test[0].options.direction).toBe('reverse');
    });

    it('adds expected reverse direction, even if no config options are present', () => {
      const test = reverseAnimationConfig(clone(noConfig));
      expect(test[0].options.direction).toBe('reverse');
    });
  });

  describe('reverseAnimation() ', () => {
    it('adds expected reverse suffix', () => {
      const test = reverseAnimation('animation');
      expect(test).toContain(CLARITY_MOTION_REVERSE_ANIMATION_SUFFIX);
    });
  });

  describe('getAnimationConfigForPropertyValue() ', () => {
    const testConfig = [
      {
        target: '.test',
        animation: [{ opacity: 0 }, { opacity: 1 }],
        options: {
          duration: 350,
          easing: 'ease-out',
        },
      },
    ];

    const testConfig2 = [
      {
        target: '.ohai',
        animation: [{ opacity: 0 }, { opacity: 1 }],
        options: {
          duration: 1200,
          easing: 'ease-in',
        },
      },
    ];

    beforeAll(() => {
      ClarityMotion.add('animation', testConfig);
      ClarityMotion.add('override', testConfig2);
    });

    it('retrieves animation from Clarity Motion as expected', () => {
      const test = getAnimationConfigForPropertyValue('animation');
      const testReversed = getAnimationConfigForPropertyValue('animation-reverse');
      expect(test[0]).toEqual('animation');
      expect(test[1]).toEqual(testConfig);
      expect(testReversed[0]).toEqual('animation-reverse');
      expect(testReversed[1]).toEqual(testConfig);
    });

    it('retrieves custom animation from inline override', () => {
      const test = getAnimationConfigForPropertyValue('animation', 'override');
      expect(test[0]).toEqual('override');
      expect(test[1]).toEqual(testConfig2);
    });

    it('should handle reversed inline overrides', () => {
      const test = getAnimationConfigForPropertyValue('animation', 'override-reverse');
      expect(test[0]).toEqual('override-reverse');
      expect(test[1]).toEqual(testConfig2);
    });

    it('falls back to decorator-defined animation if inline override is not found', () => {
      const test = getAnimationConfigForPropertyValue('animation', 'jabberwocky');
      expect(test[0]).toEqual('animation');
      expect(test[1]).toEqual(testConfig);
    });
  });

  describe('zeroOutAnimationConfig() ', () => {
    it('sets to zero duration and fallback easing as expected', () => {
      const test = zeroOutAnimationConfig(clone(setConfig));
      expect(test[0].options.duration).toBe(0);
      expect(test[0].options.easing).toBe(CLARITY_MOTION_FALLBACK_EASING);
    });

    it('sets config that does not exist to zero duration and fallback easing', () => {
      const test = zeroOutAnimationConfig(clone(noConfig));
      expect(test[0].options.duration).toBe(0);
      expect(test[0].options.easing).toBe(CLARITY_MOTION_FALLBACK_EASING);
    });

    it('sets config that is missing one property to zero duration and fallback easing', () => {
      const halfConfig = [
        {
          target: '.test',
          animation: [{ opacity: 0 }, { opacity: 1 }],
          options: {
            easing: 'ease-out',
          },
        },
      ];
      const test = zeroOutAnimationConfig(halfConfig);
      expect(test[0].options.duration).toBe(0);
      expect(test[0].options.easing).toBe(CLARITY_MOTION_FALLBACK_EASING);
    });

    it('returns empty if the config is completely empty', () => {
      const emptyConfig: TargetedAnimation[] = [];
      const test = zeroOutAnimationConfig(emptyConfig);
      expect(test).toEqual([]);
    });
  });

  describe('setAnimationProperty() ', () => {
    let testElement: HTMLElement;
    let testDiv: HTMLElement;

    const mockTargetedAnimation: TargetedAnimation[] = [
      {
        target: '.test',
        animation: [{ opacity: 0 }, { opacity: 1 }],
        options: {
          easing: '--animation-test',
        },
      },
    ];

    beforeEach(async () => {
      testElement = await createTestElement(
        html`<style>
            .test {
              --animation-test: ease-in;
            }
          </style>
          <div class="test">ohai</div>`
      );
      testDiv = testElement.querySelector<HTMLElement>('.test');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('sets option property to static fallback if options object exists but does not have expected property', () => {
      const test = setAnimationProperty(
        'duration',
        (testDiv as unknown) as AnimatableElement,
        clone(mockTargetedAnimation),
        250
      );
      expect(test[0].options.duration).toBe(250);
    });

    it('sets option property to css variable value if options object exists and expected property is a css variable name', () => {
      const test = setAnimationProperty(
        'easing',
        (testDiv as unknown) as AnimatableElement,
        clone(mockTargetedAnimation),
        'linear'
      );
      expect(test[0].options.easing).not.toBe('linear');
      expect(test[0].options.easing).toBe('ease-in');
    });

    it('sets option property to static fallback if options object exists, expected property is a css variable name, but there is no value for that css variable', () => {
      const editMock = clone(mockTargetedAnimation);
      editMock[0].options.duration = '--animation-duration';
      const test = setAnimationProperty('duration', (testDiv as unknown) as AnimatableElement, editMock, 500);
      expect(test[0].options.duration).toBe(500);
    });

    it('uses optional valus converter to set option property if options object exists, expected property is a css variable name, and there is a value for that css variable', () => {
      const test = setAnimationProperty(
        'easing',
        (testDiv as unknown) as AnimatableElement,
        clone(mockTargetedAnimation),
        'linear',
        (val: string) => {
          return val + '-out';
        }
      );
      expect(test[0].options.easing).not.toBe('linear');
      expect(test[0].options.easing).toBe('ease-in-out');
    });

    it('sets option property to value in config if options object exists, expected property has a value but is not a css variable', () => {
      const editMock = clone(mockTargetedAnimation);
      editMock[0].options.duration = 750;
      editMock[0].options.easing = 'ease-out';
      let test = setAnimationProperty('duration', (testDiv as unknown) as AnimatableElement, editMock, 500);
      test = setAnimationProperty('easing', (testDiv as unknown) as AnimatableElement, editMock, 'linear', val => {
        return val + '-in';
      });
      expect(test[0].options.duration).not.toBe(500);
      expect(test[0].options.duration).toBe(750);
      expect(test[0].options.easing).not.toBe('linear');
      expect(test[0].options.easing).not.toBe('ease-out-in', 'ignores value converter if not a css property');
      expect(test[0].options.easing).toBe('ease-out');
    });

    it('creates animation config object and sets it to the static fallback if no animation config exists and, thus, no expected property value is present', () => {
      const test = setAnimationProperty(
        'easing',
        (testDiv as unknown) as AnimatableElement,
        clone(noConfig),
        'linear',
        val => {
          return val + '-in';
        }
      );
      expect(test[0].options.easing).toBe('linear');
      expect(test[0].options.easing).not.toBe('linear-in', 'ignores value converter');
    });

    it('handles empty animation config', () => {
      const empty: TargetedAnimation[] = [];
      const test = setAnimationProperty('easing', (testDiv as unknown) as AnimatableElement, empty, 'linear', val => {
        return val + '-in';
      });
      expect(test).toEqual([]);
    });
  });

  describe('filterAnimationsByUpdatedProperties() ', () => {
    it('filters property animations by updated props', () => {
      const updatedProperties: PropMap = new Map([
        ['status', 'error' as any],
        ['isValid', false as any],
      ]);

      const filteredAnims = filterAnimationsByUpdatedProperties(mockPropertyAnimation, updatedProperties);

      expect(!!filteredAnims.status).toBe(true);
      expect(!!filteredAnims.isValid).toBe(true);
      expect(!!filteredAnims.hidden).toBe(false);
    });
    it('returns null if no property animations match updated props', () => {
      const updatedProperties: PropMap = new Map([['ohai', 'howdy' as any]]);

      const filteredAnims = filterAnimationsByUpdatedProperties(mockPropertyAnimation, updatedProperties);

      expect(filteredAnims).toBeNull();
    });
    it('returns null if no property animations are nil or empty', () => {
      const updatedProperties: PropMap = new Map([['ohai', 'howdy' as any]]);

      const nullAnims = filterAnimationsByUpdatedProperties(null, updatedProperties);
      const undefinedAnims = filterAnimationsByUpdatedProperties(void 0, updatedProperties);
      const emptyAnims = filterAnimationsByUpdatedProperties({}, updatedProperties);

      expect(nullAnims).toBeNull();
      expect(undefinedAnims).toBeNull();
      expect(emptyAnims).toBeNull();
    });
  });

  describe('getPropertyAnimations() ', () => {
    const updatedProperties: PropMap = new Map([
      ['status', 'error' as any],
      ['isValid', false as any],
    ]);

    it('returns property animations filtered by updated props', () => {
      getPropertyAnimations(mockPropertyAnimation, updatedProperties).forEach(a => {
        expect(a[0] === 'status' || a[0] === 'isValid').toBe(true);
        expect(a[0] === 'hidden').toBe(false);
      });
    });
    it('returns empty array if animations are nil', () => {
      const testNull = getPropertyAnimations(null, updatedProperties);
      const testUndefined = getPropertyAnimations(void 0, updatedProperties);
      expect(testNull).toEqual([]);
      expect(testUndefined).toEqual([]);
    });
    it('returns empty array if animations are empty', () => {
      const testEmpty = getPropertyAnimations({}, updatedProperties);
      expect(testEmpty).toEqual([]);
    });
  });

  describe('getHidingAndNonHidingPropertyAnimations() ', () => {
    it('returns tuple of property animations categorized by hiding vs. not hiding', () => {
      const [hiding, other] = getHidingAndNonHidingPropertyAnimations(mockPropertyAnimation);
      expect(hiding.length === 1).toBe(true);
      expect(hiding[0][0]).toBe('hidden');
      expect(other.length === 2).toBe(true);
      expect(other[0][0] === 'isValid' || other[0][0] === 'status').toBe(true);
      expect(other[1][0] === 'isValid' || other[1][0] === 'status').toBe(true);
    });
    it('returns empty array as first element if no hiding animations are defined', () => {
      const [hiding, other] = getHidingAndNonHidingPropertyAnimations({ status: { error: 'error-animation' } });
      expect(hiding.length === 0).toBe(true);
      expect(other.length === 1).toBe(true);
      expect(other[0][0] === 'status').toBe(true);
    });
    it('returns empty array as   element if only hiding animations are defined', () => {
      const [hiding, other] = getHidingAndNonHidingPropertyAnimations({ hidden: { true: 'fade-animation' } });
      expect(hiding.length === 1).toBe(true);
      expect(hiding[0][0] === 'hidden').toBe(true);
      expect(other.length === 0).toBe(true);
    });
    it('returns empty tuple if passed nil or empty properties', () => {
      const testNull = getHidingAndNonHidingPropertyAnimations(null);
      const testUndefined = getHidingAndNonHidingPropertyAnimations(void 0);
      const testEmpty = getHidingAndNonHidingPropertyAnimations({});
      expect(testNull).toEqual([[], []]);
      expect(testUndefined).toEqual([[], []]);
      expect(testEmpty).toEqual([[], []]);
    });
  });

  describe('flattenAndSortAnimations() ', () => {
    const hidingAndOtherTuple = getHidingAndNonHidingPropertyAnimations(mockPropertyAnimation);

    it('puts hiding animations last if hiding', () => {
      const flatAnimations = flattenAndSortAnimations(hidingAndOtherTuple, true);
      expect(flatAnimations[0][0]).not.toBe('hidden');
      expect(flatAnimations[flatAnimations.length - 1][0]).toBe('hidden');
    });
    it('puts hiding animations first if showing', () => {
      const flatAnimations = flattenAndSortAnimations(hidingAndOtherTuple, false);
      expect(flatAnimations[0][0]).toBe('hidden');
      expect(flatAnimations[flatAnimations.length - 1][0]).not.toBe('hidden');
    });
    it('returns only non-hiding animations if those are the only ones defined', () => {
      const flatAnimations = flattenAndSortAnimations(
        [
          [],
          [
            [
              'status',
              {
                error: 'error-animation',
              },
            ],
          ],
        ],
        true
      );
      expect(flatAnimations[0][0]).toBe('status');
      expect(flatAnimations.length === 1).toBe(true);
    });
    it('returns only hiding animations if those are the only ones defined', () => {
      const flatAnimations = flattenAndSortAnimations(
        [
          [
            [
              'hidden',
              {
                true: 'show-animation',
              },
            ],
          ],
          [],
        ],
        false
      );
      expect(flatAnimations[0][0]).toBe('hidden');
      expect(flatAnimations.length === 1).toBe(true);
    });
    it('returns empty array if passed an empty or nil tuple', () => {
      const testNull = flattenAndSortAnimations(null, false);
      const testUndefined = flattenAndSortAnimations(undefined, false);
      const testEmpty = flattenAndSortAnimations([[], []], false);
      expect(testNull).toEqual([]);
      expect(testUndefined).toEqual([]);
      expect(testEmpty).toEqual([]);
    });
  });

  describe('sizeDimensionKeyframes() ', () => {
    let testElement: HTMLElement;
    let nopeElement: HTMLElement;

    beforeEach(async () => {
      testElement = await createTestElement(html`<div class="test" style="width: 100px; height: 80px">ohai</div>`);
      nopeElement = await createTestElement(html`<div class="nope" style="width: 100px; height: 80px">ohai</div>`);
    });

    afterEach(() => {
      removeTestElement(testElement);
      removeTestElement(nopeElement);
    });

    it('passes keyframes through if no height/width specified', () => {
      const keyframes = [{ opacity: 0 }, { opacity: 1 }];
      const modifiedKeyframes = sizeDimensionKeyframes(keyframes, document.body);
      expect(modifiedKeyframes).toEqual(keyframes);
    });

    it('returns property indexed keyframes if passed them instead of an array of keyframes', () => {
      const pIkeyframes = { transform: ['rotate(0deg)', 'rotate(360deg)'] };
      const modifiedKeyframes = sizeDimensionKeyframes(pIkeyframes, document.body);
      expect(modifiedKeyframes).toEqual(pIkeyframes);
    });

    it('passes keyframes through if they only have normal heights', () => {
      const keyframes = [
        { opacity: 0, height: '0' },
        { opacity: 1, height: '800px' },
      ];
      const modifiedKeyframes = sizeDimensionKeyframes(keyframes, document.body);
      expect(modifiedKeyframes).toEqual(keyframes);
    });

    it('passes keyframes through if they only have normal widths', () => {
      const keyframes = [
        { opacity: 0, width: '0' },
        { opacity: 1, width: '800px' },
      ];
      const modifiedKeyframes = sizeDimensionKeyframes(keyframes, document.body);
      expect(modifiedKeyframes).toEqual(keyframes);
    });

    it('updates heights in keyframes that ask for lookups', () => {
      const keyframes = [
        { opacity: 0, height: '0' },
        { opacity: 1, height: 'from:.test' },
      ];
      const modifiedKeyframes = sizeDimensionKeyframes(keyframes, testElement) as Keyframe[];
      expect(modifiedKeyframes[0]).toEqual({ opacity: 0, height: '0' });
      expect(modifiedKeyframes[1]).toEqual({ opacity: 1, height: '80px' });
    });

    it('updates widths in keyframes that ask for lookups', () => {
      const keyframes = [
        { opacity: 0, width: '0' },
        { opacity: 1, width: 'from:.test' },
      ];
      const modifiedKeyframes = sizeDimensionKeyframes(keyframes, testElement) as Keyframe[];
      expect(modifiedKeyframes[0]).toEqual({ opacity: 0, width: '0' });
      expect(modifiedKeyframes[1]).toEqual({ opacity: 1, width: '100px' });
    });

    it('sets height to auto in keyframes where the lookup fails', () => {
      const keyframes = [
        { opacity: 0, height: '0' },
        { opacity: 1, height: 'from:.test' },
      ];
      const modifiedKeyframes = sizeDimensionKeyframes(keyframes, nopeElement) as Keyframe[];
      expect(modifiedKeyframes[0]).toEqual({ opacity: 0, height: '0' });
      expect(modifiedKeyframes[1]).toEqual({ opacity: 1, height: 'auto' });
      expect(modifiedKeyframes[1]).not.toEqual({ opacity: 1, height: '100px' });
    });

    it('sets width to auto in keyframes where the lookup fails', () => {
      const keyframes = [
        { opacity: 0, width: '0' },
        { opacity: 1, width: 'from:.test' },
      ];
      const modifiedKeyframes = sizeDimensionKeyframes(keyframes, nopeElement) as Keyframe[];
      expect(modifiedKeyframes[0]).toEqual({ opacity: 0, width: '0' });
      expect(modifiedKeyframes[1]).toEqual({ opacity: 1, width: 'auto' });
      expect(modifiedKeyframes[1]).not.toEqual({ opacity: 1, width: '100px' });
    });
  });

  describe('getInlineOverride() ', () => {
    const testCdsMotionOverride = '{ "ohai": { "kthxbye": "good-bye", "false": "false-bye", "null": "hello-null" }}';

    it('returns null if cdsMotionValue is falsy', () => {
      expect(getInlineOverride(null, 'ohai', 'kthxbye')).toBe('', 'testing null');
      expect(getInlineOverride(void 0, 'ohai', 'kthxbye')).toBe('', 'testing undefined');
    });

    it('returns null if cdsMotionValue cannot be parsed into JSON', () => {
      expect(getInlineOverride('() => { return "very bad"; }', 'ohai', 'kthxbye')).toBe('');
    });

    it('returns null if property name cannot be found in parsed cdsMotionValue JSON', () => {
      expect(getInlineOverride(testCdsMotionOverride, 'kknull', 'jabberwocky')).toBe('');
    });

    it('returns null if property value cannot be found in parsed cdsMotionValue JSON', () => {
      expect(getInlineOverride(testCdsMotionOverride, 'ohai', 'jabberwocky')).toBe('');
    });

    it('returns name of override as expected if property name and value is found in parsed cdsMotionValue JSON', () => {
      expect(getInlineOverride(testCdsMotionOverride, 'ohai', 'kthxbye')).toBe('good-bye');
    });

    it('returns null if property name is falsy', () => {
      expect(getInlineOverride(testCdsMotionOverride, '', 'kthxbye')).toBe('', 'testing empty string');
      expect(getInlineOverride(testCdsMotionOverride, null, 'kthxbye')).toBe('', 'testing null');
      expect(getInlineOverride(testCdsMotionOverride, void 0, 'kthxbye')).toBe('', 'testing undefined');
    });

    it('returns null if property value is "undefined"', () => {
      expect(getInlineOverride(testCdsMotionOverride, 'ohai', '')).toBe('', 'testing empty string');
      expect(getInlineOverride(testCdsMotionOverride, 'ohai', void 0)).toBe('', 'testing undefined');
    });

    it('returns as expected for falsy property values that are not "undefined"', () => {
      expect(getInlineOverride(testCdsMotionOverride, 'ohai', 'false')).toBe('false-bye');
      expect(getInlineOverride(testCdsMotionOverride, 'ohai', 'null')).toBe('hello-null');
    });
  });

  describe('extractAnimationNameIfReversed() ', () => {
    it('returns animation name without "-reverse" as expected', () => {
      expect(extractAnimationNameIfReversed('ohai-reverse')).toBe('ohai');
      expect(extractAnimationNameIfReversed('ohai-reversed')).toBe(
        'ohai-reversed',
        'does not fall for unspecific suffix'
      );
    });

    it('returns animation name if not reversed', () => {
      expect(extractAnimationNameIfReversed('ohai')).toBe('ohai');
    });
  });

  describe('getAnimationFromOverrideOrDecorator() ', () => {
    const getOverrideTester = [
      {
        target: '.ohai',
        animation: [{ opacity: 0 }, { opacity: 1 }],
        options: {
          duration: 1200,
          easing: 'ease-in',
        },
      },
    ];

    beforeAll(() => {
      ClarityMotion.add('from-override', getOverrideTester);
    });

    it('returns from decorator if there is no override', () => {
      expect(getAnimationFromOverrideOrDecorator('from-decorator', null)).toBe('from-decorator', 'null');
      expect(getAnimationFromOverrideOrDecorator('from-decorator')).toBe('from-decorator', 'undefined');
      expect(getAnimationFromOverrideOrDecorator('from-decorator', '')).toBe('from-decorator', 'empty string');
    });

    it('returns from override if it exists in ClarityMotion', () => {
      expect(getAnimationFromOverrideOrDecorator('from-decorator', 'from-override')).toBe('from-override');
    });

    it('returns from decorator if override does not exist in ClarityMotion', () => {
      expect(getAnimationFromOverrideOrDecorator('from-decorator', 'from-parts-unknown')).toBe('from-decorator');
    });

    it('returns from override if override is reversed and exists in ClarityMotion', () => {
      expect(getAnimationFromOverrideOrDecorator('from-decorator', 'from-override-reverse')).toBe(
        'from-override-reverse'
      );
    });
  });

  describe('extractAnimationNameIfReversed() ', () => {
    it('returns animation name without "-reverse" as expected', () => {
      expect(extractAnimationNameIfReversed('ohai-reverse')).toBe('ohai');
      expect(extractAnimationNameIfReversed('ohai-reversed')).toBe(
        'ohai-reversed',
        'does not fall for unspecific suffix'
      );
    });

    it('returns animation name if not reversed', () => {
      expect(extractAnimationNameIfReversed('ohai')).toBe('ohai');
    });
  });

  describe('animation start and end helpers:  ', () => {
    let eventRan = false;
    let eventMsg = '';

    const mockHostEl = (({
      '_cds-animation-status': '',
      getAttribute: function () {
        return this['_cds-animation-status'];
      },
      setAttribute: function (attr: string, val: string) {
        if (attr) {
          this['_cds-animation-status'] = val;
        }
      },
      cdsMotionChange: {
        emit: function (msg: string) {
          eventRan = true;
          eventMsg = msg;
        },
      },
    } as { '_cds-animation-status': string }) as unknown) as AnimatableElement;

    beforeEach(() => {
      mockHostEl['_cds-animation-status'] = '';
      eventRan = false;
      eventMsg = '';
    });

    describe('setAnimationStartStatus() ', () => {
      it('skip if super secret "_cds-animation-status" is "active"', () => {
        mockHostEl['_cds-animation-status'] = AnimationStatus.active;
        expect(mockHostEl['_cds-animation-status']).toBe(AnimationStatus.active);
        setAnimationStartStatus('ohai', mockHostEl);
        expect(eventRan).toBe(false);
        expect(eventMsg).toBe('');
      });

      it('sets super secret "_cds-animation-status" to "active" and emits motion change event as expected', () => {
        const testAnimationName = 'ohai';
        expect(mockHostEl['_cds-animation-status']).not.toBe(AnimationStatus.active);
        setAnimationStartStatus(testAnimationName, mockHostEl);
        expect(eventRan).toBe(true);
        expect(eventMsg).toContain(testAnimationName);
        expect(eventMsg).toContain(AnimationStatus.start);
      });
    });

    describe('resolveAnimationEndStatus() ', () => {
      it('sets super secret "_cds-animation-status" to "ready" and emits motion change event as expected', () => {
        const testAnimationName = 'kthxbye';
        resolveAnimationEndStatus(testAnimationName, mockHostEl);
        expect(eventRan).toBe(true);
        expect(eventMsg).toContain(testAnimationName);
        expect(eventMsg).toContain(AnimationStatus.end);
      });
    });
  });

  describe('setAnimationConfigOptions()', () => {
    const mockTargetedAnimationNoCssVars: TargetedAnimation[] = [
      {
        target: '.test',
        animation: [{ opacity: 0 }, { opacity: 1 }],
        options: {
          easing: 'linear',
          duration: 2000,
        },
      },
    ];

    const mockTargetedAnimationWithCssVars: TargetedAnimation[] = [
      {
        target: '.test',
        animation: [{ opacity: 0 }, { opacity: 1 }],
        options: {
          easing: '--animation-easing',
          duration: '--animation-duration',
        },
      },
    ];

    const testEasingProperty = 'ease-in-out';
    const testDurationProperty = '0.5s';

    let testElement: HTMLElement;
    let testElementWithVars: HTMLElement;

    beforeEach(async () => {
      testElement = await createTestElement(html`<div class="test">ohai</div>`);
      testElementWithVars = await createTestElement(html`<div class="test">ohai</div>`);
    });

    afterEach(() => {
      removeTestElement(testElement);
      removeTestElement(testElementWithVars);
    });

    it('adds reverse direction if animation is reversed', () => {
      const myTestEl = (testElement as unknown) as AnimatableElement;
      myTestEl.cdsMotion = 'on';
      const testConfig = setAnimationConfigOptions(
        `ohai${CLARITY_MOTION_REVERSE_ANIMATION_SUFFIX}`,
        clone(mockTargetedAnimationNoCssVars),
        myTestEl
      );
      expect(testConfig[0]?.options?.direction === 'reverse').toBe(true);
    });

    it('zeroes animation out if animations are turned off', () => {
      const myTestEl = (testElement as unknown) as AnimatableElement;
      myTestEl.cdsMotion = 'off';
      const testConfig = setAnimationConfigOptions('ohai', clone(mockTargetedAnimationNoCssVars), myTestEl);
      expect(testConfig[0]?.options?.duration === 0).toBe(true);
    });

    it('zeroes animation out if cds-motion is not defined', () => {
      const myTestEl = (testElement as unknown) as AnimatableElement;
      expect(myTestEl.cdsMotion).toBeUndefined('cdsMotion is not defined');
      const testConfig = setAnimationConfigOptions('ohai', clone(mockTargetedAnimationNoCssVars), myTestEl);
      expect(testConfig[0]?.options?.duration === 0).toBe(true);
    });

    it('sets animation to defined duration and easing', () => {
      const myTestEl = (testElement as unknown) as AnimatableElement;
      myTestEl.cdsMotion = 'on';
      const testConfig = setAnimationConfigOptions('ohai', clone(mockTargetedAnimationNoCssVars), myTestEl);
      expect(testConfig[0]?.options?.duration === 2000).toBe(true);
      expect(testConfig[0]?.options?.easing === 'linear').toBe(true);
    });

    it('sets animation to defaults if CSS vars are not defined', () => {
      const myTestEl = (testElement as unknown) as AnimatableElement;
      myTestEl.cdsMotion = 'on';
      const testConfig = setAnimationConfigOptions('ohai', clone(mockTargetedAnimationWithCssVars), myTestEl);
      expect(testConfig[0]?.options?.duration).toBe(CLARITY_MOTION_FALLBACK_DURATION_IN_MS);
      expect(testConfig[0]?.options?.easing).toBe(CLARITY_MOTION_FALLBACK_EASING);
    });

    it('overrides animation defaults with CSS vars if vars are defined', () => {
      const myTestEl = (testElementWithVars as unknown) as AnimatableElement;
      myTestEl.style.setProperty('--animation-duration', testDurationProperty);
      myTestEl.style.setProperty('--animation-easing', testEasingProperty);
      myTestEl.cdsMotion = 'on';
      const testConfig = setAnimationConfigOptions('ohai', clone(mockTargetedAnimationWithCssVars), myTestEl);
      expect(testConfig[0]?.options?.easing).toBe(testEasingProperty);
    });
  });

  describe('getAnimationTarget()', () => {
    let testElement: HTMLElement;

    beforeEach(async () => {
      testElement = await createTestElement(html`<div class="test">ohai</div>`);
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('returns the host element if the target config is nil', () => {
      const testme = getAnimationTarget(testElement);
      expect(testme).toBe(testElement);
    });

    it('returns the host element if the target config selector finds no element', () => {
      const testme = getAnimationTarget(testElement, '.nope');
      expect(testme).toBe(testElement);
    });

    it('returns child element if the target config selector finds an element', () => {
      const testme = getAnimationTarget(testElement, '.test');
      expect(testme).toBe(testElement.querySelector('.test'));
    });
  });

  describe('getAnimationKeyframesOrPropertyIndexedFrames()', () => {
    let testElement: HTMLElement;

    beforeEach(async () => {
      testElement = await createTestElement(
        html`<div class="test" style="width: 400px"><div style="height: 180px" inner-test>ohai</div></div>`
      );
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should let property indexed keyframes through with no changes', () => {
      const testme = getAnimationKeyframesOrPropertyIndexedFrames({ opacity: [0, 1] }, testElement);
      expect((testme as PropertyIndexedKeyframes).opacity).toEqual([0, 1]);
    });

    it('should allow Keyframes array to pass if no sizing is needed', () => {
      const testme = getAnimationKeyframesOrPropertyIndexedFrames(
        [
          { opacity: 0, width: '0' },
          { opacity: 1, width: '366px' },
        ],
        testElement
      );
      expect(testme.length).toBe(2);
      expect((testme as Keyframe[])[0]).toEqual({ opacity: 0, width: '0' });
      expect((testme as Keyframe[])[1]).toEqual({ opacity: 1, width: '366px' });
    });

    it('should allow resize dimensions in Keyframes if sizing is indicated', () => {
      const testme = getAnimationKeyframesOrPropertyIndexedFrames(
        [
          { opacity: 0, width: '0', height: '0' },
          { opacity: 1, width: 'from:.test', height: 'from:[inner-test]' },
        ],
        testElement
      );
      expect(testme.length).toBe(2);
      expect((testme as Keyframe[])[1].width).toBe('400px');
      expect((testme as Keyframe[])[1].height).toBe('180px');
    });
  });

  describe('getAnimationPromiseInstructions()', () => {
    let testElement: HTMLElement;
    let component: TestAnimateUtilsElement;

    beforeEach(async () => {
      testElement = await createTestElement(
        html`<test-animate-utils-element
          ><div class="test" style="width: 400px">
            <div style="height: 180px" inner-test>ohai</div>
          </div></test-animate-utils-element
        >`
      );
      component = testElement.querySelector<TestAnimateUtilsElement & AnimatableElement>('test-animate-utils-element');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should return an array of promises', () => {
      const arrayOfConfigs = [
        {
          target: '.test',
          animation: [{ opacity: 0 }, { opacity: 1 }],
          options: {
            duration: 350,
            easing: 'ease-out',
          },
        },
        {
          target: '.inner-test',
          animation: [{ opacity: 0 }, { opacity: 1 }],
          options: {
            duration: 350,
            easing: 'ease-out',
          },
        },
      ];

      const expected = getAnimationPromiseInstructions(
        'test',
        arrayOfConfigs,
        (component as unknown) as AnimatableElement
      );
      expect(expected.length).toBe(2);
      expect(expected.toString()).toBe('[object Promise],[object Promise]'); // typeof was no help with this!
    });

    it('should filter out configs with an "onlyIf" that fails, pt. 1', () => {
      const arrayOfConfigs = [
        {
          target: '.test',
          animation: [{ opacity: 0 }, { opacity: 1 }],
          options: {
            duration: 350,
            easing: 'ease-out',
          },
        },
        {
          target: '.inner-test',
          animation: [{ opacity: 0 }, { opacity: 1 }],
          options: {
            duration: 350,
            easing: 'ease-out',
          },
        },
        {
          target: '.inner-test',
          onlyIf: 'everythingIsFine:true',
          animation: [{ opacity: 0 }, { opacity: 1 }],
          options: {
            duration: 350,
            easing: 'ease-out',
          },
        },
      ];

      const expected = getAnimationPromiseInstructions(
        'test',
        arrayOfConfigs,
        (component as unknown) as AnimatableElement
      );
      expect(expected.length).toBe(2, '3 configs passed, 1 has an onlyIf that fails');
    });

    it('should filter out configs with an "onlyIf" that fails, pt. 1', () => {
      const arrayOfConfigs = [
        {
          target: '.test',
          onlyIf: 'everythingIsFine:true',
          animation: [{ opacity: 0 }, { opacity: 1 }],
          options: {
            duration: 350,
            easing: 'ease-out',
          },
        },
        {
          target: '.inner-test',
          onlyIf: 'everythingIsFine:true',
          animation: [{ opacity: 0 }, { opacity: 1 }],
          options: {
            duration: 350,
            easing: 'ease-out',
          },
        },
        {
          target: '.inner-test',
          onlyIf: 'everythingIsFine:true',
          animation: [{ opacity: 0 }, { opacity: 1 }],
          options: {
            duration: 350,
            easing: 'ease-out',
          },
        },
      ];

      const expected = getAnimationPromiseInstructions(
        'test',
        arrayOfConfigs,
        (component as unknown) as AnimatableElement
      );
      expect(expected.length).toBe(0, 'no configs passed');
    });

    it('should include configs with on "onlyIf" that passes', async () => {
      const arrayOfConfigs = [
        {
          target: '.test',
          onlyIf: 'everythingIsFine:true',
          animation: [{ opacity: 0 }, { opacity: 1 }],
          options: {
            duration: 350,
            easing: 'ease-out',
          },
        },
        {
          target: '.test',
          animation: [{ opacity: 0 }, { opacity: 1 }],
          options: {
            duration: 350,
            easing: 'ease-out',
          },
        },
        {
          target: '.inner-test',
          onlyIf: 'everythingIsFine:false',
          animation: [{ opacity: 0 }, { opacity: 1 }],
          options: {
            duration: 350,
            easing: 'ease-out',
          },
        },
        {
          target: '.inner-test',
          onlyIf: 'everythingIsFine:false',
          animation: [{ opacity: 0 }, { opacity: 1 }],
          options: {
            duration: 350,
            easing: 'ease-out',
          },
        },
      ];

      component.everythingIsFine = true;
      await componentIsStable(component);

      const expected = getAnimationPromiseInstructions(
        'test',
        arrayOfConfigs,
        (component as unknown) as AnimatableElement
      );
      expect(expected.length).toBe(2, 'one config passed, one config has no onlyIf defined so allowed through');
    });
  });
});

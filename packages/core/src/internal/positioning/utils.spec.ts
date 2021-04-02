/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import {
  checkNextPosition,
  getBestPositionForPreferences,
  getCrossAxisOrderOfPreference,
  getCrossAxisPosition,
  getMainAxisPosition,
  getMainAxisPositionOrViolation,
  getNextDefaultPosition,
  getNextPosition,
  getOrientationTuple,
  getPointerAlignment,
  getPointerPosition,
  getPopupOffsetOrDefaultOffsets,
  getPopupPosition,
  getPositionConfig,
  getPositions,
  setPopupPosition,
  testCrossAxisPosition,
  testMainAxisPosition,
} from './utils.js';
import { PositionConfig, PositionObj, PositionObjOrNot, Positions, WindowDims } from './interfaces.js';
import { CdsInternalPointer } from '../../internal-components/popup/pointer.element.js';
import { CdsInternalPopup } from '../../internal-components/popup/popup.element.js';
import { getWindowDimensions } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import '@cds/core/internal-components/popup/register.js';

function createPositionMock(...crossAxisPositions: ([number, number] | false)[]) {
  return crossAxisPositions.map(pos => {
    if (pos === false) {
      return false;
    }
    const [topPos, leftPos] = pos;

    return { popup: { top: topPos, left: leftPos } };
  });
}

function createPopupContent() {
  return html`<div style="height: 100px; width: 100px; overflow: hidden"><span>I am a popup.</span></div>`;
}
@customElement('positioning-utils-test-popup')
class PositioningUtilsTestPopup extends LitElement {
  render() {
    return html` <cds-internal-popup>${createPopupContent()}</cds-internal-popup>`;
  }
}

@customElement('positioning-utils-test-popup-with-pointer')
class PositioningUtilsTestPopupWithPointer extends LitElement {
  pointerType: 'default' | 'angle' = 'angle';
  render() {
    return html` <cds-internal-popup>
      <cds-internal-pointer type=${this.pointerType}></cds-internal-pointer>
      ${createPopupContent()}
    </cds-internal-popup>`;
  }
}

describe('Positioning: ', () => {
  describe('getPopupPosition(): ', () => {
    let testElement: HTMLElement;
    let testPopup: HTMLElement;
    let testAnchor: HTMLElement;

    beforeEach(async () => {
      const anchorId = 'testAnchor';
      const popupId = 'testPopup';
      testElement = await createTestElement(
        html`<div id="${anchorId}" style="height: 50px; width: 50px;">ohai</div>
          <div style="width: 100px; height: 100px" id="${popupId}">kthxbye</div>`
      );
      testAnchor = document.getElementById(anchorId);
      testPopup = document.getElementById(popupId);
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('returns false with bad data', () => {
      expect(getPopupPosition('', void 0, 'start', null, 'start', testPopup, 0, 0)).toBe(false, 'if no anchor');
      expect(getPopupPosition('', null, 'start', null, 'start', testPopup, 0, 0)).toBe(false, 'if anchor not found');
    });

    it('returns a position as expected', () => {
      // high-level happy path integration test
      const testMe = getPopupPosition(
        'bottom',
        testAnchor.getBoundingClientRect(),
        'start',
        null,
        'start',
        testPopup,
        0,
        0
      );
      expect((testMe as PositionObj).popup).toBeDefined('returns popup coords');
      expect((testMe as PositionObj).pointer).toBeDefined('returns pointer coords');
    });
  });

  describe('getBestPositionForPreferences(): ', () => {
    const mockPositionConfig = {
      top: createPositionMock([400, 400], false, [444, 444]),
      bottom: createPositionMock(false, [110, 110], [111, 111]),
      left: createPositionMock([300, 300], false, false),
      right: createPositionMock([200, 200], [220, 220], false),
    } as PositionConfig;

    it('returns first good position per user prefs', () => {
      const topWontWork = Object.assign({}, mockPositionConfig, { top: false }) as PositionConfig;
      const testUserPrefs = [Positions.Top, Positions.Left];
      const testDefaultPrefs = Positions.All - Positions.TopOrLeft;

      const testMe = getBestPositionForPreferences(
        mockPositionConfig,
        [testUserPrefs, testDefaultPrefs],
        'start'
      ) as PositionObj;
      const testMeWithoutTop = getBestPositionForPreferences(
        topWontWork,
        [testUserPrefs, testDefaultPrefs],
        'start'
      ) as PositionObj;

      expect(testMe.popup.top).toBe(400, 'returns top');
      expect(testMe.popup.left).toBe(400, 'returns left');
      expect(testMeWithoutTop.popup.top).toBe(300, 'returns top location with top orientation excluded');
      expect(testMeWithoutTop.popup.top).toBe(300, 'returns left location with top orientation excluded');
    });

    it('returns first good position per default prefs', () => {
      const testMe = getBestPositionForPreferences(mockPositionConfig, [[], Positions.All], 'end') as PositionObj;
      expect(testMe.popup).toEqual({ top: 111, left: 111 });
    });

    it('returns good position with anchor prefs if it can', () => {
      const testMe = getBestPositionForPreferences(
        mockPositionConfig,
        [[Positions.Top], Positions.All - Positions.Top],
        'end'
      ) as PositionObj;
      expect(testMe.popup).toEqual({ top: 444, left: 444 });
    });

    it('returns responsive(false) if it is a user pref', () => {
      const testMe = getBestPositionForPreferences(
        mockPositionConfig,
        [[Positions.Responsive], Positions.All],
        'start'
      ) as PositionObjOrNot;
      expect(testMe).toBe(false);
    });

    it('returns responsive(false) if there are no good positions', () => {
      const testMe = getBestPositionForPreferences(mockPositionConfig, [[], 0], 'start') as PositionObjOrNot;
      expect(testMe).toBe(false);
    });
  });

  describe('getNextPosition(): ', () => {
    it('returns first user pref as expected', () => {
      expect(getNextPosition([Positions.Top], Positions.All - Positions.Top)).toEqual(
        [Positions.Top, [], Positions.All - Positions.Top],
        '1 of 2'
      );
      expect(getNextPosition([Positions.Left, Positions.Right], Positions.All - Positions.Horizontal)).toEqual(
        [Positions.Left, [Positions.Right], Positions.All - Positions.Horizontal],
        '2 of 2'
      );
    });

    it('returns first default pref if no user prefs are present', () => {
      expect(getNextPosition([], Positions.All - Positions.Bottom)).toEqual([
        Positions.Right,
        [],
        Positions.All - Positions.BottomOrRight,
      ]);
    });

    it('returns responsive if asked to', () => {
      expect(getNextPosition([], Positions.Responsive)).toEqual(
        [Positions.Responsive, [], Positions.Responsive],
        'responsive as fallthrough'
      );
      expect(getNextPosition([Positions.Responsive], Positions.All)).toEqual(
        [Positions.Responsive, [], Positions.Responsive],
        'responsive as user pref'
      );
    });
  });

  describe('getNextDefaultPosition(): ', () => {
    it('returns as expected', () => {
      expect(getNextDefaultPosition(Positions.Top)).toEqual(
        [Positions.Top, Positions.Top - Positions.Top],
        'returns top as expected'
      );
      expect(getNextDefaultPosition(Positions.Vertical)).toEqual(
        [Positions.Bottom, Positions.Vertical - Positions.Bottom],
        'returns bottom as expected'
      );
      expect(getNextDefaultPosition(Positions.TopOrLeft)).toEqual(
        [Positions.Left, Positions.TopOrLeft - Positions.Left],
        'returns left as expected'
      );
      expect(getNextDefaultPosition(Positions.Horizontal)).toEqual(
        [Positions.Right, Positions.Horizontal - Positions.Right],
        'returns left as expected'
      );
      expect(getNextDefaultPosition(Positions.Responsive)).toEqual(
        [Positions.Responsive, Positions.Responsive],
        'returns responsive as expected'
      );
    });

    it('fallsthrough to responsive', () => {
      expect(getNextDefaultPosition(-1)).toEqual(
        [Positions.Responsive, Positions.Responsive],
        'returns responsive if bad data'
      );
    });
  });

  describe('checkNextPosition(): ', () => {
    const fullFalseConfig = {
      top: false,
      bottom: false,
      left: false,
      right: false,
    };

    it('returns false if position collection is false', () => {
      expect(checkNextPosition(Positions.Top, false, 'start')).toBe(false);
    });

    it('returns indexed positions as expected', () => {
      expect(
        checkNextPosition(
          Positions.Top,
          Object.assign({}, fullFalseConfig, { top: [false, { top: 100, left: 100 }, false] }) as PositionConfig,
          'mid'
        )
      ).toEqual(({ top: 100, left: 100 } as unknown) as PositionObj, 'top works');
      expect(
        checkNextPosition(
          Positions.Bottom,
          Object.assign({}, fullFalseConfig, { bottom: [false, false, { top: 200, left: 200 }] }) as PositionConfig,
          'end'
        )
      ).toEqual(({ top: 200, left: 200 } as unknown) as PositionObj, 'bottom works');
      expect(
        checkNextPosition(
          Positions.Left,
          Object.assign({}, fullFalseConfig, { left: [{ top: 300, left: 300 }, false, false] }) as PositionConfig,
          'start'
        )
      ).toEqual(({ top: 300, left: 300 } as unknown) as PositionObj, 'left works');
      expect(
        checkNextPosition(
          Positions.Right,
          Object.assign({}, fullFalseConfig, { right: [{ top: 400, left: 400 }, false, false] }) as PositionConfig,
          'start'
        )
      ).toEqual(({ top: 400, left: 400 } as unknown) as PositionObj, 'right works');
    });

    it('cascades through position results as expected', () => {
      expect(
        checkNextPosition(
          Positions.Right,
          Object.assign({}, fullFalseConfig, { right: [false, { top: 400, left: 400 }, false] }) as PositionConfig,
          'start'
        )
      ).toEqual(({ top: 400, left: 400 } as unknown) as PositionObj, 'start cascades to mid');
      expect(
        checkNextPosition(
          Positions.Right,
          Object.assign({}, fullFalseConfig, { right: [false, false, { top: 400, left: 400 }] }) as PositionConfig,
          'start'
        )
      ).toEqual(({ top: 400, left: 400 } as unknown) as PositionObj, 'start falls through to end');

      expect(
        checkNextPosition(
          Positions.Right,
          Object.assign({}, fullFalseConfig, { right: [{ top: 400, left: 400 }, false, false] }) as PositionConfig,
          'mid'
        )
      ).toEqual(({ top: 400, left: 400 } as unknown) as PositionObj, 'mid cascades to start');
      expect(
        checkNextPosition(
          Positions.Right,
          Object.assign({}, fullFalseConfig, { right: [false, false, { top: 400, left: 400 }] }) as PositionConfig,
          'mid'
        )
      ).toEqual(({ top: 400, left: 400 } as unknown) as PositionObj, 'mid falls through to end');

      expect(
        checkNextPosition(
          Positions.Right,
          Object.assign({}, fullFalseConfig, { right: [false, { top: 400, left: 400 }, false] }) as PositionConfig,
          'end'
        )
      ).toEqual(({ top: 400, left: 400 } as unknown) as PositionObj, 'end cascades to mid');
      expect(
        checkNextPosition(
          Positions.Right,
          Object.assign({}, fullFalseConfig, { right: [{ top: 400, left: 400 }, false, false] }) as PositionConfig,
          'end'
        )
      ).toEqual(({ top: 400, left: 400 } as unknown) as PositionObj, 'end falls through to start');
    });

    it('returns false if all positions are false', () => {
      expect(checkNextPosition(Positions.Bottom, Object.assign({}, fullFalseConfig) as PositionConfig, 'start')).toBe(
        (false as unknown) as PositionObjOrNot
      );
      expect(
        checkNextPosition(
          Positions.Bottom,
          Object.assign({}, fullFalseConfig, { bottom: [false, false, false] }) as PositionConfig,
          'start'
        )
      ).toBe((false as unknown) as PositionObjOrNot);
    });

    it('falls through to false in a bad-data scenario', () => {
      expect(checkNextPosition(82, {} as PositionConfig, 'start')).toBe((false as unknown) as PositionObjOrNot);
      expect(checkNextPosition(Positions.Top, { top: [] } as PositionConfig, 'start')).toBe(
        (false as unknown) as PositionObjOrNot
      );
    });
  });

  describe('getCrossAxisOrderOfPreference(): ', () => {
    it('returns mid as expected', () => {
      expect(getCrossAxisOrderOfPreference('mid')).toEqual([1, 0, 2]);
    });
    it('returns start as expected', () => {
      expect(getCrossAxisOrderOfPreference('start')).toEqual([0, 1, 2]);
    });
    it('returns end as expected', () => {
      expect(getCrossAxisOrderOfPreference('end')).toEqual([2, 1, 0]);
    });
    it('defaults to start', () => {
      expect(getCrossAxisOrderOfPreference('jabberwocky')).toEqual([0, 1, 2]);
    });
  });

  describe('setOrientationTuple(): ', () => {
    describe('basic preferences – ', () => {
      it('prioritizes listed preference', () => {
        const [prefs, sumOfFilteredDefaults] = getOrientationTuple('left');
        expect(prefs).toEqual([Positions.Left], 'prefs value listed in order');
        expect(sumOfFilteredDefaults).toBe(Positions.VerticalOrRight, 'pref should be removed from defaults');
      });

      it('handles multiple preferences', () => {
        const [prefs, sumOfFilteredDefaults] = getOrientationTuple('top right');

        expect(prefs).toEqual([Positions.Top, Positions.Right], 'prefs value listed in order');
        expect(sumOfFilteredDefaults).toBe(Positions.BottomOrLeft, 'prefs should be removed from defaults');
      });

      it('all preferences listed removes default', () => {
        const [prefs, sumOfFilteredDefaults] = getOrientationTuple('right left bottom top');
        expect(prefs).toEqual(
          [Positions.Right, Positions.Left, Positions.Bottom, Positions.Top],
          'prefs value listed in order'
        );
        expect(sumOfFilteredDefaults).toEqual(0, 'all positions in prefs remove all positions from defaults');
      });

      it('no preferences result in defaults', () => {
        const [prefs, sumOfFilteredDefaults] = getOrientationTuple('');
        expect(prefs).toEqual([], 'empty prefs are empty');
        expect(sumOfFilteredDefaults).toEqual(Positions.All, 'default prefs in intended order');
      });

      it('removes all preferences if told to', () => {
        const [prefs, sumOfFilteredDefaults] = getOrientationTuple('none');
        expect(prefs).toEqual([], 'prefs are empty');
        expect(sumOfFilteredDefaults).toEqual(Positions.Responsive, 'prefs are zeroed out');
      });
    });

    describe('denylist preferences – ', () => {
      it('removes denylisted positions', () => {
        const [prefs, sumOfFilteredDefaults] = getOrientationTuple('not:left');
        expect(prefs).toEqual([], 'no prefs were set');
        expect(sumOfFilteredDefaults).toBe(Positions.VerticalOrRight, 'denylisted pref should be removed');
      });

      it('returns no defaults if remaining defaults are denylisted', () => {
        const [prefs, sumOfFilteredDefaults] = getOrientationTuple('right not:left not:top not:bottom');
        expect(prefs).toEqual([Positions.Right], 'prefs were set');
        expect(sumOfFilteredDefaults).toBe(Positions.Responsive, 'denylisted prefs should be removed');
      });

      it('still prioritizes as expected', () => {
        const [prefs, sumOfFilteredDefaults] = getOrientationTuple('right not:top bottom');
        expect(prefs).toEqual([Positions.Right, Positions.Bottom], 'prefs were set');
        expect(sumOfFilteredDefaults).toBe(Positions.Left, 'denylisted pref should be removed');
      });
    });

    describe('forcelist preferences – ', () => {
      it('returns forcelist pref as expected', () => {
        const [prefs, sumOfFilteredDefaults] = getOrientationTuple('only:left');
        expect(prefs).toEqual([Positions.Left], 'forcelist pref is returned');
        expect(sumOfFilteredDefaults).toBe(Positions.Responsive, 'default prefs are removed');
      });

      it('returns forcelist over any other preferences that are set', () => {
        const [prefs, sumOfFilteredDefaults] = getOrientationTuple('right only:bottom not:top not:bottom');
        expect(prefs).toEqual([Positions.Bottom], 'forcelist pref was set');
        expect(sumOfFilteredDefaults).toBe(Positions.Responsive, 'default prefs are removed');
      });

      it('only one forcelist pref counts', () => {
        const [prefs, sumOfFilteredDefaults] = getOrientationTuple('only:right only:top bottom only:left');
        expect(prefs).toEqual([Positions.Right], 'forcelist pref was set');
        expect(sumOfFilteredDefaults).toBe(Positions.Responsive, 'default prefs are removed');
      });
    });
  });
});

describe('Functional Utilities: ', () => {
  let windowDims: WindowDims;

  beforeAll(() => {
    windowDims = getWindowDimensions();
  });

  describe('getMainAxisPositionOrViolation(): ', () => {
    it('defaults limit parameter to 0 if none passed', () => {
      expect(getMainAxisPositionOrViolation(300, 100, 100, 100)).toBe(false, 'returns false if zero');
      expect(getMainAxisPositionOrViolation(200, 100, 100, 100)).toBe(false, 'returns false if below zero');
      expect(getMainAxisPositionOrViolation(500, 100, 100, 100)).toBe(
        200,
        'returns derived position as the set point if above zero'
      );
    });

    // bottom or right
    it('returns as expected if below non-zero limit', () => {
      const startPosition = 100;
      const pointerLength = 100;
      const popupLength = 100;
      const marginLength = 100;
      expect(getMainAxisPositionOrViolation(startPosition, pointerLength, popupLength, marginLength, 500)).toBe(
        200,
        'returns start as the set point if under limit'
      );
      expect(getMainAxisPositionOrViolation(startPosition, pointerLength, popupLength, marginLength, 400)).toBe(
        false,
        'returns false if at limit'
      );
      expect(getMainAxisPositionOrViolation(startPosition, pointerLength, popupLength, marginLength, 300)).toBe(
        false,
        'returns false if over limit'
      );
    });

    // top or left
    it('returns as expected if above zero limit', () => {
      const pointerLength = 100;
      const popupLength = 100;
      const marginLength = 100;
      const limit = 0;

      expect(getMainAxisPositionOrViolation(300, pointerLength, popupLength, marginLength, limit)).toBe(
        false,
        'returns false if zero'
      );
      expect(getMainAxisPositionOrViolation(200, pointerLength, popupLength, marginLength, limit)).toBe(
        false,
        'returns false if below zero'
      );
      expect(getMainAxisPositionOrViolation(500, pointerLength, popupLength, marginLength, limit)).toBe(
        200,
        'returns derived position as the set point if above zero'
      );
    });
  });

  describe('getPositionConfig(): ', () => {
    const dummyWindow = { width: 800, height: 600 };

    describe('top position (main axis is top; cross axis horizontal): ', () => {
      it('returns false if static axis (the top of the window) fails', () => {
        expect(
          getPositionConfig(
            'top',
            'start',
            new DOMRect(50, 50, 100, 50),
            new DOMRect(null, null, 100, 100),
            0,
            dummyWindow,
            0,
            0
          )
        ).toBe(false);
      });
      it('returns as expected if popup will fit above anchor', () => {
        const anchorRect = new DOMRect(50, 400, 100, 50);
        const testMe = getPositionConfig(
          'top',
          'start',
          anchorRect,
          new DOMRect(null, null, 100, 100),
          0,
          dummyWindow,
          0,
          0
        );

        expect(testMe).not.toBe(false);

        const [startPos, midPos, endPos] = testMe as PositionObj[];

        expect(startPos).not.toBe((false as unknown) as PositionObj);
        expect(startPos.popup.top).toBe(300, 'sanity check "start" popup coords (1 of 2)');
        expect(startPos.popup.left).toBe(50, 'sanity check "start" popup coords (2 of 2)');

        expect(midPos).not.toBe((false as unknown) as PositionObj);
        expect(midPos.popup.top).toBe(300, 'sanity check "mid" popup coords (1 of 2)');
        expect(midPos.popup.left).toBe(100, 'sanity check "mid" popup coords (2 of 2)');

        expect(endPos).not.toBe((false as unknown) as PositionObj);
        expect(endPos.popup.top).toBe(300, 'sanity check "end" popup coords (1 of 2)');
        expect(endPos.popup.left).toBe(150, 'sanity check "end" popup coords (2 of 2)');
      });
    });

    describe('bottom position (main axis is bottom; cross axis horizontal): ', () => {
      it('returns false if static axis (the bottom of the window) fails', () => {
        expect(
          getPositionConfig(
            'bottom',
            'start',
            new DOMRect(50, 500, 100, 50),
            new DOMRect(null, null, 100, 100),
            0,
            dummyWindow,
            0,
            0
          )
        ).toBe(false);
      });
      it('returns as expected if popup will below above anchor', () => {
        const anchorRect = new DOMRect(50, 50, 100, 50);
        const testMe = getPositionConfig(
          'bottom',
          'start',
          anchorRect,
          new DOMRect(null, null, 100, 100),
          0,
          dummyWindow,
          0,
          0
        );

        expect(testMe).not.toBe(false);

        const [startPos, midPos, endPos] = testMe as PositionObj[];

        expect(startPos).not.toBe((false as unknown) as PositionObj);
        expect(startPos.popup.top).toBe(100, 'sanity check "start" popup coords (1 of 2)');
        expect(startPos.popup.left).toBe(50, 'sanity check "start" popup coords (2 of 2)');

        expect(midPos).not.toBe((false as unknown) as PositionObj);
        expect(midPos.popup.top).toBe(100, 'sanity check "mid" popup coords (1 of 2)');
        expect(midPos.popup.left).toBe(100, 'sanity check "mid" popup coords (2 of 2)');

        expect(endPos).not.toBe((false as unknown) as PositionObj);
        expect(endPos.popup.top).toBe(100, 'sanity check "end" popup coords (1 of 2)');
        expect(endPos.popup.left).toBe(150, 'sanity check "end" popup coords (2 of 2)');
      });
    });

    describe('left position (main axis is left; cross axis vertical): ', () => {
      it('returns false if static axis (the left of the window) fails', () => {
        expect(
          getPositionConfig(
            'left',
            'start',
            new DOMRect(50, 50, 100, 50),
            new DOMRect(null, null, 100, 100),
            0,
            dummyWindow,
            0,
            0
          )
        ).toBe(false);
      });
      it('returns as expected if popup will show to the left of the anchor', () => {
        const anchorRect = new DOMRect(500, 100, 100, 50);
        const testMe = getPositionConfig(
          'left',
          'start',
          anchorRect,
          new DOMRect(null, null, 100, 100),
          0,
          dummyWindow,
          0,
          0
        );

        expect(testMe).not.toBe(false);

        const [startPos, midPos, endPos] = testMe as PositionObj[];

        expect(startPos).not.toBe((false as unknown) as PositionObj);
        expect(startPos.popup.top).toBe(100, 'sanity check "start" popup coords (1 of 2)');
        expect(startPos.popup.left).toBe(400, 'sanity check "start" popup coords (2 of 2)');

        expect(midPos).not.toBe((false as unknown) as PositionObj);
        expect(midPos.popup.top).toBe(125, 'sanity check "mid" popup coords (1 of 2)');
        expect(midPos.popup.left).toBe(400, 'sanity check "mid" popup coords (2 of 2)');

        expect(endPos).not.toBe((false as unknown) as PositionObj);
        expect(endPos.popup.top).toBe(150, 'sanity check "end" popup coords (1 of 2)');
        expect(endPos.popup.left).toBe(400, 'sanity check "end" popup coords (2 of 2)');
      });
    });

    describe('right position (main axis is right; cross axis vertical): ', () => {
      it('returns false if static axis (the right of the anchor) fails', () => {
        expect(
          getPositionConfig(
            'right',
            'start',
            new DOMRect(700, 50, 100, 50),
            new DOMRect(null, null, 100, 100),
            0,
            dummyWindow,
            0,
            0
          )
        ).toBe(false);
      });
      it('returns as expected if popup will show to the right of the anchor', () => {
        const anchorRect = new DOMRect(100, 100, 100, 50);
        const testMe = getPositionConfig(
          'right',
          'start',
          anchorRect,
          new DOMRect(null, null, 100, 100),
          0,
          dummyWindow,
          0,
          0
        );

        expect(testMe).not.toBe(false);

        const [startPos, midPos, endPos] = testMe as PositionObj[];

        expect(startPos).not.toBe((false as unknown) as PositionObj);
        expect(startPos.popup.top).toBe(100, 'sanity check "start" popup coords (1 of 2)');
        expect(startPos.popup.left).toBe(200, 'sanity check "start" popup coords (2 of 2)');

        expect(midPos).not.toBe((false as unknown) as PositionObj);
        expect(midPos.popup.top).toBe(125, 'sanity check "mid" popup coords (1 of 2)');
        expect(midPos.popup.left).toBe(200, 'sanity check "mid" popup coords (2 of 2)');

        expect(endPos).not.toBe((false as unknown) as PositionObj);
        expect(endPos.popup.top).toBe(150, 'sanity check "end" popup coords (1 of 2)');
        expect(endPos.popup.left).toBe(200, 'sanity check "end" popup coords (2 of 2)');
      });
    });
  });

  describe('getPositions(): ', () => {
    let testElement: HTMLElement;
    let testPopup: HTMLElement;
    let testAnchor: HTMLElement;

    beforeEach(async () => {
      const anchorId = 'testAnchor';
      const popupId = 'testPopup';
      testElement = await createTestElement(
        html`<div id="${anchorId}" style="height: 50px; width: 50px;">ohai</div>
          <div style="width: 100px; height: 100px" id="${popupId}">kthxbye</div>`
      );
      testAnchor = document.getElementById(anchorId);
      testPopup = document.getElementById(popupId);
      testAnchor.style.position = 'absolute';
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('does not return false if position would work', () => {
      testAnchor.style.position = 'relative';
      testAnchor.style.margin = '200px';
      const testMe = getPositions(
        testAnchor.getBoundingClientRect(),
        0,
        'start',
        testPopup.getBoundingClientRect(),
        windowDims,
        0,
        0
      );
      expect(testMe.top).not.toBe(false, 'top passes');
      expect((testMe.top as PositionObjOrNot[]).indexOf(false)).toBe(-1, 'top has positions');
      expect(testMe.left).not.toBe(false, 'left passes');
      expect((testMe.left as PositionObjOrNot[]).indexOf(false)).toBe(-1, 'left has positions');
      expect(testMe.right).not.toBe(false, 'right passes');
      expect((testMe.right as PositionObjOrNot[]).indexOf(false)).toBe(-1, 'right has positions');
      expect(testMe.bottom).not.toBe(false, 'bottom passes');
      expect((testMe.bottom as PositionObjOrNot[]).indexOf(false)).toBe(-1, 'bottom has positions');
    });

    it('returns false if main axis fails (1 of 2)', () => {
      testAnchor.style.top = '10px';
      testAnchor.style.left = '10px';
      const testMe = getPositions(
        testAnchor.getBoundingClientRect(),
        0,
        'start',
        testPopup.getBoundingClientRect(),
        windowDims,
        0,
        0
      );
      expect(testMe.top).toBe(false, 'top will not work');
      expect(testMe.left).toBe(false, 'left will not work');
      expect(testMe.right).not.toBe(false, 'right passes');
      expect((testMe.right as PositionObjOrNot[]).indexOf(false)).toBe(-1, 'right has positions');
      expect(testMe.bottom).not.toBe(false, 'bottom passes');
      expect((testMe.bottom as PositionObjOrNot[]).indexOf(false)).toBe(-1, 'bottom has positions');
    });

    it('returns false if main axis fails (2 of 2)', () => {
      testAnchor.style.bottom = '10px';
      testAnchor.style.right = '10px';
      const testMe = getPositions(
        testAnchor.getBoundingClientRect(),
        0,
        'end',
        testPopup.getBoundingClientRect(),
        windowDims,
        0,
        0
      );
      expect(testMe.top).not.toBe(false, 'top passes');
      expect((testMe.top as PositionObjOrNot[]).indexOf(false)).toBe(-1, 'top has positions');
      expect(testMe.left).not.toBe(false, 'left passes');
      expect((testMe.left as PositionObjOrNot[]).indexOf(false)).toBe(-1, 'left has positions');
      expect(testMe.right).toBe(false, 'right will not work');
      expect(testMe.bottom).toBe(false, 'bottom will not work');
    });

    it('returns false cross axis positions too (bottom and right)', () => {
      testAnchor.style.top = '40px';
      testAnchor.style.left = '40px';
      const testMe = getPositions(
        testAnchor.getBoundingClientRect(),
        0,
        'mid',
        testPopup.getBoundingClientRect(),
        windowDims,
        0,
        0
      );
      expect((testMe.right as PositionObjOrNot[])[0]).toBe(false, 'right first position is false');
      expect((testMe.bottom as PositionObjOrNot[])[0]).toBe(false, 'bottom first position is false');
    });

    it('returns false cross axis positions too (top and left)', () => {
      testAnchor.style.bottom = '40px';
      testAnchor.style.right = '40px';
      const testMe = getPositions(
        testAnchor.getBoundingClientRect(),
        0,
        'mid',
        testPopup.getBoundingClientRect(),
        windowDims,
        0,
        0
      );
      expect((testMe.top as PositionObjOrNot[])[2]).toBe(false, 'right last position is false');
      expect((testMe.left as PositionObjOrNot[])[2]).toBe(false, 'bottom last position is false');
    });
  });
});

describe('Utilites: ', () => {
  describe('Main axes: ', () => {
    describe('getMainAxisPosition(): ', () => {
      it('adds modifiers for a non-zero limit', () => {
        expect(getMainAxisPosition(10, 1, 1, 1, 40)).toBe(13);
      });

      it('subtracts modifiers when the limit is zero', () => {
        expect(getMainAxisPosition(10, 1, 1, 1, 0)).toBe(7);
      });
    });

    describe('testMainAxisPosition(): ', () => {
      describe('if the limit is zero – ', () => {
        it('returns the "starting" position if the position is less than the limit', () => {
          expect(testMainAxisPosition(35, 23, 45)).toBe(23);
        });

        it('returns false if the position is greater than or equal to the limit', () => {
          expect(testMainAxisPosition(50, 23, 45)).toBe(false);
          expect(testMainAxisPosition(45, 23, 45)).toBe(false);
        });
      });

      describe('if the limit is not zero – ', () => {
        it('returns the calculated position if the position is greater than zero', () => {
          expect(testMainAxisPosition(3, 100, 0)).toBe(3);
        });

        it('returns false if the position is less than or equal to zero', () => {
          expect(testMainAxisPosition(-45, 100, 0)).toBe(false);
          expect(testMainAxisPosition(0, 100, 0)).toBe(false);
        });
      });
    });
  });

  describe('getCrossAxisPosition(): ', () => {
    describe('Cross axes with pointer at top or left of the popup (start): ', () => {
      it('works as expected', () => {
        expect(getCrossAxisPosition('start', 10, 2, 10, 5)).toBe(35);
      });
    });

    describe('Cross axes with pointer in center of the popup (mid): ', () => {
      it('works as expected', () => {
        expect(getCrossAxisPosition('mid', 100, 2, 10, 10, 100)).toBe(80);
      });
    });

    describe('Cross axes with pointer at the bottom or the right of the popup (end): ', () => {
      it('works as expected', () => {
        expect(getCrossAxisPosition('end', 100, 2, 10, 10)).toBe(110);
      });
    });
  });

  describe('testCrossAxisPosition(): ', () => {
    describe('Cross axes with pointer at top or left of the popup (start): ', () => {
      it('works as expected', () => {
        // start position is always pushing left or down
        expect(testCrossAxisPosition('start', 50, 50, [0, 101])).toBe(50, 'it returns position if true');
        expect(testCrossAxisPosition('start', 50, 50, [0, 100])).toBe(
          false,
          'it returns false if furthest popup edge equals limit'
        );
        expect(testCrossAxisPosition('start', 50, 50, [0, 75])).toBe(
          false,
          'it returns false if furthest popup edge extends past limit'
        );
      });
    });

    describe('Cross axes with pointer in center of the popup (mid): ', () => {
      it('works as expected', () => {
        // mid position pulls left or up and pushes right or down; so it needs to validate both limits
        expect(testCrossAxisPosition('mid', 100, 50, [0, 160])).toBe(100, 'it returns position if both limits pass');
        expect(testCrossAxisPosition('mid', 0, 50, [0, 160])).toBe(
          false,
          'it returns false if start popup edge equals minimum limit'
        );
        expect(testCrossAxisPosition('mid', -25, 50, [0, 160])).toBe(
          false,
          'it returns false if start popup edge extends past minimum limit'
        );
        expect(testCrossAxisPosition('mid', 140, 20, [0, 160])).toBe(
          false,
          'it returns false if end popup edge equals maximum limit'
        );
        expect(testCrossAxisPosition('mid', 140, 50, [0, 160])).toBe(
          false,
          'it returns false if end popup edge extends past maximum limit'
        );
      });
    });

    describe('Cross axes with pointer at the bottom or the right of the popup (end): ', () => {
      it('works as expected', () => {
        // start position is always pulling right or up
        expect(testCrossAxisPosition('end', 100, 97, [0, 160])).toBe(3, 'it returns modified position if true');
        expect(testCrossAxisPosition('end', 3, 3, [0, 160])).toBe(
          false,
          'it returns false if start popup edge equals limit'
        );
        expect(testCrossAxisPosition('end', 3, 100, [0, 160])).toBe(
          false,
          'it returns false if start popup edge extends past limit'
        );
      });
    });
  });

  describe('getPopupOffsetOrDefaultOffsets: ', () => {
    it('falls through to { mainAxisOffset: 0, crossAxisOffset: 0 }', () => {
      const myOffset = getPopupOffsetOrDefaultOffsets(void 0, void 0, null, 'mid', 'mid');
      expect(myOffset.mainAxisOffset).toBe(0, 'mainAxisOffset set');
      expect(myOffset.crossAxisOffset).toBe(0, 'crossAxisOffset set');
    });

    it('returns mainAxisOffset if already defined', () => {
      const myOffset = getPopupOffsetOrDefaultOffsets(49, void 0, null, 'start', 'end');
      expect(myOffset.mainAxisOffset).toBe(49, 'mainAxisOffset set');
      expect(myOffset.crossAxisOffset).toBe(0, 'crossAxisOffset set');
    });

    it('returns crossAxisOffset if already defined', () => {
      const myOffset = getPopupOffsetOrDefaultOffsets(void 0, 49, null, 'mid', 'end');
      expect(myOffset.mainAxisOffset).toBe(0, 'mainAxisOffset set');
      expect(myOffset.crossAxisOffset).toBe(49, 'crossAxisOffset set');
    });

    it('returns { mainAxisOffset: -10, crossAxisOffset: 0 } if pointer is default', () => {
      const mockPointer = { type: 'default' } as CdsInternalPointer;
      const myOffset = getPopupOffsetOrDefaultOffsets(void 0, void 0, mockPointer, 'start', 'mid');
      expect(myOffset.mainAxisOffset).toBe(-10, 'mainAxisOffset set');
      expect(myOffset.crossAxisOffset).toBe(0, 'crossAxisOffset set');
    });

    it('returns { mainAxisOffset: -10, crossAxisOffset: -10 } if pointer is default and at end of dropdown and start of anchor', () => {
      const mockPointer = { type: 'default' } as CdsInternalPointer;
      const myOffset = getPopupOffsetOrDefaultOffsets(void 0, void 0, mockPointer, 'end', 'start');
      expect(myOffset.mainAxisOffset).toBe(-10, 'mainAxisOffset set');
      expect(myOffset.crossAxisOffset).toBe(-10, 'crossAxisOffset set');
    });

    it('returns { mainAxisOffset: 0, crossAxisOffset: 0 } if pointer is there but not type of default', () => {
      const mockPointer = { type: 'angle' } as CdsInternalPointer;
      const myOffset = getPopupOffsetOrDefaultOffsets(void 0, void 0, mockPointer, 'end', 'start');
      expect(myOffset.mainAxisOffset).toBe(0, 'mainAxisOffset set');
      expect(myOffset.crossAxisOffset).toBe(0, 'crossAxisOffset set');
    });

    it('returns the cross/main offsets as passed in even if pointer is type default', () => {
      const mockPointer = { type: 'default' } as CdsInternalPointer;
      const myOffset = getPopupOffsetOrDefaultOffsets(16, 80, mockPointer, 'end', 'end');
      expect(myOffset.mainAxisOffset).toBe(16, 'mainAxisOffset set');
      expect(myOffset.crossAxisOffset).toBe(80, 'crossAxisOffset set');
    });

    it('returns expected object format', () => {
      const myOffset = getPopupOffsetOrDefaultOffsets(void 0, void 0, null, 'mid', 'end');
      expect(myOffset).toEqual({ mainAxisOffset: 0, crossAxisOffset: 0 }, 'expected object output');
    });
  });

  describe('setPopupPosition(): ', () => {
    let winHeight: number;
    let testElement: HTMLElement;
    let popupWrapper: PositioningUtilsTestPopup;
    let popupWithPointerWrapper: PositioningUtilsTestPopupWithPointer;
    let popup: CdsInternalPopup;
    let popupWithPointer: CdsInternalPopup;
    let popupHostWrapper: HTMLElement;
    let popupPointerWrapper: HTMLElement;
    let anchor: HTMLElement;
    const anchorHeight = 50;
    const anchorWidth = 100;

    beforeEach(async () => {
      testElement = await createTestElement(html`
        <positioning-utils-test-popup></positioning-utils-test-popup>
        <positioning-utils-test-popup-with-pointer></positioning-utils-test-popup-with-pointer>
        <div
          id="my-anchor"
          style="height: ${anchorHeight}px; width: ${anchorWidth}px; display: block; overflow: hidden;"
        >
          ohai
        </div>
      `);
      popupWithPointerWrapper = testElement.querySelector<PositioningUtilsTestPopupWithPointer>(
        'positioning-utils-test-popup-with-pointer'
      );
      await componentIsStable(popupWithPointerWrapper);
      popupWrapper = testElement.querySelector<PositioningUtilsTestPopup>('positioning-utils-test-popup');
      popup = popupWrapper.shadowRoot.querySelector<CdsInternalPopup>('cds-internal-popup');
      popupWithPointer = popupWithPointerWrapper.shadowRoot.querySelector<CdsInternalPopup>('cds-internal-popup');
      anchor = testElement.querySelector<HTMLElement>('#my-anchor');
      const windowDims = getWindowDimensions();
      winHeight = windowDims.height;
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should return responsive if the popup cannot fit on the screen', async () => {
      popupHostWrapper = popup.hostWrapper;
      popupPointerWrapper = popup.pointerWrapper;
      testElement.style.paddingTop = winHeight - 2 * anchorHeight + 'px';
      popup.orientation = 'only:bottom';
      popup.anchor = anchor;
      await componentIsStable(popupWrapper);
      setPopupPosition(popup);
      await componentIsStable(popupWrapper);

      expect(popup.hasAttribute('responsive')).toBe(true, 'responsive attr is set');
      expect(popup.hasAttribute('_position-at')).toBe(false, 'no position-at attr');
      expect(popupHostWrapper.style.position).toBe('', 'host wrapper position style unset');
      expect(popupHostWrapper.style.top).toBe('', 'host wrapper top style unset');
      expect(popupHostWrapper.style.left).toBe('', 'host wrapper left style unset');
      expect(popupPointerWrapper.style.visibility).toBe('hidden', 'pointer should be hidden');
    });

    it('should set as expected if no pointer', async () => {
      popupHostWrapper = popup.hostWrapper;
      popupPointerWrapper = popup.pointerWrapper;
      testElement.style.padding = '10px';
      popup.orientation = 'only:bottom';
      popup.anchor = anchor;
      await componentIsStable(popupWrapper);
      setPopupPosition(popup);
      await componentIsStable(popupWrapper);

      expect(popup.hasAttribute('responsive')).toBe(false, 'responsive attr is not present');
      expect(popup.hasAttribute('_pointer-type')).toBe(false, 'no pointer-type attr');
      expect(popup.hasAttribute('_position-at')).toBe(false, 'no position-at attr');
      expect(popupHostWrapper.style.position).toBe('absolute', 'host wrapper position style set');
      expect(popupHostWrapper.style.top).toBe('68px', 'host wrapper top style set');
      expect(popupHostWrapper.style.left).toBe('18px', 'host wrapper left style set');
      expect(popupPointerWrapper.style.visibility).toBe('hidden', 'pointer should be hidden');
    });

    it('should set as expected if pointer is present', async () => {
      popupHostWrapper = popupWithPointer.hostWrapper;
      popupPointerWrapper = popupWithPointer.pointerWrapper;
      testElement.style.padding = '50px 25px';
      popupWithPointer.orientation = 'only:bottom';
      popupWithPointer.anchor = anchor;
      await componentIsStable(popupWithPointerWrapper);
      setPopupPosition(popupWithPointer);
      await componentIsStable(popupWithPointerWrapper);

      expect(popupWithPointer.hasAttribute('responsive')).toBe(false, 'responsive attr is not present');
      expect(popupWithPointer.getAttribute('_position-at')).toBe('popup-top pointer-left', 'position-at attr is set');
      expect(popupWithPointer.getAttribute('_pointer-type')).toBe('angle', 'pointer-type is set');
      expect(popupHostWrapper.style.position).toBe('absolute', 'host wrapper position style set');
      expect(popupHostWrapper.style.top).toBe('108px', 'host wrapper top style set');
      expect(popupHostWrapper.style.left).toBe('33px', 'host wrapper left style set');
      expect(popupPointerWrapper.style.visibility).toBe('visible', 'pointer should be visible');
    });

    it('should not fail on a bad pointer type', async () => {
      popupHostWrapper = popupWithPointer.hostWrapper;
      popupPointerWrapper = popupWithPointer.pointerWrapper;
      testElement.style.padding = '80px';
      popupWithPointer.orientation = 'only:bottom';
      popupWithPointer.anchor = anchor;
      popupWithPointer.pointer.type = void 0;
      await componentIsStable(popupWithPointerWrapper);
      setPopupPosition(popupWithPointer);
      await componentIsStable(popupWithPointerWrapper);

      expect(popupWithPointer.hasAttribute('responsive')).toBe(false, 'responsive attr is not present');
      expect(popupWithPointer.getAttribute('_position-at')).toBe('popup-top pointer-left', 'position-at attr is set');
      expect(popupWithPointer.hasAttribute('_pointer-type')).toBe(false, 'pointer-type attr is gone');
      expect(popupHostWrapper.style.position).toBe('absolute', 'host wrapper position style set');
      expect(popupHostWrapper.style.top).toBe('138px', 'host wrapper top style set');
      expect(popupHostWrapper.style.left).toBe('88px', 'host wrapper left style set');
      expect(popupPointerWrapper.style.visibility).toBe('visible', 'pointer should be visible');
    });
  });

  describe('getPointerPosition(): ', () => {
    it('returns as expected', () => {
      expect(getPointerPosition('Top')).toBe('popup-bottom', 'top shows up with pointer above dropdown');
      expect(getPointerPosition('bOtTOM')).toBe('popup-top', 'bottom shows up with pointer below dropdown');
      expect(getPointerPosition('right')).toBe('popup-left', 'right shows up with pointer to the left of dropdown');
      expect(getPointerPosition('LEFT')).toBe('popup-right', 'left shows up with pointer to the right of dropdown');
      expect(getPointerPosition('Jabberwocky')).toBe('popup-left', 'defaults to left');
    });
  });

  describe('getPointerAlignment(): ', () => {
    it('top alignments return as expected', () => {
      expect(getPointerAlignment('popup-top', 'start')).toBe('pointer-left', 'top + start = left');
      expect(getPointerAlignment('popup-top', 'mid')).toBe('pointer-center', 'top + mid = center');
      expect(getPointerAlignment('popup-top', 'end')).toBe('pointer-right', 'top + end = right');
    });

    it('bottom alignments return as expected', () => {
      expect(getPointerAlignment('popup-bottom', 'start')).toBe('pointer-left', 'bottom + start = left');
      expect(getPointerAlignment('popup-bottom', 'mid')).toBe('pointer-center', 'bottom + mid = center');
      expect(getPointerAlignment('popup-bottom', 'end')).toBe('pointer-right', 'bottom + end = right');
    });

    it('right alignments return as expected', () => {
      expect(getPointerAlignment('popup-right', 'start')).toBe('pointer-top', 'right + start = top');
      expect(getPointerAlignment('popup-right', 'mid')).toBe('pointer-mid', 'right + start = mid');
      expect(getPointerAlignment('popup-right', 'end')).toBe('pointer-bottom', 'right + end = bottom');
    });

    it('left alignments return as expected', () => {
      expect(getPointerAlignment('popup-left', 'start')).toBe('pointer-top', 'left + start = top');
      expect(getPointerAlignment('popup-left', 'mid')).toBe('pointer-mid', 'left + start = mid');
      expect(getPointerAlignment('popup-left', 'end')).toBe('pointer-bottom', 'left + end = bottom');
    });
  });
});

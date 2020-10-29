/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  keyWasEvented,
  onAnyKey,
  onKey,
  onKeyCombo,
  getModifierKeysFromKeyCombo,
  removeModifierKeysFromKeyCombo,
} from './keycodes.js';

describe('Keycodes Helpers – ', () => {
  const testEvent1 = new KeyboardEvent('keyup', { code: 'ArrowLeft', key: 'ArrowLeft' });
  const testEvent2 = new KeyboardEvent('keyup', { code: 'Escape', key: 'Escape' });
  const spaceEvent = new KeyboardEvent('keyup', { code: 'Space', key: ' ' });
  const errEvent1 = new KeyboardEvent('keyup', { code: 'KeyA', key: 'a' });
  const errEvent2 = new KeyboardEvent('keyup', { code: 'Jabberwocky', key: 'Jabberwocky' });

  describe('keyWasEvented(): ', () => {
    it('identifies keycodes in the registry', () => {
      expect(keyWasEvented(testEvent1, 'arrow-left')).toEqual(true);
      expect(keyWasEvented(testEvent2, 'escape')).toEqual(true);
      expect(keyWasEvented(spaceEvent, 'space')).toEqual(true);
    });

    it('ignores keycodes that it is not looking for', () => {
      expect(keyWasEvented(testEvent1, 'arrow-up')).toEqual(false);
      expect(keyWasEvented(testEvent2, 'tab')).toEqual(false);
    });

    it('does not die on unknown keycodes', () => {
      expect(keyWasEvented(errEvent1, 'arrow-up')).toEqual(false);
      expect(keyWasEvented(errEvent1, 'ohai')).toEqual(false);
      expect(keyWasEvented(errEvent2, 'escape')).toEqual(false);
      expect(keyWasEvented(errEvent2, 'kthxbye')).toEqual(false);
    });
  });

  describe('onKey: ', () => {
    let testme = 0;
    const fn = () => {
      testme++;
    };

    beforeEach(() => {
      testme = 0;
    });

    it('executes function if event contains key', () => {
      onKey('arrow-left', testEvent1, fn);
      expect(testme).toBe(1, 'onKey executed function as expected');
    });

    it('does not execute function if event does not contain key', () => {
      onKey('arrow-left', spaceEvent, fn);
      expect(testme).toBe(0, 'onKey does not execute function when keycode is not in event');
    });

    it('does not execute function if registry does not have keycode', () => {
      onKey('key-a', errEvent1, fn);
      expect(testme).toBe(0, 'onKey only knows what is in the registry');
    });
  });

  describe('onAnyKey: ', () => {
    let testme = 0;
    const fn = () => {
      testme++;
    };

    beforeEach(() => {
      testme = 0;
    });

    it('executes function if event contains any of the keys in the array', () => {
      onAnyKey(['arrow-left', 'arrow-down', 'arrow-up', 'arrow-right'], testEvent1, fn);
      expect(testme).toBe(1, 'onAnyKey executed function as expected');
      onAnyKey(
        ['arrow-left', 'arrow-down', 'arrow-up', 'arrow-right'],
        new KeyboardEvent('keyup', { code: 'ArrowDown', key: 'ArrowDown' }),
        fn
      );
      expect(testme).toBe(2, 'onAnyKey executed function as expected');
    });

    it('does not execute function if event does not contain any of the keys it is looking for', () => {
      onAnyKey(['arrow-left', 'arrow-down', 'arrow-up', 'arrow-right'], spaceEvent, fn);
      expect(testme).toBe(0, 'onAnyKey does not execute function when keycode is not in event');
    });

    it('does not execute function if registry does not have keycode', () => {
      onAnyKey(['key-a', 'space', 'arrow-left'], errEvent1, fn);
      expect(testme).toBe(0, 'onAnyKey only knows what is in the registry');
    });
  });

  describe('onKeyCombo: ', () => {
    let testme = 0;
    const fn = () => {
      testme++;
    };

    beforeEach(() => {
      testme = 0;
    });

    it('executes function if event contains key combo', () => {
      const testEvent = new KeyboardEvent('keyup', {
        code: 'ArrowDown',
        key: 'ArrowDown',
        ctrlKey: true,
        shiftKey: true,
      });
      const testEventToo = new KeyboardEvent('keyup', {
        code: 'ArrowLeft',
        key: 'ArrowLeft',
        ctrlKey: true,
        shiftKey: true,
      });
      const gotchaEvent = new KeyboardEvent('keyup', {
        code: 'ArrowLeft',
        key: 'ArrowLeft',
        ctrlKey: true,
      });
      onKeyCombo('ctrl+shift+arrow-left', testEvent, fn);
      expect(testme).toBe(0, 'onKeyCombo requires non-modifier keys to be present');
      onKeyCombo('ctrl+shift+arrow-left', testEventToo, fn);
      expect(testme).toBe(1, 'onKeyCombo executed function as expected');
      onKeyCombo('ctrl+shift+arrow-left', gotchaEvent, fn);
      expect(testme).toBe(1, 'onKeyCombo requires ALL modifier keys');
    });

    it('does not execute function if event does not contain key combo', () => {
      const testEvent = new KeyboardEvent('keyup', { code: 'ArrowDown', key: 'ArrowDown', ctrlKey: true });
      onKeyCombo('ctrl+shift+arrow-left', testEvent, fn);
      expect(testme).toBe(0, 'onKeyCombo does not execute function when keycode is not in event');
    });

    it('handles shift+tab combos', () => {
      const testEvent = new KeyboardEvent('keyup', { code: 'Tab', key: 'Tab', shiftKey: true });
      onKeyCombo('shift+tab', testEvent, fn);
      expect(testme).toBe(1, 'onKeyCombo executes with shift + tab');
    });

    it('handles meta key combos', () => {
      const testEvent = new KeyboardEvent('keyup', { code: 'Space', key: ' ', metaKey: true });
      onKeyCombo('meta+space', testEvent, fn);
      expect(testme).toBe(1, 'onKeyCombo recognizes meta key');
      onKeyCombo('cmd+space', testEvent, fn);
      expect(testme).toBe(2, 'onKeyCombo recognizes cmd key');
      onKeyCombo('win+space', testEvent, fn);
      expect(testme).toBe(3, 'onKeyCombo recognizes win key');
    });

    it('is okay with no modifier keys', () => {
      const testEvent = new KeyboardEvent('keyup', { code: 'Tab', key: 'Tab' });
      onKeyCombo('tab', testEvent, fn);
      expect(testme).toBe(1, 'onKeyCombo handles non-combos');
    });

    // as unlikely as this scenario is, we want the underlying code to be non-judgemental
    it('is okay with just modifier keys', () => {
      const testEvent = new KeyboardEvent('keyup', { altKey: true, metaKey: true });
      onKeyCombo('meta+alt', testEvent, fn);
      expect(testme).toBe(1, 'onKeyCombo handles non-combos that are just modifier keys');
    });

    it('does not execute function if registry does not have keycode', () => {
      const testEvent = new KeyboardEvent('keyup', { code: 'KeyA', key: 'a', metaKey: true });
      onKeyCombo('cmd+key-a', testEvent, fn);
      expect(testme).toBe(0, 'onKeyCombo only knows what is in the registry');
    });
  });
});

describe('Keycode Utilities – ', () => {
  describe('getModifierKeysFromKeyCombo(): ', () => {
    it('identifies keycodes in the registry', () => {
      expect(getModifierKeysFromKeyCombo('ctrl+shift+o')).toEqual(
        ['ctrl', 'shift'],
        'pulls modifier keys out as expected'
      );
      expect(getModifierKeysFromKeyCombo('cmd+k')).toEqual(['cmd'], 'pulls apple meta key out as expected');
      expect(getModifierKeysFromKeyCombo('win+alt+k')).toEqual(
        ['win', 'alt'],
        'pulls windows meta key out as expected'
      );
      expect(getModifierKeysFromKeyCombo('meta+alt+tab')).toEqual(['meta', 'alt'], 'pulls meta key out as expected');
      expect(getModifierKeysFromKeyCombo('tab+space+enter')).toEqual([], 'returns empty array if no modifier keys');
    });
  });

  describe('removeModifierKeysFromKeyCombo(): ', () => {
    it('identifies keycodes in the registry', () => {
      expect(removeModifierKeysFromKeyCombo('ctrl+shift+o')).toEqual(['o'], 'removes modifier keys out as expected');
      expect(removeModifierKeysFromKeyCombo('cmd+k')).toEqual(['k'], 'removes apple meta key out as expected');
      expect(removeModifierKeysFromKeyCombo('win+alt+k')).toEqual(['k'], 'removes windows meta key out as expected');
      expect(removeModifierKeysFromKeyCombo('meta+alt+tab')).toEqual(['tab'], 'removes meta key out as expected');
      expect(removeModifierKeysFromKeyCombo('shift+tab')).toEqual(['tab'], 'handles shift+tab as expected');
      expect(removeModifierKeysFromKeyCombo('tab+space+enter')).toEqual(
        ['tab', 'space', 'enter'],
        'returns empty array if no modifier keys'
      );
    });
  });
});

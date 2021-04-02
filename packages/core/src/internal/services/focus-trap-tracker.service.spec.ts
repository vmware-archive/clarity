/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement } from '@cds/core/test';
import { FocusTrapTrackerService } from './focus-trap-tracker.service.js';
import { arrayTail } from '../utils/array.js';

describe('Focus Trap Tracker Service - ', () => {
  const testTrapElements = [
    { focusTrapId: 'abcd' },
    { focusTrapId: 'efg' },
    { focusTrapId: 'hijk' },
    { focusTrapId: 'lmnop' },
  ];

  afterEach(() => {
    FocusTrapTrackerService.setTrapElements([]);
  });

  describe('getTrapIds(): ', () => {
    it('should return empty array if docroot attr is not present', () => {
      expect(FocusTrapTrackerService.getTrapElements()).toEqual([]);
    });

    it('should return the trap ids if present', () => {
      FocusTrapTrackerService.setTrapElements(testTrapElements);
      expect(FocusTrapTrackerService.getTrapElements()).toEqual(testTrapElements);
    });

    it('should return empty array if docroot attr is present but empty', () => {
      expect(FocusTrapTrackerService.getTrapElements()).toEqual([]);
    });
  });

  describe('activatePreviousCurrent(): ', () => {
    it('should set id passed as the tail of the docroot attr', () => {
      FocusTrapTrackerService.setTrapElements(testTrapElements);
      const previousCurrent = FocusTrapTrackerService.getCurrent();
      const myTestId = 'qrstuv';
      FocusTrapTrackerService.setCurrent({ focusTrapId: myTestId });
      expect(arrayTail(FocusTrapTrackerService.getTrapElements()).focusTrapId).toBe(
        myTestId,
        'should set id as expected'
      );
      FocusTrapTrackerService.activatePreviousCurrent();
      expect(arrayTail(FocusTrapTrackerService.getTrapElements())).toBe(
        previousCurrent,
        'should have previous id at tail of docroot ids'
      );
      expect(FocusTrapTrackerService.getCurrent()).toBe(
        previousCurrent,
        'should reflect previous id as the current one now'
      );
    });
  });

  describe('getCurrentTrapId(): ', () => {
    it('should retrieve id at the tail of the docroot attr', () => {
      const myTestElement = { focusTrapId: 'ohai' };
      FocusTrapTrackerService.setCurrent(myTestElement);
      expect(arrayTail(FocusTrapTrackerService.getTrapElements())).toBe(
        myTestElement,
        'should have id at the head of the docroot ids'
      );
      expect(FocusTrapTrackerService.getCurrent().focusTrapId).toBe(
        myTestElement.focusTrapId,
        'should have id at the head of the docroot ids'
      );
    });
  });

  describe('getCurrent(): ', () => {
    it('should retrieve id element at the tail', async () => {
      const element = await createTestElement(
        html`<div focus-trap-id="ohai">howdy</div>
          <div focus-trap-id="lmnop"></div>`
      );
      FocusTrapTrackerService.setTrapElements(testTrapElements);
      FocusTrapTrackerService.setCurrent({ focusTrapId: 'ohai' });
      const myCurrent = FocusTrapTrackerService.getCurrent();
      expect(myCurrent).not.toBeNull('should retrieve element as expected');
      expect(myCurrent.focusTrapId).toBe('ohai', 'should retrieve correct current element as expected');
      FocusTrapTrackerService.activatePreviousCurrent();
      const newCurrent = FocusTrapTrackerService.getCurrent();
      expect(newCurrent).not.toBeNull('should retrieve previous element as expected');
      expect(newCurrent.focusTrapId).toBe('lmnop', 'should get previous element as expected');
      removeTestElement(element);
    });

    it('should not die if the docroot attr is empty', () => {
      expect(FocusTrapTrackerService.getCurrent()).toBe(null, 'should return an empty string if there are no ids');
    });
  });

  describe('setCurrent(): ', () => {
    it('should set id passed as the tail', () => {
      const myTestElement = { focusTrapId: 'qrstuv' };
      FocusTrapTrackerService.setTrapElements(testTrapElements);
      FocusTrapTrackerService.setCurrent(myTestElement);
      expect(arrayTail(FocusTrapTrackerService.getTrapElements())).toBe(
        myTestElement,
        'should have id at the tail of the docroot ids'
      );
    });

    it('should do nothing if passed nothing', () => {
      FocusTrapTrackerService.setTrapElements(testTrapElements);
      FocusTrapTrackerService.setCurrent(null);
      expect(arrayTail(FocusTrapTrackerService.getTrapElements())).toBe(
        arrayTail(testTrapElements),
        'should not have changed the id at the tail of the docroot ids'
      );
    });

    it('should keep id passed as the tail if it already is', () => {
      const myTestElement = { focusTrapId: 'lmnop' };
      FocusTrapTrackerService.setTrapElements(testTrapElements);
      FocusTrapTrackerService.setCurrent(myTestElement);
      expect(arrayTail(FocusTrapTrackerService.getTrapElements())).toBe(
        myTestElement,
        'should have id at the tail of the docroot ids'
      );
    });

    it('should move id passed to the tail if it is already present but not current', () => {
      const myTestElement = { focusTrapId: 'abcd' };
      const myTestElement2 = { focusTrapId: 'hijk' };

      // trying from the front
      FocusTrapTrackerService.setTrapElements(testTrapElements);
      FocusTrapTrackerService.setCurrent(myTestElement);

      let updatedElements = FocusTrapTrackerService.getTrapElements();

      expect(updatedElements[0]).not.toBe(myTestElement, 'should remove id from previous place (1)');
      expect(arrayTail(updatedElements)).toBe(myTestElement, 'should remove id from previous place (1)');
      let filteredIds = FocusTrapTrackerService.getTrapElements().filter(
        e => e.focusTrapId === myTestElement.focusTrapId
      );
      expect(filteredIds.length).toBe(1, 'should only have one instance of an id (1)');

      // pulling id from the middle
      FocusTrapTrackerService.setCurrent(myTestElement2);

      updatedElements = FocusTrapTrackerService.getTrapElements();
      expect(updatedElements[1]).not.toBe(myTestElement2, 'should remove id from previous place (2)');
      expect(arrayTail(updatedElements)).toBe(myTestElement2, 'should remove id from previous place (2)');
      filteredIds = FocusTrapTrackerService.getTrapElements().filter(e => e.focusTrapId === myTestElement2.focusTrapId);
      expect(filteredIds.length).toBe(1, 'should only have one instance of an id (2)');
    });
  });

  describe('removeTrapElement', () => {
    // this test is largely for coverage
    it('handles when there are no trap elements', () => {
      const myTestElement = { focusTrapId: 'abcd' };
      const myTrapElements = FocusTrapTrackerService.getTrapElements();
      expect(myTrapElements.length).toBe(0);
      const testme = FocusTrapTrackerService.removeTrapElement(myTestElement);
      expect(testme).toBeUndefined();
    });

    it('should remove trap elements', () => {
      const myTestElement = { focusTrapId: 'abcd' };
      FocusTrapTrackerService.setTrapElements(testTrapElements);
      expect(FocusTrapTrackerService.getTrapElements().length).toBe(4);
      FocusTrapTrackerService.removeTrapElement(myTestElement);
      const elements = FocusTrapTrackerService.getTrapElements();
      const abcd = elements.filter(e => e.focusTrapId === 'abcd');
      expect(elements.length).toBe(3);
      expect(abcd.length).toBe(0);
    });
  });
});

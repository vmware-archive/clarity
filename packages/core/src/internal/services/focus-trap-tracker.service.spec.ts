/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { createTestElement, removeTestElement } from '@cds/core/test/utils';
import {
  CDS_FOCUS_TRAP_DOCUMENT_ATTR,
  CDS_FOCUS_TRAP_ID_ATTR,
  FocusTrapTracker,
} from './focus-trap-tracker.service.js';
import { arrayTail } from '../utils/array.js';

describe('Focus Trap Tracker Service - ', () => {
  const service = FocusTrapTracker;
  const testTrapIds = ['abcd', 'efg', 'hijk', 'lmnop'];

  afterEach(() => {
    // reset
    service.getDocroot().removeAttribute(CDS_FOCUS_TRAP_DOCUMENT_ATTR);
  });

  describe('getDocroot(): ', () => {
    it('should return something', () => {
      const myDocroot: HTMLElement = service.getDocroot();
      expect(myDocroot).not.toBeNull('Docroot node should exist');
      expect(myDocroot.tagName.toLowerCase()).toBe('body', 'should return the body node');
    });
  });

  describe('getTrapIds(): ', () => {
    it('should return empty array if docroot attr is not present', () => {
      expect(service.getTrapIds()).toEqual([]);
    });

    it('should return the trap ids if present', () => {
      service.setTrapIds(testTrapIds);
      expect(service.getTrapIds()).toEqual(testTrapIds);
    });

    it('should return empty array if docroot attr is present but empty', () => {
      const myDocroot: HTMLElement = service.getDocroot();
      myDocroot.setAttribute(CDS_FOCUS_TRAP_DOCUMENT_ATTR, '');
      expect(service.getTrapIds()).toEqual([]);
    });
  });

  describe('setTrapIds(): ', () => {
    it('should not set anything to docroot if passed no ids', () => {
      const myDocroot: HTMLElement = service.getDocroot();
      service.setTrapIds([]);
      expect(myDocroot.hasAttribute(CDS_FOCUS_TRAP_DOCUMENT_ATTR)).toBe(
        false,
        'Focus trap attr should not be added to docroot'
      );
    });

    it('should set the trap ids to docroot', () => {
      const myDocroot: HTMLElement = service.getDocroot();
      service.setTrapIds(testTrapIds);
      expect(myDocroot.hasAttribute(CDS_FOCUS_TRAP_DOCUMENT_ATTR)).toBe(true, 'Docroot should have focus trap attr');
      expect(myDocroot.getAttribute(CDS_FOCUS_TRAP_DOCUMENT_ATTR)).toBe(
        testTrapIds.join(' '),
        'should return the html node'
      );
    });

    it('should unset the trap ids to docroot', () => {
      const myDocroot: HTMLElement = service.getDocroot();
      service.setTrapIds(testTrapIds);
      expect(myDocroot.hasAttribute(CDS_FOCUS_TRAP_DOCUMENT_ATTR)).toBe(true, 'Docroot should have focus trap attr');
      expect(myDocroot.getAttribute(CDS_FOCUS_TRAP_DOCUMENT_ATTR)).toBe(
        testTrapIds.join(' '),
        'should return the html node'
      );
      service.setTrapIds([]);
      expect(myDocroot.hasAttribute(CDS_FOCUS_TRAP_DOCUMENT_ATTR)).toBe(
        false,
        'Focus trap attr should not be added to docroot'
      );
    });
  });

  describe('activatePreviousCurrent(): ', () => {
    it('should set id passed as the tail of the docroot attr', () => {
      service.setTrapIds(testTrapIds);
      const previousCurrent = service.getCurrentTrapId();
      const myTestId = 'qrstuv';
      service.setCurrent(myTestId);
      expect(arrayTail(service.getTrapIds())).toBe(myTestId, 'should set id as expected');
      service.activatePreviousCurrent();
      expect(arrayTail(service.getTrapIds())).toBe(previousCurrent, 'should have previous id at tail of docroot ids');
      expect(service.getCurrentTrapId()).toBe(previousCurrent, 'should reflect previous id as the current one now');
    });
  });

  describe('getCurrentTrapId(): ', () => {
    it('should retrieve id at the tail of the docroot attr', () => {
      const myTestId = 'ohai';
      service.setCurrent(myTestId);
      expect(arrayTail(service.getTrapIds())).toBe(myTestId, 'should have id at the head of the docroot ids');
      expect(service.getCurrentTrapId()).toBe(myTestId, 'should have id at the head of the docroot ids');
    });

    it('should not die if the docroot attr is empty', () => {
      expect(service.getTrapIds().length).toBe(0, 'should not have any ids');
      expect(service.getCurrentTrapId()).toBe('', 'should return an empty string if there are no ids');
    });
  });

  describe('getCurrent(): ', () => {
    it('should retrieve id element at the tail of the docroot attr', async () => {
      const element = await createTestElement(
        html`<div focus-trap-id="ohai">howdy</div>
          <div focus-trap-id="lmnop"></div>`
      );
      service.setTrapIds(testTrapIds);
      const myTestId = 'ohai';
      service.setCurrent(myTestId);
      const myCurrent = service.getCurrent();
      expect(myCurrent).not.toBeNull('should retrieve element as expected');
      expect(myCurrent.getAttribute(CDS_FOCUS_TRAP_ID_ATTR)).toBe(
        'ohai',
        'should retrieve correct current element as expected'
      );
      service.activatePreviousCurrent();
      const newCurrent = service.getCurrent();
      expect(newCurrent).not.toBeNull('should retrieve previous element as expected');
      expect(newCurrent.getAttribute(CDS_FOCUS_TRAP_ID_ATTR)).toBe('lmnop', 'should get previous element as expected');
      removeTestElement(element);
    });

    it('should not die if id of element does not exist', async () => {
      const element = await createTestElement(
        html`<div focus-trap-id="ohai">howdy</div>
          <div focus-trap-id="lmnop"></div>`
      );

      const myTestId = 'jabberwocky';
      service.setCurrent(myTestId);
      const myCurrent = service.getCurrent();
      expect(myCurrent).toBeNull('should return null if there is no element that can be retreived');
      removeTestElement(element);
    });

    it('should not die if the docroot attr is empty', () => {
      expect(service.getCurrent()).toBe(null, 'should return an empty string if there are no ids');
    });
  });

  describe('setCurrent(): ', () => {
    it('should set id passed as the tail of the docroot attr', () => {
      const myDocroot: HTMLElement = service.getDocroot();
      const myTestId = 'qrstuv';

      service.setTrapIds(testTrapIds);
      service.setCurrent(myTestId);

      expect(myDocroot.getAttribute(CDS_FOCUS_TRAP_DOCUMENT_ATTR)).toContain(
        myTestId,
        'should add id to the docroot attr'
      );
      expect(arrayTail(service.getTrapIds())).toBe(myTestId, 'should have id at the tail of the docroot ids');
    });

    it('should do nothing if passed nothing', () => {
      service.setTrapIds(testTrapIds);
      service.setCurrent('');
      expect(arrayTail(service.getTrapIds())).toBe(
        arrayTail(testTrapIds),
        'should not have changed the id at the tail of the docroot ids'
      );
    });

    it('should keep id passed as the tail of the docroot attr if it already is', () => {
      const myDocroot: HTMLElement = service.getDocroot();
      const myTestId = 'lmnop';

      service.setTrapIds(testTrapIds);
      service.setCurrent(myTestId);

      expect(myDocroot.getAttribute(CDS_FOCUS_TRAP_DOCUMENT_ATTR)).toContain(
        myTestId,
        'should keep id at head of docroot attr'
      );
      expect(arrayTail(service.getTrapIds())).toBe(myTestId, 'should have id at the tail of the docroot ids');
    });

    it('should move id passed to the tail of the docroot attr if it is already present but not current', () => {
      const myDocroot: HTMLElement = service.getDocroot();
      const myTestId = 'abcd';
      const myTestId2 = 'hijk';

      // trying from the front
      service.setTrapIds(testTrapIds);
      service.setCurrent(myTestId);

      let updatedIds = service.getTrapIds();

      expect(myDocroot.getAttribute(CDS_FOCUS_TRAP_DOCUMENT_ATTR)).toContain(
        myTestId,
        'should include id in the docroot attr (1)'
      );
      expect(updatedIds[0]).not.toBe(myTestId, 'should remove id from previous place (1)');
      expect(arrayTail(updatedIds)).toBe(myTestId, 'should remove id from previous place (1)');
      let filteredIds = service.getTrapIds().filter(id => id === myTestId);
      expect(filteredIds.length).toBe(1, 'should only have one instance of an id (1)');

      // pulling id from the middle
      service.setCurrent(myTestId2);

      updatedIds = service.getTrapIds();

      expect(myDocroot.getAttribute(CDS_FOCUS_TRAP_DOCUMENT_ATTR)).toContain(
        myTestId2,
        'should include id in the docroot attr (2)'
      );
      expect(updatedIds[1]).not.toBe(myTestId2, 'should remove id from previous place (2)');
      expect(arrayTail(updatedIds)).toBe(myTestId2, 'should remove id from previous place (2)');
      filteredIds = service.getTrapIds().filter(id => id === myTestId2);
      expect(filteredIds.length).toBe(1, 'should only have one instance of an id (2)');
    });
  });
});

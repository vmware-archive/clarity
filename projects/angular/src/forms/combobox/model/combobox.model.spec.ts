/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ComboboxModel } from './combobox.model';
import { SingleSelectComboboxModel } from './single-select-combobox.model';
import { MultiSelectComboboxModel } from './multi-select-combobox.model';
import { PseudoFocusModel } from './pseudo-focus.model';

export default function () {
  describe('Combobox Model', () => {
    let singleModel: ComboboxModel<any>;
    let multiModel: ComboboxModel<any>;
    let pseudoFocusModel: PseudoFocusModel<any>;
    let models: any[] = [];

    beforeEach(() => {
      singleModel = new SingleSelectComboboxModel<any>();
      multiModel = new MultiSelectComboboxModel<any>();
      pseudoFocusModel = new PseudoFocusModel<any>();
      models = [singleModel, multiModel, pseudoFocusModel];
    });

    function populateModels() {
      models.forEach(model => {
        model.select('one');
        model.select('two');
        model.select('three');
      });
    }

    it('models can be instantiated', () => {
      models.forEach(model => {
        expect(model).toBeDefined();
      });
    });

    it('can add items', () => {
      expect(populateModels).not.toThrow();
    });

    it('single and pseudo-focuscontains only the last item and multiple contains all items', () => {
      populateModels();

      expect(singleModel.model).not.toBeArray();
      expect(singleModel.model).toEqual('three');
      expect(pseudoFocusModel.model).not.toBeArray();
      expect(pseudoFocusModel.model).toEqual('three');

      expect(multiModel.model).toBeArray();
      expect(multiModel.model.length).toBe(3);
      expect(multiModel.model).toEqual(['one', 'two', 'three']);
    });

    it('can check if model contains item', () => {
      // not initialized
      expect(() => singleModel.containsItem('zero')).not.toThrow();
      expect(singleModel.containsItem('zero')).toBeFalse();
      expect(() => pseudoFocusModel.containsItem('zero')).not.toThrow();
      expect(pseudoFocusModel.containsItem('zero')).toBeFalse();
      expect(() => multiModel.containsItem('zero')).not.toThrow();
      expect(multiModel.containsItem('zero')).toBeFalse();

      // initialized
      populateModels();

      expect(singleModel.containsItem(undefined)).toBeFalse();
      expect(singleModel.containsItem('zero')).toBeFalse();
      expect(singleModel.containsItem('one')).toBeFalse();
      expect(singleModel.containsItem('three')).toBeTrue();

      expect(pseudoFocusModel.containsItem(undefined)).toBeFalse();
      expect(pseudoFocusModel.containsItem('zero')).toBeFalse();
      expect(pseudoFocusModel.containsItem('one')).toBeFalse();
      expect(pseudoFocusModel.containsItem('three')).toBeTrue();

      expect(multiModel.containsItem(undefined)).toBeFalse();
      expect(multiModel.containsItem('zero')).toBeFalse();
      expect(multiModel.containsItem('one')).toBeTrue();
      expect(multiModel.containsItem('three')).toBeTrue();
    });

    it('can remove items', () => {
      populateModels();

      expect(() => singleModel.unselect('zero')).not.toThrow();
      // we don't accidentally remove value
      expect(singleModel.model).toEqual('three');
      singleModel.unselect('three');
      expect(singleModel.model).toBeFalsy();

      expect(() => pseudoFocusModel.unselect('zero')).not.toThrow();
      // we don't accidentally remove value
      expect(pseudoFocusModel.model).toEqual('three');
      pseudoFocusModel.unselect('three');
      expect(pseudoFocusModel.model).toBeFalsy();

      expect(() => multiModel.unselect('zero')).not.toThrow();
      // we don't accidentally remove value
      expect(multiModel.model).toEqual(['one', 'two', 'three']);
      multiModel.unselect('two');
      expect(multiModel.model).toEqual(['one', 'three']);

      // verify multiModel gets null when empty; needed for form validation
      multiModel.unselect('one');
      multiModel.unselect('three');
      expect(multiModel.model).toBeNull();

      // verify we can add new options after empty
      expect(() => multiModel.select('one')).not.toThrow();
      expect(multiModel.model).toEqual(['one']);
    });

    it('can pop the last item', () => {
      populateModels();

      expect(singleModel.pop()).toEqual('three');
      expect(singleModel.model).toBeFalsy();

      expect(pseudoFocusModel.pop()).toEqual('three');
      expect(pseudoFocusModel.model).toBeFalsy();

      expect(multiModel.pop()).toEqual('three');
      expect(multiModel.model).toEqual(['one', 'two']);
    });

    it('has toString method', () => {
      // no value
      expect(singleModel.toString()).toEqual('');
      expect(pseudoFocusModel.toString()).toEqual('');
      expect(multiModel.toString()).toEqual('');

      // string values
      populateModels();
      expect(singleModel.toString()).toEqual('three');
      expect(pseudoFocusModel.toString()).toEqual('three');
      expect(multiModel.toString()).toEqual('one two three');

      // object values
      const objectData = { big: 'big', fish: 'fish' };
      singleModel.model = objectData;
      pseudoFocusModel.model = objectData;
      multiModel.model = [objectData, { big: 'small', fish: 'frog' }];

      expect(singleModel.toString('fish')).toEqual('fish');
      expect(pseudoFocusModel.toString('fish')).toEqual('fish');
      expect(multiModel.toString('fish')).toEqual('fish frog');
      expect(multiModel.toString('fish', 1)).toEqual('frog');
    });

    it('pseudo-focus model has focusChanged observable', () => {
      let changeValue: string = null;
      pseudoFocusModel.focusChanged.subscribe(value => {
        changeValue = value;
      });
      pseudoFocusModel.select('giant squid');
      expect(changeValue).toBe('giant squid');
    });
  });
}

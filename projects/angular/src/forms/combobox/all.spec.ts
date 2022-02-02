/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/**
 * This file is just my OCD coding in my place.
 *
 * The goal is to have the tests properly grouped in the reporter, instead of having them all
 * over the place because we load them asynchronously.
 */

import { addHelpers } from '../../data/datagrid/helpers.spec';

import OptionSpecs from './option.spec';
import OptionsSpecs from './options.spec';
import OptionSelectionProviderSpecs from './providers/option-selection.service.spec';
import ComboboxContainerProviderSpecs from './providers/combobox-container.service.spec';
import ComboboxOptionIntegrationSpecs from './combobox-with-option.integration.spec';
import ComboboxOptionsMenuIntegrationSpecs from './combobox-with-options-menu.integration.spec';
import ComboboxSpecs from './combobox.spec';
import ComboboxContainerSpecs from './combobox-container.spec';
import ComboboxModelSpecs from './model/combobox.model.spec';
import FilterHighlightSpecs from './filter-highlight.directive.spec';
import comboboxFocusHandlerServiceSpec from './providers/combobox-focus-handler.service.spec';
import optionItemsDirectiveSpec from './option-items.directive.spec';

describe('Combobox component', function () {
  addHelpers();

  describe('Directives', () => {
    ComboboxContainerSpecs(), ComboboxSpecs();
    OptionsSpecs();
    OptionSpecs();
    optionItemsDirectiveSpec();
    FilterHighlightSpecs();
  });

  describe('Integration Tests', () => {
    ComboboxOptionIntegrationSpecs();
    ComboboxOptionsMenuIntegrationSpecs();
  });

  describe('Model', () => {
    ComboboxModelSpecs();
  });

  describe('Providers', () => {
    OptionSelectionProviderSpecs();
    ComboboxContainerProviderSpecs();
    comboboxFocusHandlerServiceSpec();
  });
});

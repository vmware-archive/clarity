/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/**
 * This file is just my OCD coding in my place.
 *
 * The goal is to have the tests properly grouped in the reporter, instead of having them all
 * over the place because we load them asynchronously.
 */

import CommonSpecs from './common.spec';
import ErrorSpecs from './error.spec';
import HelperSpecs from './helper.spec';
import ControlStatusServiceSpecs from './if-error/if-error.service.spec';
import IfErrorSpecs from './if-error/if-error.spec';
import LabelSpecs from './label.spec';
import ControlIdServiceSpecs from './providers/control-id.service.spec';
import NgControlServiceSpecs from './providers/ng-control.service.spec';
import WrappedControlSpecs from './wrapped-control.spec';

describe('Forms common utilities', function() {
  ControlIdServiceSpecs();
  ControlStatusServiceSpecs();
  NgControlServiceSpecs();
  LabelSpecs();
  IfErrorSpecs();
  WrappedControlSpecs();
  CommonSpecs();
  ErrorSpecs();
  HelperSpecs();
});

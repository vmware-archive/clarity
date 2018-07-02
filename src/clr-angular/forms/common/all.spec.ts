/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import CommonSpecs from './common.spec';
import ErrorSpecs from './error.spec';
import HelperSpecs from './helper.spec';
import FormSpecs from './form.spec';
import ControlStatusServiceSpecs from './if-error/if-error.service.spec';
import LayoutSpecs from './layout.spec';
import IfErrorSpecs from './if-error/if-error.spec';
import LabelSpecs from './label.spec';
import ControlClassServiceSpecs from './providers/control-class.service.spec';
import ControlIdServiceSpecs from './providers/control-id.service.spec';
import LayoutServiceSpecs from './providers/layout.service.spec';
import NgControlServiceSpecs from './providers/ng-control.service.spec';
import WrappedControlSpecs from './wrapped-control.spec';

describe('Forms common utilities', function() {
  ControlClassServiceSpecs();
  ControlIdServiceSpecs();
  ControlStatusServiceSpecs();
  NgControlServiceSpecs();
  LayoutServiceSpecs();
  LayoutSpecs();
  FormSpecs();
  LabelSpecs();
  IfErrorSpecs();
  WrappedControlSpecs();
  CommonSpecs();
  ErrorSpecs();
  HelperSpecs();
});

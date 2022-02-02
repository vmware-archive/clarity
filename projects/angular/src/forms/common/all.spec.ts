/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import CommonSpecs from './common.spec';
import ErrorSpecs from './error.spec';
import SuccessSpec from './success.spec';
import HelperSpecs from './helper.spec';
import FormSpecs from './form.spec';
import LayoutSpecs from './layout.spec';
import IfControlStateSpecs from './if-control-state/if-control-state.service.spec';
import LabelSpecs from './label.spec';
import ControlClassServiceSpecs from './providers/control-class.service.spec';
import ControlIdServiceSpecs from './providers/control-id.service.spec';
import LayoutServiceSpecs from './providers/layout.service.spec';
import NgControlServiceSpecs from './providers/ng-control.service.spec';
import WrappedControlSpecs from './wrapped-control.spec';
import ControlContainerSpecs from './control-container.spec';
import IfErrorSpec from './if-control-state/if-error.spec';

describe('Forms common utilities', function () {
  ControlClassServiceSpecs();
  ControlIdServiceSpecs();
  ControlContainerSpecs();
  NgControlServiceSpecs();
  LayoutServiceSpecs();
  LayoutSpecs();
  FormSpecs();
  LabelSpecs();
  IfControlStateSpecs();
  WrappedControlSpecs();
  CommonSpecs();
  ErrorSpecs();
  SuccessSpec();
  HelperSpecs();
  IfErrorSpec();
});

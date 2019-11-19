/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { AccordionSpec } from './accordion';
import { BadgeSpec } from './badge';
import { ButtonSpecs } from './buttons';
import { CheckboxSpec } from './checkbox';
import { ColorSpec } from './color';
import { DatagridSpec } from './datagrid';
import { ImageSpec } from './image';
import { InputSpec } from './input';
import { ListsSpec } from './lists';
import { LoginSpec } from './login';
import { PasswordSpec } from './password';
import { RadioSpec } from './radio';
import { SelectSpec } from './select';
import { SpinnerSpec } from './spinner';
import { StepperSpec } from './stepper';
import { TabsSpec } from './tabs';
import { TextareaSpec } from './textarea';
import { TimelineSpec } from './timeline';
import { ToggleSpec } from './toggle';

// Organized this way to make one batch for all of the tests in Applitools,
// otherwise it treats each file as a different batch and makes it hard to
// see a single run as one unit.
describe(`Clarity - ${Cypress.env('CLARITY_THEME')}`, () => {
  AccordionSpec();
  // AlertSpec(); // Need to simplify tests
  // BadgeSpec(); // Need to simplify tests
  // ButtonSpec(); // Need to simplify tests
  // ButtonGroupSpec(); // Need to simplify tests
  // CardSpec(); // Need to simplify tests
  CheckboxSpec();
  ColorSpec();
  // DatagridSpec(); // Tests still have changes between runs
  // DatepickerSpec(); // Need to simplify tests
  // DropdownSpec(); // Need to simplify tests
  // FormSpec(); // Need to simplify tests
  // GridSpec(); // Need to simplify tests
  // IconSpec(); // Need to simplify tests
  ImageSpec();
  InputSpec();
  // LabelSpec(); // Need to simplify tests
  // LayoutSpec(); // Need to simplify tests
  // ListSpec(); // Need to simplify tests
  LoginSpec();
  // ModalSpec(); // Need to simplify tests
  // NavigationSpec(); // Need to simplify tests
  PasswordSpec();
  // ProgressBarSpec(); // Need to simplify tests
  RadioSpec();
  SelectSpec();
  // SignpostSpec(); // Need to simplify tests
  // SpinnerSpec(); // Need to simplify tests
  // StackViewSpec(); // Need to simplify tests
  StepperSpec();
  // TableSpec(); // Need to simplify tests
  // TabsSpec(); // Need to simplify tests
  TextareaSpec();
  TimelineSpec();
  ToggleSpec();
  // TooltipSpec(); // Need to simplify tests
  // TreeViewSpec(); // Need to simplify tests
  // TypographySpec(); // Need to simplify tests
  // VerticalNavSpec(); // Need to simplify tests
  // WizardSpec(); // Need to simplify tests
});

/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Welcome } from '@storybook/angular/demo';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => ({
  component: Welcome,
  props: {},
});

ToStorybook.story = {
  name: 'to Storybook',
};

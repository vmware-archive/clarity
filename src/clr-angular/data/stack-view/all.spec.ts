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
 *
 * We could also check here that we do export publicly all the directives needed to use Stack View,
 * but I don"t see a way to do it simply without it being completely irrelevant.
 */

import StackBlockSpecs from './stack-block.spec';
import StackHeaderSpecs from './stack-header.spec';
import StackViewSpecs from './stack-view.spec';

describe('Stack View directives', () => {
  StackViewSpecs();
  StackHeaderSpecs();
  StackBlockSpecs();
});

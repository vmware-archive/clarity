/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {ResponsiveNavigationService} from "./responsive-navigation.service";

export function ResponsiveNavigationProvider(existing: ResponsiveNavigationService) {
    return existing || new ResponsiveNavigationService();
}

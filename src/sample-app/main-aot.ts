/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from './aot-compiled/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);

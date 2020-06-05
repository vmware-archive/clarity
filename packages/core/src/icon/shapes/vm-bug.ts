/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon =
  '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><title>VMware header icon</title><rect width="36" height="36" rx="3" fill="#ffffff" opacity="0.15" style="isolation:isolate"/><path d="M3.79,14.83a1.09,1.09,0,0,0-1.47-.56,1.09,1.09,0,0,0-.54,1.49l2.47,5.4c.39.85.8,1.29,1.57,1.29S7,22,7.39,21.16l2.17-4.77a.33.33,0,0,1,.31-.2.35.35,0,0,1,.35.35v4.61a1.15,1.15,0,0,0,1.14,1.3,1.17,1.17,0,0,0,1.17-1.3V17.38a1.15,1.15,0,0,1,1.22-1.2,1.13,1.13,0,0,1,1.18,1.2v3.77a1.17,1.17,0,1,0,2.32,0V17.38a1.15,1.15,0,0,1,1.22-1.2,1.13,1.13,0,0,1,1.18,1.2v3.77a1.16,1.16,0,1,0,2.31,0V16.86a2.69,2.69,0,0,0-2.78-2.69,3.57,3.57,0,0,0-2.47,1.05,2.75,2.75,0,0,0-2.38-1.05A3.93,3.93,0,0,0,12,15.22a2.82,2.82,0,0,0-2.08-1.05A2.55,2.55,0,0,0,7.4,15.89L5.82,19.63l-2-4.8" fill="#ffffff"/><path d="M33,14.18A1.14,1.14,0,0,0,31.9,15l-1.19,3.73L29.5,15.05a1.18,1.18,0,0,0-1.15-.87h-.1a1.2,1.2,0,0,0-1.15.87l-1.19,3.71-1.18-3.71a1.15,1.15,0,0,0-1.11-.87,1.08,1.08,0,0,0-1.12,1.07,1.68,1.68,0,0,0,.1.54l2,5.7a1.27,1.27,0,0,0,1.27,1,1.24,1.24,0,0,0,1.2-.93l1.2-3.64,1.2,3.64a1.25,1.25,0,0,0,1.26.93A1.27,1.27,0,0,0,32,21.5L34,15.73a1.77,1.77,0,0,0,.08-.48A1.07,1.07,0,0,0,33,14.18Z" fill="#ffffff"/></svg>';

export const vmBugIconName = 'vm-bug';
export const vmBugIcon: IconShapeTuple = [vmBugIconName, icon];

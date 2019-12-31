/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { IconShapeTuple } from '../interfaces/icon.interfaces';

const icon =
  '<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><title>VMW-header icon</title><rect width="36" height="36" rx="3" fill="#ffffff" fill-opacity="0.15"/><path d="M22.14,21.14a1.17,1.17,0,1,1-2.32,0V17.42a1.1,1.1,0,0,0-1.16-1.2,1.17,1.17,0,0,0-1.24,1.2v3.72a1.17,1.17,0,1,1-2.32,0V17.42a1.1,1.1,0,0,0-1.16-1.2,1.17,1.17,0,0,0-1.25,1.2v3.72a1.17,1.17,0,1,1-2.32,0V16.58a.36.36,0,0,0-.36-.36.34.34,0,0,0-.32.2s-2.16,4.72-2.16,4.72c-.4.8-.76,1.28-1.56,1.28S4.81,22,4.4,21.14L2,15.78a1.06,1.06,0,0,1,.52-1.48A1.12,1.12,0,0,1,4,14.86l2,4.76,1.68-3.76a2.61,2.61,0,0,1,2.52-1.68,2.84,2.84,0,0,1,2.08,1,3.9,3.9,0,0,1,2.33-1,2.76,2.76,0,0,1,2.36,1,3.47,3.47,0,0,1,2.44-1,2.67,2.67,0,0,1,2.76,2.68Z" fill="#fff"/><path d="M34,16l-2,5.6a1.31,1.31,0,0,1-1.25,1h-.08a1.26,1.26,0,0,1-1.2-1l-1.24-3.92L27,21.62a1.23,1.23,0,0,1-1.2,1h-.08a1.34,1.34,0,0,1-1.2-1l-1.92-5.52a2,2,0,0,1-.13-.52,1,1,0,0,1,1.09-1,1.11,1.11,0,0,1,1.08.88l1.2,4,1.24-4a1.15,1.15,0,0,1,1.12-.88h.12a1.15,1.15,0,0,1,1.12.88l1.24,4,1.25-4A1.08,1.08,0,0,1,33,14.54a1,1,0,0,1,1,1A1.23,1.23,0,0,1,34,16Z" fill="#ffffff"/></svg>';

export const vmBugIconName = 'vm-bug';
export const vmBugIcon: IconShapeTuple = [vmBugIconName, icon];

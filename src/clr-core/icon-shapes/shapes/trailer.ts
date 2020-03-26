/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M15,19.2c-3.2,0-5.8,2.6-5.8,5.8s2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8S18.2,19.2,15,19.2z M15,29.2c-2.3,0-4.2-1.9-4.2-4.2s1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2S17.3,29.2,15,29.2z"/><rect x="14" y="24" width="2" height="2"/><path d="M33,9H2v13.1c0,0,0,0,0,0C2,24.3,3.7,26,5.9,26H7v-2H5.9c-1,0-1.8-0.8-1.9-1.9V15h22v7.1c0,1-0.8,1.8-1.9,1.9H23v2h1.1c0,0,0,0,0,0c2.1,0,3.8-1.7,3.8-3.9V11h5c0.6,0,1-0.4,1-1S33.6,9,33,9z M26,13H4v-2h22V13z"/>',
  solid:
    '<path d="M33,9H2v13.1c0,0,0,0,0,0C2,24.3,3.7,26,5.9,26H7v-2H5.9c-1,0-1.8-0.8-1.9-1.9V15h22v7.1c0,1-0.8,1.8-1.9,1.9H23v2h1.1c0,0,0,0,0,0c2.1,0,3.8-1.7,3.8-3.9V11h5c0.6,0,1-0.4,1-1S33.6,9,33,9z"/><path d="M15,19.2c-3.2,0-5.8,2.6-5.8,5.8s2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8l0,0C20.8,21.8,18.2,19.2,15,19.2z M16,26h-2v-2h2V26z"/>',
};

export const trailerIconName = 'trailer';
export const trailerIcon: IconShapeTuple = [trailerIconName, renderIcon(icon)];

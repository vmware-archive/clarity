/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export interface Server {
  ip: string;
  running: boolean;
  name: string;
  disabled: boolean;
}

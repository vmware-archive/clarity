/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Pokemon } from './pokemon';

export interface User {
  id: number;
  name: string;
  creation: Date;
  color: string;
  pokemon: Pokemon;

  // Type for dynamic access to specific properties
  [key: string]: any;
}

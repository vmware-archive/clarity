/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export enum DatagridColumnChanges {
  WIDTH,
  HIDDEN,
  ORDER,
}

export const ALL_COLUMN_CHANGES: DatagridColumnChanges[] = Object.keys(DatagridColumnChanges)
  .map(key => DatagridColumnChanges[key])
  .filter(key => key === parseInt(key, 10)); // extracts only integer keys

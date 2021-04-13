/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/**
 * Enumeration representing the sorting order of a datagrid column. It is a constant Enum,
 * i.e. each value needs to be treated as a `number`, starting at index 0.
 *
 * @export
 * @enum {number}
 */
export enum ClrDatagridSortOrder {
  UNSORTED = 0,
  ASC = 1,
  DESC = -1,
}

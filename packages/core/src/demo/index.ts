/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/**
 * Interal demo data and utilities used for example apps and documentation
 */

export * from './utils.js';
export * from './data/demo.service.js';
export * from './data/interfaces.js';

export interface TestVM {
  id: string;
  status: 'online' | 'disruption' | 'offline' | 'deactivated';
  cpu: number;
  memory: number;
  selected: boolean;
  about: string;
}

export enum StatusDisplayType {
  online = 'success',
  disruption = 'warning',
  offline = 'danger',
  deactivated = 'neutral',
}

export enum StatusIconType {
  online = 'check-circle',
  disruption = 'exclamation-triangle',
  offline = 'exclamation-circle',
  deactivated = 'disconnect',
}

export enum ColumnTypes {
  Host = 1,
  Status = 2,
  CPU = 4,
  Memory = 8,
  All = ColumnTypes.Host | ColumnTypes.Status | ColumnTypes.CPU | ColumnTypes.Memory,
}

/**
 * @demo
 * This is a demo function used to standardize demos across framework examples. Do not use in production.
 */
export function getVMData(): TestVM[] {
  return [
    { id: 'vm-host-001', status: 'online', cpu: 5, memory: 10, selected: false, about: 'Lorem ipsum dolor sit amet' },
    { id: 'vm-host-003', status: 'online', cpu: 10, memory: 30, selected: false, about: 'Lorem ipsum dolor sit amet' },
    { id: 'vm-host-002', status: 'online', cpu: 20, memory: 30, selected: false, about: 'Lorem ipsum dolor sit amet' },
    { id: 'vm-host-011', status: 'online', cpu: 5, memory: 15, selected: false, about: 'Lorem ipsum dolor sit amet' },
    { id: 'vm-host-004', status: 'offline', cpu: 90, memory: 80, selected: false, about: 'Lorem ipsum dolor sit amet' },
    { id: 'vm-host-016', status: 'online', cpu: 5, memory: 15, selected: false, about: 'Lorem ipsum dolor sit amet' },
    {
      id: 'vm-host-008',
      status: 'disruption',
      cpu: 50,
      memory: 60,
      selected: false,
      about: 'Lorem ipsum dolor sit amet',
    },
    { id: 'vm-host-018', status: 'offline', cpu: 0, memory: 0, selected: false, about: 'Lorem ipsum dolor sit amet' },
    {
      id: 'vm-host-006',
      status: 'deactivated',
      cpu: 0,
      memory: 0,
      selected: false,
      about: 'Lorem ipsum dolor sit amet',
    },
    { id: 'vm-host-005', status: 'offline', cpu: 85, memory: 70, selected: false, about: 'Lorem ipsum dolor sit amet' },
    {
      id: 'vm-host-014',
      status: 'disruption',
      cpu: 73,
      memory: 62,
      selected: false,
      about: 'Lorem ipsum dolor sit amet',
    },
    { id: 'vm-host-017', status: 'offline', cpu: 0, memory: 0, selected: false, about: 'Lorem ipsum dolor sit amet' },
    {
      id: 'vm-host-007',
      status: 'deactivated',
      cpu: 0,
      memory: 0,
      selected: false,
      about: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 'vm-host-010',
      status: 'disruption',
      cpu: 50,
      memory: 60,
      selected: false,
      about: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 'vm-host-009',
      status: 'disruption',
      cpu: 65,
      memory: 90,
      selected: false,
      about: 'Lorem ipsum dolor sit amet',
    },
    { id: 'vm-host-012', status: 'offline', cpu: 85, memory: 70, selected: false, about: 'Lorem ipsum dolor sit amet' },
    {
      id: 'vm-host-020',
      status: 'deactivated',
      cpu: 0,
      memory: 0,
      selected: false,
      about: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 'vm-host-013',
      status: 'deactivated',
      cpu: 0,
      memory: 0,
      selected: false,
      about: 'Lorem ipsum dolor sit amet',
    },
    { id: 'vm-host-015', status: 'online', cpu: 15, memory: 20, selected: false, about: 'Lorem ipsum dolor sit amet' },
    { id: 'vm-host-019', status: 'online', cpu: 34, memory: 28, selected: false, about: 'Lorem ipsum dolor sit amet' },
  ];
}

/**
 * @demo
 * This is a demo function used to standardize demos across framework examples. Do not use in production.
 */
export function getVMDataAsync(delay = 0): Promise<TestVM[]> {
  return new Promise(resolve => setTimeout(() => resolve(getVMData()), delay));
}

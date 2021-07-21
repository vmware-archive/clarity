/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { DemoData } from './interfaces.js';

export const infrastructure: DemoData = {
  grid: {
    label: 'VM Hosts',
    rowActions: [
      { label: 'Restart', value: 'restart' },
      { label: 'Shutdown', value: 'shutdown' },
    ],
    columns: [
      { id: 1, label: 'Host' },
      { id: 2, label: 'Status' },
      { id: 4, label: 'Region' },
      { id: 8, label: 'CPU', suffix: '%' },
      { id: 16, label: 'Memory', suffix: '%' },
    ],
    rows: [
      {
        id: 'vm-host-001',
        cells: [{ value: 'vm-host-001' }, { value: 'online' }, { value: 'US West' }, { value: 5 }, { value: 10 }],
      },
      {
        id: 'vm-host-003',
        cells: [{ value: 'vm-host-003' }, { value: 'online' }, { value: 'US East' }, { value: 10 }, { value: 30 }],
      },
      {
        id: 'vm-host-002',
        cells: [{ value: 'vm-host-002' }, { value: 'online' }, { value: 'Europe' }, { value: 20 }, { value: 30 }],
      },
      {
        id: 'vm-host-011',
        cells: [{ value: 'vm-host-011' }, { value: 'online' }, { value: 'Asia Pacific' }, { value: 5 }, { value: 15 }],
      },
      {
        id: 'vm-host-004',
        cells: [
          { value: 'vm-host-004' },
          { value: 'offline' },
          { value: 'Asia Pacific' },
          { value: 90 },
          { value: 80 },
        ],
      },
      {
        id: 'vm-host-016',
        cells: [{ value: 'vm-host-016' }, { value: 'online' }, { value: 'Europe' }, { value: 5 }, { value: 15 }],
      },
      {
        id: 'vm-host-008',
        cells: [{ value: 'vm-host-008' }, { value: 'disruption' }, { value: 'US West' }, { value: 50 }, { value: 60 }],
      },
      {
        id: 'vm-host-018',
        cells: [{ value: 'vm-host-018' }, { value: 'offline' }, { value: 'US West' }, { value: 0 }, { value: 0 }],
      },
      {
        id: 'vm-host-006',
        cells: [{ value: 'vm-host-006' }, { value: 'deactivated' }, { value: 'Europe' }, { value: 0 }, { value: 0 }],
      },
      {
        id: 'vm-host-005',
        cells: [
          { value: 'vm-host-005' },
          { value: 'offline' },
          { value: 'Asia Pacific' },
          { value: 85 },
          { value: 70 },
        ],
      },
      {
        id: 'vm-host-014',
        cells: [{ value: 'vm-host-014' }, { value: 'disruption' }, { value: 'US East' }, { value: 73 }, { value: 62 }],
      },
      {
        id: 'vm-host-017',
        cells: [{ value: 'vm-host-017' }, { value: 'offline' }, { value: 'Europe' }, { value: 0 }, { value: 0 }],
      },
      {
        id: 'vm-host-007',
        cells: [{ value: 'vm-host-007' }, { value: 'deactivated' }, { value: 'Europe' }, { value: 0 }, { value: 0 }],
      },
      {
        id: 'vm-host-010',
        cells: [{ value: 'vm-host-010' }, { value: 'disruption' }, { value: 'Europe' }, { value: 50 }, { value: 60 }],
      },
      {
        id: 'vm-host-009',
        cells: [
          { value: 'vm-host-009' },
          { value: 'disruption' },
          { value: 'Asia Pacific' },
          { value: 65 },
          { value: 90 },
        ],
      },
      {
        id: 'vm-host-012',
        cells: [
          { value: 'vm-host-012' },
          { value: 'offline' },
          { value: 'Asia Pacific' },
          { value: 85 },
          { value: 75 },
        ],
      },
      {
        id: 'vm-host-020',
        cells: [{ value: 'vm-host-020' }, { value: 'deactivated' }, { value: 'US East' }, { value: 0 }, { value: 0 }],
      },
      {
        id: 'vm-host-013',
        cells: [{ value: 'vm-host-013' }, { value: 'deactivated' }, { value: 'US East' }, { value: 0 }, { value: 0 }],
      },
      {
        id: 'vm-host-015',
        cells: [{ value: 'vm-host-015' }, { value: 'online' }, { value: 'US West' }, { value: 15 }, { value: 20 }],
      },
      {
        id: 'vm-host-019',
        cells: [{ value: 'vm-host-019' }, { value: 'online' }, { value: 'Asia Pacific' }, { value: 35 }, { value: 30 }],
      },
    ],
  },
};

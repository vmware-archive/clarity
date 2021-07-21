/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { deepClone } from '@cds/core/internal';
import { food } from './food.data.js';
import { infrastructure } from './infrastructure.data.js';
import { DemoData } from './interfaces.js';
import { system } from './system.data.js';

export class DemoService {
  static get data(): DemoData {
    const key = localStorage.getItem('cds-data-theme');
    return DemoService.getData((key !== 'undefined' ? key : 'infrastructure') as any);
  }

  static get asyncData(): Promise<DemoData> {
    return new Promise(resolve => setTimeout(() => resolve(DemoService.data), 2000));
  }

  static getData(type: 'system' | 'infrastructure' | 'food') {
    const data: DemoData = deepClone({ system, infrastructure, food }[type]);
    data.grid.columns.forEach(column => (column.sort = 'none'));
    data.grid.rows.forEach(r => {
      r.selected = false;
      r.cells.forEach((c: any, i) => (c.label = `${c.value}${data.grid.columns[i].suffix ?? ''}`));
    });

    return data;
  }
}

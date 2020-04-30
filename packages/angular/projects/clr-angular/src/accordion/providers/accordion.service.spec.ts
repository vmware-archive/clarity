/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { AccordionService } from './accordion.service';
import { take } from 'rxjs/operators';
import { AccordionStrategy } from '../enums/accordion-strategy.enum';

describe('AccordionService', () => {
  let accordionService: AccordionService;
  const panel1Id = '0';
  const panel2Id = '1';

  beforeEach(() => {
    accordionService = new AccordionService();
    accordionService.addPanel(panel1Id);
    accordionService.addPanel(panel2Id);
    accordionService.updatePanelOrder([panel1Id, panel2Id]);
  });

  it('should get updates of an individual panel change', () => {
    accordionService
      .getPanelChanges(panel1Id)
      .pipe(take(1))
      .subscribe(panel => expect(panel.id).toBe(panel1Id));
  });

  it('should update of panel changes when toggling to new panel', () => {
    accordionService.togglePanel(panel2Id);
    accordionService
      .getPanelChanges(panel1Id)
      .pipe(take(1))
      .subscribe(panel => expect(panel.open).toBe(false));
  });

  it('should update panel disabled state', () => {
    accordionService.disablePanel(panel1Id, true);
    accordionService
      .getPanelChanges(panel1Id)
      .pipe(take(1))
      .subscribe(panel => expect(panel.disabled).toBe(true));
  });

  it('should notify of panel changes when panel order has changed', () => {
    accordionService.updatePanelOrder([panel2Id, panel1Id]);
    accordionService
      .getPanelChanges(panel1Id)
      .pipe(take(1))
      .subscribe(panel => expect(panel.index).toBe(1));
  });

  it('should allow component to set the active accordion strategy', () => {
    accordionService.setStrategy(AccordionStrategy.Multi);
    accordionService.togglePanel(panel1Id);
    accordionService.togglePanel(panel2Id);

    accordionService
      .getPanelChanges(panel1Id)
      .pipe(take(1))
      .subscribe(panel => expect(panel.open).toBe(true));

    accordionService
      .getPanelChanges(panel2Id)
      .pipe(take(1))
      .subscribe(panel => expect(panel.open).toBe(true));
  });
});

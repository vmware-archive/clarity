/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { AccordionModel } from './accordion.model';
import { AccordionStrategy } from '../enums/accordion-strategy.enum';

describe('AccordionModel', () => {
  let accordion: AccordionModel;
  const panel1Id = '0';
  const panel2Id = '1';
  const panel3Id = '2';

  beforeEach(() => {
    accordion = new AccordionModel();
    accordion.addPanel(panel1Id);
    accordion.addPanel(panel2Id);
    accordion.addPanel(panel3Id);
    accordion.updatePanelOrder([panel1Id, panel2Id, panel3Id]);
  });

  it('should add new AccordionPanelModel instances', () => {
    expect(accordion.panels.length).toBe(3);
  });

  it('should disable or enable a panel', () => {
    expect(accordion.panels[panel1Id].disabled).toBe(false);
    accordion.disablePanel(panel1Id, true);
    expect(accordion.panels[panel1Id].disabled).toBe(true);
  });

  it('should remove panels from collection when re-synced with ContentChildren', () => {
    expect(accordion.panels.length).toBe(3);
    accordion.updatePanelOrder([panel1Id, panel3Id]);
    expect(accordion.panels.length).toBe(2);
  });

  it('should close all other panels when opening a new panel', () => {
    expect(accordion.panels[0].open).toBe(false);
    expect(accordion.panels[1].open).toBe(false);
    expect(accordion.panels[2].open).toBe(false);

    accordion.togglePanel(panel1Id);

    expect(accordion.panels[0].open).toBe(true);
    expect(accordion.panels[1].open).toBe(false);
    expect(accordion.panels[2].open).toBe(false);

    accordion.togglePanel(panel2Id);

    expect(accordion.panels[0].open).toBe(false);
    expect(accordion.panels[1].open).toBe(true);
    expect(accordion.panels[2].open).toBe(false);
  });

  it('should allow multiple panels open if in multi panel mode', () => {
    accordion.setStrategy(AccordionStrategy.Multi);

    expect(accordion.panels[0].open).toBe(false);
    expect(accordion.panels[1].open).toBe(false);
    expect(accordion.panels[2].open).toBe(false);

    accordion.togglePanel(panel1Id);
    accordion.togglePanel(panel2Id);

    expect(accordion.panels[0].open).toBe(true);
    expect(accordion.panels[1].open).toBe(true);
    expect(accordion.panels[2].open).toBe(false);
  });
});

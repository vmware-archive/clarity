/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Observable, Subscription } from 'rxjs';

import { MockDatagridRenderOrganizer } from '../render/render-organizer.mock';

import { DatagridDisplayMode } from './../enums/display-mode.enum';
import { DatagridRenderStep } from './../enums/render-step.enum';
import { MockDisplayModeService } from './display-mode.mock';

interface UserContext {
  organizer: MockDatagridRenderOrganizer;
  displayService: MockDisplayModeService;
  displayViewServiceSubscription: Subscription;
}

export default function(): void {
  describe('DisplayMode Service', () => {
    beforeEach(function(this: UserContext) {
      this.organizer = new MockDatagridRenderOrganizer();
      this.displayService = new MockDisplayModeService(this.organizer);
    });

    afterEach(function(this: UserContext) {
      if (this.displayViewServiceSubscription) {
        this.displayViewServiceSubscription.unsubscribe();
      }
    });

    it('exposes an Observable for display mode view state', function() {
      const viewObservable = this.displayService.view;
      expect(viewObservable).toBeDefined();
      expect(viewObservable instanceof Observable).toBe(true);
    });

    it('properly updates the view mode when organizer resizes', function(this: UserContext) {
      let currentChange: DatagridDisplayMode;
      let displayChangeCount = 0;
      this.displayViewServiceSubscription = this.displayService.view.subscribe(viewChange => {
        displayChangeCount++;
        currentChange = viewChange;
      });
      expect(currentChange).toBe(DatagridDisplayMode.DISPLAY);
      this.organizer.resize();
      expect(currentChange).toBe(DatagridDisplayMode.DISPLAY);
      expect(displayChangeCount).toBe(3); // +1 b/c of the behavior subject.
    });

    it('it defaults to DatagridDisplayMode.DISPLAY', function() {
      const viewObservable = this.displayService.view;
      let currentView = null;
      this.displayViewServiceSubscription = viewObservable.subscribe(viewChange => {
        currentView = viewChange;
      });
      expect(currentView).toBe(DatagridDisplayMode.DISPLAY);
    });

    it('updates the view for DatagridDisplayMode.DISPLAY', function() {
      const viewObservable = this.displayService.view;
      let currentView = null;
      this.displayViewServiceSubscription = viewObservable.subscribe(viewChange => {
        currentView = viewChange;
      });
      this.organizer.updateRenderStep.next(DatagridRenderStep.CALCULATE_MODE_OFF);
      expect(currentView).toBe(DatagridDisplayMode.DISPLAY);
    });

    it('updates the view for DatagridDisplayMode.CALCULATE', function() {
      const viewObservable = this.displayService.view;
      let currentView = null;
      this.displayViewServiceSubscription = viewObservable.subscribe(viewChange => {
        currentView = viewChange;
      });
      this.organizer.updateRenderStep.next(DatagridRenderStep.CALCULATE_MODE_ON);
      expect(currentView).toBe(DatagridDisplayMode.CALCULATE);
    });
  });
}

/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DatagridRenderStep } from './../enums/render-step.enum';
import { DatagridRenderOrganizer } from './render-organizer';

/**
 * Having a little fun with Typescript just to see how it goes.
 */
interface UserContext {
  organizer: DatagridRenderOrganizer;
}

export default function (): void {
  describe('DatagridRenderOrganizer', function () {
    beforeEach(function (this: UserContext) {
      this.organizer = new DatagridRenderOrganizer();
    });

    it("doesn't clear widths on the first rendering", function (this: UserContext) {
      let clearedWidths = false;
      this.organizer.renderStep.subscribe(step => {
        if (step === DatagridRenderStep.CLEAR_WIDTHS) {
          clearedWidths = true;
        }
      });
      this.organizer.resize();
      expect(clearedWidths).toBe(false);
      this.organizer.resize();
      expect(clearedWidths).toBe(true);
    });

    it('follows the correct rendering order', function (this: UserContext) {
      // Initial sizing to make sure clearWidths is included in the next one.
      this.organizer.resize();
      const stepsRecieved: DatagridRenderStep[] = [];
      this.organizer.renderStep.subscribe(renderStep => {
        stepsRecieved.push(renderStep);
      });
      this.organizer.resize();

      expect(stepsRecieved).toEqual([
        DatagridRenderStep.CALCULATE_MODE_ON,
        DatagridRenderStep.CLEAR_WIDTHS,
        DatagridRenderStep.COMPUTE_COLUMN_WIDTHS,
        DatagridRenderStep.ALIGN_COLUMNS,
        DatagridRenderStep.CALCULATE_MODE_OFF,
      ]);
    });

    it('provides a filtering utility that targets one step', function (this: UserContext) {
      let currentStep: DatagridRenderStep = null;
      this.organizer.filterRenderSteps(DatagridRenderStep.ALIGN_COLUMNS).subscribe(step => (currentStep = step));
      expect(currentStep).toBeNull();
      this.organizer.resize();
      expect(currentStep).toBe(DatagridRenderStep.ALIGN_COLUMNS);
    });
  });
}

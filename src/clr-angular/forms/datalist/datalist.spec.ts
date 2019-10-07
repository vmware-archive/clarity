/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DatalistIdService } from './providers/datalist-id.service';
import { Component } from '@angular/core';
import { spec, TestContext } from '../../utils/testing/helpers.spec';
import { ClrDatalist } from './datalist';

@Component({
  template: `
    <datalist [id]="testId">
        <option value="one">One</option>
        <option value="two">Two</option>
    </datalist>
  `,
})
export class TestDatalistId {
  testId;
}

type Context = TestContext<ClrDatalist, TestDatalistId>;

export default function(): void {
  describe('Datalist Element', function() {
    let datalistIdService: DatalistIdService;
    spec(ClrDatalist, TestDatalistId, undefined, {
      providers: [DatalistIdService],
    });
    beforeEach(function() {
      datalistIdService = this.getClarityProvider(DatalistIdService);
    });

    it('id attribute is generated if no id is provided', function(this: Context) {
      expect(datalistIdService.id).toEqual(this.clarityElement.id);
    });

    it('id attribute is used when provided on the element', function(this: Context) {
      this.hostComponent.testId = 'custom-id';
      this.detectChanges();
      expect(datalistIdService.id).toEqual(this.clarityElement.id);
      expect(this.clarityElement.id).toEqual('custom-id');
    });
  });
}

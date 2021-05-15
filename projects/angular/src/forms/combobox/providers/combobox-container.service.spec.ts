/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ComboboxContainerService } from './combobox-container.service';

export default function () {
  describe('Container Service', () => {
    let containerService: ComboboxContainerService;

    beforeEach(() => {
      containerService = new ComboboxContainerService();
    });

    it('can change the default offset value', () => {
      // this is shared between components, so we add protection in case of future implementation changes
      expect(containerService.labelOffset).toBe(0);
      containerService.labelOffset = 42;
      expect(containerService.labelOffset).toBe(42);
    });

    it('can change the default label text value', () => {
      // this is shared between components, so we add protection in case of future implementation changes
      expect(containerService.labelText).toBe(undefined);
      containerService.labelText = 'life, universe and everything';
      expect(containerService.labelText).toBe('life, universe and everything');
    });
  });
}

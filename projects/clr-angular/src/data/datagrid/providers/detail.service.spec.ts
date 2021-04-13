/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DetailService } from './detail.service';
import { Subscription } from 'rxjs';

export default function (): void {
  describe('DetailService provider', function () {
    let provider: DetailService;
    let subscription: Subscription;

    beforeEach(function () {
      provider = new DetailService();
    });

    afterEach(() => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });

    it('should set the open and close the detail state', () => {
      provider.open('value');
      expect(provider.isOpen).toBeTrue();
      provider.close();
      expect(provider.isOpen).toBeFalse();
    });

    it('should capture the button and focus on close', () => {
      const button = document.createElement('button');
      spyOn(button, 'focus').and.callThrough();
      document.body.appendChild(button);
      provider.open('value', button);
      expect(provider.isOpen);
      provider.close();
      expect(document.activeElement).toEqual(button);
      expect(button.focus).toHaveBeenCalled();
      document.body.removeChild(button);
    });

    it('exposes a stageChange observable that responds to open and close', () => {
      let state: boolean;
      subscription = provider.stateChange.subscribe(updated => (state = updated));
      expect(state).toBeFalse();
      provider.open('one');
      expect(state).toBeTrue();
      provider.close();
      expect(state).toBeFalse();
      provider.open('two');
      expect(state).toBeTrue();
    });

    it('caches the latest opened detail data', () => {
      provider.open('one');
      expect(provider.state).toEqual('one');
      provider.close();
      provider.open('two');
      expect(provider.state).toEqual('two');
    });

    it('can detect if it is enabled', () => {
      expect(provider.enabled).toBeFalse();
      provider.enabled = true;
      expect(provider.enabled).toBeTrue();
    });

    it('can detect if a row is open', () => {
      expect(provider.isRowOpen('one')).toBeFalse();
      expect(provider.isRowOpen('two')).toBeFalse();
      provider.open('one');
      expect(provider.isRowOpen('one')).toBeTrue();
      expect(provider.isRowOpen('two')).toBeFalse();
      provider.open('two');
      expect(provider.isRowOpen('one')).toBeFalse();
      expect(provider.isRowOpen('two')).toBeTrue();
    });

    it('toggles the open state', () => {
      // Open the detail
      provider.toggle('one');
      expect(provider.isOpen).toBeTrue();
      // Open a different row
      provider.toggle('two');
      expect(provider.isOpen).toBeTrue();
      // Toggle the currently open row
      provider.toggle('two');
      expect(provider.isOpen).toBeFalse();
    });
  });
}

import { isBrowser } from './environment.js';

describe('Environment Helper: ', () => {
  describe('isBrowser():', () => {
    it('returns true when expected', () => {
      expect(isBrowser()).toBe(true);
    });
  });
});

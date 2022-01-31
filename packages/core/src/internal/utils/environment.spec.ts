import { isBrowser } from './environment';

describe('Environment Helper: ', () => {
  describe('isBrowser():', () => {
    it('returns true when expected', () => {
      expect(isBrowser()).toBe(true);
    });
  });
});

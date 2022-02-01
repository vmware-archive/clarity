import '@testing-library/jest-dom/extend-expect';

// jsdom doesn't implment IntersectionObserver
// https://github.com/jsdom/jsdom/issues/2032
global.IntersectionObserver = jest.fn().mockReturnValue({
  observe: (): null => null,
  unobserve: (): null => null,
  disconnect: (): null => null,
});

global.ResizeObserver = jest.fn().mockReturnValue({
  observe: (): null => null,
  unobserve: (): null => null,
  disconnect: (): null => null,
});

global.MutationObserver = jest.fn().mockReturnValue({
  observe: () => {},
  disconnect: () => {},
});

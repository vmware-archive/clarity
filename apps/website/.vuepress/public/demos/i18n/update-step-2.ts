// Old class format
export class MyCommonStringsService implements ClrCommonStrings {
  open = 'ghIt';
  close = 'SoQmoH';
}

// New object format
export const klingonLocale: ClrCommonStrings = {
  open: 'ghIt',
  close: 'SoQmoH',
};

/*
* Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/

import { preventArrowKeyScroll } from './util';
import { KeyCodes, IEKeyCodes } from '../key-codes.enum';

describe('preventArrowKeyScroll', () => {
  it('should prevent scroll on element based on key event', () => {
    const mockEvent = {
      key: KeyCodes.ArrowDown,
      code: KeyCodes.ArrowDown,
      preventDefault: () => {},
    };

    const mockIncorrectKeyCodeEvent = {
      key: KeyCodes.Space,
      code: 'Space',
      preventDefault: () => {},
    };

    spyOn(mockEvent, 'preventDefault');
    preventArrowKeyScroll(mockEvent as KeyboardEvent);
    expect(mockEvent.preventDefault).toHaveBeenCalled();

    spyOn(mockIncorrectKeyCodeEvent, 'preventDefault');
    preventArrowKeyScroll(mockIncorrectKeyCodeEvent as KeyboardEvent);
    expect(mockIncorrectKeyCodeEvent.preventDefault).not.toHaveBeenCalled();
  });

  it('should prevent scroll for IE', () => {
    const mockEvent = {
      key: IEKeyCodes.ArrowDown,
      code: undefined,
      preventDefault: () => {},
    };

    spyOn(mockEvent, 'preventDefault');
    preventArrowKeyScroll(mockEvent as KeyboardEvent);
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});

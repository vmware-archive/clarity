/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ElementPart, Directive, directive, DirectiveParameters } from 'lit/directive.js';

/*
  @experimental
  Only use within storybook demos
*/
export class SpreadProps extends Directive {
  render() {
    return '';
  }

  update(part: ElementPart, params: DirectiveParameters<this>) {
    Object.entries((params as any)[0])
      .filter(([k, v]: [string, any]) => v !== (part.element as any)[k])
      .forEach(([k, v]) => ((part.element as any)[k] = v));
    return this.render();
  }
}

export const spreadProps: any = directive(SpreadProps);

// for typing spread props directive '..' + '.' property accessor
declare global {
  interface HTMLElement {
    '..': any;
  }
}

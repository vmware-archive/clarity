/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { directive } from 'lit-html';

const previousProps = new WeakMap();

export const spreadProps = directive(props => (part: any) => {
  const prev = previousProps.get(part);
  if (prev === props) {
    return;
  }

  previousProps.set(part, props);

  Object.entries(props)
    .filter(([k, v]) => v !== part.committer.element[k])
    .forEach(([k, v]) => (part.committer.element[k] = v));
});

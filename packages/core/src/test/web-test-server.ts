/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/* web-test-runner.a11y.plugins.mjs */
export interface PlaywrightA11ySnapshotNode {
  role: string;
  name: string;
  children: PlaywrightA11ySnapshotNode[];
}

export function getA11ySnapshotNodes(node: PlaywrightA11ySnapshotNode): PlaywrightA11ySnapshotNode[] {
  node.children = node.children ? node.children : [];
  return node.children
    .reduce((prev, next) => [...prev, ...getA11ySnapshotNodes(next)], [node])
    .map(node => {
      delete node.children;
      return node;
    });
}

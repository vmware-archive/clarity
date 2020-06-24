/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement } from 'lit-element';

export type ResponsiveComponent = LitElement & { layout: string; responsive: boolean; layoutStable: boolean };

export interface LayoutConfig {
  layouts: string[];
  initialLayout: string;
}

export function elementResize(element: HTMLElement, callbackFn: () => void) {
  const observer = new ResizeObserver(() => callbackFn());
  observer.observe(element);
  (observer as any).__testTrigger = callbackFn; // hook to trigger resize event as ResizeObserver does not run in headless chrome.
  return observer;
}

/**
 * Given a ResponsiveComponent this function will loop through a list of layout
 * options and change the layout of the component until the components layout
 * condition is satisfied.
 */
export function updateComponentLayout(component: ResponsiveComponent, layoutConfig: LayoutConfig, fn: () => void) {
  return elementResize(component, () => {
    if (component.responsive) {
      calculateOptimalLayout(component, layoutConfig).then(updated => {
        if (updated) {
          fn();
        }
      });
    }
  });
}

function calculateOptimalLayout(component: ResponsiveComponent, layoutConfig: LayoutConfig): Promise<boolean> {
  return component.updateComplete.then(() => {
    const currentLayout = component.layout;
    component.layout = layoutConfig.layouts[0];

    return layoutConfig.layouts
      .reduce((prev, next) => {
        return prev.then(() => {
          if (component.layout === layoutConfig.initialLayout) {
            return next;
          } else {
            const prev = component.layout;
            component.layout = next;

            return component.updateComplete.then(() => {
              component.layout = component.layoutStable ? component.layout : prev;
              return next;
            });
          }
        });
      }, Promise.resolve<string>(layoutConfig.layouts[0]))
      .then(() => currentLayout !== component.layout);
  });
}

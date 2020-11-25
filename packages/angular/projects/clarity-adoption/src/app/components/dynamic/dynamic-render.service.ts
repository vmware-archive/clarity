import { ComponentFactoryResolver, Injectable, NgModuleRef, ViewContainerRef } from '@angular/core';

/* easy on the typescript, boy! */
export interface ComponentLoader {
  loadChildren: () => Promise<any>;
}

@Injectable({
  providedIn: 'root',
})
export class DynamicRender {
  constructor(private factoryResolver: ComponentFactoryResolver, private ngModuleRef: NgModuleRef<any>) {}

  loadComponent(containerRef: ViewContainerRef, src: any) {
    containerRef.clear(); /* clear container before adding anything */

    this.render(containerRef, {
      loadChildren: this.locateTemplate(src),
    });
  }

  render(containerRef: ViewContainerRef, component: ComponentLoader) {
    component.loadChildren().then(r => {
      return containerRef.createComponent(this.factoryResolver.resolveComponentFactory(r));
    });
  }

  private locateTemplate(src: any) {
    return () => {
      return import(
        /**
         * Make sure that we import only `ts` files when we try to load components
         * https://webpack.js.org/api/module-methods/#magic-comments
         */
        /* webpackInclude: /\.ts$/ */
        `../../migrations/${src}`
      ).then(this.locateComponent);
    };
  }

  private locateComponent(importModule) {
    return importModule[Object.keys(importModule)[0]];
  }
}

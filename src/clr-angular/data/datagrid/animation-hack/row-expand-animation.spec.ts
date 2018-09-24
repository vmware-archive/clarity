/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Expand } from '../../../utils/expand/providers/expand';
import { MOCK_DOM_ADAPTER_PROVIDER } from '../../../utils/dom-adapter/dom-adapter.mock';
import { DatagridRenderOrganizer } from '../render/render-organizer';

import { DatagridRowExpandAnimation } from './row-expand-animation';

/*
 * TODO: web animations testing doesn't play nicely with PhantomJS. Pushing this to later.
 */
export default function(): void {
  // Commenting this out because PhantomJS is being uncooperative.
  // I lost too much time trying to get it to pass, but this should just go away anyway once the
  // new cool features of Angular 4.1 animations come in.
  xdescribe('DatagridRowExpandAnimation directive', function() {
    beforeEach(function() {
      // We do not use the TestContext on purpose, because we want to test this directive in isolation,
      // without all other components and directives on the same selector.
      // TODO: improve the TestContext to allow this.
      TestBed.configureTestingModule({
        declarations: [DatagridRowExpandAnimation, SimpleTest],
        providers: [Expand, DatagridRenderOrganizer, MOCK_DOM_ADAPTER_PROVIDER],
      });
      this.fixture = TestBed.createComponent(SimpleTest);
      this.fixture.detectChanges();
      this.testComponent = this.fixture.componentInstance;
      this.clarityElement = this.fixture.debugElement.query(By.directive(DatagridRowExpandAnimation)).nativeElement;
      this.expand = TestBed.get(Expand);
    });

    afterEach(function() {
      this.fixture.destroy();
    });

    it('immediately sets the height of the row before animating', function() {
      expect(this.clarityElement.style.height).toBeFalsy();
      this.expand.expanded = true;
      expect(this.clarityElement.style.height).toBeTruthy();
    });
  });
}

@Component({ template: `<clr-dg-row>Hello world</clr-dg-row>` })
class SimpleTest {}

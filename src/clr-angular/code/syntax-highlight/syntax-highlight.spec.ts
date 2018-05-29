/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrSyntaxHighlightModule } from './syntax-highlight.module';

/** @deprecated since 0.12 */
@Component({
  template: `
        <pre>
            <code clr-code-highlight="language-html">
                &lt;span aria-hidden=&quot;true&quot;&gt;&amp;times;&lt;/span&gt;
            </code>
        </pre>
   `,
})
class TestComponent {}

describe('CodeHighlight', () => {
  let fixture: ComponentFixture<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ClrSyntaxHighlightModule], declarations: [TestComponent] });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('extends a language-* class on the code tag', () => {
    expect(fixture.nativeElement.querySelector('code.language-html')).not.toBeNull();
  });
});

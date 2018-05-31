/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OutsideClick } from './outside-click';

describe('Loading directive', function() {
  beforeEach(function() {
    TestBed.configureTestingModule({ declarations: [OutsideClick, FullTest] });
    this.fixture = TestBed.createComponent(FullTest);
    this.fixture.detectChanges();
    this.testComponent = this.fixture.componentInstance;
    this.host = this.fixture.debugElement.query(By.css('.host')).nativeElement;
    this.button = this.fixture.debugElement.query(By.css('button')).nativeElement;
    this.outside = this.fixture.debugElement.query(By.css('.outside')).nativeElement;
  });

  afterEach(function() {
    this.fixture.destroy();
  });

  it('emits clicks outside of the host', function() {
    expect(this.testComponent.nbClicks).toBe(0);
    this.outside.click();
    expect(this.testComponent.nbClicks).toBe(1);
    this.outside.click();
    expect(this.testComponent.nbClicks).toBe(2);
  });

  it('ignores clicks inside of the host', function() {
    expect(this.testComponent.nbClicks).toBe(0);
    this.host.click();
    expect(this.testComponent.nbClicks).toBe(0);
    this.button.click();
    expect(this.testComponent.nbClicks).toBe(0);
  });

  it('offers a strict input to only ignore clicks that happen exactly on the host', function() {
    this.testComponent.strict = true;
    this.fixture.detectChanges();
    expect(this.testComponent.nbClicks).toBe(0);
    this.host.click();
    expect(this.testComponent.nbClicks).toBe(0);
    this.button.click();
    expect(this.testComponent.nbClicks).toBe(1);
  });
});

@Component({
  template: `
        <p class="outside">Hello World</p>
        <p class="host" (clrOutsideClick)="inc()" [clrStrict]="strict">
            <button>Button</button>
        </p>
        
    `,
})
class FullTest {
  public strict = false;
  public nbClicks = 0;

  inc() {
    this.nbClicks++;
  }
}

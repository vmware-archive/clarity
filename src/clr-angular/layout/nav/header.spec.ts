/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrIconModule } from '../../icon/icon.module';

import { MainContainerWillyWonka } from './chocolate/main-container-willy-wonka';
import { ClrNavigationModule } from './navigation.module';

@Component({
  template: `        
        <clr-header class="header">
            <div class="branding">
                <a href="#" class="nav-link">
                    <clr-icon shape="vm-bug"></clr-icon>
                    <span class="title">Title</span>
                </a>
            </div>
            <div class="header-nav" [clr-nav-level]="1">
                <a class="active nav-link" href="javascript://"><span class="nav-text">Components</span></a>
            </div>
            <div class="header-nav" [clr-nav-level]="2">
                <a class="active nav-link" href="javascript://"><span class="nav-text">About</span></a>
            </div>
        </clr-header>
   `,
})
class TestComponent {}

describe('Header', () => {
  let fixture: ComponentFixture<any>;
  let compiled: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClrNavigationModule, ClrIconModule],
      declarations: [TestComponent],
      providers: [MainContainerWillyWonka],
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('projects content', () => {
    expect(compiled.textContent).toMatch(/Title/);
    expect(compiled.textContent).toMatch(/Components/);
  });

  it('shows the hamburger trigger when the level1 directive is registered', () => {
    expect(compiled.querySelector('.header-hamburger-trigger')).not.toBeNull();
  });

  it('shows the overflow trigger when the level2 directive is registered', () => {
    expect(compiled.querySelector('.header-overflow-trigger')).not.toBeNull();
  });
});

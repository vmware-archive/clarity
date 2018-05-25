/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Inject, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UNIQUE_ID, UNIQUE_ID_PROVIDER } from './id-generator.service';

@Component({
  selector: 'id-test',
  template: `
        <div [id]="divId">My Div</div>`,
  providers: [UNIQUE_ID_PROVIDER],
})
class IdTest {
  constructor(@Inject(UNIQUE_ID) public divId: string) {}
}

@NgModule({ declarations: [IdTest], exports: [IdTest] })
class IdTestingModule {}

@Component({
  template: `
        <id-test></id-test>
        <id-test></id-test>
        <id-test></id-test>`,
})
class UniqueIdTest {}

describe('ID Generator Service', function() {
  it("generates uniq id's", function() {
    let fixture: ComponentFixture<UniqueIdTest>;
    TestBed.configureTestingModule({
      imports: [IdTestingModule],
      providers: [UNIQUE_ID_PROVIDER],
      declarations: [UniqueIdTest],
    });
    fixture = TestBed.createComponent(UniqueIdTest);
    fixture.detectChanges();

    const elements = fixture.debugElement.queryAll(By.directive(IdTest));

    for (const element of elements) {
      // For each element, filter the array of elements and remove the ones w/ the same id
      const unmatched = elements.filter(
        otherElement => otherElement.nativeElement.lastChild.id !== element.nativeElement.lastChild.id
      );

      // Expect to have two unmatched elements (b/c we have three in UniqueIdTest template)
      expect(unmatched.length).toBe(2);
    }
    fixture.destroy();
  });
});

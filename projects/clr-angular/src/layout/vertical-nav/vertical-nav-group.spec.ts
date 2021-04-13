/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ClrIconModule } from '../../icon/icon.module';
import { IfExpandService } from '../../utils/conditional/if-expanded.service';

import { VerticalNavGroupRegistrationService } from './providers/vertical-nav-group-registration.service';
import { VerticalNavService } from './providers/vertical-nav.service';
import { ClrVerticalNavGroup } from './vertical-nav-group';
import { ClrVerticalNavModule } from './vertical-nav.module';

export default function (): void {
  describe('Vertical Nav Group', () => {
    let fixture: ComponentFixture<any>;
    let compiled: HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrVerticalNavModule, ClrIconModule, NoopAnimationsModule],
        declarations: [GroupInternalsTestComponent, IfExpandedTestComponent, TemplateAPITestComponent],
        providers: [VerticalNavService, VerticalNavGroupRegistrationService],
      });
    });

    describe('Nav Group Internals', () => {
      let navGroup: ClrVerticalNavGroup;
      let expandService: IfExpandService;
      let vertNavService: VerticalNavService;

      beforeEach(() => {
        fixture = TestBed.createComponent(GroupInternalsTestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
        navGroup = fixture.componentInstance.navGroup;
        expandService = fixture.debugElement.query(By.directive(ClrVerticalNavGroup)).injector.get(IfExpandService);
        vertNavService = TestBed.get(VerticalNavService);
      });

      afterEach(() => {
        fixture.destroy();
      });

      it('provides a method which communicates with the Expand service to expand the nav group', () => {
        expect(navGroup.expanded).toBe(false);

        navGroup.expanded = true;
        fixture.detectChanges();
        expect(expandService.expanded).toBe(true);

        navGroup.expanded = false;
        fixture.detectChanges();
        expect(expandService.expanded).toBe(false);
      });

      it('sets the correct animation state on expand and collapse', () => {
        expect(navGroup.expandAnimationState).toBe('collapsed');

        navGroup.toggleExpand();
        fixture.detectChanges();

        expect(navGroup.expandAnimationState).toBe('expanded');

        navGroup.toggleExpand();
        fixture.detectChanges();

        expect(navGroup.expandAnimationState).toBe('collapsed');
      });

      it('provides a method which toggles the expanded state of a nav group', () => {
        expect(navGroup.expanded).toBe(false);

        navGroup.toggleExpand();
        fixture.detectChanges();
        expect(navGroup.expanded).toBe(true);
        expect(expandService.expanded).toBe(true);

        navGroup.toggleExpand();
        fixture.detectChanges();
        expect(navGroup.expandAnimationState).toBe('collapsed');

        fixture.whenStable().then(() => {
          expect(navGroup.expanded).toBe(false);
          expect(expandService.expanded).toBe(false);
        });
      });

      it('sets the expanded state to false when the nav is collapsed', () => {
        vertNavService.collapsible = true;

        navGroup.toggleExpand();
        fixture.detectChanges();
        expect(navGroup.expanded).toBe(true);

        vertNavService.collapsed = true;

        fixture.detectChanges();

        fixture.whenStable().then(() => {
          expect(navGroup.expandAnimationState).toBe('collapsed');
          expect(navGroup.expanded).toBe(false);
        });
      });

      it(
        'contains the links even if the nav group is not in ' + 'expanded state when clrIfExpanded is not used',
        () => {
          expect(navGroup.expanded).toBe(false);
          expect(compiled.querySelector('.nav-group-children').children.length).toBeGreaterThan(0);
        }
      );
    });

    describe('Nav Group Internals with clrIfExpanded', () => {
      let navGroup: ClrVerticalNavGroup;

      beforeEach(() => {
        fixture = TestBed.createComponent(IfExpandedTestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
        navGroup = fixture.componentInstance.navGroup;
      });

      afterEach(() => {
        fixture.destroy();
      });

      it(
        'does not contains the links if the nav group is not in ' + 'expanded state when clrIfExpanded is used',
        () => {
          expect(navGroup.expanded).toBe(false);
          expect(compiled.querySelector('.nav-group-children').children.length).toBe(0);
        }
      );

      it('contains the links if the nav group is not in ' + 'expanded state when clrIfExpanded is used', () => {
        expect(navGroup.expanded).toBe(false);
        expect(compiled.querySelector('.nav-group-children').children.length).toBe(0);

        navGroup.expanded = true;
        fixture.detectChanges();

        expect(compiled.querySelector('.nav-group-children').children.length).toBeGreaterThan(0);
      });
    });

    describe('Template API', () => {
      let navGroup: ClrVerticalNavGroup;
      let expandService: IfExpandService;

      beforeEach(() => {
        fixture = TestBed.createComponent(TemplateAPITestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
        navGroup = fixture.componentInstance.navGroup;
        expandService = fixture.debugElement.query(By.directive(ClrVerticalNavGroup)).injector.get(IfExpandService);
      });

      afterEach(() => {
        fixture.destroy();
      });

      it('provides an input to set the expanded state of the nav group', () => {
        expect(fixture.componentInstance.expanded).toBe(false);

        fixture.componentInstance.expanded = true;
        fixture.detectChanges();

        expect(navGroup.expanded).toBe(true);
        expect(expandService.expanded).toBe(true);

        fixture.componentInstance.expanded = false;
        fixture.detectChanges();

        // when stable because collapse animation happens first.
        // need when stable for the nav group to complete the animation.
        fixture.whenStable().then(() => {
          expect(navGroup.expanded).toBe(false);
          expect(expandService.expanded).toBe(false);
        });
      });

      it('emits the expanded state when its changed', fakeAsync(function () {
        expect(fixture.componentInstance.expanded).toBe(false);
        expect(navGroup.expanded).toBe(false);
        expect(expandService.expanded).toBe(false);
        expect(fixture.componentInstance.expandedChange).toBeUndefined();

        navGroup.toggleExpand();
        fixture.detectChanges();

        tick();

        expect(fixture.componentInstance.expandedChange).toBe(true);
      }));
    });

    describe('View Basics', () => {
      let navGroup: ClrVerticalNavGroup;

      beforeEach(() => {
        fixture = TestBed.createComponent(TemplateAPITestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
        navGroup = fixture.componentInstance.navGroup;
      });

      afterEach(() => {
        fixture.destroy();
      });

      it('toggles the expanded state when the .nav-group-trigger is clicked', () => {
        expect(navGroup.expanded).toBe(false);

        const button: HTMLElement = compiled.querySelector('.nav-group-trigger');

        button.click();

        fixture.detectChanges();

        expect(navGroup.expanded).toBe(true);
      });

      it('updates the buttons aria-expanded attribute', () => {
        const button: HTMLButtonElement = compiled.querySelector('.nav-group-trigger');
        expect(button.getAttribute('aria-expanded')).toBe('false');
        navGroup.expanded = true;
        fixture.detectChanges();
        expect(button.getAttribute('aria-expanded')).toBe('true');
      });
    });
  });
}

@Component({
  template: `
    <clr-vertical-nav-group #group>
      Group
      <clr-vertical-nav-group-children>
        <a href="#" clrVerticalNavLink>
          Link
        </a>
      </clr-vertical-nav-group-children>
    </clr-vertical-nav-group>
  `,
})
class GroupInternalsTestComponent {
  @ViewChild('group') navGroup: ClrVerticalNavGroup;
}

@Component({
  template: `
    <clr-vertical-nav-group #group>
      Group
      <ng-template clrIfExpanded>
        <clr-vertical-nav-group-children>
          <a href="#" clrVerticalNavLink>
            Link
          </a>
        </clr-vertical-nav-group-children>
      </ng-template>
    </clr-vertical-nav-group>
  `,
})
class IfExpandedTestComponent {
  @ViewChild('group') navGroup: ClrVerticalNavGroup;
}

@Component({
  template: `
    <clr-vertical-nav-group
      #group
      [clrVerticalNavGroupExpanded]="expanded"
      (clrVerticalNavGroupExpandedChange)="updateExpanded($event)"
    >
      Group
      <clr-vertical-nav-group-children>
        <a href="#" clrVerticalNavLink>
          Link
        </a>
      </clr-vertical-nav-group-children>
    </clr-vertical-nav-group>
  `,
})
class TemplateAPITestComponent {
  @ViewChild('group') navGroup: ClrVerticalNavGroup;

  expanded = false;

  expandedChange: boolean;

  updateExpanded(value: boolean) {
    this.expandedChange = value;
  }
}

/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { IconShapeCollection } from '../interfaces/icon.interfaces.js';
import { decorateSvgWithClassnames, getAlertSvg, getBadgeSvg } from './icon.svg-helpers.js';
import { dummyIconShape, testIcons } from './test-icons.js';

describe('SVG render helpers: ', () => {
  describe(' - SVG render helpers - ', () => {
    describe('getBadgeSvg:', () => {
      it('should contain the badge classname', () => {
        expect(getBadgeSvg('ohai')).toContain('clr-i-badge');
      });
      it('should contain the classname passed to it', () => {
        expect(getBadgeSvg('ohai')).toContain('ohai');
      });
    });

    describe('getAlertSvg:', () => {
      it('should contain the alert classname', () => {
        expect(getAlertSvg('ohai')).toContain('clr-i-alert');
      });
      it('should contain the classname passed to it', () => {
        expect(getAlertSvg('ohai')).toContain('ohai');
      });
    });

    describe('decorateSvgWithClassnames:', () => {
      it('should contain same number of path closing tags', () => {
        const expectedBreaks = dummyIconShape.split('/>').length;
        const transformedSvg = decorateSvgWithClassnames('outline', dummyIconShape);
        expect(transformedSvg.split('/>').length).toEqual(expectedBreaks);
      });
      it('should contain expected path classnames', () => {
        const [, shapes] = testIcons.allIcon;
        expect(decorateSvgWithClassnames('outline', (shapes as IconShapeCollection).outline)).toContain(
          'class="clr-i-outline"'
        );
        expect(decorateSvgWithClassnames('outlineBadged', (shapes as IconShapeCollection).outlineBadged)).toContain(
          'class="clr-i-outline--badged"'
        );
        expect(decorateSvgWithClassnames('outlineAlerted', (shapes as IconShapeCollection).outlineAlerted)).toContain(
          'class="clr-i-outline--alerted"'
        );
        expect(decorateSvgWithClassnames('solid', (shapes as IconShapeCollection).solid)).toContain(
          'class="clr-i-solid"'
        );
        expect(decorateSvgWithClassnames('solidBadged', (shapes as IconShapeCollection).solidBadged)).toContain(
          'class="clr-i-solid--badged"'
        );
        expect(decorateSvgWithClassnames('solidAlerted', (shapes as IconShapeCollection).solidAlerted)).toContain(
          'class="clr-i-solid--alerted"'
        );
      });
      it('should contain a badge if needed', () => {
        const [, shapes] = testIcons.allIcon;
        expect(decorateSvgWithClassnames('outline', (shapes as IconShapeCollection).outline)).not.toContain(
          'clr-i-badge'
        );
        expect(decorateSvgWithClassnames('outlineBadged', (shapes as IconShapeCollection).outlineBadged)).toContain(
          'clr-i-badge'
        );
        expect(
          decorateSvgWithClassnames('outlineAlerted', (shapes as IconShapeCollection).outlineAlerted)
        ).not.toContain('clr-i-badge');
        expect(decorateSvgWithClassnames('solid', (shapes as IconShapeCollection).solid)).not.toContain('clr-i-badge');
        expect(decorateSvgWithClassnames('solidBadged', (shapes as IconShapeCollection).solidBadged)).toContain(
          'clr-i-badge'
        );
        expect(decorateSvgWithClassnames('solidAlerted', (shapes as IconShapeCollection).solidAlerted)).not.toContain(
          'clr-i-badge'
        );
      });
      it('should contain an alert if needed', () => {
        const [, shapes] = testIcons.allIcon;
        expect(decorateSvgWithClassnames('outline', (shapes as IconShapeCollection).outline)).not.toContain(
          'clr-i-alert'
        );
        expect(decorateSvgWithClassnames('outlineBadged', (shapes as IconShapeCollection).outlineBadged)).not.toContain(
          'clr-i-alert'
        );
        expect(decorateSvgWithClassnames('outlineAlerted', (shapes as IconShapeCollection).outlineAlerted)).toContain(
          'clr-i-alert'
        );
        expect(decorateSvgWithClassnames('solid', (shapes as IconShapeCollection).solid)).not.toContain('clr-i-alert');
        expect(decorateSvgWithClassnames('solidBadged', (shapes as IconShapeCollection).solidBadged)).not.toContain(
          'clr-i-alert'
        );
        expect(decorateSvgWithClassnames('solidAlerted', (shapes as IconShapeCollection).solidAlerted)).toContain(
          'clr-i-alert'
        );
      });
    });
  });
});

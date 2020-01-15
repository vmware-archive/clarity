/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import '@clr/core/icon';
import { Subscription } from 'rxjs';

import {
  chartCollectionAliases,
  chartCollectionIcons,
  commerceCollectionAliases,
  commerceCollectionIcons,
  coreCollectionAliases,
  coreCollectionIcons,
  essentialCollectionAliases,
  essentialCollectionIcons,
  loadChartIconSet,
  loadCommerceIconSet,
  loadCoreIconSet,
  loadEssentialIconSet,
  loadMediaIconSet,
  loadSocialIconSet,
  loadTechnologyIconSet,
  loadTextEditIconSet,
  loadTravelIconSet,
  mediaCollectionAliases,
  mediaCollectionIcons,
  socialCollectionAliases,
  socialCollectionIcons,
  technologyCollectionAliases,
  technologyCollectionIcons,
  textEditCollectionAliases,
  textEditCollectionIcons,
  travelCollectionAliases,
  travelCollectionIcons,
} from '@clr/core/icon-shapes';

// load all icons before component is created to prevent re-renders
loadChartIconSet();
loadCommerceIconSet();
loadCoreIconSet();
loadEssentialIconSet();
loadMediaIconSet();
loadSocialIconSet();
loadTechnologyIconSet();
loadTextEditIconSet();
loadTravelIconSet();

@Component({
  selector: 'app-icon-sets-demo',
  templateUrl: './icon-sets.demo.html',
})
export class IconSetsDemoComponent {
  iconIndex: { [key: string]: string[] } = {
    Chart: createIconIndices(chartCollectionIcons, chartCollectionAliases),
    Commerce: createIconIndices(commerceCollectionIcons, commerceCollectionAliases),
    Core: createIconIndices(coreCollectionIcons, coreCollectionAliases),
    Essential: createIconIndices(essentialCollectionIcons, essentialCollectionAliases),
    Media: createIconIndices(mediaCollectionIcons, mediaCollectionAliases),
    Social: createIconIndices(socialCollectionIcons, socialCollectionAliases),
    Technology: createIconIndices(technologyCollectionIcons, technologyCollectionAliases),
    'Text-Edit': createIconIndices(textEditCollectionIcons, textEditCollectionAliases),
    Travel: createIconIndices(travelCollectionIcons, travelCollectionAliases),
  };

  iconFilterAndToggles = this.fb.group({
    currentSet: ['All'],
    isSolid: [false],
    isInverse: [false],
    decoration: ['none'],
    filterText: [''],
  });

  isInverse = false;
  isSolid = false;
  isAlerted = false;
  isBadged = false;

  availableSets = Object.keys(this.iconIndex);
  visibleIconSets = this.availableSets;

  subscriptions: Subscription[] = [];

  constructor(private fb: FormBuilder) {
    this.subscriptions.push(this.getFormChanges());
  }

  getFormChanges() {
    return this.iconFilterAndToggles.valueChanges.subscribe(values => {
      this.visibleIconSets = values.currentSet === 'All' ? this.availableSets : [values.currentSet];
      this.isInverse = values.isInverse;
      this.isSolid = values.isSolid;
      this.isAlerted = values.decoration === 'alerted';
      this.isBadged = values.decoration === 'badged';
    });
  }

  showIcon(name: string): boolean {
    const currentFilterText = (this.iconFilterAndToggles.get('filterText') as AbstractControl).value;
    return currentFilterText === '' || name.indexOf(currentFilterText) > -1;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}

function createIconIndices(icons: [string, string][], aliases: [string, string[]][]): string[] {
  const iconsMap = icons.map(iconTuple => iconTuple[0]);
  const aliasMap = aliases.map(aliasTuple => aliasTuple[1]).reduce((acc, val) => acc.concat(val), []);
  return iconsMap.concat(aliasMap).sort();
}

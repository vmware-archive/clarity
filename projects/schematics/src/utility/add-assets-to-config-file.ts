/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

function stripExtension(fileName: string): string {
  const extensionStartIndex = fileName.indexOf('.');

  return extensionStartIndex ? fileName.substring(0, extensionStartIndex) : fileName;
}

export function updateStyleAssets(target: any, pathPrefix: string, assets: Array<string>): void {
  const styles = target.build.options.styles || [];
  const stylesSearch = styles.join('|');

  assets.forEach(asset => {
    const assetWithoutExtension = stripExtension(asset);
    if (stylesSearch.search(assetWithoutExtension) === -1) {
      styles.unshift(pathPrefix + asset);
    }
  });

  target.build.options.styles = styles;
}

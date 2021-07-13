/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import sdk from '@stackblitz/sdk';

import { deepCopy } from '../utils';
import { StackblitzEmbedOptions, StackblitzOpenOptions, StackblitzProject } from './types';

import { templateCore, templateAngular, SupportedTemplates, LocalTemplate, templateHybrid } from '../../templates';

const defaultEmbedOptions = {
  height: 400,
  view: 'preview',
  hideExplorer: true,
  hideNavigation: true,
  forceEmbedLayout: true,
};

@Injectable()
export class StackblitzService {
  async embed(
    template: SupportedTemplates,
    files: LocalTemplate = {},
    container = '#container',
    embedOptions: StackblitzEmbedOptions = {}
  ): Promise<void> {
    const project = await this.readFileContent(template, files);

    sdk.embedProject(container, project, {
      ...defaultEmbedOptions,
      ...embedOptions,
    });
  }

  async open(
    template: SupportedTemplates,
    files: LocalTemplate = {},
    openOptions: StackblitzOpenOptions = {}
  ): Promise<void> {
    const project = await this.readFileContent(template, files);

    sdk.openProject(project, openOptions);
  }

  private async readFileContent(template: SupportedTemplates, files: LocalTemplate): Promise<StackblitzProject> {
    let project: StackblitzProject;

    switch (template) {
      case 'angular': {
        project = deepCopy(templateAngular) as StackblitzProject;
        break;
      }
      case 'core': {
        project = deepCopy(templateCore) as StackblitzProject;
        break;
      }
      case 'hybrid': {
        project = deepCopy(templateHybrid) as StackblitzProject;
        break;
      }
      default: {
        return Promise.reject('Template is not found');
      }
    }

    await Promise.all(
      Object.keys(project.files).map(async remoteLocation => {
        const localLocation = project.files[remoteLocation];
        const content = await import(`!!raw-loader!./../../templates/${localLocation}`).then(resolve => {
          return resolve.default;
        });
        project.files[remoteLocation] = content;
      })
    );

    await Promise.all(
      Object.keys(files).map(async (filename: string) => {
        const content = await import(`!!raw-loader!./../../migrations/${files[filename]}`)
          // Can't compress more - default is a keyword
          .then(resolve => {
            return resolve.default;
          });

        project.files[filename] = content;
      })
    );

    return project;
  }
}

/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';
import { compressParams } from './codesandbox.parameters';
import { project as AngularTemplate } from './../../templates/angular/index';
import { project as CoreTemplate } from './../../templates/core/index';
import { LocalTemplate, SupportedTemplates } from '../../templates/types';
import { CodesandboxFilesStructure, CodesandboxProject } from './types';

const CODESANDBOX_URL = 'https://codesandbox.io/api/v1/sandboxes';

@Injectable()
export class CodesandboxService {
  async embed(): Promise<void> {
    console.log('Not implemented yet!');
  }

  async open(template: SupportedTemplates, files: LocalTemplate): Promise<void> {
    let baseTemplate: CodesandboxProject = { files: {} };

    // @TODO this could be reworked and skip the if/else if/else block
    if (template === 'angular') {
      baseTemplate = await this.readTemplateContent(template, AngularTemplate);
    } else if (template === 'core') {
      baseTemplate = await this.readTemplateContent(template, CoreTemplate);
    } else {
      return Promise.reject('Template is not found');
    }

    const externalFiles = await this.readLocalFiles(files);

    // make copy of the data
    const codesandbox = {
      files: {
        ...baseTemplate.files,
        ...externalFiles,
      },
    };

    const compress = compressParams(codesandbox);
    const url = `${CODESANDBOX_URL}/define?parameters=${compress}`;

    window.open(url, '_blank');
  }

  private async readTemplateContent(
    template: SupportedTemplates,
    localProject: LocalTemplate
  ): Promise<CodesandboxProject> {
    const files: CodesandboxFilesStructure = {};

    await Promise.all(
      Object.keys(localProject).map(async remoteLocation => {
        const localLocation = localProject[remoteLocation];
        const content = await import(`!!raw-loader!./../../templates/${template}/${localLocation}`).then(resolve => {
          return resolve.default;
        });
        files[remoteLocation] = { content, isBinary: false };
      })
    );

    return {
      files: files,
    };
  }

  /**
   * Read migration files
   */
  private async readLocalFiles(files: LocalTemplate): Promise<CodesandboxFilesStructure> {
    const newFiles: CodesandboxFilesStructure = {};

    await Promise.all(
      Object.keys(files).map(async (filename: string) => {
        const content = await import(`!!raw-loader!./../../migrations/${files[filename]}`)
          // Can't compress more - default is a keyword
          .then(resolve => {
            return resolve.default;
          });

        newFiles[filename] = { content, isBinary: false };
      })
    );

    return newFiles;
  }
}

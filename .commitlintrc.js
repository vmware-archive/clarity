/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

module.exports = {
  rules: {
    'body-empty': [0, 'never'],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-exclamation-mark': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-max-length': [2, 'always', 100],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', ['chore', 'fix', 'feat']],
  },
  prompt: {
    questions: {
      type: {
        description: 'Select the TYPE of this change (required)',
        enum: {
          chore: {
            description: '🛠  any change that does not affect consumers',
            title: 'chore',
          },
          fix: {
            description: '🐛 any change to an unintended behavior that affects consumers',
            title: 'fix',
          },
          feat: {
            description: '✨ any new change in features or behavior that affects consumers',
            title: 'feat',
          },
        },
      },
      scope: {
        description: 'Select the SCOPE of this change (optional)',
      },
      subject: {
        description: 'Finish this SHORT sentence (required): "Applying this commit will..."',
      },
      body: {
        description: 'Provide a LONGER description of the change (optional):',
      },
      isBreaking: {
        description: 'Are there any breaking changes?',
      },
      breakingBody: {
        description: 'A BREAKING CHANGE commit requires a body. Provide a LONGER description of the change:',
      },
      breaking: {
        description: 'Describe the breaking changes:',
      },
    },
  },
};

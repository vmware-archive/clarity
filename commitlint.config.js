/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

const { resolve } = require('path');
const commitLintConfig = require('@commitlint/config-conventional');

const core = require('./scripts/commitlint/coreScopes');
const angular = require('./scripts/commitlint/angularScopes');
const website = require('./scripts/commitlint/websiteScopes');
const packages = require('./scripts/commitlint/packagesScopes');
const custom = require('./scripts/commitlint/customScopes');

const coreScopes = core.getScopes(resolve(process.cwd(), './packages/core'));
const angularScopes = angular.getScopes(resolve(process.cwd(), './packages/angular'));
const websiteScopes = website.getScopes(resolve(process.cwd(), './apps/website'));
const packagesScopes = packages.getScopes(resolve(process.cwd(), './packages'));
const customScopes = custom.getScopes();

const scopes = new Set([...customScopes, ...coreScopes, ...angularScopes, ...websiteScopes, ...packagesScopes]);

// Merging what @commitlint/config-convensional has with our new two types of commit
const types = ['a11y', 'release'].concat(commitLintConfig.rules['type-enum'][2]);

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', [...scopes]],
    'type-enum': [2, 'always', types],
    'header-max-length': [2, 'always', 100],
  },
  prompt: {
    messages: {
      skip: ':skip',
      max: 'upper %d chars',
      min: '%d chars at least',
      emptyWarning: 'can not be empty',
      upperLimitWarning: 'over limit',
      lowerLimitWarning: 'below limit',
    },
    questions: {
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          a11y: {
            description: 'Commit that provides Accessibility change',
            title: 'Accessibility',
            emoji: '♿️',
          },
          release: {
            description: 'Commit that specifies a release',
            title: 'Release',
            emoji: '🏭',
          },
          feat: {
            description: 'A new feature',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: 'A bug fix',
            title: 'Bug Fixes',
            emoji: '🐞',
          },
          docs: {
            description: 'Documentation only changes',
            title: 'Documentation',
            emoji: '📚',
          },
          style: {
            description:
              'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
            title: 'Styles',
            emoji: '💎',
          },
          refactor: {
            description: 'A code change that neither fixes a bug nor adds a feature',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          perf: {
            description: 'A code change that improves performance',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          test: {
            description: 'Adding missing tests or correcting existing tests',
            title: 'Tests',
            emoji: '🚨',
          },
          build: {
            description:
              'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
            title: 'Builds',
            emoji: '🛠',
          },
          ci: {
            description:
              'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
            title: 'Continuous Integrations',
            emoji: '🤖',
          },
          chore: {
            description: "Other changes that don't modify src or test files",
            title: 'Chores',
            emoji: '🧹',
          },
          revert: {
            description: 'Reverts a previous commit',
            title: 'Reverts',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description: 'What is the scope of this change (e.g. core/alert )',
      },
      body: {
        description: 'Provide a GitHub issue or explanation what this change does if the commit message is not enough',
      },
      isBreaking: {
        description: 'Are there any breaking changes?',
      },
      breakingBody: {
        description: 'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
      },
      breaking: {
        description: 'Describe the breaking changes',
      },
      isIssueAffected: {
        description: 'Does this change affect any open issues?',
      },
      issuesBody: {
        description:
          'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)',
      },
    },
  },
};

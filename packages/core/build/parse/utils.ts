/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import * as fs from 'fs';
import { FunctionDeclaration, Project, SyntaxKind, JSDoc, JSDocTag } from 'ts-morph';

/**
 * @interface CoreStoryDemoObject
 * @description describes the shape of the object that will be serialized to disc for website consumption.
 */
interface CoreStoryDemoObject {
  coreStories: DocDemos[];
}

/**
 * @interface
 * @description Describe the parts of a story that can be used in the website doc demos
 */
export interface DocDemo {
  fileName: string;
  storyName: string;
  demo: string;
}

/**
 * @interface DocDemos
 * @description Describes all of the parsed demos for a story
 */
export interface DocDemos {
  componentName: string;
  stories: DocDemo[];
}

/**
 * @function checkForWebsiteTag
 * @param fd: FunctionalDeclaration
 * @returns boolean
 * @description given a parsed function, check to see if it is annotated with @website in a JSDoc.
 */
function checkForWebsiteTag(fd: FunctionDeclaration): boolean {
  let test = false;
  fd.getJsDocs().forEach((doc: JSDoc) => {
    doc.getTags().forEach((tag: JSDocTag) => {
      if (tag.getTagName() === 'website') {
        test = true;
      }
    });
  });
  return test;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @function debugFunc
 * @description This is a way to debut the function function when things go wrong
 */
function debugFunc(func: FunctionDeclaration) {
  // There are other things in the API that may aid in debugging issues.
  console.log(`func name: ${func.getName()}`);
  console.log(`func name: ${func.getSourceFile().getBaseName()}`);
}
/* eslint-enable @typescript-eslint/no-unused-vars */

/**
 * @function extractFilename
 * @param path
 * @description Given a filepath string, return only the name without any folders or extension parts.
 */
export function extractFilename(path: string): string {
  const pathGroup = path.split('/');
  const fileGroup = pathGroup.pop().split('.');
  return fileGroup.shift();
}

/**
 * @function extractTemplate
 * @param template
 * @description Given a string this will remove the beginning and end parst of a story function return statement.
 * Note: it depends on the strict adherence to the form:
 * return html`<cds-component>more elements here</cds-component>`;
 */
function extractTemplate(template: string): string {
  // This is the most brittle part of all this. If a story doesn't follw this form it will break
  // The purpose here is to remove the extra return stuff and only preserve the html
  const templateText = template.replace('return html`', '').replace('`;', '').trim();
  return templateText ? templateText : null;
}

/**
 * @function parseStories
 * @param filePath
 *
 * @description given a filepath this function will return an array of DocDemo's parsed from the given file
 */
export function parseStories(filePath: string): DocDemo[] {
  const project = new Project();
  const file = project.addSourceFileAtPath(filePath);
  const functions: FunctionDeclaration[] = file.getFunctions();
  const websiteDemos: DocDemo[] = [];

  functions.forEach(func => {
    // debugFunc(func); // print out interesting things for the FunctionDeclaration
    if (checkForWebsiteTag(func)) {
      websiteDemos.push({
        storyName: func.getName(),
        fileName: func.getSourceFile().getBaseName(),
        demo: extractTemplate(func.getDescendantsOfKind(SyntaxKind.ReturnStatement)[0].getText()),
      });
    }
  });

  return websiteDemos;
}

export function saveCoreDemos(stories: DocDemos[], path): boolean {
  const coreStories: CoreStoryDemoObject = {
    coreStories: stories,
  };
  try {
    fs.writeFileSync(path, JSON.stringify(coreStories), 'utf8');
  } catch (error) {
    return false;
  }
  return true;
}

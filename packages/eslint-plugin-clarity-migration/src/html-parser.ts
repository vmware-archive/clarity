/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { AST, SourceCode } from 'eslint';
import { extname } from 'path';
import { ScopeManager, Scope } from 'eslint-scope';
import { Parser, DomHandler } from 'htmlparser2';

import {
  ESLintHTMLParserToken,
  HTMLElement,
  HTMLAttribute,
  HTMLWhitespace,
  HTMLText,
  HTMLComment,
  HTMLProcessingInstruction,
  ESLintHtmlParseResult,
  HTMLSyntaxTree,
} from './types';

const startsWithHtmlTag = /^\s*</;

function isHtmlFile(code: string, options): boolean {
  const filePath: string = (options.filePath as string | undefined) || 'unknown.js';

  return options.htmlFileExtensions.indexOf(extname(filePath)) !== -1 || startsWithHtmlTag.test(code);
}

function parseScript(code: string, options): ESLintHtmlParseResult {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fallbackParser = require(options.parser);

  if (typeof fallbackParser.parseForESLint === 'function') {
    return fallbackParser.parseForESLint(code, options);
  } else {
    return {
      ast: fallbackParser.parse(code, options),
      visitorKeys: fallbackParser.VisitorKeys,
    };
  }
}

export function parseForESLint(code: string, options = {}): ESLintHtmlParseResult {
  options = {
    htmlFileExtensions: ['.htm', '.html'],
    parser: 'espree',
    comment: true,
    loc: true,
    range: true,
    tokens: true,
    ...options,
  };

  if (!isHtmlFile(code, options)) {
    return parseScript(code, options);
  }

  const lineBreakIndices: Array<number> = [-1];
  let currentIndex = code.indexOf('\n');

  while (currentIndex !== -1) {
    lineBreakIndices.push(currentIndex);
    currentIndex = code.indexOf('\n', currentIndex + 1);
  }

  const tabIndices: Array<number> = [];
  currentIndex = code.indexOf('\t');

  while (currentIndex !== -1) {
    tabIndices.push(currentIndex);
    currentIndex = code.indexOf('\t', currentIndex + 1);
  }

  function getLineAndColumn(index: number): { line: number; column: number } {
    let lineNumber = 0;

    for (; lineNumber < lineBreakIndices.length; lineNumber++) {
      if (index < lineBreakIndices[lineNumber]) {
        break;
      }
    }

    let column: number = index - lineBreakIndices[lineNumber - 1] - 1;
    let tabNumber = -1;

    while (++tabNumber < tabIndices.length) {
      if (tabIndices[tabNumber] < lineBreakIndices[lineNumber - 1]) {
        continue;
      }

      if (tabIndices[tabNumber] < index) {
        column += 4;
      } else {
        break;
      }
    }

    return {
      line: lineNumber,
      column,
    };
  }

  const visitorKeys: SourceCode.VisitorKeys = {
    Program: ['root'],
    HTMLAttribute: ['attributeName', 'attributeValue'],
    HTMLAttributeName: [],
    HTMLAttributeValue: [],
    HTMLElement: ['children', 'attributes'],
    HTMLText: [],
    HTMLWhitespace: [],
    HTMLComment: [],
    HTMLProcessingInstruction: [],
  };

  const tokens: Array<ESLintHTMLParserToken> = [];
  const root: HTMLElement = {
    type: 'HTMLElement',
    comments: [],
    children: [],
    loc: {
      start: {
        line: 1,
        column: 0,
      },
      end: { line: -1, column: -1 },
    },
    tagName: '',
    value: '',
    range: [0, -1],
  };
  let currentElement: HTMLElement;
  let currentAttribute: HTMLAttribute;

  const onattribdata: (value: string) => void = (value: string) => {
    // @ts-ignore
    const startIndex: number = htmlParser.tokenizer.sectionStart;

    currentAttribute.attributeValue = {
      type: 'HTMLAttributeValue',
      value,
      parent: currentAttribute,
      range: [startIndex, startIndex + value.length],
      loc: {
        start: getLineAndColumn(startIndex),
        end: getLineAndColumn(startIndex + value.length),
      },
    };

    currentAttribute.range[1] = startIndex + value.length + 1;
    currentAttribute.value = code.substr(
      currentAttribute.range[0],
      currentAttribute.range[1] - currentAttribute.range[0]
    );
    currentAttribute.loc.end = getLineAndColumn(currentAttribute.range[1]);

    tokens.push(currentAttribute.attributeValue);
  };

  const onopentagname: (name: string) => void = (name: string) => {
    const element: HTMLElement = {
      comments: [],
      type: 'HTMLElement',
      tagName: name,
      parent: currentElement,
      value: '',
      range: [htmlParser.startIndex, -1],
      loc: {
        start: getLineAndColumn(htmlParser.startIndex),
        end: getLineAndColumn(htmlParser.startIndex),
      },
    };

    if (currentElement) {
      if (!currentElement.children) {
        currentElement.children = [];
      }

      currentElement.children.push(element);
    } else {
      element.parent = root;
      root.children?.push(element);
    }

    currentElement = element;
  };

  const onattribname: (name: string) => void = (name: string) => {
    const attribute: Partial<HTMLAttribute> = {
      type: 'HTMLAttribute',
      // @ts-ignore
      range: [htmlParser.tokenizer.sectionStart, -1],
      parent: currentElement,
      value: '',
      loc: {
        // @ts-ignore
        start: getLineAndColumn(htmlParser.tokenizer.sectionStart),
        // @ts-ignore
        end: getLineAndColumn(htmlParser.tokenizer.sectionStart),
      },
    };

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const start = attribute.range![0];
    const end = start + name.length;
    attribute.attributeName = {
      type: 'HTMLAttributeName',
      value: name,
      parent: attribute as HTMLAttribute,
      range: [start, end],
      loc: {
        start: getLineAndColumn(start),
        end: getLineAndColumn(end),
      },
    };

    currentAttribute = attribute as HTMLAttribute;

    if (!currentElement.attributes) {
      currentElement.attributes = [];
    }

    currentElement.attributes.push(attribute as HTMLAttribute);

    tokens.push(attribute as HTMLAttribute);
    tokens.push(attribute.attributeName);
  };

  const parseHandler: Partial<DomHandler> = {
    onopentag: () => {
      currentElement.loc.start = getLineAndColumn(htmlParser.startIndex);
      tokens.push(currentElement);
    },

    onclosetag: () => {
      currentElement.range[1] = (htmlParser.endIndex || 0) + 1;
      currentElement.loc.end = getLineAndColumn((htmlParser.endIndex || 0) + 1);
      currentElement.value = code.substr(currentElement.range[0], currentElement.range[1] - currentElement.range[0]);

      currentElement = currentElement.parent as HTMLElement;
    },

    ontext: (text: string) => {
      if (currentElement?.tagName?.toLowerCase() === 'script') {
        const scriptParseResult: ESLintHtmlParseResult = parseScript(text, options);

        if (scriptParseResult.ast) {
          const scriptProgram: AST.Program = scriptParseResult.ast as AST.Program;

          if (scriptProgram.tokens) {
            const textStartLoc: { line: number; column: number } = getLineAndColumn(htmlParser.startIndex);

            for (const token of scriptProgram.tokens) {
              if (token.range) {
                token.range[0] += htmlParser.startIndex;
                token.range[1] += htmlParser.startIndex;
              }

              if (token.loc) {
                if (token.loc.start.line === 1) {
                  token.loc.start.column += textStartLoc.column;
                }

                if (token.loc.end.line === 1) {
                  token.loc.end.column += textStartLoc.column;
                }

                token.loc.start.line += textStartLoc.line - 1;
                token.loc.end.line += textStartLoc.line - 1;
              }
            }
          }

          if (scriptProgram.body) {
            if (!currentElement.children) {
              currentElement.children = [];
            }

            // eslint-disable-next-line prefer-spread
            currentElement.children.push.apply(currentElement.children, scriptProgram.body);
          }

          if (scriptParseResult.visitorKeys) {
            for (const visitorKey in scriptParseResult.visitorKeys) {
              if (!visitorKeys[visitorKey]) {
                visitorKeys[visitorKey] = scriptParseResult.visitorKeys[visitorKey];
              } else {
                for (const childKey of scriptParseResult.visitorKeys[visitorKey]) {
                  if (visitorKeys[visitorKey].indexOf(childKey) === -1) {
                    visitorKeys[visitorKey].push(childKey);
                  }
                }
              }
            }
          }
        }

        return;
      }

      const leadingWhitespace: string = (text.match(/^\s+/) || [''])[0];
      const trailingWhitespace: string =
        leadingWhitespace.length === text.length ? '' : (text.match(/\s+$/) || [''])[0];
      const actualText: string =
        leadingWhitespace.length === text.length
          ? ''
          : text.substr(leadingWhitespace.length, text.length - leadingWhitespace.length - trailingWhitespace.length);

      if (leadingWhitespace) {
        const leadingWhitespaceToken: HTMLWhitespace = {
          type: 'HTMLWhitespace',
          parent: currentElement,
          value: leadingWhitespace,
          range: [htmlParser.startIndex, htmlParser.startIndex + leadingWhitespace.length],
          loc: {
            start: getLineAndColumn(htmlParser.startIndex),
            end: getLineAndColumn(htmlParser.startIndex + leadingWhitespace.length),
          },
        };

        if (currentElement) {
          if (!currentElement.children) {
            currentElement.children = [];
          }

          currentElement.children.push(leadingWhitespaceToken);
        }

        tokens.push(leadingWhitespaceToken);
      }

      if (actualText) {
        const htmlText: HTMLText = {
          type: 'HTMLText',
          parent: currentElement,
          value: actualText,
          range: [
            htmlParser.startIndex + leadingWhitespace.length,
            htmlParser.startIndex + leadingWhitespace.length + actualText.length,
          ],
          loc: {
            start: getLineAndColumn(htmlParser.startIndex + leadingWhitespace.length),
            end: getLineAndColumn(htmlParser.startIndex + leadingWhitespace.length + actualText.length),
          },
        };

        if (currentElement) {
          if (!currentElement.children) {
            currentElement.children = [];
          }

          currentElement.children.push(htmlText);
        }

        tokens.push(htmlText);
      }

      if (trailingWhitespace) {
        const trailingWhitespaceToken: HTMLWhitespace = {
          type: 'HTMLWhitespace',
          parent: currentElement,
          value: trailingWhitespace,
          range: [htmlParser.startIndex + leadingWhitespace.length + actualText.length, htmlParser.endIndex || 0],
          loc: {
            start: getLineAndColumn(htmlParser.startIndex + leadingWhitespace.length + actualText.length),
            end: getLineAndColumn(htmlParser.endIndex || 0),
          },
        };

        if (currentElement) {
          if (!currentElement.children) {
            currentElement.children = [];
          }

          currentElement.children.push(trailingWhitespaceToken);
        }

        tokens.push(trailingWhitespaceToken);
      }
    },

    oncomment: (text: string) => {
      const comment: HTMLComment = {
        type: 'HTMLComment',
        parent: currentElement,
        text,
        value: code.substr(htmlParser.startIndex, (htmlParser.endIndex || 0) - htmlParser.startIndex + 1),
        range: [htmlParser.startIndex, (htmlParser.endIndex || 0) + 1],
        loc: {
          start: getLineAndColumn(htmlParser.startIndex),
          end: getLineAndColumn((htmlParser.endIndex || 0) + 1),
        },
      };

      if (currentElement) {
        if (!currentElement.children) {
          currentElement.children = [];
        }

        currentElement.children.push(comment);
      }

      tokens.push(comment);
    },

    onprocessinginstruction: (name: string, entireText: string) => {
      const data: string = entireText.substr(name.length).replace(/^\s+/, '');

      const processingInstruction: HTMLProcessingInstruction = {
        type: 'HTMLProcessingInstruction',
        target: entireText.substr(1, name.length - 1),
        data,
        value: code.substr(htmlParser.startIndex, entireText.length + 2),
        range: [htmlParser.startIndex, htmlParser.startIndex + entireText.length + 2],
        loc: {
          start: getLineAndColumn(htmlParser.startIndex),
          end: getLineAndColumn((htmlParser.endIndex || 0) + 1),
        },
      };

      tokens.push(processingInstruction);
    },
  };

  const htmlParser = new Parser(parseHandler);
  root.range = [htmlParser.startIndex, htmlParser.endIndex || -1];
  const originalOnattribname = htmlParser.onattribname;
  htmlParser.onattribname = function (...args): void {
    originalOnattribname.apply(this, args);
    onattribname(args[0]);
  };

  const originalOnattribdata = htmlParser.onattribdata;
  htmlParser.onattribdata = function (...args): void {
    originalOnattribdata.apply(this, args);
    onattribdata(args[0]);
  };

  const originalOnopentagname = htmlParser.onopentagname;
  htmlParser.onopentagname = function (...args): void {
    originalOnopentagname.apply(this, args);
    onopentagname(args[0]);
  };

  htmlParser.parseComplete(code);

  const syntaxTree: HTMLSyntaxTree = {
    type: 'Program',
    comments: [],
    tokens,
    root,
    loc: root.loc,
    range: root.range,
    value: code.substr(root.range[0], root.range[1] - root.range[0]),
  };

  const scopeManager: ScopeManager = new ScopeManager({});
  // DO NOT REMOVE! This code has side-effects, even though the variable is unused.
  /* tslint:disable no-unused-expression */
  new Scope(scopeManager, 'module', null, syntaxTree, false);

  const result: ESLintHtmlParseResult = {
    ast: syntaxTree,
    visitorKeys,
    scopeManager,
    services: {},
  };

  return result;
}

export function parse(code: string, options): HTMLSyntaxTree | AST.Program {
  return parseForESLint(code, options).ast;
}

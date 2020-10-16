import { AST, SourceCode } from 'eslint';
import { Statement, ModuleDeclaration } from 'estree';
import { ScopeManager } from 'eslint-scope';

export type HTMLTokenType =
  | 'HTMLAttributeName'
  | 'HTMLAttributeValue'
  | 'HTMLAttribute'
  | 'HTMLText'
  | 'HTMLWhitespace'
  | 'HTMLElement'
  | 'HTMLComment'
  | 'HTMLProcessingInstruction'
  | 'Program';

export interface ESLintHTMLParserToken {
  type: HTMLTokenType | AST.TokenType;
  value: string;
  range: AST.Range;
  loc: AST.SourceLocation;
}

export interface HTMLAttributeName extends ESLintHTMLParserToken {
  type: 'HTMLAttributeName';
  parent: HTMLAttribute;
}

export interface HTMLAttributeValue extends ESLintHTMLParserToken {
  type: 'HTMLAttributeValue';
  parent: HTMLAttribute;
}

export interface HTMLAttribute extends ESLintHTMLParserToken {
  type: 'HTMLAttribute';
  parent: HTMLElement;
  attributeName: HTMLAttributeName;
  attributeValue: HTMLAttributeValue;
}

export interface HTMLText extends ESLintHTMLParserToken {
  type: 'HTMLText';
  parent: HTMLElement;
}

export interface HTMLWhitespace extends ESLintHTMLParserToken {
  type: 'HTMLWhitespace';
  parent: HTMLElement;
}

export interface HTMLComment extends ESLintHTMLParserToken {
  type: 'HTMLComment';
  parent: HTMLElement;
  text: string;
}

export interface HTMLProcessingInstruction extends ESLintHTMLParserToken {
  type: 'HTMLProcessingInstruction';
  target: string;
  data: string;
}

export interface HTMLElement extends ESLintHTMLParserToken {
  comments: Array<string>;
  type: 'HTMLElement';
  tagName: string;
  parent?: HTMLElement;
  attributes?: Array<HTMLAttribute>;
  children?: Array<HTMLElement | HTMLText | HTMLWhitespace | HTMLComment | Statement | ModuleDeclaration>;
}

export interface HTMLSyntaxTree extends ESLintHTMLParserToken {
  comments: Array<any>;
  tokens: Array<ESLintHTMLParserToken>;
  root: HTMLElement;
  type: 'Program';
}

export interface ESLintHtmlParseResult {
  ast: HTMLSyntaxTree | AST.Program;
  services?: Record<string, any>;
  scopeManager?: ScopeManager;
  visitorKeys?: SourceCode.VisitorKeys;
}

export function parseForESLint(code: string, options?: any): ESLintHtmlParseResult;

export function parse(code: string, options: any): HTMLSyntaxTree | AST.Program;

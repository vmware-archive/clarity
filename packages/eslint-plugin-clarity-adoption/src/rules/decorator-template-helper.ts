import { TSESTree } from '@typescript-eslint/experimental-utils';
import { RuleContext } from '@typescript-eslint/experimental-utils/dist/ts-eslint';
import { SourceLocation } from '@typescript-eslint/types/dist/ts-estree';
import { JSDOM } from 'jsdom';

export interface DomElementLocation {
  startLine: number;
  startCol: number;
  endLine: number;
  endCol: number;
}

function isProperty(node: TSESTree.Node): node is TSESTree.Property {
  return node.type === 'Property';
}

function isIdentifier(node: TSESTree.Node): node is TSESTree.Identifier {
  return node.type === 'Identifier';
}

function isCallExpression(node: TSESTree.Node): node is TSESTree.CallExpression {
  return node.type === 'CallExpression';
}

function isObjectExpression(node: TSESTree.Node): node is TSESTree.ObjectExpression {
  return node.type === 'ObjectExpression';
}

const getDecoratorArgument = (decorator: TSESTree.Decorator): TSESTree.ObjectExpression | undefined => {
  const { expression } = decorator;
  if (!isCallExpression(expression) || !expression.arguments || expression.arguments.length === 0) {
    return undefined;
  }
  const arg = expression.arguments[0];

  return isObjectExpression(arg) && arg.properties ? arg : undefined;
};

const getDecoratorProperty = (decorator: TSESTree.Decorator, name: string): TSESTree.Property | undefined => {
  const arg = getDecoratorArgument(decorator);

  if (!arg || !isObjectExpression(arg)) {
    return undefined;
  }

  const properties = arg.properties as Array<TSESTree.Property>;
  const property = properties.find(prop => !!(prop.key && isIdentifier(prop.key) && prop.key.name === name));

  if (!property || !isProperty(property)) {
    return undefined;
  }

  return property;
};

const getDecoratorPropertyValue = (
  decorator: TSESTree.Decorator,
  name: string
): TSESTree.Expression | TSESTree.Literal | undefined => {
  const property = getDecoratorProperty(decorator, name);
  if (!property) {
    return undefined;
  }

  return property.value as any;
};

function calculateLocation(templateContent: TSESTree.BaseNode, elementLocation: DomElementLocation): SourceLocation {
  const start = {
    line: elementLocation.startLine + templateContent.loc.start.line - 1,
    column: elementLocation.startCol - 1,
  };
  const end = {
    line: elementLocation.endLine + templateContent.loc.start.line - 1,
    column: elementLocation.endCol - 1,
  };

  return { start, end };
}

export function parseDecoratorTemplate(
  node: TSESTree.Decorator
): undefined | { dom: JSDOM; templateContentNode: TSESTree.TemplateElement } {
  const template = getDecoratorPropertyValue(node, 'template');
  if (template?.type !== 'TemplateLiteral') {
    return;
  }

  const templateContentNode = template.quasis[0];
  const templateContent = templateContentNode?.value?.raw || '';
  if (!templateContent) {
    return;
  }

  const dom = new JSDOM(templateContent, {
    includeNodeLocations: true,
  });

  return { dom, templateContentNode };
}

export function reportNestedDisallowedElements(
  disallowedElementSelector: string | Array<string>,
  context: RuleContext<any, any>,
  dom: JSDOM,
  parentNode: TSESTree.Node,
  messageId: string
): void {
  const disallowedElements = dom.window.document.querySelectorAll(disallowedElementSelector as any);

  disallowedElements.forEach(element => {
    const nodeLocation = dom.nodeLocation(element) as DomElementLocation;
    const loc = calculateLocation(parentNode, nodeLocation);

    context.report({
      node: parentNode,
      messageId,
      loc,
    });
  });
}

export function lintDecoratorTemplate(
  context: RuleContext<any, any>,
  node: TSESTree.Decorator,
  disallowedElementSelector: string | Array<string>,
  messageId: string
): void {
  const parsedTemplate = parseDecoratorTemplate(node);
  if (!parsedTemplate) {
    return;
  }

  const { dom, templateContentNode } = parsedTemplate;

  reportNestedDisallowedElements(disallowedElementSelector, context, dom, templateContentNode, messageId);
}

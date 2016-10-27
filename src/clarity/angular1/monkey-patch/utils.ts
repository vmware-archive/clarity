// import {CompileDirectiveMetadata} from "@angular/compiler";
//
// import {CssSelector, SelectorMatcher} from "@angular/compiler/src/selector";
// import {StringWrapper} from "@angular/common/src/facade/lang";
// import {splitNsName} from "@angular/compiler/src/html_tags";
//
// export function isPresent(obj: any): boolean {
//     return obj !== undefined && obj !== null;
// }
//
// export function getAttributesAsArray(node: Node): string[][] {
//     var attributes = node.attributes;
//     var asArray: string[][] = [];
//     if (isPresent(attributes)) {
//         for (var i = 0; i < attributes.length; i++) {
//             asArray[i] = [attributes[i].nodeName, attributes[i].nodeValue];
//         }
//     }
//     return asArray;
// }
//
// export function createElementCssSelector(elementName: string, matchableAttrs: string[][]): CssSelector {
//     var cssSelector = new CssSelector();
//     let elNameNoNs = splitNsName(elementName)[1];
//
//     cssSelector.setElement(elNameNoNs);
//
//     for (var i = 0; i < matchableAttrs.length; i++) {
//         let attrName = matchableAttrs[i][0];
//         let attrNameNoNs = splitNsName(attrName)[1];
//         let attrValue = matchableAttrs[i][1];
//
//         cssSelector.addAttribute(attrNameNoNs, attrValue);
//         if (attrName.toLowerCase() == "class") {
//             var classes = StringWrapper.split(attrValue.trim(), /\s+/g);
//             classes.forEach(className => cssSelector.addClassName(className));
//         }
//     }
//     return cssSelector;
// }
//
// export function sortProjectableNodes(resolvedMetadata: CompileDirectiveMetadata,
//                                      childNodes: Node[]): Node[][] {
//     let projectableNodes: Node[][] = [];
//     if (isPresent(resolvedMetadata.template) &&
//         isPresent(resolvedMetadata.template.ngContentSelectors)) {
//         let selectors = resolvedMetadata.template.ngContentSelectors;
//         let matcher = new SelectorMatcher();
//         let wildcardNgContentIndex: number;
//         for (let i = 0; i < selectors.length; i++) {
//             projectableNodes[i] = [];
//             if (selectors[i] === "*") {
//                 wildcardNgContentIndex = i;
//             } else {
//                 matcher.addSelectables(CssSelector.parse(selectors[i]), i);
//             }
//         }
//         for (let node of childNodes) {
//             let ngContentIndices: number[] = [];
//             let selector =
//                 createElementCssSelector(node.nodeName.toLowerCase(), getAttributesAsArray(node));
//             matcher.match(
//                 selector, (selector, ngContentIndex) => { ngContentIndices.push(ngContentIndex); });
//             ngContentIndices.sort();
//             if (isPresent(wildcardNgContentIndex)) {
//                 ngContentIndices.push(wildcardNgContentIndex);
//             }
//             if (ngContentIndices.length > 0) {
//                 projectableNodes[ngContentIndices[0]].push(node);
//             }
//         }
//     }
//     return projectableNodes;
// }
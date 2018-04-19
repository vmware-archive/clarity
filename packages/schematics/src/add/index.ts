/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Rule, SchematicContext, SchematicsException, Tree, chain } from "@angular-devkit/schematics";
import { Path, normalize } from '@angular-devkit/core';
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";
import { addSymbolToNgModuleMetadata } from "../utility/ast-utils";
import { InsertChange } from "../utility/change";
import { Schema as ComponentOptions } from "./schema";

import * as ts from "typescript";
import * as fs from "fs";
import {join} from "path";

// Determine where to load the package.json, if doing local dev or not
let corePackage: any;
if (fs.existsSync(join(__dirname, "../../package.json"))) {
    corePackage = require("../../package.json")
 } else {
    corePackage = require("../../../../package.json");
 }

// Looks up and finds the path to the app module (or other module if specified)
function findModuleFromOptions(host: Tree, options: ComponentOptions): Path | undefined {
    const modulePath = normalize(
      '/' + options.sourceDir + '/' + (options.appRoot) + '/' + options.module);
    const moduleBaseName = normalize(modulePath).split('/').pop();

    if (host.exists(modulePath)) {
      return normalize(modulePath);
    } else if (host.exists(modulePath + '.ts')) {
      return normalize(modulePath + '.ts');
    } else if (host.exists(modulePath + '.module.ts')) {
      return normalize(modulePath + '.module.ts');
    } else if (host.exists(modulePath + '/' + moduleBaseName + '.module.ts')) {
      return normalize(modulePath + '/' + moduleBaseName + '.module.ts');
    } else {
      throw new Error('Specified module does not exist');
    }
}

// Writes changes to a JSON file
function updateJsonFile(path: string, callback: (a: any) => any) {
    const json = JSON.parse(fs.readFileSync(path, "utf-8"));
    callback(json);
    fs.writeFileSync(path, JSON.stringify(json, null, 2));
}

// Looks at the project for the correct CLI config file
function findCliConfig() {
    return ['angular.json', '.angular.json', 'angular-cli.json', '.angular-cli.json']
        .find(file => fs.existsSync(file));
}

// Handles adding a module to the NgModule 
function addDeclarationToNgModule(options: ComponentOptions, imports: string, moduleName: string, packageName: string): Rule {
    return (host: Tree) => {
        const modulePath = options.module as string;

        const text = host.read(modulePath);
        if (text === null) {
            throw new SchematicsException(`File ${modulePath} does not exist.`);
        }
        const sourceText = text.toString("utf-8");
        const source = ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);

        const declarationChanges = addSymbolToNgModuleMetadata(
            source,
            modulePath,
            imports,
            moduleName,
            packageName
        );

        const declarationRecorder = host.beginUpdate(modulePath);
        for (const change of declarationChanges) {
            if (change instanceof InsertChange) {
                declarationRecorder.insertLeft(change.pos, change.toAdd);
            }
        }
        host.commitUpdate(declarationRecorder);

        return host;
    };
}

export default function(options: ComponentOptions): Rule {
    return (host: Tree, context: SchematicContext) => {
        options.module = findModuleFromOptions(host, options);

        // Add Clarity packages to package.json, if not found
        updateJsonFile("package.json", json => {
            const packages = Object.keys(json.dependencies);
            if (!packages.includes("@clr/angular")) {
                json.dependencies["@clr/angular"] = `^${corePackage.version}`;
            }
            if (!packages.includes("@clr/ui")) {
                json.dependencies["@clr/ui"] = `^${corePackage.version}`;
            }
            if (!packages.includes("@clr/icons")) {
                json.dependencies["@clr/icons"] = `^${corePackage.version}`;
            }
            if (!packages.includes("@webcomponents/custom-elements")) {
                json.dependencies["@webcomponents/custom-elements"] = "^1.0.0";
            }
        });

        // Add Clarity assets to .angular-cli.json, if not found
        const config = findCliConfig();
        if (config) {
            updateJsonFile(config, json => {
                // @TODO abstract this out to a utility, maybe schematics will provide one
                let scripts, styles = [];
                if (json.apps) {
                    scripts = json.apps[0].scripts;
                    styles = json.apps[0].styles;
                } else if (json.projects) {
                    const projects = Object.keys(json.projects);
                    const project = projects.find(key => {
                        if (json.projects[key].projectType === "application") {
                            return true;
                        }
                        return false;
                    });
                    if (!project) {
                        console.info(`Could not update CLI config file to add scripts and styles. You'll have to add them manually.`);
                        return;
                    }
                    scripts = json.projects[project].architect.build.options.scripts;
                    styles = json.projects[project].architect.build.options.styles;
                }

                const scriptsSearch = scripts.join("|");
                const stylesSearch = styles.join("|");
                const pathPrefix = (json.apps) ? "../" : "";
    
                if (stylesSearch.search("node_modules/@clr/ui/clr-ui") < 0) {
                    styles.push(pathPrefix + "node_modules/@clr/ui/clr-ui.min.css");
                }
                if (stylesSearch.search("node_modules/@clr/icons/clr-icons") < 0) {
                    styles.push(pathPrefix + "node_modules/@clr/icons/clr-icons.min.css");
                }
                if (scriptsSearch.search("node_modules/@clr/icons/clr-icons.min.js") < 0) {
                    scripts.push(pathPrefix + "node_modules/@clr/icons/clr-icons.min.js");
                }
                if (scriptsSearch.search("node_modules/@webcomponents/custom-elements/custom-elements.min.js") < 0) {
                    scripts.push(pathPrefix + "node_modules/@webcomponents/custom-elements/custom-elements.min.js");
                }
            });
        } else {
            console.info(`No CLI config found, skipping`);
        }

        // Chain a series of tasks to setup Clarity
        // 1. Add ClarityModule to NgModule
        // 2. Add BrowserAnimationsModule to NgModule
        // 3. Run npm install
        return chain([
            addDeclarationToNgModule(options, "imports", "ClarityModule", "@clr/angular"),
            addDeclarationToNgModule(options, "imports", "BrowserAnimationsModule", "@angular/platform-browser/animations"),
            (_tree: Tree, context: SchematicContext) => {
                context.addTask(new NodePackageInstallTask());
            }
        ])(host, context);
    };
}

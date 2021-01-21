(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/clr-icons-api.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clr-icons-api.ts":
/*!******************************!*\
  !*** ./src/clr-icons-api.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClarityIconsApi = void 0;
var shape_template_observer_1 = __webpack_require__(/*! ./utils/shape-template-observer */ "./src/utils/shape-template-observer.ts");
var iconShapeSources = {};
var ClarityIconsApi = /** @class */ (function () {
    function ClarityIconsApi() {
    }
    Object.defineProperty(ClarityIconsApi, "instance", {
        get: function () {
            if (!ClarityIconsApi.singleInstance) {
                ClarityIconsApi.singleInstance = new ClarityIconsApi();
            }
            return ClarityIconsApi.singleInstance;
        },
        enumerable: false,
        configurable: true
    });
    ClarityIconsApi.prototype.validateName = function (name) {
        if (name.length === 0) {
            throw new Error('Shape name or alias must be a non-empty string!');
        }
        if (/\s/.test(name)) {
            throw new Error('Shape name or alias must not contain any whitespace characters!');
        }
        return true;
    };
    ClarityIconsApi.prototype.normalizeShapeName = function (shapeName) {
        return shapeName.toLowerCase();
    };
    ClarityIconsApi.prototype.setIconTemplate = function (shapeName, shapeTemplate) {
        var trimmedShapeTemplate = shapeTemplate.trim();
        if (this.validateName(shapeName)) {
            // Make sure the shapeName don't contain uppercase characters
            // when registering it
            shapeName = this.normalizeShapeName(shapeName);
            // if the shape name exists, delete it.
            if (iconShapeSources[shapeName]) {
                delete iconShapeSources[shapeName];
            }
            iconShapeSources[shapeName] = trimmedShapeTemplate;
            shape_template_observer_1.ShapeTemplateObserver.instance.emitChanges(shapeName, trimmedShapeTemplate);
        }
    };
    ClarityIconsApi.prototype.setIconAliases = function (templates, shapeName, aliasNames) {
        for (var _i = 0, aliasNames_1 = aliasNames; _i < aliasNames_1.length; _i++) {
            var aliasName = aliasNames_1[_i];
            if (this.validateName(aliasName)) {
                Object.defineProperty(templates, aliasName, {
                    get: function () {
                        return templates[shapeName];
                    },
                    enumerable: true,
                    configurable: true,
                });
            }
        }
    };
    ClarityIconsApi.prototype.add = function (icons) {
        if (typeof icons !== 'object') {
            throw new Error("The argument must be an object literal passed in the following pattern:\n                { \"shape-name\": \"shape-template\" }");
        }
        for (var shapeName in icons) {
            if (icons.hasOwnProperty(shapeName)) {
                this.setIconTemplate(shapeName, icons[shapeName]);
            }
        }
    };
    ClarityIconsApi.prototype.has = function (shapeName) {
        return !!iconShapeSources[this.normalizeShapeName(shapeName)];
    };
    ClarityIconsApi.prototype.get = function (shapeName) {
        // if shapeName is not given, return all icon templates.
        if (!shapeName) {
            return iconShapeSources;
        }
        if (typeof shapeName !== 'string') {
            throw new TypeError('Only string argument is allowed in this method.');
        }
        return iconShapeSources[this.normalizeShapeName(shapeName)];
    };
    ClarityIconsApi.prototype.alias = function (aliases) {
        if (typeof aliases !== 'object') {
            throw new Error("The argument must be an object literal passed in the following pattern:\n                { \"shape-name\": [\"alias-name\", ...] }");
        }
        for (var shapeName in aliases) {
            if (aliases.hasOwnProperty(shapeName)) {
                if (iconShapeSources.hasOwnProperty(shapeName)) {
                    // set an alias to the icon if it exists in iconShapeSources.
                    this.setIconAliases(iconShapeSources, shapeName, aliases[shapeName]);
                }
                else {
                    throw new Error("An icon \"" + shapeName + "\" you are trying to set aliases to doesn't exist in the Clarity Icons sets!");
                }
            }
        }
    };
    return ClarityIconsApi;
}());
exports.ClarityIconsApi = ClarityIconsApi;


/***/ }),

/***/ "./src/utils/shape-template-observer.ts":
/*!**********************************************!*\
  !*** ./src/utils/shape-template-observer.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeTemplateObserver = exports.changeHandlerCallbacks = void 0;
exports.changeHandlerCallbacks = {};
var ShapeTemplateObserver = /** @class */ (function () {
    function ShapeTemplateObserver() {
        this.callbacks = exports.changeHandlerCallbacks;
    }
    Object.defineProperty(ShapeTemplateObserver, "instance", {
        get: function () {
            if (!ShapeTemplateObserver.singleInstance) {
                ShapeTemplateObserver.singleInstance = new ShapeTemplateObserver();
            }
            return ShapeTemplateObserver.singleInstance;
        },
        enumerable: false,
        configurable: true
    });
    ShapeTemplateObserver.prototype.subscribeTo = function (shapeName, changeHandlerCallback) {
        var _this = this;
        if (!this.callbacks[shapeName]) {
            this.callbacks[shapeName] = [changeHandlerCallback];
        }
        else {
            if (this.callbacks[shapeName].indexOf(changeHandlerCallback) === -1) {
                this.callbacks[shapeName].push(changeHandlerCallback);
            }
        }
        // this returned function give users an ability to remove the subscription
        return function () {
            var removeAt = _this.callbacks[shapeName].indexOf(changeHandlerCallback);
            _this.callbacks[shapeName].splice(removeAt, 1);
            // if the array is empty, remove the property from the callbacks
            if (_this.callbacks[shapeName].length === 0) {
                delete _this.callbacks[shapeName];
            }
        };
    };
    ShapeTemplateObserver.prototype.emitChanges = function (shapeName, template) {
        if (this.callbacks[shapeName]) {
            // this will emit changes to all observers
            // by calling their callback functions on template changes
            this.callbacks[shapeName].map(function (changeHandlerCallback) {
                changeHandlerCallback(template);
            });
        }
    };
    return ShapeTemplateObserver;
}());
exports.ShapeTemplateObserver = ShapeTemplateObserver;


/***/ })

/******/ });
});
//# sourceMappingURL=clr-icons-api.js.map
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueGridLayout"] = factory(require("vue"));
	else
		root["VueGridLayout"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "1156":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ad20");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("c1ec597e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "18d2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects objects to elements in order to detect resize events.
 * Heavily inspired by: http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/
 */



var browserDetector = __webpack_require__("18e9");

module.exports = function(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var batchProcessor  = options.batchProcessor;
    var getState        = options.stateHandler.getState;

    if(!reporter) {
        throw new Error("Missing required dependency: reporter.");
    }

    /**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
    function addListener(element, listener) {
        if(!getObject(element)) {
            throw new Error("Element is not detectable by this strategy.");
        }

        function listenerProxy() {
            listener(element);
        }

        if(browserDetector.isIE(8)) {
            //IE 8 does not support object, but supports the resize event directly on elements.
            getState(element).object = {
                proxy: listenerProxy
            };
            element.attachEvent("onresize", listenerProxy);
        } else {
            var object = getObject(element);
            object.contentDocument.defaultView.addEventListener("resize", listenerProxy);
        }
    }

    /**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
    function makeDetectable(options, element, callback) {
        if (!callback) {
            callback = element;
            element = options;
            options = null;
        }

        options = options || {};
        var debug = options.debug;

        function injectObject(element, callback) {
            var OBJECT_STYLE = "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;";

            //The target element needs to be positioned (everything except static) so the absolute positioned object will be positioned relative to the target element.

            // Position altering may be performed directly or on object load, depending on if style resolution is possible directly or not.
            var positionCheckPerformed = false;

            // The element may not yet be attached to the DOM, and therefore the style object may be empty in some browsers.
            // Since the style object is a reference, it will be updated as soon as the element is attached to the DOM.
            var style = window.getComputedStyle(element);
            var width = element.offsetWidth;
            var height = element.offsetHeight;

            getState(element).startSize = {
                width: width,
                height: height
            };

            function mutateDom() {
                function alterPositionStyles() {
                    if(style.position === "static") {
                        element.style.position = "relative";

                        var removeRelativeStyles = function(reporter, element, style, property) {
                            function getNumericalValue(value) {
                                return value.replace(/[^-\d\.]/g, "");
                            }

                            var value = style[property];

                            if(value !== "auto" && getNumericalValue(value) !== "0") {
                                reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element);
                                element.style[property] = 0;
                            }
                        };

                        //Check so that there are no accidental styles that will make the element styled differently now that is is relative.
                        //If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
                        removeRelativeStyles(reporter, element, style, "top");
                        removeRelativeStyles(reporter, element, style, "right");
                        removeRelativeStyles(reporter, element, style, "bottom");
                        removeRelativeStyles(reporter, element, style, "left");
                    }
                }

                function onObjectLoad() {
                    // The object has been loaded, which means that the element now is guaranteed to be attached to the DOM.
                    if (!positionCheckPerformed) {
                        alterPositionStyles();
                    }

                    /*jshint validthis: true */

                    function getDocument(element, callback) {
                        //Opera 12 seem to call the object.onload before the actual document has been created.
                        //So if it is not present, poll it with an timeout until it is present.
                        //TODO: Could maybe be handled better with object.onreadystatechange or similar.
                        if(!element.contentDocument) {
                            setTimeout(function checkForObjectDocument() {
                                getDocument(element, callback);
                            }, 100);

                            return;
                        }

                        callback(element.contentDocument);
                    }

                    //Mutating the object element here seems to fire another load event.
                    //Mutating the inner document of the object element is fine though.
                    var objectElement = this;

                    //Create the style element to be added to the object.
                    getDocument(objectElement, function onObjectDocumentReady(objectDocument) {
                        //Notify that the element is ready to be listened to.
                        callback(element);
                    });
                }

                // The element may be detached from the DOM, and some browsers does not support style resolving of detached elements.
                // The alterPositionStyles needs to be delayed until we know the element has been attached to the DOM (which we are sure of when the onObjectLoad has been fired), if style resolution is not possible.
                if (style.position !== "") {
                    alterPositionStyles(style);
                    positionCheckPerformed = true;
                }

                //Add an object element as a child to the target element that will be listened to for resize events.
                var object = document.createElement("object");
                object.style.cssText = OBJECT_STYLE;
                object.tabIndex = -1;
                object.type = "text/html";
                object.setAttribute("aria-hidden", "true");
                object.onload = onObjectLoad;

                //Safari: This must occur before adding the object to the DOM.
                //IE: Does not like that this happens before, even if it is also added after.
                if(!browserDetector.isIE()) {
                    object.data = "about:blank";
                }

                element.appendChild(object);
                getState(element).object = object;

                //IE: This must occur after adding the object to the DOM.
                if(browserDetector.isIE()) {
                    object.data = "about:blank";
                }
            }

            if(batchProcessor) {
                batchProcessor.add(mutateDom);
            } else {
                mutateDom();
            }
        }

        if(browserDetector.isIE(8)) {
            //IE 8 does not support objects properly. Luckily they do support the resize event.
            //So do not inject the object and notify that the element is already ready to be listened to.
            //The event handler for the resize event is attached in the utils.addListener instead.
            callback(element);
        } else {
            injectObject(element, callback);
        }
    }

    /**
     * Returns the child object of the target element.
     * @private
     * @param {element} element The target element.
     * @returns The object element of the target.
     */
    function getObject(element) {
        return getState(element).object;
    }

    function uninstall(element) {
        if(browserDetector.isIE(8)) {
            element.detachEvent("onresize", getState(element).object.proxy);
        } else {
            element.removeChild(getObject(element));
        }
        delete getState(element).object;
    }

    return {
        makeDetectable: makeDetectable,
        addListener: addListener,
        uninstall: uninstall
    };
};


/***/ }),

/***/ "18e9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var detector = module.exports = {};

detector.isIE = function(version) {
    function isAnyIeVersion() {
        var agent = navigator.userAgent.toLowerCase();
        return agent.indexOf("msie") !== -1 || agent.indexOf("trident") !== -1 || agent.indexOf(" edge/") !== -1;
    }

    if(!isAnyIeVersion()) {
        return false;
    }

    if(!version) {
        return true;
    }

    //Shamelessly stolen from https://gist.github.com/padolsey/527683
    var ieVersion = (function(){
        var undef,
            v = 3,
            div = document.createElement("div"),
            all = div.getElementsByTagName("i");

        do {
            div.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->";
        }
        while (all[0]);

        return v > 4 ? v : undef;
    }());

    return version === ieVersion;
};

detector.isLegacyOpera = function() {
    return !!window.opera;
};


/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2cef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
    var idCount = 1;

    /**
     * Generates a new unique id in the context.
     * @public
     * @returns {number} A unique id in the context.
     */
    function generate() {
        return idCount++;
    }

    return {
        generate: generate
    };
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2f21":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("79e5");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "454f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("46a7");
var $Object = __webpack_require__("584a").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "46a7":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("8e60"), 'Object', { defineProperty: __webpack_require__("d9f6").f });


/***/ }),

/***/ "4917":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toLength = __webpack_require__("9def");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");

// @@match logic
__webpack_require__("214f")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "49ad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(idHandler) {
    var eventListeners = {};

    /**
     * Gets all listeners for the given element.
     * @public
     * @param {element} element The element to get all listeners for.
     * @returns All listeners for the given element.
     */
    function getListeners(element) {
        var id = idHandler.get(element);

        if (id === undefined) {
            return [];
        }

        return eventListeners[id] || [];
    }

    /**
     * Stores the given listener for the given element. Will not actually add the listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The callback that the element has added.
     */
    function addListener(element, listener) {
        var id = idHandler.get(element);

        if(!eventListeners[id]) {
            eventListeners[id] = [];
        }

        eventListeners[id].push(listener);
    }

    function removeListener(element, listener) {
        var listeners = getListeners(element);
        for (var i = 0, len = listeners.length; i < len; ++i) {
            if (listeners[i] === listener) {
              listeners.splice(i, 1);
              break;
            }
        }
    }

    function removeAllListeners(element) {
      var listeners = getListeners(element);
      if (!listeners) { return; }
      listeners.length = 0;
    }

    return {
        get: getListeners,
        add: addListener,
        removeListener: removeListener,
        removeAllListeners: removeAllListeners
    };
};


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "5014":
/***/ (function(module, exports, __webpack_require__) {

/* interact.js 1.7.3 | https://raw.github.com/taye/interact.js/master/LICENSE */
!function(e){if(true)module.exports=e();else {}}(function(){function e(t){var n;return function(e){return n||t(n={exports:{},parent:e},n.exports),n.exports}}var b=e(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Scope=t.ActionName=void 0;var n=f(k),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==p(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(pt),i=f(It),a=f(Ct),u=f(Ut),l=f(fn),s=f(Dn),r=f(E({}));function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function f(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function v(e,t,n){return(v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O,P=o.win,_=o.browser,x=o.raf,S=o.events;(t.ActionName=O)||(t.ActionName=O={});var j=function(){function e(){var t=this;g(this,e),w(this,"id","__interact_scope_".concat(Math.floor(100*Math.random()))),w(this,"listenerMaps",[]),w(this,"browser",_),w(this,"events",S),w(this,"utils",o),w(this,"defaults",o.clone(i.default)),w(this,"Eventable",a.default),w(this,"actions",{names:[],methodDict:{},eventTypes:[]}),w(this,"InteractEvent",s.default),w(this,"Interactable",void 0),w(this,"interactables",new l.default(this)),w(this,"_win",void 0),w(this,"document",void 0),w(this,"window",void 0),w(this,"documents",[]),w(this,"_plugins",{list:[],map:{}}),w(this,"onWindowUnload",function(e){return t.removeDocument(e.target)});var r=this;this.Interactable=function(){function n(){return g(this,n),d(this,y(n).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(n,u["default"]),b(n,[{key:"set",value:function(e){return v(y(n.prototype),"set",this).call(this,e),r.fire("interactable:set",{options:e,interactable:this}),this}},{key:"unset",value:function(){v(y(n.prototype),"unset",this).call(this);for(var e=r.interactions.list.length-1;0<=e;e--){var t=r.interactions.list[e];t.interactable===this&&(t.stop(),r.fire("interactions:destroy",{interaction:t}),t.destroy(),2<r.interactions.list.length&&r.interactions.list.splice(e,1))}r.fire("interactable:unset",{interactable:this})}},{key:"_defaults",get:function(){return r.defaults}}]),n}()}return b(e,[{key:"addListeners",value:function(e,t){this.listenerMaps.push({id:t,map:e})}},{key:"fire",value:function(e,t){for(var n=0;n<this.listenerMaps.length;n++){var r=this.listenerMaps[n].map[e];if(r&&!1===r(t,this,e))return!1}}},{key:"init",value:function(e){return M(this,e)}},{key:"pluginIsInstalled",value:function(e){return this._plugins.map[e.id]||-1!==this._plugins.list.indexOf(e)}},{key:"usePlugin",value:function(e,t){if(this.pluginIsInstalled(e))return this;if(e.id&&(this._plugins.map[e.id]=e),this._plugins.list.push(e),e.install&&e.install(this,t),e.listeners&&e.before){for(var n=0;n<this.listenerMaps.length;n++){if(this.listenerMaps[n].id===e.before)break}this.listenerMaps.splice(n,0,{id:e.id,map:e.listeners})}else e.listeners&&this.listenerMaps.push({id:e.id,map:e.listeners});return this}},{key:"addDocument",value:function(e,t){if(-1!==this.getDocIndex(e))return!1;var n=P.getWindow(e);t=t?o.extend({},t):{},this.documents.push({doc:e,options:t}),S.documents.push(e),e!==this.document&&S.add(n,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:e,window:n,scope:this,options:t})}},{key:"removeDocument",value:function(e){var t=this.getDocIndex(e),n=P.getWindow(e),r=this.documents[t].options;S.remove(n,"unload",this.onWindowUnload),this.documents.splice(t,1),S.documents.splice(t,1),this.fire("scope:remove-document",{doc:e,window:n,scope:this,options:r})}},{key:"getDocIndex",value:function(e){for(var t=0;t<this.documents.length;t++)if(this.documents[t].doc===e)return t;return-1}},{key:"getDocOptions",value:function(e){var t=this.getDocIndex(e);return-1===t?null:this.documents[t].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),e}();function M(e,t){return P.init(t),n.default.init(t),_.init(t),x.init(t),S.init(t),e.usePlugin(r.default),e.document=t.document,e.window=t,e}t.Scope=j}),E=e(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var P=n(j),u=n(k),f=n(Te),_=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(J),l=n(g({})),o=n(Qn);function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function n(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function m(w,O){return function(e){var t=O.interactions.list,n=_.getPointerType(e),r=x(_.getEventTargets(e),2),o=r[0],i=r[1],a=[];if(/^touch/.test(e.type)){O.prevTouchTime=O.now();for(var u=0;u<e.changedTouches.length;u++){var l=e.changedTouches[u],s={pointer:l,pointerId:_.getPointerId(l),pointerType:n,eventType:e.type,eventTarget:o,curEventTarget:i,scope:O},c=S(s);a.push([s.pointer,s.eventTarget,s.curEventTarget,c])}}else{var f=!1;if(!P.default.supportsPointerEvent&&/mouse/.test(e.type)){for(var p=0;p<t.length&&!f;p++)f="mouse"!==t[p].pointerType&&t[p].pointerIsDown;f=f||O.now()-O.prevTouchTime<500||0===e.timeStamp}if(!f){var d={pointer:e,pointerId:_.getPointerId(e),pointerType:n,eventType:e.type,curEventTarget:i,eventTarget:o,scope:O},v=S(d);a.push([d.pointer,d.eventTarget,d.curEventTarget,v])}}for(var y=0;y<a.length;y++){var m=x(a[y],4),g=m[0],h=m[1],b=m[2];m[3][w](g,e,h,b)}}}function S(e){var t=e.pointerType,n=e.scope,r={interaction:o.default.search(e),searchDetails:e};return n.fire("interactions:find",r),r.interaction||n.interactions.new({pointerType:t})}function r(e,t){var n=e.doc,r=e.scope,o=e.options,i=r.interactions.docEvents,a=f.default[t];for(var u in r.browser.isIOS&&!o.events&&(o.events={passive:!1}),f.default.delegatedEvents)a(n,u,f.default.delegateListener),a(n,u,f.default.delegateUseCapture,!0);for(var l=o&&o.events,s=0;s<i.length;s++){var c=i[s];a(n,c.type,c.listener,l)}}var i={id:"core/interactions",install:function(o){for(var e={},t=0;t<y.length;t++){var n=y[t];e[n]=m(n,o)}var r,i=P.default.pEventTypes;function a(){for(var e=0;e<o.interactions.list.length;e++){var t=o.interactions.list[e];if(t.pointerIsDown&&"touch"===t.pointerType&&!t._interacting)for(var n=function(){var n=t.pointers[r];o.documents.some(function(e){var t=e.doc;return(0,C.nodeContains)(t,n.downTarget)})||t.removePointer(n.pointer,n.event)},r=0;r<t.pointers.length;r++){n()}}}(r=u.default.PointerEvent?[{type:i.down,listener:a},{type:i.down,listener:e.pointerDown},{type:i.move,listener:e.pointerMove},{type:i.up,listener:e.pointerUp},{type:i.cancel,listener:e.pointerUp}]:[{type:"mousedown",listener:e.pointerDown},{type:"mousemove",listener:e.pointerMove},{type:"mouseup",listener:e.pointerUp},{type:"touchstart",listener:a},{type:"touchstart",listener:e.pointerDown},{type:"touchmove",listener:e.pointerMove},{type:"touchend",listener:e.pointerUp},{type:"touchcancel",listener:e.pointerUp}]).push({type:"blur",listener:function(e){for(var t=0;t<o.interactions.list.length;t++){o.interactions.list[t].documentBlur(e)}}}),o.prevTouchTime=0,o.Interaction=function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,d(e).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(e,l["default"]),function(e,t,n){t&&c(e.prototype,t),n&&c(e,n)}(e,[{key:"_now",value:function(){return o.now()}},{key:"pointerMoveTolerance",get:function(){return o.interactions.pointerMoveTolerance},set:function(e){o.interactions.pointerMoveTolerance=e}}]),e}(),o.interactions={list:[],new:function(e){e.scopeFire=function(e,t){return o.fire(e,t)};var t=new o.Interaction(e);return o.interactions.list.push(t),t},listeners:e,docEvents:r,pointerMoveTolerance:1}},listeners:{"scope:add-document":function(e){return r(e,"add")},"scope:remove-document":function(e){return r(e,"remove")}},onDocSignal:r,doOnInteractions:m,methodNames:y};t.default=i}),g=e(function(e,t){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PointerInfo",{enumerable:!0,get:function(){return u.default}}),t.default=t.Interaction=t._ProxyMethods=t._ProxyValues=void 0;var n,c,r,f,o,p=d(pt),i=d(Dn),u=(n=Hn)&&n.__esModule?n:{default:n},l=b({});function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function d(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t&&v(e.prototype,t),n&&v(e,n),e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t._ProxyValues=c,(r=c||(t._ProxyValues=c={})).interactable="",r.element="",r.prepared="",r.pointerIsDown="",r.pointerWasMoved="",r._proxy="",t._ProxyMethods=f,(o=f||(t._ProxyMethods=f={})).start="",o.move="",o.end="",o.stop="",o.interacting="";var g=function(){function s(e){var t=this,n=e.pointerType,r=e.scopeFire;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),m(this,"interactable",null),m(this,"element",null),m(this,"rect",void 0),m(this,"edges",void 0),m(this,"_scopeFire",void 0),m(this,"prepared",{name:null,axis:null,edges:null}),m(this,"pointerType",void 0),m(this,"pointers",[]),m(this,"downEvent",null),m(this,"downPointer",{}),m(this,"_latestPointer",{pointer:null,event:null,eventTarget:null}),m(this,"prevEvent",null),m(this,"pointerIsDown",!1),m(this,"pointerWasMoved",!1),m(this,"_interacting",!1),m(this,"_ending",!1),m(this,"_stopped",!0),m(this,"_proxy",null),m(this,"simulation",null),m(this,"doMove",p.warnOnce(function(e){this.move(e)},"The interaction.doMove() method has been renamed to interaction.move()")),m(this,"coords",{start:p.pointer.newCoords(),prev:p.pointer.newCoords(),cur:p.pointer.newCoords(),delta:p.pointer.newCoords(),velocity:p.pointer.newCoords()}),this._scopeFire=r,this.pointerType=n;var o=this;this._proxy={};function i(e){Object.defineProperty(t._proxy,e,{get:function(){return o[e]}})}for(var a in c)i(a);function u(e){Object.defineProperty(t._proxy,e,{value:function(){return o[e].apply(o,arguments)}})}for(var l in f)u(l);this._scopeFire("interactions:new",{interaction:this})}return y(s,[{key:"pointerMoveTolerance",get:function(){return 1}}]),y(s,[{key:"pointerDown",value:function(e,t,n){var r=this.updatePointer(e,t,n,!0);this._scopeFire("interactions:down",{pointer:e,event:t,eventTarget:n,pointerIndex:r,type:"down",interaction:this})}},{key:"start",value:function(e,t,n){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<(e.name===l.ActionName.Gesture?2:1)||!t.options[e.name].enabled)&&(p.copyAction(this.prepared,e),this.interactable=t,this.element=n,this.rect=t.getRect(n),this.edges=this.prepared.edges,this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:i.EventPhase.Start})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(e,t,n){this.simulation||this.modifiers&&this.modifiers.endPrevented||(this.updatePointer(e,t,n,!1),p.pointer.setCoords(this.coords.cur,this.pointers.map(function(e){return e.pointer}),this._now()));var r,o,i=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(r=this.coords.cur.client.x-this.coords.start.client.x,o=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=p.hypot(r,o)>this.pointerMoveTolerance);var a={pointer:e,pointerIndex:this.getPointerIndex(e),event:t,type:"move",eventTarget:n,dx:r,dy:o,duplicate:i,interaction:this};i||(p.pointer.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),p.pointer.setCoordVelocity(this.coords.velocity,this.coords.delta)),this._scopeFire("interactions:move",a),i||(this.interacting()&&(a.type=null,this.move(a)),this.pointerWasMoved&&p.pointer.copyCoords(this.coords.prev,this.coords.cur))}},{key:"move",value:function(e){(e=p.extend({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},e||{})).phase=i.EventPhase.Move,this._doPhase(e)}},{key:"pointerUp",value:function(e,t,n,r){var o=this.getPointerIndex(e);-1===o&&(o=this.updatePointer(e,t,n,!1));var i=/cancel$/i.test(t.type)?"cancel":"up";this._scopeFire("interactions:".concat(i),{pointer:e,pointerIndex:o,event:t,eventTarget:n,type:i,curEventTarget:r,interaction:this}),this.simulation||this.end(t),this.pointerIsDown=!1,this.removePointer(e,t)}},{key:"documentBlur",value:function(e){this.end(e),this._scopeFire("interactions:blur",{event:e,type:"blur",interaction:this})}},{key:"end",value:function(e){var t;this._ending=!0,e=e||this._latestPointer.event,this.interacting()&&(t=this._doPhase({event:e,interaction:this,phase:i.EventPhase.End})),!(this._ending=!1)===t&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(e){var t=p.pointer.getPointerId(e);return"mouse"===this.pointerType||"pen"===this.pointerType?this.pointers.length-1:p.arr.findIndex(this.pointers,function(e){return e.id===t})}},{key:"getPointerInfo",value:function(e){return this.pointers[this.getPointerIndex(e)]}},{key:"updatePointer",value:function(e,t,n,r){var o=p.pointer.getPointerId(e),i=this.getPointerIndex(e),a=this.pointers[i];return r=!1!==r&&(r||/(down|start)$/i.test(t.type)),a?a.pointer=e:(a=new u.default(o,e,t,null,null),i=this.pointers.length,this.pointers.push(a)),r&&(this.pointerIsDown=!0,this.interacting()||(p.pointer.setCoords(this.coords.start,this.pointers.map(function(e){return e.pointer}),this._now()),p.pointer.copyCoords(this.coords.cur,this.coords.start),p.pointer.copyCoords(this.coords.prev,this.coords.start),p.pointer.pointerExtend(this.downPointer,e),this.downEvent=t,a.downTime=this.coords.cur.timeStamp,a.downTarget=n,this.pointerWasMoved=!1)),this._updateLatestPointer(e,t,n),this._scopeFire("interactions:update-pointer",{pointer:e,event:t,eventTarget:n,down:r,pointerInfo:a,pointerIndex:i,interaction:this}),i}},{key:"removePointer",value:function(e,t){var n=this.getPointerIndex(e);if(-1!==n){var r=this.pointers[n];this._scopeFire("interactions:remove-pointer",{pointer:e,event:t,eventTarget:null,pointerIndex:n,pointerInfo:r,interaction:this}),this.pointers.splice(n,1)}}},{key:"_updateLatestPointer",value:function(e,t,n){this._latestPointer.pointer=e,this._latestPointer.event=t,this._latestPointer.eventTarget=n}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(e,t,n,r){var o=this.prepared.name;return new i.default(this,e,o,t,this.element,null,n,r)}},{key:"_fireEvent",value:function(e){this.interactable.fire(e),(!this.prevEvent||e.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=e)}},{key:"_doPhase",value:function(e){var t=e.event,n=e.phase,r=e.preEnd,o=e.type;if(!1===this._scopeFire("interactions:before-action-".concat(n),e))return!1;var i=e.iEvent=this._createPreparedEvent(t,n,r,o),a=this.rect;if(a){var u=this.edges||this.prepared.edges||{left:!0,right:!0,top:!0,bottom:!0};u.top&&(a.top+=i.delta.y),u.bottom&&(a.bottom+=i.delta.y),u.left&&(a.left+=i.delta.x),u.right&&(a.right+=i.delta.x),a.width=a.right-a.left,a.height=a.bottom-a.top}return this._scopeFire("interactions:action-".concat(n),e),this._fireEvent(i),this._scopeFire("interactions:after-action-".concat(n),e),!0}},{key:"_now",value:function(){return Date.now()}}]),s}(),h=t.Interaction=g;t.default=h}),k={};Object.defineProperty(k,"__esModule",{value:!0}),k.default=void 0;var n={init:function(e){var t=e;n.document=t.document,n.DocumentFragment=t.DocumentFragment||r,n.SVGElement=t.SVGElement||r,n.SVGSVGElement=t.SVGSVGElement||r,n.SVGElementInstance=t.SVGElementInstance||r,n.Element=t.Element||r,n.HTMLElement=t.HTMLElement||n.Element,n.Event=t.Event,n.Touch=t.Touch||r,n.PointerEvent=t.PointerEvent||t.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function r(){}var t=n;k.default=t;var u={};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.push(r)}return e}function i(e,t){for(var n=0;n<e.length;n++)if(t(e[n],n,e))return n;return-1}Object.defineProperty(u,"__esModule",{value:!0}),u.contains=function(e,t){return-1!==e.indexOf(t)},u.remove=function(e,t){return e.splice(e.indexOf(t),1)},u.merge=o,u.from=function(e){return o([],e)},u.findIndex=i,u.find=function(e,t){return e[i(e,t)]};var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default=function(e){return!(!e||!e.Window)&&e instanceof e.Window};var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.init=p,l.getWindow=d,l.default=void 0;var s,c=(s=a)&&s.__esModule?s:{default:s};var f={realWindow:void 0,window:void 0,getWindow:d,init:p};function p(e){var t=(f.realWindow=e).document.createTextNode("");t.ownerDocument!==e.document&&"function"==typeof e.wrap&&e.wrap(t)===t&&(e=e.wrap(e)),f.window=e}function d(e){return(0,c.default)(e)?e:(e.ownerDocument||e).defaultView||f.window}"undefined"==typeof window?(f.window=void 0,f.realWindow=void 0):p(window),f.init=p;var v=f;l.default=v;var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.array=y.plainObject=y.element=y.string=y.bool=y.number=y.func=y.object=y.docFrag=y.window=void 0;var m=w(a),h=w(l);function w(e){return e&&e.__esModule?e:{default:e}}function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}y.window=function(e){return e===h.default.window||(0,m.default)(e)};y.docFrag=function(e){return P(e)&&11===e.nodeType};var P=function(e){return!!e&&"object"===O(e)};y.object=P;function _(e){return"function"==typeof e}y.func=_;y.number=function(e){return"number"==typeof e};y.bool=function(e){return"boolean"==typeof e};y.string=function(e){return"string"==typeof e};y.element=function(e){if(!e||"object"!==O(e))return!1;var t=h.default.getWindow(e)||h.default.window;return/object|function/.test(O(t.Element))?e instanceof t.Element:1===e.nodeType&&"string"==typeof e.nodeName};y.plainObject=function(e){return P(e)&&!!e.constructor&&/function Object\b/.test(e.constructor.toString())};y.array=function(e){return P(e)&&void 0!==e.length&&_(e.splice)};var j={};function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(j,"__esModule",{value:!0}),j.default=void 0;var S=I(k),M=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==x(e)&&"function"!=typeof e)return{default:e};var t=D();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(y),T=I(l);function D(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return D=function(){return e},e}function I(e){return e&&e.__esModule?e:{default:e}}var z={init:function(e){var t=S.default.Element,n=T.default.window.navigator;z.supportsTouch="ontouchstart"in e||M.func(e.DocumentTouch)&&S.default.document instanceof e.DocumentTouch,z.supportsPointerEvent=!1!==n.pointerEnabled&&!!S.default.PointerEvent,z.isIOS=/iP(hone|od|ad)/.test(n.platform),z.isIOS7=/iP(hone|od|ad)/.test(n.platform)&&/OS 7[^\d]/.test(n.appVersion),z.isIe9=/MSIE 9/.test(n.userAgent),z.isOperaMobile="Opera"===n.appName&&z.supportsTouch&&/Presto/.test(n.userAgent),z.prefixedMatchesSelector="matches"in t.prototype?"matches":"webkitMatchesSelector"in t.prototype?"webkitMatchesSelector":"mozMatchesSelector"in t.prototype?"mozMatchesSelector":"oMatchesSelector"in t.prototype?"oMatchesSelector":"msMatchesSelector",z.pEventTypes=z.supportsPointerEvent?S.default.PointerEvent===e.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,z.wheelEvent="onmousewheel"in S.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null};var A=z;j.default=A;var C={};function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(C,"__esModule",{value:!0}),C.nodeContains=function(e,t){for(;t;){if(t===e)return!0;t=t.parentNode}return!1},C.closest=function(e,t){for(;Y.element(e);){if(G(e,t))return e;e=q(e)}return null},C.parentNode=q,C.matchesSelector=G,C.indexOfDeepestElement=function(e){var t,n,r=[],o=e[0],i=o?0:-1;for(t=1;t<e.length;t++){var a=e[t];if(a&&a!==o)if(o){if(a.parentNode!==a.ownerDocument)if(o.parentNode!==a.ownerDocument)if(a.parentNode!==o.parentNode){if(!r.length)for(var u=o,l=void 0;(l=U(u))&&l!==u.ownerDocument;)r.unshift(u),u=l;var s=void 0;if(o instanceof X.default.HTMLElement&&a instanceof X.default.SVGElement&&!(a instanceof X.default.SVGSVGElement)){if(a===o.parentNode)continue;s=a.ownerSVGElement}else s=a;for(var c=[];s.parentNode!==s.ownerDocument;)c.unshift(s),s=U(s);for(n=0;c[n]&&c[n]===r[n];)n++;for(var f=[c[n-1],c[n],r[n]],p=f[0].lastChild;p;){if(p===f[1]){o=a,i=t,r=c;break}if(p===f[2])break;p=p.previousSibling}}else{var d=parseInt((0,F.getWindow)(o).getComputedStyle(o).zIndex,10)||0,v=parseInt((0,F.getWindow)(a).getComputedStyle(a).zIndex,10)||0;d<=v&&(o=a,i=t)}else o=a,i=t}else o=a,i=t}return i},C.matchesUpTo=function(e,t,n){for(;Y.element(e);){if(G(e,t))return!0;if((e=q(e))===n)return G(e,t)}return!1},C.getActualElement=function(e){return e instanceof X.default.SVGElementInstance?e.correspondingUseElement:e},C.getScrollXY=B,C.getElementClientRect=H,C.getElementRect=function(e){var t=H(e);if(!W.default.isIOS7&&t){var n=B(F.default.getWindow(e));t.left+=n.x,t.right+=n.x,t.top+=n.y,t.bottom+=n.y}return t},C.getPath=function(e){var t=[];for(;e;)t.push(e),e=q(e);return t},C.trySelector=function(e){return!!Y.string(e)&&(X.default.document.querySelector(e),!0)};var W=V(j),X=V(k),Y=L(y),F=L(l);function N(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return N=function(){return e},e}function L(e){if(e&&e.__esModule)return e;if(null===e||"object"!==R(e)&&"function"!=typeof e)return{default:e};var t=N();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function V(e){return e&&e.__esModule?e:{default:e}}function q(e){var t=e.parentNode;if(Y.docFrag(t)){for(;(t=t.host)&&Y.docFrag(t););return t}return t}function G(e,t){return F.default.window!==F.default.realWindow&&(t=t.replace(/\/deep\//g," ")),e[W.default.prefixedMatchesSelector](t)}var U=function(e){return e.parentNode?e.parentNode:e.host};function B(e){return{x:(e=e||F.default.window).scrollX||e.document.documentElement.scrollLeft,y:e.scrollY||e.document.documentElement.scrollTop}}function H(e){var t=e instanceof X.default.SVGElement?e.getBoundingClientRect():e.getClientRects()[0];return t&&{left:t.left,right:t.right,top:t.top,bottom:t.bottom,width:t.width||t.right-t.left,height:t.height||t.bottom-t.top}}var K={};Object.defineProperty(K,"__esModule",{value:!0}),K.default=void 0;K.default=function(e,t){return Math.sqrt(e*e+t*t)};var $={};function Q(e,t){for(var n in t){var r=Q.prefixedPropREs,o=!1;for(var i in r)if(0===n.indexOf(i)&&r[i].test(n)){o=!0;break}o||"function"==typeof t[n]||(e[n]=t[n])}return e}Object.defineProperty($,"__esModule",{value:!0}),$.default=void 0,Q.prefixedPropREs={webkit:/(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,moz:/(Pressure)$/};var Z=Q;$.default=Z;var J={};function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(J,"__esModule",{value:!0}),J.copyCoords=function(e,t){e.page=e.page||{},e.page.x=t.page.x,e.page.y=t.page.y,e.client=e.client||{},e.client.x=t.client.x,e.client.y=t.client.y,e.timeStamp=t.timeStamp},J.setCoordDeltas=function(e,t,n){e.page.x=n.page.x-t.page.x,e.page.y=n.page.y-t.page.y,e.client.x=n.client.x-t.client.x,e.client.y=n.client.y-t.client.y,e.timeStamp=n.timeStamp-t.timeStamp},J.setCoordVelocity=function(e,t){var n=Math.max(t.timeStamp/1e3,.001);e.page.x=t.page.x/n,e.page.y=t.page.y/n,e.client.x=t.client.x/n,e.client.y=t.client.y/n,e.timeStamp=n},J.setZeroCoords=function(e){e.page.x=0,e.page.y=0,e.client.x=0,e.client.y=0},J.isNativePointer=ce,J.getXY=fe,J.getPageXY=pe,J.getClientXY=de,J.getPointerId=function(e){return ie.number(e.pointerId)?e.pointerId:e.identifier},J.setCoords=function(e,t,n){var r=1<t.length?ye(t):t[0],o={};pe(r,o),e.page.x=o.x,e.page.y=o.y,de(r,o),e.client.x=o.x,e.client.y=o.y,e.timeStamp=n},J.getTouchPair=ve,J.pointerAverage=ye,J.touchBBox=function(e){if(!(e.length||e.touches&&1<e.touches.length))return null;var t=ve(e),n=Math.min(t[0].pageX,t[1].pageX),r=Math.min(t[0].pageY,t[1].pageY),o=Math.max(t[0].pageX,t[1].pageX),i=Math.max(t[0].pageY,t[1].pageY);return{x:n,y:r,left:n,top:r,right:o,bottom:i,width:o-n,height:i-r}},J.touchDistance=function(e,t){var n=t+"X",r=t+"Y",o=ve(e),i=o[0][n]-o[1][n],a=o[0][r]-o[1][r];return(0,oe.default)(i,a)},J.touchAngle=function(e,t){var n=t+"X",r=t+"Y",o=ve(e),i=o[1][n]-o[0][n],a=o[1][r]-o[0][r];return 180*Math.atan2(a,i)/Math.PI},J.getPointerType=function(e){return ie.string(e.pointerType)?e.pointerType:ie.number(e.pointerType)?[void 0,void 0,"touch","pen","mouse"][e.pointerType]:/touch/.test(e.type)||e instanceof ne.default.Touch?"touch":"mouse"},J.getEventTargets=function(e){var t=ie.func(e.composedPath)?e.composedPath():e.path;return[re.getActualElement(t?t[0]:e.target),re.getActualElement(e.currentTarget)]},J.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},J.coordsToEvent=function(e){return{coords:e,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons}}},Object.defineProperty(J,"pointerExtend",{enumerable:!0,get:function(){return ae.default}});var te=se(j),ne=se(k),re=le(C),oe=se(K),ie=le(y),ae=se($);function ue(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return ue=function(){return e},e}function le(e){if(e&&e.__esModule)return e;if(null===e||"object"!==ee(e)&&"function"!=typeof e)return{default:e};var t=ue();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function se(e){return e&&e.__esModule?e:{default:e}}function ce(e){return e instanceof ne.default.Event||e instanceof ne.default.Touch}function fe(e,t,n){return(n=n||{}).x=t[(e=e||"page")+"X"],n.y=t[e+"Y"],n}function pe(e,t){return t=t||{x:0,y:0},te.default.isOperaMobile&&ce(e)?(fe("screen",e,t),t.x+=window.scrollX,t.y+=window.scrollY):fe("page",e,t),t}function de(e,t){return t=t||{},te.default.isOperaMobile&&ce(e)?fe("screen",e,t):fe("client",e,t),t}function ve(e){var t=[];return ie.array(e)?(t[0]=e[0],t[1]=e[1]):"touchend"===e.type?1===e.touches.length?(t[0]=e.touches[0],t[1]=e.changedTouches[0]):0===e.touches.length&&(t[0]=e.changedTouches[0],t[1]=e.changedTouches[1]):(t[0]=e.touches[0],t[1]=e.touches[1]),t}function ye(e){for(var t={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},n=0;n<e.length;n++){var r=e[n];for(var o in t)t[o]+=r[o]}for(var i in t)t[i]/=e.length;return t}var me={};Object.defineProperty(me,"__esModule",{value:!0}),me.default=function(e,t){for(var n in t)e[n]=t[n];return e};var ge={};function he(e){return(he="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(ge,"__esModule",{value:!0}),ge.getStringOptionResult=_e,ge.resolveRectLike=function(e,t,n,r){Oe.string(e)?e=_e(e,t,n):Oe.func(e)&&(e=e.apply(void 0,function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(r)));Oe.element(e)&&(e=(0,C.getElementRect)(e));return e},ge.rectToXY=function(e){return e&&{x:"x"in e?e.x:e.left,y:"y"in e?e.y:e.top}},ge.xywhToTlbr=function(e){!e||"left"in e&&"top"in e||((e=(0,we.default)({},e)).left=e.x||0,e.top=e.y||0,e.right=e.right||e.left+e.width,e.bottom=e.bottom||e.top+e.height);return e},ge.tlbrToXywh=function(e){!e||"x"in e&&"y"in e||((e=(0,we.default)({},e)).x=e.left||0,e.y=e.top||0,e.width=e.width||e.right-e.x,e.height=e.height||e.bottom-e.y);return e};var be,we=(be=me)&&be.__esModule?be:{default:be},Oe=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==he(e)&&"function"!=typeof e)return{default:e};var t=Pe();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(y);function Pe(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Pe=function(){return e},e}function _e(e,t,n){return"parent"===e?(0,C.parentNode)(n):"self"===e?t.getRect(n):(0,C.closest)(n,e)}var xe={};function Se(e){return(Se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(xe,"__esModule",{value:!0}),xe.default=function e(t){var n={};for(var r in t){var o=t[r];Me.plainObject(o)?n[r]=e(o):Me.array(o)?n[r]=je.from(o):n[r]=o}return n};var je=ke(u),Me=ke(y);function Ee(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Ee=function(){return e},e}function ke(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Se(e)&&"function"!=typeof e)return{default:e};var t=Ee();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}var Te={};function De(e){return(De="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Te,"__esModule",{value:!0}),Te.default=Te.FakeEvent=void 0;var Ie,ze=Xe(C),Ae=Xe(y),Ce=(Ie=$)&&Ie.__esModule?Ie:{default:Ie},Re=Xe(J);function We(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return We=function(){return e},e}function Xe(e){if(e&&e.__esModule)return e;if(null===e||"object"!==De(e)&&"function"!=typeof e)return{default:e};var t=We();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function Ye(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Fe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Ne=[],Le=[],Ve={},qe=[];function Ge(e,t,n,r){var o=Ke(r),i=Ne.indexOf(e),a=Le[i];a||(a={events:{},typeCount:0},i=Ne.push(e)-1,Le.push(a)),a.events[t]||(a.events[t]=[],a.typeCount++),(0,u.contains)(a.events[t],n)||(e.addEventListener(t,n,Qe.supportsOptions?o:!!o.capture),a.events[t].push(n))}function Ue(e,t,n,r){var o=Ke(r),i=Ne.indexOf(e),a=Le[i];if(a&&a.events)if("all"!==t){if(a.events[t]){var u=a.events[t].length;if("all"===n){for(var l=0;l<u;l++)Ue(e,t,a.events[t][l],o);return}for(var s=0;s<u;s++)if(a.events[t][s]===n){e.removeEventListener(t,n,Qe.supportsOptions?o:!!o.capture),a.events[t].splice(s,1);break}a.events[t]&&0===a.events[t].length&&(a.events[t]=null,a.typeCount--)}a.typeCount||(Le.splice(i,1),Ne.splice(i,1))}else for(t in a.events)a.events.hasOwnProperty(t)&&Ue(e,t,"all")}function Be(e,t){for(var n=Ke(t),r=new $e(e),o=Ve[e.type],i=Fe(Re.getEventTargets(e),1)[0],a=i;Ae.element(a);){for(var u=0;u<o.selectors.length;u++){var l=o.selectors[u],s=o.contexts[u];if(ze.matchesSelector(a,l)&&ze.nodeContains(s,i)&&ze.nodeContains(s,a)){var c=o.listeners[u];r.currentTarget=a;for(var f=0;f<c.length;f++){var p=Fe(c[f],3),d=p[0],v=p[1],y=p[2];v===!!n.capture&&y===n.passive&&d(r)}}}a=ze.parentNode(a)}}function He(e){return Be.call(this,e,!0)}function Ke(e){return Ae.object(e)?e:{capture:e}}var $e=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.originalEvent=e,function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"currentTarget",void 0),(0,Ce.default)(this,e)}return function(e,t,n){t&&Ye(e.prototype,t),n&&Ye(e,n)}(t,[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}]),t}();Te.FakeEvent=$e;var Qe={add:Ge,remove:Ue,addDelegate:function(e,t,n,r,o){var i=Ke(o);if(!Ve[n]){Ve[n]={contexts:[],listeners:[],selectors:[]};for(var a=0;a<qe.length;a++){var u=qe[a];Ge(u,n,Be),Ge(u,n,He,!0)}}var l,s=Ve[n];for(l=s.selectors.length-1;0<=l&&(s.selectors[l]!==e||s.contexts[l]!==t);l--);-1===l&&(l=s.selectors.length,s.selectors.push(e),s.contexts.push(t),s.listeners.push([])),s.listeners[l].push([r,!!i.capture,i.passive])},removeDelegate:function(e,t,n,r,o){var i,a=Ke(o),u=Ve[n],l=!1;if(u)for(i=u.selectors.length-1;0<=i;i--)if(u.selectors[i]===e&&u.contexts[i]===t){for(var s=u.listeners[i],c=s.length-1;0<=c;c--){var f=Fe(s[c],3),p=f[0],d=f[1],v=f[2];if(p===r&&d===!!a.capture&&v===a.passive){s.splice(c,1),s.length||(u.selectors.splice(i,1),u.contexts.splice(i,1),u.listeners.splice(i,1),Ue(t,n,Be),Ue(t,n,He,!0),u.selectors.length||(Ve[n]=null)),l=!0;break}}if(l)break}},delegateListener:Be,delegateUseCapture:He,delegatedEvents:Ve,documents:qe,supportsOptions:!1,supportsPassive:!1,_elements:Ne,_targets:Le,init:function(e){e.document.createElement("div").addEventListener("test",null,{get capture(){return Qe.supportsOptions=!0},get passive(){return Qe.supportsPassive=!0}})}},Ze=Qe;Te.default=Ze;var Je={};Object.defineProperty(Je,"__esModule",{value:!0}),Je.default=function(e,t,n){var r=e.options[n],o=r&&r.origin||e.options.origin,i=(0,ge.resolveRectLike)(o,e,t,[e&&t]);return(0,ge.rectToXY)(i)||{x:0,y:0}};var et={};function tt(e){return(tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(et,"__esModule",{value:!0}),et.default=function n(t,r,o){o=o||{};ot.string(t)&&-1!==t.search(" ")&&(t=at(t));if(ot.array(t))return t.reduce(function(e,t){return(0,rt.default)(e,n(t,r,o))},o);ot.object(t)&&(r=t,t="");if(ot.func(r))o[t]=o[t]||[],o[t].push(r);else if(ot.array(r))for(var e=0;e<r.length;e++){var i=r[e];n(t,i,o)}else if(ot.object(r))for(var a in r){var u=at(a).map(function(e){return"".concat(t).concat(e)});n(u,r[a],o)}return o};var nt,rt=(nt=me)&&nt.__esModule?nt:{default:nt},ot=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==tt(e)&&"function"!=typeof e)return{default:e};var t=it();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(y);function it(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return it=function(){return e},e}function at(e){return e.trim().split(/ +/)}var ut={};Object.defineProperty(ut,"__esModule",{value:!0}),ut.default=void 0;var lt,st,ct=0;var ft={request:function(e){return lt(e)},cancel:function(e){return st(e)},init:function(e){if(lt=e.requestAnimationFrame,st=e.cancelAnimationFrame,!lt)for(var t=["ms","moz","webkit","o"],n=0;n<t.length;n++){var r=t[n];lt=e["".concat(r,"RequestAnimationFrame")],st=e["".concat(r,"CancelAnimationFrame")]||e["".concat(r,"CancelRequestAnimationFrame")]}lt||(lt=function(e){var t=Date.now(),n=Math.max(0,16-(t-ct)),r=setTimeout(function(){e(t+n)},n);return ct=t+n,r},st=function(e){return clearTimeout(e)})}};ut.default=ft;var pt={};function dt(e){return(dt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(pt,"__esModule",{value:!0}),pt.warnOnce=function(e,t){var n=!1;return function(){return n||(bt.default.window.console.warn(t),n=!0),e.apply(this,arguments)}},pt._getQBezierValue=Dt,pt.getQuadraticCurvePoint=function(e,t,n,r,o,i,a){return{x:Dt(a,e,n,o),y:Dt(a,t,r,i)}},pt.easeOutQuad=function(e,t,n,r){return-n*(e/=r)*(e-2)+t},pt.copyAction=function(e,t){return e.name=t.name,e.axis=t.axis,e.edges=t.edges,e},Object.defineProperty(pt,"win",{enumerable:!0,get:function(){return bt.default}}),Object.defineProperty(pt,"browser",{enumerable:!0,get:function(){return wt.default}}),Object.defineProperty(pt,"clone",{enumerable:!0,get:function(){return Ot.default}}),Object.defineProperty(pt,"events",{enumerable:!0,get:function(){return Pt.default}}),Object.defineProperty(pt,"extend",{enumerable:!0,get:function(){return _t.default}}),Object.defineProperty(pt,"getOriginXY",{enumerable:!0,get:function(){return xt.default}}),Object.defineProperty(pt,"hypot",{enumerable:!0,get:function(){return St.default}}),Object.defineProperty(pt,"normalizeListeners",{enumerable:!0,get:function(){return jt.default}}),Object.defineProperty(pt,"raf",{enumerable:!0,get:function(){return Mt.default}}),pt.rect=pt.pointer=pt.is=pt.dom=pt.arr=void 0;var vt=Tt(u);pt.arr=vt;var yt=Tt(C);pt.dom=yt;var mt=Tt(y);pt.is=mt;var gt=Tt(J);pt.pointer=gt;var ht=Tt(ge);pt.rect=ht;var bt=Et(l),wt=Et(j),Ot=Et(xe),Pt=Et(Te),_t=Et(me),xt=Et(Je),St=Et(K),jt=Et(et),Mt=Et(ut);function Et(e){return e&&e.__esModule?e:{default:e}}function kt(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return kt=function(){return e},e}function Tt(e){if(e&&e.__esModule)return e;if(null===e||"object"!==dt(e)&&"function"!=typeof e)return{default:e};var t=kt();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function Dt(e,t,n,r){var o=1-e;return o*o*t+2*o*e*n+e*e*r}var It={};Object.defineProperty(It,"__esModule",{value:!0}),It.default=It.defaults=void 0;var zt={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}},At=It.defaults=zt;It.default=At;var Ct={};function Rt(e){return(Rt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Ct,"__esModule",{value:!0}),Ct.default=void 0;var Wt=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Rt(e)&&"function"!=typeof e)return{default:e};var t=Nt();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(u),Xt=Ft(me),Yt=Ft(et);function Ft(e){return e&&e.__esModule?e:{default:e}}function Nt(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Nt=function(){return e},e}function Lt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Vt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qt(e,t){for(var n=0;n<t.length;n++){var r=t[n];if(e.immediatePropagationStopped)break;r(e)}}var Gt=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Vt(this,"options",void 0),Vt(this,"types",{}),Vt(this,"propagationStopped",!1),Vt(this,"immediatePropagationStopped",!1),Vt(this,"global",void 0),this.options=(0,Xt.default)({},e||{})}return function(e,t,n){t&&Lt(e.prototype,t),n&&Lt(e,n)}(t,[{key:"fire",value:function(e){var t,n=this.global;(t=this.types[e.type])&&qt(e,t),!e.propagationStopped&&n&&(t=n[e.type])&&qt(e,t)}},{key:"on",value:function(e,t){var n=(0,Yt.default)(e,t);for(e in n)this.types[e]=Wt.merge(this.types[e]||[],n[e])}},{key:"off",value:function(e,t){var n=(0,Yt.default)(e,t);for(e in n){var r=this.types[e];if(r&&r.length)for(var o=0;o<n[e].length;o++){var i=n[e][o],a=r.indexOf(i);-1!==a&&r.splice(a,1)}}}},{key:"getRect",value:function(){return null}}]),t}();Ct.default=Gt;var Ut={};function Bt(e){return(Bt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Ut,"__esModule",{value:!0}),Ut.default=Ut.Interactable=void 0;var Ht=on(u),Kt=nn(j),$t=nn(xe),Qt=nn(Te),Zt=nn(me),Jt=on(y),en=nn(et),tn=nn(Ct);function nn(e){return e&&e.__esModule?e:{default:e}}function rn(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return rn=function(){return e},e}function on(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Bt(e)&&"function"!=typeof e)return{default:e};var t=rn();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function an(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function un(e,t,n){return t&&an(e.prototype,t),n&&an(e,n),e}function ln(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var sn=function(){function r(e,t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),ln(this,"options",void 0),ln(this,"_actions",void 0),ln(this,"target",void 0),ln(this,"events",new tn.default),ln(this,"_context",void 0),ln(this,"_win",void 0),ln(this,"_doc",void 0),this._actions=t.actions,this.target=e,this._context=t.context||n,this._win=(0,l.getWindow)((0,C.trySelector)(e)?this._context:e),this._doc=this._win.document,this.set(t)}return un(r,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}}]),un(r,[{key:"setOnEvents",value:function(e,t){return Jt.func(t.onstart)&&this.on("".concat(e,"start"),t.onstart),Jt.func(t.onmove)&&this.on("".concat(e,"move"),t.onmove),Jt.func(t.onend)&&this.on("".concat(e,"end"),t.onend),Jt.func(t.oninertiastart)&&this.on("".concat(e,"inertiastart"),t.oninertiastart),this}},{key:"updatePerActionListeners",value:function(e,t,n){(Jt.array(t)||Jt.object(t))&&this.off(e,t),(Jt.array(n)||Jt.object(n))&&this.on(e,n)}},{key:"setPerAction",value:function(e,t){var n=this._defaults;for(var r in t){var o=this.options[e],i=t[r],a=Jt.array(i);"listeners"===r&&this.updatePerActionListeners(e,o.listeners,i),a?o[r]=Ht.from(i):!a&&Jt.plainObject(i)?(o[r]=(0,Zt.default)(o[r]||{},(0,$t.default)(i)),Jt.object(n.perAction[r])&&"enabled"in n.perAction[r]&&(o[r].enabled=!1!==i.enabled)):Jt.bool(i)&&Jt.object(n.perAction[r])?o[r].enabled=i:o[r]=i}}},{key:"getRect",value:function(e){return e=e||(Jt.element(this.target)?this.target:null),Jt.string(this.target)&&(e=e||this._context.querySelector(this.target)),(0,C.getElementRect)(e)}},{key:"rectChecker",value:function(e){return Jt.func(e)?(this.getRect=e,this):null===e?(delete this.getRect,this):this.getRect}},{key:"_backCompatOption",value:function(e,t){if((0,C.trySelector)(t)||Jt.object(t)){this.options[e]=t;for(var n=0;n<this._actions.names.length;n++){var r=this._actions.names[n];this.options[r][e]=t}return this}return this.options[e]}},{key:"origin",value:function(e){return this._backCompatOption("origin",e)}},{key:"deltaSource",value:function(e){return"page"===e||"client"===e?(this.options.deltaSource=e,this):this.options.deltaSource}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(e){return this._context===e.ownerDocument||(0,C.nodeContains)(this._context,e)}},{key:"testIgnoreAllow",value:function(e,t,n){return!this.testIgnore(e.ignoreFrom,t,n)&&this.testAllow(e.allowFrom,t,n)}},{key:"testAllow",value:function(e,t,n){return!e||!!Jt.element(n)&&(Jt.string(e)?(0,C.matchesUpTo)(n,e,t):!!Jt.element(e)&&(0,C.nodeContains)(e,n))}},{key:"testIgnore",value:function(e,t,n){return!(!e||!Jt.element(n))&&(Jt.string(e)?(0,C.matchesUpTo)(n,e,t):!!Jt.element(e)&&(0,C.nodeContains)(e,n))}},{key:"fire",value:function(e){return this.events.fire(e),this}},{key:"_onOff",value:function(e,t,n,r){Jt.object(t)&&!Jt.array(t)&&(r=n,n=null);var o="on"===e?"add":"remove",i=(0,en.default)(t,n);for(var a in i){"wheel"===a&&(a=Kt.default.wheelEvent);for(var u=0;u<i[a].length;u++){var l=i[a][u];Ht.contains(this._actions.eventTypes,a)?this.events[e](a,l):Jt.string(this.target)?Qt.default["".concat(o,"Delegate")](this.target,this._context,a,l,r):Qt.default[o](this.target,a,l,r)}}return this}},{key:"on",value:function(e,t,n){return this._onOff("on",e,t,n)}},{key:"off",value:function(e,t,n){return this._onOff("off",e,t,n)}},{key:"set",value:function(e){var t=this._defaults;for(var n in Jt.object(e)||(e={}),this.options=(0,$t.default)(t.base),this._actions.methodDict){var r=this._actions.methodDict[n];this.options[n]={},this.setPerAction(n,(0,Zt.default)((0,Zt.default)({},t.perAction),t.actions[n])),this[r](e[n])}for(var o in e)Jt.func(this[o])&&this[o](e[o]);return this}},{key:"unset",value:function(){if(Qt.default.remove(this.target,"all"),Jt.string(this.target))for(var e in Qt.default.delegatedEvents){var t=Qt.default.delegatedEvents[e];t.selectors[0]===this.target&&t.contexts[0]===this._context&&(t.selectors.splice(0,1),t.contexts.splice(0,1),t.listeners.splice(0,1),t.selectors.length||(t[e]=null)),Qt.default.remove(this._context,e,Qt.default.delegateListener),Qt.default.remove(this._context,e,Qt.default.delegateUseCapture,!0)}else Qt.default.remove(this.target,"all")}}]),r}(),cn=Ut.Interactable=sn;Ut.default=cn;var fn={};function pn(e){return(pn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(fn,"__esModule",{value:!0}),fn.default=void 0;var dn,vn=bn(u),yn=bn(C),mn=(dn=me)&&dn.__esModule?dn:{default:dn},gn=bn(y);function hn(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return hn=function(){return e},e}function bn(e){if(e&&e.__esModule)return e;if(null===e||"object"!==pn(e)&&"function"!=typeof e)return{default:e};var t=hn();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function wn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function On(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Pn=function(){function t(e){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.scope=e,On(this,"list",[]),On(this,"selectorMap",{}),e.addListeners({"interactable:unset":function(e){var t=e.interactable,n=t.target,r=t._context,o=gn.string(n)?a.selectorMap[n]:n[a.scope.id],i=o.findIndex(function(e){return e.context===r});o[i]&&(o[i].context=null,o[i].interactable=null),o.splice(i,1)}})}return function(e,t,n){t&&wn(e.prototype,t),n&&wn(e,n)}(t,[{key:"new",value:function(e,t){t=(0,mn.default)(t||{},{actions:this.scope.actions});var n=new this.scope.Interactable(e,t,this.scope.document),r={context:n._context,interactable:n};return this.scope.addDocument(n._doc),this.list.push(n),gn.string(e)?(this.selectorMap[e]||(this.selectorMap[e]=[]),this.selectorMap[e].push(r)):(n.target[this.scope.id]||Object.defineProperty(e,this.scope.id,{value:[],configurable:!0}),e[this.scope.id].push(r)),this.scope.fire("interactable:new",{target:e,options:t,interactable:n,win:this.scope._win}),n}},{key:"get",value:function(t,e){var n=e&&e.context||this.scope.document,r=gn.string(t),o=r?this.selectorMap[t]:t[this.scope.id];if(!o)return null;var i=vn.find(o,function(e){return e.context===n&&(r||e.interactable.inContext(t))});return i&&i.interactable}},{key:"forEachMatch",value:function(e,t){for(var n=0;n<this.list.length;n++){var r=this.list[n],o=void 0;if((gn.string(r.target)?gn.element(e)&&yn.matchesSelector(e,r.target):e===r.target)&&r.inContext(e)&&(o=t(r)),void 0!==o)return o}}}]),t}();fn.default=Pn;var _n,xn,Sn={};function jn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Mn(e,t,n){return t&&jn(e.prototype,t),n&&jn(e,n),e}function En(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(Sn,"__esModule",{value:!0}),Sn.default=Sn.BaseEvent=Sn.EventPhase=void 0,Sn.EventPhase=_n,(xn=_n||(Sn.EventPhase=_n={})).Start="start",xn.Move="move",xn.End="end",xn._NONE="";var kn=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),En(this,"type",void 0),En(this,"target",void 0),En(this,"currentTarget",void 0),En(this,"interactable",void 0),En(this,"_interaction",void 0),En(this,"timeStamp",void 0),En(this,"immediatePropagationStopped",!1),En(this,"propagationStopped",!1),this._interaction=e}return Mn(t,[{key:"interaction",get:function(){return this._interaction._proxy}}]),Mn(t,[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),t}(),Tn=Sn.BaseEvent=kn;Sn.default=Tn;var Dn={};Object.defineProperty(Dn,"__esModule",{value:!0}),Dn.default=Dn.InteractEvent=Dn.EventPhase=void 0;var In,zn,An=Yn(me),Cn=Yn(Je),Rn=Yn(K),Wn=Yn(Sn),Xn=Yn(It);function Yn(e){return e&&e.__esModule?e:{default:e}}function Fn(e){return(Fn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Nn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ln(e){return(Ln=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Vn(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function qn(e,t){return(qn=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Gn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Dn.EventPhase=In,(zn=In||(Dn.EventPhase=In={})).Start="start",zn.Move="move",zn.End="end",zn._NONE="";var Un=function(){function m(e,t,n,r,o,i,a,u){var l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),l=function(e,t){return!t||"object"!==Fn(t)&&"function"!=typeof t?Vn(e):t}(this,Ln(m).call(this,e)),Gn(Vn(l),"target",void 0),Gn(Vn(l),"currentTarget",void 0),Gn(Vn(l),"relatedTarget",void 0),Gn(Vn(l),"screenX",void 0),Gn(Vn(l),"screenY",void 0),Gn(Vn(l),"button",void 0),Gn(Vn(l),"buttons",void 0),Gn(Vn(l),"ctrlKey",void 0),Gn(Vn(l),"shiftKey",void 0),Gn(Vn(l),"altKey",void 0),Gn(Vn(l),"metaKey",void 0),Gn(Vn(l),"page",void 0),Gn(Vn(l),"client",void 0),Gn(Vn(l),"delta",void 0),Gn(Vn(l),"rect",void 0),Gn(Vn(l),"x0",void 0),Gn(Vn(l),"y0",void 0),Gn(Vn(l),"t0",void 0),Gn(Vn(l),"dt",void 0),Gn(Vn(l),"duration",void 0),Gn(Vn(l),"clientX0",void 0),Gn(Vn(l),"clientY0",void 0),Gn(Vn(l),"velocity",void 0),Gn(Vn(l),"speed",void 0),Gn(Vn(l),"swipe",void 0),Gn(Vn(l),"timeStamp",void 0),Gn(Vn(l),"dragEnter",void 0),Gn(Vn(l),"dragLeave",void 0),Gn(Vn(l),"axes",void 0),Gn(Vn(l),"preEnd",void 0),o=o||e.element;var s=e.interactable,c=(s&&s.options||Xn.default).deltaSource,f=(0,Cn.default)(s,o,n),p="start"===r,d="end"===r,v=p?Vn(l):e.prevEvent,y=p?e.coords.start:d?{page:v.page,client:v.client,timeStamp:e.coords.cur.timeStamp}:e.coords.cur;return l.page=(0,An.default)({},y.page),l.client=(0,An.default)({},y.client),l.rect=(0,An.default)({},e.rect),l.timeStamp=y.timeStamp,d||(l.page.x-=f.x,l.page.y-=f.y,l.client.x-=f.x,l.client.y-=f.y),l.ctrlKey=t.ctrlKey,l.altKey=t.altKey,l.shiftKey=t.shiftKey,l.metaKey=t.metaKey,l.button=t.button,l.buttons=t.buttons,l.target=o,l.currentTarget=o,l.relatedTarget=i||null,l.preEnd=a,l.type=u||n+(r||""),l.interactable=s,l.t0=p?e.pointers[e.pointers.length-1].downTime:v.t0,l.x0=e.coords.start.page.x-f.x,l.y0=e.coords.start.page.y-f.y,l.clientX0=e.coords.start.client.x-f.x,l.clientY0=e.coords.start.client.y-f.y,l.delta=p||d?{x:0,y:0}:{x:l[c].x-v[c].x,y:l[c].y-v[c].y},l.dt=e.coords.delta.timeStamp,l.duration=l.timeStamp-l.t0,l.velocity=(0,An.default)({},e.coords.velocity[c]),l.speed=(0,Rn.default)(l.velocity.x,l.velocity.y),l.swipe=d||"inertiastart"===r?l.getSwipe():null,l}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&qn(e,t)}(m,Wn["default"]),function(e,t,n){t&&Nn(e.prototype,t),n&&Nn(e,n)}(m,[{key:"getSwipe",value:function(){var e=this._interaction;if(e.prevEvent.speed<600||150<this.timeStamp-e.prevEvent.timeStamp)return null;var t=180*Math.atan2(e.prevEvent.velocityY,e.prevEvent.velocityX)/Math.PI;t<0&&(t+=360);var n=112.5<=t&&t<247.5,r=202.5<=t&&t<337.5;return{up:r,down:!r&&22.5<=t&&t<157.5,left:n,right:!n&&(292.5<=t||t<67.5),angle:t,speed:e.prevEvent.speed,velocity:{x:e.prevEvent.velocityX,y:e.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"pageX",get:function(){return this.page.x},set:function(e){this.page.x=e}},{key:"pageY",get:function(){return this.page.y},set:function(e){this.page.y=e}},{key:"clientX",get:function(){return this.client.x},set:function(e){this.client.x=e}},{key:"clientY",get:function(){return this.client.y},set:function(e){this.client.y=e}},{key:"dx",get:function(){return this.delta.x},set:function(e){this.delta.x=e}},{key:"dy",get:function(){return this.delta.y},set:function(e){this.delta.y=e}},{key:"velocityX",get:function(){return this.velocity.x},set:function(e){this.velocity.x=e}},{key:"velocityY",get:function(){return this.velocity.y},set:function(e){this.velocity.y=e}}]),m}(),Bn=Dn.InteractEvent=Un;Dn.default=Bn;var Hn={};Object.defineProperty(Hn,"__esModule",{value:!0}),Hn.default=Hn.PointerInfo=void 0;function Kn(e,t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Kn),this.id=e,this.pointer=t,this.event=n,this.downTime=r,this.downTarget=o}var $n=Hn.PointerInfo=Kn;Hn.default=$n;var Qn={};function Zn(e){return(Zn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Qn,"__esModule",{value:!0}),Qn.default=void 0;var Jn=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Zn(e)&&"function"!=typeof e)return{default:e};var t=er();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(C);function er(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return er=function(){return e},e}var tr={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(e){for(var t=0;t<tr.methodOrder.length;t++){var n;n=tr.methodOrder[t];var r=tr[n](e);if(r)return r}},simulationResume:function(e){var t=e.pointerType,n=e.eventType,r=e.eventTarget,o=e.scope;if(!/down|start/i.test(n))return null;for(var i=0;i<o.interactions.list.length;i++){var a=o.interactions.list[i],u=r;if(a.simulation&&a.simulation.allowResume&&a.pointerType===t)for(;u;){if(u===a.element)return a;u=Jn.parentNode(u)}}return null},mouseOrPen:function(e){var t,n=e.pointerId,r=e.pointerType,o=e.eventType,i=e.scope;if("mouse"!==r&&"pen"!==r)return null;for(var a=0;a<i.interactions.list.length;a++){var u=i.interactions.list[a];if(u.pointerType===r){if(u.simulation&&!nr(u,n))continue;if(u.interacting())return u;t=t||u}}if(t)return t;for(var l=0;l<i.interactions.list.length;l++){var s=i.interactions.list[l];if(!(s.pointerType!==r||/down/i.test(o)&&s.simulation))return s}return null},hasPointer:function(e){for(var t=e.pointerId,n=e.scope,r=0;r<n.interactions.list.length;r++){var o=n.interactions.list[r];if(nr(o,t))return o}return null},idle:function(e){for(var t=e.pointerType,n=e.scope,r=0;r<n.interactions.list.length;r++){var o=n.interactions.list[r];if(1===o.pointers.length){var i=o.interactable;if(i&&(!i.options.gesture||!i.options.gesture.enabled))continue}else if(2<=o.pointers.length)continue;if(!o.interacting()&&t===o.pointerType)return o}return null}};function nr(e,t){return e.pointers.some(function(e){return e.id===t})}var rr=tr;Qn.default=rr;var or={};function ir(e){return(ir="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(or,"__esModule",{value:!0}),or.default=void 0;var ar=b({}),ur=cr(u),lr=cr(y);function sr(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return sr=function(){return e},e}function cr(e){if(e&&e.__esModule)return e;if(null===e||"object"!==ir(e)&&"function"!=typeof e)return{default:e};var t=sr();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function fr(e){var t=e.interaction;if("drag"===t.prepared.name){var n=t.prepared.axis;"x"===n?(t.coords.cur.page.y=t.coords.start.page.y,t.coords.cur.client.y=t.coords.start.client.y,t.coords.velocity.client.y=0,t.coords.velocity.page.y=0):"y"===n&&(t.coords.cur.page.x=t.coords.start.page.x,t.coords.cur.client.x=t.coords.start.client.x,t.coords.velocity.client.x=0,t.coords.velocity.page.x=0)}}function pr(e){var t=e.iEvent,n=e.interaction;if("drag"===n.prepared.name){var r=n.prepared.axis;if("x"===r||"y"===r){var o="x"===r?"y":"x";t.page[o]=n.coords.start.page[o],t.client[o]=n.coords.start.client[o],t.delta[o]=0}}}ar.ActionName.Drag="drag";var dr={id:"actions/drag",install:function(e){var t=e.actions,n=e.Interactable,r=e.defaults;e.addListeners({"interactions:before-action-move":fr,"interactions:action-resume":fr,"interactions:action-move":pr}),n.prototype.draggable=dr.draggable,t[ar.ActionName.Drag]=dr,t.names.push(ar.ActionName.Drag),ur.merge(t.eventTypes,["dragstart","dragmove","draginertiastart","dragresume","dragend"]),t.methodDict.drag="draggable",r.actions.drag=dr.defaults},draggable:function(e){return lr.object(e)?(this.options.drag.enabled=!1!==e.enabled,this.setPerAction("drag",e),this.setOnEvents("drag",e),/^(xy|x|y|start)$/.test(e.lockAxis)&&(this.options.drag.lockAxis=e.lockAxis),/^(xy|x|y)$/.test(e.startAxis)&&(this.options.drag.startAxis=e.startAxis),this):lr.bool(e)?(this.options.drag.enabled=e,this):this.options.drag},beforeMove:fr,move:pr,defaults:{startAxis:"xy",lockAxis:"xy"},checker:function(e,t,n){var r=n.options.drag;return r.enabled?{name:"drag",axis:"start"===r.lockAxis?r.startAxis:r.lockAxis}:null},getCursor:function(){return"move"}},vr=dr;or.default=vr;var yr={};Object.defineProperty(yr,"__esModule",{value:!0}),yr.default=void 0;var mr,gr=(mr=Sn)&&mr.__esModule?mr:{default:mr},hr=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==wr(e)&&"function"!=typeof e)return{default:e};var t=br();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(u);function br(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return br=function(){return e},e}function wr(e){return(wr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Or(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Pr(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _r(e){return(_r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function xr(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Sr(e,t){return(Sr=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function jr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Mr=function(){function u(e,t,n){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),r=function(e,t){return!t||"object"!==wr(t)&&"function"!=typeof t?xr(e):t}(this,_r(u).call(this,t._interaction)),jr(xr(r),"target",void 0),jr(xr(r),"dropzone",void 0),jr(xr(r),"dragEvent",void 0),jr(xr(r),"relatedTarget",void 0),jr(xr(r),"draggable",void 0),jr(xr(r),"timeStamp",void 0),jr(xr(r),"propagationStopped",!1),jr(xr(r),"immediatePropagationStopped",!1);var o="dragleave"===n?e.prev:e.cur,i=o.element,a=o.dropzone;return r.type=n,r.target=i,r.currentTarget=i,r.dropzone=a,r.dragEvent=t,r.relatedTarget=t.target,r.draggable=t.interactable,r.timeStamp=t.timeStamp,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Sr(e,t)}(u,gr["default"]),function(e,t,n){t&&Pr(e.prototype,t),n&&Pr(e,n)}(u,[{key:"reject",value:function(){var r=this,e=this._interaction.dropState;if("dropactivate"===this.type||this.dropzone&&e.cur.dropzone===this.dropzone&&e.cur.element===this.target)if(e.prev.dropzone=this.dropzone,e.prev.element=this.target,e.rejected=!0,e.events.enter=null,this.stopImmediatePropagation(),"dropactivate"===this.type){var t=e.activeDrops,n=hr.findIndex(t,function(e){var t=e.dropzone,n=e.element;return t===r.dropzone&&n===r.target});e.activeDrops=[].concat(Or(t.slice(0,n)),Or(t.slice(n+1)));var o=new u(e,this.dragEvent,"dropdeactivate");o.dropzone=this.dropzone,o.target=this.target,this.dropzone.fire(o)}else this.dropzone.fire(new u(e,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}]),u}();yr.default=Mr;var Er={};function kr(e){return(kr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Er,"__esModule",{value:!0}),Er.default=void 0;var Tr=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==kr(e)&&"function"!=typeof e)return{default:e};var t=Ar();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(pt),Dr=zr(or),Ir=zr(yr);function zr(e){return e&&e.__esModule?e:{default:e}}function Ar(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Ar=function(){return e},e}function Cr(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=r.dropzone,i=r.element;t.dropzone=o,t.target=i,o.fire(t),t.propagationStopped=t.immediatePropagationStopped=!1}}function Rr(e,t){for(var n=function(e,t){for(var n=e.interactables,r=[],o=0;o<n.list.length;o++){var i=n.list[o];if(i.options.drop.enabled){var a=i.options.drop.accept;if(!(Tr.is.element(a)&&a!==t||Tr.is.string(a)&&!Tr.dom.matchesSelector(t,a)||Tr.is.func(a)&&!a({dropzone:i,draggableElement:t})))for(var u=Tr.is.string(i.target)?i._context.querySelectorAll(i.target):Tr.is.array(i.target)?i.target:[i.target],l=0;l<u.length;l++){var s=u[l];s!==t&&r.push({dropzone:i,element:s})}}}return r}(e,t),r=0;r<n.length;r++){var o=n[r];o.rect=o.dropzone.getRect(o.element)}return n}function Wr(e,t,n){for(var r=e.dropState,o=e.interactable,i=e.element,a=[],u=0;u<r.activeDrops.length;u++){var l=r.activeDrops[u],s=l.dropzone,c=l.element,f=l.rect;a.push(s.dropCheck(t,n,o,i,c,f)?c:null)}var p=Tr.dom.indexOfDeepestElement(a);return r.activeDrops[p]||null}function Xr(e,t,n){var r=e.dropState,o={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return"dragstart"===n.type&&(o.activate=new Ir.default(r,n,"dropactivate"),o.activate.target=null,o.activate.dropzone=null),"dragend"===n.type&&(o.deactivate=new Ir.default(r,n,"dropdeactivate"),o.deactivate.target=null,o.deactivate.dropzone=null),r.rejected||(r.cur.element!==r.prev.element&&(r.prev.dropzone&&(o.leave=new Ir.default(r,n,"dragleave"),n.dragLeave=o.leave.target=r.prev.element,n.prevDropzone=o.leave.dropzone=r.prev.dropzone),r.cur.dropzone&&(o.enter=new Ir.default(r,n,"dragenter"),n.dragEnter=r.cur.element,n.dropzone=r.cur.dropzone)),"dragend"===n.type&&r.cur.dropzone&&(o.drop=new Ir.default(r,n,"drop"),n.dropzone=r.cur.dropzone,n.relatedTarget=r.cur.element),"dragmove"===n.type&&r.cur.dropzone&&(o.move=new Ir.default(r,n,"dropmove"),(o.move.dragmove=n).dropzone=r.cur.dropzone)),o}function Yr(e,t){var n=e.dropState,r=n.activeDrops,o=n.cur,i=n.prev;t.leave&&i.dropzone.fire(t.leave),t.move&&o.dropzone.fire(t.move),t.enter&&o.dropzone.fire(t.enter),t.drop&&o.dropzone.fire(t.drop),t.deactivate&&Cr(r,t.deactivate),n.prev.dropzone=o.dropzone,n.prev.element=o.element}function Fr(e,t){var n=e.interaction,r=e.iEvent,o=e.event;if("dragmove"===r.type||"dragend"===r.type){var i=n.dropState;t.dynamicDrop&&(i.activeDrops=Rr(t,n.element));var a=r,u=Wr(n,a,o);i.rejected=i.rejected&&!!u&&u.dropzone===i.cur.dropzone&&u.element===i.cur.element,i.cur.dropzone=u&&u.dropzone,i.cur.element=u&&u.element,i.events=Xr(n,0,a)}}var Nr={id:"actions/drop",install:function(t){var e=t.actions,n=t.interact,r=t.Interactable,o=t.defaults;t.usePlugin(Dr.default),r.prototype.dropzone=function(e){return function(e,t){if(Tr.is.object(t)){if(e.options.drop.enabled=!1!==t.enabled,t.listeners){var n=Tr.normalizeListeners(t.listeners),r=Object.keys(n).reduce(function(e,t){return e[/^(enter|leave)/.test(t)?"drag".concat(t):/^(activate|deactivate|move)/.test(t)?"drop".concat(t):t]=n[t],e},{});e.off(e.options.drop.listeners),e.on(r),e.options.drop.listeners=r}return Tr.is.func(t.ondrop)&&e.on("drop",t.ondrop),Tr.is.func(t.ondropactivate)&&e.on("dropactivate",t.ondropactivate),Tr.is.func(t.ondropdeactivate)&&e.on("dropdeactivate",t.ondropdeactivate),Tr.is.func(t.ondragenter)&&e.on("dragenter",t.ondragenter),Tr.is.func(t.ondragleave)&&e.on("dragleave",t.ondragleave),Tr.is.func(t.ondropmove)&&e.on("dropmove",t.ondropmove),/^(pointer|center)$/.test(t.overlap)?e.options.drop.overlap=t.overlap:Tr.is.number(t.overlap)&&(e.options.drop.overlap=Math.max(Math.min(1,t.overlap),0)),"accept"in t&&(e.options.drop.accept=t.accept),"checker"in t&&(e.options.drop.checker=t.checker),e}if(Tr.is.bool(t))return e.options.drop.enabled=t,e;return e.options.drop}(this,e)},r.prototype.dropCheck=function(e,t,n,r,o,i){return function(e,t,n,r,o,i,a){var u=!1;if(!(a=a||e.getRect(i)))return!!e.options.drop.checker&&e.options.drop.checker(t,n,u,e,i,r,o);var l=e.options.drop.overlap;if("pointer"===l){var s=Tr.getOriginXY(r,o,"drag"),c=Tr.pointer.getPageXY(t);c.x+=s.x,c.y+=s.y;var f=c.x>a.left&&c.x<a.right,p=c.y>a.top&&c.y<a.bottom;u=f&&p}var d=r.getRect(o);if(d&&"center"===l){var v=d.left+d.width/2,y=d.top+d.height/2;u=v>=a.left&&v<=a.right&&y>=a.top&&y<=a.bottom}if(d&&Tr.is.number(l)){var m=Math.max(0,Math.min(a.right,d.right)-Math.max(a.left,d.left))*Math.max(0,Math.min(a.bottom,d.bottom)-Math.max(a.top,d.top))/(d.width*d.height);u=l<=m}e.options.drop.checker&&(u=e.options.drop.checker(t,n,u,e,i,r,o));return u}(this,e,t,n,r,o,i)},n.dynamicDrop=function(e){return Tr.is.bool(e)?(t.dynamicDrop=e,n):t.dynamicDrop},Tr.arr.merge(e.eventTypes,["dragenter","dragleave","dropactivate","dropdeactivate","dropmove","drop"]),e.methodDict.drop="dropzone",t.dynamicDrop=!1,o.actions.drop=Nr.defaults},listeners:{"interactions:before-action-start":function(e){var t=e.interaction;"drag"===t.prepared.name&&(t.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:null})},"interactions:after-action-start":function(e,t){var n=e.interaction,r=(e.event,e.iEvent);if("drag"===n.prepared.name){var o=n.dropState;o.activeDrops=null,o.events=null,o.activeDrops=Rr(t,n.element),o.events=Xr(n,0,r),o.events.activate&&Cr(o.activeDrops,o.events.activate)}},"interactions:action-move":Fr,"interactions:action-end":Fr,"interactions:after-action-move":function(e){var t=e.interaction;"drag"===t.prepared.name&&(Yr(t,t.dropState.events),t.dropState.events={})},"interactions:after-action-end":function(e){var t=e.interaction;"drag"===t.prepared.name&&Yr(t,t.dropState.events)},"interactions:stop":function(e){var t=e.interaction;if("drag"===t.prepared.name){var n=t.dropState;n&&(n.activeDrops=null,n.events=null,n.cur.dropzone=null,n.cur.element=null,n.prev.dropzone=null,n.prev.element=null,n.rejected=!1)}}},getActiveDrops:Rr,getDrop:Wr,getDropEvents:Xr,fireDropEvents:Yr,defaults:{enabled:!1,accept:null,overlap:"pointer"}},Lr=Nr;Er.default=Lr;var Vr={};function qr(e){return(qr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Vr,"__esModule",{value:!0}),Vr.default=void 0;var Gr,Ur=(Gr=Dn)&&Gr.__esModule?Gr:{default:Gr},Br=b({}),Hr=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==qr(e)&&"function"!=typeof e)return{default:e};var t=Kr();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(pt);function Kr(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Kr=function(){return e},e}Br.ActionName.Gesture="gesture";var $r={id:"actions/gesture",install:function(e){var t=e.actions,n=e.Interactable,r=e.defaults;n.prototype.gesturable=function(e){return Hr.is.object(e)?(this.options.gesture.enabled=!1!==e.enabled,this.setPerAction("gesture",e),this.setOnEvents("gesture",e),this):Hr.is.bool(e)?(this.options.gesture.enabled=e,this):this.options.gesture},t[Br.ActionName.Gesture]=$r,t.names.push(Br.ActionName.Gesture),Hr.arr.merge(t.eventTypes,["gesturestart","gesturemove","gestureend"]),t.methodDict.gesture="gesturable",r.actions.gesture=$r.defaults},listeners:{"interactions:action-start":Qr,"interactions:action-move":Qr,"interactions:action-end":Qr,"interactions:new":function(e){e.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}}},defaults:{},checker:function(e,t,n,r,o){return 2<=o.pointers.length?{name:"gesture"}:null},getCursor:function(){return""}};function Qr(e){var t=e.interaction,n=e.iEvent,r=e.event,o=e.phase;if("gesture"===t.prepared.name){var i=t.pointers.map(function(e){return e.pointer}),a="start"===o,u="end"===o,l=t.interactable.options.deltaSource;if(n.touches=[i[0],i[1]],a)n.distance=Hr.pointer.touchDistance(i,l),n.box=Hr.pointer.touchBBox(i),n.scale=1,n.ds=0,n.angle=Hr.pointer.touchAngle(i,l),n.da=0,t.gesture.startDistance=n.distance,t.gesture.startAngle=n.angle;else if(u||r instanceof Ur.default){var s=t.prevEvent;n.distance=s.distance,n.box=s.box,n.scale=s.scale,n.ds=0,n.angle=s.angle,n.da=0}else n.distance=Hr.pointer.touchDistance(i,l),n.box=Hr.pointer.touchBBox(i),n.scale=n.distance/t.gesture.startDistance,n.angle=Hr.pointer.touchAngle(i,l),n.ds=n.scale-t.gesture.scale,n.da=n.angle-t.gesture.angle;t.gesture.distance=n.distance,t.gesture.angle=n.angle,Hr.is.number(n.scale)&&n.scale!==1/0&&!isNaN(n.scale)&&(t.gesture.scale=n.scale)}}var Zr=$r;Vr.default=Zr;var Jr={};function eo(e){return(eo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Jr,"__esModule",{value:!0}),Jr.default=void 0;var to,no=b({}),ro=lo(u),oo=lo(C),io=(to=me)&&to.__esModule?to:{default:to},ao=lo(y);function uo(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return uo=function(){return e},e}function lo(e){if(e&&e.__esModule)return e;if(null===e||"object"!==eo(e)&&"function"!=typeof e)return{default:e};var t=uo();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}var so={id:"actions/resize",install:function(t){var e=t.actions,n=t.browser,r=t.Interactable,o=t.defaults;so.cursors=function(e){return e.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(n),so.defaultMargin=n.supportsTouch||n.supportsPointerEvent?20:10,r.prototype.resizable=function(e){return function(e,t,n){if(ao.object(t))return e.options.resize.enabled=!1!==t.enabled,e.setPerAction("resize",t),e.setOnEvents("resize",t),ao.string(t.axis)&&/^x$|^y$|^xy$/.test(t.axis)?e.options.resize.axis=t.axis:null===t.axis&&(e.options.resize.axis=n.defaults.actions.resize.axis),ao.bool(t.preserveAspectRatio)?e.options.resize.preserveAspectRatio=t.preserveAspectRatio:ao.bool(t.square)&&(e.options.resize.square=t.square),e;if(ao.bool(t))return e.options.resize.enabled=t,e;return e.options.resize}(this,e,t)},e[no.ActionName.Resize]=so,e.names.push(no.ActionName.Resize),ro.merge(e.eventTypes,["resizestart","resizemove","resizeinertiastart","resizeresume","resizeend"]),e.methodDict.resize="resizable",o.actions.resize=so.defaults},listeners:{"interactions:new":function(e){e.interaction.resizeAxes="xy"},"interactions:action-start":function(e){!function(e){var t=e.iEvent,n=e.interaction;if("resize"!==n.prepared.name||!n.prepared.edges)return;var r=(0,io.default)({},n.rect),o=n.interactable.options.resize;if(o.square||o.preserveAspectRatio){var i=(0,io.default)({},n.prepared.edges);i.top=i.top||i.left&&!i.bottom,i.left=i.left||i.top&&!i.right,i.bottom=i.bottom||i.right&&!i.top,i.right=i.right||i.bottom&&!i.left,n.prepared._linkedEdges=i}else n.prepared._linkedEdges=null;o.preserveAspectRatio&&(n.resizeStartAspectRatio=r.width/r.height);n.resizeRects={start:r,current:{left:r.left,right:r.right,top:r.top,bottom:r.bottom},inverted:(0,io.default)({},r),previous:(0,io.default)({},r),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},t.edges=n.prepared.edges,t.rect=n.resizeRects.inverted,t.deltaRect=n.resizeRects.delta}(e),fo(e)},"interactions:action-move":function(e){!function(e){var t=e.iEvent,n=e.interaction;if("resize"!==n.prepared.name||!n.prepared.edges)return;var r=n.interactable.options.resize,o=r.invert,i="reposition"===o||"negate"===o,a=n.prepared.edges,u=n.resizeRects.start,l=n.resizeRects.current,s=n.resizeRects.inverted,c=n.resizeRects.delta,f=(0,io.default)(n.resizeRects.previous,s),p=a,d=(0,io.default)({},t.delta);if(r.preserveAspectRatio||r.square){var v=r.preserveAspectRatio?n.resizeStartAspectRatio:1;a=n.prepared._linkedEdges,p.left&&p.bottom||p.right&&p.top?d.y=-d.x/v:p.left||p.right?d.y=d.x/v:(p.top||p.bottom)&&(d.x=d.y*v)}a.top&&(l.top+=d.y);a.bottom&&(l.bottom+=d.y);a.left&&(l.left+=d.x);a.right&&(l.right+=d.x);if(i){var y;if((0,io.default)(s,l),"reposition"===o)s.top>s.bottom&&(y=s.top,s.top=s.bottom,s.bottom=y),s.left>s.right&&(y=s.left,s.left=s.right,s.right=y)}else s.top=Math.min(l.top,u.bottom),s.bottom=Math.max(l.bottom,u.top),s.left=Math.min(l.left,u.right),s.right=Math.max(l.right,u.left);for(var m in s.width=s.right-s.left,s.height=s.bottom-s.top,s)c[m]=s[m]-f[m];t.edges=n.prepared.edges,t.rect=s,t.deltaRect=c}(e),fo(e)},"interactions:action-end":function(e){var t=e.iEvent,n=e.interaction;if("resize"!==n.prepared.name||!n.prepared.edges)return;t.edges=n.prepared.edges,t.rect=n.resizeRects.inverted,t.deltaRect=n.resizeRects.delta}},defaults:{square:!(no.ActionName.Resize="resize"),preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},checker:function(e,t,n,r,o,i){if(!i)return null;var a=(0,io.default)({},o.coords.cur.page),u=n.options;if(u.resize.enabled){var l=u.resize,s={left:!1,right:!1,top:!1,bottom:!1};if(ao.object(l.edges)){for(var c in s)s[c]=co(c,l.edges[c],a,o._latestPointer.eventTarget,r,i,l.margin||this.defaultMargin);if(s.left=s.left&&!s.right,s.top=s.top&&!s.bottom,s.left||s.right||s.top||s.bottom)return{name:"resize",edges:s}}else{var f="y"!==u.resize.axis&&a.x>i.right-this.defaultMargin,p="x"!==u.resize.axis&&a.y>i.bottom-this.defaultMargin;if(f||p)return{name:"resize",axes:(f?"x":"")+(p?"y":"")}}}return null},cursors:null,getCursor:function(e){var t=e.edges,n=e.axis,r=e.name,o=so.cursors,i=null;if(n)i=o[r+n];else if(t){for(var a="",u=["top","bottom","left","right"],l=0;l<u.length;l++){var s=u[l];t[s]&&(a+=s)}i=o[a]}return i},defaultMargin:null};function co(e,t,n,r,o,i,a){if(!t)return!1;if(!0===t){var u=ao.number(i.width)?i.width:i.right-i.left,l=ao.number(i.height)?i.height:i.bottom-i.top;if(a=Math.min(a,("left"===e||"right"===e?u:l)/2),u<0&&("left"===e?e="right":"right"===e&&(e="left")),l<0&&("top"===e?e="bottom":"bottom"===e&&(e="top")),"left"===e)return n.x<(0<=u?i.left:i.right)+a;if("top"===e)return n.y<(0<=l?i.top:i.bottom)+a;if("right"===e)return n.x>(0<=u?i.right:i.left)-a;if("bottom"===e)return n.y>(0<=l?i.bottom:i.top)-a}return!!ao.element(r)&&(ao.element(t)?t===r:oo.matchesUpTo(r,t,o))}function fo(e){var t=e.iEvent,n=e.interaction;n.prepared.name===no.ActionName.Resize&&n.resizeAxes&&(n.interactable.options.resize.square?("y"===n.resizeAxes?t.delta.x=t.delta.y:t.delta.y=t.delta.x,t.axes="xy"):(t.axes=n.resizeAxes,"x"===n.resizeAxes?t.delta.y=0:"y"===n.resizeAxes&&(t.delta.x=0)))}var po=so;Jr.default=po;var vo={};Object.defineProperty(vo,"__esModule",{value:!0}),vo.install=function(e){e.usePlugin(go.default),e.usePlugin(ho.default),e.usePlugin(yo.default),e.usePlugin(mo.default)},Object.defineProperty(vo,"drag",{enumerable:!0,get:function(){return yo.default}}),Object.defineProperty(vo,"drop",{enumerable:!0,get:function(){return mo.default}}),Object.defineProperty(vo,"gesture",{enumerable:!0,get:function(){return go.default}}),Object.defineProperty(vo,"resize",{enumerable:!0,get:function(){return ho.default}}),vo.id=void 0;var yo=bo(or),mo=bo(Er),go=bo(Vr),ho=bo(Jr);function bo(e){return e&&e.__esModule?e:{default:e}}vo.id="actions";var wo={};function Oo(e){return(Oo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(wo,"__esModule",{value:!0}),wo.getContainer=ko,wo.getScroll=To,wo.getScrollSize=function(e){xo.window(e)&&(e=window.document.body);return{x:e.scrollWidth,y:e.scrollHeight}},wo.getScrollSizeDelta=function(e,t){var n=e.interaction,r=e.element,o=n&&n.interactable.options[n.prepared.name].autoScroll;if(!o||!o.enabled)return t(),{x:0,y:0};var i=ko(o.container,n.interactable,r),a=To(i);t();var u=To(i);return{x:u.x-a.x,y:u.y-a.y}},wo.default=void 0;var Po,_o=Mo(C),xo=Mo(y),So=(Po=ut)&&Po.__esModule?Po:{default:Po};function jo(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return jo=function(){return e},e}function Mo(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Oo(e)&&"function"!=typeof e)return{default:e};var t=jo();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}var Eo={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:null,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(e){Eo.isScrolling=!0,So.default.cancel(Eo.i),(e.autoScroll=Eo).interaction=e,Eo.prevTime=Eo.now(),Eo.i=So.default.request(Eo.scroll)},stop:function(){Eo.isScrolling=!1,Eo.interaction&&(Eo.interaction.autoScroll=null),So.default.cancel(Eo.i)},scroll:function(){var e=Eo.interaction,t=e.interactable,n=e.element,r=t.options[Eo.interaction.prepared.name].autoScroll,o=ko(r.container,t,n),i=Eo.now(),a=(i-Eo.prevTime)/1e3,u=r.speed*a;if(1<=u){var l={x:Eo.x*u,y:Eo.y*u};if(l.x||l.y){var s=To(o);xo.window(o)?o.scrollBy(l.x,l.y):o&&(o.scrollLeft+=l.x,o.scrollTop+=l.y);var c=To(o),f={x:c.x-s.x,y:c.y-s.y};(f.x||f.y)&&t.fire({type:"autoscroll",target:n,interactable:t,delta:f,interaction:e,container:o})}Eo.prevTime=i}Eo.isScrolling&&(So.default.cancel(Eo.i),Eo.i=So.default.request(Eo.scroll))},check:function(e,t){var n=e.options;return n[t].autoScroll&&n[t].autoScroll.enabled},onInteractionMove:function(e){var t=e.interaction,n=e.pointer;if(t.interacting()&&Eo.check(t.interactable,t.prepared.name))if(t.simulation)Eo.x=Eo.y=0;else{var r,o,i,a,u=t.interactable,l=t.element,s=u.options[t.prepared.name].autoScroll,c=ko(s.container,u,l);if(xo.window(c))a=n.clientX<Eo.margin,r=n.clientY<Eo.margin,o=n.clientX>c.innerWidth-Eo.margin,i=n.clientY>c.innerHeight-Eo.margin;else{var f=_o.getElementClientRect(c);a=n.clientX<f.left+Eo.margin,r=n.clientY<f.top+Eo.margin,o=n.clientX>f.right-Eo.margin,i=n.clientY>f.bottom-Eo.margin}Eo.x=o?1:a?-1:0,Eo.y=i?1:r?-1:0,Eo.isScrolling||(Eo.margin=s.margin,Eo.speed=s.speed,Eo.start(t))}}};function ko(e,t,n){return(xo.string(e)?(0,ge.getStringOptionResult)(e,t,n):e)||(0,l.getWindow)(n)}function To(e){return xo.window(e)&&(e=window.document.body),{x:e.scrollLeft,y:e.scrollTop}}var Do={id:"auto-scroll",install:function(e){var t=e.defaults,n=e.actions;(e.autoScroll=Eo).now=function(){return e.now()},n.eventTypes.push("autoscroll"),t.perAction.autoScroll=Eo.defaults},listeners:{"interactions:new":function(e){e.interaction.autoScroll=null},"interactions:destroy":function(e){e.interaction.autoScroll=null,Eo.stop(),Eo.interaction&&(Eo.interaction=null)},"interactions:stop":Eo.stop,"interactions:action-move":function(e){return Eo.onInteractionMove(e)}}};wo.default=Do;var Io={};function zo(e){return(zo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Io,"__esModule",{value:!0}),Io.default=void 0;var Ao=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==zo(e)&&"function"!=typeof e)return{default:e};var t=Co();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(y);function Co(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Co=function(){return e},e}function Ro(e,t,n,r){var o=this.defaultActionChecker(e,t,n,r);return this.options.actionChecker?this.options.actionChecker(e,t,o,this,r,n):o}function Wo(e){return Ao.bool(e)?(this.options.styleCursor=e,this):null===e?(delete this.options.styleCursor,this):this.options.styleCursor}function Xo(e){return Ao.func(e)?(this.options.actionChecker=e,this):null===e?(delete this.options.actionChecker,this):this.options.actionChecker}var Yo={id:"auto-start/interactableMethods",install:function(e){var t=e.Interactable,o=e.actions;t.prototype.getAction=Ro,t.prototype.ignoreFrom=(0,pt.warnOnce)(function(e){return this._backCompatOption("ignoreFrom",e)},"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),t.prototype.allowFrom=(0,pt.warnOnce)(function(e){return this._backCompatOption("allowFrom",e)},"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),t.prototype.actionChecker=Xo,t.prototype.styleCursor=Wo,t.prototype.defaultActionChecker=function(e,t,n,r){return function(e,t,n,r,o,i){for(var a=e.getRect(o),u=n.buttons||{0:1,1:4,3:8,4:16}[n.button],l=null,s=0;s<i.names.length;s++){var c=i.names[s];if((!r.pointerIsDown||!/mouse|pointer/.test(r.pointerType)||0!=(u&e.options[c].mouseButtons))&&(l=i[c].checker(t,n,e,o,r,a)))return l}}(this,e,t,n,r,o)}}};Io.default=Yo;var Fo={};function No(e){return(No="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Fo,"__esModule",{value:!0}),Fo.default=void 0;var Lo,Vo=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==No(e)&&"function"!=typeof e)return{default:e};var t=Go();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(pt),qo=(Lo=Io)&&Lo.__esModule?Lo:{default:Lo};function Go(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Go=function(){return e},e}function Uo(e,t,n,r,o){return t.testIgnoreAllow(t.options[e.name],n,r)&&t.options[e.name].enabled&&$o(t,n,e,o)?e:null}function Bo(e,t,n,r,o,i,a){for(var u=0,l=r.length;u<l;u++){var s=r[u],c=o[u],f=s.getAction(t,n,e,c);if(f){var p=Uo(f,s,c,i,a);if(p)return{action:p,interactable:s,element:c}}}return{action:null,interactable:null,element:null}}function Ho(e,t,n,r,o){var i=[],a=[],u=r;function l(e){i.push(e),a.push(u)}for(;Vo.is.element(u);){i=[],a=[],o.interactables.forEachMatch(u,l);var s=Bo(e,t,n,i,a,r,o);if(s.action&&!s.interactable.options[s.action.name].manualStart)return s;u=Vo.dom.parentNode(u)}return{action:null,interactable:null,element:null}}function Ko(e,t,n){var r=t.action,o=t.interactable,i=t.element;r=r||{name:null},e.interactable&&e.interactable.options.styleCursor&&Zo(e.element,"",n),e.interactable=o,e.element=i,Vo.copyAction(e.prepared,r),e.rect=o&&r.name?o.getRect(i):null,Jo(e,n),n.fire("autoStart:prepared",{interaction:e})}function $o(e,t,n,r){var o=e.options,i=o[n.name].max,a=o[n.name].maxPerElement,u=r.autoStart.maxInteractions,l=0,s=0,c=0;if(!(i&&a&&u))return!1;for(var f=0;f<r.interactions.list.length;f++){var p=r.interactions.list[f],d=p.prepared.name;if(p.interacting()){if(u<=++l)return!1;if(p.interactable===e){if(i<=(s+=d===n.name?1:0))return!1;if(p.element===t&&(c++,d===n.name&&a<=c))return!1}}}return 0<u}function Qo(e,t){return Vo.is.number(e)?(t.autoStart.maxInteractions=e,this):t.autoStart.maxInteractions}function Zo(e,t,n){n.autoStart.cursorElement&&(n.autoStart.cursorElement.style.cursor=""),e.ownerDocument.documentElement.style.cursor=t,e.style.cursor=t,n.autoStart.cursorElement=t?e:null}function Jo(e,t){var n=e.interactable,r=e.element,o=e.prepared;if("mouse"===e.pointerType&&n&&n.options.styleCursor){var i="";if(o.name){var a=n.options[o.name].cursorChecker;i=Vo.is.func(a)?a(o,n,r,e._interacting):t.actions[o.name].getCursor(o)}Zo(e.element,i||"",t)}}var ei={id:"auto-start/base",install:function(t){var e=t.interact,n=t.defaults;t.usePlugin(qo.default),n.base.actionChecker=null,n.base.styleCursor=!0,Vo.extend(n.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),e.maxInteractions=function(e){return Qo(e,t)},t.autoStart={maxInteractions:1/0,withinInteractionLimit:$o,cursorElement:null}},listeners:{"interactions:down":function(e,t){var n=e.interaction,r=e.pointer,o=e.event,i=e.eventTarget;n.interacting()||Ko(n,Ho(n,r,o,i,t),t)},"interactions:move":function(e,t){!function(e,t){var n=e.interaction,r=e.pointer,o=e.event,i=e.eventTarget;"mouse"!==n.pointerType||n.pointerIsDown||n.interacting()||Ko(n,Ho(n,r,o,i,t),t)}(e,t),function(e,t){var n=e.interaction;if(n.pointerIsDown&&!n.interacting()&&n.pointerWasMoved&&n.prepared.name){t.fire("autoStart:before-start",e);var r=n.interactable;n.prepared.name&&r&&(r.options[n.prepared.name].manualStart||!$o(r,n.element,n.prepared,t)?n.stop():(n.start(n.prepared,r,n.element),Jo(n,t)))}}(e,t)},"interactions:stop":function(e,t){var n=e.interaction,r=n.interactable;r&&r.options.styleCursor&&Zo(n.element,"",t)}},before:"ations",maxInteractions:Qo,withinInteractionLimit:$o,validateAction:Uo};Fo.default=ei;var ti={};function ni(e){return(ni="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(ti,"__esModule",{value:!0}),ti.default=void 0;var ri,oi=b({}),ii=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==ni(e)&&"function"!=typeof e)return{default:e};var t=ui();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(y),ai=(ri=Fo)&&ri.__esModule?ri:{default:ri};function ui(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return ui=function(){return e},e}var li={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(e,r){var o=e.interaction,i=e.eventTarget,t=e.dx,n=e.dy;if("drag"===o.prepared.name){var a=Math.abs(t),u=Math.abs(n),l=o.interactable.options.drag,s=l.startAxis,c=u<a?"x":a<u?"y":"xy";if(o.prepared.axis="start"===l.lockAxis?c[0]:l.lockAxis,"xy"!=c&&"xy"!==s&&s!==c){o.prepared.name=null;function f(e){if(e!==o.interactable){var t=o.interactable.options.drag;if(!t.manualStart&&e.testIgnoreAllow(t,p,i)){var n=e.getAction(o.downPointer,o.downEvent,o,p);if(n&&n.name===oi.ActionName.Drag&&function(e,t){if(!t)return!1;var n=t.options[oi.ActionName.Drag].startAxis;return"xy"===e||"xy"===n||n===e}(c,e)&&ai.default.validateAction(n,e,p,i,r))return e}}}for(var p=i;ii.element(p);){var d=r.interactables.forEachMatch(p,f);if(d){o.prepared.name=oi.ActionName.Drag,o.interactable=d,o.element=p;break}p=(0,C.parentNode)(p)}}}}}};ti.default=li;var si={};Object.defineProperty(si,"__esModule",{value:!0}),si.default=void 0;var ci,fi=(ci=Fo)&&ci.__esModule?ci:{default:ci};function pi(e){var t=e.prepared&&e.prepared.name;if(!t)return null;var n=e.interactable.options;return n[t].hold||n[t].delay}var di={id:"auto-start/hold",install:function(e){var t=e.defaults;e.usePlugin(fi.default),t.perAction.hold=0,t.perAction.delay=0},listeners:{"interactions:new":function(e){e.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(e){var t=e.interaction,n=pi(t);0<n&&(t.autoStartHoldTimer=setTimeout(function(){t.start(t.prepared,t.interactable,t.element)},n))},"interactions:move":function(e){var t=e.interaction,n=e.duplicate;t.pointerWasMoved&&!n&&clearTimeout(t.autoStartHoldTimer)},"autoStart:before-start":function(e){var t=e.interaction;0<pi(t)&&(t.prepared.name=null)}},getHoldDuration:pi};si.default=di;var vi={};Object.defineProperty(vi,"__esModule",{value:!0}),vi.install=function(e){e.usePlugin(yi.default),e.usePlugin(gi.default),e.usePlugin(mi.default)},Object.defineProperty(vi,"autoStart",{enumerable:!0,get:function(){return yi.default}}),Object.defineProperty(vi,"dragAxis",{enumerable:!0,get:function(){return mi.default}}),Object.defineProperty(vi,"hold",{enumerable:!0,get:function(){return gi.default}}),vi.id=void 0;var yi=hi(Fo),mi=hi(ti),gi=hi(si);function hi(e){return e&&e.__esModule?e:{default:e}}vi.id="auto-start";var bi={};function wi(e){return(wi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(bi,"__esModule",{value:!0}),bi.install=Mi,bi.default=void 0;var Oi,Pi=(Oi=Te)&&Oi.__esModule?Oi:{default:Oi},_i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==wi(e)&&"function"!=typeof e)return{default:e};var t=xi();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(y);function xi(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return xi=function(){return e},e}function Si(e){return/^(always|never|auto)$/.test(e)?(this.options.preventDefault=e,this):_i.bool(e)?(this.options.preventDefault=e?"always":"never",this):this.options.preventDefault}function ji(e){var t=e.interaction,n=e.event;t.interactable&&t.interactable.checkAndPreventDefault(n)}function Mi(r){var e=r.Interactable;e.prototype.preventDefault=Si,e.prototype.checkAndPreventDefault=function(e){return function(e,t,n){var r=e.options.preventDefault;if("never"!==r)if("always"!==r){if(Pi.default.supportsPassive&&/^touch(start|move)$/.test(n.type)){var o=(0,l.getWindow)(n.target).document,i=t.getDocOptions(o);if(!i||!i.events||!1!==i.events.passive)return}/^(mouse|pointer|touch)*(down|start)/i.test(n.type)||_i.element(n.target)&&(0,C.matchesSelector)(n.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||n.preventDefault()}else n.preventDefault()}(this,r,e)},r.interactions.docEvents.push({type:"dragstart",listener:function(e){for(var t=0;t<r.interactions.list.length;t++){var n=r.interactions.list[t];if(n.element&&(n.element===e.target||(0,C.nodeContains)(n.element,e.target)))return void n.interactable.checkAndPreventDefault(e)}}})}var Ei={id:"core/interactablePreventDefault",install:Mi,listeners:["down","move","up","cancel"].reduce(function(e,t){return e["interactions:".concat(t)]=ji,e},{})};bi.default=Ei;var ki={};function Ti(e){return(Ti="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(ki,"__esModule",{value:!0}),ki.default=void 0;var Di,Ii,zi=Xi(k),Ai=Xi(me),Ci=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Ti(e)&&"function"!=typeof e)return{default:e};var t=Wi();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(y),Ri=Xi(l);function Wi(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Wi=function(){return e},e}function Xi(e){return e&&e.__esModule?e:{default:e}}function Yi(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(Ii=Di=Di||{}).touchAction="",Ii.boxSizing="",Ii.noListeners="";var Fi="[interact.js] ",Ni={touchAction:"https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",boxSizing:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"};var Li=[{name:"touchAction",perform:function(e){return!function(e,t,n){var r=e;for(;Ci.element(r);){if(Vi(r,t,n))return!0;r=(0,C.parentNode)(r)}return!1}(e.element,"touchAction",/pan-|pinch|none/)},getInfo:function(e){return[e.element,Ni.touchAction]},text:'Consider adding CSS "touch-action: none" to this element\n'},{name:"boxSizing",perform:function(e){var t=e.element;return"resize"===e.prepared.name&&t instanceof zi.default.HTMLElement&&!Vi(t,"boxSizing",/border-box/)},text:'Consider adding CSS "box-sizing: border-box" to this resizable element',getInfo:function(e){return[e.element,Ni.boxSizing]}},{name:"noListeners",perform:function(e){var t=e.prepared.name;return!(e.interactable.events.types["".concat(t,"move")]||[]).length},getInfo:function(e){return[e.prepared.name,e.interactable]},text:"There are no listeners set for this action"}];function Vi(e,t,n){return n.test(e.style[t]||Ri.default.window.getComputedStyle(e)[t])}var qi="dev-tools",Gi={id:qi,install:function(e){var t=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).logger,n=e.Interactable,r=e.defaults;e.logger=t||console,r.base.devTools={ignore:{}},n.prototype.devTools=function(e){return e?((0,Ai.default)(this.options.devTools,e),this):this.options.devTools}},listeners:{"interactions:action-start":function(e,t){for(var n=e.interaction,r=0;r<Li.length;r++){var o,i=Li[r],a=n.interactable&&n.interactable.options[n.prepared.name];if(!(a&&a.devTools&&a.devTools.ignore[i.name])&&i.perform(n))(o=t.logger).warn.apply(o,[Fi+i.text].concat(Yi(i.getInfo(n))))}}},checks:Li,CheckName:Di,links:Ni,prefix:Fi};ki.default=Gi;var Ui={};Object.defineProperty(Ui,"__esModule",{value:!0}),Ui.startAll=Qi,Ui.setAll=Zi,Ui.prepareStates=ra,Ui.setCoords=oa,Ui.restoreCoords=ia,Ui.makeModifier=la,Ui.default=void 0;var Bi,Hi=(Bi=me)&&Bi.__esModule?Bi:{default:Bi};function Ki(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function $i(e,t,n){var r=e.interaction,o=e.phase,i=r.interactable,a=r.element,u=ra(na(r)),l=(0,Hi.default)({},r.rect);"width"in l||(l.width=l.right-l.left),"height"in l||(l.height=l.bottom-l.top);var s=ua(l,t);r.modifiers.startOffset=s,r.modifiers.startDelta={x:0,y:0};var c={interaction:r,interactable:i,element:a,pageCoords:t,phase:o,rect:l,startOffset:s,states:u,preEnd:!1,requireEndOnly:!1,prevCoords:n||(r.modifiers.result?r.modifiers.result.coords:r.coords.prev.page)};return r.modifiers.states=u,r.modifiers.result=null,Qi(c),r.modifiers.result=Zi(c)}function Qi(e){for(var t=e.states,n=0;n<t.length;n++){var r=t[n];r.methods.start&&(e.state=r).methods.start(e)}}function Zi(e){var t=e.prevCoords,n=e.phase,r=e.preEnd,o=e.requireEndOnly,i=e.rect,a=e.states;e.coords=(0,Hi.default)({},e.pageCoords),e.rect=(0,Hi.default)({},i);for(var u={delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},coords:e.coords,changed:!0},l=0;l<a.length;l++){var s=a[l],c=s.options;s.methods.set&&aa(c,r,o,n)&&(e.state=s).methods.set(e)}u.delta.x=e.coords.x-e.pageCoords.x,u.delta.y=e.coords.y-e.pageCoords.y;var f=!1;return i&&(u.rectDelta.left=e.rect.left-i.left,u.rectDelta.right=e.rect.right-i.right,u.rectDelta.top=e.rect.top-i.top,u.rectDelta.bottom=e.rect.bottom-i.bottom,f=0!==u.rectDelta.left||0!==u.rectDelta.right||0!==u.rectDelta.top||0!==u.rectDelta.bottom),u.changed=!t||t.x!==u.coords.x||t.y!==u.coords.y||f,u}function Ji(e){var t=e.interaction,n=e.phase,r=e.preEnd,o=e.skipModifiers,i=t.interactable,a=t.element,u=o?t.modifiers.states.slice(o):t.modifiers.states,l=e.prevCoords||(t.modifiers.result?t.modifiers.result.coords:t.coords.prev.page),s=Zi({interaction:t,interactable:i,element:a,preEnd:r,phase:n,pageCoords:e.modifiedCoords||t.coords.cur.page,prevCoords:l,rect:t.rect,states:u,requireEndOnly:!1});if(!(t.modifiers.result=s).changed&&t.interacting())return!1;if(e.modifiedCoords){var c=t.coords.cur.page,f=e.modifiedCoords.x-c.x,p=e.modifiedCoords.y-c.y;s.coords.x+=f,s.coords.y+=p,s.delta.x+=f,s.delta.y+=p}oa(e)}function ea(e){var t=e.interaction,n=e.event,r=e.noPreEnd,o=t.modifiers.states;if(!r&&o&&o.length)for(var i=!1,a=0;a<o.length;a++){var u=o[a],l=(e.state=u).options,s=u.methods;if(!1===(s.beforeEnd&&s.beforeEnd(e)))return!(t.modifiers.endPrevented=!0);!i&&aa(l,!0,!0)&&(t.move({event:n,preEnd:!0}),i=!0)}}function ta(e){var t=e.interaction,n=t.modifiers.states;if(n&&n.length){for(var r=(0,Hi.default)({states:n,interactable:t.interactable,element:t.element,rect:null},e),o=0;o<n.length;o++){var i=n[o];(r.state=i).methods.stop&&i.methods.stop(r)}e.interaction.modifiers.states=null,e.interaction.modifiers.endPrevented=null}}function na(e){var n=e.interactable.options[e.prepared.name],t=n.modifiers;return t&&t.length?t.filter(function(e){return!e.options||!1!==e.options.enabled}):["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map(function(e){var t=n[e];return t&&t.enabled&&{options:t,methods:t._methods}}).filter(function(e){return!!e})}function ra(e){for(var t=[],n=0;n<e.length;n++){var r=e[n],o=r.options,i=r.methods,a=r.name;o&&!1===o.enabled||t.push({options:o,methods:i,index:n,name:a})}return t}function oa(e){var t=e.interaction,n=e.phase,r=t.coords.cur,o=t.coords.start,i=t.modifiers,a=i.result,u=i.startDelta,l=a.delta;"start"===n&&(0,Hi.default)(t.modifiers.startDelta,a.delta);for(var s=[[o,u],[r,l]],c=0;c<s.length;c++){var f=Ki(s[c],2),p=f[0],d=f[1];p.page.x+=d.x,p.page.y+=d.y,p.client.x+=d.x,p.client.y+=d.y}var v=t.modifiers.result.rectDelta,y=e.rect||t.rect;y.left+=v.left,y.right+=v.right,y.top+=v.top,y.bottom+=v.bottom,y.width=y.right-y.left,y.height=y.bottom-y.top}function ia(e){var t=e.interaction,n=t.coords,r=t.rect,o=t.modifiers;if(o.result){for(var i=o.startDelta,a=o.result,u=a.delta,l=a.rectDelta,s=[[n.start,i],[n.cur,u]],c=0;c<s.length;c++){var f=Ki(s[c],2),p=f[0],d=f[1];p.page.x-=d.x,p.page.y-=d.y,p.client.x-=d.x,p.client.y-=d.y}r.left-=l.left,r.right-=l.right,r.top-=l.top,r.bottom-=l.bottom}}function aa(e,t,n,r){return e?!1!==e.enabled&&(t||!e.endOnly)&&(!n||e.endOnly||e.alwaysOnEnd)&&(e.setStart||"start"!==r):!n}function ua(e,t){return e?{left:t.x-e.left,top:t.y-e.top,right:e.right-t.x,bottom:e.bottom-t.y}:{left:0,top:0,right:0,bottom:0}}function la(e,r){function t(e){var t=e||{};for(var n in t.enabled=!1!==t.enabled,o)n in t||(t[n]=o[n]);return{options:t,methods:i,name:r}}var o=e.defaults,i={start:e.start,set:e.set,beforeEnd:e.beforeEnd,stop:e.stop};return r&&"string"==typeof r&&(t._defaults=o,t._methods=i),t}var sa={id:"modifiers/base",install:function(e){e.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(e){e.interaction.modifiers={startOffset:{left:0,right:0,top:0,bottom:0},offsets:{},states:null,result:null,endPrevented:!1,startDelta:null}},"interactions:before-action-start":function(e){$i(e,e.interaction.coords.start.page,e.interaction.coords.prev.page),oa(e)},"interactions:action-resume":function(e){ta(e),$i(e,e.interaction.coords.cur.page,e.interaction.modifiers.result.coords),Ji(e)},"interactions:after-action-move":ia,"interactions:before-action-move":Ji,"interactions:after-action-start":ia,"interactions:before-action-end":ea,"interactions:stop":ta},before:"ations",startAll:Qi,setAll:Zi,prepareStates:ra,start:$i,beforeMove:Ji,beforeEnd:ea,stop:ta,shouldDo:aa,getModifierList:na,getRectOffset:ua,makeModifier:la};Ui.default=sa;var ca={};function fa(e){return(fa="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(ca,"__esModule",{value:!0}),ca.default=void 0;var pa,da=ga(Ui),va=ga(pt),ya=(pa=ut)&&pa.__esModule?pa:{default:pa};function ma(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return ma=function(){return e},e}function ga(e){if(e&&e.__esModule)return e;if(null===e||"object"!==fa(e)&&"function"!=typeof e)return{default:e};var t=ma();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function ha(e,t){var n=Pa(e),r=n.resistance,o=-Math.log(n.endSpeed/t.v0)/r;t.x0=e.prevEvent.page.x,t.y0=e.prevEvent.page.y,t.t0=t.startEvent.timeStamp/1e3,t.sx=t.sy=0,t.modifiedXe=t.xe=(t.vx0-o)/r,t.modifiedYe=t.ye=(t.vy0-o)/r,t.te=o,t.lambda_v0=r/t.v0,t.one_ve_v0=1-n.endSpeed/t.v0}function ba(e){Oa(e),va.pointer.setCoordDeltas(e.coords.delta,e.coords.prev,e.coords.cur),va.pointer.setCoordVelocity(e.coords.velocity,e.coords.delta);var t=e.inertia,n=Pa(e).resistance,r=e._now()/1e3-t.t0;if(r<t.te){var o=1-(Math.exp(-n*r)-t.lambda_v0)/t.one_ve_v0;if(t.modifiedXe===t.xe&&t.modifiedYe===t.ye)t.sx=t.xe*o,t.sy=t.ye*o;else{var i=va.getQuadraticCurvePoint(0,0,t.xe,t.ye,t.modifiedXe,t.modifiedYe,o);t.sx=i.x,t.sy=i.y}e.move(),t.timeout=ya.default.request(function(){return ba(e)})}else t.sx=t.modifiedXe,t.sy=t.modifiedYe,e.move(),e.end(t.startEvent),t.active=!1,e.simulation=null;va.pointer.copyCoords(e.coords.prev,e.coords.cur)}function wa(e){Oa(e);var t=e.inertia,n=e._now()-t.t0,r=Pa(e).smoothEndDuration;n<r?(t.sx=va.easeOutQuad(n,0,t.xe,r),t.sy=va.easeOutQuad(n,0,t.ye,r),e.move(),t.timeout=ya.default.request(function(){return wa(e)})):(t.sx=t.xe,t.sy=t.ye,e.move(),e.end(t.startEvent),t.smoothEnd=t.active=!1,e.simulation=null)}function Oa(e){var t=e.inertia;if(t.active){var n=t.upCoords.page,r=t.upCoords.client;va.pointer.setCoords(e.coords.cur,[{pageX:n.x+t.sx,pageY:n.y+t.sy,clientX:r.x+t.sx,clientY:r.y+t.sy}],e._now())}}function Pa(e){var t=e.interactable,n=e.prepared;return t&&t.options&&n.name&&t.options[n.name].inertia}Dn.EventPhase.Resume="resume",Dn.EventPhase.InertiaStart="inertiastart";var _a={id:"inertia",install:function(e){var t=e.defaults;e.usePlugin(da.default),t.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(e){e.interaction.inertia={active:!1,smoothEnd:!1,allowResume:!1,upCoords:{},timeout:null}},"interactions:before-action-end":function(e,t){var n=e.interaction,r=e.event,o=e.noPreEnd,i=n.inertia;if(!n.interacting()||n.simulation&&n.simulation.active||o)return null;var a,u=Pa(n),l=n._now(),s=n.coords.velocity.client,c=va.hypot(s.x,s.y),f=!1,p=u&&u.enabled&&"gesture"!==n.prepared.name&&r!==i.startEvent,d=p&&l-n.coords.cur.timeStamp<50&&c>u.minSpeed&&c>u.endSpeed,v={interaction:n,interactable:n.interactable,element:n.element,rect:n.rect,pageCoords:n.coords.cur.page,states:p&&n.modifiers.states.map(function(e){return va.extend({},e)}),preEnd:!0,prevCoords:null,requireEndOnly:null,phase:Dn.EventPhase.InertiaStart};return p&&!d&&(v.prevCoords=n.modifiers.result?n.modifiers.result.coords:n.prevEvent.page,v.requireEndOnly=!1,(a=da.default.setAll(v)).changed&&(f=!0)),d||f?(va.pointer.copyCoords(i.upCoords,n.coords.cur),(0,da.setCoords)(v),n.pointers[0].pointer=i.startEvent=new t.InteractEvent(n,r,n.prepared.name,Dn.EventPhase.InertiaStart,n.element),(0,da.restoreCoords)(v),i.t0=l,i.active=!0,i.allowResume=u.allowResume,n.simulation=i,n.interactable.fire(i.startEvent),d?(i.vx0=n.coords.velocity.client.x,i.vy0=n.coords.velocity.client.y,i.v0=c,ha(n,i),va.extend(v.pageCoords,n.coords.cur.page),v.pageCoords.x+=i.xe,v.pageCoords.y+=i.ye,v.prevCoords=null,v.requireEndOnly=!0,a=da.default.setAll(v),i.modifiedXe+=a.delta.x,i.modifiedYe+=a.delta.y,i.timeout=ya.default.request(function(){return ba(n)})):(i.smoothEnd=!0,i.xe=a.delta.x,i.ye=a.delta.y,i.sx=i.sy=0,i.timeout=ya.default.request(function(){return wa(n)})),!1):null},"interactions:down":function(e,t){var n=e.interaction,r=e.event,o=e.pointer,i=e.eventTarget,a=n.inertia;if(a.active)for(var u=i;va.is.element(u);){if(u===n.element){ya.default.cancel(a.timeout),a.active=!1,n.simulation=null,n.updatePointer(o,r,i,!0),va.pointer.setCoords(n.coords.cur,n.pointers.map(function(e){return e.pointer}),n._now());var l={interaction:n,phase:Dn.EventPhase.Resume};t.fire("interactions:action-resume",l);var s=new t.InteractEvent(n,r,n.prepared.name,Dn.EventPhase.Resume,n.element);n._fireEvent(s),va.pointer.copyCoords(n.coords.prev,n.coords.cur);break}u=va.dom.parentNode(u)}},"interactions:stop":function(e){var t=e.interaction,n=t.inertia;n.active&&(ya.default.cancel(n.timeout),n.active=!1,t.simulation=null)}},before:"modifiers/base",calcInertia:ha,inertiaTick:ba,smothEndTick:wa,updateInertiaCoords:Oa};ca.default=_a;var xa={};function Sa(e){return(Sa="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(xa,"__esModule",{value:!0}),xa.getRestrictionRect=Ia,xa.default=void 0;var ja,Ma=(ja=me)&&ja.__esModule?ja:{default:ja},Ea=Da(y),ka=Da(ge);function Ta(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Ta=function(){return e},e}function Da(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Sa(e)&&"function"!=typeof e)return{default:e};var t=Ta();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function Ia(e,t,n){return Ea.func(e)?ka.resolveRectLike(e,t.interactable,t.element,[n.x,n.y,t]):ka.resolveRectLike(e,t.interactable,t.element)}var za={start:function(e){var t=e.rect,n=e.startOffset,r=e.state,o=e.interaction,i=e.pageCoords,a=r.options,u=a.elementRect,l=(0,Ma.default)({left:0,top:0,right:0,bottom:0},a.offset||{});if(t&&u){var s=Ia(a.restriction,o,i);if(s){var c=s.right-s.left-t.width,f=s.bottom-s.top-t.height;c<0&&(l.left+=c,l.right+=c),f<0&&(l.top+=f,l.bottom+=f)}l.left+=n.left-t.width*u.left,l.top+=n.top-t.height*u.top,l.right+=n.right-t.width*(1-u.right),l.bottom+=n.bottom-t.height*(1-u.bottom)}r.offset=l},set:function(e){var t=e.coords,n=e.interaction,r=e.state,o=r.options,i=r.offset,a=Ia(o.restriction,n,t);if(a){var u=ka.xywhToTlbr(a);t.x=Math.max(Math.min(u.right-i.right,t.x),u.left+i.left),t.y=Math.max(Math.min(u.bottom-i.bottom,t.y),u.top+i.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};xa.default=za;var Aa={};function Ca(e){return(Ca="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Aa,"__esModule",{value:!0}),Aa.default=void 0;var Ra,Wa=(Ra=me)&&Ra.__esModule?Ra:{default:Ra},Xa=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Ca(e)&&"function"!=typeof e)return{default:e};var t=Ya();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(ge);function Ya(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Ya=function(){return e},e}var Fa={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Na={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function La(e,t){for(var n=["top","left","bottom","right"],r=0;r<n.length;r++){var o=n[r];o in e||(e[o]=t[o])}return e}var Va={noInner:Fa,noOuter:Na,start:function(e){var t,n=e.interaction,r=e.state,o=r.options,i=n.modifiers.startOffset;if(o){var a=(0,xa.getRestrictionRect)(o.offset,n,n.coords.start.page);t=Xa.rectToXY(a)}t=t||{x:0,y:0},r.offset={top:t.y+i.top,left:t.x+i.left,bottom:t.y-i.bottom,right:t.x-i.right}},set:function(e){var t=e.coords,n=e.interaction,r=e.state,o=r.offset,i=r.options,a=n.prepared._linkedEdges||n.prepared.edges;if(a){var u=(0,Wa.default)({},t),l=(0,xa.getRestrictionRect)(i.inner,n,u)||{},s=(0,xa.getRestrictionRect)(i.outer,n,u)||{};La(l,Fa),La(s,Na),a.top?t.y=Math.min(Math.max(s.top+o.top,u.y),l.top+o.top):a.bottom&&(t.y=Math.max(Math.min(s.bottom+o.bottom,u.y),l.bottom+o.bottom)),a.left?t.x=Math.min(Math.max(s.left+o.left,u.x),l.left+o.left):a.right&&(t.x=Math.max(Math.min(s.right+o.right,u.x),l.right+o.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};Aa.default=Va;var qa={};Object.defineProperty(qa,"__esModule",{value:!0}),qa.default=void 0;var Ga=Ba(me),Ua=Ba(xa);function Ba(e){return e&&e.__esModule?e:{default:e}}var Ha=(0,Ga.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(e){}},Ua.default.defaults),Ka={start:Ua.default.start,set:Ua.default.set,defaults:Ha};qa.default=Ka;var $a={};function Qa(e){return(Qa="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty($a,"__esModule",{value:!0}),$a.default=void 0;var Za=nu(me),Ja=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Qa(e)&&"function"!=typeof e)return{default:e};var t=tu();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(ge),eu=nu(Aa);function tu(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return tu=function(){return e},e}function nu(e){return e&&e.__esModule?e:{default:e}}var ru={width:-1/0,height:-1/0},ou={width:1/0,height:1/0};var iu={start:function(e){return eu.default.start(e)},set:function(e){var t=e.interaction,n=e.state,r=n.options,o=t.prepared._linkedEdges||t.prepared.edges;if(o){var i=Ja.xywhToTlbr(t.resizeRects.inverted),a=Ja.tlbrToXywh((0,xa.getRestrictionRect)(r.min,t,e.coords))||ru,u=Ja.tlbrToXywh((0,xa.getRestrictionRect)(r.max,t,e.coords))||ou;n.options={endOnly:r.endOnly,inner:(0,Za.default)({},eu.default.noInner),outer:(0,Za.default)({},eu.default.noOuter)},o.top?(n.options.inner.top=i.bottom-a.height,n.options.outer.top=i.bottom-u.height):o.bottom&&(n.options.inner.bottom=i.top+a.height,n.options.outer.bottom=i.top+u.height),o.left?(n.options.inner.left=i.right-a.width,n.options.outer.left=i.right-u.width):o.right&&(n.options.inner.right=i.left+a.width,n.options.outer.right=i.left+u.width),eu.default.set(e),n.options=r}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};$a.default=iu;var au={};function uu(e){return(uu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(au,"__esModule",{value:!0}),au.default=void 0;var lu=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==uu(e)&&"function"!=typeof e)return{default:e};var t=su();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(pt);function su(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return su=function(){return e},e}var cu={start:function(e){var t,n=e.interaction,r=e.interactable,o=e.element,i=e.rect,a=e.state,u=e.startOffset,l=a.options,s=[],c=l.offsetWithOrigin?function(e){var t=e.interaction.element;return lu.rect.rectToXY(lu.rect.resolveRectLike(e.state.options.origin,null,null,[t]))||lu.getOriginXY(e.interactable,t,e.interaction.prepared.name)}(e):{x:0,y:0};if("startCoords"===l.offset)t={x:n.coords.start.page.x,y:n.coords.start.page.y};else{var f=lu.rect.resolveRectLike(l.offset,r,o,[n]);(t=lu.rect.rectToXY(f)||{x:0,y:0}).x+=c.x,t.y+=c.y}var p=l.relativePoints||[];if(i&&l.relativePoints&&l.relativePoints.length)for(var d=0;d<p.length;d++){var v=p[d];s.push({index:d,relativePoint:v,x:u.left-i.width*v.x+t.x,y:u.top-i.height*v.y+t.y})}else s.push(lu.extend({index:0,relativePoint:null},t));a.offsets=s},set:function(e){var t,n=e.interaction,r=e.coords,o=e.state,i=o.options,a=o.offsets,u=lu.getOriginXY(n.interactable,n.element,n.prepared.name),l=lu.extend({},r),s=[];i.offsetWithOrigin||(l.x-=u.x,l.y-=u.y),o.realX=l.x,o.realY=l.y;for(var c=0;c<a.length;c++)for(var f=a[c],p=l.x-f.x,d=l.y-f.y,v=0,y=i.targets.length;v<y;v++){var m=i.targets[v];(t=lu.is.func(m)?m(p,d,n,f,v):m)&&s.push({x:(lu.is.number(t.x)?t.x:p)+f.x,y:(lu.is.number(t.y)?t.y:d)+f.y,range:lu.is.number(t.range)?t.range:i.range})}for(var g={target:null,inRange:!1,distance:0,range:0,dx:0,dy:0},h=0,b=s.length;h<b;h++){var w=(t=s[h]).range,O=t.x-l.x,P=t.y-l.y,_=lu.hypot(O,P),x=_<=w;w===1/0&&g.inRange&&g.range!==1/0&&(x=!1),g.target&&!(x?g.inRange&&w!==1/0?_/w<g.distance/g.range:w===1/0&&g.range!==1/0||_<g.distance:!g.inRange&&_<g.distance)||(g.target=t,g.distance=_,g.range=w,g.inRange=x,g.dx=O,g.dy=P,o.range=w)}g.inRange&&(r.x=g.target.x,r.y=g.target.y),o.closest=g},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};au.default=cu;var fu={};function pu(e){return(pu="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(fu,"__esModule",{value:!0}),fu.default=void 0;var du=gu(me),vu=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==pu(e)&&"function"!=typeof e)return{default:e};var t=mu();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(y),yu=gu(au);function mu(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return mu=function(){return e},e}function gu(e){return e&&e.__esModule?e:{default:e}}function hu(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var bu={start:function(e){var t=e.interaction,n=e.state,r=n.options,o=t.prepared.edges;if(!o)return null;e.state={options:{targets:null,relativePoints:[{x:o.left?0:1,y:o.top?0:1}],offset:r.offset||"self",origin:{x:0,y:0},range:r.range}},n.targetFields=n.targetFields||[["width","height"],["x","y"]],yu.default.start(e),n.offsets=e.state.offsets,e.state=n},set:function(e){var t=e.interaction,n=e.state,r=e.coords,o=n.options,i=n.offsets,a={x:r.x-i[0].x,y:r.y-i[0].y};n.options=(0,du.default)({},o),n.options.targets=[];for(var u=0;u<(o.targets||[]).length;u++){var l=(o.targets||[])[u],s=void 0;if(s=vu.func(l)?l(a.x,a.y,t):l){for(var c=0;c<n.targetFields.length;c++){var f=hu(n.targetFields[c],2),p=f[0],d=f[1];if(p in s||d in s){s.x=s[p],s.y=s[d];break}}n.options.targets.push(s)}}yu.default.set(e),n.options=o},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};fu.default=bu;var wu={};Object.defineProperty(wu,"__esModule",{value:!0}),wu.default=void 0;var Ou=xu(xe),Pu=xu(me),_u=xu(fu);function xu(e){return e&&e.__esModule?e:{default:e}}var Su={start:function(e){var t=e.interaction.prepared.edges;return t?(e.state.targetFields=e.state.targetFields||[[t.left?"left":"right",t.top?"top":"bottom"]],_u.default.start(e)):null},set:function(e){return _u.default.set(e)},defaults:(0,Pu.default)((0,Ou.default)(_u.default.defaults),{offset:{x:0,y:0}})};wu.default=Su;var ju={};Object.defineProperty(ju,"__esModule",{value:!0}),ju.restrictSize=ju.restrictEdges=ju.restrictRect=ju.restrict=ju.snapEdges=ju.snapSize=ju.snap=void 0;var Mu=Cu(Ui),Eu=Cu(Aa),ku=Cu(xa),Tu=Cu(qa),Du=Cu($a),Iu=Cu(wu),zu=Cu(au),Au=Cu(fu);function Cu(e){return e&&e.__esModule?e:{default:e}}var Ru=Mu.default.makeModifier,Wu=Ru(zu.default,"snap");ju.snap=Wu;var Xu=Ru(Au.default,"snapSize");ju.snapSize=Xu;var Yu=Ru(Iu.default,"snapEdges");ju.snapEdges=Yu;var Fu=Ru(ku.default,"restrict");ju.restrict=Fu;var Nu=Ru(Tu.default,"restrictRect");ju.restrictRect=Nu;var Lu=Ru(Eu.default,"restrictEdges");ju.restrictEdges=Lu;var Vu=Ru(Du.default,"restrictSize");ju.restrictSize=Vu;var qu={};Object.defineProperty(qu,"__esModule",{value:!0}),qu.default=void 0;var Gu,Uu=(Gu=Sn)&&Gu.__esModule?Gu:{default:Gu},Bu=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Ku(e)&&"function"!=typeof e)return{default:e};var t=Hu();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(J);function Hu(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Hu=function(){return e},e}function Ku(e){return(Ku="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Qu(e){return(Qu=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Zu(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ju(e,t){return(Ju=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function el(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var tl=function(){function s(e,t,n,r,o,i){var a;if(!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),a=function(e,t){return!t||"object"!==Ku(t)&&"function"!=typeof t?Zu(e):t}(this,Qu(s).call(this,o)),el(Zu(a),"type",void 0),el(Zu(a),"originalEvent",void 0),el(Zu(a),"pointerId",void 0),el(Zu(a),"pointerType",void 0),el(Zu(a),"double",void 0),el(Zu(a),"pageX",void 0),el(Zu(a),"pageY",void 0),el(Zu(a),"clientX",void 0),el(Zu(a),"clientY",void 0),el(Zu(a),"dt",void 0),el(Zu(a),"eventable",void 0),Bu.pointerExtend(Zu(a),n),n!==t&&Bu.pointerExtend(Zu(a),t),a.timeStamp=i,a.originalEvent=n,a.type=e,a.pointerId=Bu.getPointerId(t),a.pointerType=Bu.getPointerType(t),a.target=r,a.currentTarget=null,"tap"===e){var u=o.getPointerIndex(t);a.dt=a.timeStamp-o.pointers[u].downTime;var l=a.timeStamp-o.tapTime;a.double=!!(o.prevTap&&"doubletap"!==o.prevTap.type&&o.prevTap.target===a.target&&l<500)}else"doubletap"===e&&(a.dt=t.timeStamp-o.tapTime);return a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ju(e,t)}(s,Uu["default"]),function(e,t,n){t&&$u(e.prototype,t),n&&$u(e,n)}(s,[{key:"_subtractOrigin",value:function(e){var t=e.x,n=e.y;return this.pageX-=t,this.pageY-=n,this.clientX-=t,this.clientY-=n,this}},{key:"_addOrigin",value:function(e){var t=e.x,n=e.y;return this.pageX+=t,this.pageY+=n,this.clientX+=t,this.clientY+=n,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}]),s}();qu.default=tl;var nl={};function rl(e){return(rl="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(nl,"__esModule",{value:!0}),nl.default=void 0;var ol,il=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==rl(e)&&"function"!=typeof e)return{default:e};var t=ul();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(pt),al=(ol=qu)&&ol.__esModule?ol:{default:ol};function ul(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return ul=function(){return e},e}var ll={id:"pointer-events/base",install:function(e){e.pointerEvents=ll,e.defaults.actions.pointerEvents=ll.defaults},listeners:{"interactions:new":function(e){var t=e.interaction;t.prevTap=null,t.tapTime=0},"interactions:update-pointer":function(e){var t=e.down,n=e.pointerInfo;if(!t&&n.hold)return;n.hold={duration:1/0,timeout:null}},"interactions:move":function(e,t){var n=e.interaction,r=e.pointer,o=e.event,i=e.eventTarget,a=e.duplicate,u=n.getPointerIndex(r);a||n.pointerIsDown&&!n.pointerWasMoved||(n.pointerIsDown&&clearTimeout(n.pointers[u].hold.timeout),sl({interaction:n,pointer:r,event:o,eventTarget:i,type:"move"},t))},"interactions:down":function(e,t){!function(e,t){for(var n=e.interaction,r=e.pointer,o=e.event,i=e.eventTarget,a=e.pointerIndex,u=n.pointers[a].hold,l=il.dom.getPath(i),s={interaction:n,pointer:r,event:o,eventTarget:i,type:"hold",targets:[],path:l,node:null},c=0;c<l.length;c++){var f=l[c];s.node=f,t.fire("pointerEvents:collect-targets",s)}if(!s.targets.length)return;for(var p=1/0,d=0;d<s.targets.length;d++){var v=s.targets[d].eventable.options.holdDuration;v<p&&(p=v)}u.duration=p,u.timeout=setTimeout(function(){sl({interaction:n,eventTarget:i,pointer:r,event:o,type:"hold"},t)},p)}(e,t),sl(e,t)},"interactions:up":function(e,t){fl(e),sl(e,t),function(e,t){var n=e.interaction,r=e.pointer,o=e.event,i=e.eventTarget;n.pointerWasMoved||sl({interaction:n,eventTarget:i,pointer:r,event:o,type:"tap"},t)}(e,t)},"interactions:cancel":function(e,t){fl(e),sl(e,t)}},PointerEvent:al.default,fire:sl,collectEventTargets:cl,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:["down","move","up","cancel","tap","doubletap","hold"]};function sl(e,t){var n=e.interaction,r=e.pointer,o=e.event,i=e.eventTarget,a=e.type,u=e.targets,l=void 0===u?cl(e,t):u,s=new al.default(a,r,o,i,n,t.now());t.fire("pointerEvents:new",{pointerEvent:s});for(var c={interaction:n,pointer:r,event:o,eventTarget:i,targets:l,type:a,pointerEvent:s},f=0;f<l.length;f++){var p=l[f];for(var d in p.props||{})s[d]=p.props[d];var v=il.getOriginXY(p.eventable,p.node);if(s._subtractOrigin(v),s.eventable=p.eventable,s.currentTarget=p.node,p.eventable.fire(s),s._addOrigin(v),s.immediatePropagationStopped||s.propagationStopped&&f+1<l.length&&l[f+1].node!==s.currentTarget)break}if(t.fire("pointerEvents:fired",c),"tap"===a){var y=s.double?sl({interaction:n,pointer:r,event:o,eventTarget:i,type:"doubletap"},t):s;n.prevTap=y,n.tapTime=y.timeStamp}return s}function cl(e,t){var n=e.interaction,r=e.pointer,o=e.event,i=e.eventTarget,a=e.type,u=n.getPointerIndex(r),l=n.pointers[u];if("tap"===a&&(n.pointerWasMoved||!l||l.downTarget!==i))return[];for(var s=il.dom.getPath(i),c={interaction:n,pointer:r,event:o,eventTarget:i,type:a,path:s,targets:[],node:null},f=0;f<s.length;f++){var p=s[f];c.node=p,t.fire("pointerEvents:collect-targets",c)}return"hold"===a&&(c.targets=c.targets.filter(function(e){return e.eventable.options.holdDuration===n.pointers[u].hold.duration})),c.targets}function fl(e){var t=e.interaction,n=e.pointerIndex;t.pointers[n].hold&&clearTimeout(t.pointers[n].hold.timeout)}var pl=ll;nl.default=pl;var dl={};Object.defineProperty(dl,"__esModule",{value:!0}),dl.default=void 0;var vl,yl=(vl=nl)&&vl.__esModule?vl:{default:vl};function ml(e){var t=e.interaction;t.holdIntervalHandle&&(clearInterval(t.holdIntervalHandle),t.holdIntervalHandle=null)}var gl={id:"pointer-events/holdRepeat",install:function(e){e.usePlugin(yl.default);var t=e.pointerEvents;t.defaults.holdRepeatInterval=0,t.types.push("holdrepeat")},listeners:["move","up","cancel","endall"].reduce(function(e,t){return e["pointerEvents:".concat(t)]=ml,e},{"pointerEvents:new":function(e){var t=e.pointerEvent;"hold"===t.type&&(t.count=(t.count||0)+1)},"pointerEvents:fired":function(e,t){var n=e.interaction,r=e.pointerEvent,o=e.eventTarget,i=e.targets;if("hold"===r.type&&i.length){var a=i[0].eventable.options.holdRepeatInterval;a<=0||(n.holdIntervalHandle=setTimeout(function(){t.pointerEvents.fire({interaction:n,eventTarget:o,type:"hold",pointer:r,event:r},t)},a))}}})};dl.default=gl;var hl={};Object.defineProperty(hl,"__esModule",{value:!0}),hl.default=void 0;var bl,wl=(bl=me)&&bl.__esModule?bl:{default:bl};function Ol(e){return(0,wl.default)(this.events.options,e),this}var Pl={id:"pointer-events/interactableTargets",install:function(e){var t=e.pointerEvents,n=e.actions,r=e.Interactable;(0,u.merge)(n.eventTypes,t.types),r.prototype.pointerEvents=Ol;var o=r.prototype._backCompatOption;r.prototype._backCompatOption=function(e,t){var n=o.call(this,e,t);return n===this&&(this.events.options[e]=t),n}},listeners:{"pointerEvents:collect-targets":function(e,t){var r=e.targets,o=e.node,i=e.type,a=e.eventTarget;t.interactables.forEachMatch(o,function(e){var t=e.events,n=t.options;t.types[i]&&t.types[i].length&&e.testIgnoreAllow(n,o,a)&&r.push({node:o,eventable:t,props:{interactable:e}})})},"interactable:new":function(e){var t=e.interactable;t.events.getRect=function(e){return t.getRect(e)}},"interactable:set":function(e,t){var n=e.interactable,r=e.options;(0,wl.default)(n.events.options,t.pointerEvents.defaults),(0,wl.default)(n.events.options,r.pointerEvents||{})}}};hl.default=Pl;var _l={};function xl(e){return(xl="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(_l,"__esModule",{value:!0}),_l.install=function(e){e.usePlugin(Sl),e.usePlugin(jl.default),e.usePlugin(Ml.default)},Object.defineProperty(_l,"holdRepeat",{enumerable:!0,get:function(){return jl.default}}),Object.defineProperty(_l,"interactableTargets",{enumerable:!0,get:function(){return Ml.default}}),_l.pointerEvents=_l.id=void 0;var Sl=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==xl(e)&&"function"!=typeof e)return{default:e};var t=kl();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(nl);_l.pointerEvents=Sl;var jl=El(dl),Ml=El(hl);function El(e){return e&&e.__esModule?e:{default:e}}function kl(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return kl=function(){return e},e}_l.id="pointer-events";var Tl={};function Dl(t){for(var e=t.actions,n=t.Interactable,r=0;r<e.names.length;r++){var o=e.names[r];e.eventTypes.push("".concat(o,"reflow"))}n.prototype.reflow=function(e){return function(u,l,s){function e(){var t=c[d],e=u.getRect(t);if(!e)return"break";var n=pt.arr.find(s.interactions.list,function(e){return e.interacting()&&e.interactable===u&&e.element===t&&e.prepared.name===l.name}),r=void 0;if(n)n.move(),p&&(r=n._reflowPromise||new f(function(e){n._reflowResolve=e}));else{var o=pt.rect.tlbrToXywh(e),i={page:{x:o.x,y:o.y},client:{x:o.x,y:o.y},timeStamp:s.now()},a=pt.pointer.coordsToEvent(i);r=function(e,t,n,r,o){var i=e.interactions.new({pointerType:"reflow"}),a={interaction:i,event:o,pointer:o,eventTarget:n,phase:Dn.EventPhase.Reflow};i.interactable=t,i.element=n,i.prepared=(0,pt.extend)({},r),i.prevEvent=o,i.updatePointer(o,o,n,!0),i._doPhase(a);var u=pt.win.window.Promise?new pt.win.window.Promise(function(e){i._reflowResolve=e}):null;i._reflowPromise=u,i.start(r,t,n),i._interacting?(i.move(a),i.end(o)):i.stop();return i.removePointer(o,o),i.pointerIsDown=!1,u}(s,u,t,l,a)}p&&p.push(r)}for(var c=pt.is.string(u.target)?pt.arr.from(u._context.querySelectorAll(u.target)):[u.target],f=pt.win.window.Promise,p=f?[]:null,d=0;d<c.length;d++){if("break"===e())break}return p&&f.all(p).then(function(){return u})}(this,e,t)}}Object.defineProperty(Tl,"__esModule",{value:!0}),Tl.install=Dl,Tl.default=void 0;var Il={id:Dn.EventPhase.Reflow="reflow",install:Dl,listeners:{"interactions:stop":function(e,t){var n=e.interaction;n.pointerType===Dn.EventPhase.Reflow&&(n._reflowResolve&&n._reflowResolve(),pt.arr.remove(t.interactions.list,n))}}};Tl.default=Il;var zl={};function Al(e){return(Al="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(zl,"__esModule",{value:!0}),zl.default=zl.scope=zl.interact=void 0;var Cl=b({}),Rl=Fl(j),Wl=Fl(Te),Xl=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Al(e)&&"function"!=typeof e)return{default:e};var t=Yl();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(pt);function Yl(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Yl=function(){return e},e}function Fl(e){return e&&e.__esModule?e:{default:e}}var Nl={},Ll=new Cl.Scope;zl.scope=Ll;function Vl(e,t){var n=Ll.interactables.get(e,t);return n||((n=Ll.interactables.new(e,t)).events.global=Nl),n}(zl.interact=Vl).use=function(e,t){return Ll.usePlugin(e,t),Vl},Vl.isSet=function(e,t){return!!Ll.interactables.get(e,t&&t.context)},Vl.on=function(e,t,n){Xl.is.string(e)&&-1!==e.search(" ")&&(e=e.trim().split(/ +/));if(Xl.is.array(e)){for(var r=0;r<e.length;r++){var o;o=e[r],Vl.on(o,t,n)}return Vl}if(Xl.is.object(e)){for(var i in e)Vl.on(i,e[i],t);return Vl}Xl.arr.contains(Ll.actions.eventTypes,e)?Nl[e]?Nl[e].push(t):Nl[e]=[t]:Wl.default.add(Ll.document,e,t,{options:n});return Vl},Vl.off=function(e,t,n){Xl.is.string(e)&&-1!==e.search(" ")&&(e=e.trim().split(/ +/));if(Xl.is.array(e)){for(var r=0;r<e.length;r++){var o;o=e[r],Vl.off(o,t,n)}return Vl}if(Xl.is.object(e)){for(var i in e)Vl.off(i,e[i],t);return Vl}var a;Xl.arr.contains(Ll.actions.eventTypes,e)?e in Nl&&-1!==(a=Nl[e].indexOf(t))&&Nl[e].splice(a,1):Wl.default.remove(Ll.document,e,t,n);return Vl},Vl.debug=function(){return Ll},Vl.getPointerAverage=Xl.pointer.pointerAverage,Vl.getTouchBBox=Xl.pointer.touchBBox,Vl.getTouchDistance=Xl.pointer.touchDistance,Vl.getTouchAngle=Xl.pointer.touchAngle,Vl.getElementRect=Xl.dom.getElementRect,Vl.getElementClientRect=Xl.dom.getElementClientRect,Vl.matchesSelector=Xl.dom.matchesSelector,Vl.closest=Xl.dom.closest,Vl.supportsTouch=function(){return Rl.default.supportsTouch},Vl.supportsPointerEvent=function(){return Rl.default.supportsPointerEvent},Vl.stop=function(){for(var e=0;e<Ll.interactions.list.length;e++){Ll.interactions.list[e].stop()}return Vl},Vl.pointerMoveTolerance=function(e){if(Xl.is.number(e))return Ll.interactions.pointerMoveTolerance=e,Vl;return Ll.interactions.pointerMoveTolerance},Ll.addListeners({"interactable:unset":function(e){var t=e.interactable;Ll.interactables.list.splice(Ll.interactables.list.indexOf(t),1);for(var n=0;n<Ll.interactions.list.length;n++){var r=Ll.interactions.list[n];r.interactable===t&&r.interacting()&&!r._ending&&r.stop()}}}),Vl.addDocument=function(e,t){return Ll.addDocument(e,t)},Vl.removeDocument=function(e){return Ll.removeDocument(e)};var ql=Ll.interact=Vl;zl.default=ql;var Gl={};function Ul(e){return(Ul="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(Gl,"__esModule",{value:!0}),Gl.init=function(e){for(var t in rs.scope.init(e),rs.default.use($l.default),rs.default.use(ts),rs.default.use(Zl.default),rs.default.use(Jl.default),rs.default.use(Kl),rs.default.use(Bl),es){var n=es[t],r=n._defaults,o=n._methods;r._methods=o,rs.scope.defaults.perAction[t]=r}rs.default.use(Hl.default),rs.default.use(ns.default),rs.default.use(Ql.default);return rs.default},Object.defineProperty(Gl,"autoScroll",{enumerable:!0,get:function(){return Hl.default}}),Object.defineProperty(Gl,"interactablePreventDefault",{enumerable:!0,get:function(){return $l.default}}),Object.defineProperty(Gl,"inertia",{enumerable:!0,get:function(){return Zl.default}}),Object.defineProperty(Gl,"modifiers",{enumerable:!0,get:function(){return Jl.default}}),Object.defineProperty(Gl,"reflow",{enumerable:!0,get:function(){return ns.default}}),Object.defineProperty(Gl,"interact",{enumerable:!0,get:function(){return rs.default}}),Gl.pointerEvents=Gl.actions=Gl.default=void 0;var Bl=as(vo);Gl.actions=Bl;var Hl=os(wo),Kl=as(vi),$l=os(bi),Ql=os(ki),Zl=os(ca),Jl=os(Ui),es=as(ju),ts=as(_l);Gl.pointerEvents=ts;var ns=os(Tl),rs=as(zl);function os(e){return e&&e.__esModule?e:{default:e}}function is(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return is=function(){return e},e}function as(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Ul(e)&&"function"!=typeof e)return{default:e};var t=is();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}rs.default.version="1.7.3";var us=rs.default;Gl.default=us;var ls={};function ss(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(ls,"__esModule",{value:!0}),ls.default=void 0;function cs(v){function e(e,t){for(var n=v.range,r=v.limits,o=void 0===r?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:r,i=v.offset,a=void 0===i?{x:0,y:0}:i,u={range:n},l=0;l<y.length;l++){var s=ss(y[l],2),c=s[0],f=s[1],p=Math.round((e-a.x)/v[c]),d=Math.round((t-a.y)/v[f]);u[c]=Math.max(o.left,Math.min(o.right,p*v[c]+a.x)),u[f]=Math.max(o.top,Math.min(o.bottom,d*v[f]+a.y))}return u}var y=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter(function(e){var t=ss(e,2),n=t[0],r=t[1];return n in v||r in v});return e._isSnapGrid=!0,e.grid=v,e.coordFields=y,e}ls.default=cs;var fs={};Object.defineProperty(fs,"__esModule",{value:!0}),Object.defineProperty(fs,"grid",{enumerable:!0,get:function(){return ds.default}});var ps,ds=(ps=ls)&&ps.__esModule?ps:{default:ps};var vs={};Object.defineProperty(vs,"__esModule",{value:!0}),vs.init=_s,vs.default=void 0;var ys,ms=Os(Gl),gs=Os(ju),hs=(ys=me)&&ys.__esModule?ys:{default:ys},bs=Os(fs);function ws(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return ws=function(){return e},e}function Os(e){if(e&&e.__esModule)return e;if(null===e||"object"!==Ps(e)&&"function"!=typeof e)return{default:e};var t=ws();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function Ps(e){return(Ps="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _s(e){return(0,ms.init)(e),ms.default.use({id:"interactjs",install:function(){ms.default.modifiers=(0,hs.default)({},gs),ms.default.snappers=bs,ms.default.createSnapGrid=ms.default.snappers.grid}})}"object"===("undefined"==typeof window?"undefined":Ps(window))&&window&&_s(window);var xs=ms.default;vs.default=xs;var Ss={exports:{}};Object.defineProperty(Ss.exports,"__esModule",{value:!0});var js={};Ss.exports.default=void 0;var Ms=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==ks(e)&&"function"!=typeof e)return{default:e};var t=Es();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(vs);function Es(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return Es=function(){return e},e}function ks(e){return(ks="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.keys(Ms).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(js,e)||Object.defineProperty(Ss.exports,e,{enumerable:!0,get:function(){return Ms[e]}}))}),"object"===ks(Ss)&&Ss&&(Ss.exports=Ms.default),Ms.default.default=Ms.default,Ms.default.init=Ms.init;var Ts=Ms.default;return Ss.exports.default=Ts,Ss=Ss.exports});

//# sourceMappingURL=interact.min.js.map


/***/ }),

/***/ "5058":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(options) {
    var idGenerator     = options.idGenerator;
    var getState        = options.stateHandler.getState;

    /**
     * Gets the resize detector id of the element.
     * @public
     * @param {element} element The target element to get the id of.
     * @returns {string|number|null} The id of the element. Null if it has no id.
     */
    function getId(element) {
        var state = getState(element);

        if (state && state.id !== undefined) {
            return state.id;
        }

        return null;
    }

    /**
     * Sets the resize detector id of the element. Requires the element to have a resize detector state initialized.
     * @public
     * @param {element} element The target element to set the id of.
     * @returns {string|number|null} The id of the element.
     */
    function setId(element) {
        var state = getState(element);

        if (!state) {
            throw new Error("setId required the element to have a resize detection state.");
        }

        var id = idGenerator.generate();

        state.id = id;

        return id;
    }

    return {
        get: getId,
        set: setId
    };
};


/***/ }),

/***/ "50bf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = module.exports = {};

utils.getOption = getOption;

function getOption(options, name, defaultValue) {
    var value = options[name];

    if((value === undefined || value === null) && defaultValue !== undefined) {
        return defaultValue;
    }

    return value;
}


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "55dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("5ca1");
var aFunction = __webpack_require__("d8e8");
var toObject = __webpack_require__("4bf8");
var fails = __webpack_require__("79e5");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__("2f21")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5be5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(options) {
    var getState = options.stateHandler.getState;

    /**
     * Tells if the element has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is detectable or not.
     */
    function isDetectable(element) {
        var state = getState(element);
        return state && !!state.isDetectable;
    }

    /**
     * Marks the element that it has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to mark.
     */
    function markAsDetectable(element) {
        getState(element).isDetectable = true;
    }

    /**
     * Tells if the element is busy or not.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is busy or not.
     */
    function isBusy(element) {
        return !!getState(element).busy;
    }

    /**
     * Marks the object is busy and should not be made detectable.
     * @public
     * @param {element} element The element to mark.
     * @param {boolean} busy If the element is busy or not.
     */
    function markBusy(element, busy) {
        getState(element).busy = !!busy;
    }

    return {
        isDetectable: isDetectable,
        markAsDetectable: markAsDetectable,
        isBusy: isBusy,
        markBusy: markBusy
    };
};


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5ed4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6e21");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6e21":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9cbe");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("3cbd0c21", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("454f");

/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8e6e":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__("5ca1");
var ownKeys = __webpack_require__("990b");
var toIObject = __webpack_require__("6821");
var gOPD = __webpack_require__("11e9");
var createProperty = __webpack_require__("f1ae");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "990b":
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__("9093");
var gOPS = __webpack_require__("2621");
var anObject = __webpack_require__("cb7c");
var Reflect = __webpack_require__("7726").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9cbe":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vue-grid-item{-webkit-transition:all .2s ease;transition:all .2s ease;-webkit-transition-property:left,top,right;transition-property:left,top,right}.vue-grid-item.no-touch{-ms-touch-action:none;touch-action:none}.vue-grid-item.cssTransforms{-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;left:0;right:auto}.vue-grid-item.cssTransforms.render-rtl{left:auto;right:0}.vue-grid-item.resizing{opacity:.6;z-index:3}.vue-grid-item.vue-draggable-dragging{-webkit-transition:none;transition:none;z-index:3}.vue-grid-item.vue-grid-placeholder{background:red;opacity:.2;-webkit-transition-duration:.1s;transition-duration:.1s;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.vue-grid-item>.vue-resizable-handle{position:absolute;width:20px;height:20px;bottom:0;right:0;background:url(\"data:image/svg+xml;base64,PHN2ZyBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjYiIGhlaWdodD0iNiI+PHBhdGggZD0iTTYgNkgwVjQuMmg0LjJWMEg2djZ6IiBvcGFjaXR5PSIuMzAyIi8+PC9zdmc+\");background-position:100% 100%;padding:0 3px 3px 0;background-repeat:no-repeat;background-origin:content-box;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:se-resize}.vue-grid-item>.vue-rtl-resizable-handle{bottom:0;left:0;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS0xLTFoMTJ2MTJILTF6Ii8+PGc+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InVuZGVmaW5lZCIgc3Ryb2tlLWxpbmVqb2luPSJ1bmRlZmluZWQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiMwMDAiIGZpbGw9Im5vbmUiIGQ9Ik0xNDQuODIxLTM4LjM5M2wtMjAuMzU3LTMxLjc4NSIvPjxwYXRoIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InVuZGVmaW5lZCIgc3Ryb2tlLWxpbmVqb2luPSJ1bmRlZmluZWQiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgZD0iTS45NDctLjAxOHY5LjEyNU0tLjY1NiA5aDEwLjczIi8+PC9nPjwvc3ZnPg==);background-position:0 100%;padding-left:3px;background-repeat:no-repeat;background-origin:content-box;cursor:sw-resize;right:auto}.vue-grid-item.disable-userselect{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}", ""]);

// exports


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "abb4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global console: false */

/**
 * Reporter that handles the reporting of logs, warnings and errors.
 * @public
 * @param {boolean} quiet Tells if the reporter should be quiet or not.
 */
module.exports = function(quiet) {
    function noop() {
        //Does nothing.
    }

    var reporter = {
        log: noop,
        warn: noop,
        error: noop
    };

    if(!quiet && window.console) {
        var attachFunction = function(reporter, name) {
            //The proxy is needed to be able to call the method with the console context,
            //since we cannot use bind.
            reporter[name] = function reporterProxy() {
                var f = console[name];
                if (f.apply) { //IE9 does not support console.log.apply :)
                    f.apply(console, arguments);
                } else {
                    for (var i = 0; i < arguments.length; i++) {
                        f(arguments[i]);
                    }
                }
            };
        };

        attachFunction(reporter, "log");
        attachFunction(reporter, "warn");
        attachFunction(reporter, "error");
    }

    return reporter;
};

/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "ad20":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".vue-grid-layout{position:relative;-webkit-transition:height .2s ease;transition:height .2s ease}", ""]);

// exports


/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "b770":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = module.exports = {};

/**
 * Loops through the collection and calls the callback for each element. if the callback returns truthy, the loop is broken and returns the same value.
 * @public
 * @param {*} collection The collection to loop through. Needs to have a length property set and have indices set from 0 to length - 1.
 * @param {function} callback The callback to be called for each element. The element will be given as a parameter to the callback. If this callback returns truthy, the loop is broken and the same value is returned.
 * @returns {*} The value that a callback has returned (if truthy). Otherwise nothing.
 */
utils.forEach = function(collection, callback) {
    for(var i = 0; i < collection.length; i++) {
        var result = callback(collection[i]);
        if(result) {
            return result;
        }
    }
};


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c274":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("50bf");

module.exports = function batchProcessorMaker(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var asyncProcess    = utils.getOption(options, "async", true);
    var autoProcess     = utils.getOption(options, "auto", true);

    if(autoProcess && !asyncProcess) {
        reporter && reporter.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true.");
        asyncProcess = true;
    }

    var batch = Batch();
    var asyncFrameHandler;
    var isProcessing = false;

    function addFunction(level, fn) {
        if(!isProcessing && autoProcess && asyncProcess && batch.size() === 0) {
            // Since this is async, it is guaranteed to be executed after that the fn is added to the batch.
            // This needs to be done before, since we're checking the size of the batch to be 0.
            processBatchAsync();
        }

        batch.add(level, fn);
    }

    function processBatch() {
        // Save the current batch, and create a new batch so that incoming functions are not added into the currently processing batch.
        // Continue processing until the top-level batch is empty (functions may be added to the new batch while processing, and so on).
        isProcessing = true;
        while (batch.size()) {
            var processingBatch = batch;
            batch = Batch();
            processingBatch.process();
        }
        isProcessing = false;
    }

    function forceProcessBatch(localAsyncProcess) {
        if (isProcessing) {
            return;
        }

        if(localAsyncProcess === undefined) {
            localAsyncProcess = asyncProcess;
        }

        if(asyncFrameHandler) {
            cancelFrame(asyncFrameHandler);
            asyncFrameHandler = null;
        }

        if(localAsyncProcess) {
            processBatchAsync();
        } else {
            processBatch();
        }
    }

    function processBatchAsync() {
        asyncFrameHandler = requestFrame(processBatch);
    }

    function clearBatch() {
        batch           = {};
        batchSize       = 0;
        topLevel        = 0;
        bottomLevel     = 0;
    }

    function cancelFrame(listener) {
        // var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
        var cancel = clearTimeout;
        return cancel(listener);
    }

    function requestFrame(callback) {
        // var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) { return window.setTimeout(fn, 20); };
        var raf = function(fn) { return setTimeout(fn, 0); };
        return raf(callback);
    }

    return {
        add: addFunction,
        force: forceProcessBatch
    };
};

function Batch() {
    var batch       = {};
    var size        = 0;
    var topLevel    = 0;
    var bottomLevel = 0;

    function add(level, fn) {
        if(!fn) {
            fn = level;
            level = 0;
        }

        if(level > topLevel) {
            topLevel = level;
        } else if(level < bottomLevel) {
            bottomLevel = level;
        }

        if(!batch[level]) {
            batch[level] = [];
        }

        batch[level].push(fn);
        size++;
    }

    function process() {
        for(var level = bottomLevel; level <= topLevel; level++) {
            var fns = batch[level];

            for(var i = 0; i < fns.length; i++) {
                var fn = fns[i];
                fn();
            }
        }
    }

    function getSize() {
        return size;
    }

    return {
        add: add,
        process: process,
        size: getSize
    };
}


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c946":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects divs to elements in order to detect resize events on scroll events.
 * Heavily inspired by: https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
 */



var forEach = __webpack_require__("b770").forEach;

module.exports = function(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var batchProcessor  = options.batchProcessor;
    var getState        = options.stateHandler.getState;
    var hasState        = options.stateHandler.hasState;
    var idHandler       = options.idHandler;

    if (!batchProcessor) {
        throw new Error("Missing required dependency: batchProcessor");
    }

    if (!reporter) {
        throw new Error("Missing required dependency: reporter.");
    }

    //TODO: Could this perhaps be done at installation time?
    var scrollbarSizes = getScrollbarSizes();

    // Inject the scrollbar styling that prevents them from appearing sometimes in Chrome.
    // The injected container needs to have a class, so that it may be styled with CSS (pseudo elements).
    var styleId = "erd_scroll_detection_scrollbar_style";
    var detectionContainerClass = "erd_scroll_detection_container";
    injectScrollStyle(styleId, detectionContainerClass);

    function getScrollbarSizes() {
        var width = 500;
        var height = 500;

        var child = document.createElement("div");
        child.style.cssText = "position: absolute; width: " + width*2 + "px; height: " + height*2 + "px; visibility: hidden; margin: 0; padding: 0;";

        var container = document.createElement("div");
        container.style.cssText = "position: absolute; width: " + width + "px; height: " + height + "px; overflow: scroll; visibility: none; top: " + -width*3 + "px; left: " + -height*3 + "px; visibility: hidden; margin: 0; padding: 0;";

        container.appendChild(child);

        document.body.insertBefore(container, document.body.firstChild);

        var widthSize = width - container.clientWidth;
        var heightSize = height - container.clientHeight;

        document.body.removeChild(container);

        return {
            width: widthSize,
            height: heightSize
        };
    }

    function injectScrollStyle(styleId, containerClass) {
        function injectStyle(style, method) {
            method = method || function (element) {
                document.head.appendChild(element);
            };

            var styleElement = document.createElement("style");
            styleElement.innerHTML = style;
            styleElement.id = styleId;
            method(styleElement);
            return styleElement;
        }

        if (!document.getElementById(styleId)) {
            var containerAnimationClass = containerClass + "_animation";
            var containerAnimationActiveClass = containerClass + "_animation_active";
            var style = "/* Created by the element-resize-detector library. */\n";
            style += "." + containerClass + " > div::-webkit-scrollbar { display: none; }\n\n";
            style += "." + containerAnimationActiveClass + " { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: " + containerAnimationClass + "; animation-name: " + containerAnimationClass + "; }\n";
            style += "@-webkit-keyframes " + containerAnimationClass +  " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n";
            style += "@keyframes " + containerAnimationClass +          " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }";
            injectStyle(style);
        }
    }

    function addAnimationClass(element) {
        element.className += " " + detectionContainerClass + "_animation_active";
    }

    function addEvent(el, name, cb) {
        if (el.addEventListener) {
            el.addEventListener(name, cb);
        } else if(el.attachEvent) {
            el.attachEvent("on" + name, cb);
        } else {
            return reporter.error("[scroll] Don't know how to add event listeners.");
        }
    }

    function removeEvent(el, name, cb) {
        if (el.removeEventListener) {
            el.removeEventListener(name, cb);
        } else if(el.detachEvent) {
            el.detachEvent("on" + name, cb);
        } else {
            return reporter.error("[scroll] Don't know how to remove event listeners.");
        }
    }

    function getExpandElement(element) {
        return getState(element).container.childNodes[0].childNodes[0].childNodes[0];
    }

    function getShrinkElement(element) {
        return getState(element).container.childNodes[0].childNodes[0].childNodes[1];
    }

    /**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
    function addListener(element, listener) {
        var listeners = getState(element).listeners;

        if (!listeners.push) {
            throw new Error("Cannot add listener to an element that is not detectable.");
        }

        getState(element).listeners.push(listener);
    }

    /**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
    function makeDetectable(options, element, callback) {
        if (!callback) {
            callback = element;
            element = options;
            options = null;
        }

        options = options || {};

        function debug() {
            if (options.debug) {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(idHandler.get(element), "Scroll: ");
                if (reporter.log.apply) {
                    reporter.log.apply(null, args);
                } else {
                    for (var i = 0; i < args.length; i++) {
                        reporter.log(args[i]);
                    }
                }
            }
        }

        function isDetached(element) {
            function isInDocument(element) {
                return element === element.ownerDocument.body || element.ownerDocument.body.contains(element);
            }

            if (!isInDocument(element)) {
                return true;
            }

            // FireFox returns null style in hidden iframes. See https://github.com/wnr/element-resize-detector/issues/68 and https://bugzilla.mozilla.org/show_bug.cgi?id=795520
            if (window.getComputedStyle(element) === null) {
                return true;
            }

            return false;
        }

        function isUnrendered(element) {
            // Check the absolute positioned container since the top level container is display: inline.
            var container = getState(element).container.childNodes[0];
            var style = window.getComputedStyle(container);
            return !style.width || style.width.indexOf("px") === -1; //Can only compute pixel value when rendered.
        }

        function getStyle() {
            // Some browsers only force layouts when actually reading the style properties of the style object, so make sure that they are all read here,
            // so that the user of the function can be sure that it will perform the layout here, instead of later (important for batching).
            var elementStyle            = window.getComputedStyle(element);
            var style                   = {};
            style.position              = elementStyle.position;
            style.width                 = element.offsetWidth;
            style.height                = element.offsetHeight;
            style.top                   = elementStyle.top;
            style.right                 = elementStyle.right;
            style.bottom                = elementStyle.bottom;
            style.left                  = elementStyle.left;
            style.widthCSS              = elementStyle.width;
            style.heightCSS             = elementStyle.height;
            return style;
        }

        function storeStartSize() {
            var style = getStyle();
            getState(element).startSize = {
                width: style.width,
                height: style.height
            };
            debug("Element start size", getState(element).startSize);
        }

        function initListeners() {
            getState(element).listeners = [];
        }

        function storeStyle() {
            debug("storeStyle invoked.");
            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            var style = getStyle();
            getState(element).style = style;
        }

        function storeCurrentSize(element, width, height) {
            getState(element).lastWidth = width;
            getState(element).lastHeight  = height;
        }

        function getExpandChildElement(element) {
            return getExpandElement(element).childNodes[0];
        }

        function getWidthOffset() {
            return 2 * scrollbarSizes.width + 1;
        }

        function getHeightOffset() {
            return 2 * scrollbarSizes.height + 1;
        }

        function getExpandWidth(width) {
            return width + 10 + getWidthOffset();
        }

        function getExpandHeight(height) {
            return height + 10 + getHeightOffset();
        }

        function getShrinkWidth(width) {
            return width * 2 + getWidthOffset();
        }

        function getShrinkHeight(height) {
            return height * 2 + getHeightOffset();
        }

        function positionScrollbars(element, width, height) {
            var expand          = getExpandElement(element);
            var shrink          = getShrinkElement(element);
            var expandWidth     = getExpandWidth(width);
            var expandHeight    = getExpandHeight(height);
            var shrinkWidth     = getShrinkWidth(width);
            var shrinkHeight    = getShrinkHeight(height);
            expand.scrollLeft   = expandWidth;
            expand.scrollTop    = expandHeight;
            shrink.scrollLeft   = shrinkWidth;
            shrink.scrollTop    = shrinkHeight;
        }

        function injectContainerElement() {
            var container = getState(element).container;

            if (!container) {
                container                   = document.createElement("div");
                container.className         = detectionContainerClass;
                container.style.cssText     = "visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;";
                getState(element).container = container;
                addAnimationClass(container);
                element.appendChild(container);

                var onAnimationStart = function () {
                    getState(element).onRendered && getState(element).onRendered();
                };

                addEvent(container, "animationstart", onAnimationStart);

                // Store the event handler here so that they may be removed when uninstall is called.
                // See uninstall function for an explanation why it is needed.
                getState(element).onAnimationStart = onAnimationStart;
            }

            return container;
        }

        function injectScrollElements() {
            function alterPositionStyles() {
                var style = getState(element).style;

                if(style.position === "static") {
                    element.style.position = "relative";

                    var removeRelativeStyles = function(reporter, element, style, property) {
                        function getNumericalValue(value) {
                            return value.replace(/[^-\d\.]/g, "");
                        }

                        var value = style[property];

                        if(value !== "auto" && getNumericalValue(value) !== "0") {
                            reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element);
                            element.style[property] = 0;
                        }
                    };

                    //Check so that there are no accidental styles that will make the element styled differently now that is is relative.
                    //If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
                    removeRelativeStyles(reporter, element, style, "top");
                    removeRelativeStyles(reporter, element, style, "right");
                    removeRelativeStyles(reporter, element, style, "bottom");
                    removeRelativeStyles(reporter, element, style, "left");
                }
            }

            function getLeftTopBottomRightCssText(left, top, bottom, right) {
                left = (!left ? "0" : (left + "px"));
                top = (!top ? "0" : (top + "px"));
                bottom = (!bottom ? "0" : (bottom + "px"));
                right = (!right ? "0" : (right + "px"));

                return "left: " + left + "; top: " + top + "; right: " + right + "; bottom: " + bottom + ";";
            }

            debug("Injecting elements");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            alterPositionStyles();

            var rootContainer = getState(element).container;

            if (!rootContainer) {
                rootContainer = injectContainerElement();
            }

            // Due to this WebKit bug https://bugs.webkit.org/show_bug.cgi?id=80808 (currently fixed in Blink, but still present in WebKit browsers such as Safari),
            // we need to inject two containers, one that is width/height 100% and another that is left/top -1px so that the final container always is 1x1 pixels bigger than
            // the targeted element.
            // When the bug is resolved, "containerContainer" may be removed.

            // The outer container can occasionally be less wide than the targeted when inside inline elements element in WebKit (see https://bugs.webkit.org/show_bug.cgi?id=152980).
            // This should be no problem since the inner container either way makes sure the injected scroll elements are at least 1x1 px.

            var scrollbarWidth          = scrollbarSizes.width;
            var scrollbarHeight         = scrollbarSizes.height;
            var containerContainerStyle = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;";
            var containerStyle          = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; " + getLeftTopBottomRightCssText(-(1 + scrollbarWidth), -(1 + scrollbarHeight), -scrollbarHeight, -scrollbarWidth);
            var expandStyle             = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;";
            var shrinkStyle             = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;";
            var expandChildStyle        = "position: absolute; left: 0; top: 0;";
            var shrinkChildStyle        = "position: absolute; width: 200%; height: 200%;";

            var containerContainer      = document.createElement("div");
            var container               = document.createElement("div");
            var expand                  = document.createElement("div");
            var expandChild             = document.createElement("div");
            var shrink                  = document.createElement("div");
            var shrinkChild             = document.createElement("div");

            // Some browsers choke on the resize system being rtl, so force it to ltr. https://github.com/wnr/element-resize-detector/issues/56
            // However, dir should not be set on the top level container as it alters the dimensions of the target element in some browsers.
            containerContainer.dir              = "ltr";

            containerContainer.style.cssText    = containerContainerStyle;
            containerContainer.className        = detectionContainerClass;
            container.className                 = detectionContainerClass;
            container.style.cssText             = containerStyle;
            expand.style.cssText                = expandStyle;
            expandChild.style.cssText           = expandChildStyle;
            shrink.style.cssText                = shrinkStyle;
            shrinkChild.style.cssText           = shrinkChildStyle;

            expand.appendChild(expandChild);
            shrink.appendChild(shrinkChild);
            container.appendChild(expand);
            container.appendChild(shrink);
            containerContainer.appendChild(container);
            rootContainer.appendChild(containerContainer);

            function onExpandScroll() {
                getState(element).onExpand && getState(element).onExpand();
            }

            function onShrinkScroll() {
                getState(element).onShrink && getState(element).onShrink();
            }

            addEvent(expand, "scroll", onExpandScroll);
            addEvent(shrink, "scroll", onShrinkScroll);

            // Store the event handlers here so that they may be removed when uninstall is called.
            // See uninstall function for an explanation why it is needed.
            getState(element).onExpandScroll = onExpandScroll;
            getState(element).onShrinkScroll = onShrinkScroll;
        }

        function registerListenersAndPositionElements() {
            function updateChildSizes(element, width, height) {
                var expandChild             = getExpandChildElement(element);
                var expandWidth             = getExpandWidth(width);
                var expandHeight            = getExpandHeight(height);
                expandChild.style.width     = expandWidth + "px";
                expandChild.style.height    = expandHeight + "px";
            }

            function updateDetectorElements(done) {
                var width           = element.offsetWidth;
                var height          = element.offsetHeight;

                debug("Storing current size", width, height);

                // Store the size of the element sync here, so that multiple scroll events may be ignored in the event listeners.
                // Otherwise the if-check in handleScroll is useless.
                storeCurrentSize(element, width, height);

                // Since we delay the processing of the batch, there is a risk that uninstall has been called before the batch gets to execute.
                // Since there is no way to cancel the fn executions, we need to add an uninstall guard to all fns of the batch.

                batchProcessor.add(0, function performUpdateChildSizes() {
                    if (!getState(element)) {
                        debug("Aborting because element has been uninstalled");
                        return;
                    }

                    if (!areElementsInjected()) {
                        debug("Aborting because element container has not been initialized");
                        return;
                    }

                    if (options.debug) {
                        var w = element.offsetWidth;
                        var h = element.offsetHeight;

                        if (w !== width || h !== height) {
                            reporter.warn(idHandler.get(element), "Scroll: Size changed before updating detector elements.");
                        }
                    }

                    updateChildSizes(element, width, height);
                });

                batchProcessor.add(1, function updateScrollbars() {
                    if (!getState(element)) {
                        debug("Aborting because element has been uninstalled");
                        return;
                    }

                    if (!areElementsInjected()) {
                        debug("Aborting because element container has not been initialized");
                        return;
                    }

                    positionScrollbars(element, width, height);
                });

                if (done) {
                    batchProcessor.add(2, function () {
                        if (!getState(element)) {
                            debug("Aborting because element has been uninstalled");
                            return;
                        }

                        if (!areElementsInjected()) {
                          debug("Aborting because element container has not been initialized");
                          return;
                        }

                        done();
                    });
                }
            }

            function areElementsInjected() {
                return !!getState(element).container;
            }

            function notifyListenersIfNeeded() {
                function isFirstNotify() {
                    return getState(element).lastNotifiedWidth === undefined;
                }

                debug("notifyListenersIfNeeded invoked");

                var state = getState(element);

                // Don't notify the if the current size is the start size, and this is the first notification.
                if (isFirstNotify() && state.lastWidth === state.startSize.width && state.lastHeight === state.startSize.height) {
                    return debug("Not notifying: Size is the same as the start size, and there has been no notification yet.");
                }

                // Don't notify if the size already has been notified.
                if (state.lastWidth === state.lastNotifiedWidth && state.lastHeight === state.lastNotifiedHeight) {
                    return debug("Not notifying: Size already notified");
                }


                debug("Current size not notified, notifying...");
                state.lastNotifiedWidth = state.lastWidth;
                state.lastNotifiedHeight = state.lastHeight;
                forEach(getState(element).listeners, function (listener) {
                    listener(element);
                });
            }

            function handleRender() {
                debug("startanimation triggered.");

                if (isUnrendered(element)) {
                    debug("Ignoring since element is still unrendered...");
                    return;
                }

                debug("Element rendered.");
                var expand = getExpandElement(element);
                var shrink = getShrinkElement(element);
                if (expand.scrollLeft === 0 || expand.scrollTop === 0 || shrink.scrollLeft === 0 || shrink.scrollTop === 0) {
                    debug("Scrollbars out of sync. Updating detector elements...");
                    updateDetectorElements(notifyListenersIfNeeded);
                }
            }

            function handleScroll() {
                debug("Scroll detected.");

                if (isUnrendered(element)) {
                    // Element is still unrendered. Skip this scroll event.
                    debug("Scroll event fired while unrendered. Ignoring...");
                    return;
                }

                var width = element.offsetWidth;
                var height = element.offsetHeight;

                if (width !== getState(element).lastWidth || height !== getState(element).lastHeight) {
                    debug("Element size changed.");
                    updateDetectorElements(notifyListenersIfNeeded);
                } else {
                    debug("Element size has not changed (" + width + "x" + height + ").");
                }
            }

            debug("registerListenersAndPositionElements invoked.");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            getState(element).onRendered = handleRender;
            getState(element).onExpand = handleScroll;
            getState(element).onShrink = handleScroll;

            var style = getState(element).style;
            updateChildSizes(element, style.width, style.height);
        }

        function finalizeDomMutation() {
            debug("finalizeDomMutation invoked.");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            var style = getState(element).style;
            storeCurrentSize(element, style.width, style.height);
            positionScrollbars(element, style.width, style.height);
        }

        function ready() {
            callback(element);
        }

        function install() {
            debug("Installing...");
            initListeners();
            storeStartSize();

            batchProcessor.add(0, storeStyle);
            batchProcessor.add(1, injectScrollElements);
            batchProcessor.add(2, registerListenersAndPositionElements);
            batchProcessor.add(3, finalizeDomMutation);
            batchProcessor.add(4, ready);
        }

        debug("Making detectable...");

        if (isDetached(element)) {
            debug("Element is detached");

            injectContainerElement();

            debug("Waiting until element is attached...");

            getState(element).onRendered = function () {
                debug("Element is now attached");
                install();
            };
        } else {
            install();
        }
    }

    function uninstall(element) {
        var state = getState(element);

        if (!state) {
            // Uninstall has been called on a non-erd element.
            return;
        }

        // Uninstall may have been called in the following scenarios:
        // (1) Right between the sync code and async batch (here state.busy = true, but nothing have been registered or injected).
        // (2) In the ready callback of the last level of the batch by another element (here, state.busy = true, but all the stuff has been injected).
        // (3) After the installation process (here, state.busy = false and all the stuff has been injected).
        // So to be on the safe side, let's check for each thing before removing.

        // We need to remove the event listeners, because otherwise the event might fire on an uninstall element which results in an error when trying to get the state of the element.
        state.onExpandScroll && removeEvent(getExpandElement(element), "scroll", state.onExpandScroll);
        state.onShrinkScroll && removeEvent(getShrinkElement(element), "scroll", state.onShrinkScroll);
        state.onAnimationStart && removeEvent(state.container, "animationstart", state.onAnimationStart);

        state.container && element.removeChild(state.container);
    }

    return {
        makeDetectable: makeDetectable,
        addListener: addListener,
        uninstall: uninstall
    };
};


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d6eb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var prop = "_erd";

function initState(element) {
    element[prop] = {};
    return getState(element);
}

function getState(element) {
    return element[prop];
}

function cleanState(element) {
    delete element[prop];
}

module.exports = {
    initState: initState,
    getState: getState,
    cleanState: cleanState
};


/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e279":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1156");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GridLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "eec4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach                 = __webpack_require__("b770").forEach;
var elementUtilsMaker       = __webpack_require__("5be5");
var listenerHandlerMaker    = __webpack_require__("49ad");
var idGeneratorMaker        = __webpack_require__("2cef");
var idHandlerMaker          = __webpack_require__("5058");
var reporterMaker           = __webpack_require__("abb4");
var browserDetector         = __webpack_require__("18e9");
var batchProcessorMaker     = __webpack_require__("c274");
var stateHandler            = __webpack_require__("d6eb");

//Detection strategies.
var objectStrategyMaker     = __webpack_require__("18d2");
var scrollStrategyMaker     = __webpack_require__("c946");

function isCollection(obj) {
    return Array.isArray(obj) || obj.length !== undefined;
}

function toArray(collection) {
    if (!Array.isArray(collection)) {
        var array = [];
        forEach(collection, function (obj) {
            array.push(obj);
        });
        return array;
    } else {
        return collection;
    }
}

function isElement(obj) {
    return obj && obj.nodeType === 1;
}

/**
 * @typedef idHandler
 * @type {object}
 * @property {function} get Gets the resize detector id of the element.
 * @property {function} set Generate and sets the resize detector id of the element.
 */

/**
 * @typedef Options
 * @type {object}
 * @property {boolean} callOnAdd    Determines if listeners should be called when they are getting added.
                                    Default is true. If true, the listener is guaranteed to be called when it has been added.
                                    If false, the listener will not be guarenteed to be called when it has been added (does not prevent it from being called).
 * @property {idHandler} idHandler  A custom id handler that is responsible for generating, setting and retrieving id's for elements.
                                    If not provided, a default id handler will be used.
 * @property {reporter} reporter    A custom reporter that handles reporting logs, warnings and errors.
                                    If not provided, a default id handler will be used.
                                    If set to false, then nothing will be reported.
 * @property {boolean} debug        If set to true, the the system will report debug messages as default for the listenTo method.
 */

/**
 * Creates an element resize detector instance.
 * @public
 * @param {Options?} options Optional global options object that will decide how this instance will work.
 */
module.exports = function(options) {
    options = options || {};

    //idHandler is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var idHandler;

    if (options.idHandler) {
        // To maintain compatability with idHandler.get(element, readonly), make sure to wrap the given idHandler
        // so that readonly flag always is true when it's used here. This may be removed next major version bump.
        idHandler = {
            get: function (element) { return options.idHandler.get(element, true); },
            set: options.idHandler.set
        };
    } else {
        var idGenerator = idGeneratorMaker();
        var defaultIdHandler = idHandlerMaker({
            idGenerator: idGenerator,
            stateHandler: stateHandler
        });
        idHandler = defaultIdHandler;
    }

    //reporter is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var reporter = options.reporter;

    if(!reporter) {
        //If options.reporter is false, then the reporter should be quiet.
        var quiet = reporter === false;
        reporter = reporterMaker(quiet);
    }

    //batchProcessor is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var batchProcessor = getOption(options, "batchProcessor", batchProcessorMaker({ reporter: reporter }));

    //Options to be used as default for the listenTo function.
    var globalOptions = {};
    globalOptions.callOnAdd     = !!getOption(options, "callOnAdd", true);
    globalOptions.debug         = !!getOption(options, "debug", false);

    var eventListenerHandler    = listenerHandlerMaker(idHandler);
    var elementUtils            = elementUtilsMaker({
        stateHandler: stateHandler
    });

    //The detection strategy to be used.
    var detectionStrategy;
    var desiredStrategy = getOption(options, "strategy", "object");
    var strategyOptions = {
        reporter: reporter,
        batchProcessor: batchProcessor,
        stateHandler: stateHandler,
        idHandler: idHandler
    };

    if(desiredStrategy === "scroll") {
        if (browserDetector.isLegacyOpera()) {
            reporter.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy.");
            desiredStrategy = "object";
        } else if (browserDetector.isIE(9)) {
            reporter.warn("Scroll strategy is not supported on IE9. Changing to object strategy.");
            desiredStrategy = "object";
        }
    }

    if(desiredStrategy === "scroll") {
        detectionStrategy = scrollStrategyMaker(strategyOptions);
    } else if(desiredStrategy === "object") {
        detectionStrategy = objectStrategyMaker(strategyOptions);
    } else {
        throw new Error("Invalid strategy name: " + desiredStrategy);
    }

    //Calls can be made to listenTo with elements that are still being installed.
    //Also, same elements can occur in the elements list in the listenTo function.
    //With this map, the ready callbacks can be synchronized between the calls
    //so that the ready callback can always be called when an element is ready - even if
    //it wasn't installed from the function itself.
    var onReadyCallbacks = {};

    /**
     * Makes the given elements resize-detectable and starts listening to resize events on the elements. Calls the event callback for each event for each element.
     * @public
     * @param {Options?} options Optional options object. These options will override the global options. Some options may not be overriden, such as idHandler.
     * @param {element[]|element} elements The given array of elements to detect resize events of. Single element is also valid.
     * @param {function} listener The callback to be executed for each resize event for each element.
     */
    function listenTo(options, elements, listener) {
        function onResizeCallback(element) {
            var listeners = eventListenerHandler.get(element);
            forEach(listeners, function callListenerProxy(listener) {
                listener(element);
            });
        }

        function addListener(callOnAdd, element, listener) {
            eventListenerHandler.add(element, listener);

            if(callOnAdd) {
                listener(element);
            }
        }

        //Options object may be omitted.
        if(!listener) {
            listener = elements;
            elements = options;
            options = {};
        }

        if(!elements) {
            throw new Error("At least one element required.");
        }

        if(!listener) {
            throw new Error("Listener required.");
        }

        if (isElement(elements)) {
            // A single element has been passed in.
            elements = [elements];
        } else if (isCollection(elements)) {
            // Convert collection to array for plugins.
            // TODO: May want to check so that all the elements in the collection are valid elements.
            elements = toArray(elements);
        } else {
            return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        }

        var elementsReady = 0;

        var callOnAdd = getOption(options, "callOnAdd", globalOptions.callOnAdd);
        var onReadyCallback = getOption(options, "onReady", function noop() {});
        var debug = getOption(options, "debug", globalOptions.debug);

        forEach(elements, function attachListenerToElement(element) {
            if (!stateHandler.getState(element)) {
                stateHandler.initState(element);
                idHandler.set(element);
            }

            var id = idHandler.get(element);

            debug && reporter.log("Attaching listener to element", id, element);

            if(!elementUtils.isDetectable(element)) {
                debug && reporter.log(id, "Not detectable.");
                if(elementUtils.isBusy(element)) {
                    debug && reporter.log(id, "System busy making it detectable");

                    //The element is being prepared to be detectable. Do not make it detectable.
                    //Just add the listener, because the element will soon be detectable.
                    addListener(callOnAdd, element, listener);
                    onReadyCallbacks[id] = onReadyCallbacks[id] || [];
                    onReadyCallbacks[id].push(function onReady() {
                        elementsReady++;

                        if(elementsReady === elements.length) {
                            onReadyCallback();
                        }
                    });
                    return;
                }

                debug && reporter.log(id, "Making detectable...");
                //The element is not prepared to be detectable, so do prepare it and add a listener to it.
                elementUtils.markBusy(element, true);
                return detectionStrategy.makeDetectable({ debug: debug }, element, function onElementDetectable(element) {
                    debug && reporter.log(id, "onElementDetectable");

                    if (stateHandler.getState(element)) {
                        elementUtils.markAsDetectable(element);
                        elementUtils.markBusy(element, false);
                        detectionStrategy.addListener(element, onResizeCallback);
                        addListener(callOnAdd, element, listener);

                        // Since the element size might have changed since the call to "listenTo", we need to check for this change,
                        // so that a resize event may be emitted.
                        // Having the startSize object is optional (since it does not make sense in some cases such as unrendered elements), so check for its existance before.
                        // Also, check the state existance before since the element may have been uninstalled in the installation process.
                        var state = stateHandler.getState(element);
                        if (state && state.startSize) {
                            var width = element.offsetWidth;
                            var height = element.offsetHeight;
                            if (state.startSize.width !== width || state.startSize.height !== height) {
                                onResizeCallback(element);
                            }
                        }

                        if(onReadyCallbacks[id]) {
                            forEach(onReadyCallbacks[id], function(callback) {
                                callback();
                            });
                        }
                    } else {
                        // The element has been unisntalled before being detectable.
                        debug && reporter.log(id, "Element uninstalled before being detectable.");
                    }

                    delete onReadyCallbacks[id];

                    elementsReady++;
                    if(elementsReady === elements.length) {
                        onReadyCallback();
                    }
                });
            }

            debug && reporter.log(id, "Already detecable, adding listener.");

            //The element has been prepared to be detectable and is ready to be listened to.
            addListener(callOnAdd, element, listener);
            elementsReady++;
        });

        if(elementsReady === elements.length) {
            onReadyCallback();
        }
    }

    function uninstall(elements) {
        if(!elements) {
            return reporter.error("At least one element is required.");
        }

        if (isElement(elements)) {
            // A single element has been passed in.
            elements = [elements];
        } else if (isCollection(elements)) {
            // Convert collection to array for plugins.
            // TODO: May want to check so that all the elements in the collection are valid elements.
            elements = toArray(elements);
        } else {
            return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        }

        forEach(elements, function (element) {
            eventListenerHandler.removeAllListeners(element);
            detectionStrategy.uninstall(element);
            stateHandler.cleanState(element);
        });
    }

    return {
        listenTo: listenTo,
        removeListener: eventListenerHandler.removeListener,
        removeAllListeners: eventListenerHandler.removeAllListeners,
        uninstall: uninstall
    };
};

function getOption(options, name, defaultValue) {
    var value = options[name];

    if((value === undefined || value === null) && defaultValue !== undefined) {
        return defaultValue;
    }

    return value;
}


/***/ }),

/***/ "f1ae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d949dc60-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GridItem.vue?vue&type=template&id=47b74485&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"item",staticClass:"vue-grid-item",class:_vm.classObj,style:(_vm.style)},[_vm._t("default"),(_vm.resizableAndNotStatic)?_c('span',{ref:"handle",class:_vm.resizableHandleClass}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/GridItem.vue?vue&type=template&id=47b74485&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("4917");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("55dd");

// CONCATENATED MODULE: ./src/helpers/utils.js





// @flow

/*:: export type LayoutItemRequired = {w: number, h: number, x: number, y: number, i: string};*/

/*:: export type LayoutItem = LayoutItemRequired &
                         {minW?: number, minH?: number, maxW?: number, maxH?: number,
                          moved?: boolean, static?: boolean,
                          isDraggable?: ?boolean, isResizable?: ?boolean};*/

// export type Position = {left: number, top: number, width: number, height: number};

/*
export type DragCallbackData = {
  node: HTMLElement,
  x: number, y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number
};
*/
// export type DragEvent = {e: Event} & DragCallbackData;

/*:: export type Layout = Array<LayoutItem>;*/

// export type ResizeEvent = {e: Event, node: HTMLElement, size: Size};
// const isProduction = process.env.NODE_ENV === 'production';

/**
 * Return the bottom coordinate of the layout.
 *
 * @param  {Array} layout Layout array.
 * @return {Number}       Bottom coordinate.
 */

/*:: export type Size = {width: number, height: number};*/

function bottom(layout
/*: Layout*/
)
/*: number*/
{
  var max = 0,
      bottomY;

  for (var i = 0, len = layout.length; i < len; i++) {
    bottomY = layout[i].y + layout[i].h;
    if (bottomY > max) max = bottomY;
  }

  return max;
}
function cloneLayout(layout
/*: Layout*/
)
/*: Layout*/
{
  var newLayout = Array(layout.length);

  for (var i = 0, len = layout.length; i < len; i++) {
    newLayout[i] = cloneLayoutItem(layout[i]);
  }

  return newLayout;
} // Fast path to cloning, since this is monomorphic

function cloneLayoutItem(layoutItem
/*: LayoutItem*/
)
/*: LayoutItem*/
{
  /*return {
    w: layoutItem.w, h: layoutItem.h, x: layoutItem.x, y: layoutItem.y, i: layoutItem.i,
    minW: layoutItem.minW, maxW: layoutItem.maxW, minH: layoutItem.minH, maxH: layoutItem.maxH,
    moved: Boolean(layoutItem.moved), static: Boolean(layoutItem.static),
    // These can be null
    isDraggable: layoutItem.isDraggable, isResizable: layoutItem.isResizable
  };*/
  return JSON.parse(JSON.stringify(layoutItem));
}
/**
 * Given two layoutitems, check if they collide.
 *
 * @return {Boolean}   True if colliding.
 */

function collides(l1
/*: LayoutItem*/
, l2
/*: LayoutItem*/
)
/*: boolean*/
{
  if (l1 === l2) return false; // same element

  if (l1.x + l1.w <= l2.x) return false; // l1 is left of l2

  if (l1.x >= l2.x + l2.w) return false; // l1 is right of l2

  if (l1.y + l1.h <= l2.y) return false; // l1 is above l2

  if (l1.y >= l2.y + l2.h) return false; // l1 is below l2

  return true; // boxes overlap
}
/**
 * Given a layout, compact it. This involves going down each y coordinate and removing gaps
 * between items.
 *
 * @param  {Array} layout Layout.
 * @param  {Boolean} verticalCompact Whether or not to compact the layout
 *   vertically.
 * @return {Array}       Compacted Layout.
 */

function compact(layout
/*: Layout*/
, verticalCompact
/*: Boolean*/
)
/*: Layout*/
{
  // Statics go in the compareWith array right away so items flow around them.
  var compareWith = getStatics(layout); // We go through the items by row and column.

  var sorted = sortLayoutItemsByRowCol(layout); // Holding for new items.

  var out = Array(layout.length);

  for (var i = 0, len = sorted.length; i < len; i++) {
    var l = sorted[i]; // Don't move static elements

    if (!l.static) {
      l = compactItem(compareWith, l, verticalCompact); // Add to comparison array. We only collide with items before this one.
      // Statics are already in this array.

      compareWith.push(l);
    } // Add to output array to make sure they still come out in the right order.


    out[layout.indexOf(l)] = l; // Clear moved flag, if it exists.

    l.moved = false;
  }

  return out;
}
/**
 * Compact an item in the layout.
 */

function compactItem(compareWith
/*: Layout*/
, l
/*: LayoutItem*/
, verticalCompact
/*: boolean*/
)
/*: LayoutItem*/
{
  if (verticalCompact) {
    // Move the element up as far as it can go without colliding.
    while (l.y > 0 && !getFirstCollision(compareWith, l)) {
      l.y--;
    }
  } // Move it down, and keep moving it down if it's colliding.


  var collides;

  while (collides = getFirstCollision(compareWith, l)) {
    l.y = collides.y + collides.h;
  }

  return l;
}
/**
 * Given a layout, make sure all elements fit within its bounds.
 *
 * @param  {Array} layout Layout array.
 * @param  {Number} bounds Number of columns.
 */

function correctBounds(layout
/*: Layout*/
, bounds
/*: {cols: number}*/
)
/*: Layout*/
{
  var collidesWith = getStatics(layout);

  for (var i = 0, len = layout.length; i < len; i++) {
    var l = layout[i]; // Overflows right

    if (l.x + l.w > bounds.cols) l.x = bounds.cols - l.w; // Overflows left

    if (l.x < 0) {
      l.x = 0;
      l.w = bounds.cols;
    }

    if (!l.static) collidesWith.push(l);else {
      // If this is static and collides with other statics, we must move it down.
      // We have to do something nicer than just letting them overlap.
      while (getFirstCollision(collidesWith, l)) {
        l.y++;
      }
    }
  }

  return layout;
}
/**
 * Get a layout item by ID. Used so we can override later on if necessary.
 *
 * @param  {Array}  layout Layout array.
 * @param  {String} id     ID
 * @return {LayoutItem}    Item at ID.
 */

function getLayoutItem(layout
/*: Layout*/
, id
/*: string*/
)
/*: ?LayoutItem*/
{
  for (var i = 0, len = layout.length; i < len; i++) {
    if (layout[i].i === id) return layout[i];
  }
}
/**
 * Returns the first item this layout collides with.
 * It doesn't appear to matter which order we approach this from, although
 * perhaps that is the wrong thing to do.
 *
 * @param  {Object} layoutItem Layout item.
 * @return {Object|undefined}  A colliding layout item, or undefined.
 */

function getFirstCollision(layout
/*: Layout*/
, layoutItem
/*: LayoutItem*/
)
/*: ?LayoutItem*/
{
  for (var i = 0, len = layout.length; i < len; i++) {
    if (collides(layout[i], layoutItem)) return layout[i];
  }
}
function getAllCollisions(layout
/*: Layout*/
, layoutItem
/*: LayoutItem*/
)
/*: Array<LayoutItem>*/
{
  return layout.filter(function (l) {
    return collides(l, layoutItem);
  });
}
/**
 * Get all static elements.
 * @param  {Array} layout Array of layout objects.
 * @return {Array}        Array of static layout items..
 */

function getStatics(layout
/*: Layout*/
)
/*: Array<LayoutItem>*/
{
  //return [];
  return layout.filter(function (l) {
    return l.static;
  });
}
/**
 * Move an element. Responsible for doing cascading movements of other elements.
 *
 * @param  {Array}      layout Full layout to modify.
 * @param  {LayoutItem} l      element to move.
 * @param  {Number}     [x]    X position in grid units.
 * @param  {Number}     [y]    Y position in grid units.
 * @param  {Boolean}    [isUserAction] If true, designates that the item we're moving is
 *                                     being dragged/resized by th euser.
 */

function moveElement(layout
/*: Layout*/
, l
/*: LayoutItem*/
, x
/*: Number*/
, y
/*: Number*/
, isUserAction
/*: Boolean*/
, preventCollision
/*: Boolean*/
)
/*: Layout*/
{
  if (l.static) return layout; // Short-circuit if nothing to do.
  //if (l.y === y && l.x === x) return layout;

  var oldX = l.x;
  var oldY = l.y;
  var movingUp = y && l.y > y; // This is quite a bit faster than extending the object

  if (typeof x === 'number') l.x = x;
  if (typeof y === 'number') l.y = y;
  l.moved = true; // If this collides with anything, move it.
  // When doing this comparison, we have to sort the items we compare with
  // to ensure, in the case of multiple collisions, that we're getting the
  // nearest collision.

  var sorted = sortLayoutItemsByRowCol(layout);
  if (movingUp) sorted = sorted.reverse();
  var collisions = getAllCollisions(sorted, l);

  if (preventCollision && collisions.length) {
    l.x = oldX;
    l.y = oldY;
    l.moved = false;
    return layout;
  } // Move each item that collides away from this element.


  for (var i = 0, len = collisions.length; i < len; i++) {
    var collision = collisions[i]; // console.log('resolving collision between', l.i, 'at', l.y, 'and', collision.i, 'at', collision.y);
    // Short circuit so we can't infinite loop

    if (collision.moved) continue; // This makes it feel a bit more precise by waiting to swap for just a bit when moving up.

    if (l.y > collision.y && l.y - collision.y > collision.h / 4) continue; // Don't move static items - we have to move *this* element away

    if (collision.static) {
      layout = moveElementAwayFromCollision(layout, collision, l, isUserAction);
    } else {
      layout = moveElementAwayFromCollision(layout, l, collision, isUserAction);
    }
  }

  return layout;
}
/**
 * This is where the magic needs to happen - given a collision, move an element away from the collision.
 * We attempt to move it up if there's room, otherwise it goes below.
 *
 * @param  {Array} layout            Full layout to modify.
 * @param  {LayoutItem} collidesWith Layout item we're colliding with.
 * @param  {LayoutItem} itemToMove   Layout item we're moving.
 * @param  {Boolean} [isUserAction]  If true, designates that the item we're moving is being dragged/resized
 *                                   by the user.
 */

function moveElementAwayFromCollision(layout
/*: Layout*/
, collidesWith
/*: LayoutItem*/
, itemToMove
/*: LayoutItem*/
, isUserAction
/*: ?boolean*/
)
/*: Layout*/
{
  var preventCollision = false; // we're already colliding
  // If there is enough space above the collision to put this element, move it there.
  // We only do this on the main collision as this can get funky in cascades and cause
  // unwanted swapping behavior.

  if (isUserAction) {
    // Make a mock item so we don't modify the item here, only modify in moveElement.
    var fakeItem
    /*: LayoutItem*/
    = {
      x: itemToMove.x,
      y: itemToMove.y,
      w: itemToMove.w,
      h: itemToMove.h,
      i: '-1'
    };
    fakeItem.y = Math.max(collidesWith.y - itemToMove.h, 0);

    if (!getFirstCollision(layout, fakeItem)) {
      return moveElement(layout, itemToMove, undefined, fakeItem.y, preventCollision);
    }
  } // Previously this was optimized to move below the collision directly, but this can cause problems
  // with cascading moves, as an item may actually leapflog a collision and cause a reversal in order.


  return moveElement(layout, itemToMove, undefined, itemToMove.y + 1, preventCollision);
}
/**
 * Helper to convert a number to a percentage string.
 *
 * @param  {Number} num Any number
 * @return {String}     That number as a percentage.
 */

function perc(num
/*: number*/
)
/*: string*/
{
  return num * 100 + '%';
}
function setTransform(top, left, width, height)
/*: Object*/
{
  // Replace unitless items with px
  var translate = "translate3d(" + left + "px," + top + "px, 0)";
  return {
    transform: translate,
    WebkitTransform: translate,
    MozTransform: translate,
    msTransform: translate,
    OTransform: translate,
    width: width + "px",
    height: height + "px",
    position: 'absolute'
  };
}
/**
 * Just like the setTransform method, but instead it will return a negative value of right.
 *
 * @param top
 * @param right
 * @param width
 * @param height
 * @returns {{transform: string, WebkitTransform: string, MozTransform: string, msTransform: string, OTransform: string, width: string, height: string, position: string}}
 */

function setTransformRtl(top, right, width, height)
/*: Object*/
{
  // Replace unitless items with px
  var translate = "translate3d(" + right * -1 + "px," + top + "px, 0)";
  return {
    transform: translate,
    WebkitTransform: translate,
    MozTransform: translate,
    msTransform: translate,
    OTransform: translate,
    width: width + "px",
    height: height + "px",
    position: 'absolute'
  };
}
function setTopLeft(top, left, width, height)
/*: Object*/
{
  return {
    top: top + "px",
    left: left + "px",
    width: width + "px",
    height: height + "px",
    position: 'absolute'
  };
}
/**
 * Just like the setTopLeft method, but instead, it will return a right property instead of left.
 *
 * @param top
 * @param right
 * @param width
 * @param height
 * @returns {{top: string, right: string, width: string, height: string, position: string}}
 */

function setTopRight(top, right, width, height)
/*: Object*/
{
  return {
    top: top + "px",
    right: right + "px",
    width: width + "px",
    height: height + "px",
    position: 'absolute'
  };
}
/**
 * Get layout items sorted from top left to right and down.
 *
 * @return {Array} Array of layout objects.
 * @return {Array}        Layout, sorted static items first.
 */

function sortLayoutItemsByRowCol(layout
/*: Layout*/
)
/*: Layout*/
{
  return [].concat(layout).sort(function (a, b) {
    if (a.y > b.y || a.y === b.y && a.x > b.x) {
      return 1;
    }

    return -1;
  });
}
/**
 * Generate a layout using the initialLayout and children as a template.
 * Missing entries will be added, extraneous ones will be truncated.
 *
 * @param  {Array}  initialLayout Layout passed in through props.
 * @param  {String} breakpoint    Current responsive breakpoint.
 * @param  {Boolean} verticalCompact Whether or not to compact the layout vertically.
 * @return {Array}                Working layout.
 */

/*
export function synchronizeLayoutWithChildren(initialLayout: Layout, children: Array<React.Element>|React.Element,
                                              cols: number, verticalCompact: boolean): Layout {
  // ensure 'children' is always an array
  if (!Array.isArray(children)) {
    children = [children];
  }
  initialLayout = initialLayout || [];

  // Generate one layout item per child.
  let layout: Layout = [];
  for (let i = 0, len = children.length; i < len; i++) {
    let newItem;
    const child = children[i];

    // Don't overwrite if it already exists.
    const exists = getLayoutItem(initialLayout, child.key || "1" /!* FIXME satisfies Flow *!/);
    if (exists) {
      newItem = exists;
    } else {
      const g = child.props._grid;

      // Hey, this item has a _grid property, use it.
      if (g) {
        if (!isProduction) {
          validateLayout([g], 'ReactGridLayout.children');
        }
        // Validated; add it to the layout. Bottom 'y' possible is the bottom of the layout.
        // This allows you to do nice stuff like specify {y: Infinity}
        if (verticalCompact) {
          newItem = cloneLayoutItem({...g, y: Math.min(bottom(layout), g.y), i: child.key});
        } else {
          newItem = cloneLayoutItem({...g, y: g.y, i: child.key});
        }
      }
      // Nothing provided: ensure this is added to the bottom
      else {
        newItem = cloneLayoutItem({w: 1, h: 1, x: 0, y: bottom(layout), i: child.key || "1"});
      }
    }
    layout[i] = newItem;
  }

  // Correct the layout.
  layout = correctBounds(layout, {cols: cols});
  layout = compact(layout, verticalCompact);

  return layout;
}
*/

/**
 * Validate a layout. Throws errors.
 *
 * @param  {Array}  layout        Array of layout items.
 * @param  {String} [contextName] Context name for errors.
 * @throw  {Error}                Validation error.
 */

function validateLayout(layout
/*: Layout*/
, contextName
/*: string*/
)
/*: void*/
{
  contextName = contextName || "Layout";
  var subProps = ['x', 'y', 'w', 'h'];
  if (!Array.isArray(layout)) throw new Error(contextName + " must be an array!");

  for (var i = 0, len = layout.length; i < len; i++) {
    var item = layout[i];

    for (var j = 0; j < subProps.length; j++) {
      if (typeof item[subProps[j]] !== 'number') {
        throw new Error('VueGridLayout: ' + contextName + '[' + i + '].' + subProps[j] + ' must be a number!');
      }
    }

    if (item.i && typeof item.i !== 'string') {// number is also ok, so comment the error
      // TODO confirm if commenting the line below doesn't cause unexpected problems
      // throw new Error('VueGridLayout: ' + contextName + '[' + i + '].i must be a string!');
    }

    if (item.static !== undefined && typeof item.static !== 'boolean') {
      throw new Error('VueGridLayout: ' + contextName + '[' + i + '].static must be a boolean!');
    }
  }
} // Flow can't really figure this out, so we just use Object

function autoBindHandlers(el
/*: Object*/
, fns
/*: Array<string>*/
)
/*: void*/
{
  fns.forEach(function (key) {
    return el[key] = el[key].bind(el);
  });
}
/**
 * Convert a JS object to CSS string. Similar to React's output of CSS.
 * @param obj
 * @returns {string}
 */

function createMarkup(obj) {
  var keys = Object.keys(obj);
  if (!keys.length) return '';
  var i,
      len = keys.length;
  var result = '';

  for (i = 0; i < len; i++) {
    var key = keys[i];
    var val = obj[key];
    result += hyphenate(key) + ':' + addPx(key, val) + ';';
  }

  return result;
}
/* The following list is defined in React's core */

var IS_UNITLESS = {
  animationIterationCount: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  stopOpacity: true,
  strokeDashoffset: true,
  strokeOpacity: true,
  strokeWidth: true
};
/**
 * Will add px to the end of style values which are Numbers.
 * @param name
 * @param value
 * @returns {*}
 */

function addPx(name, value) {
  if (typeof value === 'number' && !IS_UNITLESS[name]) {
    return value + 'px';
  } else {
    return value;
  }
}
/**
 * Hyphenate a camelCase string.
 *
 * @param {String} str
 * @return {String}
 */

var hyphenateRE = /([a-z\d])([A-Z])/g;
function hyphenate(str) {
  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
}
function findItemInArray(array, property, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i][property] == value) return true;
  }

  return false;
}
function findAndRemove(array, property, value) {
  array.forEach(function (result, index) {
    if (result[property] === value) {
      //Remove from array
      array.splice(index, 1);
    }
  });
}
// CONCATENATED MODULE: ./src/helpers/draggableUtils.js
// Get {x, y} positions from event.
function getControlPosition(e) {
  return offsetXYFromParentOf(e);
} // Get from offsetParent

function offsetXYFromParentOf(evt) {
  var offsetParent = evt.target.offsetParent || document.body;
  var offsetParentRect = evt.offsetParent === document.body ? {
    left: 0,
    top: 0
  } : offsetParent.getBoundingClientRect();
  var x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;
  var y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;
  /*const x = Math.round(evt.clientX + offsetParent.scrollLeft - offsetParentRect.left);
  const y = Math.round(evt.clientY + offsetParent.scrollTop - offsetParentRect.top);*/

  return {
    x: x,
    y: y
  };
} // Create an data object exposed by <DraggableCore>'s events

function createCoreData(lastX, lastY, x, y) {
  // State changes are often (but not always!) async. We want the latest value.
  var isStart = !isNum(lastX);

  if (isStart) {
    // If this is our first move, use the x and y as last coords.
    return {
      deltaX: 0,
      deltaY: 0,
      lastX: x,
      lastY: y,
      x: x,
      y: y
    };
  } else {
    // Otherwise calculate proper values.
    return {
      deltaX: x - lastX,
      deltaY: y - lastY,
      lastX: lastX,
      lastY: lastY,
      x: x,
      y: y
    };
  }
}

function isNum(num) {
  return typeof num === 'number' && !isNaN(num);
}
// CONCATENATED MODULE: ./src/helpers/DOM.js
var currentDir
/*: "ltr" | "rtl" | "auto"*/
= "auto"; // let currentDir = "auto";

function hasDocument() {
  return typeof document !== "undefined";
}

function hasWindow() {
  return typeof window !== "undefined";
}

function getDocumentDir() {
  if (!hasDocument()) {
    return currentDir;
  }

  var direction = typeof document.dir !== "undefined" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir");
  return direction;
}
function setDocumentDir(dir
/*: "ltr" | "rtl" | "auto"*/
) {
  // export function setDocumentDir(dir){
  if (!hasDocument) {
    currentDir = dir;
    return;
  }

  var html = document.getElementsByTagName("html")[0];
  html.setAttribute("dir", dir);
}
function addWindowEventListener(event
/*:string*/
, callback
/*: () => mixed*/
) {
  if (!hasWindow) {
    callback();
    return;
  }

  window.addEventListener(event, callback);
}
function removeWindowEventListener(event
/*:string*/
, callback
/*: () => mixed*/
) {
  if (!hasWindow) {
    return;
  }

  window.removeEventListener(event, callback);
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GridItem.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 //    var eventBus = require('./eventBus');

var interact = __webpack_require__("5014");

/* harmony default export */ var GridItemvue_type_script_lang_js_ = ({
  name: "GridItem",
  props: {
    /*cols: {
     type: Number,
     required: true
     },*/

    /*containerWidth: {
     type: Number,
     required: true
      },
     rowHeight: {
     type: Number,
     required: true
     },
     margin: {
     type: Array,
     required: true
     },
     maxRows: {
     type: Number,
     required: true
     },*/
    isDraggable: {
      type: Boolean,
      required: false,
      default: null
    },
    isResizable: {
      type: Boolean,
      required: false,
      default: null
    },

    /*useCssTransforms: {
     type: Boolean,
     required: true
     },
     */
    static: {
      type: Boolean,
      required: false,
      default: false
    },
    minH: {
      type: Number,
      required: false,
      default: 1
    },
    minW: {
      type: Number,
      required: false,
      default: 1
    },
    maxH: {
      type: Number,
      required: false,
      default: Infinity
    },
    maxW: {
      type: Number,
      required: false,
      default: Infinity
    },
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    },
    w: {
      type: Number,
      required: true
    },
    h: {
      type: Number,
      required: true
    },
    i: {
      required: true
    },
    dragIgnoreFrom: {
      type: String,
      required: false,
      default: 'a, button'
    },
    dragAllowFrom: {
      type: String,
      required: false,
      default: null
    },
    resizeIgnoreFrom: {
      type: String,
      required: false,
      default: 'a, button'
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  inject: ["eventBus"],
  data: function data() {
    return {
      cols: 1,
      containerWidth: 100,
      rowHeight: 30,
      margin: [10, 10],
      maxRows: Infinity,
      draggable: null,
      resizable: null,
      useCssTransforms: true,
      isDragging: false,
      dragging: null,
      isResizing: false,
      resizing: null,
      lastX: NaN,
      lastY: NaN,
      lastW: NaN,
      lastH: NaN,
      style: {},
      rtl: false,
      dragEventSet: false,
      resizeEventSet: false,
      previousW: null,
      previousH: null,
      previousX: null,
      previousY: null,
      innerX: this.x,
      innerY: this.y,
      innerW: this.w,
      innerH: this.h
    };
  },
  created: function created() {
    var _this = this;

    var self = this; // Accessible refernces of functions for removing in beforeDestroy

    self.updateWidthHandler = function (width) {
      self.updateWidth(width);
    };

    self.compactHandler = function (layout) {
      self.compact(layout);
    };

    self.setDraggableHandler = function (isDraggable) {
      if (self.isDraggable === null) {
        self.draggable = isDraggable;
      }
    };

    self.setResizableHandler = function (isResizable) {
      if (self.isResizable === null) {
        self.resizable = isResizable;
      }
    };

    self.setRowHeightHandler = function (rowHeight) {
      self.rowHeight = rowHeight;
    };

    self.setMaxRowsHandler = function (maxRows) {
      self.maxRows = maxRows;
    };

    self.directionchangeHandler = function () {
      _this.rtl = getDocumentDir() === 'rtl';

      _this.compact();
    };

    self.setColNum = function (colNum) {
      self.cols = parseInt(colNum);
    };

    this.eventBus.$on('updateWidth', self.updateWidthHandler);
    this.eventBus.$on('compact', self.compactHandler);
    this.eventBus.$on('setDraggable', self.setDraggableHandler);
    this.eventBus.$on('setResizable', self.setResizableHandler);
    this.eventBus.$on('setRowHeight', self.setRowHeightHandler);
    this.eventBus.$on('setMaxRows', self.setMaxRowsHandler);
    this.eventBus.$on('directionchange', self.directionchangeHandler);
    this.eventBus.$on('setColNum', self.setColNum);
    this.rtl = getDocumentDir() === 'rtl';
  },
  beforeDestroy: function beforeDestroy() {
    var self = this; //Remove listeners

    this.eventBus.$off('updateWidth', self.updateWidthHandler);
    this.eventBus.$off('compact', self.compactHandler);
    this.eventBus.$off('setDraggable', self.setDraggableHandler);
    this.eventBus.$off('setResizable', self.setResizableHandler);
    this.eventBus.$off('setRowHeight', self.setRowHeightHandler);
    this.eventBus.$off('setMaxRows', self.setMaxRowsHandler);
    this.eventBus.$off('directionchange', self.directionchangeHandler);
    this.eventBus.$off('setColNum', self.setColNum);
    this.interactObj.unset(); // destroy interact intance
  },
  mounted: function mounted() {
    this.cols = this.$parent.colNum;
    this.rowHeight = this.$parent.rowHeight;
    this.containerWidth = this.$parent.width !== null ? this.$parent.width : 100;
    this.margin = this.$parent.margin !== undefined ? this.$parent.margin : [10, 10];
    this.maxRows = this.$parent.maxRows;

    if (this.isDraggable === null) {
      this.draggable = this.$parent.isDraggable;
    } else {
      this.draggable = this.isDraggable;
    }

    if (this.isResizable === null) {
      this.resizable = this.$parent.isResizable;
    } else {
      this.resizable = this.isResizable;
    }

    this.useCssTransforms = this.$parent.useCssTransforms;
    this.createStyle();
  },
  watch: {
    isDraggable: function isDraggable() {
      this.draggable = this.isDraggable;
    },
    static: function _static() {
      this.tryMakeDraggable();
      this.tryMakeResizable();
    },
    active: function active() {
      this.tryMakeDraggable();
    },
    draggable: function draggable() {
      this.tryMakeDraggable();
    },
    isResizable: function isResizable() {
      this.resizable = this.isResizable;
    },
    resizable: function resizable() {
      this.tryMakeResizable();
    },
    rowHeight: function rowHeight() {
      this.createStyle();
      this.emitContainerResized();
    },
    cols: function cols() {
      this.tryMakeResizable();
      this.createStyle();
      this.emitContainerResized();
    },
    containerWidth: function containerWidth() {
      this.tryMakeResizable();
      this.createStyle();
      this.emitContainerResized();
    },
    x: function x(newVal) {
      this.innerX = newVal;
      this.createStyle();
    },
    y: function y(newVal) {
      this.innerY = newVal;
      this.createStyle();
    },
    h: function h(newVal) {
      this.innerH = newVal;
      this.createStyle(); // this.emitContainerResized();
    },
    w: function w(newVal) {
      this.innerW = newVal;
      this.createStyle(); // this.emitContainerResized();
    },
    renderRtl: function renderRtl() {
      // console.log("### renderRtl");
      this.tryMakeResizable();
      this.createStyle();
    },
    minH: function minH() {
      this.tryMakeResizable();
    },
    maxH: function maxH() {
      this.tryMakeResizable();
    },
    minW: function minW() {
      this.tryMakeResizable();
    },
    maxW: function maxW() {
      this.tryMakeResizable();
    }
  },
  computed: {
    classObj: function classObj() {
      return {
        'vue-resizable': this.resizableAndNotStatic,
        'static': this.static,
        'resizing': this.isResizing,
        'vue-draggable-dragging': this.isDragging,
        'cssTransforms': this.useCssTransforms,
        'render-rtl': this.renderRtl,
        'disable-userselect': this.isDragging,
        'no-touch': this.isAndroid && this.draggableOrResizableAndNotStatic,
        'active': this.active
      };
    },
    resizableAndNotStatic: function resizableAndNotStatic() {
      return this.resizable && !this.static;
    },
    draggableOrResizableAndNotStatic: function draggableOrResizableAndNotStatic() {
      return (this.draggable || this.resizable) && !this.static;
    },
    isAndroid: function isAndroid() {
      return navigator.userAgent.toLowerCase().indexOf("android") !== -1;
    },
    renderRtl: function renderRtl() {
      return this.$parent.isMirrored ? !this.rtl : this.rtl;
    },
    resizableHandleClass: function resizableHandleClass() {
      if (this.renderRtl) {
        return 'vue-resizable-handle vue-rtl-resizable-handle';
      } else {
        return 'vue-resizable-handle';
      }
    }
  },
  methods: {
    createStyle: function createStyle() {
      if (this.x + this.w > this.cols) {
        this.innerX = 0;
        this.innerW = this.w > this.cols ? this.cols : this.w;
      } else {
        this.innerX = this.x;
        this.innerW = this.w;
      }

      var pos = this.calcPosition(this.innerX, this.innerY, this.innerW, this.innerH);

      if (this.isDragging) {
        pos.top = this.dragging.top; //                    Add rtl support

        if (this.renderRtl) {
          pos.right = this.dragging.left;
        } else {
          pos.left = this.dragging.left;
        }
      }

      if (this.isResizing) {
        pos.width = this.resizing.width;
        pos.height = this.resizing.height;
      }

      var style; // CSS Transforms support (default)

      if (this.useCssTransforms) {
        //                    Add rtl support
        if (this.renderRtl) {
          style = setTransformRtl(pos.top, pos.right, pos.width, pos.height);
        } else {
          style = setTransform(pos.top, pos.left, pos.width, pos.height);
        }
      } else {
        // top,left (slow)
        //                    Add rtl support
        if (this.renderRtl) {
          style = setTopRight(pos.top, pos.right, pos.width, pos.height);
        } else {
          style = setTopLeft(pos.top, pos.left, pos.width, pos.height);
        }
      }

      this.style = style;
    },
    emitContainerResized: function emitContainerResized() {
      // this.style has width and height with trailing 'px'. The
      // resized event is without them
      var styleProps = {};

      for (var _i = 0, _arr = ['width', 'height']; _i < _arr.length; _i++) {
        var prop = _arr[_i];
        var val = this.style[prop];
        var matches = val.match(/^(\d+)px$/);
        if (!matches) return;
        styleProps[prop] = matches[1];
      }

      this.$emit("container-resized", this.i, this.h, this.w, styleProps.height, styleProps.width);
    },
    handleResize: function handleResize(event) {
      if (this.static) return;
      var position = getControlPosition(event); // Get the current drag point from the event. This is used as the offset.

      if (position == null) return; // not possible but satisfies flow

      var x = position.x,
          y = position.y;
      var newSize = {
        width: 0,
        height: 0
      };
      var pos;

      switch (event.type) {
        case "resizestart":
          {
            this.previousW = this.innerW;
            this.previousH = this.innerH;
            pos = this.calcPosition(this.innerX, this.innerY, this.innerW, this.innerH);
            newSize.width = pos.width;
            newSize.height = pos.height;
            this.resizing = newSize;
            this.isResizing = true;
            break;
          }

        case "resizemove":
          {
            //                        console.log("### resize => " + event.type + ", lastW=" + this.lastW + ", lastH=" + this.lastH);
            var coreEvent = createCoreData(this.lastW, this.lastH, x, y);

            if (this.renderRtl) {
              newSize.width = this.resizing.width - coreEvent.deltaX;
            } else {
              newSize.width = this.resizing.width + coreEvent.deltaX;
            }

            newSize.height = this.resizing.height + coreEvent.deltaY; ///console.log("### resize => " + event.type + ", deltaX=" + coreEvent.deltaX + ", deltaY=" + coreEvent.deltaY);

            this.resizing = newSize;
            break;
          }

        case "resizeend":
          {
            //console.log("### resize end => x=" +this.innerX + " y=" + this.innerY + " w=" + this.innerW + " h=" + this.innerH);
            pos = this.calcPosition(this.innerX, this.innerY, this.innerW, this.innerH);
            newSize.width = pos.width;
            newSize.height = pos.height; //                        console.log("### resize end => " + JSON.stringify(newSize));

            this.resizing = null;
            this.isResizing = false;
            break;
          }
      } // Get new WH


      pos = this.calcWH(newSize.height, newSize.width);

      if (pos.w < this.minW) {
        pos.w = this.minW;
      }

      if (pos.w > this.maxW) {
        pos.w = this.maxW;
      }

      if (pos.h < this.minH) {
        pos.h = this.minH;
      }

      if (pos.h > this.maxH) {
        pos.h = this.maxH;
      }

      if (pos.h < 1) {
        pos.h = 1;
      }

      if (pos.w < 1) {
        pos.w = 1;
      }

      this.lastW = x;
      this.lastH = y;

      if (this.innerW !== pos.w || this.innerH !== pos.h) {
        this.$emit("resize", this.i, pos.h, pos.w, newSize.height, newSize.width);
      }

      if (event.type === "resizeend" && (this.previousW !== this.innerW || this.previousH !== this.innerH)) {
        this.$emit("resized", this.i, pos.h, pos.w, newSize.height, newSize.width);
      }

      this.eventBus.$emit("resizeEvent", event.type, this.i, this.innerX, this.innerY, pos.h, pos.w);
    },
    handleDrag: function handleDrag(event) {
      if (this.static) return;
      if (this.isResizing) return;
      var position = getControlPosition(event); // Get the current drag point from the event. This is used as the offset.

      if (position === null) return; // not possible but satisfies flow

      var x = position.x,
          y = position.y; // let shouldUpdate = false;

      var newPosition = {
        top: 0,
        left: 0
      };

      switch (event.type) {
        case "mousedown":
          if (!this.active) {
            this.eventBus.$emit("active", this.i);
          }

          return;

        case "dragstart":
          {
            this.previousX = this.innerX;
            this.previousY = this.innerY;
            var parentRect = event.target.offsetParent.getBoundingClientRect();
            var clientRect = event.target.getBoundingClientRect();

            if (this.renderRtl) {
              newPosition.left = (clientRect.right - parentRect.right) * -1;
            } else {
              newPosition.left = clientRect.left - parentRect.left;
            }

            newPosition.top = clientRect.top - parentRect.top;
            this.dragging = newPosition;
            this.isDragging = true;
            break;
          }

        case "dragend":
          {
            if (!this.isDragging) return;

            var _parentRect = event.target.offsetParent.getBoundingClientRect();

            var _clientRect = event.target.getBoundingClientRect(); //                        Add rtl support


            if (this.renderRtl) {
              newPosition.left = (_clientRect.right - _parentRect.right) * -1;
            } else {
              newPosition.left = _clientRect.left - _parentRect.left;
            }

            newPosition.top = _clientRect.top - _parentRect.top; //                        console.log("### drag end => " + JSON.stringify(newPosition));
            //                        console.log("### DROP: " + JSON.stringify(newPosition));

            this.dragging = null;
            this.isDragging = false; // shouldUpdate = true;

            break;
          }

        case "dragmove":
          {
            var coreEvent = createCoreData(this.lastX, this.lastY, x, y); //                        Add rtl support

            if (this.renderRtl) {
              newPosition.left = this.dragging.left - coreEvent.deltaX;
            } else {
              newPosition.left = this.dragging.left + coreEvent.deltaX;
            }

            newPosition.top = this.dragging.top + coreEvent.deltaY; //                        console.log("### drag => " + event.type + ", x=" + x + ", y=" + y);
            //                        console.log("### drag => " + event.type + ", deltaX=" + coreEvent.deltaX + ", deltaY=" + coreEvent.deltaY);
            //                        console.log("### drag end => " + JSON.stringify(newPosition));

            this.dragging = newPosition;
            break;
          }
      } // Get new XY


      var pos;

      if (this.renderRtl) {
        pos = this.calcXY(newPosition.top, newPosition.left);
      } else {
        pos = this.calcXY(newPosition.top, newPosition.left);
      }

      this.lastX = x;
      this.lastY = y;

      if (this.innerX !== pos.x || this.innerY !== pos.y) {
        this.$emit("move", this.i, pos.x, pos.y);
      }

      if (event.type === "dragend" && (this.previousX !== this.innerX || this.previousY !== this.innerY)) {
        this.$emit("moved", this.i, pos.x, pos.y);
      }

      this.eventBus.$emit("dragEvent", event.type, this.i, pos.x, pos.y, this.innerH, this.innerW);
    },
    calcPosition: function calcPosition(x, y, w, h) {
      var colWidth = this.calcColWidth(); // add rtl support

      var out;

      if (this.renderRtl) {
        out = {
          right: Math.round(colWidth * x + (x + 1) * this.margin[0]),
          top: Math.round(this.rowHeight * y + (y + 1) * this.margin[1]),
          // 0 * Infinity === NaN, which causes problems with resize constriants;
          // Fix this if it occurs.
          // Note we do it here rather than later because Math.round(Infinity) causes deopt
          width: w === Infinity ? w : Math.round(colWidth * w + Math.max(0, w - 1) * this.margin[0]),
          height: h === Infinity ? h : Math.round(this.rowHeight * h + Math.max(0, h - 1) * this.margin[1])
        };
      } else {
        out = {
          left: Math.round(colWidth * x + (x + 1) * this.margin[0]),
          top: Math.round(this.rowHeight * y + (y + 1) * this.margin[1]),
          // 0 * Infinity === NaN, which causes problems with resize constriants;
          // Fix this if it occurs.
          // Note we do it here rather than later because Math.round(Infinity) causes deopt
          width: w === Infinity ? w : Math.round(colWidth * w + Math.max(0, w - 1) * this.margin[0]),
          height: h === Infinity ? h : Math.round(this.rowHeight * h + Math.max(0, h - 1) * this.margin[1])
        };
      }

      return out;
    },

    /**
     * Translate x and y coordinates from pixels to grid units.
     * @param  {Number} top  Top position (relative to parent) in pixels.
     * @param  {Number} left Left position (relative to parent) in pixels.
     * @return {Object} x and y in grid units.
     */
    // TODO check if this function needs change in order to support rtl.
    calcXY: function calcXY(top, left) {
      var colWidth = this.calcColWidth(); // left = colWidth * x + margin * (x + 1)
      // l = cx + m(x+1)
      // l = cx + mx + m
      // l - m = cx + mx
      // l - m = x(c + m)
      // (l - m) / (c + m) = x
      // x = (left - margin) / (coldWidth + margin)

      var x = Math.round((left - this.margin[0]) / (colWidth + this.margin[0]));
      var y = Math.round((top - this.margin[1]) / (this.rowHeight + this.margin[1])); // Capping

      x = Math.max(Math.min(x, this.cols - this.innerW), 0);
      y = Math.max(Math.min(y, this.maxRows - this.innerH), 0);
      return {
        x: x,
        y: y
      };
    },
    // Helper for generating column width
    calcColWidth: function calcColWidth() {
      var colWidth = (this.containerWidth - this.margin[0] * (this.cols + 1)) / this.cols; // console.log("### COLS=" + this.cols + " COL WIDTH=" + colWidth + " MARGIN " + this.margin[0]);

      return colWidth;
    },

    /**
     * Given a height and width in pixel values, calculate grid units.
     * @param  {Number} height Height in pixels.
     * @param  {Number} width  Width in pixels.
     * @return {Object} w, h as grid units.
     */
    calcWH: function calcWH(height, width) {
      var colWidth = this.calcColWidth(); // width = colWidth * w - (margin * (w - 1))
      // ...
      // w = (width + margin) / (colWidth + margin)

      var w = Math.round((width + this.margin[0]) / (colWidth + this.margin[0]));
      var h = Math.round((height + this.margin[1]) / (this.rowHeight + this.margin[1])); // Capping

      w = Math.max(Math.min(w, this.cols - this.innerX), 0);
      h = Math.max(Math.min(h, this.maxRows - this.innerY), 0);
      return {
        w: w,
        h: h
      };
    },
    updateWidth: function updateWidth(width, colNum) {
      this.containerWidth = width;

      if (colNum !== undefined && colNum !== null) {
        this.cols = colNum;
      }
    },
    compact: function compact() {
      this.createStyle();
    },
    tryMakeDraggable: function tryMakeDraggable() {
      var self = this;

      if (this.interactObj === null || this.interactObj === undefined) {
        this.interactObj = interact(this.$refs.item);
      }

      if (this.draggable && !this.static) {
        var opts = {
          ignoreFrom: this.dragIgnoreFrom,
          allowFrom: this.dragAllowFrom
        };
        this.interactObj.draggable(opts);
        /*this.interactObj.draggable({allowFrom: '.vue-draggable-handle'});*/

        if (!this.dragEventSet) {
          this.dragEventSet = true;
          this.interactObj.on('dragstart dragmove dragend mousedown', function (event) {
            self.handleDrag(event);
          });
        }
      } else {
        this.interactObj.draggable({
          enabled: false
        });
      }
    },
    tryMakeResizable: function tryMakeResizable() {
      var self = this;

      if (this.interactObj === null || this.interactObj === undefined) {
        this.interactObj = interact(this.$refs.item);
      }

      if (this.resizable && !this.static) {
        var maximum = this.calcPosition(0, 0, this.maxW, this.maxH);
        var minimum = this.calcPosition(0, 0, this.minW, this.minH); // console.log("### MAX " + JSON.stringify(maximum));
        // console.log("### MIN " + JSON.stringify(minimum));

        var opts = {
          preserveAspectRatio: true,
          // allowFrom: "." + this.resizableHandleClass,
          edges: {
            left: false,
            right: "." + this.resizableHandleClass,
            bottom: "." + this.resizableHandleClass,
            top: false
          },
          ignoreFrom: this.resizeIgnoreFrom,
          restrictSize: {
            min: {
              height: minimum.height,
              width: minimum.width
            },
            max: {
              height: maximum.height,
              width: maximum.width
            }
          }
        };
        this.interactObj.resizable(opts);

        if (!this.resizeEventSet) {
          this.resizeEventSet = true;
          this.interactObj.on('resizestart resizemove resizeend', function (event) {
            self.handleResize(event);
          });
        }
      } else {
        this.interactObj.resizable({
          enabled: false
        });
      }
    },
    autoSize: function autoSize() {
      // ok here we want to calculate if a resize is needed
      this.previousW = this.innerW;
      this.previousH = this.innerH;
      var newSize = this.$slots.default[0].elm.getBoundingClientRect();
      var pos = this.calcWH(newSize.height, newSize.width);

      if (pos.w < this.minW) {
        pos.w = this.minW;
      }

      if (pos.w > this.maxW) {
        pos.w = this.maxW;
      }

      if (pos.h < this.minH) {
        pos.h = this.minH;
      }

      if (pos.h > this.maxH) {
        pos.h = this.maxH;
      }

      if (pos.h < 1) {
        pos.h = 1;
      }

      if (pos.w < 1) {
        pos.w = 1;
      } // this.lastW = x; // basically, this is copied from resizehandler, but shouldn't be needed
      // this.lastH = y;


      if (this.innerW !== pos.w || this.innerH !== pos.h) {
        this.$emit("resize", this.i, pos.h, pos.w, newSize.height, newSize.width);
      }

      if (this.previousW !== pos.w || this.previousH !== pos.h) {
        this.$emit("resized", this.i, pos.h, pos.w, newSize.height, newSize.width);
        this.eventBus.$emit("resizeEvent", "resizeend", this.i, this.innerX, this.innerY, pos.h, pos.w);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/GridItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GridItemvue_type_script_lang_js_ = (GridItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/GridItem.vue?vue&type=style&index=0&lang=css&
var GridItemvue_type_style_index_0_lang_css_ = __webpack_require__("5ed4");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/GridItem.vue






/* normalize component */

var component = normalizeComponent(
  components_GridItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var GridItem = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"d949dc60-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GridLayout.vue?vue&type=template&id=d45f16a0&
var GridLayoutvue_type_template_id_d45f16a0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"item",staticClass:"vue-grid-layout",style:(_vm.mergedStyle),on:{"drop":_vm.handleDropDone,"dragover":_vm.handleAllowDrop}},[_vm._t("default"),_c('grid-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.isDragging),expression:"isDragging"}],staticClass:"vue-grid-placeholder",attrs:{"x":_vm.placeholder.x,"y":_vm.placeholder.y,"w":_vm.placeholder.w,"h":_vm.placeholder.h,"i":_vm.placeholder.i}})],2)}
var GridLayoutvue_type_template_id_d45f16a0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/GridLayout.vue?vue&type=template&id=d45f16a0&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("8e6e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.is-finite.js
var es6_number_is_finite = __webpack_require__("fca0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("85f2");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./src/helpers/responsiveUtils.js




// @flow


/*:: import type {Layout} from './utils';*/

/*:: export type ResponsiveLayout = {lg?: Layout, md?: Layout, sm?: Layout, xs?: Layout, xxs?: Layout};*/

/*:: type Breakpoint = string;*/

/**
 * Given a width, find the highest breakpoint that matches is valid for it (width > breakpoint).
 *
 * @param  {Object} breakpoints Breakpoints object (e.g. {lg: 1200, md: 960, ...})
 * @param  {Number} width Screen width.
 * @return {String}       Highest breakpoint that is less than width.
 */

/*:: type Breakpoints = {lg?: number, md?: number, sm?: number, xs?: number, xxs?: number};*/

function getBreakpointFromWidth(breakpoints
/*: Breakpoints*/
, width
/*: number*/
)
/*: Breakpoint*/
{
  var sorted = sortBreakpoints(breakpoints);
  var matching = sorted[0];

  for (var i = 1, len = sorted.length; i < len; i++) {
    var breakpointName = sorted[i];
    if (width > breakpoints[breakpointName]) matching = breakpointName;
  }

  return matching;
}
/**
 * Given a breakpoint, get the # of cols set for it.
 * @param  {String} breakpoint Breakpoint name.
 * @param  {Object} cols       Map of breakpoints to cols.
 * @return {Number}            Number of cols.
 */

function getColsFromBreakpoint(breakpoint
/*: Breakpoint*/
, cols
/*: Breakpoints*/
)
/*: number*/
{
  if (!cols[breakpoint]) {
    throw new Error("ResponsiveGridLayout: `cols` entry for breakpoint " + breakpoint + " is missing!");
  }

  return cols[breakpoint];
}
/**
 * Given existing layouts and a new breakpoint, find or generate a new layout.
 *
 * This finds the layout above the new one and generates from it, if it exists.
 *
 * @param  {Array} orgLayout     Original layout.
 * @param  {Object} layouts     Existing layouts.
 * @param  {Array} breakpoints All breakpoints.
 * @param  {String} breakpoint New breakpoint.
 * @param  {String} breakpoint Last breakpoint (for fallback).
 * @param  {Number} cols       Column count at new breakpoint.
 * @param  {Boolean} verticalCompact Whether or not to compact the layout
 *   vertically.
 * @return {Array}             New layout.
 */

function findOrGenerateResponsiveLayout(orgLayout
/*: Layout*/
, layouts
/*: ResponsiveLayout*/
, breakpoints
/*: Breakpoints*/
, breakpoint
/*: Breakpoint*/
, lastBreakpoint
/*: Breakpoint*/
, cols
/*: number*/
, verticalCompact
/*: boolean*/
)
/*: Layout*/
{
  // If it already exists, just return it.
  if (layouts[breakpoint]) return cloneLayout(layouts[breakpoint]); // Find or generate the next layout

  var layout = orgLayout;
  var breakpointsSorted = sortBreakpoints(breakpoints);
  var breakpointsAbove = breakpointsSorted.slice(breakpointsSorted.indexOf(breakpoint));

  for (var i = 0, len = breakpointsAbove.length; i < len; i++) {
    var b = breakpointsAbove[i];

    if (layouts[b]) {
      layout = layouts[b];
      break;
    }
  }

  layout = cloneLayout(layout || []); // clone layout so we don't modify existing items

  return compact(correctBounds(layout, {
    cols: cols
  }), verticalCompact);
}
function generateResponsiveLayout(layout
/*: Layout*/
, breakpoints
/*: Breakpoints*/
, breakpoint
/*: Breakpoint*/
, lastBreakpoint
/*: Breakpoint*/
, cols
/*: number*/
, verticalCompact
/*: boolean*/
)
/*: Layout*/
{
  // If it already exists, just return it.

  /*if (layouts[breakpoint]) return cloneLayout(layouts[breakpoint]);
  // Find or generate the next layout
  let layout = layouts[lastBreakpoint];*/

  /*const breakpointsSorted = sortBreakpoints(breakpoints);
  const breakpointsAbove = breakpointsSorted.slice(breakpointsSorted.indexOf(breakpoint));
  for (let i = 0, len = breakpointsAbove.length; i < len; i++) {
  const b = breakpointsAbove[i];
  if (layouts[b]) {
    layout = layouts[b];
    break;
  }
  }*/
  layout = cloneLayout(layout || []); // clone layout so we don't modify existing items

  return compact(correctBounds(layout, {
    cols: cols
  }), verticalCompact);
}
/**
 * Given breakpoints, return an array of breakpoints sorted by width. This is usually
 * e.g. ['xxs', 'xs', 'sm', ...]
 *
 * @param  {Object} breakpoints Key/value pair of breakpoint names to widths.
 * @return {Array}              Sorted breakpoints.
 */

function sortBreakpoints(breakpoints
/*: Breakpoints*/
)
/*: Array<Breakpoint>*/
{
  var keys
  /*: Array<string>*/
  = Object.keys(breakpoints);
  return keys.sort(function (a, b) {
    return breakpoints[a] - breakpoints[b];
  });
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GridLayout.vue?vue&type=script&lang=js&








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var elementResizeDetectorMaker = __webpack_require__("eec4");


 //var eventBus = require('./eventBus');



/* harmony default export */ var GridLayoutvue_type_script_lang_js_ = ({
  name: "GridLayout",
  provide: function provide() {
    return {
      eventBus: null
    };
  },
  components: {
    GridItem: GridItem
  },
  props: {
    // If true, the container height swells and contracts to fit contents
    autoSize: {
      type: Boolean,
      default: true
    },
    colNum: {
      type: Number,
      default: 12
    },
    rowHeight: {
      type: Number,
      default: 150
    },
    maxRows: {
      type: Number,
      default: Infinity
    },
    margin: {
      type: Array,
      default: function _default() {
        return [10, 10];
      }
    },
    isDraggable: {
      type: Boolean,
      default: true
    },
    isResizable: {
      type: Boolean,
      default: true
    },
    isMirrored: {
      type: Boolean,
      default: false
    },
    useCssTransforms: {
      type: Boolean,
      default: true
    },
    verticalCompact: {
      type: Boolean,
      default: true
    },
    layout: {
      type: Array,
      required: true
    },
    responsive: {
      type: Boolean,
      default: false
    },
    breakpoints: {
      type: Object,
      default: function _default() {
        return {
          lg: 1200,
          md: 996,
          sm: 768,
          xs: 480,
          xxs: 0
        };
      }
    },
    cols: {
      type: Object,
      default: function _default() {
        return {
          lg: 12,
          md: 10,
          sm: 6,
          xs: 4,
          xxs: 2
        };
      }
    },
    preventCollision: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      width: null,
      mergedStyle: {},
      lastLayoutLength: 0,
      isDragging: false,
      placeholder: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        i: -1
      },
      layouts: {},
      // array to store all layouts from different breakpoints
      lastBreakpoint: null,
      // store last active breakpoint
      originalLayout: null // store original Layout

    };
  },
  created: function created() {
    var self = this; // Accessible refernces of functions for removing in beforeDestroy

    self.resizeEventHandler = function (eventType, i, x, y, h, w) {
      self.resizeEvent(eventType, i, x, y, h, w);
    };

    self.dragEventHandler = function (eventType, i, x, y, h, w) {
      self.dragEvent(eventType, i, x, y, h, w);
    };

    self._provided.eventBus = new external_commonjs_vue_commonjs2_vue_root_Vue_default.a();
    self.eventBus = self._provided.eventBus;
    self.eventBus.$on('resizeEvent', self.resizeEventHandler);
    self.eventBus.$on('dragEvent', self.dragEventHandler);
    self.eventBus.$on('active', self.activeHandler);
    self.$emit('layout-created', self.layout);
  },
  beforeDestroy: function beforeDestroy() {
    //Remove listeners
    this.eventBus.$off('resizeEvent', this.resizeEventHandler);
    this.eventBus.$off('dragEvent', this.dragEventHandler);
    this.eventBus.$off('active', this.activeHandler);
    this.eventBus.$destroy();
    removeWindowEventListener("resize", this.onWindowResize);
    this.erd.uninstall(this.$refs.item);
  },
  beforeMount: function beforeMount() {
    this.$emit('layout-before-mount', this.layout);
  },
  mounted: function mounted() {
    this.$emit('layout-mounted', this.layout);
    this.$nextTick(function () {
      validateLayout(this.layout);
      this.originalLayout = this.layout;
      var self = this;
      this.$nextTick(function () {
        self.onWindowResize();
        self.initResponsiveFeatures(); //self.width = self.$el.offsetWidth;

        addWindowEventListener('resize', self.onWindowResize);
        compact(self.layout, self.verticalCompact);
        self.updateHeight();
        self.$nextTick(function () {
          this.erd = elementResizeDetectorMaker({
            strategy: "scroll",
            //<- For ultra performance.
            // See https://github.com/wnr/element-resize-detector/issues/110 about callOnAdd.
            callOnAdd: false
          });
          this.erd.listenTo(self.$refs.item, function () {
            self.onWindowResize();
          });
        });
      });
    });
  },
  watch: {
    width: function width(newval, oldval) {
      var self = this;
      this.$nextTick(function () {
        var _this = this;

        //this.$broadcast("updateWidth", this.width);
        this.eventBus.$emit("updateWidth", this.width);

        if (oldval === null) {
          /*
              If oldval == null is when the width has never been
              set before. That only occurs when mouting is
              finished, and onWindowResize has been called and
              this.width has been changed the first time after it
              got set to null in the constructor. It is now time
              to issue layout-ready events as the GridItems have
              their sizes configured properly.
               The reason for emitting the layout-ready events on
              the next tick is to allow for the newly-emitted
              updateWidth event (above) to have reached the
              children GridItem-s and had their effect, so we're
              sure that they have the final size before we emit
              layout-ready (for this GridLayout) and
              item-layout-ready (for the GridItem-s).
               This way any client event handlers can reliably
              invistigate stable sizes of GridItem-s.
          */
          this.$nextTick(function () {
            _this.$emit('layout-ready', self.layout);
          });
        }

        this.updateHeight();
      });
    },
    layout: function layout() {
      for (var i = 0; i < this.layout.length; i++) {
        var item = this.layout[i];

        if (i === this.layout.length - 1) {
          item.active = true;
          this.$emit('layout-active', item);
          continue;
        }

        item.active = false;
      }

      this.layoutUpdate();
    },
    colNum: function colNum(val) {
      this.eventBus.$emit("setColNum", val);
    },
    rowHeight: function rowHeight() {
      this.eventBus.$emit("setRowHeight", this.rowHeight);
    },
    isDraggable: function isDraggable() {
      this.eventBus.$emit("setDraggable", this.isDraggable);
    },
    isResizable: function isResizable() {
      this.eventBus.$emit("setResizable", this.isResizable);
    },
    responsive: function responsive() {
      if (!this.responsive) {
        this.$emit('update:layout', this.originalLayout);
        this.eventBus.$emit("setColNum", this.colNum);
      }

      this.onWindowResize();
    },
    maxRows: function maxRows() {
      this.eventBus.$emit("setMaxRows", this.maxRows);
    }
  },
  methods: {
    handleAllowDrop: function handleAllowDrop(event) {
      event.preventDefault();
      this.$emit('layout-over', event);
    },
    handleDropDone: function handleDropDone(event) {
      this.$emit('layout-drop', event);
    },
    activeHandler: function activeHandler(id) {
      for (var i = 0; i < this.layout.length; i++) {
        var item = this.layout[i];

        if (item.i === id) {
          item.active = true;
          this.$emit('layout-active', item);
          continue;
        }

        item.active = false;
      }
    },
    layoutUpdate: function layoutUpdate() {
      if (this.layout !== undefined && this.originalLayout !== null) {
        if (this.layout.length !== this.originalLayout.length) {
          // console.log("### LAYOUT UPDATE!", this.layout.length, this.originalLayout.length);
          var diff = this.findDifference(this.layout, this.originalLayout);

          if (diff.length > 0) {
            // console.log(diff);
            if (this.layout.length > this.originalLayout.length) {
              this.originalLayout = this.originalLayout.concat(diff);
            } else {
              this.originalLayout = this.originalLayout.filter(function (obj) {
                return !diff.some(function (obj2) {
                  return obj.i === obj2.i;
                });
              });
            }
          }

          this.lastLayoutLength = this.layout.length;
          this.initResponsiveFeatures();
        }

        compact(this.layout, this.verticalCompact);
        this.eventBus.$emit("updateWidth", this.width);
        this.updateHeight();
      }
    },
    updateHeight: function updateHeight() {
      this.mergedStyle = {
        height: this.containerHeight()
      };
    },
    onWindowResize: function onWindowResize() {
      if (this.$refs !== null && this.$refs.item !== null && this.$refs.item !== undefined) {
        this.width = this.$refs.item.offsetWidth;
      }

      this.eventBus.$emit("resizeEvent");
    },
    containerHeight: function containerHeight() {
      if (!this.autoSize) return;
      return bottom(this.layout) * (this.rowHeight + this.margin[1]) + this.margin[1] + 'px';
    },
    dragEvent: function dragEvent(eventName, id, x, y, h, w) {
      //console.log(eventName + " id=" + id + ", x=" + x + ", y=" + y);
      var l = getLayoutItem(this.layout, id); //GetLayoutItem sometimes returns null object

      if (l === undefined || l === null) {
        l = {
          x: 0,
          y: 0
        };
      }

      if (eventName === "dragmove" || eventName === "dragstart") {
        this.placeholder.i = id;
        this.placeholder.x = l.x;
        this.placeholder.y = l.y;
        this.placeholder.w = w;
        this.placeholder.h = h;
        this.$nextTick(function () {
          this.isDragging = true;
        }); //this.$broadcast("updateWidth", this.width);

        this.eventBus.$emit("updateWidth", this.width);
      } else {
        this.$nextTick(function () {
          this.isDragging = false;
        });
      } // Move the element to the dragged location.


      this.layout = moveElement(this.layout, l, x, y, true, this.preventCollision);
      compact(this.layout, this.verticalCompact); // needed because vue can't detect changes on array element properties

      this.eventBus.$emit("compact");
      this.updateHeight();
      if (eventName === 'dragend') this.$emit('layout-updated', this.layout);
    },
    resizeEvent: function resizeEvent(eventName, id, x, y, h, w) {
      var l = getLayoutItem(this.layout, id); //GetLayoutItem sometimes return null object

      if (l === undefined || l === null) {
        l = {
          h: 0,
          w: 0
        };
      }

      var hasCollisions;

      if (this.preventCollision) {
        var collisions = getAllCollisions(this.layout, _objectSpread({}, l, {
          w: w,
          h: h
        })).filter(function (layoutItem) {
          return layoutItem.i !== l.i;
        });
        hasCollisions = collisions.length > 0; // If we're colliding, we need adjust the placeholder.

        if (hasCollisions) {
          // adjust w && h to maximum allowed space
          var leastX = Infinity,
              leastY = Infinity;
          collisions.forEach(function (layoutItem) {
            if (layoutItem.x > l.x) leastX = Math.min(leastX, layoutItem.x);
            if (layoutItem.y > l.y) leastY = Math.min(leastY, layoutItem.y);
          });
          if (Number.isFinite(leastX)) l.w = leastX - l.x;
          if (Number.isFinite(leastY)) l.h = leastY - l.y;
        }
      }

      if (!hasCollisions) {
        // Set new width and height.
        l.w = w;
        l.h = h;
      }

      if (eventName === "resizestart" || eventName === "resizemove") {
        this.placeholder.i = id;
        this.placeholder.x = x;
        this.placeholder.y = y;
        this.placeholder.w = l.w;
        this.placeholder.h = l.h;
        this.$nextTick(function () {
          this.isDragging = true;
        }); //this.$broadcast("updateWidth", this.width);

        this.eventBus.$emit("updateWidth", this.width);
      } else {
        this.$nextTick(function () {
          this.isDragging = false;
        });
      }

      if (this.responsive) this.responsiveGridLayout();
      compact(this.layout, this.verticalCompact);
      this.eventBus.$emit("compact");
      this.updateHeight();
      if (eventName === 'resizeend') this.$emit('layout-updated', this.layout);
    },
    // finds or generates new layouts for set breakpoints
    responsiveGridLayout: function responsiveGridLayout() {
      var newBreakpoint = getBreakpointFromWidth(this.breakpoints, this.width);
      var newCols = getColsFromBreakpoint(newBreakpoint, this.cols); // save actual layout in layouts

      if (this.lastBreakpoint != null && !this.layouts[this.lastBreakpoint]) this.layouts[this.lastBreakpoint] = cloneLayout(this.layout); // Find or generate a new layout.

      var layout = findOrGenerateResponsiveLayout(this.originalLayout, this.layouts, this.breakpoints, newBreakpoint, this.lastBreakpoint, newCols, this.verticalCompact); // Store the new layout.

      this.layouts[newBreakpoint] = layout; // new prop sync

      this.$emit('update:layout', layout);
      this.lastBreakpoint = newBreakpoint;
      this.eventBus.$emit("setColNum", getColsFromBreakpoint(newBreakpoint, this.cols));
    },
    // clear all responsive layouts
    initResponsiveFeatures: function initResponsiveFeatures() {
      // clear layouts
      this.layouts = {};
    },
    // find difference in layouts
    findDifference: function findDifference(layout, originalLayout) {
      //Find values that are in result1 but not in result2
      var uniqueResultOne = layout.filter(function (obj) {
        return !originalLayout.some(function (obj2) {
          return obj.i === obj2.i;
        });
      }); //Find values that are in result2 but not in result1

      var uniqueResultTwo = originalLayout.filter(function (obj) {
        return !layout.some(function (obj2) {
          return obj.i === obj2.i;
        });
      }); //Combine the two arrays of unique entries#

      return uniqueResultOne.concat(uniqueResultTwo);
    }
  }
});
// CONCATENATED MODULE: ./src/components/GridLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GridLayoutvue_type_script_lang_js_ = (GridLayoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/GridLayout.vue?vue&type=style&index=0&lang=css&
var GridLayoutvue_type_style_index_0_lang_css_ = __webpack_require__("e279");

// CONCATENATED MODULE: ./src/components/GridLayout.vue






/* normalize component */

var GridLayout_component = normalizeComponent(
  components_GridLayoutvue_type_script_lang_js_,
  GridLayoutvue_type_template_id_d45f16a0_render,
  GridLayoutvue_type_template_id_d45f16a0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var GridLayout = (GridLayout_component.exports);
// CONCATENATED MODULE: ./src/components/index.js






 // import ResponsiveGridLayout from './ResponsiveGridLayout.vue';

var VueGridLayout = {
  // ResponsiveGridLayout,
  GridLayout: GridLayout,
  GridItem: GridItem
}; // module.exports = VueGridLayout;

Object.keys(VueGridLayout).forEach(function (name) {
  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component(name, VueGridLayout[name]);
});
/* harmony default export */ var components = (VueGridLayout);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport GridLayout */__webpack_require__.d(__webpack_exports__, "GridLayout", function() { return GridLayout; });
/* concated harmony reexport GridItem */__webpack_require__.d(__webpack_exports__, "GridItem", function() { return GridItem; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components);



/***/ }),

/***/ "fca0":
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__("5ca1");
var _isFinite = __webpack_require__("7726").isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vue-grid-layout.umd.js.map
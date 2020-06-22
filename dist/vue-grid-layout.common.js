module.exports =
/******/ (function(modules) { // webpackBootstrap
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

            if(!object) {
                throw new Error("Element is not detectable by this strategy.");
            }

            object.contentDocument.defaultView.addEventListener("resize", listenerProxy);
        }
    }

    function buildCssTextString(rules) {
        var seperator = options.important ? " !important; " : "; ";

        return (rules.join(seperator) + seperator).trim();
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
            var OBJECT_STYLE = buildCssTextString(["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none"]);

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
                        element.style.setProperty("position", "relative", options.important ? "important" : "");

                        var removeRelativeStyles = function(reporter, element, style, property) {
                            function getNumericalValue(value) {
                                return value.replace(/[^-\d\.]/g, "");
                            }

                            var value = style[property];

                            if(value !== "auto" && getNumericalValue(value) !== "0") {
                                reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element);
                                element.style.setProperty(property, "0", options.important ? "important" : "");
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
                            var state = getState(element);
                            if (state.checkForObjectDocumentTimeoutId) {
                                window.clearTimeout(state.checkForObjectDocumentTimeoutId);
                            }
                            state.checkForObjectDocumentTimeoutId = setTimeout(function checkForObjectDocument() {
                                state.checkForObjectDocumentTimeoutId = 0;
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

                if (!getState(element)) {
                    // The element has been uninstalled before the actual loading happened.
                    return;
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
        if (!getState(element)) {
            return;
        }

        var object = getObject(element);

        if (!object) {
            return;
        }

        if (browserDetector.isIE(8)) {
            element.detachEvent("onresize", object.proxy);
        } else {
            element.removeChild(object);
        }

        if (getState(element).checkForObjectDocumentTimeoutId) {
            window.clearTimeout(getState(element).checkForObjectDocumentTimeoutId);
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

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

/* interact.js 1.9.19 | https://raw.github.com/taye/interact.js/master/LICENSE */
!function(t){if(true)module.exports=t();else {}}((function(){var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(t){return!(!t||!t.Window)&&t instanceof t.Window};var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.init=r,e.getWindow=o,e.default=void 0;var n={realWindow:void 0,window:void 0,getWindow:o,init:r};function r(t){n.realWindow=t;var e=t.document.createTextNode("");e.ownerDocument!==t.document&&"function"==typeof t.wrap&&t.wrap(e)===e&&(t=t.wrap(t)),n.window=t}function o(e){return(0,t.default)(e)?e:(e.ownerDocument||e).defaultView||n.window}"undefined"==typeof window?(n.window=void 0,n.realWindow=void 0):r(window),n.init=r;var i=n;e.default=i;var a={};function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=function(t){return!!t&&"object"===s(t)},u=function(t){return"function"==typeof t},c={window:function(n){return n===e.default.window||(0,t.default)(n)},docFrag:function(t){return l(t)&&11===t.nodeType},object:l,func:u,number:function(t){return"number"==typeof t},bool:function(t){return"boolean"==typeof t},string:function(t){return"string"==typeof t},element:function(t){if(!t||"object"!==s(t))return!1;var n=e.default.getWindow(t)||e.default.window;return/object|function/.test(s(n.Element))?t instanceof n.Element:1===t.nodeType&&"string"==typeof t.nodeName},plainObject:function(t){return l(t)&&!!t.constructor&&/function Object\b/.test(t.constructor.toString())},array:function(t){return l(t)&&void 0!==t.length&&u(t.splice)}};a.default=c;var f={};function d(t){var e=t.interaction;if("drag"===e.prepared.name){var n=e.prepared.axis;"x"===n?(e.coords.cur.page.y=e.coords.start.page.y,e.coords.cur.client.y=e.coords.start.client.y,e.coords.velocity.client.y=0,e.coords.velocity.page.y=0):"y"===n&&(e.coords.cur.page.x=e.coords.start.page.x,e.coords.cur.client.x=e.coords.start.client.x,e.coords.velocity.client.x=0,e.coords.velocity.page.x=0)}}function p(t){var e=t.iEvent,n=t.interaction;if("drag"===n.prepared.name){var r=n.prepared.axis;if("x"===r||"y"===r){var o="x"===r?"y":"x";e.page[o]=n.coords.start.page[o],e.client[o]=n.coords.start.client[o],e.delta[o]=0}}}Object.defineProperty(f,"__esModule",{value:!0}),f.default=void 0;var v={id:"actions/drag",install:function(t){var e=t.actions,n=t.Interactable,r=t.defaults;n.prototype.draggable=v.draggable,e.map.drag=v,e.methodDict.drag="draggable",r.actions.drag=v.defaults},listeners:{"interactions:before-action-move":d,"interactions:action-resume":d,"interactions:action-move":p,"auto-start:check":function(t){var e=t.interaction,n=t.interactable,r=t.buttons,o=n.options.drag;if(o&&o.enabled&&(!e.pointerIsDown||!/mouse|pointer/.test(e.pointerType)||0!=(r&n.options.drag.mouseButtons)))return t.action={name:"drag",axis:"start"===o.lockAxis?o.startAxis:o.lockAxis},!1}},draggable:function(t){return a.default.object(t)?(this.options.drag.enabled=!1!==t.enabled,this.setPerAction("drag",t),this.setOnEvents("drag",t),/^(xy|x|y|start)$/.test(t.lockAxis)&&(this.options.drag.lockAxis=t.lockAxis),/^(xy|x|y)$/.test(t.startAxis)&&(this.options.drag.startAxis=t.startAxis),this):a.default.bool(t)?(this.options.drag.enabled=t,this):this.options.drag},beforeMove:d,move:p,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"}},h=v;f.default=h;var g={};Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var y={init:function(t){var e=t;y.document=e.document,y.DocumentFragment=e.DocumentFragment||m,y.SVGElement=e.SVGElement||m,y.SVGSVGElement=e.SVGSVGElement||m,y.SVGElementInstance=e.SVGElementInstance||m,y.Element=e.Element||m,y.HTMLElement=e.HTMLElement||y.Element,y.Event=e.Event,y.Touch=e.Touch||m,y.PointerEvent=e.PointerEvent||e.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function m(){}var b=y;g.default=b;var x={};Object.defineProperty(x,"__esModule",{value:!0}),x.default=void 0;var w={init:function(t){var n=g.default.Element,r=e.default.window.navigator;w.supportsTouch="ontouchstart"in t||a.default.func(t.DocumentTouch)&&g.default.document instanceof t.DocumentTouch,w.supportsPointerEvent=!1!==r.pointerEnabled&&!!g.default.PointerEvent,w.isIOS=/iP(hone|od|ad)/.test(r.platform),w.isIOS7=/iP(hone|od|ad)/.test(r.platform)&&/OS 7[^\d]/.test(r.appVersion),w.isIe9=/MSIE 9/.test(r.userAgent),w.isOperaMobile="Opera"===r.appName&&w.supportsTouch&&/Presto/.test(r.userAgent),w.prefixedMatchesSelector="matches"in n.prototype?"matches":"webkitMatchesSelector"in n.prototype?"webkitMatchesSelector":"mozMatchesSelector"in n.prototype?"mozMatchesSelector":"oMatchesSelector"in n.prototype?"oMatchesSelector":"msMatchesSelector",w.pEventTypes=w.supportsPointerEvent?g.default.PointerEvent===t.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,w.wheelEvent="onmousewheel"in g.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null};var _=w;x.default=_;var S={};function P(t){var e=t.parentNode;if(a.default.docFrag(e)){for(;(e=e.host)&&a.default.docFrag(e););return e}return e}function O(t,n){return e.default.window!==e.default.realWindow&&(n=n.replace(/\/deep\//g," ")),t[x.default.prefixedMatchesSelector](n)}Object.defineProperty(S,"__esModule",{value:!0}),S.nodeContains=function(t,e){for(;e;){if(e===t)return!0;e=e.parentNode}return!1},S.closest=function(t,e){for(;a.default.element(t);){if(O(t,e))return t;t=P(t)}return null},S.parentNode=P,S.matchesSelector=O,S.indexOfDeepestElement=function(t){for(var n,r=[],o=0;o<t.length;o++){var i=t[o],a=t[n];if(i&&o!==n)if(a){var s=E(i),l=E(a);if(s!==i.ownerDocument)if(l!==i.ownerDocument)if(s!==l){r=r.length?r:T(a);var u=void 0;if(a instanceof g.default.HTMLElement&&i instanceof g.default.SVGElement&&!(i instanceof g.default.SVGSVGElement)){if(i===l)continue;u=i.ownerSVGElement}else u=i;for(var c=T(u,a.ownerDocument),f=0;c[f]&&c[f]===r[f];)f++;for(var d=[c[f-1],c[f],r[f]],p=d[0].lastChild;p;){if(p===d[1]){n=o,r=c;break}if(p===d[2])break;p=p.previousSibling}}else v=i,h=a,y=void 0,m=void 0,y=parseInt((0,e.getWindow)(v).getComputedStyle(v).zIndex,10)||0,m=parseInt((0,e.getWindow)(h).getComputedStyle(h).zIndex,10)||0,y>=m&&(n=o);else n=o}else n=o}var v,h,y,m;return n},S.matchesUpTo=function(t,e,n){for(;a.default.element(t);){if(O(t,e))return!0;if((t=P(t))===n)return O(t,e)}return!1},S.getActualElement=function(t){return t instanceof g.default.SVGElementInstance?t.correspondingUseElement:t},S.getScrollXY=M,S.getElementClientRect=j,S.getElementRect=function(t){var n=j(t);if(!x.default.isIOS7&&n){var r=M(e.default.getWindow(t));n.left+=r.x,n.right+=r.x,n.top+=r.y,n.bottom+=r.y}return n},S.getPath=function(t){var e=[];for(;t;)e.push(t),t=P(t);return e},S.trySelector=function(t){if(!a.default.string(t))return!1;return g.default.document.querySelector(t),!0};var E=function(t){return t.parentNode||t.host};function T(t,e){for(var n,r=[],o=t;(n=E(o))&&o!==e&&n!==o.ownerDocument;)r.unshift(o),o=n;return r}function M(t){return{x:(t=t||e.default.window).scrollX||t.document.documentElement.scrollLeft,y:t.scrollY||t.document.documentElement.scrollTop}}function j(t){var e=t instanceof g.default.SVGElement?t.getBoundingClientRect():t.getClientRects()[0];return e&&{left:e.left,right:e.right,top:e.top,bottom:e.bottom,width:e.width||e.right-e.left,height:e.height||e.bottom-e.top}}var k={};Object.defineProperty(k,"__esModule",{value:!0}),k.default=function(t,e){for(var n in e)t[n]=e[n];return t};var I={};function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function A(t,e,n){return"parent"===t?(0,S.parentNode)(n):"self"===t?e.getRect(n):(0,S.closest)(n,t)}Object.defineProperty(I,"__esModule",{value:!0}),I.getStringOptionResult=A,I.resolveRectLike=function(t,e,n,r){var o=t;a.default.string(o)?o=A(o,e,n):a.default.func(o)&&(o=o.apply(void 0,function(t){if(Array.isArray(t))return D(t)}(i=r)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(i)||function(t,e){if(t){if("string"==typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(t,e):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));var i;a.default.element(o)&&(o=(0,S.getElementRect)(o));return o},I.rectToXY=function(t){return t&&{x:"x"in t?t.x:t.left,y:"y"in t?t.y:t.top}},I.xywhToTlbr=function(t){!t||"left"in t&&"top"in t||((t=(0,k.default)({},t)).left=t.x||0,t.top=t.y||0,t.right=t.right||t.left+t.width,t.bottom=t.bottom||t.top+t.height);return t},I.tlbrToXywh=function(t){!t||"x"in t&&"y"in t||((t=(0,k.default)({},t)).x=t.left||0,t.y=t.top||0,t.width=t.width||(t.right||0)-t.x,t.height=t.height||(t.bottom||0)-t.y);return t},I.addEdges=function(t,e,n){t.left&&(e.left+=n.x);t.right&&(e.right+=n.x);t.top&&(e.top+=n.y);t.bottom&&(e.bottom+=n.y);e.width=e.right-e.left,e.height=e.bottom-e.top};var z={};Object.defineProperty(z,"__esModule",{value:!0}),z.default=function(t,e,n){var r=t.options[n],o=r&&r.origin||t.options.origin,i=(0,I.resolveRectLike)(o,t,e,[t&&e]);return(0,I.rectToXY)(i)||{x:0,y:0}};var C={};function R(t){return t.trim().split(/ +/)}Object.defineProperty(C,"__esModule",{value:!0}),C.default=function t(e,n,r){r=r||{},a.default.string(e)&&-1!==e.search(" ")&&(e=R(e));if(a.default.array(e))return e.reduce((function(e,o){return(0,k.default)(e,t(o,n,r))}),r);a.default.object(e)&&(n=e,e="");if(a.default.func(n))r[e]=r[e]||[],r[e].push(n);else if(a.default.array(n))for(var o=0;o<n.length;o++){var i;i=n[o],t(e,i,r)}else if(a.default.object(n))for(var s in n){var l=R(s).map((function(t){return"".concat(e).concat(t)}));t(l,n[s],r)}return r};var F={};Object.defineProperty(F,"__esModule",{value:!0}),F.default=void 0;F.default=function(t,e){return Math.sqrt(t*t+e*e)};var X={};function Y(t,e){for(var n in e){var r=Y.prefixedPropREs,o=!1;for(var i in r)if(0===n.indexOf(i)&&r[i].test(n)){o=!0;break}o||"function"==typeof e[n]||(t[n]=e[n])}return t}Object.defineProperty(X,"__esModule",{value:!0}),X.default=void 0,Y.prefixedPropREs={webkit:/(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,moz:/(Pressure)$/};var W=Y;X.default=W;var L={};function B(t){return t instanceof g.default.Event||t instanceof g.default.Touch}function U(t,e,n){return t=t||"page",(n=n||{}).x=e[t+"X"],n.y=e[t+"Y"],n}function V(t,e){return e=e||{x:0,y:0},x.default.isOperaMobile&&B(t)?(U("screen",t,e),e.x+=window.scrollX,e.y+=window.scrollY):U("page",t,e),e}function q(t,e){return e=e||{},x.default.isOperaMobile&&B(t)?U("screen",t,e):U("client",t,e),e}function N(t){var e=[];return a.default.array(t)?(e[0]=t[0],e[1]=t[1]):"touchend"===t.type?1===t.touches.length?(e[0]=t.touches[0],e[1]=t.changedTouches[0]):0===t.touches.length&&(e[0]=t.changedTouches[0],e[1]=t.changedTouches[1]):(e[0]=t.touches[0],e[1]=t.touches[1]),e}function G(t){for(var e={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},n=0;n<t.length;n++){var r=t[n];for(var o in e)e[o]+=r[o]}for(var i in e)e[i]/=t.length;return e}Object.defineProperty(L,"__esModule",{value:!0}),L.copyCoords=function(t,e){t.page=t.page||{},t.page.x=e.page.x,t.page.y=e.page.y,t.client=t.client||{},t.client.x=e.client.x,t.client.y=e.client.y,t.timeStamp=e.timeStamp},L.setCoordDeltas=function(t,e,n){t.page.x=n.page.x-e.page.x,t.page.y=n.page.y-e.page.y,t.client.x=n.client.x-e.client.x,t.client.y=n.client.y-e.client.y,t.timeStamp=n.timeStamp-e.timeStamp},L.setCoordVelocity=function(t,e){var n=Math.max(e.timeStamp/1e3,.001);t.page.x=e.page.x/n,t.page.y=e.page.y/n,t.client.x=e.client.x/n,t.client.y=e.client.y/n,t.timeStamp=n},L.setZeroCoords=function(t){t.page.x=0,t.page.y=0,t.client.x=0,t.client.y=0},L.isNativePointer=B,L.getXY=U,L.getPageXY=V,L.getClientXY=q,L.getPointerId=function(t){return a.default.number(t.pointerId)?t.pointerId:t.identifier},L.setCoords=function(t,e,n){var r=e.length>1?G(e):e[0],o={};V(r,o),t.page.x=o.x,t.page.y=o.y,q(r,o),t.client.x=o.x,t.client.y=o.y,t.timeStamp=n},L.getTouchPair=N,L.pointerAverage=G,L.touchBBox=function(t){if(!(t.length||t.touches&&t.touches.length>1))return null;var e=N(t),n=Math.min(e[0].pageX,e[1].pageX),r=Math.min(e[0].pageY,e[1].pageY),o=Math.max(e[0].pageX,e[1].pageX),i=Math.max(e[0].pageY,e[1].pageY);return{x:n,y:r,left:n,top:r,right:o,bottom:i,width:o-n,height:i-r}},L.touchDistance=function(t,e){var n=e+"X",r=e+"Y",o=N(t),i=o[0][n]-o[1][n],a=o[0][r]-o[1][r];return(0,F.default)(i,a)},L.touchAngle=function(t,e){var n=e+"X",r=e+"Y",o=N(t),i=o[1][n]-o[0][n],a=o[1][r]-o[0][r];return 180*Math.atan2(a,i)/Math.PI},L.getPointerType=function(t){return a.default.string(t.pointerType)?t.pointerType:a.default.number(t.pointerType)?[void 0,void 0,"touch","pen","mouse"][t.pointerType]:/touch/.test(t.type)||t instanceof g.default.Touch?"touch":"mouse"},L.getEventTargets=function(t){var e=a.default.func(t.composedPath)?t.composedPath():t.path;return[S.getActualElement(e?e[0]:t.target),S.getActualElement(t.currentTarget)]},L.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},L.coordsToEvent=function(t){return{coords:t,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}},Object.defineProperty(L,"pointerExtend",{enumerable:!0,get:function(){return X.default}});var $={};function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty($,"__esModule",{value:!0}),$.default=$.BaseEvent=void 0;var K=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.type=void 0,this.target=void 0,this.currentTarget=void 0,this.interactable=void 0,this._interaction=void 0,this.timeStamp=void 0,this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=e}var e,n,r;return e=t,(n=[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&H(e.prototype,n),r&&H(e,r),t}();$.BaseEvent=K,Object.defineProperty(K.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var Z=K;$.default=Z;var J={};Object.defineProperty(J,"__esModule",{value:!0}),J.find=J.findIndex=J.from=J.merge=J.remove=J.contains=void 0;J.contains=function(t,e){return-1!==t.indexOf(e)};J.remove=function(t,e){return t.splice(t.indexOf(e),1)};var Q=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];t.push(r)}return t};J.merge=Q;J.from=function(t){return Q([],t)};var tt=function(t,e){for(var n=0;n<t.length;n++)if(e(t[n],n,t))return n;return-1};J.findIndex=tt;J.find=function(t,e){return t[tt(t,e)]};var et={};function nt(t){return(nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function rt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ot(t,e){return(ot=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function it(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=st(t);if(e){var o=st(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return at(this,n)}}function at(t,e){return!e||"object"!==nt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function st(t){return(st=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(et,"__esModule",{value:!0}),et.DropEvent=void 0;var lt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ot(t,e)}(i,t);var e,n,r,o=it(i);function i(t,e,n){var r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,e._interaction)).target=void 0,r.dropzone=void 0,r.dragEvent=void 0,r.relatedTarget=void 0,r.draggable=void 0,r.timeStamp=void 0,r.propagationStopped=!1,r.immediatePropagationStopped=!1;var a="dragleave"===n?t.prev:t.cur,s=a.element,l=a.dropzone;return r.type=n,r.target=s,r.currentTarget=s,r.dropzone=l,r.dragEvent=e,r.relatedTarget=e.target,r.draggable=e.interactable,r.timeStamp=e.timeStamp,r}return e=i,(n=[{key:"reject",value:function(){var t=this,e=this._interaction.dropState;if("dropactivate"===this.type||this.dropzone&&e.cur.dropzone===this.dropzone&&e.cur.element===this.target)if(e.prev.dropzone=this.dropzone,e.prev.element=this.target,e.rejected=!0,e.events.enter=null,this.stopImmediatePropagation(),"dropactivate"===this.type){var n=e.activeDrops,r=J.findIndex(n,(function(e){var n=e.dropzone,r=e.element;return n===t.dropzone&&r===t.target}));e.activeDrops.splice(r,1);var o=new i(e,this.dragEvent,"dropdeactivate");o.dropzone=this.dropzone,o.target=this.target,this.dropzone.fire(o)}else this.dropzone.fire(new i(e,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&rt(e.prototype,n),r&&rt(e,r),i}($.BaseEvent);et.DropEvent=lt;var ut={};function ct(t,e){for(var n=0;n<t.slice().length;n++){var r=t.slice()[n],o=r.dropzone,i=r.element;e.dropzone=o,e.target=i,o.fire(e),e.propagationStopped=e.immediatePropagationStopped=!1}}function ft(t,e){for(var n=function(t,e){for(var n=t.interactables,r=[],o=0;o<n.list.length;o++){var i=n.list[o];if(i.options.drop.enabled){var s=i.options.drop.accept;if(!(a.default.element(s)&&s!==e||a.default.string(s)&&!S.matchesSelector(e,s)||a.default.func(s)&&!s({dropzone:i,draggableElement:e})))for(var l=a.default.string(i.target)?i._context.querySelectorAll(i.target):a.default.array(i.target)?i.target:[i.target],u=0;u<l.length;u++){var c=l[u];c!==e&&r.push({dropzone:i,element:c})}}}return r}(t,e),r=0;r<n.length;r++){var o=n[r];o.rect=o.dropzone.getRect(o.element)}return n}function dt(t,e,n){for(var r=t.dropState,o=t.interactable,i=t.element,a=[],s=0;s<r.activeDrops.length;s++){var l=r.activeDrops[s],u=l.dropzone,c=l.element,f=l.rect;a.push(u.dropCheck(e,n,o,i,c,f)?c:null)}var d=S.indexOfDeepestElement(a);return r.activeDrops[d]||null}function pt(t,e,n){var r=t.dropState,o={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return"dragstart"===n.type&&(o.activate=new et.DropEvent(r,n,"dropactivate"),o.activate.target=null,o.activate.dropzone=null),"dragend"===n.type&&(o.deactivate=new et.DropEvent(r,n,"dropdeactivate"),o.deactivate.target=null,o.deactivate.dropzone=null),r.rejected||(r.cur.element!==r.prev.element&&(r.prev.dropzone&&(o.leave=new et.DropEvent(r,n,"dragleave"),n.dragLeave=o.leave.target=r.prev.element,n.prevDropzone=o.leave.dropzone=r.prev.dropzone),r.cur.dropzone&&(o.enter=new et.DropEvent(r,n,"dragenter"),n.dragEnter=r.cur.element,n.dropzone=r.cur.dropzone)),"dragend"===n.type&&r.cur.dropzone&&(o.drop=new et.DropEvent(r,n,"drop"),n.dropzone=r.cur.dropzone,n.relatedTarget=r.cur.element),"dragmove"===n.type&&r.cur.dropzone&&(o.move=new et.DropEvent(r,n,"dropmove"),o.move.dragmove=n,n.dropzone=r.cur.dropzone)),o}function vt(t,e){var n=t.dropState,r=n.activeDrops,o=n.cur,i=n.prev;e.leave&&i.dropzone.fire(e.leave),e.move&&o.dropzone.fire(e.move),e.enter&&o.dropzone.fire(e.enter),e.drop&&o.dropzone.fire(e.drop),e.deactivate&&ct(r,e.deactivate),n.prev.dropzone=o.dropzone,n.prev.element=o.element}function ht(t,e){var n=t.interaction,r=t.iEvent,o=t.event;if("dragmove"===r.type||"dragend"===r.type){var i=n.dropState;e.dynamicDrop&&(i.activeDrops=ft(e,n.element));var a=r,s=dt(n,a,o);i.rejected=i.rejected&&!!s&&s.dropzone===i.cur.dropzone&&s.element===i.cur.element,i.cur.dropzone=s&&s.dropzone,i.cur.element=s&&s.element,i.events=pt(n,0,a)}}Object.defineProperty(ut,"__esModule",{value:!0}),ut.default=void 0;var gt={id:"actions/drop",install:function(t){var e=t.actions,n=t.interactStatic,r=t.Interactable,o=t.defaults;t.usePlugin(f.default),r.prototype.dropzone=function(t){return function(t,e){if(a.default.object(e)){if(t.options.drop.enabled=!1!==e.enabled,e.listeners){var n=(0,C.default)(e.listeners),r=Object.keys(n).reduce((function(t,e){return t[/^(enter|leave)/.test(e)?"drag".concat(e):/^(activate|deactivate|move)/.test(e)?"drop".concat(e):e]=n[e],t}),{});t.off(t.options.drop.listeners),t.on(r),t.options.drop.listeners=r}return a.default.func(e.ondrop)&&t.on("drop",e.ondrop),a.default.func(e.ondropactivate)&&t.on("dropactivate",e.ondropactivate),a.default.func(e.ondropdeactivate)&&t.on("dropdeactivate",e.ondropdeactivate),a.default.func(e.ondragenter)&&t.on("dragenter",e.ondragenter),a.default.func(e.ondragleave)&&t.on("dragleave",e.ondragleave),a.default.func(e.ondropmove)&&t.on("dropmove",e.ondropmove),/^(pointer|center)$/.test(e.overlap)?t.options.drop.overlap=e.overlap:a.default.number(e.overlap)&&(t.options.drop.overlap=Math.max(Math.min(1,e.overlap),0)),"accept"in e&&(t.options.drop.accept=e.accept),"checker"in e&&(t.options.drop.checker=e.checker),t}if(a.default.bool(e))return t.options.drop.enabled=e,t;return t.options.drop}(this,t)},r.prototype.dropCheck=function(t,e,n,r,o,i){return function(t,e,n,r,o,i,s){var l=!1;if(!(s=s||t.getRect(i)))return!!t.options.drop.checker&&t.options.drop.checker(e,n,l,t,i,r,o);var u=t.options.drop.overlap;if("pointer"===u){var c=(0,z.default)(r,o,"drag"),f=L.getPageXY(e);f.x+=c.x,f.y+=c.y;var d=f.x>s.left&&f.x<s.right,p=f.y>s.top&&f.y<s.bottom;l=d&&p}var v=r.getRect(o);if(v&&"center"===u){var h=v.left+v.width/2,g=v.top+v.height/2;l=h>=s.left&&h<=s.right&&g>=s.top&&g<=s.bottom}if(v&&a.default.number(u)){var y=Math.max(0,Math.min(s.right,v.right)-Math.max(s.left,v.left))*Math.max(0,Math.min(s.bottom,v.bottom)-Math.max(s.top,v.top))/(v.width*v.height);l=y>=u}t.options.drop.checker&&(l=t.options.drop.checker(e,n,l,t,i,r,o));return l}(this,t,e,n,r,o,i)},n.dynamicDrop=function(e){return a.default.bool(e)?(t.dynamicDrop=e,n):t.dynamicDrop},(0,k.default)(e.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),e.methodDict.drop="dropzone",t.dynamicDrop=!1,o.actions.drop=gt.defaults},listeners:{"interactions:before-action-start":function(t){var e=t.interaction;"drag"===e.prepared.name&&(e.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(t,e){var n=t.interaction,r=(t.event,t.iEvent);if("drag"===n.prepared.name){var o=n.dropState;o.activeDrops=null,o.events=null,o.activeDrops=ft(e,n.element),o.events=pt(n,0,r),o.events.activate&&(ct(o.activeDrops,o.events.activate),e.fire("actions/drop:start",{interaction:n,dragEvent:r}))}},"interactions:action-move":ht,"interactions:action-end":ht,"interactions:after-action-move":function(t,e){var n=t.interaction,r=t.iEvent;"drag"===n.prepared.name&&(vt(n,n.dropState.events),e.fire("actions/drop:move",{interaction:n,dragEvent:r}),n.dropState.events={})},"interactions:after-action-end":function(t,e){var n=t.interaction,r=t.iEvent;"drag"===n.prepared.name&&(vt(n,n.dropState.events),e.fire("actions/drop:end",{interaction:n,dragEvent:r}))},"interactions:stop":function(t){var e=t.interaction;if("drag"===e.prepared.name){var n=e.dropState;n&&(n.activeDrops=null,n.events=null,n.cur.dropzone=null,n.cur.element=null,n.prev.dropzone=null,n.prev.element=null,n.rejected=!1)}}},getActiveDrops:ft,getDrop:dt,getDropEvents:pt,fireDropEvents:vt,defaults:{enabled:!1,accept:null,overlap:"pointer"}},yt=gt;ut.default=yt;var mt={};function bt(t){var e=t.interaction,n=t.iEvent,r=t.phase;if("gesture"===e.prepared.name){var o=e.pointers.map((function(t){return t.pointer})),i="start"===r,s="end"===r,l=e.interactable.options.deltaSource;if(n.touches=[o[0],o[1]],i)n.distance=L.touchDistance(o,l),n.box=L.touchBBox(o),n.scale=1,n.ds=0,n.angle=L.touchAngle(o,l),n.da=0,e.gesture.startDistance=n.distance,e.gesture.startAngle=n.angle;else if(s){var u=e.prevEvent;n.distance=u.distance,n.box=u.box,n.scale=u.scale,n.ds=0,n.angle=u.angle,n.da=0}else n.distance=L.touchDistance(o,l),n.box=L.touchBBox(o),n.scale=n.distance/e.gesture.startDistance,n.angle=L.touchAngle(o,l),n.ds=n.scale-e.gesture.scale,n.da=n.angle-e.gesture.angle;e.gesture.distance=n.distance,e.gesture.angle=n.angle,a.default.number(n.scale)&&n.scale!==1/0&&!isNaN(n.scale)&&(e.gesture.scale=n.scale)}}Object.defineProperty(mt,"__esModule",{value:!0}),mt.default=void 0;var xt={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(t){var e=t.actions,n=t.Interactable,r=t.defaults;n.prototype.gesturable=function(t){return a.default.object(t)?(this.options.gesture.enabled=!1!==t.enabled,this.setPerAction("gesture",t),this.setOnEvents("gesture",t),this):a.default.bool(t)?(this.options.gesture.enabled=t,this):this.options.gesture},e.map.gesture=xt,e.methodDict.gesture="gesturable",r.actions.gesture=xt.defaults},listeners:{"interactions:action-start":bt,"interactions:action-move":bt,"interactions:action-end":bt,"interactions:new":function(t){t.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(t){if(!(t.interaction.pointers.length<2)){var e=t.interactable.options.gesture;if(e&&e.enabled)return t.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""}},wt=xt;mt.default=wt;var _t={};function St(t,e,n,r,o,i,s){if(!e)return!1;if(!0===e){var l=a.default.number(i.width)?i.width:i.right-i.left,u=a.default.number(i.height)?i.height:i.bottom-i.top;if(s=Math.min(s,Math.abs(("left"===t||"right"===t?l:u)/2)),l<0&&("left"===t?t="right":"right"===t&&(t="left")),u<0&&("top"===t?t="bottom":"bottom"===t&&(t="top")),"left"===t)return n.x<(l>=0?i.left:i.right)+s;if("top"===t)return n.y<(u>=0?i.top:i.bottom)+s;if("right"===t)return n.x>(l>=0?i.right:i.left)-s;if("bottom"===t)return n.y>(u>=0?i.bottom:i.top)-s}return!!a.default.element(r)&&(a.default.element(e)?e===r:S.matchesUpTo(r,e,o))}function Pt(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.resizeAxes){var r=e;n.interactable.options.resize.square?("y"===n.resizeAxes?r.delta.x=r.delta.y:r.delta.y=r.delta.x,r.axes="xy"):(r.axes=n.resizeAxes,"x"===n.resizeAxes?r.delta.y=0:"y"===n.resizeAxes&&(r.delta.x=0))}}Object.defineProperty(_t,"__esModule",{value:!0}),_t.default=void 0;var Ot={id:"actions/resize",before:["actions/drag"],install:function(t){var e=t.actions,n=t.browser,r=t.Interactable,o=t.defaults;Ot.cursors=function(t){return t.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(n),Ot.defaultMargin=n.supportsTouch||n.supportsPointerEvent?20:10,r.prototype.resizable=function(e){return function(t,e,n){if(a.default.object(e))return t.options.resize.enabled=!1!==e.enabled,t.setPerAction("resize",e),t.setOnEvents("resize",e),a.default.string(e.axis)&&/^x$|^y$|^xy$/.test(e.axis)?t.options.resize.axis=e.axis:null===e.axis&&(t.options.resize.axis=n.defaults.actions.resize.axis),a.default.bool(e.preserveAspectRatio)?t.options.resize.preserveAspectRatio=e.preserveAspectRatio:a.default.bool(e.square)&&(t.options.resize.square=e.square),t;if(a.default.bool(e))return t.options.resize.enabled=e,t;return t.options.resize}(this,e,t)},e.map.resize=Ot,e.methodDict.resize="resizable",o.actions.resize=Ot.defaults},listeners:{"interactions:new":function(t){t.interaction.resizeAxes="xy"},"interactions:action-start":function(t){!function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e,o=n.rect;n._rects={start:(0,k.default)({},o),corrected:(0,k.default)({},o),previous:(0,k.default)({},o),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},r.edges=n.prepared.edges,r.rect=n._rects.corrected,r.deltaRect=n._rects.delta}}(t),Pt(t)},"interactions:action-move":function(t){!function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e,o=n.interactable.options.resize.invert,i="reposition"===o||"negate"===o,a=n.rect,s=n._rects,l=s.start,u=s.corrected,c=s.delta,f=s.previous;if((0,k.default)(f,u),i){if((0,k.default)(u,a),"reposition"===o){if(u.top>u.bottom){var d=u.top;u.top=u.bottom,u.bottom=d}if(u.left>u.right){var p=u.left;u.left=u.right,u.right=p}}}else u.top=Math.min(a.top,l.bottom),u.bottom=Math.max(a.bottom,l.top),u.left=Math.min(a.left,l.right),u.right=Math.max(a.right,l.left);for(var v in u.width=u.right-u.left,u.height=u.bottom-u.top,u)c[v]=u[v]-f[v];r.edges=n.prepared.edges,r.rect=u,r.deltaRect=c}}(t),Pt(t)},"interactions:action-end":function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e;r.edges=n.prepared.edges,r.rect=n._rects.corrected,r.deltaRect=n._rects.delta}},"auto-start:check":function(t){var e=t.interaction,n=t.interactable,r=t.element,o=t.rect,i=t.buttons;if(o){var s=(0,k.default)({},e.coords.cur.page),l=n.options.resize;if(l&&l.enabled&&(!e.pointerIsDown||!/mouse|pointer/.test(e.pointerType)||0!=(i&l.mouseButtons))){if(a.default.object(l.edges)){var u={left:!1,right:!1,top:!1,bottom:!1};for(var c in u)u[c]=St(c,l.edges[c],s,e._latestPointer.eventTarget,r,o,l.margin||Ot.defaultMargin);u.left=u.left&&!u.right,u.top=u.top&&!u.bottom,(u.left||u.right||u.top||u.bottom)&&(t.action={name:"resize",edges:u})}else{var f="y"!==l.axis&&s.x>o.right-Ot.defaultMargin,d="x"!==l.axis&&s.y>o.bottom-Ot.defaultMargin;(f||d)&&(t.action={name:"resize",axes:(f?"x":"")+(d?"y":"")})}return!t.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(t){var e=t.edges,n=t.axis,r=t.name,o=Ot.cursors,i=null;if(n)i=o[r+n];else if(e){for(var a="",s=["top","bottom","left","right"],l=0;l<s.length;l++){var u=s[l];e[u]&&(a+=u)}i=o[a]}return i},defaultMargin:null},Et=Ot;_t.default=Et;var Tt={};Object.defineProperty(Tt,"__esModule",{value:!0}),Tt.default=void 0;var Mt={id:"actions",install:function(t){t.usePlugin(mt.default),t.usePlugin(_t.default),t.usePlugin(f.default),t.usePlugin(ut.default)}};Tt.default=Mt;var jt={};Object.defineProperty(jt,"__esModule",{value:!0}),jt.default=void 0;jt.default={};var kt={};Object.defineProperty(kt,"__esModule",{value:!0}),kt.default=void 0;var It,Dt,At=0;var zt={request:function(t){return It(t)},cancel:function(t){return Dt(t)},init:function(t){if(It=t.requestAnimationFrame,Dt=t.cancelAnimationFrame,!It)for(var e=["ms","moz","webkit","o"],n=0;n<e.length;n++){var r=e[n];It=t["".concat(r,"RequestAnimationFrame")],Dt=t["".concat(r,"CancelAnimationFrame")]||t["".concat(r,"CancelRequestAnimationFrame")]}It||(It=function(t){var e=Date.now(),n=Math.max(0,16-(e-At)),r=setTimeout((function(){t(e+n)}),n);return At=e+n,r},Dt=function(t){return clearTimeout(t)})}};kt.default=zt;var Ct={};Object.defineProperty(Ct,"__esModule",{value:!0}),Ct.getContainer=Ft,Ct.getScroll=Xt,Ct.getScrollSize=function(t){a.default.window(t)&&(t=window.document.body);return{x:t.scrollWidth,y:t.scrollHeight}},Ct.getScrollSizeDelta=function(t,e){var n=t.interaction,r=t.element,o=n&&n.interactable.options[n.prepared.name].autoScroll;if(!o||!o.enabled)return e(),{x:0,y:0};var i=Ft(o.container,n.interactable,r),a=Xt(i);e();var s=Xt(i);return{x:s.x-a.x,y:s.y-a.y}},Ct.default=void 0;var Rt={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(t){Rt.isScrolling=!0,kt.default.cancel(Rt.i),t.autoScroll=Rt,Rt.interaction=t,Rt.prevTime=Rt.now(),Rt.i=kt.default.request(Rt.scroll)},stop:function(){Rt.isScrolling=!1,Rt.interaction&&(Rt.interaction.autoScroll=null),kt.default.cancel(Rt.i)},scroll:function(){var t=Rt.interaction,e=t.interactable,n=t.element,r=t.prepared.name,o=e.options[r].autoScroll,i=Ft(o.container,e,n),s=Rt.now(),l=(s-Rt.prevTime)/1e3,u=o.speed*l;if(u>=1){var c={x:Rt.x*u,y:Rt.y*u};if(c.x||c.y){var f=Xt(i);a.default.window(i)?i.scrollBy(c.x,c.y):i&&(i.scrollLeft+=c.x,i.scrollTop+=c.y);var d=Xt(i),p={x:d.x-f.x,y:d.y-f.y};(p.x||p.y)&&e.fire({type:"autoscroll",target:n,interactable:e,delta:p,interaction:t,container:i})}Rt.prevTime=s}Rt.isScrolling&&(kt.default.cancel(Rt.i),Rt.i=kt.default.request(Rt.scroll))},check:function(t,e){var n=t.options;return n[e].autoScroll&&n[e].autoScroll.enabled},onInteractionMove:function(t){var e=t.interaction,n=t.pointer;if(e.interacting()&&Rt.check(e.interactable,e.prepared.name))if(e.simulation)Rt.x=Rt.y=0;else{var r,o,i,s,l=e.interactable,u=e.element,c=e.prepared.name,f=l.options[c].autoScroll,d=Ft(f.container,l,u);if(a.default.window(d))s=n.clientX<Rt.margin,r=n.clientY<Rt.margin,o=n.clientX>d.innerWidth-Rt.margin,i=n.clientY>d.innerHeight-Rt.margin;else{var p=S.getElementClientRect(d);s=n.clientX<p.left+Rt.margin,r=n.clientY<p.top+Rt.margin,o=n.clientX>p.right-Rt.margin,i=n.clientY>p.bottom-Rt.margin}Rt.x=o?1:s?-1:0,Rt.y=i?1:r?-1:0,Rt.isScrolling||(Rt.margin=f.margin,Rt.speed=f.speed,Rt.start(e))}}};function Ft(t,n,r){return(a.default.string(t)?(0,I.getStringOptionResult)(t,n,r):t)||(0,e.getWindow)(r)}function Xt(t){return a.default.window(t)&&(t=window.document.body),{x:t.scrollLeft,y:t.scrollTop}}var Yt={id:"auto-scroll",install:function(t){var e=t.defaults,n=t.actions;t.autoScroll=Rt,Rt.now=function(){return t.now()},n.phaselessTypes.autoscroll=!0,e.perAction.autoScroll=Rt.defaults},listeners:{"interactions:new":function(t){t.interaction.autoScroll=null},"interactions:destroy":function(t){t.interaction.autoScroll=null,Rt.stop(),Rt.interaction&&(Rt.interaction=null)},"interactions:stop":Rt.stop,"interactions:action-move":function(t){return Rt.onInteractionMove(t)}}};Ct.default=Yt;var Wt={};Object.defineProperty(Wt,"__esModule",{value:!0}),Wt.warnOnce=function(t,n){var r=!1;return function(){return r||(e.default.window.console.warn(n),r=!0),t.apply(this,arguments)}},Wt.copyAction=function(t,e){return t.name=e.name,t.axis=e.axis,t.edges=e.edges,t};var Lt={};function Bt(t){return a.default.bool(t)?(this.options.styleCursor=t,this):null===t?(delete this.options.styleCursor,this):this.options.styleCursor}function Ut(t){return a.default.func(t)?(this.options.actionChecker=t,this):null===t?(delete this.options.actionChecker,this):this.options.actionChecker}Object.defineProperty(Lt,"__esModule",{value:!0}),Lt.default=void 0;var Vt={id:"auto-start/interactableMethods",install:function(t){var e=t.Interactable;e.prototype.getAction=function(e,n,r,o){var i=function(t,e,n,r,o){var i=t.getRect(r),a=e.buttons||{0:1,1:4,3:8,4:16}[e.button],s={action:null,interactable:t,interaction:n,element:r,rect:i,buttons:a};return o.fire("auto-start:check",s),s.action}(this,n,r,o,t);return this.options.actionChecker?this.options.actionChecker(e,n,i,this,o,r):i},e.prototype.ignoreFrom=(0,Wt.warnOnce)((function(t){return this._backCompatOption("ignoreFrom",t)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),e.prototype.allowFrom=(0,Wt.warnOnce)((function(t){return this._backCompatOption("allowFrom",t)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),e.prototype.actionChecker=Ut,e.prototype.styleCursor=Bt}};Lt.default=Vt;var qt={};function Nt(t,e,n,r,o){return e.testIgnoreAllow(e.options[t.name],n,r)&&e.options[t.name].enabled&&Kt(e,n,t,o)?t:null}function Gt(t,e,n,r,o,i,a){for(var s=0,l=r.length;s<l;s++){var u=r[s],c=o[s],f=u.getAction(e,n,t,c);if(f){var d=Nt(f,u,c,i,a);if(d)return{action:d,interactable:u,element:c}}}return{action:null,interactable:null,element:null}}function $t(t,e,n,r,o){var i=[],s=[],l=r;function u(t){i.push(t),s.push(l)}for(;a.default.element(l);){i=[],s=[],o.interactables.forEachMatch(l,u);var c=Gt(t,e,n,i,s,r,o);if(c.action&&!c.interactable.options[c.action.name].manualStart)return c;l=S.parentNode(l)}return{action:null,interactable:null,element:null}}function Ht(t,e,n){var r=e.action,o=e.interactable,i=e.element;r=r||{name:null},t.interactable=o,t.element=i,(0,Wt.copyAction)(t.prepared,r),t.rect=o&&r.name?o.getRect(i):null,Qt(t,n),n.fire("autoStart:prepared",{interaction:t})}function Kt(t,e,n,r){var o=t.options,i=o[n.name].max,a=o[n.name].maxPerElement,s=r.autoStart.maxInteractions,l=0,u=0,c=0;if(!(i&&a&&s))return!1;for(var f=0;f<r.interactions.list.length;f++){var d=r.interactions.list[f],p=d.prepared.name;if(d.interacting()){if(++l>=s)return!1;if(d.interactable===t){if((u+=p===n.name?1:0)>=i)return!1;if(d.element===e&&(c++,p===n.name&&c>=a))return!1}}}return s>0}function Zt(t,e){return a.default.number(t)?(e.autoStart.maxInteractions=t,this):e.autoStart.maxInteractions}function Jt(t,e,n){var r=n.autoStart.cursorElement;r&&r!==t&&(r.style.cursor=""),t.ownerDocument.documentElement.style.cursor=e,t.style.cursor=e,n.autoStart.cursorElement=e?t:null}function Qt(t,e){var n=t.interactable,r=t.element,o=t.prepared;if("mouse"===t.pointerType&&n&&n.options.styleCursor){var i="";if(o.name){var s=n.options[o.name].cursorChecker;i=a.default.func(s)?s(o,n,r,t._interacting):e.actions.map[o.name].getCursor(o)}Jt(t.element,i||"",e)}else e.autoStart.cursorElement&&Jt(e.autoStart.cursorElement,"",e)}Object.defineProperty(qt,"__esModule",{value:!0}),qt.default=void 0;var te={id:"auto-start/base",before:["actions","actions/drag","actions/resize","actions/gesture"],install:function(t){var e=t.interactStatic,n=t.defaults;t.usePlugin(Lt.default),n.base.actionChecker=null,n.base.styleCursor=!0,(0,k.default)(n.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),e.maxInteractions=function(e){return Zt(e,t)},t.autoStart={maxInteractions:1/0,withinInteractionLimit:Kt,cursorElement:null}},listeners:{"interactions:down":function(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget;n.interacting()||Ht(n,$t(n,r,o,i,e),e)},"interactions:move":function(t,e){!function(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget;"mouse"!==n.pointerType||n.pointerIsDown||n.interacting()||Ht(n,$t(n,r,o,i,e),e)}(t,e),function(t,e){var n=t.interaction;if(n.pointerIsDown&&!n.interacting()&&n.pointerWasMoved&&n.prepared.name){e.fire("autoStart:before-start",t);var r=n.interactable,o=n.prepared.name;o&&r&&(r.options[o].manualStart||!Kt(r,n.element,n.prepared,e)?n.stop():(n.start(n.prepared,r,n.element),Qt(n,e)))}}(t,e)},"interactions:stop":function(t,e){var n=t.interaction,r=n.interactable;r&&r.options.styleCursor&&Jt(n.element,"",e)}},maxInteractions:Zt,withinInteractionLimit:Kt,validateAction:Nt};qt.default=te;var ee={};Object.defineProperty(ee,"__esModule",{value:!0}),ee.default=void 0;var ne={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(t,e){var n=t.interaction,r=t.eventTarget,o=t.dx,i=t.dy;if("drag"===n.prepared.name){var s=Math.abs(o),l=Math.abs(i),u=n.interactable.options.drag,c=u.startAxis,f=s>l?"x":s<l?"y":"xy";if(n.prepared.axis="start"===u.lockAxis?f[0]:u.lockAxis,"xy"!==f&&"xy"!==c&&c!==f){n.prepared.name=null;for(var d=r,p=function(t){if(t!==n.interactable){var o=n.interactable.options.drag;if(!o.manualStart&&t.testIgnoreAllow(o,d,r)){var i=t.getAction(n.downPointer,n.downEvent,n,d);if(i&&"drag"===i.name&&function(t,e){if(!e)return!1;var n=e.options.drag.startAxis;return"xy"===t||"xy"===n||n===t}(f,t)&&qt.default.validateAction(i,t,d,r,e))return t}}};a.default.element(d);){var v=e.interactables.forEachMatch(d,p);if(v){n.prepared.name="drag",n.interactable=v,n.element=d;break}d=(0,S.parentNode)(d)}}}}}};ee.default=ne;var re={};function oe(t){var e=t.prepared&&t.prepared.name;if(!e)return null;var n=t.interactable.options;return n[e].hold||n[e].delay}Object.defineProperty(re,"__esModule",{value:!0}),re.default=void 0;var ie={id:"auto-start/hold",install:function(t){var e=t.defaults;t.usePlugin(qt.default),e.perAction.hold=0,e.perAction.delay=0},listeners:{"interactions:new":function(t){t.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(t){var e=t.interaction,n=oe(e);n>0&&(e.autoStartHoldTimer=setTimeout((function(){e.start(e.prepared,e.interactable,e.element)}),n))},"interactions:move":function(t){var e=t.interaction,n=t.duplicate;e.pointerWasMoved&&!n&&clearTimeout(e.autoStartHoldTimer)},"autoStart:before-start":function(t){var e=t.interaction;oe(e)>0&&(e.prepared.name=null)}},getHoldDuration:oe};re.default=ie;var ae={};Object.defineProperty(ae,"__esModule",{value:!0}),ae.default=void 0;var se={id:"auto-start",install:function(t){t.usePlugin(qt.default),t.usePlugin(re.default),t.usePlugin(ee.default)}};ae.default=se;var le={};Object.defineProperty(le,"__esModule",{value:!0}),le.default=void 0;le.default={};var ue={};function ce(t){return/^(always|never|auto)$/.test(t)?(this.options.preventDefault=t,this):a.default.bool(t)?(this.options.preventDefault=t?"always":"never",this):this.options.preventDefault}function fe(t){var e=t.interaction,n=t.event;e.interactable&&e.interactable.checkAndPreventDefault(n)}function de(t){var n=t.Interactable;n.prototype.preventDefault=ce,n.prototype.checkAndPreventDefault=function(n){return function(t,n,r){var o=t.options.preventDefault;if("never"!==o)if("always"!==o){if(n.events.supportsPassive&&/^touch(start|move)$/.test(r.type)){var i=(0,e.getWindow)(r.target).document,s=n.getDocOptions(i);if(!s||!s.events||!1!==s.events.passive)return}/^(mouse|pointer|touch)*(down|start)/i.test(r.type)||a.default.element(r.target)&&(0,S.matchesSelector)(r.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||r.preventDefault()}else r.preventDefault()}(this,t,n)},t.interactions.docEvents.push({type:"dragstart",listener:function(e){for(var n=0;n<t.interactions.list.length;n++){var r=t.interactions.list[n];if(r.element&&(r.element===e.target||(0,S.nodeContains)(r.element,e.target)))return void r.interactable.checkAndPreventDefault(e)}}})}Object.defineProperty(ue,"__esModule",{value:!0}),ue.install=de,ue.default=void 0;var pe={id:"core/interactablePreventDefault",install:de,listeners:["down","move","up","cancel"].reduce((function(t,e){return t["interactions:".concat(e)]=fe,t}),{})};ue.default=pe;var ve,he={};function ge(t){return function(t){if(Array.isArray(t))return ye(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return ye(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ye(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ye(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(he,"__esModule",{value:!0}),he.default=void 0,function(t){t.touchAction="touchAction",t.boxSizing="boxSizing",t.noListeners="noListeners"}(ve||(ve={}));var me={touchAction:"https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",boxSizing:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"};var be=[{name:ve.touchAction,perform:function(t){return!function(t,e,n){var r=t;for(;a.default.element(r);){if(xe(r,e,n))return!0;r=(0,S.parentNode)(r)}return!1}(t.element,"touchAction",/pan-|pinch|none/)},getInfo:function(t){return[t.element,me.touchAction]},text:'Consider adding CSS "touch-action: none" to this element\n'},{name:ve.boxSizing,perform:function(t){var e=t.element;return"resize"===t.prepared.name&&e instanceof g.default.HTMLElement&&!xe(e,"boxSizing",/border-box/)},text:'Consider adding CSS "box-sizing: border-box" to this resizable element',getInfo:function(t){return[t.element,me.boxSizing]}},{name:ve.noListeners,perform:function(t){var e=t.prepared.name;return!(t.interactable.events.types["".concat(e,"move")]||[]).length},getInfo:function(t){return[t.prepared.name,t.interactable]},text:"There are no listeners set for this action"}];function xe(t,n,r){var o=t.style[n]||e.default.window.getComputedStyle(t)[n];return r.test((o||"").toString())}var we="dev-tools",_e={id:we,install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.logger,r=t.Interactable,o=t.defaults;t.logger=n||console,o.base.devTools={ignore:{}},r.prototype.devTools=function(t){return t?((0,k.default)(this.options.devTools,t),this):this.options.devTools}},listeners:{"interactions:action-start":function(t,e){for(var n=t.interaction,r=0;r<be.length;r++){var o,i=be[r],a=n.interactable&&n.interactable.options;if(!(a&&a.devTools&&a.devTools.ignore[i.name])&&i.perform(n))(o=e.logger).warn.apply(o,["[interact.js] "+i.text].concat(ge(i.getInfo(n))))}}},checks:be,CheckName:ve,links:me,prefix:"[interact.js] "};he.default=_e;var Se={};Object.defineProperty(Se,"__esModule",{value:!0}),Se.default=void 0;Se.default={};var Pe={};Object.defineProperty(Pe,"__esModule",{value:!0}),Pe.default=function t(e){var n={};for(var r in e){var o=e[r];a.default.plainObject(o)?n[r]=t(o):a.default.array(o)?n[r]=J.from(o):n[r]=o}return n};var Oe={};function Ee(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Te(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Te(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Te(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Me(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(Oe,"__esModule",{value:!0}),Oe.getRectOffset=Ie,Oe.default=void 0;var je=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=null,this.result=null,this.endResult=null,this.edges=void 0,this.interaction=void 0,this.interaction=e,this.result=ke()}var e,n,r;return e=t,(n=[{key:"start",value:function(t,e){var n=t.phase,r=this.interaction,o=function(t){var e=t.interactable.options[t.prepared.name],n=e.modifiers;return n&&n.length?n.filter((function(t){return!t.options||!1!==t.options.enabled})):["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((function(t){var n=e[t];return n&&n.enabled&&{options:n,methods:n._methods}})).filter((function(t){return!!t}))}(r);this.prepareStates(o),this.edges=(0,k.default)({},r.edges),this.startOffset=Ie(r.rect,e),this.startDelta={x:0,y:0};var i={phase:n,pageCoords:e,preEnd:!1};return this.result=ke(),this.startAll(i),this.result=this.setAll(i)}},{key:"fillArg",value:function(t){var e=this.interaction;t.interaction=e,t.interactable=e.interactable,t.element=e.element,t.rect=t.rect||e.rect,t.edges=this.edges,t.startOffset=this.startOffset}},{key:"startAll",value:function(t){this.fillArg(t);for(var e=0;e<this.states.length;e++){var n=this.states[e];n.methods.start&&(t.state=n,n.methods.start(t))}}},{key:"setAll",value:function(t){this.fillArg(t);var e=t.phase,n=t.preEnd,r=t.skipModifiers,o=t.rect;t.coords=(0,k.default)({},t.pageCoords),t.rect=(0,k.default)({},o);for(var i=r?this.states.slice(r):this.states,a=ke(t.coords,t.rect),s=0;s<i.length;s++){var l=i[s],u=l.options,c=(0,k.default)({},t.coords),f=null;l.methods.set&&this.shouldDo(u,n,e)&&(t.state=l,f=l.methods.set(t),I.addEdges(this.interaction.edges,t.rect,{x:t.coords.x-c.x,y:t.coords.y-c.y})),a.eventProps.push(f)}a.delta.x=t.coords.x-t.pageCoords.x,a.delta.y=t.coords.y-t.pageCoords.y,a.rectDelta.left=t.rect.left-o.left,a.rectDelta.right=t.rect.right-o.right,a.rectDelta.top=t.rect.top-o.top,a.rectDelta.bottom=t.rect.bottom-o.bottom;var d=this.result.coords,p=this.result.rect;if(d&&p){var v=a.rect.left!==p.left||a.rect.right!==p.right||a.rect.top!==p.top||a.rect.bottom!==p.bottom;a.changed=v||d.x!==a.coords.x||d.y!==a.coords.y}return a}},{key:"applyToInteraction",value:function(t){var e=this.interaction,n=t.phase,r=e.coords.cur,o=e.coords.start,i=this.result,a=this.startDelta,s=i.delta;"start"===n&&(0,k.default)(this.startDelta,i.delta);for(var l=[[o,a],[r,s]],u=0;u<l.length;u++){var c=Ee(l[u],2),f=c[0],d=c[1];f.page.x+=d.x,f.page.y+=d.y,f.client.x+=d.x,f.client.y+=d.y}var p=this.result.rectDelta,v=t.rect||e.rect;v.left+=p.left,v.right+=p.right,v.top+=p.top,v.bottom+=p.bottom,v.width=v.right-v.left,v.height=v.bottom-v.top}},{key:"setAndApply",value:function(t){var e=this.interaction,n=t.phase,r=t.preEnd,o=t.skipModifiers,i=this.setAll({preEnd:r,phase:n,pageCoords:t.modifiedCoords||e.coords.cur.page});if(this.result=i,!i.changed&&(!o||o<this.states.length)&&e.interacting())return!1;if(t.modifiedCoords){var a=e.coords.cur.page,s={x:t.modifiedCoords.x-a.x,y:t.modifiedCoords.y-a.y};i.coords.x+=s.x,i.coords.y+=s.y,i.delta.x+=s.x,i.delta.y+=s.y}this.applyToInteraction(t)}},{key:"beforeEnd",value:function(t){var e=t.interaction,n=t.event,r=this.states;if(r&&r.length){for(var o=!1,i=0;i<r.length;i++){var a=r[i];t.state=a;var s=a.options,l=a.methods,u=l.beforeEnd&&l.beforeEnd(t);if(u)return this.endResult=u,!1;o=o||!o&&this.shouldDo(s,!0,t.phase,!0)}o&&e.move({event:n,preEnd:!0})}}},{key:"stop",value:function(t){var e=t.interaction;if(this.states&&this.states.length){var n=(0,k.default)({states:this.states,interactable:e.interactable,element:e.element,rect:null},t);this.fillArg(n);for(var r=0;r<this.states.length;r++){var o=this.states[r];n.state=o,o.methods.stop&&o.methods.stop(n)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(t){this.states=[];for(var e=0;e<t.length;e++){var n=t[e],r=n.options,o=n.methods,i=n.name;r&&!1===r.enabled||this.states.push({options:r,methods:o,index:e,name:i})}return this.states}},{key:"restoreInteractionCoords",value:function(t){var e=t.interaction,n=e.coords,r=e.rect,o=e.modification;if(o.result){for(var i=o.startDelta,a=o.result,s=a.delta,l=a.rectDelta,u=[[n.start,i],[n.cur,s]],c=0;c<u.length;c++){var f=Ee(u[c],2),d=f[0],p=f[1];d.page.x-=p.x,d.page.y-=p.y,d.client.x-=p.x,d.client.y-=p.y}r.left-=l.left,r.right-=l.right,r.top-=l.top,r.bottom-=l.bottom}}},{key:"shouldDo",value:function(t,e,n,r){return!(!t||!1===t.enabled||r&&!t.endOnly||t.endOnly&&!e||"start"===n&&!t.setStart)}},{key:"copyFrom",value:function(t){this.startOffset=t.startOffset,this.startDelta=t.startDelta,this.edges=t.edges,this.states=t.states.map((function(t){return(0,Pe.default)(t)})),this.result=ke((0,k.default)({},t.result.coords),(0,k.default)({},t.result.rect))}},{key:"destroy",value:function(){for(var t in this)this[t]=null}}])&&Me(e.prototype,n),r&&Me(e,r),t}();function ke(t,e){return{rect:e,coords:t,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function Ie(t,e){return t?{left:e.x-t.left,top:e.y-t.top,right:t.right-e.x,bottom:t.bottom-e.y}:{left:0,top:0,right:0,bottom:0}}Oe.default=je;var De={};function Ae(t){var e=t.iEvent,n=t.interaction.modification.result;n&&(e.modifiers=n.eventProps)}Object.defineProperty(De,"__esModule",{value:!0}),De.makeModifier=function(t,e){var n=t.defaults,r={start:t.start,set:t.set,beforeEnd:t.beforeEnd,stop:t.stop},o=function(t){var o=t||{};for(var i in o.enabled=!1!==o.enabled,n)i in o||(o[i]=n[i]);return{options:o,methods:r,name:e}};e&&"string"==typeof e&&(o._defaults=n,o._methods=r);return o},De.addEventModifiers=Ae,De.default=void 0;var ze={id:"modifiers/base",install:function(t){t.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(t){var e=t.interaction;e.modification=new Oe.default(e)},"interactions:before-action-start":function(t){var e=t.interaction.modification;e.start(t,t.interaction.coords.start.page),t.interaction.edges=e.edges,e.applyToInteraction(t)},"interactions:before-action-move":function(t){return t.interaction.modification.setAndApply(t)},"interactions:before-action-end":function(t){return t.interaction.modification.beforeEnd(t)},"interactions:action-start":Ae,"interactions:action-move":Ae,"interactions:action-end":Ae,"interactions:after-action-start":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:after-action-move":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:stop":function(t){return t.interaction.modification.stop(t)}},before:["actions","action/drag","actions/resize","actions/gesture"]};De.default=ze;var Ce={};Object.defineProperty(Ce,"__esModule",{value:!0}),Ce.defaults=void 0;Ce.defaults={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};var Re={};function Fe(t){return(Fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Xe(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ye(t,e){return(Ye=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function We(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Ue(t);if(e){var o=Ue(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Le(this,n)}}function Le(t,e){return!e||"object"!==Fe(e)&&"function"!=typeof e?Be(t):e}function Be(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ue(t){return(Ue=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(Re,"__esModule",{value:!0}),Re.InteractEvent=void 0;var Ve=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ye(t,e)}(i,t);var e,n,r,o=We(i);function i(t,e,n,r,a,s,l){var u;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(u=o.call(this,t)).target=void 0,u.currentTarget=void 0,u.relatedTarget=null,u.screenX=void 0,u.screenY=void 0,u.button=void 0,u.buttons=void 0,u.ctrlKey=void 0,u.shiftKey=void 0,u.altKey=void 0,u.metaKey=void 0,u.page=void 0,u.client=void 0,u.delta=void 0,u.rect=void 0,u.x0=void 0,u.y0=void 0,u.t0=void 0,u.dt=void 0,u.duration=void 0,u.clientX0=void 0,u.clientY0=void 0,u.velocity=void 0,u.speed=void 0,u.swipe=void 0,u.timeStamp=void 0,u.dragEnter=void 0,u.dragLeave=void 0,u.axes=void 0,u.preEnd=void 0,a=a||t.element;var c=t.interactable,f=(c&&c.options||Ce.defaults).deltaSource,d=(0,z.default)(c,a,n),p="start"===r,v="end"===r,h=p?Be(u):t.prevEvent,g=p?t.coords.start:v?{page:h.page,client:h.client,timeStamp:t.coords.cur.timeStamp}:t.coords.cur;return u.page=(0,k.default)({},g.page),u.client=(0,k.default)({},g.client),u.rect=(0,k.default)({},t.rect),u.timeStamp=g.timeStamp,v||(u.page.x-=d.x,u.page.y-=d.y,u.client.x-=d.x,u.client.y-=d.y),u.ctrlKey=e.ctrlKey,u.altKey=e.altKey,u.shiftKey=e.shiftKey,u.metaKey=e.metaKey,u.button=e.button,u.buttons=e.buttons,u.target=a,u.currentTarget=a,u.preEnd=s,u.type=l||n+(r||""),u.interactable=c,u.t0=p?t.pointers[t.pointers.length-1].downTime:h.t0,u.x0=t.coords.start.page.x-d.x,u.y0=t.coords.start.page.y-d.y,u.clientX0=t.coords.start.client.x-d.x,u.clientY0=t.coords.start.client.y-d.y,u.delta=p||v?{x:0,y:0}:{x:u[f].x-h[f].x,y:u[f].y-h[f].y},u.dt=t.coords.delta.timeStamp,u.duration=u.timeStamp-u.t0,u.velocity=(0,k.default)({},t.coords.velocity[f]),u.speed=(0,F.default)(u.velocity.x,u.velocity.y),u.swipe=v||"inertiastart"===r?u.getSwipe():null,u}return e=i,(n=[{key:"getSwipe",value:function(){var t=this._interaction;if(t.prevEvent.speed<600||this.timeStamp-t.prevEvent.timeStamp>150)return null;var e=180*Math.atan2(t.prevEvent.velocityY,t.prevEvent.velocityX)/Math.PI;e<0&&(e+=360);var n=112.5<=e&&e<247.5,r=202.5<=e&&e<337.5;return{up:r,down:!r&&22.5<=e&&e<157.5,left:n,right:!n&&(292.5<=e||e<67.5),angle:e,speed:t.prevEvent.speed,velocity:{x:t.prevEvent.velocityX,y:t.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}])&&Xe(e.prototype,n),r&&Xe(e,r),i}($.BaseEvent);Re.InteractEvent=Ve,Object.defineProperties(Ve.prototype,{pageX:{get:function(){return this.page.x},set:function(t){this.page.x=t}},pageY:{get:function(){return this.page.y},set:function(t){this.page.y=t}},clientX:{get:function(){return this.client.x},set:function(t){this.client.x=t}},clientY:{get:function(){return this.client.y},set:function(t){this.client.y=t}},dx:{get:function(){return this.delta.x},set:function(t){this.delta.x=t}},dy:{get:function(){return this.delta.y},set:function(t){this.delta.y=t}},velocityX:{get:function(){return this.velocity.x},set:function(t){this.velocity.x=t}},velocityY:{get:function(){return this.velocity.y},set:function(t){this.velocity.y=t}}});var qe={};Object.defineProperty(qe,"__esModule",{value:!0}),qe.PointerInfo=void 0;qe.PointerInfo=function t(e,n,r,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=e,this.pointer=n,this.event=r,this.downTime=o,this.downTarget=i};var Ne,Ge,$e={};function He(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ke(t,e,n){return e&&He(t.prototype,e),n&&He(t,n),t}Object.defineProperty($e,"__esModule",{value:!0}),Object.defineProperty($e,"PointerInfo",{enumerable:!0,get:function(){return qe.PointerInfo}}),$e.default=$e.Interaction=$e._ProxyMethods=$e._ProxyValues=void 0,$e._ProxyValues=Ne,function(t){t.interactable="",t.element="",t.prepared="",t.pointerIsDown="",t.pointerWasMoved="",t._proxy=""}(Ne||($e._ProxyValues=Ne={})),$e._ProxyMethods=Ge,function(t){t.start="",t.move="",t.end="",t.stop="",t.interacting=""}(Ge||($e._ProxyMethods=Ge={}));var Ze=0,Je=function(){function t(e){var n=this,r=e.pointerType,o=e.scopeFire;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.interactable=null,this.element=null,this.rect=void 0,this._rects=void 0,this.edges=void 0,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=null,this.simulation=null,this.doMove=(0,Wt.warnOnce)((function(t){this.move(t)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:L.newCoords(),prev:L.newCoords(),cur:L.newCoords(),delta:L.newCoords(),velocity:L.newCoords()},this._id=Ze++,this._scopeFire=o,this.pointerType=r;var i=this;this._proxy={};var a=function(t){Object.defineProperty(n._proxy,t,{get:function(){return i[t]}})};for(var s in Ne)a(s);var l=function(t){Object.defineProperty(n._proxy,t,{value:function(){return i[t].apply(i,arguments)}})};for(var u in Ge)l(u);this._scopeFire("interactions:new",{interaction:this})}return Ke(t,[{key:"pointerMoveTolerance",get:function(){return 1}}]),Ke(t,[{key:"pointerDown",value:function(t,e,n){var r=this.updatePointer(t,e,n,!0),o=this.pointers[r];this._scopeFire("interactions:down",{pointer:t,event:e,eventTarget:n,pointerIndex:r,pointerInfo:o,type:"down",interaction:this})}},{key:"start",value:function(t,e,n){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<("gesture"===t.name?2:1)||!e.options[t.name].enabled)&&((0,Wt.copyAction)(this.prepared,t),this.interactable=e,this.element=n,this.rect=e.getRect(n),this.edges=this.prepared.edges?(0,k.default)({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(t,e,n){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(t,e,n,!1);var r,o,i=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(r=this.coords.cur.client.x-this.coords.start.client.x,o=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=(0,F.default)(r,o)>this.pointerMoveTolerance);var a=this.getPointerIndex(t),s={pointer:t,pointerIndex:a,pointerInfo:this.pointers[a],event:e,type:"move",eventTarget:n,dx:r,dy:o,duplicate:i,interaction:this};i||L.setCoordVelocity(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",s),i||this.simulation||(this.interacting()&&(s.type=null,this.move(s)),this.pointerWasMoved&&L.copyCoords(this.coords.prev,this.coords.cur))}},{key:"move",value:function(t){t&&t.event||L.setZeroCoords(this.coords.delta),(t=(0,k.default)({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},t||{})).phase="move",this._doPhase(t)}},{key:"pointerUp",value:function(t,e,n,r){var o=this.getPointerIndex(t);-1===o&&(o=this.updatePointer(t,e,n,!1));var i=/cancel$/i.test(e.type)?"cancel":"up";this._scopeFire("interactions:".concat(i),{pointer:t,pointerIndex:o,pointerInfo:this.pointers[o],event:e,eventTarget:n,type:i,curEventTarget:r,interaction:this}),this.simulation||this.end(e),this.pointerIsDown=!1,this.removePointer(t,e)}},{key:"documentBlur",value:function(t){this.end(t),this._scopeFire("interactions:blur",{event:t,type:"blur",interaction:this})}},{key:"end",value:function(t){var e;this._ending=!0,t=t||this._latestPointer.event,this.interacting()&&(e=this._doPhase({event:t,interaction:this,phase:"end"})),this._ending=!1,!0===e&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(t){var e=L.getPointerId(t);return"mouse"===this.pointerType||"pen"===this.pointerType?this.pointers.length-1:J.findIndex(this.pointers,(function(t){return t.id===e}))}},{key:"getPointerInfo",value:function(t){return this.pointers[this.getPointerIndex(t)]}},{key:"updatePointer",value:function(t,e,n,r){var o=L.getPointerId(t),i=this.getPointerIndex(t),a=this.pointers[i];return r=!1!==r&&(r||/(down|start)$/i.test(e.type)),a?a.pointer=t:(a=new qe.PointerInfo(o,t,e,null,null),i=this.pointers.length,this.pointers.push(a)),L.setCoords(this.coords.cur,this.pointers.map((function(t){return t.pointer})),this._now()),L.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),r&&(this.pointerIsDown=!0,a.downTime=this.coords.cur.timeStamp,a.downTarget=n,L.pointerExtend(this.downPointer,t),this.interacting()||(L.copyCoords(this.coords.start,this.coords.cur),L.copyCoords(this.coords.prev,this.coords.cur),this.downEvent=e,this.pointerWasMoved=!1)),this._updateLatestPointer(t,e,n),this._scopeFire("interactions:update-pointer",{pointer:t,event:e,eventTarget:n,down:r,pointerInfo:a,pointerIndex:i,interaction:this}),i}},{key:"removePointer",value:function(t,e){var n=this.getPointerIndex(t);if(-1!==n){var r=this.pointers[n];this._scopeFire("interactions:remove-pointer",{pointer:t,event:e,eventTarget:null,pointerIndex:n,pointerInfo:r,interaction:this}),this.pointers.splice(n,1)}}},{key:"_updateLatestPointer",value:function(t,e,n){this._latestPointer.pointer=t,this._latestPointer.event=e,this._latestPointer.eventTarget=n}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(t,e,n,r){return new Re.InteractEvent(this,t,this.prepared.name,e,this.element,n,r)}},{key:"_fireEvent",value:function(t){this.interactable.fire(t),(!this.prevEvent||t.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=t)}},{key:"_doPhase",value:function(t){var e=t.event,n=t.phase,r=t.preEnd,o=t.type,i=this.rect;if(i&&"move"===n&&(I.addEdges(this.edges,i,this.coords.delta[this.interactable.options.deltaSource]),i.width=i.right-i.left,i.height=i.bottom-i.top),!1===this._scopeFire("interactions:before-action-".concat(n),t))return!1;var a=t.iEvent=this._createPreparedEvent(e,n,r,o);return this._scopeFire("interactions:action-".concat(n),t),"start"===n&&(this.prevEvent=a),this._fireEvent(a),this._scopeFire("interactions:after-action-".concat(n),t),!0}},{key:"_now",value:function(){return Date.now()}}]),t}();$e.Interaction=Je;var Qe=Je;$e.default=Qe;var tn={};function en(t){t.pointerIsDown&&(an(t.coords.cur,t.offset.total),t.offset.pending.x=0,t.offset.pending.y=0)}function nn(t){rn(t.interaction)}function rn(t){if(!function(t){return!(!t.offset.pending.x&&!t.offset.pending.y)}(t))return!1;var e=t.offset.pending;return an(t.coords.cur,e),an(t.coords.delta,e),I.addEdges(t.edges,t.rect,e),e.x=0,e.y=0,!0}function on(t){var e=t.x,n=t.y;this.offset.pending.x+=e,this.offset.pending.y+=n,this.offset.total.x+=e,this.offset.total.y+=n}function an(t,e){var n=t.page,r=t.client,o=e.x,i=e.y;n.x+=o,n.y+=i,r.x+=o,r.y+=i}Object.defineProperty(tn,"__esModule",{value:!0}),tn.addTotal=en,tn.applyPending=rn,tn.default=void 0,$e._ProxyMethods.offsetBy="";var sn={id:"offset",install:function(t){t.Interaction.prototype.offsetBy=on},listeners:{"interactions:new":function(t){t.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(t){return en(t.interaction)},"interactions:before-action-start":nn,"interactions:before-action-move":nn,"interactions:before-action-end":function(t){var e=t.interaction;if(rn(e))return e.move({offset:!0}),e.end(),!1},"interactions:stop":function(t){var e=t.interaction;e.offset.total.x=0,e.offset.total.y=0,e.offset.pending.x=0,e.offset.pending.y=0}}};tn.default=sn;var ln={};function un(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(ln,"__esModule",{value:!0}),ln.default=ln.InertiaState=void 0;var cn=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=null,this.modifierCount=0,this.modifierArg=null,this.startCoords=null,this.t0=0,this.v0=0,this.te=0,this.targetOffset=null,this.modifiedOffset=null,this.currentOffset=null,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=null,this.interaction=void 0,this.interaction=e}var e,n,r;return e=t,(n=[{key:"start",value:function(t){var e=this.interaction,n=fn(e);if(!n||!n.enabled)return!1;var r=e.coords.velocity.client,o=(0,F.default)(r.x,r.y),i=this.modification||(this.modification=new Oe.default(e));if(i.copyFrom(e.modification),this.t0=e._now(),this.allowResume=n.allowResume,this.v0=o,this.currentOffset={x:0,y:0},this.startCoords=e.coords.cur.page,this.modifierArg={interaction:e,interactable:e.interactable,element:e.element,rect:e.rect,edges:e.edges,pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"},this.t0-e.coords.cur.timeStamp<50&&o>n.minSpeed&&o>n.endSpeed)this.startInertia();else{if(i.result=i.setAll(this.modifierArg),!i.result.changed)return!1;this.startSmoothEnd()}return e.modification.result.rect=null,e.offsetBy(this.targetOffset),e._doPhase({interaction:e,event:t,phase:"inertiastart"}),e.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),e.modification.result.rect=null,this.active=!0,e.simulation=this,!0}},{key:"startInertia",value:function(){var t=this,e=this.interaction.coords.velocity.client,n=fn(this.interaction),r=n.resistance,o=-Math.log(n.endSpeed/this.v0)/r;this.targetOffset={x:(e.x-o)/r,y:(e.y-o)/r},this.te=o,this.lambda_v0=r/this.v0,this.one_ve_v0=1-n.endSpeed/this.v0;var i=this.modification,a=this.modifierArg;a.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},i.result=i.setAll(a),i.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+i.result.delta.x,y:this.targetOffset.y+i.result.delta.y}),this.timeout=kt.default.request((function(){return t.inertiaTick()}))}},{key:"startSmoothEnd",value:function(){var t=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.timeout=kt.default.request((function(){return t.smoothEndTick()}))}},{key:"inertiaTick",value:function(){var t,e,n,r,o,i,a,s=this,l=this.interaction,u=fn(l).resistance,c=(l._now()-this.t0)/1e3;if(c<this.te){var f,d=1-(Math.exp(-u*c)-this.lambda_v0)/this.one_ve_v0;this.isModified?(t=0,e=0,n=this.targetOffset.x,r=this.targetOffset.y,o=this.modifiedOffset.x,i=this.modifiedOffset.y,f={x:dn(a=d,t,n,o),y:dn(a,e,r,i)}):f={x:this.targetOffset.x*d,y:this.targetOffset.y*d};var p={x:f.x-this.currentOffset.x,y:f.y-this.currentOffset.y};this.currentOffset.x+=p.x,this.currentOffset.y+=p.y,l.offsetBy(p),l.move(),this.timeout=kt.default.request((function(){return s.inertiaTick()}))}else l.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var t=this,e=this.interaction,n=e._now()-this.t0,r=fn(e).smoothEndDuration;if(n<r){var o={x:pn(n,0,this.targetOffset.x,r),y:pn(n,0,this.targetOffset.y,r)},i={x:o.x-this.currentOffset.x,y:o.y-this.currentOffset.y};this.currentOffset.x+=i.x,this.currentOffset.y+=i.y,e.offsetBy(i),e.move({skipModifiers:this.modifierCount}),this.timeout=kt.default.request((function(){return t.smoothEndTick()}))}else e.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(t){var e=t.pointer,n=t.event,r=t.eventTarget,o=this.interaction;o.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),o.updatePointer(e,n,r,!0),o._doPhase({interaction:o,event:n,phase:"resume"}),(0,L.copyCoords)(o.coords.prev,o.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,kt.default.cancel(this.timeout)}}])&&un(e.prototype,n),r&&un(e,r),t}();function fn(t){var e=t.interactable,n=t.prepared;return e&&e.options&&n.name&&e.options[n.name].inertia}function dn(t,e,n,r){var o=1-t;return o*o*e+2*o*t*n+t*t*r}function pn(t,e,n,r){return-n*(t/=r)*(t-2)+e}ln.InertiaState=cn;var vn={id:"inertia",before:["modifiers/base"],install:function(t){var e=t.defaults;t.usePlugin(tn.default),t.usePlugin(De.default),t.actions.phases.inertiastart=!0,t.actions.phases.resume=!0,e.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(t){var e=t.interaction;e.inertia=new cn(e)},"interactions:before-action-end":function(t){var e=t.interaction,n=t.event;return(!e._interacting||e.simulation||!e.inertia.start(n))&&null},"interactions:down":function(t){var e=t.interaction,n=t.eventTarget,r=e.inertia;if(r.active)for(var o=n;a.default.element(o);){if(o===e.element){r.resume(t);break}o=S.parentNode(o)}},"interactions:stop":function(t){var e=t.interaction.inertia;e.active&&e.stop()},"interactions:before-action-resume":function(t){var e=t.interaction.modification;e.stop(t),e.start(t,t.interaction.coords.cur.page),e.applyToInteraction(t)},"interactions:before-action-inertiastart":function(t){return t.interaction.modification.setAndApply(t)},"interactions:action-resume":De.addEventModifiers,"interactions:action-inertiastart":De.addEventModifiers,"interactions:after-action-inertiastart":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:after-action-resume":function(t){return t.interaction.modification.restoreInteractionCoords(t)}}};ln.default=vn;var hn={};function gn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function yn(t,e){for(var n=0;n<e.length;n++){var r=e[n];if(t.immediatePropagationStopped)break;r(t)}}Object.defineProperty(hn,"__esModule",{value:!0}),hn.Eventable=void 0;var mn=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=(0,k.default)({},e||{})}var e,n,r;return e=t,(n=[{key:"fire",value:function(t){var e,n=this.global;(e=this.types[t.type])&&yn(t,e),!t.propagationStopped&&n&&(e=n[t.type])&&yn(t,e)}},{key:"on",value:function(t,e){var n=(0,C.default)(t,e);for(t in n)this.types[t]=J.merge(this.types[t]||[],n[t])}},{key:"off",value:function(t,e){var n=(0,C.default)(t,e);for(t in n){var r=this.types[t];if(r&&r.length)for(var o=0;o<n[t].length;o++){var i=n[t][o],a=r.indexOf(i);-1!==a&&r.splice(a,1)}}}},{key:"getRect",value:function(t){return null}}])&&gn(e.prototype,n),r&&gn(e,r),t}();hn.Eventable=mn;var bn={};Object.defineProperty(bn,"__esModule",{value:!0}),bn.default=function(t,e){if(e.phaselessTypes[t])return!0;for(var n in e.map)if(0===t.indexOf(n)&&t.substr(n.length)in e.phases)return!0;return!1};var xn={};function wn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _n(t,e,n){return e&&wn(t.prototype,e),n&&wn(t,n),t}Object.defineProperty(xn,"__esModule",{value:!0}),xn.Interactable=void 0;var Sn=function(){function t(n,r,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=void 0,this._actions=void 0,this.target=void 0,this.events=new hn.Eventable,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._rectChecker=void 0,this._actions=r.actions,this.target=n,this._context=r.context||o,this._win=(0,e.getWindow)((0,S.trySelector)(n)?this._context:n),this._doc=this._win.document,this._scopeEvents=i,this.set(r)}return _n(t,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}}]),_n(t,[{key:"setOnEvents",value:function(t,e){return a.default.func(e.onstart)&&this.on("".concat(t,"start"),e.onstart),a.default.func(e.onmove)&&this.on("".concat(t,"move"),e.onmove),a.default.func(e.onend)&&this.on("".concat(t,"end"),e.onend),a.default.func(e.oninertiastart)&&this.on("".concat(t,"inertiastart"),e.oninertiastart),this}},{key:"updatePerActionListeners",value:function(t,e,n){(a.default.array(e)||a.default.object(e))&&this.off(t,e),(a.default.array(n)||a.default.object(n))&&this.on(t,n)}},{key:"setPerAction",value:function(t,e){var n=this._defaults;for(var r in e){var o=r,i=this.options[t],s=e[o];"listeners"===o&&this.updatePerActionListeners(t,i.listeners,s),a.default.array(s)?i[o]=J.from(s):a.default.plainObject(s)?(i[o]=(0,k.default)(i[o]||{},(0,Pe.default)(s)),a.default.object(n.perAction[o])&&"enabled"in n.perAction[o]&&(i[o].enabled=!1!==s.enabled)):a.default.bool(s)&&a.default.object(n.perAction[o])?i[o].enabled=s:i[o]=s}}},{key:"getRect",value:function(t){return t=t||(a.default.element(this.target)?this.target:null),a.default.string(this.target)&&(t=t||this._context.querySelector(this.target)),(0,S.getElementRect)(t)}},{key:"rectChecker",value:function(t){var e=this;return a.default.func(t)?(this._rectChecker=t,this.getRect=function(t){var n=(0,k.default)({},e._rectChecker(t));return"width"in n||(n.width=n.right-n.left,n.height=n.bottom-n.top),n},this):null===t?(delete this.getRect,delete this._rectChecker,this):this.getRect}},{key:"_backCompatOption",value:function(t,e){if((0,S.trySelector)(e)||a.default.object(e)){for(var n in this.options[t]=e,this._actions.map)this.options[n][t]=e;return this}return this.options[t]}},{key:"origin",value:function(t){return this._backCompatOption("origin",t)}},{key:"deltaSource",value:function(t){return"page"===t||"client"===t?(this.options.deltaSource=t,this):this.options.deltaSource}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(t){return this._context===t.ownerDocument||(0,S.nodeContains)(this._context,t)}},{key:"testIgnoreAllow",value:function(t,e,n){return!this.testIgnore(t.ignoreFrom,e,n)&&this.testAllow(t.allowFrom,e,n)}},{key:"testAllow",value:function(t,e,n){return!t||!!a.default.element(n)&&(a.default.string(t)?(0,S.matchesUpTo)(n,t,e):!!a.default.element(t)&&(0,S.nodeContains)(t,n))}},{key:"testIgnore",value:function(t,e,n){return!(!t||!a.default.element(n))&&(a.default.string(t)?(0,S.matchesUpTo)(n,t,e):!!a.default.element(t)&&(0,S.nodeContains)(t,n))}},{key:"fire",value:function(t){return this.events.fire(t),this}},{key:"_onOff",value:function(t,e,n,r){a.default.object(e)&&!a.default.array(e)&&(r=n,n=null);var o="on"===t?"add":"remove",i=(0,C.default)(e,n);for(var s in i){"wheel"===s&&(s=x.default.wheelEvent);for(var l=0;l<i[s].length;l++){var u=i[s][l];(0,bn.default)(s,this._actions)?this.events[t](s,u):a.default.string(this.target)?this._scopeEvents["".concat(o,"Delegate")](this.target,this._context,s,u,r):this._scopeEvents[o](this.target,s,u,r)}}return this}},{key:"on",value:function(t,e,n){return this._onOff("on",t,e,n)}},{key:"off",value:function(t,e,n){return this._onOff("off",t,e,n)}},{key:"set",value:function(t){var e=this._defaults;for(var n in a.default.object(t)||(t={}),this.options=(0,Pe.default)(e.base),this._actions.methodDict){var r=n,o=this._actions.methodDict[r];this.options[r]={},this.setPerAction(r,(0,k.default)((0,k.default)({},e.perAction),e.actions[r])),this[o](t[r])}for(var i in t)a.default.func(this[i])&&this[i](t[i]);return this}},{key:"unset",value:function(){if(a.default.string(this.target))for(var t in this._scopeEvents.delegatedEvents)for(var e=this._scopeEvents.delegatedEvents[t],n=e.length-1;n>=0;n--){var r=e[n],o=r.selector,i=r.context,s=r.listeners;o===this.target&&i===this._context&&e.splice(n,1);for(var l=s.length-1;l>=0;l--)this._scopeEvents.removeDelegate(this.target,this._context,t,s[l][0],s[l][1])}else this._scopeEvents.remove(this.target,"all")}}]),t}();xn.Interactable=Sn;var Pn={};function On(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(Pn,"__esModule",{value:!0}),Pn.InteractableSet=void 0;var En=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.list=[],this.selectorMap={},this.scope=void 0,this.scope=e,e.addListeners({"interactable:unset":function(t){var e=t.interactable,r=e.target,o=e._context,i=a.default.string(r)?n.selectorMap[r]:r[n.scope.id],s=i.findIndex((function(t){return t.context===o}));i[s]&&(i[s].context=null,i[s].interactable=null),i.splice(s,1)}})}var e,n,r;return e=t,(n=[{key:"new",value:function(t,e){e=(0,k.default)(e||{},{actions:this.scope.actions});var n=new this.scope.Interactable(t,e,this.scope.document,this.scope.events),r={context:n._context,interactable:n};return this.scope.addDocument(n._doc),this.list.push(n),a.default.string(t)?(this.selectorMap[t]||(this.selectorMap[t]=[]),this.selectorMap[t].push(r)):(n.target[this.scope.id]||Object.defineProperty(t,this.scope.id,{value:[],configurable:!0}),t[this.scope.id].push(r)),this.scope.fire("interactable:new",{target:t,options:e,interactable:n,win:this.scope._win}),n}},{key:"get",value:function(t,e){var n=e&&e.context||this.scope.document,r=a.default.string(t),o=r?this.selectorMap[t]:t[this.scope.id];if(!o)return null;var i=J.find(o,(function(e){return e.context===n&&(r||e.interactable.inContext(t))}));return i&&i.interactable}},{key:"forEachMatch",value:function(t,e){for(var n=0;n<this.list.length;n++){var r=this.list[n],o=void 0;if((a.default.string(r.target)?a.default.element(t)&&S.matchesSelector(t,r.target):t===r.target)&&r.inContext(t)&&(o=e(r)),void 0!==o)return o}}}])&&On(e.prototype,n),r&&On(e,r),t}();Pn.InteractableSet=En;var Tn={};function Mn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function jn(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return kn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kn(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function kn(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(Tn,"__esModule",{value:!0}),Tn.default=Tn.FakeEvent=void 0;var In=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.currentTarget=void 0,this.originalEvent=void 0,this.originalEvent=e,(0,X.default)(this,e)}var e,n,r;return e=t,(n=[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}])&&Mn(e.prototype,n),r&&Mn(e,r),t}();function Dn(t){if(!a.default.object(t))return{capture:!!t,passive:!1};var e=(0,k.default)({},t);return e.capture=!!t.capture,e.passive=!!t.passive,e}Tn.FakeEvent=In;var An={id:"events",install:function(t){var e=[],n={},r=[],o={add:i,remove:s,addDelegate:function(t,e,o,a,s){var c=Dn(s);if(!n[o]){n[o]=[];for(var f=0;f<r.length;f++){var d=r[f];i(d,o,l),i(d,o,u,!0)}}var p=n[o],v=J.find(p,(function(n){return n.selector===t&&n.context===e}));v||(v={selector:t,context:e,listeners:[]},p.push(v));v.listeners.push([a,c])},removeDelegate:function(t,e,r,o,i){var a,c=Dn(i),f=n[r],d=!1;if(!f)return;for(a=f.length-1;a>=0;a--){var p=f[a];if(p.selector===t&&p.context===e){for(var v=p.listeners,h=v.length-1;h>=0;h--){var g=jn(v[h],2),y=g[0],m=g[1],b=m.capture,x=m.passive;if(y===o&&b===c.capture&&x===c.passive){v.splice(h,1),v.length||(f.splice(a,1),s(e,r,l),s(e,r,u,!0)),d=!0;break}}if(d)break}}},delegateListener:l,delegateUseCapture:u,delegatedEvents:n,documents:r,targets:e,supportsOptions:!1,supportsPassive:!1};function i(t,n,r,i){var a=Dn(i),s=J.find(e,(function(e){return e.eventTarget===t}));s||(s={eventTarget:t,events:{}},e.push(s)),s.events[n]||(s.events[n]=[]),t.addEventListener&&!J.contains(s.events[n],r)&&(t.addEventListener(n,r,o.supportsOptions?a:a.capture),s.events[n].push(r))}function s(t,n,r,i){var a=Dn(i),l=J.findIndex(e,(function(e){return e.eventTarget===t})),u=e[l];if(u&&u.events)if("all"!==n){var c=!1,f=u.events[n];if(f){if("all"===r){for(var d=f.length-1;d>=0;d--)s(t,n,f[d],a);return}for(var p=0;p<f.length;p++)if(f[p]===r){t.removeEventListener(n,r,o.supportsOptions?a:a.capture),f.splice(p,1),0===f.length&&(delete u.events[n],c=!0);break}}c&&!Object.keys(u.events).length&&e.splice(l,1)}else for(n in u.events)u.events.hasOwnProperty(n)&&s(t,n,"all")}function l(t,e){for(var r=Dn(e),o=new In(t),i=n[t.type],s=jn(L.getEventTargets(t),1)[0],l=s;a.default.element(l);){for(var u=0;u<i.length;u++){var c=i[u],f=c.selector,d=c.context;if(S.matchesSelector(l,f)&&S.nodeContains(d,s)&&S.nodeContains(d,l)){var p=c.listeners;o.currentTarget=l;for(var v=0;v<p.length;v++){var h=jn(p[v],2),g=h[0],y=h[1],m=y.capture,b=y.passive;m===r.capture&&b===r.passive&&g(o)}}}l=S.parentNode(l)}}function u(t){return l(t,!0)}return t.document.createElement("div").addEventListener("test",null,{get capture(){return o.supportsOptions=!0},get passive(){return o.supportsPassive=!0}}),t.events=o,o}};Tn.default=An;var zn={};Object.defineProperty(zn,"__esModule",{value:!0}),zn.createInteractStatic=function(t){var e=function e(n,r){var o=t.interactables.get(n,r);return o||((o=t.interactables.new(n,r)).events.global=e.globalEvents),o};return e.getPointerAverage=L.pointerAverage,e.getTouchBBox=L.touchBBox,e.getTouchDistance=L.touchDistance,e.getTouchAngle=L.touchAngle,e.getElementRect=S.getElementRect,e.getElementClientRect=S.getElementClientRect,e.matchesSelector=S.matchesSelector,e.closest=S.closest,e.globalEvents={},e.version=void 0,e.scope=t,e.use=function(t,e){return this.scope.usePlugin(t,e),this},e.isSet=function(t,e){return!!this.scope.interactables.get(t,e&&e.context)},e.on=function(t,e,n){if(a.default.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),a.default.array(t)){for(var r=0;r<t.length;r++){var o=t[r];this.on(o,e,n)}return this}if(a.default.object(t)){for(var i in t)this.on(i,t[i],e);return this}return(0,bn.default)(t,this.scope.actions)?this.globalEvents[t]?this.globalEvents[t].push(e):this.globalEvents[t]=[e]:this.scope.events.add(this.scope.document,t,e,{options:n}),this},e.off=function(t,e,n){if(a.default.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),a.default.array(t)){for(var r=0;r<t.length;r++){var o=t[r];this.off(o,e,n)}return this}if(a.default.object(t)){for(var i in t)this.off(i,t[i],e);return this}var s;(0,bn.default)(t,this.scope.actions)?t in this.globalEvents&&-1!==(s=this.globalEvents[t].indexOf(e))&&this.globalEvents[t].splice(s,1):this.scope.events.remove(this.scope.document,t,e,n);return this},e.debug=function(){return this.scope},e.supportsTouch=function(){return x.default.supportsTouch},e.supportsPointerEvent=function(){return x.default.supportsPointerEvent},e.stop=function(){for(var t=0;t<this.scope.interactions.list.length;t++){this.scope.interactions.list[t].stop()}return this},e.pointerMoveTolerance=function(t){return a.default.number(t)?(this.scope.interactions.pointerMoveTolerance=t,this):this.scope.interactions.pointerMoveTolerance},e.addDocument=function(t,e){this.scope.addDocument(t,e)},e.removeDocument=function(t){this.scope.removeDocument(t)},e};var Cn={};Object.defineProperty(Cn,"__esModule",{value:!0}),Cn.default=void 0;var Rn={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(t){for(var e=0;e<Rn.methodOrder.length;e++){var n;n=Rn.methodOrder[e];var r=Rn[n](t);if(r)return r}return null},simulationResume:function(t){var e=t.pointerType,n=t.eventType,r=t.eventTarget,o=t.scope;if(!/down|start/i.test(n))return null;for(var i=0;i<o.interactions.list.length;i++){var a=o.interactions.list[i],s=r;if(a.simulation&&a.simulation.allowResume&&a.pointerType===e)for(;s;){if(s===a.element)return a;s=S.parentNode(s)}}return null},mouseOrPen:function(t){var e,n=t.pointerId,r=t.pointerType,o=t.eventType,i=t.scope;if("mouse"!==r&&"pen"!==r)return null;for(var a=0;a<i.interactions.list.length;a++){var s=i.interactions.list[a];if(s.pointerType===r){if(s.simulation&&!Fn(s,n))continue;if(s.interacting())return s;e||(e=s)}}if(e)return e;for(var l=0;l<i.interactions.list.length;l++){var u=i.interactions.list[l];if(!(u.pointerType!==r||/down/i.test(o)&&u.simulation))return u}return null},hasPointer:function(t){for(var e=t.pointerId,n=t.scope,r=0;r<n.interactions.list.length;r++){var o=n.interactions.list[r];if(Fn(o,e))return o}return null},idle:function(t){for(var e=t.pointerType,n=t.scope,r=0;r<n.interactions.list.length;r++){var o=n.interactions.list[r];if(1===o.pointers.length){var i=o.interactable;if(i&&(!i.options.gesture||!i.options.gesture.enabled))continue}else if(o.pointers.length>=2)continue;if(!o.interacting()&&e===o.pointerType)return o}return null}};function Fn(t,e){return t.pointers.some((function(t){return t.id===e}))}var Xn=Rn;Cn.default=Xn;var Yn={};function Wn(t){return(Wn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Ln(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Bn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bn(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Bn(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Un(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Vn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function qn(t,e){return(qn=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Nn(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=$n(t);if(e){var o=$n(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Gn(this,n)}}function Gn(t,e){return!e||"object"!==Wn(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function $n(t){return($n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(Yn,"__esModule",{value:!0}),Yn.default=void 0;var Hn=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function Kn(t,e){return function(n){var r=e.interactions.list,o=L.getPointerType(n),i=Ln(L.getEventTargets(n),2),a=i[0],s=i[1],l=[];if(/^touch/.test(n.type)){e.prevTouchTime=e.now();for(var u=0;u<n.changedTouches.length;u++){var c=n.changedTouches[u],f={pointer:c,pointerId:L.getPointerId(c),pointerType:o,eventType:n.type,eventTarget:a,curEventTarget:s,scope:e},d=Zn(f);l.push([f.pointer,f.eventTarget,f.curEventTarget,d])}}else{var p=!1;if(!x.default.supportsPointerEvent&&/mouse/.test(n.type)){for(var v=0;v<r.length&&!p;v++)p="mouse"!==r[v].pointerType&&r[v].pointerIsDown;p=p||e.now()-e.prevTouchTime<500||0===n.timeStamp}if(!p){var h={pointer:n,pointerId:L.getPointerId(n),pointerType:o,eventType:n.type,curEventTarget:s,eventTarget:a,scope:e},g=Zn(h);l.push([h.pointer,h.eventTarget,h.curEventTarget,g])}}for(var y=0;y<l.length;y++){var m=Ln(l[y],4),b=m[0],w=m[1],_=m[2];m[3][t](b,n,w,_)}}}function Zn(t){var e=t.pointerType,n=t.scope,r={interaction:Cn.default.search(t),searchDetails:t};return n.fire("interactions:find",r),r.interaction||n.interactions.new({pointerType:e})}function Jn(t,e){var n=t.doc,r=t.scope,o=t.options,i=r.interactions.docEvents,a=r.events,s=a[e];for(var l in r.browser.isIOS&&!o.events&&(o.events={passive:!1}),a.delegatedEvents)s(n,l,a.delegateListener),s(n,l,a.delegateUseCapture,!0);for(var u=o&&o.events,c=0;c<i.length;c++){var f=i[c];s(n,f.type,f.listener,u)}}var Qn={id:"core/interactions",install:function(t){for(var e={},n=0;n<Hn.length;n++){var r=Hn[n];e[r]=Kn(r,t)}var o,i=x.default.pEventTypes;function a(){for(var e=0;e<t.interactions.list.length;e++){var n=t.interactions.list[e];if(n.pointerIsDown&&"touch"===n.pointerType&&!n._interacting)for(var r=function(){var e=n.pointers[o];t.documents.some((function(t){var n=t.doc;return(0,S.nodeContains)(n,e.downTarget)}))||n.removePointer(e.pointer,e.event)},o=0;o<n.pointers.length;o++){r()}}}(o=g.default.PointerEvent?[{type:i.down,listener:a},{type:i.down,listener:e.pointerDown},{type:i.move,listener:e.pointerMove},{type:i.up,listener:e.pointerUp},{type:i.cancel,listener:e.pointerUp}]:[{type:"mousedown",listener:e.pointerDown},{type:"mousemove",listener:e.pointerMove},{type:"mouseup",listener:e.pointerUp},{type:"touchstart",listener:a},{type:"touchstart",listener:e.pointerDown},{type:"touchmove",listener:e.pointerMove},{type:"touchend",listener:e.pointerUp},{type:"touchcancel",listener:e.pointerUp}]).push({type:"blur",listener:function(e){for(var n=0;n<t.interactions.list.length;n++){t.interactions.list[n].documentBlur(e)}}}),t.prevTouchTime=0,t.Interaction=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&qn(t,e)}(a,e);var n,r,o,i=Nn(a);function a(){return Un(this,a),i.apply(this,arguments)}return n=a,(r=[{key:"_now",value:function(){return t.now()}},{key:"pointerMoveTolerance",get:function(){return t.interactions.pointerMoveTolerance},set:function(e){t.interactions.pointerMoveTolerance=e}}])&&Vn(n.prototype,r),o&&Vn(n,o),a}($e.default),t.interactions={list:[],new:function(e){e.scopeFire=function(e,n){return t.fire(e,n)};var n=new t.Interaction(e);return t.interactions.list.push(n),n},listeners:e,docEvents:o,pointerMoveTolerance:1},t.usePlugin(ue.default)},listeners:{"scope:add-document":function(t){return Jn(t,"add")},"scope:remove-document":function(t){return Jn(t,"remove")},"interactable:unset":function(t,e){for(var n=t.interactable,r=e.interactions.list.length-1;r>=0;r--){var o=e.interactions.list[r];o.interactable===n&&(o.stop(),e.fire("interactions:destroy",{interaction:o}),o.destroy(),e.interactions.list.length>2&&e.interactions.list.splice(r,1))}}},onDocSignal:Jn,doOnInteractions:Kn,methodNames:Hn};Yn.default=Qn;var tr={};function er(t){return(er="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function nr(t,e,n){return(nr="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=ar(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function rr(t,e){return(rr=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function or(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=ar(t);if(e){var o=ar(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ir(this,n)}}function ir(t,e){return!e||"object"!==er(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ar(t){return(ar=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function sr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function lr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ur(t,e,n){return e&&lr(t.prototype,e),n&&lr(t,n),t}Object.defineProperty(tr,"__esModule",{value:!0}),tr.initScope=fr,tr.Scope=void 0;var cr=function(){function t(){var e=this;sr(this,t),this.id="__interact_scope_".concat(Math.floor(100*Math.random())),this.isInitialized=!1,this.listenerMaps=[],this.browser=x.default,this.defaults=(0,Pe.default)(Ce.defaults),this.Eventable=hn.Eventable,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=(0,zn.createInteractStatic)(this),this.InteractEvent=Re.InteractEvent,this.Interactable=void 0,this.interactables=new Pn.InteractableSet(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(t){return e.removeDocument(t.target)};var n=this;this.Interactable=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&rr(t,e)}(r,t);var e=or(r);function r(){return sr(this,r),e.apply(this,arguments)}return ur(r,[{key:"set",value:function(t){return nr(ar(r.prototype),"set",this).call(this,t),n.fire("interactable:set",{options:t,interactable:this}),this}},{key:"unset",value:function(){nr(ar(r.prototype),"unset",this).call(this),n.interactables.list.splice(n.interactables.list.indexOf(this),1),n.fire("interactable:unset",{interactable:this})}},{key:"_defaults",get:function(){return n.defaults}}]),r}(xn.Interactable)}return ur(t,[{key:"addListeners",value:function(t,e){this.listenerMaps.push({id:e,map:t})}},{key:"fire",value:function(t,e){for(var n=0;n<this.listenerMaps.length;n++){var r=this.listenerMaps[n].map[t];if(r&&!1===r(e,this,t))return!1}}},{key:"init",value:function(t){return this.isInitialized?this:fr(this,t)}},{key:"pluginIsInstalled",value:function(t){return this._plugins.map[t.id]||-1!==this._plugins.list.indexOf(t)}},{key:"usePlugin",value:function(t,e){if(!this.isInitialized)return this;if(this.pluginIsInstalled(t))return this;if(t.id&&(this._plugins.map[t.id]=t),this._plugins.list.push(t),t.install&&t.install(this,e),t.listeners&&t.before){for(var n=0,r=this.listenerMaps.length,o=t.before.reduce((function(t,e){return t[e]=!0,t}),{});n<r;n++){if(o[this.listenerMaps[n].id])break}this.listenerMaps.splice(n,0,{id:t.id,map:t.listeners})}else t.listeners&&this.listenerMaps.push({id:t.id,map:t.listeners});return this}},{key:"addDocument",value:function(t,n){if(-1!==this.getDocIndex(t))return!1;var r=e.default.getWindow(t);n=n?(0,k.default)({},n):{},this.documents.push({doc:t,options:n}),this.events.documents.push(t),t!==this.document&&this.events.add(r,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:t,window:r,scope:this,options:n})}},{key:"removeDocument",value:function(t){var n=this.getDocIndex(t),r=e.default.getWindow(t),o=this.documents[n].options;this.events.remove(r,"unload",this.onWindowUnload),this.documents.splice(n,1),this.events.documents.splice(n,1),this.fire("scope:remove-document",{doc:t,window:r,scope:this,options:o})}},{key:"getDocIndex",value:function(t){for(var e=0;e<this.documents.length;e++)if(this.documents[e].doc===t)return e;return-1}},{key:"getDocOptions",value:function(t){var e=this.getDocIndex(t);return-1===e?null:this.documents[e].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),t}();function fr(t,n){return t.isInitialized=!0,e.default.init(n),g.default.init(n),x.default.init(n),kt.default.init(n),t.window=n,t.document=n.document,t.usePlugin(Yn.default),t.usePlugin(Tn.default),t}tr.Scope=cr;var dr={};function pr(t){return(pr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(dr,"__esModule",{value:!0}),dr.init=dr.default=void 0;var vr=new tr.Scope,hr=vr.interactStatic;dr.default=hr;var gr=function(t){return vr.init(t)};dr.init=gr,"object"===("undefined"==typeof window?"undefined":pr(window))&&window&&gr(window);var yr={};Object.defineProperty(yr,"__esModule",{value:!0}),yr.default=void 0;yr.default=function(){};var mr={};Object.defineProperty(mr,"__esModule",{value:!0}),mr.default=void 0;mr.default=function(){};var br={};function xr(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return wr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wr(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function wr(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(br,"__esModule",{value:!0}),br.default=void 0;br.default=function(t){var e=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((function(e){var n=xr(e,2),r=n[0],o=n[1];return r in t||o in t})),n=function(n,r){for(var o=t.range,i=t.limits,a=void 0===i?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:i,s=t.offset,l=void 0===s?{x:0,y:0}:s,u={range:o,grid:t,x:null,y:null},c=0;c<e.length;c++){var f=xr(e[c],2),d=f[0],p=f[1],v=Math.round((n-l.x)/t[d]),h=Math.round((r-l.y)/t[p]);u[d]=Math.max(a.left,Math.min(a.right,v*t[d]+l.x)),u[p]=Math.max(a.top,Math.min(a.bottom,h*t[p]+l.y))}return u};return n.grid=t,n.coordFields=e,n};var _r={};Object.defineProperty(_r,"__esModule",{value:!0}),Object.defineProperty(_r,"edgeTarget",{enumerable:!0,get:function(){return yr.default}}),Object.defineProperty(_r,"elements",{enumerable:!0,get:function(){return mr.default}}),Object.defineProperty(_r,"grid",{enumerable:!0,get:function(){return br.default}});var Sr={};Object.defineProperty(Sr,"__esModule",{value:!0}),Sr.default=void 0;var Pr={id:"snappers",install:function(t){var e=t.interactStatic;e.snappers=(0,k.default)(e.snappers||{},_r),e.createSnapGrid=e.snappers.grid}};Sr.default=Pr;var Or={};function Er(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Tr(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Er(Object(n),!0).forEach((function(e){Mr(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Er(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Mr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(Or,"__esModule",{value:!0}),Or.aspectRatio=Or.default=void 0;var jr={start:function(t){var e=t.state,n=t.rect,r=t.edges,o=t.pageCoords,i=e.options.ratio,a=e.options,s=a.equalDelta,l=a.modifiers;"preserve"===i&&(i=n.width/n.height),e.startCoords=(0,k.default)({},o),e.startRect=(0,k.default)({},n),e.ratio=i,e.equalDelta=s;var u=e.linkedEdges={top:r.top||r.left&&!r.bottom,left:r.left||r.top&&!r.right,bottom:r.bottom||r.right&&!r.top,right:r.right||r.bottom&&!r.left};if(e.xIsPrimaryAxis=!(!r.left&&!r.right),e.equalDelta)e.edgeSign=(u.left?1:-1)*(u.top?1:-1);else{var c=e.xIsPrimaryAxis?u.top:u.left;e.edgeSign=c?-1:1}if((0,k.default)(t.edges,u),l&&l.length){var f=new Oe.default(t.interaction);f.copyFrom(t.interaction.modification),f.prepareStates(l),e.subModification=f,f.startAll(Tr({},t))}},set:function(t){var e=t.state,n=t.rect,r=t.coords,o=(0,k.default)({},r),i=e.equalDelta?kr:Ir;if(i(e,e.xIsPrimaryAxis,r,n),!e.subModification)return null;var a=(0,k.default)({},n);(0,I.addEdges)(e.linkedEdges,a,{x:r.x-o.x,y:r.y-o.y});var s=e.subModification.setAll(Tr(Tr({},t),{},{rect:a,edges:e.linkedEdges,pageCoords:r,prevCoords:r,prevRect:a})),l=s.delta;s.changed&&(i(e,Math.abs(l.x)>Math.abs(l.y),s.coords,s.rect),(0,k.default)(r,s.coords));return s.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function kr(t,e,n){var r=t.startCoords,o=t.edgeSign;e?n.y=r.y+(n.x-r.x)*o:n.x=r.x+(n.y-r.y)*o}function Ir(t,e,n,r){var o=t.startRect,i=t.startCoords,a=t.ratio,s=t.edgeSign;if(e){var l=r.width/a;n.y=i.y+(l-o.height)*s}else{var u=r.height*a;n.x=i.x+(u-o.width)*s}}Or.aspectRatio=jr;var Dr=(0,De.makeModifier)(jr,"aspectRatio");Or.default=Dr;var Ar={};Object.defineProperty(Ar,"__esModule",{value:!0}),Ar.default=void 0;var zr=function(){};zr._defaults={};var Cr=zr;Ar.default=Cr;var Rr={};Object.defineProperty(Rr,"__esModule",{value:!0}),Object.defineProperty(Rr,"default",{enumerable:!0,get:function(){return Ar.default}});var Fr={};function Xr(t,e,n){return a.default.func(t)?I.resolveRectLike(t,e.interactable,e.element,[n.x,n.y,e]):I.resolveRectLike(t,e.interactable,e.element)}Object.defineProperty(Fr,"__esModule",{value:!0}),Fr.getRestrictionRect=Xr,Fr.restrict=Fr.default=void 0;var Yr={start:function(t){var e=t.rect,n=t.startOffset,r=t.state,o=t.interaction,i=t.pageCoords,a=r.options,s=a.elementRect,l=(0,k.default)({left:0,top:0,right:0,bottom:0},a.offset||{});if(e&&s){var u=Xr(a.restriction,o,i);if(u){var c=u.right-u.left-e.width,f=u.bottom-u.top-e.height;c<0&&(l.left+=c,l.right+=c),f<0&&(l.top+=f,l.bottom+=f)}l.left+=n.left-e.width*s.left,l.top+=n.top-e.height*s.top,l.right+=n.right-e.width*(1-s.right),l.bottom+=n.bottom-e.height*(1-s.bottom)}r.offset=l},set:function(t){var e=t.coords,n=t.interaction,r=t.state,o=r.options,i=r.offset,a=Xr(o.restriction,n,e);if(a){var s=I.xywhToTlbr(a);e.x=Math.max(Math.min(s.right-i.right,e.x),s.left+i.left),e.y=Math.max(Math.min(s.bottom-i.bottom,e.y),s.top+i.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};Fr.restrict=Yr;var Wr=(0,De.makeModifier)(Yr,"restrict");Fr.default=Wr;var Lr={};Object.defineProperty(Lr,"__esModule",{value:!0}),Lr.restrictEdges=Lr.default=void 0;var Br={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Ur={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function Vr(t,e){for(var n=["top","left","bottom","right"],r=0;r<n.length;r++){var o=n[r];o in t||(t[o]=e[o])}return t}var qr={noInner:Br,noOuter:Ur,start:function(t){var e,n=t.interaction,r=t.startOffset,o=t.state,i=o.options;if(i){var a=(0,Fr.getRestrictionRect)(i.offset,n,n.coords.start.page);e=I.rectToXY(a)}e=e||{x:0,y:0},o.offset={top:e.y+r.top,left:e.x+r.left,bottom:e.y-r.bottom,right:e.x-r.right}},set:function(t){var e=t.coords,n=t.edges,r=t.interaction,o=t.state,i=o.offset,a=o.options;if(n){var s=(0,k.default)({},e),l=(0,Fr.getRestrictionRect)(a.inner,r,s)||{},u=(0,Fr.getRestrictionRect)(a.outer,r,s)||{};Vr(l,Br),Vr(u,Ur),n.top?e.y=Math.min(Math.max(u.top+i.top,s.y),l.top+i.top):n.bottom&&(e.y=Math.max(Math.min(u.bottom+i.bottom,s.y),l.bottom+i.bottom)),n.left?e.x=Math.min(Math.max(u.left+i.left,s.x),l.left+i.left):n.right&&(e.x=Math.max(Math.min(u.right+i.right,s.x),l.right+i.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};Lr.restrictEdges=qr;var Nr=(0,De.makeModifier)(qr,"restrictEdges");Lr.default=Nr;var Gr={};Object.defineProperty(Gr,"__esModule",{value:!0}),Gr.restrictRect=Gr.default=void 0;var $r=(0,k.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(t){}},Fr.restrict.defaults),Hr={start:Fr.restrict.start,set:Fr.restrict.set,defaults:$r};Gr.restrictRect=Hr;var Kr=(0,De.makeModifier)(Hr,"restrictRect");Gr.default=Kr;var Zr={};Object.defineProperty(Zr,"__esModule",{value:!0}),Zr.restrictSize=Zr.default=void 0;var Jr={width:-1/0,height:-1/0},Qr={width:1/0,height:1/0};var to={start:function(t){return Lr.restrictEdges.start(t)},set:function(t){var e=t.interaction,n=t.state,r=t.rect,o=t.edges,i=n.options;if(o){var a=I.tlbrToXywh((0,Fr.getRestrictionRect)(i.min,e,t.coords))||Jr,s=I.tlbrToXywh((0,Fr.getRestrictionRect)(i.max,e,t.coords))||Qr;n.options={endOnly:i.endOnly,inner:(0,k.default)({},Lr.restrictEdges.noInner),outer:(0,k.default)({},Lr.restrictEdges.noOuter)},o.top?(n.options.inner.top=r.bottom-a.height,n.options.outer.top=r.bottom-s.height):o.bottom&&(n.options.inner.bottom=r.top+a.height,n.options.outer.bottom=r.top+s.height),o.left?(n.options.inner.left=r.right-a.width,n.options.outer.left=r.right-s.width):o.right&&(n.options.inner.right=r.left+a.width,n.options.outer.right=r.left+s.width),Lr.restrictEdges.set(t),n.options=i}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};Zr.restrictSize=to;var eo=(0,De.makeModifier)(to,"restrictSize");Zr.default=eo;var no={};Object.defineProperty(no,"__esModule",{value:!0}),Object.defineProperty(no,"default",{enumerable:!0,get:function(){return Ar.default}});var ro={};Object.defineProperty(ro,"__esModule",{value:!0}),ro.snap=ro.default=void 0;var oo={start:function(t){var e,n=t.interaction,r=t.interactable,o=t.element,i=t.rect,a=t.state,s=t.startOffset,l=a.options,u=l.offsetWithOrigin?function(t){var e=t.interaction.element;return(0,I.rectToXY)((0,I.resolveRectLike)(t.state.options.origin,null,null,[e]))||(0,z.default)(t.interactable,e,t.interaction.prepared.name)}(t):{x:0,y:0};if("startCoords"===l.offset)e={x:n.coords.start.page.x,y:n.coords.start.page.y};else{var c=(0,I.resolveRectLike)(l.offset,r,o,[n]);(e=(0,I.rectToXY)(c)||{x:0,y:0}).x+=u.x,e.y+=u.y}var f=l.relativePoints;a.offsets=i&&f&&f.length?f.map((function(t,n){return{index:n,relativePoint:t,x:s.left-i.width*t.x+e.x,y:s.top-i.height*t.y+e.y}})):[(0,k.default)({index:0,relativePoint:null},e)]},set:function(t){var e=t.interaction,n=t.coords,r=t.state,o=r.options,i=r.offsets,s=(0,z.default)(e.interactable,e.element,e.prepared.name),l=(0,k.default)({},n),u=[];o.offsetWithOrigin||(l.x-=s.x,l.y-=s.y);for(var c=0;c<i.length;c++)for(var f=i[c],d=l.x-f.x,p=l.y-f.y,v=0,h=o.targets.length;v<h;v++){var g=o.targets[v],y=void 0;(y=a.default.func(g)?g(d,p,e._proxy,f,v):g)&&u.push({x:(a.default.number(y.x)?y.x:d)+f.x,y:(a.default.number(y.y)?y.y:p)+f.y,range:a.default.number(y.range)?y.range:o.range,source:g,index:v,offset:f})}for(var m={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},b=0;b<u.length;b++){var x=u[b],w=x.range,_=x.x-l.x,S=x.y-l.y,P=(0,F.default)(_,S),O=P<=w;w===1/0&&m.inRange&&m.range!==1/0&&(O=!1),m.target&&!(O?m.inRange&&w!==1/0?P/w<m.distance/m.range:w===1/0&&m.range!==1/0||P<m.distance:!m.inRange&&P<m.distance)||(m.target=x,m.distance=P,m.range=w,m.inRange=O,m.delta.x=_,m.delta.y=S)}return m.inRange&&(n.x=m.target.x,n.y=m.target.y),r.closest=m,m},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};ro.snap=oo;var io=(0,De.makeModifier)(oo,"snap");ro.default=io;var ao={};function so(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return lo(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lo(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function lo(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(ao,"__esModule",{value:!0}),ao.snapSize=ao.default=void 0;var uo={start:function(t){var e=t.state,n=t.edges,r=e.options;if(!n)return null;t.state={options:{targets:null,relativePoints:[{x:n.left?0:1,y:n.top?0:1}],offset:r.offset||"self",origin:{x:0,y:0},range:r.range}},e.targetFields=e.targetFields||[["width","height"],["x","y"]],ro.snap.start(t),e.offsets=t.state.offsets,t.state=e},set:function(t){var e=t.interaction,n=t.state,r=t.coords,o=n.options,i=n.offsets,s={x:r.x-i[0].x,y:r.y-i[0].y};n.options=(0,k.default)({},o),n.options.targets=[];for(var l=0;l<(o.targets||[]).length;l++){var u=(o.targets||[])[l],c=void 0;if(c=a.default.func(u)?u(s.x,s.y,e):u){for(var f=0;f<n.targetFields.length;f++){var d=so(n.targetFields[f],2),p=d[0],v=d[1];if(p in c||v in c){c.x=c[p],c.y=c[v];break}}n.options.targets.push(c)}}var h=ro.snap.set(t);return n.options=o,h},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};ao.snapSize=uo;var co=(0,De.makeModifier)(uo,"snapSize");ao.default=co;var fo={};Object.defineProperty(fo,"__esModule",{value:!0}),fo.snapEdges=fo.default=void 0;var po={start:function(t){var e=t.edges;return e?(t.state.targetFields=t.state.targetFields||[[e.left?"left":"right",e.top?"top":"bottom"]],ao.snapSize.start(t)):null},set:ao.snapSize.set,defaults:(0,k.default)((0,Pe.default)(ao.snapSize.defaults),{targets:null,range:null,offset:{x:0,y:0}})};fo.snapEdges=po;var vo=(0,De.makeModifier)(po,"snapEdges");fo.default=vo;var ho={};Object.defineProperty(ho,"__esModule",{value:!0}),Object.defineProperty(ho,"default",{enumerable:!0,get:function(){return Ar.default}});var go={};Object.defineProperty(go,"__esModule",{value:!0}),Object.defineProperty(go,"default",{enumerable:!0,get:function(){return Ar.default}});var yo={};Object.defineProperty(yo,"__esModule",{value:!0}),yo.default=void 0;var mo={aspectRatio:Or.default,restrictEdges:Lr.default,restrict:Fr.default,restrictRect:Gr.default,restrictSize:Zr.default,snapEdges:fo.default,snap:ro.default,snapSize:ao.default,spring:ho.default,avoid:Rr.default,transform:go.default,rubberband:no.default};yo.default=mo;var bo={};Object.defineProperty(bo,"__esModule",{value:!0}),bo.default=void 0;var xo={id:"modifiers",install:function(t){var e=t.interactStatic;for(var n in t.usePlugin(De.default),t.usePlugin(Sr.default),e.modifiers=yo.default,yo.default){var r=yo.default[n],o=r._defaults,i=r._methods;o._methods=i,t.defaults.perAction[n]=o}}};bo.default=xo;var wo={};Object.defineProperty(wo,"__esModule",{value:!0}),wo.default=void 0;wo.default={};var _o={};function So(t){return(So="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Po(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Oo(t,e){return(Oo=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Eo(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=jo(t);if(e){var o=jo(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return To(this,n)}}function To(t,e){return!e||"object"!==So(e)&&"function"!=typeof e?Mo(t):e}function Mo(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function jo(t){return(jo=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(_o,"__esModule",{value:!0}),_o.PointerEvent=_o.default=void 0;var ko=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Oo(t,e)}(i,t);var e,n,r,o=Eo(i);function i(t,e,n,r,a,s){var l;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(l=o.call(this,a)).type=void 0,l.originalEvent=void 0,l.pointerId=void 0,l.pointerType=void 0,l.double=void 0,l.pageX=void 0,l.pageY=void 0,l.clientX=void 0,l.clientY=void 0,l.dt=void 0,l.eventable=void 0,L.pointerExtend(Mo(l),n),n!==e&&L.pointerExtend(Mo(l),e),l.timeStamp=s,l.originalEvent=n,l.type=t,l.pointerId=L.getPointerId(e),l.pointerType=L.getPointerType(e),l.target=r,l.currentTarget=null,"tap"===t){var u=a.getPointerIndex(e);l.dt=l.timeStamp-a.pointers[u].downTime;var c=l.timeStamp-a.tapTime;l.double=!!(a.prevTap&&"doubletap"!==a.prevTap.type&&a.prevTap.target===l.target&&c<500)}else"doubletap"===t&&(l.dt=e.timeStamp-a.tapTime);return l}return e=i,(n=[{key:"_subtractOrigin",value:function(t){var e=t.x,n=t.y;return this.pageX-=e,this.pageY-=n,this.clientX-=e,this.clientY-=n,this}},{key:"_addOrigin",value:function(t){var e=t.x,n=t.y;return this.pageX+=e,this.pageY+=n,this.clientX+=e,this.clientY+=n,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}])&&Po(e.prototype,n),r&&Po(e,r),i}($.default);_o.PointerEvent=_o.default=ko;var Io={};Object.defineProperty(Io,"__esModule",{value:!0}),Io.default=void 0;var Do={id:"pointer-events/base",install:function(t){t.pointerEvents=Do,t.defaults.actions.pointerEvents=Do.defaults,(0,k.default)(t.actions.phaselessTypes,Do.types)},listeners:{"interactions:new":function(t){var e=t.interaction;e.prevTap=null,e.tapTime=0},"interactions:update-pointer":function(t){var e=t.down,n=t.pointerInfo;if(!e&&n.hold)return;n.hold={duration:1/0,timeout:null}},"interactions:move":function(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget,a=t.duplicate,s=n.getPointerIndex(r);a||n.pointerIsDown&&!n.pointerWasMoved||(n.pointerIsDown&&clearTimeout(n.pointers[s].hold.timeout),Ao({interaction:n,pointer:r,event:o,eventTarget:i,type:"move"},e))},"interactions:down":function(t,e){!function(t,e){for(var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget,a=t.pointerIndex,s=n.pointers[a].hold,l=S.getPath(i),u={interaction:n,pointer:r,event:o,eventTarget:i,type:"hold",targets:[],path:l,node:null},c=0;c<l.length;c++){var f=l[c];u.node=f,e.fire("pointerEvents:collect-targets",u)}if(!u.targets.length)return;for(var d=1/0,p=0;p<u.targets.length;p++){var v=u.targets[p].eventable.options.holdDuration;v<d&&(d=v)}s.duration=d,s.timeout=setTimeout((function(){Ao({interaction:n,eventTarget:i,pointer:r,event:o,type:"hold"},e)}),d)}(t,e),Ao(t,e)},"interactions:up":function(t,e){Co(t),Ao(t,e),function(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget;n.pointerWasMoved||Ao({interaction:n,eventTarget:i,pointer:r,event:o,type:"tap"},e)}(t,e)},"interactions:cancel":function(t,e){Co(t),Ao(t,e)}},PointerEvent:_o.PointerEvent,fire:Ao,collectEventTargets:zo,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function Ao(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget,a=t.type,s=t.targets,l=void 0===s?zo(t,e):s,u=new _o.PointerEvent(a,r,o,i,n,e.now());e.fire("pointerEvents:new",{pointerEvent:u});for(var c={interaction:n,pointer:r,event:o,eventTarget:i,targets:l,type:a,pointerEvent:u},f=0;f<l.length;f++){var d=l[f];for(var p in d.props||{})u[p]=d.props[p];var v=(0,z.default)(d.eventable,d.node);if(u._subtractOrigin(v),u.eventable=d.eventable,u.currentTarget=d.node,d.eventable.fire(u),u._addOrigin(v),u.immediatePropagationStopped||u.propagationStopped&&f+1<l.length&&l[f+1].node!==u.currentTarget)break}if(e.fire("pointerEvents:fired",c),"tap"===a){var h=u.double?Ao({interaction:n,pointer:r,event:o,eventTarget:i,type:"doubletap"},e):u;n.prevTap=h,n.tapTime=h.timeStamp}return u}function zo(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget,a=t.type,s=n.getPointerIndex(r),l=n.pointers[s];if("tap"===a&&(n.pointerWasMoved||!l||l.downTarget!==i))return[];for(var u=S.getPath(i),c={interaction:n,pointer:r,event:o,eventTarget:i,type:a,path:u,targets:[],node:null},f=0;f<u.length;f++){var d=u[f];c.node=d,e.fire("pointerEvents:collect-targets",c)}return"hold"===a&&(c.targets=c.targets.filter((function(t){return t.eventable.options.holdDuration===n.pointers[s].hold.duration}))),c.targets}function Co(t){var e=t.interaction,n=t.pointerIndex;e.pointers[n].hold&&clearTimeout(e.pointers[n].hold.timeout)}var Ro=Do;Io.default=Ro;var Fo={};function Xo(t){var e=t.interaction;e.holdIntervalHandle&&(clearInterval(e.holdIntervalHandle),e.holdIntervalHandle=null)}Object.defineProperty(Fo,"__esModule",{value:!0}),Fo.default=void 0;var Yo={id:"pointer-events/holdRepeat",install:function(t){t.usePlugin(Io.default);var e=t.pointerEvents;e.defaults.holdRepeatInterval=0,e.types.holdrepeat=t.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce((function(t,e){return t["pointerEvents:".concat(e)]=Xo,t}),{"pointerEvents:new":function(t){var e=t.pointerEvent;"hold"===e.type&&(e.count=(e.count||0)+1)},"pointerEvents:fired":function(t,e){var n=t.interaction,r=t.pointerEvent,o=t.eventTarget,i=t.targets;if("hold"===r.type&&i.length){var a=i[0].eventable.options.holdRepeatInterval;a<=0||(n.holdIntervalHandle=setTimeout((function(){e.pointerEvents.fire({interaction:n,eventTarget:o,type:"hold",pointer:r,event:r},e)}),a))}}})};Fo.default=Yo;var Wo={};function Lo(t){return(0,k.default)(this.events.options,t),this}Object.defineProperty(Wo,"__esModule",{value:!0}),Wo.default=void 0;var Bo={id:"pointer-events/interactableTargets",install:function(t){var e=t.Interactable;e.prototype.pointerEvents=Lo;var n=e.prototype._backCompatOption;e.prototype._backCompatOption=function(t,e){var r=n.call(this,t,e);return r===this&&(this.events.options[t]=e),r}},listeners:{"pointerEvents:collect-targets":function(t,e){var n=t.targets,r=t.node,o=t.type,i=t.eventTarget;e.interactables.forEachMatch(r,(function(t){var e=t.events,a=e.options;e.types[o]&&e.types[o].length&&t.testIgnoreAllow(a,r,i)&&n.push({node:r,eventable:e,props:{interactable:t}})}))},"interactable:new":function(t){var e=t.interactable;e.events.getRect=function(t){return e.getRect(t)}},"interactable:set":function(t,e){var n=t.interactable,r=t.options;(0,k.default)(n.events.options,e.pointerEvents.defaults),(0,k.default)(n.events.options,r.pointerEvents||{})}}};Wo.default=Bo;var Uo={};Object.defineProperty(Uo,"__esModule",{value:!0}),Object.defineProperty(Uo,"holdRepeat",{enumerable:!0,get:function(){return Fo.default}}),Object.defineProperty(Uo,"interactableTargets",{enumerable:!0,get:function(){return Wo.default}}),Uo.pointerEvents=Uo.default=void 0,Uo.pointerEvents=Io;var Vo={id:"pointer-events",install:function(t){t.usePlugin(Io),t.usePlugin(Fo.default),t.usePlugin(Wo.default)}};Uo.default=Vo;var qo={};Object.defineProperty(qo,"__esModule",{value:!0}),qo.default=void 0;qo.default={};var No={};function Go(t){var e=t.Interactable;t.actions.phases.reflow=!0,e.prototype.reflow=function(e){return function(t,e,n){for(var r=a.default.string(t.target)?J.from(t._context.querySelectorAll(t.target)):[t.target],o=n.window.Promise,i=o?[]:null,s=function(){var a=r[l],s=t.getRect(a);if(!s)return"break";var u=J.find(n.interactions.list,(function(n){return n.interacting()&&n.interactable===t&&n.element===a&&n.prepared.name===e.name})),c=void 0;if(u)u.move(),i&&(c=u._reflowPromise||new o((function(t){u._reflowResolve=t})));else{var f=(0,I.tlbrToXywh)(s),d={page:{x:f.x,y:f.y},client:{x:f.x,y:f.y},timeStamp:n.now()},p=L.coordsToEvent(d);c=function(t,e,n,r,o){var i=t.interactions.new({pointerType:"reflow"}),a={interaction:i,event:o,pointer:o,eventTarget:n,phase:"reflow"};i.interactable=e,i.element=n,i.prepared=(0,k.default)({},r),i.prevEvent=o,i.updatePointer(o,o,n,!0),i._doPhase(a);var s=t.window.Promise,l=s?new s((function(t){i._reflowResolve=t})):null;i._reflowPromise=l,i.start(r,e,n),i._interacting?(i.move(a),i.end(o)):i.stop();return i.removePointer(o,o),i.pointerIsDown=!1,l}(n,t,a,e,p)}i&&i.push(c)},l=0;l<r.length;l++){if("break"===s())break}return i&&o.all(i).then((function(){return t}))}(this,e,t)}}Object.defineProperty(No,"__esModule",{value:!0}),No.install=Go,No.default=void 0;var $o={id:"reflow",install:Go,listeners:{"interactions:stop":function(t,e){var n=t.interaction;"reflow"===n.pointerType&&(n._reflowResolve&&n._reflowResolve(),J.remove(e.interactions.list,n))}}};No.default=$o;var Ho={};Object.defineProperty(Ho,"__esModule",{value:!0}),Ho.default=void 0;Ho.default={};var Ko={};Object.defineProperty(Ko,"__esModule",{value:!0}),Ko.exchange=void 0;Ko.exchange={};var Zo={};Object.defineProperty(Zo,"__esModule",{value:!0}),Zo.default=void 0;Zo.default={};var Jo={exports:{}};function Qo(t){return(Qo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(Jo.exports,"__esModule",{value:!0}),Jo.exports.default=void 0,dr.default.use(wo.default),dr.default.use(ue.default),dr.default.use(tn.default),dr.default.use(le.default),dr.default.use(jt.default),dr.default.use(Uo.default),dr.default.use(ln.default),dr.default.use(bo.default),dr.default.use(ae.default),dr.default.use(Tt.default),dr.default.use(Ct.default),dr.default.use(No.default),dr.default.use(Se.default),dr.default.use(Zo.default),dr.default.use(qo.default),dr.default.__utils={exchange:Ko.exchange,displace:Ho,pointer:L},dr.default.use(he.default);var ti=dr.default;if(Jo.exports.default=ti,"object"===Qo(Jo)&&Jo)try{Jo.exports=dr.default}catch(t){}dr.default.default=dr.default,Jo=Jo.exports;var ei={exports:{}};function ni(t){return(ni="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(ei.exports,"__esModule",{value:!0}),ei.exports.default=void 0;var ri=Jo.default;if(ei.exports.default=ri,"object"===ni(ei)&&ei)try{ei.exports=Jo.default}catch(t){}return Jo.default.default=Jo.default,ei=ei.exports}));
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

module.exports = require("vue");

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

    var styleId = "erd_scroll_detection_scrollbar_style";
    var detectionContainerClass = "erd_scroll_detection_container";

    function initDocument(targetDocument) {
        // Inject the scrollbar styling that prevents them from appearing sometimes in Chrome.
        // The injected container needs to have a class, so that it may be styled with CSS (pseudo elements).
        injectScrollStyle(targetDocument, styleId, detectionContainerClass);
    }

    initDocument(window.document);

    function buildCssTextString(rules) {
        var seperator = options.important ? " !important; " : "; ";

        return (rules.join(seperator) + seperator).trim();
    }

    function getScrollbarSizes() {
        var width = 500;
        var height = 500;

        var child = document.createElement("div");
        child.style.cssText = buildCssTextString(["position: absolute", "width: " + width*2 + "px", "height: " + height*2 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);

        var container = document.createElement("div");
        container.style.cssText = buildCssTextString(["position: absolute", "width: " + width + "px", "height: " + height + "px", "overflow: scroll", "visibility: none", "top: " + -width*3 + "px", "left: " + -height*3 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);

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

    function injectScrollStyle(targetDocument, styleId, containerClass) {
        function injectStyle(style, method) {
            method = method || function (element) {
                targetDocument.head.appendChild(element);
            };

            var styleElement = targetDocument.createElement("style");
            styleElement.innerHTML = style;
            styleElement.id = styleId;
            method(styleElement);
            return styleElement;
        }

        if (!targetDocument.getElementById(styleId)) {
            var containerAnimationClass = containerClass + "_animation";
            var containerAnimationActiveClass = containerClass + "_animation_active";
            var style = "/* Created by the element-resize-detector library. */\n";
            style += "." + containerClass + " > div::-webkit-scrollbar { " + buildCssTextString(["display: none"]) + " }\n\n";
            style += "." + containerAnimationActiveClass + " { " + buildCssTextString(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + containerAnimationClass, "animation-name: " + containerAnimationClass]) + " }\n";
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
                container.style.cssText     = buildCssTextString(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]);
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
                    element.style.setProperty("position", "relative",options.important ? "important" : "");

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

                return ["left: " + left, "top: " + top, "right: " + right, "bottom: " + bottom];
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
            var containerContainerStyle = buildCssTextString(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]);
            var containerStyle          = buildCssTextString(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat(getLeftTopBottomRightCssText(-(1 + scrollbarWidth), -(1 + scrollbarHeight), -scrollbarHeight, -scrollbarWidth)));
            var expandStyle             = buildCssTextString(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]);
            var shrinkStyle             = buildCssTextString(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]);
            var expandChildStyle        = buildCssTextString(["position: absolute", "left: 0", "top: 0"]);
            var shrinkChildStyle        = buildCssTextString(["position: absolute", "width: 200%", "height: 200%"]);

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
                expandChild.style.setProperty("width", expandWidth + "px", options.important ? "important" : "");
                expandChild.style.setProperty("height", expandHeight + "px", options.important ? "important" : "");
            }

            function updateDetectorElements(done) {
                var width           = element.offsetWidth;
                var height          = element.offsetHeight;

                // Check whether the size has actually changed since last time the algorithm ran. If not, some steps may be skipped.
                var sizeChanged = width !== getState(element).lastWidth || height !== getState(element).lastHeight;

                debug("Storing current size", width, height);

                // Store the size of the element sync here, so that multiple scroll events may be ignored in the event listeners.
                // Otherwise the if-check in handleScroll is useless.
                storeCurrentSize(element, width, height);

                // Since we delay the processing of the batch, there is a risk that uninstall has been called before the batch gets to execute.
                // Since there is no way to cancel the fn executions, we need to add an uninstall guard to all fns of the batch.

                batchProcessor.add(0, function performUpdateChildSizes() {
                    if (!sizeChanged) {
                        return;
                    }

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
                    // This function needs to be invoked event though the size is unchanged. The element could have been resized very quickly and then
                    // been restored to the original size, which will have changed the scrollbar positions.

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

                if (sizeChanged && done) {
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

                // Don't notify if the current size is the start size, and this is the first notification.
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

                updateDetectorElements(notifyListenersIfNeeded);
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
        uninstall: uninstall,
        initDocument: initDocument
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
    var importantCssRules = getOption(options, "important", false);
    var strategyOptions = {
        reporter: reporter,
        batchProcessor: batchProcessor,
        stateHandler: stateHandler,
        idHandler: idHandler,
        important: importantCssRules
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
                return detectionStrategy.makeDetectable({ debug: debug, important: importantCssRules }, element, function onElementDetectable(element) {
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

    function initDocument(targetDocument) {
        detectionStrategy.initDocument && detectionStrategy.initDocument(targetDocument);
    }

    return {
        listenTo: listenTo,
        removeListener: eventListenerHandler.removeListener,
        removeAllListeners: eventListenerHandler.removeAllListeners,
        uninstall: uninstall,
        initDocument: initDocument
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
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "GridLayout", function() { return /* reexport */ GridLayout; });
__webpack_require__.d(__webpack_exports__, "GridItem", function() { return /* reexport */ GridItem; });

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"65cb478a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GridItem.vue?vue&type=template&id=e63933a6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"item",staticClass:"vue-grid-item",class:_vm.classObj,style:(_vm.style)},[_vm._t("default"),(_vm.resizableAndNotStatic)?_c('span',{ref:"handle",class:_vm.resizableHandleClass}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/GridItem.vue?vue&type=template&id=e63933a6&

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
    minX: {
      type: Number,
      required: false,
      default: -Infinity
    },
    minY: {
      type: Number,
      required: false,
      default: -Infinity
    },
    maxX: {
      type: Number,
      required: false,
      default: Infinity
    },
    maxY: {
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
        'no-touch': this.isAndroid && this.draggableOrResizableAndNotStatic
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

      x = Math.max(Math.min(x, this.cols - this.innerW, this.maxX), this.minX, 0);
      y = Math.max(Math.min(y, this.maxRows - this.innerH, this.maxY), this.minY, 0);
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
          this.interactObj.on('dragstart dragmove dragend', function (event) {
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"65cb478a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GridLayout.vue?vue&type=template&id=bff27f1c&
var GridLayoutvue_type_template_id_bff27f1c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"item",staticClass:"vue-grid-layout",style:(_vm.mergedStyle)},[_vm._t("default"),_c('grid-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.isDragging),expression:"isDragging"}],staticClass:"vue-grid-placeholder",attrs:{"x":_vm.placeholder.x,"y":_vm.placeholder.y,"w":_vm.placeholder.w,"h":_vm.placeholder.h,"i":_vm.placeholder.i}})],2)}
var GridLayoutvue_type_template_id_bff27f1c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/GridLayout.vue?vue&type=template&id=bff27f1c&

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
    self.$emit('layout-created', self.layout);
  },
  beforeDestroy: function beforeDestroy() {
    //Remove listeners
    this.eventBus.$off('resizeEvent', this.resizeEventHandler);
    this.eventBus.$off('dragEvent', this.dragEventHandler);
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
        var collisions = getAllCollisions(this.layout, _objectSpread(_objectSpread({}, l), {}, {
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
  GridLayoutvue_type_template_id_bff27f1c_render,
  GridLayoutvue_type_template_id_bff27f1c_staticRenderFns,
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
//# sourceMappingURL=vue-grid-layout.common.js.map
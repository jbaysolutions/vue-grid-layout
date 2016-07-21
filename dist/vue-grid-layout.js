(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Vue"));
	else if(typeof define === 'function' && define.amd)
		define(["Vue"], factory);
	else if(typeof exports === 'object')
		exports["VueGridLayout"] = factory(require("Vue"));
	else
		root["VueGridLayout"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_48__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _GridItem = __webpack_require__(1);
	
	var _GridItem2 = _interopRequireDefault(_GridItem);
	
	var _GridLayout = __webpack_require__(50);
	
	var _GridLayout2 = _interopRequireDefault(_GridLayout);
	
	var _ResponsiveGridLayout = __webpack_require__(68);
	
	var _ResponsiveGridLayout2 = _interopRequireDefault(_ResponsiveGridLayout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VueGridLayout = {
	    ResponsiveGridLayout: _ResponsiveGridLayout2.default,
	    GridLayout: _GridLayout2.default,
	    GridItem: _GridItem2.default
	};
	
	module.exports = VueGridLayout;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\GridItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(49)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./GridItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./GridItem.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./GridItem.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.vue-grid-item {\n    -webkit-transition: all 200ms ease;\n    transition: all 200ms ease;\n    -webkit-transition-property: left, top;\n    transition-property: left, top;\n}\n.vue-grid-item.cssTransforms {\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n}\n.vue-grid-item.resizing {\n    z-index: 1;\n    opacity: 0.9;\n}\n\n.vue-grid-item.vue-draggable-dragging {\n    /*transition: none;*/\n    /*background-color: red;*/\n    z-index: 3;\n}\n\n.vue-grid-item.vue-grid-placeholder {\n    background: red;\n    opacity: 0.2;\n    -webkit-transition-duration: 100ms;\n            transition-duration: 100ms;\n    z-index: 2;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n}\n\n.vue-grid-item > .vue-resizable-handle {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    bottom: 0;\n    right: 0;\n    background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');\n    background-position: bottom right;\n    padding: 0 3px 3px 0;\n    background-repeat: no-repeat;\n    background-origin: content-box;\n    box-sizing: border-box;\n    cursor: se-resize;\n}\n\n.vue-resizable {\n    position: relative;\n}\n.vue-resizable-handle {\n    z-index: 5000;\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    bottom: 0;\n    right: 0;\n    background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');\n    background-position: bottom right;\n    padding: 0 3px 3px 0;\n    background-repeat: no-repeat;\n    background-origin: content-box;\n    box-sizing: border-box;\n    cursor: se-resize;\n}\n\n.vue-grid-item:not(.vue-grid-placeholder) {\n    background: #ccc;\n    border: 1px solid black;\n}\n\n.vue-grid-item.static {\n    background: #cce;\n}\n.vue-grid-item .text {\n    font-size: 24px;\n    text-align: center;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    height: 24px;\n}\n.vue-grid-item .minMax {\n    font-size: 12px;\n}\n.vue-grid-item .add {\n    cursor: pointer;\n}\n\n", "", {"version":3,"sources":["/./src/GridItem.vue?2b831e51"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;AAoBA;IACA,mCAAA;IAAA,2BAAA;IACA,uCAAA;IAAA,+BAAA;CACA;AACA;IACA,+CAAA;IAAA,uCAAA;IAAA,+BAAA;IAAA,kDAAA;CACA;AACA;IACA,WAAA;IACA,aAAA;CACA;;AAEA;IACA,qBAAA;IACA,0BAAA;IACA,WAAA;CACA;;AAEA;IACA,gBAAA;IACA,aAAA;IACA,mCAAA;YAAA,2BAAA;IACA,WAAA;IACA,0BAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,kBAAA;CACA;;AAEA;IACA,mBAAA;IACA,YAAA;IACA,aAAA;IACA,UAAA;IACA,SAAA;IACA,s3BAAA;IACA,kCAAA;IACA,qBAAA;IACA,6BAAA;IACA,+BAAA;IACA,uBAAA;IACA,kBAAA;CACA;;AAEA;IACA,mBAAA;CACA;AACA;IACA,cAAA;IACA,mBAAA;IACA,YAAA;IACA,aAAA;IACA,UAAA;IACA,SAAA;IACA,s3BAAA;IACA,kCAAA;IACA,qBAAA;IACA,6BAAA;IACA,+BAAA;IACA,uBAAA;IACA,kBAAA;CACA;;AAEA;IACA,iBAAA;IACA,wBAAA;CACA;;AAEA;IACA,iBAAA;CACA;AACA;IACA,gBAAA;IACA,mBAAA;IACA,mBAAA;IACA,OAAA;IACA,UAAA;IACA,QAAA;IACA,SAAA;IACA,aAAA;IACA,aAAA;CACA;AACA;IACA,gBAAA;CACA;AACA;IACA,gBAAA;CACA","file":"GridItem.vue","sourcesContent":["<template>\r\n    <div v-el:item\r\n             class=\"vue-grid-item\"\r\n             :class=\"{ 'vue-resizable' : isResizable, 'vue-draggable-dragging' : isDragging, 'cssTransforms' : useCssTransforms }\"\r\n             :style=\"style\"\r\n        >\r\n        <slot></slot>\r\n        <!--span class=\"text\">{{id}}</span-->\r\n            <!--<span class=\"text\">{{i}}</span>-->\r\n            <!--<pre>\r\n                x: {{ x | json}}\r\n                y: {{ y | json}}\r\n                w: {{ w | json}}\r\n                h: {{ h | json}}\r\n            </pre>-->\r\n            <span v-if=\"isResizable\" v-el:handle class=\"vue-resizable-handle\"></span>\r\n        </div>\r\n    </div>\r\n</template>\r\n<style>\r\n    .vue-grid-item {\r\n        transition: all 200ms ease;\r\n        transition-property: left, top;\r\n    }\r\n    .vue-grid-item.cssTransforms {\r\n        transition-property: transform;\r\n    }\r\n    .vue-grid-item.resizing {\r\n        z-index: 1;\r\n        opacity: 0.9;\r\n    }\r\n\r\n    .vue-grid-item.vue-draggable-dragging {\r\n        /*transition: none;*/\r\n        /*background-color: red;*/\r\n        z-index: 3;\r\n    }\r\n\r\n    .vue-grid-item.vue-grid-placeholder {\r\n        background: red;\r\n        opacity: 0.2;\r\n        transition-duration: 100ms;\r\n        z-index: 2;\r\n        -webkit-user-select: none;\r\n        -moz-user-select: none;\r\n        -ms-user-select: none;\r\n        -o-user-select: none;\r\n        user-select: none;\r\n    }\r\n\r\n    .vue-grid-item > .vue-resizable-handle {\r\n        position: absolute;\r\n        width: 20px;\r\n        height: 20px;\r\n        bottom: 0;\r\n        right: 0;\r\n        background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');\r\n        background-position: bottom right;\r\n        padding: 0 3px 3px 0;\r\n        background-repeat: no-repeat;\r\n        background-origin: content-box;\r\n        box-sizing: border-box;\r\n        cursor: se-resize;\r\n    }\r\n\r\n    .vue-resizable {\r\n        position: relative;\r\n    }\r\n    .vue-resizable-handle {\r\n        z-index: 5000;\r\n        position: absolute;\r\n        width: 20px;\r\n        height: 20px;\r\n        bottom: 0;\r\n        right: 0;\r\n        background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');\r\n        background-position: bottom right;\r\n        padding: 0 3px 3px 0;\r\n        background-repeat: no-repeat;\r\n        background-origin: content-box;\r\n        box-sizing: border-box;\r\n        cursor: se-resize;\r\n    }\r\n\r\n    .vue-grid-item:not(.vue-grid-placeholder) {\r\n        background: #ccc;\r\n        border: 1px solid black;\r\n    }\r\n\r\n    .vue-grid-item.static {\r\n        background: #cce;\r\n    }\r\n    .vue-grid-item .text {\r\n        font-size: 24px;\r\n        text-align: center;\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        margin: auto;\r\n        height: 24px;\r\n    }\r\n    .vue-grid-item .minMax {\r\n        font-size: 12px;\r\n    }\r\n    .vue-grid-item .add {\r\n        cursor: pointer;\r\n    }\r\n\r\n</style>\r\n<script>\r\n    import {setTopLeft, setTransform, createMarkup, getLayoutItem} from './utils';\r\n\r\n    import {getControlPosition, offsetXYFromParentOf, createCoreData} from './draggableUtils';\r\n    var VueDragDrop = require('vue-drag-and-drop');\r\n    var Vue = require('vue');\r\n    Vue.use(VueDragDrop);\r\n\r\n    export default {\r\n        name: \"GridItem\",\r\n        props: {\r\n            /*cols: {\r\n                type: Number,\r\n                required: true\r\n            },*/\r\n            /*containerWidth: {\r\n                type: Number,\r\n                required: true\r\n\r\n            },\r\n            rowHeight: {\r\n                type: Number,\r\n                required: true\r\n            },\r\n            margin: {\r\n                type: Array,\r\n                required: true\r\n            },\r\n            maxRows: {\r\n                type: Number,\r\n                required: true\r\n            },\r\n            minH: {\r\n                type: Number,\r\n                required: false,\r\n                default: 1\r\n            },\r\n            minW: {\r\n                type: Number,\r\n                required: false,\r\n                default: 1\r\n            },\r\n            maxH: {\r\n                type: Number,\r\n                required: false,\r\n                default: Infinity\r\n            },\r\n            maxW: {\r\n                type: Number,\r\n                required: false,\r\n                default: Infinity\r\n            },\r\n            isDraggable: {\r\n                type: Boolean,\r\n                required: true\r\n            },\r\n            isResizable: {\r\n                type: Boolean,\r\n                required: true\r\n            },\r\n            useCssTransforms: {\r\n                type: Boolean,\r\n                required: true\r\n            },*/\r\n            static: {\r\n                type: Boolean,\r\n                required: false,\r\n                default: false\r\n            },\r\n            x: {\r\n                type: Number,\r\n                required: true\r\n            },\r\n            y: {\r\n                type: Number,\r\n                required: true\r\n            },\r\n            w: {\r\n                type: Number,\r\n                required: true\r\n            },\r\n            h: {\r\n                type: Number,\r\n                required: true\r\n            },\r\n            i: {\r\n                required: true\r\n            },\r\n        },\r\n        data: function() {\r\n            return {\r\n                cols: 1,\r\n                containerWidth: 100,\r\n                rowHeight: 30,\r\n                margin: [10, 10],\r\n                maxRows: Infinity,\r\n                minH: 1,\r\n                minW: 1,\r\n                maxH: Infinity,\r\n                maxW: Infinity,\r\n                isDraggable: true,\r\n                isResizable: true,\r\n                useCssTransforms: true,\r\n\r\n                isDragging: false,\r\n                dragging: null,\r\n                isResizing: false,\r\n                resizing: null,\r\n                lastX: NaN,\r\n                lastY: NaN,\r\n                lastW: NaN,\r\n                lastH: NaN,\r\n                className: \"\",\r\n                style: \"\"\r\n            }\r\n        },\r\n        ready: function() {\r\n            this.cols = this.$parent.colNum;\r\n            this.rowHeight = this.$parent.rowHeight;\r\n            this.margin = this.$parent.margin;\r\n            this.maxRows = this.$parent.maxRows;\r\n            this.minH = this.$parent.minH;\r\n            this.minW = this.$parent.minW;\r\n            this.maxH = this.$parent.maxH;\r\n            this.maxW = this.$parent.maxW;\r\n            this.isDraggable = this.$parent.isDraggable;\r\n            this.isResizable = this.$parent.isResizable;\r\n            this.useCssTransforms = this.$parent.useCssTransforms;\r\n            this.createStyle();\r\n//            var self = this;\r\n            if (this.isDraggable) {\r\n                var element = this.$els.item;\r\n                element.setAttribute('draggable', 'true');\r\n                element.addEventListener('dragstart', this.handleDragStart, false);\r\n                element.addEventListener('drag', this.handleDrag, false);\r\n                element.addEventListener('dragend', this.handleDragEnd, false);\r\n            }\r\n            if (this.isResizable) {\r\n                var resizeHandle = this.$els.handle;\r\n                resizeHandle.setAttribute('draggable', 'true');\r\n                resizeHandle.addEventListener('dragstart', this.handleResize, false);\r\n                resizeHandle.addEventListener('drag', this.handleResize, false);\r\n                resizeHandle.addEventListener('dragend', this.handleResize, false);\r\n            }\r\n            //this.pos = this.calcPosition();\r\n        },\r\n        watch: {\r\n            cols: function() {\r\n                this.createStyle();\r\n            },\r\n            containerWidth: function() {\r\n                this.createStyle();\r\n            },\r\n            x: function() {\r\n                this.createStyle();\r\n            },\r\n            y: function() {\r\n                this.createStyle();\r\n            },\r\n            h: function() {\r\n                this.createStyle();\r\n            },\r\n            w: function() {\r\n                this.createStyle();\r\n            }\r\n        },\r\n        computed: {\r\n            /*createStyle: function() {\r\n                var pos = this.calcPosition(this.x, this.y, this.w, this.h);\r\n                //const {usePercentages, containerWidth, useCssTransforms} = this.props;\r\n\r\n                let style;\r\n                // CSS Transforms support (default)\r\n                if (this.useCssTransforms) {\r\n                    style = setTransform(pos.top, pos.left, pos.width, pos.height);\r\n                }\r\n                // top,left (slow)\r\n                else {\r\n                    style = setTopLeft(pos.top, pos.left, pos.width, pos.height);\r\n                }\r\n\r\n                return createMarkup(style);\r\n            },*/\r\n        },\r\n        methods: {\r\n            createStyle: function() {\r\n                var pos = this.calcPosition(this.x, this.y, this.w, this.h);\r\n                //const {usePercentages, containerWidth, useCssTransforms} = this.props;\r\n\r\n                let style;\r\n                // CSS Transforms support (default)\r\n                if (this.useCssTransforms) {\r\n                    style = setTransform(pos.top, pos.left, pos.width, pos.height);\r\n                }\r\n                // top,left (slow)\r\n                else {\r\n                    style = setTopLeft(pos.top, pos.left, pos.width, pos.height);\r\n                }\r\n\r\n                this.style = createMarkup(style);\r\n            },\r\n            handleResize: function(event) {\r\n                //event.dataTransfer.setData('text', this.i);\r\n                const position = getControlPosition(event);\r\n                // Get the current drag point from the event. This is used as the offset.\r\n                if (position == null) return; // not possible but satisfies flow\r\n                const {x, y} = position;\r\n\r\n                if (x < 100 && y < 100) {\r\n//                    console.log(\"### NO => x=\" + x + \", y=\" + y);\r\n                    return;\r\n                }\r\n                const newSize = {width: 0, height: 0};\r\n                switch (event.type) {\r\n                    case \"dragstart\":\r\n                        var pos = this.calcPosition(this.x, this.y, this.w, this.h);\r\n                        newSize.width = pos.width;\r\n                        newSize.height = pos.height;\r\n                        this.resizing = newSize;\r\n                        this.isResizing = true;\r\n                        break;\r\n                    case \"dragend\":\r\n                        //console.log(\"### resize end => x=\" +this.x + \" y=\" + this.y + \" w=\" + this.w + \" h=\" + this.h);\r\n                        var pos = this.calcPosition(this.x, this.y, this.w, this.h);\r\n                        newSize.width = pos.width;\r\n                        newSize.height = pos.height;\r\n//                        console.log(\"### resize end => \" + JSON.stringify(newSize));\r\n                        this.resizing = null;\r\n                        this.isResizing = false;\r\n                        break;\r\n                    case \"drag\":\r\n//                        console.log(\"### resize => \" + event.type + \", lastW=\" + this.lastW + \", lastH=\" + this.lastH);\r\n                        const coreEvent = createCoreData(this.lastW, this.lastH, x, y);\r\n//                                console.log(\"### DRAG: \" + JSON.stringify(coreEvent));\r\n                        newSize.width = this.resizing.width + coreEvent.deltaX;\r\n                        newSize.height = this.resizing.height + coreEvent.deltaY;\r\n\r\n                        ///console.log(\"### resize => \" + event.type + \", deltaX=\" + coreEvent.deltaX + \", deltaY=\" + coreEvent.deltaY);\r\n                        this.resizing = newSize;\r\n                        break;\r\n                }\r\n/*\r\n                const coreEvent = createCoreData(self.lastW, self.lastH, x, y);\r\n                let width = this.width + coreEvent.deltaX, height = this.height + coreEvent.deltaY;\r\n*/\r\n                // Get new WH\r\n                var pos = this.calcWH(newSize.height, newSize.width);\r\n                if (pos.h >= 1) {\r\n                    this.h = pos.h;\r\n                } else {\r\n                    this.h = 1;\r\n                }\r\n                if (pos.w >= 1) {\r\n                    this.w = pos.w;\r\n                } else {\r\n                    this.w = 1;\r\n                }\r\n\r\n                var shouldUpdate = false;\r\n                if (this.lastW !== x && this.lastH !== y) {\r\n                    shouldUpdate = true;\r\n                }\r\n\r\n                this.lastW = x;\r\n                this.lastH = y;\r\n\r\n                if (shouldUpdate) {\r\n                    this.$dispatch(\"resizeEvent\", event.type, this.i, this.h, this.w);\r\n                }\r\n\r\n            },\r\n            handleDragStart: function(event) {\r\n//                console.log(\"### DRAG START\");\r\n                this.dragHandler(event, \"dragstart\");\r\n                //event.dataTransfer.setData('text', this.i);\r\n                /*// Create an event object with all the data parents need to make a decision here.\r\n                const coreEvent = createCoreData(this, x, y);*/\r\n\r\n\r\n            },\r\n            handleDrag: function(event) {\r\n                //console.log(\"### DRAG!\");\r\n                this.dragHandler(event, \"drag\");\r\n            },\r\n            handleDragEnd: function(event) {\r\n//                console.log(\"### DRAG END\");\r\n                this.dragHandler(event, \"dragend\");\r\n            },\r\n            dragHandler(event, type) {\r\n                if (this.isResizing) return;\r\n\r\n                const position = getControlPosition(event);\r\n//                var eventName = event.type;\r\n                var eventName = type;\r\n\r\n                // Get the current drag point from the event. This is used as the offset.\r\n                if (position == null) return; // not possible but satisfies flow\r\n                const {x, y} = position;\r\n\r\n                var shouldUpdate = false;\r\n\r\n                const newPosition = {top: 0, left: 0};\r\n                switch (eventName) {\r\n                    case \"dragstart\":\r\n                        var parentRect = event.target.offsetParent.getBoundingClientRect();\r\n                        var clientRect = event.target.getBoundingClientRect();\r\n                        newPosition.left = clientRect.left - parentRect.left;\r\n                        newPosition.top = clientRect.top - parentRect.top;\r\n                        this.dragging = newPosition;\r\n                        this.isDragging = true;\r\n                        break;\r\n                    case \"dragend\":\r\n                        if (!this.isDragging) return;\r\n                        parentRect = event.target.offsetParent.getBoundingClientRect();\r\n                        clientRect = event.target.getBoundingClientRect();\r\n                        newPosition.left = clientRect.left - parentRect.left;\r\n                        newPosition.top = clientRect.top - parentRect.top;\r\n//                        console.log(\"### drag end => \" + JSON.stringify(newPosition));\r\n//                        console.log(\"### DROP: \" + JSON.stringify(newPosition));\r\n                        this.dragging = null;\r\n                        this.isDragging = false;\r\n                        shouldUpdate = true;\r\n                        break;\r\n                    case \"drag\":\r\n                        const coreEvent = createCoreData(this.lastX, this.lastY, x, y);\r\n                        newPosition.left = this.dragging.left + coreEvent.deltaX;\r\n                        newPosition.top = this.dragging.top + coreEvent.deltaY;\r\n//                        console.log(\"### drag => \" + event.type + \", x=\" + x + \", y=\" + y);\r\n//                        console.log(\"### drag => \" + event.type + \", deltaX=\" + coreEvent.deltaX + \", deltaY=\" + coreEvent.deltaY);\r\n//                        console.log(\"### drag end => \" + JSON.stringify(newPosition));\r\n                        this.dragging = newPosition;\r\n                        break;\r\n                }\r\n\r\n                // Get new XY\r\n                var pos = this.calcXY(newPosition.top, newPosition.left);\r\n                this.x = pos.x;\r\n                this.y = pos.y;\r\n\r\n                if (this.lastX !== x && this.lastY !== y) {\r\n                    shouldUpdate = true;\r\n                }\r\n\r\n                this.lastX = x;\r\n                this.lastY = y;\r\n\r\n                if (shouldUpdate) {\r\n                    this.$dispatch(\"dragEvent\", eventName, this.i, this.x, this.y);\r\n                }\r\n            },\r\n            calcPosition: function(x, y, w, h) {\r\n                const colWidth = this.calcColWidth();\r\n\r\n                const out = {\r\n                    left: Math.round(colWidth * x + (x + 1) * this.margin[0]),\r\n                    top: Math.round(this.rowHeight * y + (y + 1) * this.margin[1]),\r\n                    // 0 * Infinity === NaN, which causes problems with resize constriants;\r\n                    // Fix this if it occurs.\r\n                    // Note we do it here rather than later because Math.round(Infinity) causes deopt\r\n                    width: w === Infinity ? w : Math.round(colWidth * w + Math.max(0, w - 1) * this.margin[0]),\r\n                    height: h === Infinity ? h : Math.round(this.rowHeight * h + Math.max(0, h - 1) * this.margin[1])\r\n                };\r\n\r\n                /*if (state && state.resizing) {\r\n                 out.width = Math.round(state.resizing.width);\r\n                 out.height = Math.round(state.resizing.height);\r\n                 }\r\n\r\n                 if (state && state.dragging) {\r\n                 out.top = Math.round(state.dragging.top);\r\n                 out.left = Math.round(state.dragging.left);\r\n                 }*/\r\n\r\n                return out;\r\n            },\r\n            /**\r\n             * Translate x and y coordinates from pixels to grid units.\r\n             * @param  {Number} top  Top position (relative to parent) in pixels.\r\n             * @param  {Number} left Left position (relative to parent) in pixels.\r\n             * @return {Object} x and y in grid units.\r\n             */\r\n            calcXY(top, left) {\r\n                const colWidth = this.calcColWidth();\r\n\r\n                // left = colWidth * x + margin * (x + 1)\r\n                // l = cx + m(x+1)\r\n                // l = cx + mx + m\r\n                // l - m = cx + mx\r\n                // l - m = x(c + m)\r\n                // (l - m) / (c + m) = x\r\n                // x = (left - margin) / (coldWidth + margin)\r\n                let x = Math.round((left - this.margin[0]) / (colWidth + this.margin[0]));\r\n                let y = Math.round((top - this.margin[1]) / (this.rowHeight + this.margin[1]));\r\n\r\n                // Capping\r\n                x = Math.max(Math.min(x, this.cols - this.w), 0);\r\n                y = Math.max(Math.min(y, this.maxRows - this.h), 0);\r\n\r\n                return {x, y};\r\n            },\r\n            // Helper for generating column width\r\n            calcColWidth() {\r\n                var colWidth = (this.containerWidth - (this.margin[0] * (this.cols + 1))) / this.cols;\r\n//                console.log(\"### COLS=\" + this.cols + \" COL WIDTH=\" + colWidth);\r\n                return colWidth;\r\n            },\r\n\r\n            /**\r\n             * Given a height and width in pixel values, calculate grid units.\r\n             * @param  {Number} height Height in pixels.\r\n             * @param  {Number} width  Width in pixels.\r\n             * @return {Object} w, h as grid units.\r\n             */\r\n            calcWH(height, width) {\r\n                const colWidth = this.calcColWidth();\r\n\r\n                // width = colWidth * w - (margin * (w - 1))\r\n                // ...\r\n                // w = (width + margin) / (colWidth + margin)\r\n                let w = Math.round((width + this.margin[0]) / (colWidth + this.margin[0]));\r\n                let h = Math.round((height + this.margin[1]) / (this.rowHeight + this.margin[1]));\r\n\r\n                // Capping\r\n                w = Math.max(Math.min(w, this.cols - this.x), 0);\r\n                h = Math.max(Math.min(h, this.maxRows - this.y), 0);\r\n                return {w, h};\r\n            }\r\n        },\r\n        events: {\r\n            updateWidth: function(width) {\r\n                this.containerWidth = width;\r\n            },\r\n            compact: function(layout) {\r\n                var l = getLayoutItem(layout, this.i);\r\n                this.x = l.x;\r\n                this.y = l.y;\r\n                this.h = l.h;\r\n                this.w = l.w;\r\n            }\r\n        }\r\n    }\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(7);
	
	var _draggableUtils = __webpack_require__(46);
	
	// <template>
	//     <div v-el:item
	//              class="vue-grid-item"
	//              :class="{ 'vue-resizable' : isResizable, 'vue-draggable-dragging' : isDragging, 'cssTransforms' : useCssTransforms }"
	//              :style="style"
	//         >
	//         <slot></slot>
	//         <!--span class="text">{{id}}</span-->
	//             <!--<span class="text">{{i}}</span>-->
	//             <!--<pre>
	//                 x: {{ x | json}}
	//                 y: {{ y | json}}
	//                 w: {{ w | json}}
	//                 h: {{ h | json}}
	//             </pre>-->
	//             <span v-if="isResizable" v-el:handle class="vue-resizable-handle"></span>
	//         </div>
	//     </div>
	// </template>
	// <style>
	//     .vue-grid-item {
	//         transition: all 200ms ease;
	//         transition-property: left, top;
	//     }
	//     .vue-grid-item.cssTransforms {
	//         transition-property: transform;
	//     }
	//     .vue-grid-item.resizing {
	//         z-index: 1;
	//         opacity: 0.9;
	//     }
	//
	//     .vue-grid-item.vue-draggable-dragging {
	//         /*transition: none;*/
	//         /*background-color: red;*/
	//         z-index: 3;
	//     }
	//
	//     .vue-grid-item.vue-grid-placeholder {
	//         background: red;
	//         opacity: 0.2;
	//         transition-duration: 100ms;
	//         z-index: 2;
	//         -webkit-user-select: none;
	//         -moz-user-select: none;
	//         -ms-user-select: none;
	//         -o-user-select: none;
	//         user-select: none;
	//     }
	//
	//     .vue-grid-item > .vue-resizable-handle {
	//         position: absolute;
	//         width: 20px;
	//         height: 20px;
	//         bottom: 0;
	//         right: 0;
	//         background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');
	//         background-position: bottom right;
	//         padding: 0 3px 3px 0;
	//         background-repeat: no-repeat;
	//         background-origin: content-box;
	//         box-sizing: border-box;
	//         cursor: se-resize;
	//     }
	//
	//     .vue-resizable {
	//         position: relative;
	//     }
	//     .vue-resizable-handle {
	//         z-index: 5000;
	//         position: absolute;
	//         width: 20px;
	//         height: 20px;
	//         bottom: 0;
	//         right: 0;
	//         background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');
	//         background-position: bottom right;
	//         padding: 0 3px 3px 0;
	//         background-repeat: no-repeat;
	//         background-origin: content-box;
	//         box-sizing: border-box;
	//         cursor: se-resize;
	//     }
	//
	//     .vue-grid-item:not(.vue-grid-placeholder) {
	//         background: #ccc;
	//         border: 1px solid black;
	//     }
	//
	//     .vue-grid-item.static {
	//         background: #cce;
	//     }
	//     .vue-grid-item .text {
	//         font-size: 24px;
	//         text-align: center;
	//         position: absolute;
	//         top: 0;
	//         bottom: 0;
	//         left: 0;
	//         right: 0;
	//         margin: auto;
	//         height: 24px;
	//     }
	//     .vue-grid-item .minMax {
	//         font-size: 12px;
	//     }
	//     .vue-grid-item .add {
	//         cursor: pointer;
	//     }
	//
	// </style>
	// <script>
	
	var VueDragDrop = __webpack_require__(47);
	var Vue = __webpack_require__(48);
	Vue.use(VueDragDrop);
	
	exports.default = {
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
	        isDraggable: {
	            type: Boolean,
	            required: true
	        },
	        isResizable: {
	            type: Boolean,
	            required: true
	        },
	        useCssTransforms: {
	            type: Boolean,
	            required: true
	        },*/
	        static: {
	            type: Boolean,
	            required: false,
	            default: false
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
	        }
	    },
	    data: function data() {
	        return {
	            cols: 1,
	            containerWidth: 100,
	            rowHeight: 30,
	            margin: [10, 10],
	            maxRows: Infinity,
	            minH: 1,
	            minW: 1,
	            maxH: Infinity,
	            maxW: Infinity,
	            isDraggable: true,
	            isResizable: true,
	            useCssTransforms: true,
	
	            isDragging: false,
	            dragging: null,
	            isResizing: false,
	            resizing: null,
	            lastX: NaN,
	            lastY: NaN,
	            lastW: NaN,
	            lastH: NaN,
	            className: "",
	            style: ""
	        };
	    },
	    ready: function ready() {
	        this.cols = this.$parent.colNum;
	        this.rowHeight = this.$parent.rowHeight;
	        this.margin = this.$parent.margin;
	        this.maxRows = this.$parent.maxRows;
	        this.minH = this.$parent.minH;
	        this.minW = this.$parent.minW;
	        this.maxH = this.$parent.maxH;
	        this.maxW = this.$parent.maxW;
	        this.isDraggable = this.$parent.isDraggable;
	        this.isResizable = this.$parent.isResizable;
	        this.useCssTransforms = this.$parent.useCssTransforms;
	        this.createStyle();
	        //            var self = this;
	        if (this.isDraggable) {
	            var element = this.$els.item;
	            element.setAttribute('draggable', 'true');
	            element.addEventListener('dragstart', this.handleDragStart, false);
	            element.addEventListener('drag', this.handleDrag, false);
	            element.addEventListener('dragend', this.handleDragEnd, false);
	        }
	        if (this.isResizable) {
	            var resizeHandle = this.$els.handle;
	            resizeHandle.setAttribute('draggable', 'true');
	            resizeHandle.addEventListener('dragstart', this.handleResize, false);
	            resizeHandle.addEventListener('drag', this.handleResize, false);
	            resizeHandle.addEventListener('dragend', this.handleResize, false);
	        }
	        //this.pos = this.calcPosition();
	    },
	    watch: {
	        cols: function cols() {
	            this.createStyle();
	        },
	        containerWidth: function containerWidth() {
	            this.createStyle();
	        },
	        x: function x() {
	            this.createStyle();
	        },
	        y: function y() {
	            this.createStyle();
	        },
	        h: function h() {
	            this.createStyle();
	        },
	        w: function w() {
	            this.createStyle();
	        }
	    },
	    computed: {
	        /*createStyle: function() {
	            var pos = this.calcPosition(this.x, this.y, this.w, this.h);
	            //const {usePercentages, containerWidth, useCssTransforms} = this.props;
	             let style;
	            // CSS Transforms support (default)
	            if (this.useCssTransforms) {
	                style = setTransform(pos.top, pos.left, pos.width, pos.height);
	            }
	            // top,left (slow)
	            else {
	                style = setTopLeft(pos.top, pos.left, pos.width, pos.height);
	            }
	             return createMarkup(style);
	        },*/
	    },
	    methods: {
	        createStyle: function createStyle() {
	            var pos = this.calcPosition(this.x, this.y, this.w, this.h);
	            //const {usePercentages, containerWidth, useCssTransforms} = this.props;
	
	            var style = void 0;
	            // CSS Transforms support (default)
	            if (this.useCssTransforms) {
	                style = (0, _utils.setTransform)(pos.top, pos.left, pos.width, pos.height);
	            }
	            // top,left (slow)
	            else {
	                    style = (0, _utils.setTopLeft)(pos.top, pos.left, pos.width, pos.height);
	                }
	
	            this.style = (0, _utils.createMarkup)(style);
	        },
	        handleResize: function handleResize(event) {
	            //event.dataTransfer.setData('text', this.i);
	            var position = (0, _draggableUtils.getControlPosition)(event);
	            // Get the current drag point from the event. This is used as the offset.
	            if (position == null) return; // not possible but satisfies flow
	            var x = position.x;
	            var y = position.y;
	
	
	            if (x < 100 && y < 100) {
	                //                    console.log("### NO => x=" + x + ", y=" + y);
	                return;
	            }
	            var newSize = { width: 0, height: 0 };
	            switch (event.type) {
	                case "dragstart":
	                    var pos = this.calcPosition(this.x, this.y, this.w, this.h);
	                    newSize.width = pos.width;
	                    newSize.height = pos.height;
	                    this.resizing = newSize;
	                    this.isResizing = true;
	                    break;
	                case "dragend":
	                    //console.log("### resize end => x=" +this.x + " y=" + this.y + " w=" + this.w + " h=" + this.h);
	                    var pos = this.calcPosition(this.x, this.y, this.w, this.h);
	                    newSize.width = pos.width;
	                    newSize.height = pos.height;
	                    //                        console.log("### resize end => " + JSON.stringify(newSize));
	                    this.resizing = null;
	                    this.isResizing = false;
	                    break;
	                case "drag":
	                    //                        console.log("### resize => " + event.type + ", lastW=" + this.lastW + ", lastH=" + this.lastH);
	                    var coreEvent = (0, _draggableUtils.createCoreData)(this.lastW, this.lastH, x, y);
	                    //                                console.log("### DRAG: " + JSON.stringify(coreEvent));
	                    newSize.width = this.resizing.width + coreEvent.deltaX;
	                    newSize.height = this.resizing.height + coreEvent.deltaY;
	
	                    ///console.log("### resize => " + event.type + ", deltaX=" + coreEvent.deltaX + ", deltaY=" + coreEvent.deltaY);
	                    this.resizing = newSize;
	                    break;
	            }
	            /*
	                            const coreEvent = createCoreData(self.lastW, self.lastH, x, y);
	                            let width = this.width + coreEvent.deltaX, height = this.height + coreEvent.deltaY;
	            */
	            // Get new WH
	            var pos = this.calcWH(newSize.height, newSize.width);
	            if (pos.h >= 1) {
	                this.h = pos.h;
	            } else {
	                this.h = 1;
	            }
	            if (pos.w >= 1) {
	                this.w = pos.w;
	            } else {
	                this.w = 1;
	            }
	
	            var shouldUpdate = false;
	            if (this.lastW !== x && this.lastH !== y) {
	                shouldUpdate = true;
	            }
	
	            this.lastW = x;
	            this.lastH = y;
	
	            if (shouldUpdate) {
	                this.$dispatch("resizeEvent", event.type, this.i, this.h, this.w);
	            }
	        },
	        handleDragStart: function handleDragStart(event) {
	            //                console.log("### DRAG START");
	            this.dragHandler(event, "dragstart");
	            //event.dataTransfer.setData('text', this.i);
	            /*// Create an event object with all the data parents need to make a decision here.
	            const coreEvent = createCoreData(this, x, y);*/
	        },
	        handleDrag: function handleDrag(event) {
	            //console.log("### DRAG!");
	            this.dragHandler(event, "drag");
	        },
	        handleDragEnd: function handleDragEnd(event) {
	            //                console.log("### DRAG END");
	            this.dragHandler(event, "dragend");
	        },
	        dragHandler: function dragHandler(event, type) {
	            if (this.isResizing) return;
	
	            var position = (0, _draggableUtils.getControlPosition)(event);
	            //                var eventName = event.type;
	            var eventName = type;
	
	            // Get the current drag point from the event. This is used as the offset.
	            if (position == null) return; // not possible but satisfies flow
	            var x = position.x;
	            var y = position.y;
	
	
	            var shouldUpdate = false;
	
	            var newPosition = { top: 0, left: 0 };
	            switch (eventName) {
	                case "dragstart":
	                    var parentRect = event.target.offsetParent.getBoundingClientRect();
	                    var clientRect = event.target.getBoundingClientRect();
	                    newPosition.left = clientRect.left - parentRect.left;
	                    newPosition.top = clientRect.top - parentRect.top;
	                    this.dragging = newPosition;
	                    this.isDragging = true;
	                    break;
	                case "dragend":
	                    if (!this.isDragging) return;
	                    parentRect = event.target.offsetParent.getBoundingClientRect();
	                    clientRect = event.target.getBoundingClientRect();
	                    newPosition.left = clientRect.left - parentRect.left;
	                    newPosition.top = clientRect.top - parentRect.top;
	                    //                        console.log("### drag end => " + JSON.stringify(newPosition));
	                    //                        console.log("### DROP: " + JSON.stringify(newPosition));
	                    this.dragging = null;
	                    this.isDragging = false;
	                    shouldUpdate = true;
	                    break;
	                case "drag":
	                    var coreEvent = (0, _draggableUtils.createCoreData)(this.lastX, this.lastY, x, y);
	                    newPosition.left = this.dragging.left + coreEvent.deltaX;
	                    newPosition.top = this.dragging.top + coreEvent.deltaY;
	                    //                        console.log("### drag => " + event.type + ", x=" + x + ", y=" + y);
	                    //                        console.log("### drag => " + event.type + ", deltaX=" + coreEvent.deltaX + ", deltaY=" + coreEvent.deltaY);
	                    //                        console.log("### drag end => " + JSON.stringify(newPosition));
	                    this.dragging = newPosition;
	                    break;
	            }
	
	            // Get new XY
	            var pos = this.calcXY(newPosition.top, newPosition.left);
	            this.x = pos.x;
	            this.y = pos.y;
	
	            if (this.lastX !== x && this.lastY !== y) {
	                shouldUpdate = true;
	            }
	
	            this.lastX = x;
	            this.lastY = y;
	
	            if (shouldUpdate) {
	                this.$dispatch("dragEvent", eventName, this.i, this.x, this.y);
	            }
	        },
	
	        calcPosition: function calcPosition(x, y, w, h) {
	            var colWidth = this.calcColWidth();
	
	            var out = {
	                left: Math.round(colWidth * x + (x + 1) * this.margin[0]),
	                top: Math.round(this.rowHeight * y + (y + 1) * this.margin[1]),
	                // 0 * Infinity === NaN, which causes problems with resize constriants;
	                // Fix this if it occurs.
	                // Note we do it here rather than later because Math.round(Infinity) causes deopt
	                width: w === Infinity ? w : Math.round(colWidth * w + Math.max(0, w - 1) * this.margin[0]),
	                height: h === Infinity ? h : Math.round(this.rowHeight * h + Math.max(0, h - 1) * this.margin[1])
	            };
	
	            /*if (state && state.resizing) {
	             out.width = Math.round(state.resizing.width);
	             out.height = Math.round(state.resizing.height);
	             }
	              if (state && state.dragging) {
	             out.top = Math.round(state.dragging.top);
	             out.left = Math.round(state.dragging.left);
	             }*/
	
	            return out;
	        },
	        /**
	         * Translate x and y coordinates from pixels to grid units.
	         * @param  {Number} top  Top position (relative to parent) in pixels.
	         * @param  {Number} left Left position (relative to parent) in pixels.
	         * @return {Object} x and y in grid units.
	         */
	        calcXY: function calcXY(top, left) {
	            var colWidth = this.calcColWidth();
	
	            // left = colWidth * x + margin * (x + 1)
	            // l = cx + m(x+1)
	            // l = cx + mx + m
	            // l - m = cx + mx
	            // l - m = x(c + m)
	            // (l - m) / (c + m) = x
	            // x = (left - margin) / (coldWidth + margin)
	            var x = Math.round((left - this.margin[0]) / (colWidth + this.margin[0]));
	            var y = Math.round((top - this.margin[1]) / (this.rowHeight + this.margin[1]));
	
	            // Capping
	            x = Math.max(Math.min(x, this.cols - this.w), 0);
	            y = Math.max(Math.min(y, this.maxRows - this.h), 0);
	
	            return { x: x, y: y };
	        },
	
	        // Helper for generating column width
	        calcColWidth: function calcColWidth() {
	            var colWidth = (this.containerWidth - this.margin[0] * (this.cols + 1)) / this.cols;
	            //                console.log("### COLS=" + this.cols + " COL WIDTH=" + colWidth);
	            return colWidth;
	        },
	
	
	        /**
	         * Given a height and width in pixel values, calculate grid units.
	         * @param  {Number} height Height in pixels.
	         * @param  {Number} width  Width in pixels.
	         * @return {Object} w, h as grid units.
	         */
	        calcWH: function calcWH(height, width) {
	            var colWidth = this.calcColWidth();
	
	            // width = colWidth * w - (margin * (w - 1))
	            // ...
	            // w = (width + margin) / (colWidth + margin)
	            var w = Math.round((width + this.margin[0]) / (colWidth + this.margin[0]));
	            var h = Math.round((height + this.margin[1]) / (this.rowHeight + this.margin[1]));
	
	            // Capping
	            w = Math.max(Math.min(w, this.cols - this.x), 0);
	            h = Math.max(Math.min(h, this.maxRows - this.y), 0);
	            return { w: w, h: h };
	        }
	    },
	    events: {
	        updateWidth: function updateWidth(width) {
	            this.containerWidth = width;
	        },
	        compact: function compact(layout) {
	            var l = (0, _utils.getLayoutItem)(layout, this.i);
	            this.x = l.x;
	            this.y = l.y;
	            this.h = l.h;
	            this.w = l.w;
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hyphenateRE = exports.IS_UNITLESS = undefined;
	
	var _keys = __webpack_require__(9);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _stringify = __webpack_require__(44);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	exports.bottom = bottom;
	exports.cloneLayout = cloneLayout;
	exports.cloneLayoutItem = cloneLayoutItem;
	exports.collides = collides;
	exports.compact = compact;
	exports.compactItem = compactItem;
	exports.correctBounds = correctBounds;
	exports.getLayoutItem = getLayoutItem;
	exports.getFirstCollision = getFirstCollision;
	exports.getAllCollisions = getAllCollisions;
	exports.getStatics = getStatics;
	exports.moveElement = moveElement;
	exports.moveElementAwayFromCollision = moveElementAwayFromCollision;
	exports.perc = perc;
	exports.setTransform = setTransform;
	exports.setTopLeft = setTopLeft;
	exports.sortLayoutItemsByRowCol = sortLayoutItemsByRowCol;
	exports.validateLayout = validateLayout;
	exports.autoBindHandlers = autoBindHandlers;
	exports.createMarkup = createMarkup;
	exports.addPx = addPx;
	exports.hyphenate = hyphenate;
	exports.findItemInArray = findItemInArray;
	exports.findAndRemove = findAndRemove;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// @flow
	/*:: export type LayoutItemRequired = {w: number, h: number, x: number, y: number, i: string};*/
	/*:: export type LayoutItem = LayoutItemRequired &
	                         {minW?: number, minH?: number, maxW?: number, maxH?: number,
	                          moved?: boolean, static?: boolean,
	                          isDraggable?: ?boolean, isResizable?: ?boolean};*/
	/*:: export type Layout = Array<LayoutItem>;*/
	/*:: export type Position = {left: number, top: number, width: number, height: number};*/
	/*:: export type DragCallbackData = {
	  node: HTMLElement,
	  x: number, y: number,
	  deltaX: number, deltaY: number,
	  lastX: number, lastY: number
	};*/
	/*:: export type DragEvent = {e: Event} & DragCallbackData;*/
	/*:: export type Size = {width: number, height: number};*/
	/*:: export type ResizeEvent = {e: Event, node: HTMLElement, size: Size};*/
	
	
	var isProduction = process.env.NODE_ENV === 'production';
	
	/**
	 * Return the bottom coordinate of the layout.
	 *
	 * @param  {Array} layout Layout array.
	 * @return {Number}       Bottom coordinate.
	 */
	function bottom(layout /*: Layout*/) /*: number*/ {
	  var max = 0,
	      bottomY = void 0;
	  for (var _i = 0, len = layout.length; _i < len; _i++) {
	    bottomY = layout[_i].y + layout[_i].h;
	    if (bottomY > max) max = bottomY;
	  }
	  return max;
	}
	
	function cloneLayout(layout /*: Layout*/) /*: Layout*/ {
	  var newLayout = Array(layout.length);
	  for (var _i2 = 0, len = layout.length; _i2 < len; _i2++) {
	    newLayout[_i2] = cloneLayoutItem(layout[_i2]);
	  }
	  return newLayout;
	}
	
	// Fast path to cloning, since this is monomorphic
	function cloneLayoutItem(layoutItem /*: LayoutItem*/) /*: LayoutItem*/ {
	  /*return {
	    w: layoutItem.w, h: layoutItem.h, x: layoutItem.x, y: layoutItem.y, i: layoutItem.i,
	    minW: layoutItem.minW, maxW: layoutItem.maxW, minH: layoutItem.minH, maxH: layoutItem.maxH,
	    moved: Boolean(layoutItem.moved), static: Boolean(layoutItem.static),
	    // These can be null
	    isDraggable: layoutItem.isDraggable, isResizable: layoutItem.isResizable
	  };*/
	  return JSON.parse((0, _stringify2.default)(layoutItem));
	}
	
	/**
	 * Given two layoutitems, check if they collide.
	 *
	 * @return {Boolean}   True if colliding.
	 */
	function collides(l1 /*: LayoutItem*/, l2 /*: LayoutItem*/) /*: boolean*/ {
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
	function compact(layout /*: Layout*/, verticalCompact /*: Boolean*/) /*: Layout*/ {
	  // Statics go in the compareWith array right away so items flow around them.
	  var compareWith = getStatics(layout);
	  // We go through the items by row and column.
	  var sorted = sortLayoutItemsByRowCol(layout);
	  // Holding for new items.
	  var out = Array(layout.length);
	
	  for (var _i3 = 0, len = sorted.length; _i3 < len; _i3++) {
	    var l = sorted[_i3];
	
	    // Don't move static elements
	    if (!l.static) {
	      l = compactItem(compareWith, l, verticalCompact);
	
	      // Add to comparison array. We only collide with items before this one.
	      // Statics are already in this array.
	      compareWith.push(l);
	    }
	
	    // Add to output array to make sure they still come out in the right order.
	    out[layout.indexOf(l)] = l;
	
	    // Clear moved flag, if it exists.
	    l.moved = false;
	  }
	
	  return out;
	}
	
	/**
	 * Compact an item in the layout.
	 */
	function compactItem(compareWith /*: Layout*/, l /*: LayoutItem*/, verticalCompact /*: boolean*/) /*: LayoutItem*/ {
	  if (verticalCompact) {
	    // Move the element up as far as it can go without colliding.
	    while (l.y > 0 && !getFirstCollision(compareWith, l)) {
	      l.y--;
	    }
	  }
	
	  // Move it down, and keep moving it down if it's colliding.
	  var collides = void 0;
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
	function correctBounds(layout /*: Layout*/, bounds /*: {cols: number}*/) /*: Layout*/ {
	  var collidesWith = getStatics(layout);
	  for (var _i4 = 0, len = layout.length; _i4 < len; _i4++) {
	    var l = layout[_i4];
	    // Overflows right
	    if (l.x + l.w > bounds.cols) l.x = bounds.cols - l.w;
	    // Overflows left
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
	function getLayoutItem(layout /*: Layout*/, id /*: string*/) /*: ?LayoutItem*/ {
	  for (var _i5 = 0, len = layout.length; _i5 < len; _i5++) {
	    if (layout[_i5].i === id) return layout[_i5];
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
	function getFirstCollision(layout /*: Layout*/, layoutItem /*: LayoutItem*/) /*: ?LayoutItem*/ {
	  for (var _i6 = 0, len = layout.length; _i6 < len; _i6++) {
	    if (collides(layout[_i6], layoutItem)) return layout[_i6];
	  }
	}
	
	function getAllCollisions(layout /*: Layout*/, layoutItem /*: LayoutItem*/) /*: Array<LayoutItem>*/ {
	  return layout.filter(function (l) {
	    return collides(l, layoutItem);
	  });
	}
	
	/**
	 * Get all static elements.
	 * @param  {Array} layout Array of layout objects.
	 * @return {Array}        Array of static layout items..
	 */
	function getStatics(layout /*: Layout*/) /*: Array<LayoutItem>*/ {
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
	function moveElement(layout /*: Layout*/, l /*: LayoutItem*/, x /*: Number*/, y /*: Number*/, isUserAction /*: Boolean*/) /*: Layout*/ {
	  if (l.static) return layout;
	
	  // Short-circuit if nothing to do.
	  if (l.y === y && l.x === x) return layout;
	
	  var movingUp = y && l.y > y;
	  // This is quite a bit faster than extending the object
	  if (typeof x === 'number') l.x = x;
	  if (typeof y === 'number') l.y = y;
	  l.moved = true;
	
	  // If this collides with anything, move it.
	  // When doing this comparison, we have to sort the items we compare with
	  // to ensure, in the case of multiple collisions, that we're getting the
	  // nearest collision.
	  var sorted = sortLayoutItemsByRowCol(layout);
	  if (movingUp) sorted = sorted.reverse();
	  var collisions = getAllCollisions(sorted, l);
	
	  // Move each item that collides away from this element.
	  for (var _i7 = 0, len = collisions.length; _i7 < len; _i7++) {
	    var collision = collisions[_i7];
	    // console.log('resolving collision between', l.i, 'at', l.y, 'and', collision.i, 'at', collision.y);
	
	    // Short circuit so we can't infinite loop
	    if (collision.moved) continue;
	
	    // This makes it feel a bit more precise by waiting to swap for just a bit when moving up.
	    if (l.y > collision.y && l.y - collision.y > collision.h / 4) continue;
	
	    // Don't move static items - we have to move *this* element away
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
	function moveElementAwayFromCollision(layout /*: Layout*/, collidesWith /*: LayoutItem*/, itemToMove /*: LayoutItem*/, isUserAction /*: ?boolean*/) /*: Layout*/ {
	
	  // If there is enough space above the collision to put this element, move it there.
	  // We only do this on the main collision as this can get funky in cascades and cause
	  // unwanted swapping behavior.
	  if (isUserAction) {
	    // Make a mock item so we don't modify the item here, only modify in moveElement.
	    var fakeItem /*: LayoutItem*/ = {
	      x: itemToMove.x,
	      y: itemToMove.y,
	      w: itemToMove.w,
	      h: itemToMove.h,
	      i: '-1'
	    };
	    fakeItem.y = Math.max(collidesWith.y - itemToMove.h, 0);
	    if (!getFirstCollision(layout, fakeItem)) {
	      return moveElement(layout, itemToMove, undefined, fakeItem.y);
	    }
	  }
	
	  // Previously this was optimized to move below the collision directly, but this can cause problems
	  // with cascading moves, as an item may actually leapflog a collision and cause a reversal in order.
	  return moveElement(layout, itemToMove, undefined, itemToMove.y + 1);
	}
	
	/**
	 * Helper to convert a number to a percentage string.
	 *
	 * @param  {Number} num Any number
	 * @return {String}     That number as a percentage.
	 */
	function perc(num /*: number*/) /*: string*/ {
	  return num * 100 + '%';
	}
	
	function setTransform(top, left, width, height) /*: Object*/ {
	  // Replace unitless items with px
	  var translate = "translate(" + left + "px," + top + "px)";
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
	
	function setTopLeft(top, left, width, height) /*: Object*/ {
	  return {
	    top: top + "px",
	    left: left + "px",
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
	function sortLayoutItemsByRowCol(layout /*: Layout*/) /*: Layout*/ {
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
	function validateLayout(layout /*: Layout*/, contextName /*: string*/) /*: void*/ {
	  contextName = contextName || "Layout";
	  var subProps = ['x', 'y', 'w', 'h'];
	  if (!Array.isArray(layout)) throw new Error(contextName + " must be an array!");
	  for (var _i8 = 0, len = layout.length; _i8 < len; _i8++) {
	    var item = layout[_i8];
	    for (var j = 0; j < subProps.length; j++) {
	      if (typeof item[subProps[j]] !== 'number') {
	        throw new Error('VueGridLayout: ' + contextName + '[' + _i8 + '].' + subProps[j] + ' must be a number!');
	      }
	    }
	    if (item.i && typeof item.i !== 'string') {
	      throw new Error('VueGridLayout: ' + contextName + '[' + _i8 + '].i must be a string!');
	    }
	    if (item.static !== undefined && typeof item.static !== 'boolean') {
	      throw new Error('VueGridLayout: ' + contextName + '[' + _i8 + '].static must be a boolean!');
	    }
	  }
	}
	
	// Flow can't really figure this out, so we just use Object
	function autoBindHandlers(el /*: Object*/, fns /*: Array<string>*/) /*: void*/ {
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
	  var keys = (0, _keys2.default)(obj);
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
	var IS_UNITLESS = exports.IS_UNITLESS = {
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
	
	var hyphenateRE = exports.hyphenateRE = /([a-z\d])([A-Z])/g;
	
	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}
	
	function findItemInArray(array, property, value) {
	  for (var i = 0; i < array.length; i++) {
	    if (array[i][property] == value) return true;
	  }return false;
	}
	
	function findAndRemove(array, property, value) {
	  array.forEach(function (result, index) {
	    if (result[property] === value) {
	      //Remove from array
	      array.splice(index, 1);
	    }
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(10), __esModule: true };

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(11);
	module.exports = __webpack_require__(31).Object.keys;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(12)
	  , $keys    = __webpack_require__(14);
	
	__webpack_require__(29)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(13);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(15)
	  , enumBugKeys = __webpack_require__(28);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(16)
	  , toIObject    = __webpack_require__(17)
	  , arrayIndexOf = __webpack_require__(20)(false)
	  , IE_PROTO     = __webpack_require__(24)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(18)
	  , defined = __webpack_require__(13);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(19);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(17)
	  , toLength  = __webpack_require__(21)
	  , toIndex   = __webpack_require__(23);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(22)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(22)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(25)('keys')
	  , uid    = __webpack_require__(27);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(26)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 27 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(30)
	  , core    = __webpack_require__(31)
	  , fails   = __webpack_require__(40);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(26)
	  , core      = __webpack_require__(31)
	  , ctx       = __webpack_require__(32)
	  , hide      = __webpack_require__(34)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
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
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
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

/***/ },
/* 31 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(33);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(35)
	  , createDesc = __webpack_require__(43);
	module.exports = __webpack_require__(39) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(36)
	  , IE8_DOM_DEFINE = __webpack_require__(38)
	  , toPrimitive    = __webpack_require__(42)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(39) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(37);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(39) && !__webpack_require__(40)(function(){
	  return Object.defineProperty(__webpack_require__(41)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(40)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(37)
	  , document = __webpack_require__(26).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(37);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(45), __esModule: true };

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(31)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getControlPosition = getControlPosition;
	exports.offsetXYFromParentOf = offsetXYFromParentOf;
	exports.createCoreData = createCoreData;
	// Get {x, y} positions from event.
	function getControlPosition(e) {
	    return offsetXYFromParentOf(e);
	}
	
	// Get from offsetParent
	function offsetXYFromParentOf(evt) {
	    var offsetParent = evt.target.offsetParent || document.body;
	    var offsetParentRect = evt.offsetParent === document.body ? { left: 0, top: 0 } : offsetParent.getBoundingClientRect();
	
	    var x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;
	    var y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;
	
	    /*const x = Math.round(evt.clientX + offsetParent.scrollLeft - offsetParentRect.left);
	    const y = Math.round(evt.clientY + offsetParent.scrollTop - offsetParentRect.top);*/
	
	    return { x: x, y: y };
	}
	
	// Create an data object exposed by <DraggableCore>'s events
	function createCoreData(lastX, lastY, x, y) {
	    // State changes are often (but not always!) async. We want the latest value.
	    var isStart = !isNum(lastX);
	
	    if (isStart) {
	        // If this is our first move, use the x and y as last coords.
	        return {
	            deltaX: 0, deltaY: 0,
	            lastX: x, lastY: y,
	            x: x, y: y
	        };
	    } else {
	        // Otherwise calculate proper values.
	        return {
	            deltaX: x - lastX, deltaY: y - lastY,
	            lastX: lastX, lastY: lastY,
	            x: x, y: y
	        };
	    }
	}
	
	function isNum(num) {
	    return typeof num === 'number' && !isNaN(num);
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* globals Vue */
	(function () {
	
	  var DragAndDrop = {}
	
	  DragAndDrop.install = function (Vue) {
	    Vue.directive('drag-and-drop', {
	      params: [
	      'drag-and-drop',
	      'drag-start',
	      'drag-over',
	      'drag-enter',
	      'drag-leave',
	      'drag-end',
	      'drop'
	      ],
	      bind: function () {
	        // use the VM so we only have 1 dragging item per app
	        this.vm._dragSrcEl = null;
	        this.handleDragStart = function (e) {
	          e.target.classList.add('dragging');
	          this.vm._dragSrcEl = e.target;
	          e.dataTransfer.effectAllowed = 'move';
	          // Need to set to something or else drag doesn't start
	          e.dataTransfer.setData('text', '*');
	          if (typeof(this.vm[this.params.dragStart]) === 'function') {
	            this.vm[this.params.dragStart].call(this, e.target);
	          }
	        }.bind(this);
	        this.handleDragOver = function(e) {
	          if (e.preventDefault) {
	            // allows dropping
	            e.preventDefault();
	          }
	          e.dataTransfer.dropEffect = 'move';
	          e.target.classList.add('drag-over');
	          if (typeof(this.vm[this.params.dragOver]) === 'function') {
	            this.vm[this.params.dragOver].call(this, e.target);
	          }
	          return false;
	        }.bind(this);
	        this.handleDragEnter = function(e) {
	          if (typeof(this.vm[this.params.dragEnter]) === 'function') {
	            this.vm[this.params.dragEnter].call(this, e.target);
	          }
	          e.target.classList.add('drag-enter');
	        }.bind(this);
	        this.handleDragLeave = function(e) {
	          if (typeof(this.vm[this.params.dragLeave]) === 'function') {
	            this.vm[this.params.dragLeave].call(this, e.target);
	          }
	          e.target.classList.remove('drag-enter');
	        }.bind(this);
	        this.handleDragEnd = function(e) {
	          e.target.classList.remove('dragging', 'drag-over', 'drag-enter');
	          if (typeof(this.vm[this.params.dragEnd]) === 'function') {
	            this.vm[this.params.dragEnd].call(this, e.target);
	          }
	        }.bind(this);
	        this.handleDrop = function(e) {
	          if (e.stopPropagation) {
	            // stops the browser from redirecting.
	            e.stopPropagation();
	          }
	          // Don't do anything if dropping the same column we're dragging.
	          if (this.vm._dragSrcEl != e.target) {
	            if (typeof(this.vm[this.params.drop]) === 'function') {
	              var el = (e.target.draggable) ? e.target : e.target.parentElement;
	              this.vm[this.params.drop].call(this, this.vm._dragSrcEl, el);
	            }
	          }
	          return false;
	        }.bind(this);
	        // setup the listeners
	        this.el.setAttribute('draggable', 'true');
	        this.el.addEventListener('dragstart', this.handleDragStart, false);
	        this.el.addEventListener('dragenter', this.handleDragEnter, false);
	        this.el.addEventListener('dragover', this.handleDragOver, false);
	        this.el.addEventListener('dragleave', this.handleDragLeave, false);
	        this.el.addEventListener('drop', this.handleDrop, false);
	        this.el.addEventListener('dragend', this.handleDragEnd, false);
	      },
	      update: function (newValue, oldValue) {
	        // console.log(this);
	      },
	      unbind: function () {
	        // shut er' down
	        this.el.classList.remove('dragging', 'drag-over', 'drag-enter');
	        this.el.removeAttribute('draggable');
	        this.el.removeEventListener('dragstart', this.handleDragStart);
	        this.el.removeEventListener('dragenter', this.handleDragEnter);
	        this.el.removeEventListener('dragover', this.handleDragOver);
	        this.el.removeEventListener('dragleave', this.handleDragLeave);
	      }
	    });
	  }
	
	  if (true) {
	    module.exports = DragAndDrop
	  } else if (typeof define == "function" && define.amd) {
	    define([], function(){ return DragAndDrop })
	  } else if (window.Vue) {
	    window.DragAndDrop = DragAndDrop
	    Vue.use(DragAndDrop)
	  }
	})()

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_48__;

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "\n<div v-el:item\n         class=\"vue-grid-item\"\n         :class=\"{ 'vue-resizable' : isResizable, 'vue-draggable-dragging' : isDragging, 'cssTransforms' : useCssTransforms }\"\n         :style=\"style\"\n    >\n    <slot></slot>\n    <!--span class=\"text\">{{id}}</span-->\n        <!--<span class=\"text\">{{i}}</span>-->\n        <!--<pre>\n            x: {{ x | json}}\n            y: {{ y | json}}\n            w: {{ w | json}}\n            h: {{ h | json}}\n        </pre>-->\n        <span v-if=\"isResizable\" v-el:handle class=\"vue-resizable-handle\"></span>\n    </div>\n</div>\n";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(51)
	__vue_script__ = __webpack_require__(53)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\GridLayout.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(67)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./GridLayout.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./GridLayout.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./GridLayout.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n.vue-grid-layout {\n    position: relative;\n    -webkit-transition: height 200ms ease;\n    transition: height 200ms ease;\n}\n", "", {"version":3,"sources":["/./src/GridLayout.vue?4ba8afa4"],"names":[],"mappings":";;;;;;;AAOA;IACA,mBAAA;IACA,sCAAA;IAAA,8BAAA;CACA","file":"GridLayout.vue","sourcesContent":["<template>\r\n    <div v-el:item class=\"vue-grid-layout\" :style=\"mergedStyle\">\r\n        <slot></slot>\r\n    </div>\r\n    <!--<pre>{{width|json}}</pre>-->\r\n</template>\r\n<style>\r\n    .vue-grid-layout {\r\n        position: relative;\r\n        transition: height 200ms ease;\r\n    }\r\n</style>\r\n<script>\r\n    var Vue = require('vue');\r\n\r\n    var elementResizeDetectorMaker = require(\"element-resize-detector\");\r\n\r\n    import {bottom, compact, getLayoutItem, moveElement, validateLayout} from './utils';\r\n    import GridItem from './GridItem.vue'\r\n\r\n    export default {\r\n        name: \"GridLayout\",\r\n        components: {\r\n            GridItem,\r\n        },\r\n        props: {\r\n            autoSize: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n            colNum: {\r\n                type: Number,\r\n                default: 12\r\n            },\r\n            rowHeight: {\r\n                type: Number,\r\n                default: 150\r\n            },\r\n            maxRows: {\r\n                type: Number,\r\n                default: Infinity\r\n            },\r\n            margin: {\r\n                type: Array,\r\n                default: function () { return [10, 10]; }\r\n            },\r\n            isDraggable: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n            isResizable: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n            useCssTransforms: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n            verticalCompact: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n            width: {\r\n                type: Number,\r\n                required: false,\r\n                default: null\r\n            },\r\n\r\n            layout: [],\r\n        },\r\n        data: function() {\r\n            return {\r\n                mergedStyle: {},\r\n                lastLayoutLength: 0\r\n            };\r\n        },\r\n        ready() {\r\n            validateLayout(this.layout);\r\n            var self = this;\r\n            window.onload = function() {\r\n                if (self.width === null) {\r\n                    self.onWindowResize();\r\n                    //self.width = self.$el.offsetWidth;\r\n                    window.addEventListener('resize', self.onWindowResize);\r\n                }\r\n                compact(self.layout, self.verticalCompact);\r\n\r\n                self.updateHeight();\r\n                self.$nextTick(function() {\r\n//                    self.onWindowResize();\r\n                    var erd = elementResizeDetectorMaker({\r\n                        strategy: \"scroll\" //<- For ultra performance.\r\n                    });\r\n                    erd.listenTo(self.$els.item, function(element) {\r\n                        self.onWindowResize();\r\n                        /*var width = element.offsetWidth;\r\n                         var height = element.offsetHeight;\r\n                         console.log(\"Size: \" + width + \"x\" + height);*/\r\n                    });\r\n                });\r\n\r\n            }\r\n        },\r\n        watch: {\r\n            width: function() {\r\n                this.$nextTick(function() {\r\n                    this.$broadcast(\"updateWidth\", this.width);\r\n                    this.updateHeight();\r\n                });\r\n            },\r\n            layout: function() {\r\n                if (this.layout !== undefined && this.layout.length !== this.lastLayoutLength) {\r\n                    this.lastLayoutLength = this.layout.length;\r\n                    compact(this.layout, this.verticalCompact);\r\n\r\n                    //this.$nextTick(function () {\r\n                        this.$broadcast(\"updateWidth\", this.width);\r\n                        this.updateHeight();\r\n                    //});\r\n                }\r\n            }\r\n        },\r\n        methods: {\r\n            updateHeight: function() {\r\n                this.mergedStyle = {\r\n                    height: this.containerHeight()\r\n                };\r\n            },\r\n            onWindowResize: function() {\r\n                /*if (this.$parent !== null && this.$parent.$el.offsetWidth !== undefined) {\r\n                    this.width = this.$parent.$el.offsetWidth;\r\n                }*/\r\n                /*console.log(\"### WIDTH: \" + this.$el.offsetWidth);\r\n                console.log(\"### WIDTH 2: \" + this.$els.item.offsetWidth);*/\r\n                if (this.$els !== null && this.$els.item !== null) {\r\n                    this.width = this.$els.item.offsetWidth;\r\n                }\r\n            },\r\n            containerHeight: function() {\r\n                if (!this.autoSize) return;\r\n                return bottom(this.layout) * (this.rowHeight + this.margin[1]) + this.margin[1] + 'px';\r\n            }\r\n        },\r\n        events: {\r\n            dragEvent: function(eventName, id, x, y) {\r\n                if (eventName === \"drag\" && x == 0 && y == 0) {\r\n                    return;\r\n                }\r\n                //console.log(eventName + \" id=\" + id + \", x=\" + x + \", y=\" + y);\r\n                var l = getLayoutItem(this.layout, id);\r\n\r\n                /*\r\n                 // Create placeholder (display only)\r\n                 var placeholder = {\r\n                     w: l.w, h: l.h, x: l.x, y: l.y, placeholder: true, id: id\r\n                 };\r\n                 */\r\n\r\n                // Move the element to the dragged location.\r\n                this.layout = moveElement(this.layout, l, x, y, true);\r\n                compact(this.layout, this.verticalCompact);\r\n                // needed because vue can't detect changes on array element properties\r\n                this.$broadcast(\"compact\", this.layout);\r\n                this.updateHeight();\r\n            },\r\n            resizeEvent: function(eventName, id, h, w) {\r\n                if (eventName === \"drag\" && h < -40 && w < -40) {\r\n                    return;\r\n                }\r\n//                console.log(eventName + \" id=\" + id);\r\n\r\n                /*\r\n                 // Create placeholder (display only)\r\n                 var placeholder = {\r\n                     w: l.w, h: l.h, x: l.x, y: l.y, placeholder: true, id: id\r\n                 };\r\n                 */\r\n\r\n                // Move the element to the dragged location.\r\n                compact(this.layout, this.verticalCompact);\r\n                this.$broadcast(\"compact\", this.layout);\r\n                this.updateHeight();\r\n            },\r\n        }\r\n    }\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(7);
	
	var _GridItem = __webpack_require__(1);
	
	var _GridItem2 = _interopRequireDefault(_GridItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//     <div v-el:item class="vue-grid-layout" :style="mergedStyle">
	//         <slot></slot>
	//     </div>
	//     <!--<pre>{{width|json}}</pre>-->
	// </template>
	// <style>
	//     .vue-grid-layout {
	//         position: relative;
	//         transition: height 200ms ease;
	//     }
	// </style>
	// <script>
	var Vue = __webpack_require__(48);
	
	var elementResizeDetectorMaker = __webpack_require__(54);
	
	exports.default = {
	    name: "GridLayout",
	    components: {
	        GridItem: _GridItem2.default
	    },
	    props: {
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
	        useCssTransforms: {
	            type: Boolean,
	            default: true
	        },
	        verticalCompact: {
	            type: Boolean,
	            default: true
	        },
	        width: {
	            type: Number,
	            required: false,
	            default: null
	        },
	
	        layout: []
	    },
	    data: function data() {
	        return {
	            mergedStyle: {},
	            lastLayoutLength: 0
	        };
	    },
	    ready: function ready() {
	        (0, _utils.validateLayout)(this.layout);
	        var self = this;
	        window.onload = function () {
	            if (self.width === null) {
	                self.onWindowResize();
	                //self.width = self.$el.offsetWidth;
	                window.addEventListener('resize', self.onWindowResize);
	            }
	            (0, _utils.compact)(self.layout, self.verticalCompact);
	
	            self.updateHeight();
	            self.$nextTick(function () {
	                //                    self.onWindowResize();
	                var erd = elementResizeDetectorMaker({
	                    strategy: "scroll" //<- For ultra performance.
	                });
	                erd.listenTo(self.$els.item, function (element) {
	                    self.onWindowResize();
	                    /*var width = element.offsetWidth;
	                     var height = element.offsetHeight;
	                     console.log("Size: " + width + "x" + height);*/
	                });
	            });
	        };
	    },
	
	    watch: {
	        width: function width() {
	            this.$nextTick(function () {
	                this.$broadcast("updateWidth", this.width);
	                this.updateHeight();
	            });
	        },
	        layout: function layout() {
	            if (this.layout !== undefined && this.layout.length !== this.lastLayoutLength) {
	                this.lastLayoutLength = this.layout.length;
	                (0, _utils.compact)(this.layout, this.verticalCompact);
	
	                //this.$nextTick(function () {
	                this.$broadcast("updateWidth", this.width);
	                this.updateHeight();
	                //});
	            }
	        }
	    },
	    methods: {
	        updateHeight: function updateHeight() {
	            this.mergedStyle = {
	                height: this.containerHeight()
	            };
	        },
	        onWindowResize: function onWindowResize() {
	            /*if (this.$parent !== null && this.$parent.$el.offsetWidth !== undefined) {
	                this.width = this.$parent.$el.offsetWidth;
	            }*/
	            /*console.log("### WIDTH: " + this.$el.offsetWidth);
	            console.log("### WIDTH 2: " + this.$els.item.offsetWidth);*/
	            if (this.$els !== null && this.$els.item !== null) {
	                this.width = this.$els.item.offsetWidth;
	            }
	        },
	        containerHeight: function containerHeight() {
	            if (!this.autoSize) return;
	            return (0, _utils.bottom)(this.layout) * (this.rowHeight + this.margin[1]) + this.margin[1] + 'px';
	        }
	    },
	    events: {
	        dragEvent: function dragEvent(eventName, id, x, y) {
	            if (eventName === "drag" && x == 0 && y == 0) {
	                return;
	            }
	            //console.log(eventName + " id=" + id + ", x=" + x + ", y=" + y);
	            var l = (0, _utils.getLayoutItem)(this.layout, id);
	
	            /*
	             // Create placeholder (display only)
	             var placeholder = {
	                 w: l.w, h: l.h, x: l.x, y: l.y, placeholder: true, id: id
	             };
	             */
	
	            // Move the element to the dragged location.
	            this.layout = (0, _utils.moveElement)(this.layout, l, x, y, true);
	            (0, _utils.compact)(this.layout, this.verticalCompact);
	            // needed because vue can't detect changes on array element properties
	            this.$broadcast("compact", this.layout);
	            this.updateHeight();
	        },
	        resizeEvent: function resizeEvent(eventName, id, h, w) {
	            if (eventName === "drag" && h < -40 && w < -40) {
	                return;
	            }
	            //                console.log(eventName + " id=" + id);
	
	            /*
	             // Create placeholder (display only)
	             var placeholder = {
	                 w: l.w, h: l.h, x: l.x, y: l.y, placeholder: true, id: id
	             };
	             */
	
	            // Move the element to the dragged location.
	            (0, _utils.compact)(this.layout, this.verticalCompact);
	            this.$broadcast("compact", this.layout);
	            this.updateHeight();
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var forEach                 = __webpack_require__(55).forEach;
	var elementUtilsMaker       = __webpack_require__(56);
	var listenerHandlerMaker    = __webpack_require__(57);
	var idGeneratorMaker        = __webpack_require__(58);
	var idHandlerMaker          = __webpack_require__(59);
	var reporterMaker           = __webpack_require__(60);
	var browserDetector         = __webpack_require__(61);
	var batchProcessorMaker     = __webpack_require__(62);
	var stateHandler            = __webpack_require__(64);
	
	//Detection strategies.
	var objectStrategyMaker     = __webpack_require__(65);
	var scrollStrategyMaker     = __webpack_require__(66);
	
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
	            get: function (element) { options.idHandler.get(element, true); },
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
	
	    //Calls can be made to listenTo with elements that are still are being installed.
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
	                        if (stateHandler.getState(element).startSize) {
	                            var width = element.offsetWidth;
	                            var height = element.offsetHeight;
	                            if (stateHandler.getState(element).startSize.width !== width || stateHandler.getState(element).startSize.height !== height) {
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


/***/ },
/* 55 */
/***/ function(module, exports) {

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


/***/ },
/* 56 */
/***/ function(module, exports) {

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


/***/ },
/* 57 */
/***/ function(module, exports) {

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
	        return eventListeners[idHandler.get(element)] || [];
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
	      var listeners = eventListeners[idHandler.get(element)];
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


/***/ },
/* 58 */
/***/ function(module, exports) {

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


/***/ },
/* 59 */
/***/ function(module, exports) {

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


/***/ },
/* 60 */
/***/ function(module, exports) {

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

/***/ },
/* 61 */
/***/ function(module, exports) {

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


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var utils = __webpack_require__(63);
	
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


/***/ },
/* 63 */
/***/ function(module, exports) {

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


/***/ },
/* 64 */
/***/ function(module, exports) {

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


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Resize detection strategy that injects objects to elements in order to detect resize events.
	 * Heavily inspired by: http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/
	 */
	
	"use strict";
	
	var browserDetector = __webpack_require__(61);
	
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
	                object.type = "text/html";
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


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Resize detection strategy that injects divs to elements in order to detect resize events on scroll events.
	 * Heavily inspired by: https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
	 */
	
	"use strict";
	
	var forEach = __webpack_require__(55).forEach;
	
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
	        child.style.cssText = "position: absolute; width: " + width*2 + "px; height: " + height*2 + "px; visibility: hidden;";
	
	        var container = document.createElement("div");
	        container.style.cssText = "position: absolute; width: " + width + "px; height: " + height + "px; overflow: scroll; visibility: none; top: " + -width*3 + "px; left: " + -height*3 + "px; visibility: hidden;";
	
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
	            return !isInDocument(element);
	        }
	
	        function isUnrendered(element) {
	            // Check the absolute positioned container since the top level container is display: inline.
	            var container = getState(element).container.childNodes[0];
	            return getComputedStyle(container).width.indexOf("px") === -1; //Can only compute pixel value when rendered.
	        }
	
	        function getStyle() {
	            // Some browsers only force layouts when actually reading the style properties of the style object, so make sure that they are all read here,
	            // so that the user of the function can be sure that it will perform the layout here, instead of later (important for batching).
	            var elementStyle            = getComputedStyle(element);
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
	
	        function getExpandElement(element) {
	            return getState(element).container.childNodes[0].childNodes[0].childNodes[0];
	        }
	
	        function getExpandChildElement(element) {
	            return getExpandElement(element).childNodes[0];
	        }
	
	        function getShrinkElement(element) {
	            return getState(element).container.childNodes[0].childNodes[0].childNodes[1];
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
	
	        function addEvent(el, name, cb) {
	            if (el.addEventListener) {
	                el.addEventListener(name, cb);
	            } else if(el.attachEvent) {
	                el.attachEvent("on" + name, cb);
	            } else {
	                return reporter.error("[scroll] Don't know how to add event listeners.");
	            }
	        }
	
	        function injectContainerElement() {
	            var container = getState(element).container;
	
	            if (!container) {
	                container                   = document.createElement("div");
	                container.className         = detectionContainerClass;
	                container.style.cssText     = "visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden;";
	                getState(element).container = container;
	                addAnimationClass(container);
	                element.appendChild(container);
	
	                addEvent(container, "animationstart", function onAnimationStart () {
	                    getState(element).onRendered && getState(element).onRendered();
	                });
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
	
	            function getTopBottomBottomRightCssText(left, top, bottom, right) {
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
	            var containerContainerStyle = "position: absolute; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;";
	            var containerStyle          = "position: absolute; overflow: hidden; z-index: -1; visibility: hidden; " + getTopBottomBottomRightCssText(-(1 + scrollbarWidth), -(1 + scrollbarHeight), -scrollbarHeight, -scrollbarWidth);
	            var expandStyle             = "position: absolute; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;";
	            var shrinkStyle             = "position: absolute; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;";
	            var expandChildStyle        = "position: absolute; left: 0; top: 0;";
	            var shrinkChildStyle        = "position: absolute; width: 200%; height: 200%;";
	
	            var containerContainer      = document.createElement("div");
	            var container               = document.createElement("div");
	            var expand                  = document.createElement("div");
	            var expandChild             = document.createElement("div");
	            var shrink                  = document.createElement("div");
	            var shrinkChild             = document.createElement("div");
	
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
	
	            addEvent(expand, "scroll", function onExpandScroll() {
	                getState(element).onExpand && getState(element).onExpand();
	            });
	
	            addEvent(shrink, "scroll", function onShrinkScroll() {
	                getState(element).onShrink && getState(element).onShrink();
	            });
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
	
	                batchProcessor.add(0, function performUpdateChildSizes() {
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
	                    positionScrollbars(element, width, height);
	                });
	
	                if (done) {
	                    batchProcessor.add(2, done);
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
	
	                if (width !== element.lastWidth || height !== element.lastHeight) {
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
	
	        if (state.busy) {
	            // Uninstall has been called while the element is being prepared.
	            // Right between the sync code and async batch.
	            return;
	        }
	
	        element.removeChild(state.container);
	    }
	
	    return {
	        makeDetectable: makeDetectable,
	        addListener: addListener,
	        uninstall: uninstall
	    };
	};


/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = "\n<div v-el:item class=\"vue-grid-layout\" :style=\"mergedStyle\">\n    <slot></slot>\n</div>\n<!--<pre>{{width|json}}</pre>-->\n";

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(69)
	__vue_script__ = __webpack_require__(71)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\ResponsiveGridLayout.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(73)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./ResponsiveGridLayout.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(70);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ResponsiveGridLayout.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js?sourceMap!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ResponsiveGridLayout.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n.vue-grid-layout {\n    position: relative;\n    -webkit-transition: height 200ms ease;\n    transition: height 200ms ease;\n}\n", "", {"version":3,"sources":["/./src/ResponsiveGridLayout.vue?3b5cc3b1"],"names":[],"mappings":";;;;;;;;;;;;;AAaA;IACA,mBAAA;IACA,sCAAA;IAAA,8BAAA;CACA","file":"ResponsiveGridLayout.vue","sourcesContent":["<template>\r\n    <!--<pre>{{lastLayoutLength|json}}</pre>\r\n    <pre>{{layout.length|json}}</pre>-->\r\n    <!--<pre>{{breakpoint|json}}</pre>\r\n    <pre>{{layouts|json}}</pre>-->\r\n    <!--<pre>{{layout|json}}</pre>-->\r\n    <!--<pre>width: {{width | json}}</pre>\r\n    <pre>mergedStyle: {{mergedStyle | json}}</pre>-->\r\n    <div v-el:item class=\"vue-grid-layout\" :style=\"mergedStyle\">\r\n        <slot></slot>\r\n    </div>\r\n</template>\r\n<style>\r\n    .vue-grid-layout {\r\n        position: relative;\r\n        transition: height 200ms ease;\r\n    }\r\n</style>\r\n<script>\r\n    var Vue = require('vue');\r\n\r\n    var elementResizeDetectorMaker = require(\"element-resize-detector\");\r\n\r\n    import {bottom, compact, getLayoutItem, moveElement, validateLayout, findItemInArray, findAndRemove} from './utils';\r\n    import {getBreakpointFromWidth, getColsFromBreakpoint, findOrGenerateResponsiveLayout, generateResponsiveLayout} from './responsiveUtils';\r\n    import GridItem from './GridItem.vue'\r\n\r\n    export default {\r\n        name: \"ResponsiveGridLayout\",\r\n        components: {\r\n            GridItem,\r\n        },\r\n        props: {\r\n            autoSize: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n            rowHeight: {\r\n                type: Number,\r\n                default: 150\r\n            },\r\n            maxRows: {\r\n                type: Number,\r\n                default: Infinity\r\n            },\r\n            // Margin between items [x, y] in px\r\n            margin: {\r\n                type: Array,\r\n                default: function () { return [10, 10]; }\r\n            },\r\n            isDraggable: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n            isResizable: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n            useCssTransforms: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n            verticalCompact: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n\r\n            // Optional, but if you are managing width yourself you may want to set the breakpoint\r\n            // yourself as well.\r\n            breakpoint: {\r\n                type: String,\r\n                required: false,\r\n                default: \"lg\"\r\n            },\r\n            // {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}\r\n            breakpoints: {\r\n                type: Object,\r\n                required: false,\r\n                default: function() {return {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}\r\n            },\r\n\r\n            // # of cols. This is a breakpoint -> cols map\r\n            cols: {\r\n                type: Object,\r\n                required: false,\r\n                default: function() {return {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}\r\n            },\r\n\r\n            // layouts is an object mapping breakpoints to layouts.\r\n            // e.g. {lg: Layout, md: Layout, ...}\r\n            layouts: {\r\n                type: Object,\r\n                required: true\r\n            },\r\n\r\n            colNum: {\r\n                type: Number,\r\n                required: false,\r\n                default: 0\r\n            },\r\n\r\n            layout: [],\r\n\r\n        },\r\n        data: function() {\r\n            return {\r\n                width: null,\r\n                lastBreakpoint: null,\r\n                mergedStyle: {},\r\n                lastLayoutLength: 0,\r\n            };\r\n        },\r\n        ready() {\r\n            validateLayout(this.layout);\r\n            var self = this;\r\n            window.onload = function() {\r\n                if (self.width === null) {\r\n                    self.onWindowResize();\r\n                    //self.width = self.$el.offsetWidth;\r\n                    window.addEventListener('resize', self.onWindowResize);\r\n                }\r\n                self.breakpoint = getBreakpointFromWidth(self.breakpoints, self.width);\r\n\r\n                self.colNum = getColsFromBreakpoint(self.breakpoint, self.cols);\r\n\r\n                self.lastBreakpoint = self.breakpoint;\r\n\r\n                // Get the initial layout\r\n                self.layout = findOrGenerateResponsiveLayout(self.layouts, self.layout, self.breakpoints, self.breakpoint,\r\n                        self.lastBreakpoint, self.colNum, self.verticalCompact);\r\n\r\n                self.updateHeight();\r\n                self.$nextTick(function() {\r\n//                    self.onWindowResize();\r\n                    var erd = elementResizeDetectorMaker({\r\n                        strategy: \"scroll\" //<- For ultra performance.\r\n                    });\r\n                    erd.listenTo(self.$els.item, function(element) {\r\n                        self.onWindowResize();\r\n                        /*var width = element.offsetWidth;\r\n                        var height = element.offsetHeight;\r\n                        console.log(\"Size: \" + width + \"x\" + height);*/\r\n                    });\r\n                });\r\n            }\r\n        },\r\n        watch: {\r\n            width: function() {\r\n                this.onWidthChange();\r\n            },\r\n            breakpoints: function() {\r\n                this.onWidthChange();\r\n            },\r\n            cols: function() {\r\n                this.onWidthChange();\r\n            },\r\n            layout: function() {\r\n                if (this.layout.length !== this.lastLayoutLength) {\r\n                    var self = this;\r\n                    var keys = Object.keys(this.layouts);\r\n\r\n//                    console.log(\"#### item ADDED OR REMOVED! => \" + JSON.stringify(this.layout));\r\n//                    console.log(\"breakpoint: \" + this.breakpoint + \", length=\" + this.layout.length + \", lastLength=\" + this.lastLayoutLength);\r\n                    keys.forEach(function(key) {\r\n                        if (key !== self.breakpoint) {\r\n                            var layout = self.layouts[key];\r\n                            if (self.layout.length > self.lastLayoutLength) {\r\n                                // add to other layouts\r\n                                layout.forEach(function(item) {\r\n                                    if (!findItemInArray(layout, \"i\", item.i)) {\r\n                                        layout.push(item);\r\n                                    }\r\n                                });\r\n                            } else {\r\n                                // remove from other layouts\r\n                                layout.forEach(function(item) {\r\n                                    if (!findItemInArray(self.layout, \"i\", item.i)) {\r\n                                        findAndRemove(layout, \"i\", item.i);\r\n                                        //layout.splice(layout.indexOf(item), 1);\r\n                                    }\r\n                                });\r\n                            }\r\n                        }\r\n                    });\r\n\r\n                    this.lastLayoutLength = this.layout.length;\r\n                    //this.onWidthChange();\r\n\r\n                    /*this.layout = generateResponsiveLayout(this.layout, this.breakpoints, this.breakpoint,\r\n                            this.lastBreakpoint, this.colNum, this.verticalCompact);\r\n\r\n                    this.$nextTick(function () {*/\r\n                    compact(this.layout, this.verticalCompact);\r\n                    this.$broadcast(\"updateWidth\", this.width);\r\n                    this.updateHeight();\r\n                }\r\n            }\r\n        },\r\n        methods: {\r\n            onWindowResize: function() {\r\n                if (this.$els !== null && this.$els.item !== null) {\r\n                    this.width = this.$els.item.offsetWidth;\r\n                }\r\n            },\r\n            onWidthChange: function() {\r\n                this.lastBreakpoint = this.breakpoint;\r\n                this.breakpoint = getBreakpointFromWidth(this.breakpoints, this.width);\r\n                // Find or generate a new one.\r\n                const newColNum: number = getColsFromBreakpoint(this.breakpoint, this.cols);\r\n                let layout = findOrGenerateResponsiveLayout(this.layouts, this.breakpoints, this.breakpoint,\r\n                        this.lastBreakpoint, newColNum, this.verticalCompact);\r\n\r\n                // Store this new layout as well.\r\n                this.layouts[this.breakpoint] = layout;\r\n\r\n                this.layout = layout;\r\n                this.colNum = newColNum;\r\n\r\n//                console.log(\"#### COLS => \" + this.colNum);\r\n                this.$children.forEach(function(item) {\r\n                    item.cols = newColNum;\r\n                });\r\n//                this.lastBreakpoint = this.breakpoint;\r\n                compact(this.layout, this.verticalCompact);\r\n\r\n                this.$nextTick(function() {\r\n                    this.$broadcast(\"updateWidth\", this.width);\r\n                    this.updateHeight();\r\n                });\r\n\r\n            },\r\n            updateHeight: function() {\r\n                this.mergedStyle = {\r\n                    height: this.containerHeight()\r\n                };\r\n            },\r\n            containerHeight: function() {\r\n                if (!this.autoSize) return;\r\n                return bottom(this.layout) * (this.rowHeight + this.margin[1]) + this.margin[1] + 'px';\r\n            },\r\n        },\r\n        events: {\r\n            dragEvent: function(eventName, i, x, y) {\r\n                if (eventName === \"drag\" && x == 0 && y == 0) {\r\n                    return;\r\n                }\r\n//                console.log(eventName + \" id=\" + id + \", x=\" + x + \", y=\" + y);\r\n                var l = getLayoutItem(this.layout, i);\r\n\r\n                /*\r\n                 // Create placeholder (display only)\r\n                 var placeholder = {\r\n                 w: l.w, h: l.h, x: l.x, y: l.y, placeholder: true, id: id\r\n                 };\r\n                 */\r\n\r\n                // Move the element to the dragged location.\r\n                this.layout = moveElement(this.layout, l, x, y, true);\r\n                compact(this.layout, this.verticalCompact);\r\n\r\n                // needed because vue can't detect changes on array element properties\r\n                this.$broadcast(\"compact\", this.layout);\r\n                this.updateHeight();\r\n            },\r\n            resizeEvent: function(eventName, i, h, w) {\r\n                if (eventName === \"drag\" && h < -40 && w < -40) {\r\n                    return;\r\n                }\r\n\r\n                /*\r\n                 // Create placeholder (display only)\r\n                 var placeholder = {\r\n                 w: l.w, h: l.h, x: l.x, y: l.y, placeholder: true, id: id\r\n                 };\r\n                 */\r\n\r\n                // Move the element to the dragged location.\r\n                compact(this.layout, this.verticalCompact);\r\n                this.updateHeight();\r\n            },\r\n        }\r\n    }\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _keys = __webpack_require__(9);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _utils = __webpack_require__(7);
	
	var _responsiveUtils = __webpack_require__(72);
	
	var _GridItem = __webpack_require__(1);
	
	var _GridItem2 = _interopRequireDefault(_GridItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//     <!--<pre>{{lastLayoutLength|json}}</pre>
	//     <pre>{{layout.length|json}}</pre>-->
	//     <!--<pre>{{breakpoint|json}}</pre>
	//     <pre>{{layouts|json}}</pre>-->
	//     <!--<pre>{{layout|json}}</pre>-->
	//     <!--<pre>width: {{width | json}}</pre>
	//     <pre>mergedStyle: {{mergedStyle | json}}</pre>-->
	//     <div v-el:item class="vue-grid-layout" :style="mergedStyle">
	//         <slot></slot>
	//     </div>
	// </template>
	// <style>
	//     .vue-grid-layout {
	//         position: relative;
	//         transition: height 200ms ease;
	//     }
	// </style>
	// <script>
	var Vue = __webpack_require__(48);
	
	var elementResizeDetectorMaker = __webpack_require__(54);
	
	exports.default = {
	    name: "ResponsiveGridLayout",
	    components: {
	        GridItem: _GridItem2.default
	    },
	    props: {
	        autoSize: {
	            type: Boolean,
	            default: true
	        },
	        rowHeight: {
	            type: Number,
	            default: 150
	        },
	        maxRows: {
	            type: Number,
	            default: Infinity
	        },
	        // Margin between items [x, y] in px
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
	        useCssTransforms: {
	            type: Boolean,
	            default: true
	        },
	        verticalCompact: {
	            type: Boolean,
	            default: true
	        },
	
	        // Optional, but if you are managing width yourself you may want to set the breakpoint
	        // yourself as well.
	        breakpoint: {
	            type: String,
	            required: false,
	            default: "lg"
	        },
	        // {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}
	        breakpoints: {
	            type: Object,
	            required: false,
	            default: function _default() {
	                return { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
	            }
	        },
	
	        // # of cols. This is a breakpoint -> cols map
	        cols: {
	            type: Object,
	            required: false,
	            default: function _default() {
	                return { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
	            }
	        },
	
	        // layouts is an object mapping breakpoints to layouts.
	        // e.g. {lg: Layout, md: Layout, ...}
	        layouts: {
	            type: Object,
	            required: true
	        },
	
	        colNum: {
	            type: Number,
	            required: false,
	            default: 0
	        },
	
	        layout: []
	
	    },
	    data: function data() {
	        return {
	            width: null,
	            lastBreakpoint: null,
	            mergedStyle: {},
	            lastLayoutLength: 0
	        };
	    },
	    ready: function ready() {
	        (0, _utils.validateLayout)(this.layout);
	        var self = this;
	        window.onload = function () {
	            if (self.width === null) {
	                self.onWindowResize();
	                //self.width = self.$el.offsetWidth;
	                window.addEventListener('resize', self.onWindowResize);
	            }
	            self.breakpoint = (0, _responsiveUtils.getBreakpointFromWidth)(self.breakpoints, self.width);
	
	            self.colNum = (0, _responsiveUtils.getColsFromBreakpoint)(self.breakpoint, self.cols);
	
	            self.lastBreakpoint = self.breakpoint;
	
	            // Get the initial layout
	            self.layout = (0, _responsiveUtils.findOrGenerateResponsiveLayout)(self.layouts, self.layout, self.breakpoints, self.breakpoint, self.lastBreakpoint, self.colNum, self.verticalCompact);
	
	            self.updateHeight();
	            self.$nextTick(function () {
	                //                    self.onWindowResize();
	                var erd = elementResizeDetectorMaker({
	                    strategy: "scroll" //<- For ultra performance.
	                });
	                erd.listenTo(self.$els.item, function (element) {
	                    self.onWindowResize();
	                    /*var width = element.offsetWidth;
	                    var height = element.offsetHeight;
	                    console.log("Size: " + width + "x" + height);*/
	                });
	            });
	        };
	    },
	
	    watch: {
	        width: function width() {
	            this.onWidthChange();
	        },
	        breakpoints: function breakpoints() {
	            this.onWidthChange();
	        },
	        cols: function cols() {
	            this.onWidthChange();
	        },
	        layout: function layout() {
	            if (this.layout.length !== this.lastLayoutLength) {
	                var self = this;
	                var keys = (0, _keys2.default)(this.layouts);
	
	                //                    console.log("#### item ADDED OR REMOVED! => " + JSON.stringify(this.layout));
	                //                    console.log("breakpoint: " + this.breakpoint + ", length=" + this.layout.length + ", lastLength=" + this.lastLayoutLength);
	                keys.forEach(function (key) {
	                    if (key !== self.breakpoint) {
	                        var layout = self.layouts[key];
	                        if (self.layout.length > self.lastLayoutLength) {
	                            // add to other layouts
	                            layout.forEach(function (item) {
	                                if (!(0, _utils.findItemInArray)(layout, "i", item.i)) {
	                                    layout.push(item);
	                                }
	                            });
	                        } else {
	                            // remove from other layouts
	                            layout.forEach(function (item) {
	                                if (!(0, _utils.findItemInArray)(self.layout, "i", item.i)) {
	                                    (0, _utils.findAndRemove)(layout, "i", item.i);
	                                    //layout.splice(layout.indexOf(item), 1);
	                                }
	                            });
	                        }
	                    }
	                });
	
	                this.lastLayoutLength = this.layout.length;
	                //this.onWidthChange();
	
	                /*this.layout = generateResponsiveLayout(this.layout, this.breakpoints, this.breakpoint,
	                        this.lastBreakpoint, this.colNum, this.verticalCompact);
	                 this.$nextTick(function () {*/
	                (0, _utils.compact)(this.layout, this.verticalCompact);
	                this.$broadcast("updateWidth", this.width);
	                this.updateHeight();
	            }
	        }
	    },
	    methods: {
	        onWindowResize: function onWindowResize() {
	            if (this.$els !== null && this.$els.item !== null) {
	                this.width = this.$els.item.offsetWidth;
	            }
	        },
	        onWidthChange: function onWidthChange() {
	            this.lastBreakpoint = this.breakpoint;
	            this.breakpoint = (0, _responsiveUtils.getBreakpointFromWidth)(this.breakpoints, this.width);
	            // Find or generate a new one.
	            var newColNum /*: number*/ = (0, _responsiveUtils.getColsFromBreakpoint)(this.breakpoint, this.cols);
	            var layout = (0, _responsiveUtils.findOrGenerateResponsiveLayout)(this.layouts, this.breakpoints, this.breakpoint, this.lastBreakpoint, newColNum, this.verticalCompact);
	
	            // Store this new layout as well.
	            this.layouts[this.breakpoint] = layout;
	
	            this.layout = layout;
	            this.colNum = newColNum;
	
	            //                console.log("#### COLS => " + this.colNum);
	            this.$children.forEach(function (item) {
	                item.cols = newColNum;
	            });
	            //                this.lastBreakpoint = this.breakpoint;
	            (0, _utils.compact)(this.layout, this.verticalCompact);
	
	            this.$nextTick(function () {
	                this.$broadcast("updateWidth", this.width);
	                this.updateHeight();
	            });
	        },
	        updateHeight: function updateHeight() {
	            this.mergedStyle = {
	                height: this.containerHeight()
	            };
	        },
	        containerHeight: function containerHeight() {
	            if (!this.autoSize) return;
	            return (0, _utils.bottom)(this.layout) * (this.rowHeight + this.margin[1]) + this.margin[1] + 'px';
	        }
	    },
	    events: {
	        dragEvent: function dragEvent(eventName, i, x, y) {
	            if (eventName === "drag" && x == 0 && y == 0) {
	                return;
	            }
	            //                console.log(eventName + " id=" + id + ", x=" + x + ", y=" + y);
	            var l = (0, _utils.getLayoutItem)(this.layout, i);
	
	            /*
	             // Create placeholder (display only)
	             var placeholder = {
	             w: l.w, h: l.h, x: l.x, y: l.y, placeholder: true, id: id
	             };
	             */
	
	            // Move the element to the dragged location.
	            this.layout = (0, _utils.moveElement)(this.layout, l, x, y, true);
	            (0, _utils.compact)(this.layout, this.verticalCompact);
	
	            // needed because vue can't detect changes on array element properties
	            this.$broadcast("compact", this.layout);
	            this.updateHeight();
	        },
	        resizeEvent: function resizeEvent(eventName, i, h, w) {
	            if (eventName === "drag" && h < -40 && w < -40) {
	                return;
	            }
	
	            /*
	             // Create placeholder (display only)
	             var placeholder = {
	             w: l.w, h: l.h, x: l.x, y: l.y, placeholder: true, id: id
	             };
	             */
	
	            // Move the element to the dragged location.
	            (0, _utils.compact)(this.layout, this.verticalCompact);
	            this.updateHeight();
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(9);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	exports.getBreakpointFromWidth = getBreakpointFromWidth;
	exports.getColsFromBreakpoint = getColsFromBreakpoint;
	exports.findOrGenerateResponsiveLayout = findOrGenerateResponsiveLayout;
	exports.generateResponsiveLayout = generateResponsiveLayout;
	exports.sortBreakpoints = sortBreakpoints;
	
	var _utils = __webpack_require__(7);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*:: import type {Layout} from './utils';*/ // @flow
	
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
	function getBreakpointFromWidth(breakpoints /*: Breakpoints*/, width /*: number*/) /*: Breakpoint*/ {
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
	function getColsFromBreakpoint(breakpoint /*: Breakpoint*/, cols /*: Breakpoints*/) /*: number*/ {
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
	 * @param  {Object} layouts     Existing layouts.
	 * @param  {Array} breakpoints All breakpoints.
	 * @param  {String} breakpoint New breakpoint.
	 * @param  {String} breakpoint Last breakpoint (for fallback).
	 * @param  {Number} cols       Column count at new breakpoint.
	 * @param  {Boolean} verticalCompact Whether or not to compact the layout
	 *   vertically.
	 * @return {Array}             New layout.
	 */
	function findOrGenerateResponsiveLayout(layouts /*: ResponsiveLayout*/, breakpoints /*: Breakpoints*/, breakpoint /*: Breakpoint*/, lastBreakpoint /*: Breakpoint*/, cols /*: number*/, verticalCompact /*: boolean*/) /*: Layout*/ {
	  // If it already exists, just return it.
	  if (layouts[breakpoint]) return (0, _utils.cloneLayout)(layouts[breakpoint]);
	  // Find or generate the next layout
	  var layout = layouts[lastBreakpoint];
	  var breakpointsSorted = sortBreakpoints(breakpoints);
	  var breakpointsAbove = breakpointsSorted.slice(breakpointsSorted.indexOf(breakpoint));
	  for (var i = 0, len = breakpointsAbove.length; i < len; i++) {
	    var b = breakpointsAbove[i];
	    if (layouts[b]) {
	      layout = layouts[b];
	      break;
	    }
	  }
	  layout = (0, _utils.cloneLayout)(layout || []); // clone layout so we don't modify existing items
	  return (0, _utils.compact)((0, _utils.correctBounds)(layout, { cols: cols }), verticalCompact);
	}
	
	function generateResponsiveLayout(layout /*: Layout*/, breakpoints /*: Breakpoints*/, breakpoint /*: Breakpoint*/, lastBreakpoint /*: Breakpoint*/, cols /*: number*/, verticalCompact /*: boolean*/) /*: Layout*/ {
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
	  layout = (0, _utils.cloneLayout)(layout || []); // clone layout so we don't modify existing items
	  return (0, _utils.compact)((0, _utils.correctBounds)(layout, { cols: cols }), verticalCompact);
	}
	
	/**
	 * Given breakpoints, return an array of breakpoints sorted by width. This is usually
	 * e.g. ['xxs', 'xs', 'sm', ...]
	 *
	 * @param  {Object} breakpoints Key/value pair of breakpoint names to widths.
	 * @return {Array}              Sorted breakpoints.
	 */
	function sortBreakpoints(breakpoints /*: Breakpoints*/) /*: Array<Breakpoint>*/ {
	  var keys /*: Array<string>*/ = (0, _keys2.default)(breakpoints);
	  return keys.sort(function (a, b) {
	    return breakpoints[a] - breakpoints[b];
	  });
	}

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "\n<!--<pre>{{lastLayoutLength|json}}</pre>\n<pre>{{layout.length|json}}</pre>-->\n<!--<pre>{{breakpoint|json}}</pre>\n<pre>{{layouts|json}}</pre>-->\n<!--<pre>{{layout|json}}</pre>-->\n<!--<pre>width: {{width | json}}</pre>\n<pre>mergedStyle: {{mergedStyle | json}}</pre>-->\n<div v-el:item class=\"vue-grid-layout\" :style=\"mergedStyle\">\n    <slot></slot>\n</div>\n";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-grid-layout.js.map
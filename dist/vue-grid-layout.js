(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueGridLayout"] = factory();
	else
		root["VueGridLayout"] = factory();
})(this, function() {
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
	
	var _GridLayout = __webpack_require__(49);
	
	var _GridLayout2 = _interopRequireDefault(_GridLayout);
	
	var _ResponsiveGridLayout = __webpack_require__(67);
	
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
	var __vue_styles__ = {}
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\GridItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(48)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-e800ab18/GridItem.vue"
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
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./GridItem.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./GridItem.vue");
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
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.vue-grid-item {\n    -webkit-transition: all 200ms ease;\n    transition: all 200ms ease;\n    -webkit-transition-property: left, top;\n    transition-property: left, top;\n}\n.vue-grid-item.cssTransforms {\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n}\n.vue-grid-item.resizing {\n    opacity: 0.6;\n    z-index: 3;\n}\n\n.vue-grid-item.vue-draggable-dragging {\n    /*transition:none;*/\n    z-index: 3;\n}\n\n.vue-grid-item.vue-grid-placeholder {\n    background: red;\n    opacity: 0.2;\n    -webkit-transition-duration: 100ms;\n            transition-duration: 100ms;\n    z-index: 2;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n}\n\n.vue-grid-item > .vue-resizable-handle {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    bottom: 0;\n    right: 0;\n    background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');\n    background-position: bottom right;\n    padding: 0 3px 3px 0;\n    background-repeat: no-repeat;\n    background-origin: content-box;\n    box-sizing: border-box;\n    cursor: se-resize;\n}\n", "", {"version":3,"sources":["/./src/GridItem.vue?8d105490"],"names":[],"mappings":";;;;;;;;;;;;;;;;;AAiBA;IACA,mCAAA;IAAA,2BAAA;IACA,uCAAA;IAAA,+BAAA;CACA;AACA;IACA,+CAAA;IAAA,uCAAA;IAAA,+BAAA;IAAA,kDAAA;CACA;AACA;IACA,aAAA;IACA,WAAA;CACA;;AAEA;IACA,oBAAA;IACA,WAAA;CACA;;AAEA;IACA,gBAAA;IACA,aAAA;IACA,mCAAA;YAAA,2BAAA;IACA,WAAA;IACA,0BAAA;IACA,uBAAA;IACA,sBAAA;IACA,qBAAA;IACA,kBAAA;CACA;;AAEA;IACA,mBAAA;IACA,YAAA;IACA,aAAA;IACA,UAAA;IACA,SAAA;IACA,s3BAAA;IACA,kCAAA;IACA,qBAAA;IACA,6BAAA;IACA,+BAAA;IACA,uBAAA;IACA,kBAAA;CACA","file":"GridItem.vue","sourcesContent":["<template>\r\n    <div v-el:item\r\n             class=\"vue-grid-item\"\r\n             :class=\"{ 'vue-resizable' : isResizable, 'resizing' : isResizing, 'vue-draggable-dragging' : isDragging, 'cssTransforms' : useCssTransforms }\"\r\n             :style=\"style\"\r\n        >\r\n        <slot></slot>\r\n        <!--<pre>\r\n            x: {{ x | json}}\r\n            y: {{ y | json}}\r\n            w: {{ w | json}}\r\n            h: {{ h | json}}\r\n        </pre>-->\r\n        <span v-if=\"isResizable\" v-el:handle class=\"vue-resizable-handle\"></span>\r\n    </div>\r\n</template>\r\n<style>\r\n    .vue-grid-item {\r\n        transition: all 200ms ease;\r\n        transition-property: left, top;\r\n    }\r\n    .vue-grid-item.cssTransforms {\r\n        transition-property: transform;\r\n    }\r\n    .vue-grid-item.resizing {\r\n        opacity: 0.6;\r\n        z-index: 3;\r\n    }\r\n\r\n    .vue-grid-item.vue-draggable-dragging {\r\n        /*transition:none;*/\r\n        z-index: 3;\r\n    }\r\n\r\n    .vue-grid-item.vue-grid-placeholder {\r\n        background: red;\r\n        opacity: 0.2;\r\n        transition-duration: 100ms;\r\n        z-index: 2;\r\n        -webkit-user-select: none;\r\n        -moz-user-select: none;\r\n        -ms-user-select: none;\r\n        -o-user-select: none;\r\n        user-select: none;\r\n    }\r\n\r\n    .vue-grid-item > .vue-resizable-handle {\r\n        position: absolute;\r\n        width: 20px;\r\n        height: 20px;\r\n        bottom: 0;\r\n        right: 0;\r\n        background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');\r\n        background-position: bottom right;\r\n        padding: 0 3px 3px 0;\r\n        background-repeat: no-repeat;\r\n        background-origin: content-box;\r\n        box-sizing: border-box;\r\n        cursor: se-resize;\r\n    }\r\n</style>\r\n<script>\r\n    import {setTopLeft, setTransform, createMarkup, getLayoutItem} from './utils';\r\n    import {getControlPosition, offsetXYFromParentOf, createCoreData} from './draggableUtils';\r\n\r\n    var interact = require(\"interact.js\");\r\n\r\n    export default {\r\n        name: \"GridItem\",\r\n        props: {\r\n            /*cols: {\r\n                type: Number,\r\n                required: true\r\n            },*/\r\n            /*containerWidth: {\r\n                type: Number,\r\n                required: true\r\n\r\n            },\r\n            rowHeight: {\r\n                type: Number,\r\n                required: true\r\n            },\r\n            margin: {\r\n                type: Array,\r\n                required: true\r\n            },\r\n            maxRows: {\r\n                type: Number,\r\n                required: true\r\n            },\r\n            isDraggable: {\r\n                type: Boolean,\r\n                required: true\r\n            },\r\n            isResizable: {\r\n                type: Boolean,\r\n                required: true\r\n            },\r\n            useCssTransforms: {\r\n                type: Boolean,\r\n                required: true\r\n            },\r\n            static: {\r\n                type: Boolean,\r\n                required: false,\r\n                default: false\r\n            },\r\n            */\r\n            minH: {\r\n                type: Number,\r\n                required: false,\r\n                default: 1\r\n            },\r\n            minW: {\r\n                type: Number,\r\n                required: false,\r\n                default: 1\r\n            },\r\n            maxH: {\r\n                type: Number,\r\n                required: false,\r\n                default: Infinity\r\n            },\r\n            maxW: {\r\n                type: Number,\r\n                required: false,\r\n                default: Infinity\r\n            },\r\n            x: {\r\n                type: Number,\r\n                required: true\r\n            },\r\n            y: {\r\n                type: Number,\r\n                required: true\r\n            },\r\n            w: {\r\n                type: Number,\r\n                required: true\r\n            },\r\n            h: {\r\n                type: Number,\r\n                required: true\r\n            },\r\n            i: {\r\n                required: true\r\n            },\r\n        },\r\n        data: function() {\r\n            return {\r\n                cols: 1,\r\n                containerWidth: 100,\r\n                rowHeight: 30,\r\n                margin: [10, 10],\r\n                maxRows: Infinity,\r\n                isDraggable: true,\r\n                isResizable: true,\r\n                useCssTransforms: true,\r\n\r\n                isDragging: false,\r\n                dragging: null,\r\n                isResizing: false,\r\n                resizing: null,\r\n                lastX: NaN,\r\n                lastY: NaN,\r\n                lastW: NaN,\r\n                lastH: NaN,\r\n                style: {}\r\n            }\r\n        },\r\n        ready: function() {\r\n            this.cols = this.$parent.colNum;\r\n            this.rowHeight = this.$parent.rowHeight;\r\n            this.margin = this.$parent.margin;\r\n            this.maxRows = this.$parent.maxRows;\r\n            this.isDraggable = this.$parent.isDraggable;\r\n            this.isResizable = this.$parent.isResizable;\r\n            this.useCssTransforms = this.$parent.useCssTransforms;\r\n            this.createStyle();\r\n\r\n            var self = this;\r\n            if (this.isDraggable) {\r\n                if (this.interactObj == null) {\r\n                    this.interactObj = interact(this.$els.item);\r\n                }\r\n                this.interactObj\r\n                        .draggable({\r\n                        })\r\n                        .on('dragstart dragmove dragend', function(event) {\r\n                            self.handleDrag(event);\r\n                        });\r\n            }\r\n            if (this.isResizable) {\r\n                if (this.interactObj == null) {\r\n                    this.interactObj = interact(this.$els.item);\r\n                }\r\n                this.interactObj\r\n                        .resizable({\r\n                            preserveAspectRatio: false,\r\n                            edges: {left: false, right: true, bottom: true, top: false}\r\n                        })\r\n                        .on('resizestart resizemove resizeend', function (event) {\r\n                            self.handleResize(event);\r\n                        });\r\n            }\r\n        },\r\n        watch: {\r\n            cols: function() {\r\n                this.createStyle();\r\n            },\r\n            containerWidth: function() {\r\n                this.createStyle();\r\n            },\r\n            x: function() {\r\n                this.createStyle();\r\n            },\r\n            y: function() {\r\n                this.createStyle();\r\n            },\r\n            h: function() {\r\n                this.createStyle();\r\n            },\r\n            w: function() {\r\n                this.createStyle();\r\n            }\r\n        },\r\n        computed: {\r\n        },\r\n        methods: {\r\n            createStyle: function() {\r\n                if (this.x + this.w > this.cols) {\r\n                    this.x = 0;\r\n                    this.w = this.cols;\r\n                }\r\n\r\n//                var pos = this.calcPosition(x, y, w, h);\r\n                var pos = this.calcPosition(this.x, this.y, this.w, this.h);\r\n\r\n                if (this.isDragging) {\r\n                    pos.top = this.dragging.top;\r\n                    pos.left = this.dragging.left;\r\n                }\r\n                if (this.isResizing) {\r\n                    pos.width = this.resizing.width;\r\n                    pos.height = this.resizing.height;\r\n                }\r\n\r\n                //const {usePercentages, containerWidth, useCssTransforms} = this.props;\r\n\r\n                let style;\r\n                // CSS Transforms support (default)\r\n                if (this.useCssTransforms) {\r\n                    style = setTransform(pos.top, pos.left, pos.width, pos.height);\r\n                }\r\n                // top,left (slow)\r\n                else {\r\n                    style = setTopLeft(pos.top, pos.left, pos.width, pos.height);\r\n                }\r\n/*\r\n                if (this.isDragging || this.isResizing) {\r\n                    style[\"z-index\"] = 3;\r\n                }\r\n*/\r\n//                this.style = createMarkup(style);\r\n                this.style = style;\r\n\r\n            },\r\n            handleResize: function(event) {\r\n                const position = getControlPosition(event);\r\n                // Get the current drag point from the event. This is used as the offset.\r\n                if (position == null) return; // not possible but satisfies flow\r\n                const {x, y} = position;\r\n\r\n                const newSize = {width: 0, height: 0};\r\n                switch (event.type) {\r\n                    case \"resizestart\":\r\n                        var pos = this.calcPosition(this.x, this.y, this.w, this.h);\r\n                        newSize.width = pos.width;\r\n                        newSize.height = pos.height;\r\n                        this.resizing = newSize;\r\n                        this.isResizing = true;\r\n                        break;\r\n                    case \"resizemove\":\r\n//                        console.log(\"### resize => \" + event.type + \", lastW=\" + this.lastW + \", lastH=\" + this.lastH);\r\n                        const coreEvent = createCoreData(this.lastW, this.lastH, x, y);\r\n//                                console.log(\"### DRAG: \" + JSON.stringify(coreEvent));\r\n                        newSize.width = this.resizing.width + coreEvent.deltaX;\r\n                        newSize.height = this.resizing.height + coreEvent.deltaY;\r\n\r\n                        ///console.log(\"### resize => \" + event.type + \", deltaX=\" + coreEvent.deltaX + \", deltaY=\" + coreEvent.deltaY);\r\n                        this.resizing = newSize;\r\n                        break;\r\n                    case \"resizeend\":\r\n                        //console.log(\"### resize end => x=\" +this.x + \" y=\" + this.y + \" w=\" + this.w + \" h=\" + this.h);\r\n                        var pos = this.calcPosition(this.x, this.y, this.w, this.h);\r\n                        newSize.width = pos.width;\r\n                        newSize.height = pos.height;\r\n//                        console.log(\"### resize end => \" + JSON.stringify(newSize));\r\n                        this.resizing = null;\r\n                        this.isResizing = false;\r\n                        break;\r\n                }\r\n\r\n                // Get new WH\r\n                var pos = this.calcWH(newSize.height, newSize.width);\r\n                if (pos.w < this.minW) {\r\n                    pos.w = this.minW;\r\n                }\r\n                if (pos.w > this.maxW) {\r\n                    pos.w = this.maxW;\r\n                }\r\n                if (pos.h < this.minH) {\r\n                    pos.h = this.minH;\r\n                }\r\n                if (pos.h > this.maxH) {\r\n                    pos.h = this.maxH;\r\n                }\r\n\r\n                if (pos.h >= 1) {\r\n                    this.h = pos.h;\r\n                } else {\r\n                    this.h = 1;\r\n                }\r\n                if (pos.w >= 1) {\r\n                    this.w = pos.w;\r\n                } else {\r\n                    this.w = 1;\r\n                }\r\n\r\n                this.lastW = x;\r\n                this.lastH = y;\r\n\r\n                this.$dispatch(\"resizeEvent\", event.type, this.i, this.x, this.y, this.h, this.w);\r\n            },\r\n            handleDrag(event) {\r\n                if (this.isResizing) return;\r\n\r\n                const position = getControlPosition(event);\r\n\r\n                // Get the current drag point from the event. This is used as the offset.\r\n                if (position == null) return; // not possible but satisfies flow\r\n                const {x, y} = position;\r\n\r\n                var shouldUpdate = false;\r\n\r\n                const newPosition = {top: 0, left: 0};\r\n                switch (event.type) {\r\n                    case \"dragstart\":\r\n                        var parentRect = event.target.offsetParent.getBoundingClientRect();\r\n                        var clientRect = event.target.getBoundingClientRect();\r\n                        newPosition.left = clientRect.left - parentRect.left;\r\n                        newPosition.top = clientRect.top - parentRect.top;\r\n                        this.dragging = newPosition;\r\n                        this.isDragging = true;\r\n                        break;\r\n                    case \"dragend\":\r\n                        if (!this.isDragging) return;\r\n                        parentRect = event.target.offsetParent.getBoundingClientRect();\r\n                        clientRect = event.target.getBoundingClientRect();\r\n                        newPosition.left = clientRect.left - parentRect.left;\r\n                        newPosition.top = clientRect.top - parentRect.top;\r\n//                        console.log(\"### drag end => \" + JSON.stringify(newPosition));\r\n//                        console.log(\"### DROP: \" + JSON.stringify(newPosition));\r\n                        this.dragging = null;\r\n                        this.isDragging = false;\r\n                        shouldUpdate = true;\r\n                        break;\r\n                    case \"dragmove\":\r\n                        const coreEvent = createCoreData(this.lastX, this.lastY, x, y);\r\n                        newPosition.left = this.dragging.left + coreEvent.deltaX;\r\n                        newPosition.top = this.dragging.top + coreEvent.deltaY;\r\n//                        console.log(\"### drag => \" + event.type + \", x=\" + x + \", y=\" + y);\r\n//                        console.log(\"### drag => \" + event.type + \", deltaX=\" + coreEvent.deltaX + \", deltaY=\" + coreEvent.deltaY);\r\n//                        console.log(\"### drag end => \" + JSON.stringify(newPosition));\r\n                        this.dragging = newPosition;\r\n                        break;\r\n                }\r\n\r\n                // Get new XY\r\n                var pos = this.calcXY(newPosition.top, newPosition.left);\r\n                this.x = pos.x;\r\n                this.y = pos.y;\r\n\r\n                this.lastX = x;\r\n                this.lastY = y;\r\n\r\n                this.$dispatch(\"dragEvent\", event.type, this.i, this.x, this.y, this.w, this.h);\r\n            },\r\n            calcPosition: function(x, y, w, h) {\r\n                const colWidth = this.calcColWidth();\r\n\r\n                const out = {\r\n                    left: Math.round(colWidth * x + (x + 1) * this.margin[0]),\r\n                    top: Math.round(this.rowHeight * y + (y + 1) * this.margin[1]),\r\n                    // 0 * Infinity === NaN, which causes problems with resize constriants;\r\n                    // Fix this if it occurs.\r\n                    // Note we do it here rather than later because Math.round(Infinity) causes deopt\r\n                    width: w === Infinity ? w : Math.round(colWidth * w + Math.max(0, w - 1) * this.margin[0]),\r\n                    height: h === Infinity ? h : Math.round(this.rowHeight * h + Math.max(0, h - 1) * this.margin[1])\r\n                };\r\n\r\n                return out;\r\n            },\r\n            /**\r\n             * Translate x and y coordinates from pixels to grid units.\r\n             * @param  {Number} top  Top position (relative to parent) in pixels.\r\n             * @param  {Number} left Left position (relative to parent) in pixels.\r\n             * @return {Object} x and y in grid units.\r\n             */\r\n            calcXY(top, left) {\r\n                const colWidth = this.calcColWidth();\r\n\r\n                // left = colWidth * x + margin * (x + 1)\r\n                // l = cx + m(x+1)\r\n                // l = cx + mx + m\r\n                // l - m = cx + mx\r\n                // l - m = x(c + m)\r\n                // (l - m) / (c + m) = x\r\n                // x = (left - margin) / (coldWidth + margin)\r\n                let x = Math.round((left - this.margin[0]) / (colWidth + this.margin[0]));\r\n                let y = Math.round((top - this.margin[1]) / (this.rowHeight + this.margin[1]));\r\n\r\n                // Capping\r\n                x = Math.max(Math.min(x, this.cols - this.w), 0);\r\n                y = Math.max(Math.min(y, this.maxRows - this.h), 0);\r\n\r\n                return {x, y};\r\n            },\r\n            // Helper for generating column width\r\n            calcColWidth() {\r\n                var colWidth = (this.containerWidth - (this.margin[0] * (this.cols + 1))) / this.cols;\r\n//                console.log(\"### COLS=\" + this.cols + \" COL WIDTH=\" + colWidth);\r\n                return colWidth;\r\n            },\r\n\r\n            /**\r\n             * Given a height and width in pixel values, calculate grid units.\r\n             * @param  {Number} height Height in pixels.\r\n             * @param  {Number} width  Width in pixels.\r\n             * @return {Object} w, h as grid units.\r\n             */\r\n            calcWH(height, width) {\r\n                const colWidth = this.calcColWidth();\r\n\r\n                // width = colWidth * w - (margin * (w - 1))\r\n                // ...\r\n                // w = (width + margin) / (colWidth + margin)\r\n                let w = Math.round((width + this.margin[0]) / (colWidth + this.margin[0]));\r\n                let h = Math.round((height + this.margin[1]) / (this.rowHeight + this.margin[1]));\r\n\r\n                // Capping\r\n                w = Math.max(Math.min(w, this.cols - this.x), 0);\r\n                h = Math.max(Math.min(h, this.maxRows - this.y), 0);\r\n                return {w, h};\r\n            }\r\n        },\r\n        events: {\r\n            updateWidth: function(width, colNum) {\r\n                this.containerWidth = width;\r\n                if (colNum !== undefined && colNum !== null) {\r\n                    this.cols = colNum;\r\n                }\r\n            },\r\n            compact: function(layout) {\r\n                var l = getLayoutItem(layout, this.i);\r\n                if (l !== undefined && l !== null) {\r\n                    this.x = l.x;\r\n                    this.y = l.y;\r\n                    this.h = l.h;\r\n                    this.w = l.w;\r\n                }\r\n                this.createStyle();\r\n            }\r\n        }\r\n    }\r\n</script>"],"sourceRoot":"webpack://"}]);
	
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
	//              :class="{ 'vue-resizable' : isResizable, 'resizing' : isResizing, 'vue-draggable-dragging' : isDragging, 'cssTransforms' : useCssTransforms }"
	//              :style="style"
	//         >
	//         <slot></slot>
	//         <!--<pre>
	//             x: {{ x | json}}
	//             y: {{ y | json}}
	//             w: {{ w | json}}
	//             h: {{ h | json}}
	//         </pre>-->
	//         <span v-if="isResizable" v-el:handle class="vue-resizable-handle"></span>
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
	//         opacity: 0.6;
	//         z-index: 3;
	//     }
	//
	//     .vue-grid-item.vue-draggable-dragging {
	//         /*transition:none;*/
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
	// </style>
	// <script>
	var interact = __webpack_require__(47);
	
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
	        },
	        static: {
	            type: Boolean,
	            required: false,
	            default: false
	        },
	        */
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
	        }
	    },
	    data: function data() {
	        return {
	            cols: 1,
	            containerWidth: 100,
	            rowHeight: 30,
	            margin: [10, 10],
	            maxRows: Infinity,
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
	            style: {}
	        };
	    },
	    ready: function ready() {
	        this.cols = this.$parent.colNum;
	        this.rowHeight = this.$parent.rowHeight;
	        this.margin = this.$parent.margin;
	        this.maxRows = this.$parent.maxRows;
	        this.isDraggable = this.$parent.isDraggable;
	        this.isResizable = this.$parent.isResizable;
	        this.useCssTransforms = this.$parent.useCssTransforms;
	        this.createStyle();
	
	        var self = this;
	        if (this.isDraggable) {
	            if (this.interactObj == null) {
	                this.interactObj = interact(this.$els.item);
	            }
	            this.interactObj.draggable({}).on('dragstart dragmove dragend', function (event) {
	                self.handleDrag(event);
	            });
	        }
	        if (this.isResizable) {
	            if (this.interactObj == null) {
	                this.interactObj = interact(this.$els.item);
	            }
	            this.interactObj.resizable({
	                preserveAspectRatio: false,
	                edges: { left: false, right: true, bottom: true, top: false }
	            }).on('resizestart resizemove resizeend', function (event) {
	                self.handleResize(event);
	            });
	        }
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
	    computed: {},
	    methods: {
	        createStyle: function createStyle() {
	            if (this.x + this.w > this.cols) {
	                this.x = 0;
	                this.w = this.cols;
	            }
	
	            //                var pos = this.calcPosition(x, y, w, h);
	            var pos = this.calcPosition(this.x, this.y, this.w, this.h);
	
	            if (this.isDragging) {
	                pos.top = this.dragging.top;
	                pos.left = this.dragging.left;
	            }
	            if (this.isResizing) {
	                pos.width = this.resizing.width;
	                pos.height = this.resizing.height;
	            }
	
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
	            /*
	                            if (this.isDragging || this.isResizing) {
	                                style["z-index"] = 3;
	                            }
	            */
	            //                this.style = createMarkup(style);
	            this.style = style;
	        },
	        handleResize: function handleResize(event) {
	            var position = (0, _draggableUtils.getControlPosition)(event);
	            // Get the current drag point from the event. This is used as the offset.
	            if (position == null) return; // not possible but satisfies flow
	            var x = position.x,
	                y = position.y;
	
	
	            var newSize = { width: 0, height: 0 };
	            switch (event.type) {
	                case "resizestart":
	                    var pos = this.calcPosition(this.x, this.y, this.w, this.h);
	                    newSize.width = pos.width;
	                    newSize.height = pos.height;
	                    this.resizing = newSize;
	                    this.isResizing = true;
	                    break;
	                case "resizemove":
	                    //                        console.log("### resize => " + event.type + ", lastW=" + this.lastW + ", lastH=" + this.lastH);
	                    var coreEvent = (0, _draggableUtils.createCoreData)(this.lastW, this.lastH, x, y);
	                    //                                console.log("### DRAG: " + JSON.stringify(coreEvent));
	                    newSize.width = this.resizing.width + coreEvent.deltaX;
	                    newSize.height = this.resizing.height + coreEvent.deltaY;
	
	                    ///console.log("### resize => " + event.type + ", deltaX=" + coreEvent.deltaX + ", deltaY=" + coreEvent.deltaY);
	                    this.resizing = newSize;
	                    break;
	                case "resizeend":
	                    //console.log("### resize end => x=" +this.x + " y=" + this.y + " w=" + this.w + " h=" + this.h);
	                    var pos = this.calcPosition(this.x, this.y, this.w, this.h);
	                    newSize.width = pos.width;
	                    newSize.height = pos.height;
	                    //                        console.log("### resize end => " + JSON.stringify(newSize));
	                    this.resizing = null;
	                    this.isResizing = false;
	                    break;
	            }
	
	            // Get new WH
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
	
	            this.lastW = x;
	            this.lastH = y;
	
	            this.$dispatch("resizeEvent", event.type, this.i, this.x, this.y, this.h, this.w);
	        },
	        handleDrag: function handleDrag(event) {
	            if (this.isResizing) return;
	
	            var position = (0, _draggableUtils.getControlPosition)(event);
	
	            // Get the current drag point from the event. This is used as the offset.
	            if (position == null) return; // not possible but satisfies flow
	            var x = position.x,
	                y = position.y;
	
	
	            var shouldUpdate = false;
	
	            var newPosition = { top: 0, left: 0 };
	            switch (event.type) {
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
	                case "dragmove":
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
	
	            this.lastX = x;
	            this.lastY = y;
	
	            this.$dispatch("dragEvent", event.type, this.i, this.x, this.y, this.w, this.h);
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
	        updateWidth: function updateWidth(width, colNum) {
	            this.containerWidth = width;
	            if (colNum !== undefined && colNum !== null) {
	                this.cols = colNum;
	            }
	        },
	        compact: function compact(layout) {
	            var l = (0, _utils.getLayoutItem)(layout, this.i);
	            if (l !== undefined && l !== null) {
	                this.x = l.x;
	                this.y = l.y;
	                this.h = l.h;
	                this.w = l.w;
	            }
	            this.createStyle();
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
	  //if (l.y === y && l.x === x) return layout;
	
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
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
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
	    var timeout = runTimeout(cleanUpNextTick);
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
	    runClearTimeout(timeout);
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
	        runTimeout(drainQueue);
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

	/**
	 * interact.js v1.2.8
	 *
	 * Copyright (c) 2012-2015 Taye Adeyemi <dev@taye.me>
	 * Open source under the MIT License.
	 * https://raw.github.com/taye/interact.js/master/LICENSE
	 */
	(function (realWindow) {
	    'use strict';
	
	    // return early if there's no window to work with (eg. Node.js)
	    if (!realWindow) { return; }
	
	    var // get wrapped window if using Shadow DOM polyfill
	        window = (function () {
	            // create a TextNode
	            var el = realWindow.document.createTextNode('');
	
	            // check if it's wrapped by a polyfill
	            if (el.ownerDocument !== realWindow.document
	                && typeof realWindow.wrap === 'function'
	                && realWindow.wrap(el) === el) {
	                // return wrapped window
	                return realWindow.wrap(realWindow);
	            }
	
	            // no Shadow DOM polyfil or native implementation
	            return realWindow;
	        }()),
	
	        document           = window.document,
	        DocumentFragment   = window.DocumentFragment   || blank,
	        SVGElement         = window.SVGElement         || blank,
	        SVGSVGElement      = window.SVGSVGElement      || blank,
	        SVGElementInstance = window.SVGElementInstance || blank,
	        HTMLElement        = window.HTMLElement        || window.Element,
	
	        PointerEvent = (window.PointerEvent || window.MSPointerEvent),
	        pEventTypes,
	
	        hypot = Math.hypot || function (x, y) { return Math.sqrt(x * x + y * y); },
	
	        tmpXY = {},     // reduce object creation in getXY()
	
	        documents       = [],   // all documents being listened to
	
	        interactables   = [],   // all set interactables
	        interactions    = [],   // all interactions
	
	        dynamicDrop     = false,
	
	        // {
	        //      type: {
	        //          selectors: ['selector', ...],
	        //          contexts : [document, ...],
	        //          listeners: [[listener, useCapture], ...]
	        //      }
	        //  }
	        delegatedEvents = {},
	
	        defaultOptions = {
	            base: {
	                accept        : null,
	                actionChecker : null,
	                styleCursor   : true,
	                preventDefault: 'auto',
	                origin        : { x: 0, y: 0 },
	                deltaSource   : 'page',
	                allowFrom     : null,
	                ignoreFrom    : null,
	                _context      : document,
	                dropChecker   : null
	            },
	
	            drag: {
	                enabled: false,
	                manualStart: true,
	                max: Infinity,
	                maxPerElement: 1,
	
	                snap: null,
	                restrict: null,
	                inertia: null,
	                autoScroll: null,
	
	                axis: 'xy'
	            },
	
	            drop: {
	                enabled: false,
	                accept: null,
	                overlap: 'pointer'
	            },
	
	            resize: {
	                enabled: false,
	                manualStart: false,
	                max: Infinity,
	                maxPerElement: 1,
	
	                snap: null,
	                restrict: null,
	                inertia: null,
	                autoScroll: null,
	
	                square: false,
	                preserveAspectRatio: false,
	                axis: 'xy',
	
	                // use default margin
	                margin: NaN,
	
	                // object with props left, right, top, bottom which are
	                // true/false values to resize when the pointer is over that edge,
	                // CSS selectors to match the handles for each direction
	                // or the Elements for each handle
	                edges: null,
	
	                // a value of 'none' will limit the resize rect to a minimum of 0x0
	                // 'negate' will alow the rect to have negative width/height
	                // 'reposition' will keep the width/height positive by swapping
	                // the top and bottom edges and/or swapping the left and right edges
	                invert: 'none'
	            },
	
	            gesture: {
	                manualStart: false,
	                enabled: false,
	                max: Infinity,
	                maxPerElement: 1,
	
	                restrict: null
	            },
	
	            perAction: {
	                manualStart: false,
	                max: Infinity,
	                maxPerElement: 1,
	
	                snap: {
	                    enabled     : false,
	                    endOnly     : false,
	                    range       : Infinity,
	                    targets     : null,
	                    offsets     : null,
	
	                    relativePoints: null
	                },
	
	                restrict: {
	                    enabled: false,
	                    endOnly: false
	                },
	
	                autoScroll: {
	                    enabled     : false,
	                    container   : null,     // the item that is scrolled (Window or HTMLElement)
	                    margin      : 60,
	                    speed       : 300       // the scroll speed in pixels per second
	                },
	
	                inertia: {
	                    enabled          : false,
	                    resistance       : 10,    // the lambda in exponential decay
	                    minSpeed         : 100,   // target speed must be above this for inertia to start
	                    endSpeed         : 10,    // the speed at which inertia is slow enough to stop
	                    allowResume      : true,  // allow resuming an action in inertia phase
	                    zeroResumeDelta  : true,  // if an action is resumed after launch, set dx/dy to 0
	                    smoothEndDuration: 300    // animate to snap/restrict endOnly if there's no inertia
	                }
	            },
	
	            _holdDuration: 600
	        },
	
	        // Things related to autoScroll
	        autoScroll = {
	            interaction: null,
	            i: null,    // the handle returned by window.setInterval
	            x: 0, y: 0, // Direction each pulse is to scroll in
	
	            // scroll the window by the values in scroll.x/y
	            scroll: function () {
	                var options = autoScroll.interaction.target.options[autoScroll.interaction.prepared.name].autoScroll,
	                    container = options.container || getWindow(autoScroll.interaction.element),
	                    now = new Date().getTime(),
	                    // change in time in seconds
	                    dtx = (now - autoScroll.prevTimeX) / 1000,
	                    dty = (now - autoScroll.prevTimeY) / 1000,
	                    vx, vy, sx, sy;
	
	                // displacement
	                if (options.velocity) {
	                  vx = options.velocity.x;
	                  vy = options.velocity.y;
	                }
	                else {
	                  vx = vy = options.speed
	                }
	 
	                sx = vx * dtx;
	                sy = vy * dty;
	
	                if (sx >= 1 || sy >= 1) {
	                    if (isWindow(container)) {
	                        container.scrollBy(autoScroll.x * sx, autoScroll.y * sy);
	                    }
	                    else if (container) {
	                        container.scrollLeft += autoScroll.x * sx;
	                        container.scrollTop  += autoScroll.y * sy;
	                    }
	
	                    if (sx >=1) autoScroll.prevTimeX = now;
	                    if (sy >= 1) autoScroll.prevTimeY = now;
	                }
	
	                if (autoScroll.isScrolling) {
	                    cancelFrame(autoScroll.i);
	                    autoScroll.i = reqFrame(autoScroll.scroll);
	                }
	            },
	
	            isScrolling: false,
	            prevTimeX: 0,
	            prevTimeY: 0,
	
	            start: function (interaction) {
	                autoScroll.isScrolling = true;
	                cancelFrame(autoScroll.i);
	
	                autoScroll.interaction = interaction;
	                autoScroll.prevTimeX = new Date().getTime();
	                autoScroll.prevTimeY = new Date().getTime();
	                autoScroll.i = reqFrame(autoScroll.scroll);
	            },
	
	            stop: function () {
	                autoScroll.isScrolling = false;
	                cancelFrame(autoScroll.i);
	            }
	        },
	
	        // Does the browser support touch input?
	        supportsTouch = (('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch),
	
	        // Does the browser support PointerEvents
	        // Avoid PointerEvent bugs introduced in Chrome 55
	        supportsPointerEvent = PointerEvent && !/Chrome/.test(navigator.userAgent),
	
	        // Less Precision with touch input
	        margin = supportsTouch || supportsPointerEvent? 20: 10,
	
	        pointerMoveTolerance = 1,
	
	        // for ignoring browser's simulated mouse events
	        prevTouchTime = 0,
	
	        // Allow this many interactions to happen simultaneously
	        maxInteractions = Infinity,
	
	        // Check if is IE9 or older
	        actionCursors = (document.all && !window.atob) ? {
	            drag    : 'move',
	            resizex : 'e-resize',
	            resizey : 's-resize',
	            resizexy: 'se-resize',
	
	            resizetop        : 'n-resize',
	            resizeleft       : 'w-resize',
	            resizebottom     : 's-resize',
	            resizeright      : 'e-resize',
	            resizetopleft    : 'se-resize',
	            resizebottomright: 'se-resize',
	            resizetopright   : 'ne-resize',
	            resizebottomleft : 'ne-resize',
	
	            gesture : ''
	        } : {
	            drag    : 'move',
	            resizex : 'ew-resize',
	            resizey : 'ns-resize',
	            resizexy: 'nwse-resize',
	
	            resizetop        : 'ns-resize',
	            resizeleft       : 'ew-resize',
	            resizebottom     : 'ns-resize',
	            resizeright      : 'ew-resize',
	            resizetopleft    : 'nwse-resize',
	            resizebottomright: 'nwse-resize',
	            resizetopright   : 'nesw-resize',
	            resizebottomleft : 'nesw-resize',
	
	            gesture : ''
	        },
	
	        actionIsEnabled = {
	            drag   : true,
	            resize : true,
	            gesture: true
	        },
	
	        // because Webkit and Opera still use 'mousewheel' event type
	        wheelEvent = 'onmousewheel' in document? 'mousewheel': 'wheel',
	
	        eventTypes = [
	            'dragstart',
	            'dragmove',
	            'draginertiastart',
	            'dragend',
	            'dragenter',
	            'dragleave',
	            'dropactivate',
	            'dropdeactivate',
	            'dropmove',
	            'drop',
	            'resizestart',
	            'resizemove',
	            'resizeinertiastart',
	            'resizeend',
	            'gesturestart',
	            'gesturemove',
	            'gestureinertiastart',
	            'gestureend',
	
	            'down',
	            'move',
	            'up',
	            'cancel',
	            'tap',
	            'doubletap',
	            'hold'
	        ],
	
	        globalEvents = {},
	
	        // Opera Mobile must be handled differently
	        isOperaMobile = navigator.appName == 'Opera' &&
	            supportsTouch &&
	            navigator.userAgent.match('Presto'),
	
	        // scrolling doesn't change the result of getClientRects on iOS 7
	        isIOS7 = (/iP(hone|od|ad)/.test(navigator.platform)
	                         && /OS 7[^\d]/.test(navigator.appVersion)),
	
	        // prefix matchesSelector
	        prefixedMatchesSelector = 'matches' in Element.prototype?
	                'matches': 'webkitMatchesSelector' in Element.prototype?
	                    'webkitMatchesSelector': 'mozMatchesSelector' in Element.prototype?
	                        'mozMatchesSelector': 'oMatchesSelector' in Element.prototype?
	                            'oMatchesSelector': 'msMatchesSelector',
	
	        // will be polyfill function if browser is IE8
	        ie8MatchesSelector,
	
	        // native requestAnimationFrame or polyfill
	        reqFrame = realWindow.requestAnimationFrame,
	        cancelFrame = realWindow.cancelAnimationFrame,
	
	        // Events wrapper
	        events = (function () {
	            var useAttachEvent = ('attachEvent' in window) && !('addEventListener' in window),
	                addEvent       = useAttachEvent?  'attachEvent': 'addEventListener',
	                removeEvent    = useAttachEvent?  'detachEvent': 'removeEventListener',
	                on             = useAttachEvent? 'on': '',
	
	                elements          = [],
	                targets           = [],
	                attachedListeners = [];
	
	            function add (element, type, listener, useCapture) {
	                var elementIndex = indexOf(elements, element),
	                    target = targets[elementIndex];
	
	                if (!target) {
	                    target = {
	                        events: {},
	                        typeCount: 0
	                    };
	
	                    elementIndex = elements.push(element) - 1;
	                    targets.push(target);
	
	                    attachedListeners.push((useAttachEvent ? {
	                            supplied: [],
	                            wrapped : [],
	                            useCount: []
	                        } : null));
	                }
	
	                if (!target.events[type]) {
	                    target.events[type] = [];
	                    target.typeCount++;
	                }
	
	                if (!contains(target.events[type], listener)) {
	                    var ret;
	
	                    if (useAttachEvent) {
	                        var listeners = attachedListeners[elementIndex],
	                            listenerIndex = indexOf(listeners.supplied, listener);
	
	                        var wrapped = listeners.wrapped[listenerIndex] || function (event) {
	                            if (!event.immediatePropagationStopped) {
	                                event.target = event.srcElement;
	                                event.currentTarget = element;
	
	                                event.preventDefault = event.preventDefault || preventDef;
	                                event.stopPropagation = event.stopPropagation || stopProp;
	                                event.stopImmediatePropagation = event.stopImmediatePropagation || stopImmProp;
	
	                                if (/mouse|click/.test(event.type)) {
	                                    event.pageX = event.clientX + getWindow(element).document.documentElement.scrollLeft;
	                                    event.pageY = event.clientY + getWindow(element).document.documentElement.scrollTop;
	                                }
	
	                                listener(event);
	                            }
	                        };
	
	                        ret = element[addEvent](on + type, wrapped, Boolean(useCapture));
	
	                        if (listenerIndex === -1) {
	                            listeners.supplied.push(listener);
	                            listeners.wrapped.push(wrapped);
	                            listeners.useCount.push(1);
	                        }
	                        else {
	                            listeners.useCount[listenerIndex]++;
	                        }
	                    }
	                    else {
	                        ret = element[addEvent](type, listener, useCapture || false);
	                    }
	                    target.events[type].push(listener);
	
	                    return ret;
	                }
	            }
	
	            function remove (element, type, listener, useCapture) {
	                var i,
	                    elementIndex = indexOf(elements, element),
	                    target = targets[elementIndex],
	                    listeners,
	                    listenerIndex,
	                    wrapped = listener;
	
	                if (!target || !target.events) {
	                    return;
	                }
	
	                if (useAttachEvent) {
	                    listeners = attachedListeners[elementIndex];
	                    listenerIndex = indexOf(listeners.supplied, listener);
	                    wrapped = listeners.wrapped[listenerIndex];
	                }
	
	                if (type === 'all') {
	                    for (type in target.events) {
	                        if (target.events.hasOwnProperty(type)) {
	                            remove(element, type, 'all');
	                        }
	                    }
	                    return;
	                }
	
	                if (target.events[type]) {
	                    var len = target.events[type].length;
	
	                    if (listener === 'all') {
	                        for (i = 0; i < len; i++) {
	                            remove(element, type, target.events[type][i], Boolean(useCapture));
	                        }
	                        return;
	                    } else {
	                        for (i = 0; i < len; i++) {
	                            if (target.events[type][i] === listener) {
	                                element[removeEvent](on + type, wrapped, useCapture || false);
	                                target.events[type].splice(i, 1);
	
	                                if (useAttachEvent && listeners) {
	                                    listeners.useCount[listenerIndex]--;
	                                    if (listeners.useCount[listenerIndex] === 0) {
	                                        listeners.supplied.splice(listenerIndex, 1);
	                                        listeners.wrapped.splice(listenerIndex, 1);
	                                        listeners.useCount.splice(listenerIndex, 1);
	                                    }
	                                }
	
	                                break;
	                            }
	                        }
	                    }
	
	                    if (target.events[type] && target.events[type].length === 0) {
	                        target.events[type] = null;
	                        target.typeCount--;
	                    }
	                }
	
	                if (!target.typeCount) {
	                    targets.splice(elementIndex, 1);
	                    elements.splice(elementIndex, 1);
	                    attachedListeners.splice(elementIndex, 1);
	                }
	            }
	
	            function preventDef () {
	                this.returnValue = false;
	            }
	
	            function stopProp () {
	                this.cancelBubble = true;
	            }
	
	            function stopImmProp () {
	                this.cancelBubble = true;
	                this.immediatePropagationStopped = true;
	            }
	
	            return {
	                add: add,
	                remove: remove,
	                useAttachEvent: useAttachEvent,
	
	                _elements: elements,
	                _targets: targets,
	                _attachedListeners: attachedListeners
	            };
	        }());
	
	    function blank () {}
	
	    function isElement (o) {
	        if (!o || (typeof o !== 'object')) { return false; }
	
	        var _window = getWindow(o) || window;
	
	        return (/object|function/.test(typeof _window.Element)
	            ? o instanceof _window.Element //DOM2
	            : o.nodeType === 1 && typeof o.nodeName === "string");
	    }
	    function isWindow (thing) { return thing === window || !!(thing && thing.Window) && (thing instanceof thing.Window); }
	    function isDocFrag (thing) { return !!thing && thing instanceof DocumentFragment; }
	    function isArray (thing) {
	        return isObject(thing)
	                && (typeof thing.length !== undefined)
	                && isFunction(thing.splice);
	    }
	    function isObject   (thing) { return !!thing && (typeof thing === 'object'); }
	    function isFunction (thing) { return typeof thing === 'function'; }
	    function isNumber   (thing) { return typeof thing === 'number'  ; }
	    function isBool     (thing) { return typeof thing === 'boolean' ; }
	    function isString   (thing) { return typeof thing === 'string'  ; }
	
	    function trySelector (value) {
	        if (!isString(value)) { return false; }
	
	        // an exception will be raised if it is invalid
	        document.querySelector(value);
	        return true;
	    }
	
	    function extend (dest, source) {
	        for (var prop in source) {
	            dest[prop] = source[prop];
	        }
	        return dest;
	    }
	
	    var prefixedPropREs = {
	      webkit: /(Movement[XY]|Radius[XY]|RotationAngle|Force)$/
	    };
	
	    function pointerExtend (dest, source) {
	        for (var prop in source) {
	          var deprecated = false;
	
	          // skip deprecated prefixed properties
	          for (var vendor in prefixedPropREs) {
	            if (prop.indexOf(vendor) === 0 && prefixedPropREs[vendor].test(prop)) {
	              deprecated = true;
	              break;
	            }
	          }
	
	          if (!deprecated) {
	            dest[prop] = source[prop];
	          }
	        }
	        return dest;
	    }
	
	    function copyCoords (dest, src) {
	        dest.page = dest.page || {};
	        dest.page.x = src.page.x;
	        dest.page.y = src.page.y;
	
	        dest.client = dest.client || {};
	        dest.client.x = src.client.x;
	        dest.client.y = src.client.y;
	
	        dest.timeStamp = src.timeStamp;
	    }
	
	    function setEventXY (targetObj, pointers, interaction) {
	        var pointer = (pointers.length > 1
	                       ? pointerAverage(pointers)
	                       : pointers[0]);
	
	        getPageXY(pointer, tmpXY, interaction);
	        targetObj.page.x = tmpXY.x;
	        targetObj.page.y = tmpXY.y;
	
	        getClientXY(pointer, tmpXY, interaction);
	        targetObj.client.x = tmpXY.x;
	        targetObj.client.y = tmpXY.y;
	
	        targetObj.timeStamp = new Date().getTime();
	    }
	
	    function setEventDeltas (targetObj, prev, cur) {
	        targetObj.page.x     = cur.page.x      - prev.page.x;
	        targetObj.page.y     = cur.page.y      - prev.page.y;
	        targetObj.client.x   = cur.client.x    - prev.client.x;
	        targetObj.client.y   = cur.client.y    - prev.client.y;
	        targetObj.timeStamp = new Date().getTime() - prev.timeStamp;
	
	        // set pointer velocity
	        var dt = Math.max(targetObj.timeStamp / 1000, 0.001);
	        targetObj.page.speed   = hypot(targetObj.page.x, targetObj.page.y) / dt;
	        targetObj.page.vx      = targetObj.page.x / dt;
	        targetObj.page.vy      = targetObj.page.y / dt;
	
	        targetObj.client.speed = hypot(targetObj.client.x, targetObj.page.y) / dt;
	        targetObj.client.vx    = targetObj.client.x / dt;
	        targetObj.client.vy    = targetObj.client.y / dt;
	    }
	
	    function isNativePointer (pointer) {
	        return (pointer instanceof window.Event
	            || (supportsTouch && window.Touch && pointer instanceof window.Touch));
	    }
	
	    // Get specified X/Y coords for mouse or event.touches[0]
	    function getXY (type, pointer, xy) {
	        xy = xy || {};
	        type = type || 'page';
	
	        xy.x = pointer[type + 'X'];
	        xy.y = pointer[type + 'Y'];
	
	        return xy;
	    }
	
	    function getPageXY (pointer, page) {
	        page = page || {};
	
	        // Opera Mobile handles the viewport and scrolling oddly
	        if (isOperaMobile && isNativePointer(pointer)) {
	            getXY('screen', pointer, page);
	
	            page.x += window.scrollX;
	            page.y += window.scrollY;
	        }
	        else {
	            getXY('page', pointer, page);
	        }
	
	        return page;
	    }
	
	    function getClientXY (pointer, client) {
	        client = client || {};
	
	        if (isOperaMobile && isNativePointer(pointer)) {
	            // Opera Mobile handles the viewport and scrolling oddly
	            getXY('screen', pointer, client);
	        }
	        else {
	          getXY('client', pointer, client);
	        }
	
	        return client;
	    }
	
	    function getScrollXY (win) {
	        win = win || window;
	        return {
	            x: win.scrollX || win.document.documentElement.scrollLeft,
	            y: win.scrollY || win.document.documentElement.scrollTop
	        };
	    }
	
	    function getPointerId (pointer) {
	        return isNumber(pointer.pointerId)? pointer.pointerId : pointer.identifier;
	    }
	
	    function getActualElement (element) {
	        return (element instanceof SVGElementInstance
	            ? element.correspondingUseElement
	            : element);
	    }
	
	    function getWindow (node) {
	        if (isWindow(node)) {
	            return node;
	        }
	
	        var rootNode = (node.ownerDocument || node);
	
	        return rootNode.defaultView || rootNode.parentWindow || window;
	    }
	
	    function getElementClientRect (element) {
	        var clientRect = (element instanceof SVGElement
	                            ? element.getBoundingClientRect()
	                            : element.getClientRects()[0]);
	
	        return clientRect && {
	            left  : clientRect.left,
	            right : clientRect.right,
	            top   : clientRect.top,
	            bottom: clientRect.bottom,
	            width : clientRect.width || clientRect.right - clientRect.left,
	            height: clientRect.height || clientRect.bottom - clientRect.top
	        };
	    }
	
	    function getElementRect (element) {
	        var clientRect = getElementClientRect(element);
	
	        if (!isIOS7 && clientRect) {
	            var scroll = getScrollXY(getWindow(element));
	
	            clientRect.left   += scroll.x;
	            clientRect.right  += scroll.x;
	            clientRect.top    += scroll.y;
	            clientRect.bottom += scroll.y;
	        }
	
	        return clientRect;
	    }
	
	    function getTouchPair (event) {
	        var touches = [];
	
	        // array of touches is supplied
	        if (isArray(event)) {
	            touches[0] = event[0];
	            touches[1] = event[1];
	        }
	        // an event
	        else {
	            if (event.type === 'touchend') {
	                if (event.touches.length === 1) {
	                    touches[0] = event.touches[0];
	                    touches[1] = event.changedTouches[0];
	                }
	                else if (event.touches.length === 0) {
	                    touches[0] = event.changedTouches[0];
	                    touches[1] = event.changedTouches[1];
	                }
	            }
	            else {
	                touches[0] = event.touches[0];
	                touches[1] = event.touches[1];
	            }
	        }
	
	        return touches;
	    }
	
	    function pointerAverage (pointers) {
	        var average = {
	            pageX  : 0,
	            pageY  : 0,
	            clientX: 0,
	            clientY: 0,
	            screenX: 0,
	            screenY: 0
	        };
	        var prop;
	
	        for (var i = 0; i < pointers.length; i++) {
	            for (prop in average) {
	                average[prop] += pointers[i][prop];
	            }
	        }
	        for (prop in average) {
	            average[prop] /= pointers.length;
	        }
	
	        return average;
	    }
	
	    function touchBBox (event) {
	        if (!event.length && !(event.touches && event.touches.length > 1)) {
	            return;
	        }
	
	        var touches = getTouchPair(event),
	            minX = Math.min(touches[0].pageX, touches[1].pageX),
	            minY = Math.min(touches[0].pageY, touches[1].pageY),
	            maxX = Math.max(touches[0].pageX, touches[1].pageX),
	            maxY = Math.max(touches[0].pageY, touches[1].pageY);
	
	        return {
	            x: minX,
	            y: minY,
	            left: minX,
	            top: minY,
	            width: maxX - minX,
	            height: maxY - minY
	        };
	    }
	
	    function touchDistance (event, deltaSource) {
	        deltaSource = deltaSource || defaultOptions.deltaSource;
	
	        var sourceX = deltaSource + 'X',
	            sourceY = deltaSource + 'Y',
	            touches = getTouchPair(event);
	
	
	        var dx = touches[0][sourceX] - touches[1][sourceX],
	            dy = touches[0][sourceY] - touches[1][sourceY];
	
	        return hypot(dx, dy);
	    }
	
	    function touchAngle (event, prevAngle, deltaSource) {
	        deltaSource = deltaSource || defaultOptions.deltaSource;
	
	        var sourceX = deltaSource + 'X',
	            sourceY = deltaSource + 'Y',
	            touches = getTouchPair(event),
	            dx = touches[0][sourceX] - touches[1][sourceX],
	            dy = touches[0][sourceY] - touches[1][sourceY],
	            angle = 180 * Math.atan(dy / dx) / Math.PI;
	
	        if (isNumber(prevAngle)) {
	            var dr = angle - prevAngle,
	                drClamped = dr % 360;
	
	            if (drClamped > 315) {
	                angle -= 360 + (angle / 360)|0 * 360;
	            }
	            else if (drClamped > 135) {
	                angle -= 180 + (angle / 360)|0 * 360;
	            }
	            else if (drClamped < -315) {
	                angle += 360 + (angle / 360)|0 * 360;
	            }
	            else if (drClamped < -135) {
	                angle += 180 + (angle / 360)|0 * 360;
	            }
	        }
	
	        return  angle;
	    }
	
	    function getOriginXY (interactable, element) {
	        var origin = interactable
	                ? interactable.options.origin
	                : defaultOptions.origin;
	
	        if (origin === 'parent') {
	            origin = parentElement(element);
	        }
	        else if (origin === 'self') {
	            origin = interactable.getRect(element);
	        }
	        else if (trySelector(origin)) {
	            origin = closest(element, origin) || { x: 0, y: 0 };
	        }
	
	        if (isFunction(origin)) {
	            origin = origin(interactable && element);
	        }
	
	        if (isElement(origin))  {
	            origin = getElementRect(origin);
	        }
	
	        origin.x = ('x' in origin)? origin.x : origin.left;
	        origin.y = ('y' in origin)? origin.y : origin.top;
	
	        return origin;
	    }
	
	    // http://stackoverflow.com/a/5634528/2280888
	    function _getQBezierValue(t, p1, p2, p3) {
	        var iT = 1 - t;
	        return iT * iT * p1 + 2 * iT * t * p2 + t * t * p3;
	    }
	
	    function getQuadraticCurvePoint(startX, startY, cpX, cpY, endX, endY, position) {
	        return {
	            x:  _getQBezierValue(position, startX, cpX, endX),
	            y:  _getQBezierValue(position, startY, cpY, endY)
	        };
	    }
	
	    // http://gizma.com/easing/
	    function easeOutQuad (t, b, c, d) {
	        t /= d;
	        return -c * t*(t-2) + b;
	    }
	
	    function nodeContains (parent, child) {
	        while (child) {
	            if (child === parent) {
	                return true;
	            }
	
	            child = child.parentNode;
	        }
	
	        return false;
	    }
	
	    function closest (child, selector) {
	        var parent = parentElement(child);
	
	        while (isElement(parent)) {
	            if (matchesSelector(parent, selector)) { return parent; }
	
	            parent = parentElement(parent);
	        }
	
	        return null;
	    }
	
	    function parentElement (node) {
	        var parent = node.parentNode;
	
	        if (isDocFrag(parent)) {
	            // skip past #shado-root fragments
	            while ((parent = parent.host) && isDocFrag(parent)) {}
	
	            return parent;
	        }
	
	        return parent;
	    }
	
	    function inContext (interactable, element) {
	        return interactable._context === element.ownerDocument
	                || nodeContains(interactable._context, element);
	    }
	
	    function testIgnore (interactable, interactableElement, element) {
	        var ignoreFrom = interactable.options.ignoreFrom;
	
	        if (!ignoreFrom || !isElement(element)) { return false; }
	
	        if (isString(ignoreFrom)) {
	            return matchesUpTo(element, ignoreFrom, interactableElement);
	        }
	        else if (isElement(ignoreFrom)) {
	            return nodeContains(ignoreFrom, element);
	        }
	
	        return false;
	    }
	
	    function testAllow (interactable, interactableElement, element) {
	        var allowFrom = interactable.options.allowFrom;
	
	        if (!allowFrom) { return true; }
	
	        if (!isElement(element)) { return false; }
	
	        if (isString(allowFrom)) {
	            return matchesUpTo(element, allowFrom, interactableElement);
	        }
	        else if (isElement(allowFrom)) {
	            return nodeContains(allowFrom, element);
	        }
	
	        return false;
	    }
	
	    function checkAxis (axis, interactable) {
	        if (!interactable) { return false; }
	
	        var thisAxis = interactable.options.drag.axis;
	
	        return (axis === 'xy' || thisAxis === 'xy' || thisAxis === axis);
	    }
	
	    function checkSnap (interactable, action) {
	        var options = interactable.options;
	
	        if (/^resize/.test(action)) {
	            action = 'resize';
	        }
	
	        return options[action].snap && options[action].snap.enabled;
	    }
	
	    function checkRestrict (interactable, action) {
	        var options = interactable.options;
	
	        if (/^resize/.test(action)) {
	            action = 'resize';
	        }
	
	        return  options[action].restrict && options[action].restrict.enabled;
	    }
	
	    function checkAutoScroll (interactable, action) {
	        var options = interactable.options;
	
	        if (/^resize/.test(action)) {
	            action = 'resize';
	        }
	
	        return  options[action].autoScroll && options[action].autoScroll.enabled;
	    }
	
	    function withinInteractionLimit (interactable, element, action) {
	        var options = interactable.options,
	            maxActions = options[action.name].max,
	            maxPerElement = options[action.name].maxPerElement,
	            activeInteractions = 0,
	            targetCount = 0,
	            targetElementCount = 0;
	
	        for (var i = 0, len = interactions.length; i < len; i++) {
	            var interaction = interactions[i],
	                otherAction = interaction.prepared.name,
	                active = interaction.interacting();
	
	            if (!active) { continue; }
	
	            activeInteractions++;
	
	            if (activeInteractions >= maxInteractions) {
	                return false;
	            }
	
	            if (interaction.target !== interactable) { continue; }
	
	            targetCount += (otherAction === action.name)|0;
	
	            if (targetCount >= maxActions) {
	                return false;
	            }
	
	            if (interaction.element === element) {
	                targetElementCount++;
	
	                if (otherAction !== action.name || targetElementCount >= maxPerElement) {
	                    return false;
	                }
	            }
	        }
	
	        return maxInteractions > 0;
	    }
	
	    // Test for the element that's "above" all other qualifiers
	    function indexOfDeepestElement (elements) {
	        var dropzone,
	            deepestZone = elements[0],
	            index = deepestZone? 0: -1,
	            parent,
	            deepestZoneParents = [],
	            dropzoneParents = [],
	            child,
	            i,
	            n;
	
	        for (i = 1; i < elements.length; i++) {
	            dropzone = elements[i];
	
	            // an element might belong to multiple selector dropzones
	            if (!dropzone || dropzone === deepestZone) {
	                continue;
	            }
	
	            if (!deepestZone) {
	                deepestZone = dropzone;
	                index = i;
	                continue;
	            }
	
	            // check if the deepest or current are document.documentElement or document.rootElement
	            // - if the current dropzone is, do nothing and continue
	            if (dropzone.parentNode === dropzone.ownerDocument) {
	                continue;
	            }
	            // - if deepest is, update with the current dropzone and continue to next
	            else if (deepestZone.parentNode === dropzone.ownerDocument) {
	                deepestZone = dropzone;
	                index = i;
	                continue;
	            }
	
	            if (!deepestZoneParents.length) {
	                parent = deepestZone;
	                while (parent.parentNode && parent.parentNode !== parent.ownerDocument) {
	                    deepestZoneParents.unshift(parent);
	                    parent = parent.parentNode;
	                }
	            }
	
	            // if this element is an svg element and the current deepest is
	            // an HTMLElement
	            if (deepestZone instanceof HTMLElement
	                && dropzone instanceof SVGElement
	                && !(dropzone instanceof SVGSVGElement)) {
	
	                if (dropzone === deepestZone.parentNode) {
	                    continue;
	                }
	
	                parent = dropzone.ownerSVGElement;
	            }
	            else {
	                parent = dropzone;
	            }
	
	            dropzoneParents = [];
	
	            while (parent.parentNode !== parent.ownerDocument) {
	                dropzoneParents.unshift(parent);
	                parent = parent.parentNode;
	            }
	
	            n = 0;
	
	            // get (position of last common ancestor) + 1
	            while (dropzoneParents[n] && dropzoneParents[n] === deepestZoneParents[n]) {
	                n++;
	            }
	
	            var parents = [
	                dropzoneParents[n - 1],
	                dropzoneParents[n],
	                deepestZoneParents[n]
	            ];
	
	            child = parents[0].lastChild;
	
	            while (child) {
	                if (child === parents[1]) {
	                    deepestZone = dropzone;
	                    index = i;
	                    deepestZoneParents = [];
	
	                    break;
	                }
	                else if (child === parents[2]) {
	                    break;
	                }
	
	                child = child.previousSibling;
	            }
	        }
	
	        return index;
	    }
	
	    function Interaction () {
	        this.target          = null; // current interactable being interacted with
	        this.element         = null; // the target element of the interactable
	        this.dropTarget      = null; // the dropzone a drag target might be dropped into
	        this.dropElement     = null; // the element at the time of checking
	        this.prevDropTarget  = null; // the dropzone that was recently dragged away from
	        this.prevDropElement = null; // the element at the time of checking
	
	        this.prepared        = {     // action that's ready to be fired on next move event
	            name : null,
	            axis : null,
	            edges: null
	        };
	
	        this.matches         = [];   // all selectors that are matched by target element
	        this.matchElements   = [];   // corresponding elements
	
	        this.inertiaStatus = {
	            active       : false,
	            smoothEnd    : false,
	            ending       : false,
	
	            startEvent: null,
	            upCoords: {},
	
	            xe: 0, ye: 0,
	            sx: 0, sy: 0,
	
	            t0: 0,
	            vx0: 0, vys: 0,
	            duration: 0,
	
	            resumeDx: 0,
	            resumeDy: 0,
	
	            lambda_v0: 0,
	            one_ve_v0: 0,
	            i  : null
	        };
	
	        if (isFunction(Function.prototype.bind)) {
	            this.boundInertiaFrame = this.inertiaFrame.bind(this);
	            this.boundSmoothEndFrame = this.smoothEndFrame.bind(this);
	        }
	        else {
	            var that = this;
	
	            this.boundInertiaFrame = function () { return that.inertiaFrame(); };
	            this.boundSmoothEndFrame = function () { return that.smoothEndFrame(); };
	        }
	
	        this.activeDrops = {
	            dropzones: [],      // the dropzones that are mentioned below
	            elements : [],      // elements of dropzones that accept the target draggable
	            rects    : []       // the rects of the elements mentioned above
	        };
	
	        // keep track of added pointers
	        this.pointers    = [];
	        this.pointerIds  = [];
	        this.downTargets = [];
	        this.downTimes   = [];
	        this.holdTimers  = [];
	
	        // Previous native pointer move event coordinates
	        this.prevCoords = {
	            page     : { x: 0, y: 0 },
	            client   : { x: 0, y: 0 },
	            timeStamp: 0
	        };
	        // current native pointer move event coordinates
	        this.curCoords = {
	            page     : { x: 0, y: 0 },
	            client   : { x: 0, y: 0 },
	            timeStamp: 0
	        };
	
	        // Starting InteractEvent pointer coordinates
	        this.startCoords = {
	            page     : { x: 0, y: 0 },
	            client   : { x: 0, y: 0 },
	            timeStamp: 0
	        };
	
	        // Change in coordinates and time of the pointer
	        this.pointerDelta = {
	            page     : { x: 0, y: 0, vx: 0, vy: 0, speed: 0 },
	            client   : { x: 0, y: 0, vx: 0, vy: 0, speed: 0 },
	            timeStamp: 0
	        };
	
	        this.downEvent   = null;    // pointerdown/mousedown/touchstart event
	        this.downPointer = {};
	
	        this._eventTarget    = null;
	        this._curEventTarget = null;
	
	        this.prevEvent = null;      // previous action event
	        this.tapTime   = 0;         // time of the most recent tap event
	        this.prevTap   = null;
	
	        this.startOffset    = { left: 0, right: 0, top: 0, bottom: 0 };
	        this.restrictOffset = { left: 0, right: 0, top: 0, bottom: 0 };
	        this.snapOffsets    = [];
	
	        this.gesture = {
	            start: { x: 0, y: 0 },
	
	            startDistance: 0,   // distance between two touches of touchStart
	            prevDistance : 0,
	            distance     : 0,
	
	            scale: 1,           // gesture.distance / gesture.startDistance
	
	            startAngle: 0,      // angle of line joining two touches
	            prevAngle : 0       // angle of the previous gesture event
	        };
	
	        this.snapStatus = {
	            x       : 0, y       : 0,
	            dx      : 0, dy      : 0,
	            realX   : 0, realY   : 0,
	            snappedX: 0, snappedY: 0,
	            targets : [],
	            locked  : false,
	            changed : false
	        };
	
	        this.restrictStatus = {
	            dx         : 0, dy         : 0,
	            restrictedX: 0, restrictedY: 0,
	            snap       : null,
	            restricted : false,
	            changed    : false
	        };
	
	        this.restrictStatus.snap = this.snapStatus;
	
	        this.pointerIsDown   = false;
	        this.pointerWasMoved = false;
	        this.gesturing       = false;
	        this.dragging        = false;
	        this.resizing        = false;
	        this.resizeAxes      = 'xy';
	
	        this.mouse = false;
	
	        interactions.push(this);
	    }
	
	    Interaction.prototype = {
	        getPageXY  : function (pointer, xy) { return   getPageXY(pointer, xy, this); },
	        getClientXY: function (pointer, xy) { return getClientXY(pointer, xy, this); },
	        setEventXY : function (target, ptr) { return  setEventXY(target, ptr, this); },
	
	        pointerOver: function (pointer, event, eventTarget) {
	            if (this.prepared.name || !this.mouse) { return; }
	
	            var curMatches = [],
	                curMatchElements = [],
	                prevTargetElement = this.element;
	
	            this.addPointer(pointer);
	
	            if (this.target
	                && (testIgnore(this.target, this.element, eventTarget)
	                    || !testAllow(this.target, this.element, eventTarget))) {
	                // if the eventTarget should be ignored or shouldn't be allowed
	                // clear the previous target
	                this.target = null;
	                this.element = null;
	                this.matches = [];
	                this.matchElements = [];
	            }
	
	            var elementInteractable = interactables.get(eventTarget),
	                elementAction = (elementInteractable
	                                 && !testIgnore(elementInteractable, eventTarget, eventTarget)
	                                 && testAllow(elementInteractable, eventTarget, eventTarget)
	                                 && validateAction(
	                                     elementInteractable.getAction(pointer, event, this, eventTarget),
	                                     elementInteractable));
	
	            if (elementAction && !withinInteractionLimit(elementInteractable, eventTarget, elementAction)) {
	                 elementAction = null;
	            }
	
	            function pushCurMatches (interactable, selector) {
	                if (interactable
	                    && inContext(interactable, eventTarget)
	                    && !testIgnore(interactable, eventTarget, eventTarget)
	                    && testAllow(interactable, eventTarget, eventTarget)
	                    && matchesSelector(eventTarget, selector)) {
	
	                    curMatches.push(interactable);
	                    curMatchElements.push(eventTarget);
	                }
	            }
	
	            if (elementAction) {
	                this.target = elementInteractable;
	                this.element = eventTarget;
	                this.matches = [];
	                this.matchElements = [];
	            }
	            else {
	                interactables.forEachSelector(pushCurMatches);
	
	                if (this.validateSelector(pointer, event, curMatches, curMatchElements)) {
	                    this.matches = curMatches;
	                    this.matchElements = curMatchElements;
	
	                    this.pointerHover(pointer, event, this.matches, this.matchElements);
	                    events.add(eventTarget,
	                                        supportsPointerEvent? pEventTypes.move : 'mousemove',
	                                        listeners.pointerHover);
	                }
	                else if (this.target) {
	                    if (nodeContains(prevTargetElement, eventTarget)) {
	                        this.pointerHover(pointer, event, this.matches, this.matchElements);
	                        events.add(this.element,
	                                            supportsPointerEvent? pEventTypes.move : 'mousemove',
	                                            listeners.pointerHover);
	                    }
	                    else {
	                        this.target = null;
	                        this.element = null;
	                        this.matches = [];
	                        this.matchElements = [];
	                    }
	                }
	            }
	        },
	
	        // Check what action would be performed on pointerMove target if a mouse
	        // button were pressed and change the cursor accordingly
	        pointerHover: function (pointer, event, eventTarget, curEventTarget, matches, matchElements) {
	            var target = this.target;
	
	            if (!this.prepared.name && this.mouse) {
	
	                var action;
	
	                // update pointer coords for defaultActionChecker to use
	                this.setEventXY(this.curCoords, [pointer]);
	
	                if (matches) {
	                    action = this.validateSelector(pointer, event, matches, matchElements);
	                }
	                else if (target) {
	                    action = validateAction(target.getAction(this.pointers[0], event, this, this.element), this.target);
	                }
	
	                if (target && target.options.styleCursor) {
	                    if (action) {
	                        target._doc.documentElement.style.cursor = getActionCursor(action);
	                    }
	                    else {
	                        target._doc.documentElement.style.cursor = '';
	                    }
	                }
	            }
	            else if (this.prepared.name) {
	                this.checkAndPreventDefault(event, target, this.element);
	            }
	        },
	
	        pointerOut: function (pointer, event, eventTarget) {
	            if (this.prepared.name) { return; }
	
	            // Remove temporary event listeners for selector Interactables
	            if (!interactables.get(eventTarget)) {
	                events.remove(eventTarget,
	                                       supportsPointerEvent? pEventTypes.move : 'mousemove',
	                                       listeners.pointerHover);
	            }
	
	            if (this.target && this.target.options.styleCursor && !this.interacting()) {
	                this.target._doc.documentElement.style.cursor = '';
	            }
	        },
	
	        selectorDown: function (pointer, event, eventTarget, curEventTarget) {
	            var that = this,
	                // copy event to be used in timeout for IE8
	                eventCopy = events.useAttachEvent? extend({}, event) : event,
	                element = eventTarget,
	                pointerIndex = this.addPointer(pointer),
	                action;
	
	            this.holdTimers[pointerIndex] = setTimeout(function () {
	                that.pointerHold(events.useAttachEvent? eventCopy : pointer, eventCopy, eventTarget, curEventTarget);
	            }, defaultOptions._holdDuration);
	
	            this.pointerIsDown = true;
	
	            // Check if the down event hits the current inertia target
	            if (this.inertiaStatus.active && this.target.selector) {
	                // climb up the DOM tree from the event target
	                while (isElement(element)) {
	
	                    // if this element is the current inertia target element
	                    if (element === this.element
	                        // and the prospective action is the same as the ongoing one
	                        && validateAction(this.target.getAction(pointer, event, this, this.element), this.target).name === this.prepared.name) {
	
	                        // stop inertia so that the next move will be a normal one
	                        cancelFrame(this.inertiaStatus.i);
	                        this.inertiaStatus.active = false;
	
	                        this.collectEventTargets(pointer, event, eventTarget, 'down');
	                        return;
	                    }
	                    element = parentElement(element);
	                }
	            }
	
	            // do nothing if interacting
	            if (this.interacting()) {
	                this.collectEventTargets(pointer, event, eventTarget, 'down');
	                return;
	            }
	
	            function pushMatches (interactable, selector, context) {
	                var elements = ie8MatchesSelector
	                    ? context.querySelectorAll(selector)
	                    : undefined;
	
	                if (inContext(interactable, element)
	                    && !testIgnore(interactable, element, eventTarget)
	                    && testAllow(interactable, element, eventTarget)
	                    && matchesSelector(element, selector, elements)) {
	
	                    that.matches.push(interactable);
	                    that.matchElements.push(element);
	                }
	            }
	
	            // update pointer coords for defaultActionChecker to use
	            this.setEventXY(this.curCoords, [pointer]);
	            this.downEvent = event;
	
	            while (isElement(element) && !action) {
	                this.matches = [];
	                this.matchElements = [];
	
	                interactables.forEachSelector(pushMatches);
	
	                action = this.validateSelector(pointer, event, this.matches, this.matchElements);
	                element = parentElement(element);
	            }
	
	            if (action) {
	                this.prepared.name  = action.name;
	                this.prepared.axis  = action.axis;
	                this.prepared.edges = action.edges;
	
	                this.collectEventTargets(pointer, event, eventTarget, 'down');
	
	                return this.pointerDown(pointer, event, eventTarget, curEventTarget, action);
	            }
	            else {
	                // do these now since pointerDown isn't being called from here
	                this.downTimes[pointerIndex] = new Date().getTime();
	                this.downTargets[pointerIndex] = eventTarget;
	                pointerExtend(this.downPointer, pointer);
	
	                copyCoords(this.prevCoords, this.curCoords);
	                this.pointerWasMoved = false;
	            }
	
	            this.collectEventTargets(pointer, event, eventTarget, 'down');
	        },
	
	        // Determine action to be performed on next pointerMove and add appropriate
	        // style and event Listeners
	        pointerDown: function (pointer, event, eventTarget, curEventTarget, forceAction) {
	            if (!forceAction && !this.inertiaStatus.active && this.pointerWasMoved && this.prepared.name) {
	                this.checkAndPreventDefault(event, this.target, this.element);
	
	                return;
	            }
	
	            this.pointerIsDown = true;
	            this.downEvent = event;
	
	            var pointerIndex = this.addPointer(pointer),
	                action;
	
	            // If it is the second touch of a multi-touch gesture, keep the
	            // target the same and get a new action if a target was set by the
	            // first touch
	            if (this.pointerIds.length > 1 && this.target._element === this.element) {
	                var newAction = validateAction(forceAction || this.target.getAction(pointer, event, this, this.element), this.target);
	
	                if (withinInteractionLimit(this.target, this.element, newAction)) {
	                    action = newAction;
	                }
	
	                this.prepared.name = null;
	            }
	            // Otherwise, set the target if there is no action prepared
	            else if (!this.prepared.name) {
	                var interactable = interactables.get(curEventTarget);
	
	                if (interactable
	                    && !testIgnore(interactable, curEventTarget, eventTarget)
	                    && testAllow(interactable, curEventTarget, eventTarget)
	                    && (action = validateAction(forceAction || interactable.getAction(pointer, event, this, curEventTarget), interactable, eventTarget))
	                    && withinInteractionLimit(interactable, curEventTarget, action)) {
	                    this.target = interactable;
	                    this.element = curEventTarget;
	                }
	            }
	
	            var target = this.target,
	                options = target && target.options;
	
	            if (target && (forceAction || !this.prepared.name)) {
	                action = action || validateAction(forceAction || target.getAction(pointer, event, this, curEventTarget), target, this.element);
	
	                this.setEventXY(this.startCoords, this.pointers);
	
	                if (!action) { return; }
	
	                if (options.styleCursor) {
	                    target._doc.documentElement.style.cursor = getActionCursor(action);
	                }
	
	                this.resizeAxes = action.name === 'resize'? action.axis : null;
	
	                if (action === 'gesture' && this.pointerIds.length < 2) {
	                    action = null;
	                }
	
	                this.prepared.name  = action.name;
	                this.prepared.axis  = action.axis;
	                this.prepared.edges = action.edges;
	
	                this.snapStatus.snappedX = this.snapStatus.snappedY =
	                    this.restrictStatus.restrictedX = this.restrictStatus.restrictedY = NaN;
	
	                this.downTimes[pointerIndex] = new Date().getTime();
	                this.downTargets[pointerIndex] = eventTarget;
	                pointerExtend(this.downPointer, pointer);
	
	                copyCoords(this.prevCoords, this.startCoords);
	                this.pointerWasMoved = false;
	
	                this.checkAndPreventDefault(event, target, this.element);
	            }
	            // if inertia is active try to resume action
	            else if (this.inertiaStatus.active
	                && curEventTarget === this.element
	                && validateAction(target.getAction(pointer, event, this, this.element), target).name === this.prepared.name) {
	
	                cancelFrame(this.inertiaStatus.i);
	                this.inertiaStatus.active = false;
	
	                this.checkAndPreventDefault(event, target, this.element);
	            }
	        },
	
	        setModifications: function (coords, preEnd) {
	            var target         = this.target,
	                shouldMove     = true,
	                shouldSnap     = checkSnap(target, this.prepared.name)     && (!target.options[this.prepared.name].snap.endOnly     || preEnd),
	                shouldRestrict = checkRestrict(target, this.prepared.name) && (!target.options[this.prepared.name].restrict.endOnly || preEnd);
	
	            if (shouldSnap    ) { this.setSnapping   (coords); } else { this.snapStatus    .locked     = false; }
	            if (shouldRestrict) { this.setRestriction(coords); } else { this.restrictStatus.restricted = false; }
	
	            if (shouldSnap && this.snapStatus.locked && !this.snapStatus.changed) {
	                shouldMove = shouldRestrict && this.restrictStatus.restricted && this.restrictStatus.changed;
	            }
	            else if (shouldRestrict && this.restrictStatus.restricted && !this.restrictStatus.changed) {
	                shouldMove = false;
	            }
	
	            return shouldMove;
	        },
	
	        setStartOffsets: function (action, interactable, element) {
	            var rect = interactable.getRect(element),
	                origin = getOriginXY(interactable, element),
	                snap = interactable.options[this.prepared.name].snap,
	                restrict = interactable.options[this.prepared.name].restrict,
	                width, height;
	
	            if (rect) {
	                this.startOffset.left = this.startCoords.page.x - rect.left;
	                this.startOffset.top  = this.startCoords.page.y - rect.top;
	
	                this.startOffset.right  = rect.right  - this.startCoords.page.x;
	                this.startOffset.bottom = rect.bottom - this.startCoords.page.y;
	
	                if ('width' in rect) { width = rect.width; }
	                else { width = rect.right - rect.left; }
	                if ('height' in rect) { height = rect.height; }
	                else { height = rect.bottom - rect.top; }
	            }
	            else {
	                this.startOffset.left = this.startOffset.top = this.startOffset.right = this.startOffset.bottom = 0;
	            }
	
	            this.snapOffsets.splice(0);
	
	            var snapOffset = snap && snap.offset === 'startCoords'
	                                ? {
	                                    x: this.startCoords.page.x - origin.x,
	                                    y: this.startCoords.page.y - origin.y
	                                }
	                                : snap && snap.offset || { x: 0, y: 0 };
	
	            if (rect && snap && snap.relativePoints && snap.relativePoints.length) {
	                for (var i = 0; i < snap.relativePoints.length; i++) {
	                    this.snapOffsets.push({
	                        x: this.startOffset.left - (width  * snap.relativePoints[i].x) + snapOffset.x,
	                        y: this.startOffset.top  - (height * snap.relativePoints[i].y) + snapOffset.y
	                    });
	                }
	            }
	            else {
	                this.snapOffsets.push(snapOffset);
	            }
	
	            if (rect && restrict.elementRect) {
	                this.restrictOffset.left = this.startOffset.left - (width  * restrict.elementRect.left);
	                this.restrictOffset.top  = this.startOffset.top  - (height * restrict.elementRect.top);
	
	                this.restrictOffset.right  = this.startOffset.right  - (width  * (1 - restrict.elementRect.right));
	                this.restrictOffset.bottom = this.startOffset.bottom - (height * (1 - restrict.elementRect.bottom));
	            }
	            else {
	                this.restrictOffset.left = this.restrictOffset.top = this.restrictOffset.right = this.restrictOffset.bottom = 0;
	            }
	        },
	
	        /*\
	         * Interaction.start
	         [ method ]
	         *
	         * Start an action with the given Interactable and Element as tartgets. The
	         * action must be enabled for the target Interactable and an appropriate number
	         * of pointers must be held down – 1 for drag/resize, 2 for gesture.
	         *
	         * Use it with `interactable.<action>able({ manualStart: false })` to always
	         * [start actions manually](https://github.com/taye/interact.js/issues/114)
	         *
	         - action       (object)  The action to be performed - drag, resize, etc.
	         - interactable (Interactable) The Interactable to target
	         - element      (Element) The DOM Element to target
	         = (object) interact
	         **
	         | interact(target)
	         |   .draggable({
	         |     // disable the default drag start by down->move
	         |     manualStart: true
	         |   })
	         |   // start dragging after the user holds the pointer down
	         |   .on('hold', function (event) {
	         |     var interaction = event.interaction;
	         |
	         |     if (!interaction.interacting()) {
	         |       interaction.start({ name: 'drag' },
	         |                         event.interactable,
	         |                         event.currentTarget);
	         |     }
	         | });
	        \*/
	        start: function (action, interactable, element) {
	            if (this.interacting()
	                || !this.pointerIsDown
	                || this.pointerIds.length < (action.name === 'gesture'? 2 : 1)) {
	                return;
	            }
	
	            // if this interaction had been removed after stopping
	            // add it back
	            if (indexOf(interactions, this) === -1) {
	                interactions.push(this);
	            }
	
	            // set the startCoords if there was no prepared action
	            if (!this.prepared.name) {
	                this.setEventXY(this.startCoords, this.pointers);
	            }
	
	            this.prepared.name  = action.name;
	            this.prepared.axis  = action.axis;
	            this.prepared.edges = action.edges;
	            this.target         = interactable;
	            this.element        = element;
	
	            this.setStartOffsets(action.name, interactable, element);
	            this.setModifications(this.startCoords.page);
	
	            this.prevEvent = this[this.prepared.name + 'Start'](this.downEvent);
	        },
	
	        pointerMove: function (pointer, event, eventTarget, curEventTarget, preEnd) {
	            if (this.inertiaStatus.active) {
	                var pageUp   = this.inertiaStatus.upCoords.page;
	                var clientUp = this.inertiaStatus.upCoords.client;
	
	                var inertiaPosition = {
	                    pageX  : pageUp.x   + this.inertiaStatus.sx,
	                    pageY  : pageUp.y   + this.inertiaStatus.sy,
	                    clientX: clientUp.x + this.inertiaStatus.sx,
	                    clientY: clientUp.y + this.inertiaStatus.sy
	                };
	
	                this.setEventXY(this.curCoords, [inertiaPosition]);
	            }
	            else {
	                this.recordPointer(pointer);
	                this.setEventXY(this.curCoords, this.pointers);
	            }
	
	            var duplicateMove = (this.curCoords.page.x === this.prevCoords.page.x
	                                 && this.curCoords.page.y === this.prevCoords.page.y
	                                 && this.curCoords.client.x === this.prevCoords.client.x
	                                 && this.curCoords.client.y === this.prevCoords.client.y);
	
	            var dx, dy,
	                pointerIndex = this.mouse? 0 : indexOf(this.pointerIds, getPointerId(pointer));
	
	            // register movement greater than pointerMoveTolerance
	            if (this.pointerIsDown && !this.pointerWasMoved) {
	                dx = this.curCoords.client.x - this.startCoords.client.x;
	                dy = this.curCoords.client.y - this.startCoords.client.y;
	
	                this.pointerWasMoved = hypot(dx, dy) > pointerMoveTolerance;
	            }
	
	            if (!duplicateMove && (!this.pointerIsDown || this.pointerWasMoved)) {
	                if (this.pointerIsDown) {
	                    clearTimeout(this.holdTimers[pointerIndex]);
	                }
	
	                this.collectEventTargets(pointer, event, eventTarget, 'move');
	            }
	
	            if (!this.pointerIsDown) { return; }
	
	            if (duplicateMove && this.pointerWasMoved && !preEnd) {
	                this.checkAndPreventDefault(event, this.target, this.element);
	                return;
	            }
	
	            // set pointer coordinate, time changes and speeds
	            setEventDeltas(this.pointerDelta, this.prevCoords, this.curCoords);
	
	            if (!this.prepared.name) { return; }
	
	            if (this.pointerWasMoved
	                // ignore movement while inertia is active
	                && (!this.inertiaStatus.active || (pointer instanceof InteractEvent && /inertiastart/.test(pointer.type)))) {
	
	                // if just starting an action, calculate the pointer speed now
	                if (!this.interacting()) {
	                    setEventDeltas(this.pointerDelta, this.prevCoords, this.curCoords);
	
	                    // check if a drag is in the correct axis
	                    if (this.prepared.name === 'drag') {
	                        var absX = Math.abs(dx),
	                            absY = Math.abs(dy),
	                            targetAxis = this.target.options.drag.axis,
	                            axis = (absX > absY ? 'x' : absX < absY ? 'y' : 'xy');
	
	                        // if the movement isn't in the axis of the interactable
	                        if (axis !== 'xy' && targetAxis !== 'xy' && targetAxis !== axis) {
	                            // cancel the prepared action
	                            this.prepared.name = null;
	
	                            // then try to get a drag from another ineractable
	
	                            var element = eventTarget;
	
	                            // check element interactables
	                            while (isElement(element)) {
	                                var elementInteractable = interactables.get(element);
	
	                                if (elementInteractable
	                                    && elementInteractable !== this.target
	                                    && !elementInteractable.options.drag.manualStart
	                                    && elementInteractable.getAction(this.downPointer, this.downEvent, this, element).name === 'drag'
	                                    && checkAxis(axis, elementInteractable)) {
	
	                                    this.prepared.name = 'drag';
	                                    this.target = elementInteractable;
	                                    this.element = element;
	                                    break;
	                                }
	
	                                element = parentElement(element);
	                            }
	
	                            // if there's no drag from element interactables,
	                            // check the selector interactables
	                            if (!this.prepared.name) {
	                                var thisInteraction = this;
	
	                                var getDraggable = function (interactable, selector, context) {
	                                    var elements = ie8MatchesSelector
	                                        ? context.querySelectorAll(selector)
	                                        : undefined;
	
	                                    if (interactable === thisInteraction.target) { return; }
	
	                                    if (inContext(interactable, eventTarget)
	                                        && !interactable.options.drag.manualStart
	                                        && !testIgnore(interactable, element, eventTarget)
	                                        && testAllow(interactable, element, eventTarget)
	                                        && matchesSelector(element, selector, elements)
	                                        && interactable.getAction(thisInteraction.downPointer, thisInteraction.downEvent, thisInteraction, element).name === 'drag'
	                                        && checkAxis(axis, interactable)
	                                        && withinInteractionLimit(interactable, element, 'drag')) {
	
	                                        return interactable;
	                                    }
	                                };
	
	                                element = eventTarget;
	
	                                while (isElement(element)) {
	                                    var selectorInteractable = interactables.forEachSelector(getDraggable);
	
	                                    if (selectorInteractable) {
	                                        this.prepared.name = 'drag';
	                                        this.target = selectorInteractable;
	                                        this.element = element;
	                                        break;
	                                    }
	
	                                    element = parentElement(element);
	                                }
	                            }
	                        }
	                    }
	                }
	
	                var starting = !!this.prepared.name && !this.interacting();
	
	                if (starting
	                    && (this.target.options[this.prepared.name].manualStart
	                        || !withinInteractionLimit(this.target, this.element, this.prepared))) {
	                    this.stop(event);
	                    return;
	                }
	
	                if (this.prepared.name && this.target) {
	                    if (starting) {
	                        this.start(this.prepared, this.target, this.element);
	                    }
	
	                    var shouldMove = this.setModifications(this.curCoords.page, preEnd);
	
	                    // move if snapping or restriction doesn't prevent it
	                    if (shouldMove || starting) {
	                        this.prevEvent = this[this.prepared.name + 'Move'](event);
	                    }
	
	                    this.checkAndPreventDefault(event, this.target, this.element);
	                }
	            }
	
	            copyCoords(this.prevCoords, this.curCoords);
	
	            if (this.dragging || this.resizing) {
	                this.autoScrollMove(pointer);
	            }
	        },
	
	        dragStart: function (event) {
	            var dragEvent = new InteractEvent(this, event, 'drag', 'start', this.element);
	
	            this.dragging = true;
	            this.target.fire(dragEvent);
	
	            // reset active dropzones
	            this.activeDrops.dropzones = [];
	            this.activeDrops.elements  = [];
	            this.activeDrops.rects     = [];
	
	            if (!this.dynamicDrop) {
	                this.setActiveDrops(this.element);
	            }
	
	            var dropEvents = this.getDropEvents(event, dragEvent);
	
	            if (dropEvents.activate) {
	                this.fireActiveDrops(dropEvents.activate);
	            }
	
	            return dragEvent;
	        },
	
	        dragMove: function (event) {
	            var target = this.target,
	                dragEvent  = new InteractEvent(this, event, 'drag', 'move', this.element),
	                draggableElement = this.element,
	                drop = this.getDrop(dragEvent, event, draggableElement);
	
	            this.dropTarget = drop.dropzone;
	            this.dropElement = drop.element;
	
	            var dropEvents = this.getDropEvents(event, dragEvent);
	
	            target.fire(dragEvent);
	
	            if (dropEvents.leave) { this.prevDropTarget.fire(dropEvents.leave); }
	            if (dropEvents.enter) {     this.dropTarget.fire(dropEvents.enter); }
	            if (dropEvents.move ) {     this.dropTarget.fire(dropEvents.move ); }
	
	            this.prevDropTarget  = this.dropTarget;
	            this.prevDropElement = this.dropElement;
	
	            return dragEvent;
	        },
	
	        resizeStart: function (event) {
	            var resizeEvent = new InteractEvent(this, event, 'resize', 'start', this.element);
	
	            if (this.prepared.edges) {
	                var startRect = this.target.getRect(this.element);
	
	                /*
	                 * When using the `resizable.square` or `resizable.preserveAspectRatio` options, resizing from one edge
	                 * will affect another. E.g. with `resizable.square`, resizing to make the right edge larger will make
	                 * the bottom edge larger by the same amount. We call these 'linked' edges. Any linked edges will depend
	                 * on the active edges and the edge being interacted with.
	                 */
	                if (this.target.options.resize.square || this.target.options.resize.preserveAspectRatio) {
	                    var linkedEdges = extend({}, this.prepared.edges);
	
	                    linkedEdges.top    = linkedEdges.top    || (linkedEdges.left   && !linkedEdges.bottom);
	                    linkedEdges.left   = linkedEdges.left   || (linkedEdges.top    && !linkedEdges.right );
	                    linkedEdges.bottom = linkedEdges.bottom || (linkedEdges.right  && !linkedEdges.top   );
	                    linkedEdges.right  = linkedEdges.right  || (linkedEdges.bottom && !linkedEdges.left  );
	
	                    this.prepared._linkedEdges = linkedEdges;
	                }
	                else {
	                    this.prepared._linkedEdges = null;
	                }
	
	                // if using `resizable.preserveAspectRatio` option, record aspect ratio at the start of the resize
	                if (this.target.options.resize.preserveAspectRatio) {
	                    this.resizeStartAspectRatio = startRect.width / startRect.height;
	                }
	
	                this.resizeRects = {
	                    start     : startRect,
	                    current   : extend({}, startRect),
	                    restricted: extend({}, startRect),
	                    previous  : extend({}, startRect),
	                    delta     : {
	                        left: 0, right : 0, width : 0,
	                        top : 0, bottom: 0, height: 0
	                    }
	                };
	
	                resizeEvent.rect = this.resizeRects.restricted;
	                resizeEvent.deltaRect = this.resizeRects.delta;
	            }
	
	            this.target.fire(resizeEvent);
	
	            this.resizing = true;
	
	            return resizeEvent;
	        },
	
	        resizeMove: function (event) {
	            var resizeEvent = new InteractEvent(this, event, 'resize', 'move', this.element);
	
	            var edges = this.prepared.edges,
	                invert = this.target.options.resize.invert,
	                invertible = invert === 'reposition' || invert === 'negate';
	
	            if (edges) {
	                var dx = resizeEvent.dx,
	                    dy = resizeEvent.dy,
	
	                    start      = this.resizeRects.start,
	                    current    = this.resizeRects.current,
	                    restricted = this.resizeRects.restricted,
	                    delta      = this.resizeRects.delta,
	                    previous   = extend(this.resizeRects.previous, restricted),
	
	                    originalEdges = edges;
	
	                // `resize.preserveAspectRatio` takes precedence over `resize.square`
	                if (this.target.options.resize.preserveAspectRatio) {
	                    var resizeStartAspectRatio = this.resizeStartAspectRatio;
	
	                    edges = this.prepared._linkedEdges;
	
	                    if ((originalEdges.left && originalEdges.bottom)
	                        || (originalEdges.right && originalEdges.top)) {
	                        dy = -dx / resizeStartAspectRatio;
	                    }
	                    else if (originalEdges.left || originalEdges.right) { dy = dx / resizeStartAspectRatio; }
	                    else if (originalEdges.top || originalEdges.bottom) { dx = dy * resizeStartAspectRatio; }
	                }
	                else if (this.target.options.resize.square) {
	                    edges = this.prepared._linkedEdges;
	
	                    if ((originalEdges.left && originalEdges.bottom)
	                        || (originalEdges.right && originalEdges.top)) {
	                        dy = -dx;
	                    }
	                    else if (originalEdges.left || originalEdges.right) { dy = dx; }
	                    else if (originalEdges.top || originalEdges.bottom) { dx = dy; }
	                }
	
	                // update the 'current' rect without modifications
	                if (edges.top   ) { current.top    += dy; }
	                if (edges.bottom) { current.bottom += dy; }
	                if (edges.left  ) { current.left   += dx; }
	                if (edges.right ) { current.right  += dx; }
	
	                if (invertible) {
	                    // if invertible, copy the current rect
	                    extend(restricted, current);
	
	                    if (invert === 'reposition') {
	                        // swap edge values if necessary to keep width/height positive
	                        var swap;
	
	                        if (restricted.top > restricted.bottom) {
	                            swap = restricted.top;
	
	                            restricted.top = restricted.bottom;
	                            restricted.bottom = swap;
	                        }
	                        if (restricted.left > restricted.right) {
	                            swap = restricted.left;
	
	                            restricted.left = restricted.right;
	                            restricted.right = swap;
	                        }
	                    }
	                }
	                else {
	                    // if not invertible, restrict to minimum of 0x0 rect
	                    restricted.top    = Math.min(current.top, start.bottom);
	                    restricted.bottom = Math.max(current.bottom, start.top);
	                    restricted.left   = Math.min(current.left, start.right);
	                    restricted.right  = Math.max(current.right, start.left);
	                }
	
	                restricted.width  = restricted.right  - restricted.left;
	                restricted.height = restricted.bottom - restricted.top ;
	
	                for (var edge in restricted) {
	                    delta[edge] = restricted[edge] - previous[edge];
	                }
	
	                resizeEvent.edges = this.prepared.edges;
	                resizeEvent.rect = restricted;
	                resizeEvent.deltaRect = delta;
	            }
	
	            this.target.fire(resizeEvent);
	
	            return resizeEvent;
	        },
	
	        gestureStart: function (event) {
	            var gestureEvent = new InteractEvent(this, event, 'gesture', 'start', this.element);
	
	            gestureEvent.ds = 0;
	
	            this.gesture.startDistance = this.gesture.prevDistance = gestureEvent.distance;
	            this.gesture.startAngle = this.gesture.prevAngle = gestureEvent.angle;
	            this.gesture.scale = 1;
	
	            this.gesturing = true;
	
	            this.target.fire(gestureEvent);
	
	            return gestureEvent;
	        },
	
	        gestureMove: function (event) {
	            if (!this.pointerIds.length) {
	                return this.prevEvent;
	            }
	
	            var gestureEvent;
	
	            gestureEvent = new InteractEvent(this, event, 'gesture', 'move', this.element);
	            gestureEvent.ds = gestureEvent.scale - this.gesture.scale;
	
	            this.target.fire(gestureEvent);
	
	            this.gesture.prevAngle = gestureEvent.angle;
	            this.gesture.prevDistance = gestureEvent.distance;
	
	            if (gestureEvent.scale !== Infinity &&
	                gestureEvent.scale !== null &&
	                gestureEvent.scale !== undefined  &&
	                !isNaN(gestureEvent.scale)) {
	
	                this.gesture.scale = gestureEvent.scale;
	            }
	
	            return gestureEvent;
	        },
	
	        pointerHold: function (pointer, event, eventTarget) {
	            this.collectEventTargets(pointer, event, eventTarget, 'hold');
	        },
	
	        pointerUp: function (pointer, event, eventTarget, curEventTarget) {
	            var pointerIndex = this.mouse? 0 : indexOf(this.pointerIds, getPointerId(pointer));
	
	            clearTimeout(this.holdTimers[pointerIndex]);
	
	            this.collectEventTargets(pointer, event, eventTarget, 'up' );
	            this.collectEventTargets(pointer, event, eventTarget, 'tap');
	
	            this.pointerEnd(pointer, event, eventTarget, curEventTarget);
	
	            this.removePointer(pointer);
	        },
	
	        pointerCancel: function (pointer, event, eventTarget, curEventTarget) {
	            var pointerIndex = this.mouse? 0 : indexOf(this.pointerIds, getPointerId(pointer));
	
	            clearTimeout(this.holdTimers[pointerIndex]);
	
	            this.collectEventTargets(pointer, event, eventTarget, 'cancel');
	            this.pointerEnd(pointer, event, eventTarget, curEventTarget);
	
	            this.removePointer(pointer);
	        },
	
	        // http://www.quirksmode.org/dom/events/click.html
	        // >Events leading to dblclick
	        //
	        // IE8 doesn't fire down event before dblclick.
	        // This workaround tries to fire a tap and doubletap after dblclick
	        ie8Dblclick: function (pointer, event, eventTarget) {
	            if (this.prevTap
	                && event.clientX === this.prevTap.clientX
	                && event.clientY === this.prevTap.clientY
	                && eventTarget   === this.prevTap.target) {
	
	                this.downTargets[0] = eventTarget;
	                this.downTimes[0] = new Date().getTime();
	                this.collectEventTargets(pointer, event, eventTarget, 'tap');
	            }
	        },
	
	        // End interact move events and stop auto-scroll unless inertia is enabled
	        pointerEnd: function (pointer, event, eventTarget, curEventTarget) {
	            var endEvent,
	                target = this.target,
	                options = target && target.options,
	                inertiaOptions = options && this.prepared.name && options[this.prepared.name].inertia,
	                inertiaStatus = this.inertiaStatus;
	
	            if (this.interacting()) {
	
	                if (inertiaStatus.active && !inertiaStatus.ending) { return; }
	
	                var pointerSpeed,
	                    now = new Date().getTime(),
	                    inertiaPossible = false,
	                    inertia = false,
	                    smoothEnd = false,
	                    endSnap = checkSnap(target, this.prepared.name) && options[this.prepared.name].snap.endOnly,
	                    endRestrict = checkRestrict(target, this.prepared.name) && options[this.prepared.name].restrict.endOnly,
	                    dx = 0,
	                    dy = 0,
	                    startEvent;
	
	                if (this.dragging) {
	                    if      (options.drag.axis === 'x' ) { pointerSpeed = Math.abs(this.pointerDelta.client.vx); }
	                    else if (options.drag.axis === 'y' ) { pointerSpeed = Math.abs(this.pointerDelta.client.vy); }
	                    else   /*options.drag.axis === 'xy'*/{ pointerSpeed = this.pointerDelta.client.speed; }
	                }
	                else {
	                    pointerSpeed = this.pointerDelta.client.speed;
	                }
	
	                // check if inertia should be started
	                inertiaPossible = (inertiaOptions && inertiaOptions.enabled
	                                   && this.prepared.name !== 'gesture'
	                                   && event !== inertiaStatus.startEvent);
	
	                inertia = (inertiaPossible
	                           && (now - this.curCoords.timeStamp) < 50
	                           && pointerSpeed > inertiaOptions.minSpeed
	                           && pointerSpeed > inertiaOptions.endSpeed);
	
	                if (inertiaPossible && !inertia && (endSnap || endRestrict)) {
	
	                    var snapRestrict = {};
	
	                    snapRestrict.snap = snapRestrict.restrict = snapRestrict;
	
	                    if (endSnap) {
	                        this.setSnapping(this.curCoords.page, snapRestrict);
	                        if (snapRestrict.locked) {
	                            dx += snapRestrict.dx;
	                            dy += snapRestrict.dy;
	                        }
	                    }
	
	                    if (endRestrict) {
	                        this.setRestriction(this.curCoords.page, snapRestrict);
	                        if (snapRestrict.restricted) {
	                            dx += snapRestrict.dx;
	                            dy += snapRestrict.dy;
	                        }
	                    }
	
	                    if (dx || dy) {
	                        smoothEnd = true;
	                    }
	                }
	
	                if (inertia || smoothEnd) {
	                    copyCoords(inertiaStatus.upCoords, this.curCoords);
	
	                    this.pointers[0] = inertiaStatus.startEvent = startEvent =
	                        new InteractEvent(this, event, this.prepared.name, 'inertiastart', this.element);
	
	                    inertiaStatus.t0 = now;
	
	                    target.fire(inertiaStatus.startEvent);
	
	                    if (inertia) {
	                        inertiaStatus.vx0 = this.pointerDelta.client.vx;
	                        inertiaStatus.vy0 = this.pointerDelta.client.vy;
	                        inertiaStatus.v0 = pointerSpeed;
	
	                        this.calcInertia(inertiaStatus);
	
	                        var page = extend({}, this.curCoords.page),
	                            origin = getOriginXY(target, this.element),
	                            statusObject;
	
	                        page.x = page.x + inertiaStatus.xe - origin.x;
	                        page.y = page.y + inertiaStatus.ye - origin.y;
	
	                        statusObject = {
	                            useStatusXY: true,
	                            x: page.x,
	                            y: page.y,
	                            dx: 0,
	                            dy: 0,
	                            snap: null
	                        };
	
	                        statusObject.snap = statusObject;
	
	                        dx = dy = 0;
	
	                        if (endSnap) {
	                            var snap = this.setSnapping(this.curCoords.page, statusObject);
	
	                            if (snap.locked) {
	                                dx += snap.dx;
	                                dy += snap.dy;
	                            }
	                        }
	
	                        if (endRestrict) {
	                            var restrict = this.setRestriction(this.curCoords.page, statusObject);
	
	                            if (restrict.restricted) {
	                                dx += restrict.dx;
	                                dy += restrict.dy;
	                            }
	                        }
	
	                        inertiaStatus.modifiedXe += dx;
	                        inertiaStatus.modifiedYe += dy;
	
	                        inertiaStatus.i = reqFrame(this.boundInertiaFrame);
	                    }
	                    else {
	                        inertiaStatus.smoothEnd = true;
	                        inertiaStatus.xe = dx;
	                        inertiaStatus.ye = dy;
	
	                        inertiaStatus.sx = inertiaStatus.sy = 0;
	
	                        inertiaStatus.i = reqFrame(this.boundSmoothEndFrame);
	                    }
	
	                    inertiaStatus.active = true;
	                    return;
	                }
	
	                if (endSnap || endRestrict) {
	                    // fire a move event at the snapped coordinates
	                    this.pointerMove(pointer, event, eventTarget, curEventTarget, true);
	                }
	            }
	
	            if (this.dragging) {
	                endEvent = new InteractEvent(this, event, 'drag', 'end', this.element);
	
	                var draggableElement = this.element,
	                    drop = this.getDrop(endEvent, event, draggableElement);
	
	                this.dropTarget = drop.dropzone;
	                this.dropElement = drop.element;
	
	                var dropEvents = this.getDropEvents(event, endEvent);
	
	                if (dropEvents.leave) { this.prevDropTarget.fire(dropEvents.leave); }
	                if (dropEvents.enter) {     this.dropTarget.fire(dropEvents.enter); }
	                if (dropEvents.drop ) {     this.dropTarget.fire(dropEvents.drop ); }
	                if (dropEvents.deactivate) {
	                    this.fireActiveDrops(dropEvents.deactivate);
	                }
	
	                target.fire(endEvent);
	            }
	            else if (this.resizing) {
	                endEvent = new InteractEvent(this, event, 'resize', 'end', this.element);
	                target.fire(endEvent);
	            }
	            else if (this.gesturing) {
	                endEvent = new InteractEvent(this, event, 'gesture', 'end', this.element);
	                target.fire(endEvent);
	            }
	
	            this.stop(event);
	        },
	
	        collectDrops: function (element) {
	            var drops = [],
	                elements = [],
	                i;
	
	            element = element || this.element;
	
	            // collect all dropzones and their elements which qualify for a drop
	            for (i = 0; i < interactables.length; i++) {
	                if (!interactables[i].options.drop.enabled) { continue; }
	
	                var current = interactables[i],
	                    accept = current.options.drop.accept;
	
	                // test the draggable element against the dropzone's accept setting
	                if ((isElement(accept) && accept !== element)
	                    || (isString(accept)
	                        && !matchesSelector(element, accept))) {
	
	                    continue;
	                }
	
	                // query for new elements if necessary
	                var dropElements = current.selector? current._context.querySelectorAll(current.selector) : [current._element];
	
	                for (var j = 0, len = dropElements.length; j < len; j++) {
	                    var currentElement = dropElements[j];
	
	                    if (currentElement === element) {
	                        continue;
	                    }
	
	                    drops.push(current);
	                    elements.push(currentElement);
	                }
	            }
	
	            return {
	                dropzones: drops,
	                elements: elements
	            };
	        },
	
	        fireActiveDrops: function (event) {
	            var i,
	                current,
	                currentElement,
	                prevElement;
	
	            // loop through all active dropzones and trigger event
	            for (i = 0; i < this.activeDrops.dropzones.length; i++) {
	                current = this.activeDrops.dropzones[i];
	                currentElement = this.activeDrops.elements [i];
	
	                // prevent trigger of duplicate events on same element
	                if (currentElement !== prevElement) {
	                    // set current element as event target
	                    event.target = currentElement;
	                    current.fire(event);
	                }
	                prevElement = currentElement;
	            }
	        },
	
	        // Collect a new set of possible drops and save them in activeDrops.
	        // setActiveDrops should always be called when a drag has just started or a
	        // drag event happens while dynamicDrop is true
	        setActiveDrops: function (dragElement) {
	            // get dropzones and their elements that could receive the draggable
	            var possibleDrops = this.collectDrops(dragElement, true);
	
	            this.activeDrops.dropzones = possibleDrops.dropzones;
	            this.activeDrops.elements  = possibleDrops.elements;
	            this.activeDrops.rects     = [];
	
	            for (var i = 0; i < this.activeDrops.dropzones.length; i++) {
	                this.activeDrops.rects[i] = this.activeDrops.dropzones[i].getRect(this.activeDrops.elements[i]);
	            }
	        },
	
	        getDrop: function (dragEvent, event, dragElement) {
	            var validDrops = [];
	
	            if (dynamicDrop) {
	                this.setActiveDrops(dragElement);
	            }
	
	            // collect all dropzones and their elements which qualify for a drop
	            for (var j = 0; j < this.activeDrops.dropzones.length; j++) {
	                var current        = this.activeDrops.dropzones[j],
	                    currentElement = this.activeDrops.elements [j],
	                    rect           = this.activeDrops.rects    [j];
	
	                validDrops.push(current.dropCheck(dragEvent, event, this.target, dragElement, currentElement, rect)
	                                ? currentElement
	                                : null);
	            }
	
	            // get the most appropriate dropzone based on DOM depth and order
	            var dropIndex = indexOfDeepestElement(validDrops),
	                dropzone  = this.activeDrops.dropzones[dropIndex] || null,
	                element   = this.activeDrops.elements [dropIndex] || null;
	
	            return {
	                dropzone: dropzone,
	                element: element
	            };
	        },
	
	        getDropEvents: function (pointerEvent, dragEvent) {
	            var dropEvents = {
	                enter     : null,
	                leave     : null,
	                activate  : null,
	                deactivate: null,
	                move      : null,
	                drop      : null
	            };
	
	            if (this.dropElement !== this.prevDropElement) {
	                // if there was a prevDropTarget, create a dragleave event
	                if (this.prevDropTarget) {
	                    dropEvents.leave = {
	                        target       : this.prevDropElement,
	                        dropzone     : this.prevDropTarget,
	                        relatedTarget: dragEvent.target,
	                        draggable    : dragEvent.interactable,
	                        dragEvent    : dragEvent,
	                        interaction  : this,
	                        timeStamp    : dragEvent.timeStamp,
	                        type         : 'dragleave'
	                    };
	
	                    dragEvent.dragLeave = this.prevDropElement;
	                    dragEvent.prevDropzone = this.prevDropTarget;
	                }
	                // if the dropTarget is not null, create a dragenter event
	                if (this.dropTarget) {
	                    dropEvents.enter = {
	                        target       : this.dropElement,
	                        dropzone     : this.dropTarget,
	                        relatedTarget: dragEvent.target,
	                        draggable    : dragEvent.interactable,
	                        dragEvent    : dragEvent,
	                        interaction  : this,
	                        timeStamp    : dragEvent.timeStamp,
	                        type         : 'dragenter'
	                    };
	
	                    dragEvent.dragEnter = this.dropElement;
	                    dragEvent.dropzone = this.dropTarget;
	                }
	            }
	
	            if (dragEvent.type === 'dragend' && this.dropTarget) {
	                dropEvents.drop = {
	                    target       : this.dropElement,
	                    dropzone     : this.dropTarget,
	                    relatedTarget: dragEvent.target,
	                    draggable    : dragEvent.interactable,
	                    dragEvent    : dragEvent,
	                    interaction  : this,
	                    timeStamp    : dragEvent.timeStamp,
	                    type         : 'drop'
	                };
	
	                dragEvent.dropzone = this.dropTarget;
	            }
	            if (dragEvent.type === 'dragstart') {
	                dropEvents.activate = {
	                    target       : null,
	                    dropzone     : null,
	                    relatedTarget: dragEvent.target,
	                    draggable    : dragEvent.interactable,
	                    dragEvent    : dragEvent,
	                    interaction  : this,
	                    timeStamp    : dragEvent.timeStamp,
	                    type         : 'dropactivate'
	                };
	            }
	            if (dragEvent.type === 'dragend') {
	                dropEvents.deactivate = {
	                    target       : null,
	                    dropzone     : null,
	                    relatedTarget: dragEvent.target,
	                    draggable    : dragEvent.interactable,
	                    dragEvent    : dragEvent,
	                    interaction  : this,
	                    timeStamp    : dragEvent.timeStamp,
	                    type         : 'dropdeactivate'
	                };
	            }
	            if (dragEvent.type === 'dragmove' && this.dropTarget) {
	                dropEvents.move = {
	                    target       : this.dropElement,
	                    dropzone     : this.dropTarget,
	                    relatedTarget: dragEvent.target,
	                    draggable    : dragEvent.interactable,
	                    dragEvent    : dragEvent,
	                    interaction  : this,
	                    dragmove     : dragEvent,
	                    timeStamp    : dragEvent.timeStamp,
	                    type         : 'dropmove'
	                };
	                dragEvent.dropzone = this.dropTarget;
	            }
	
	            return dropEvents;
	        },
	
	        currentAction: function () {
	            return (this.dragging && 'drag') || (this.resizing && 'resize') || (this.gesturing && 'gesture') || null;
	        },
	
	        interacting: function () {
	            return this.dragging || this.resizing || this.gesturing;
	        },
	
	        clearTargets: function () {
	            this.target = this.element = null;
	
	            this.dropTarget = this.dropElement = this.prevDropTarget = this.prevDropElement = null;
	        },
	
	        stop: function (event) {
	            if (this.interacting()) {
	                autoScroll.stop();
	                this.matches = [];
	                this.matchElements = [];
	
	                var target = this.target;
	
	                if (target.options.styleCursor) {
	                    target._doc.documentElement.style.cursor = '';
	                }
	
	                // prevent Default only if were previously interacting
	                if (event && isFunction(event.preventDefault)) {
	                    this.checkAndPreventDefault(event, target, this.element);
	                }
	
	                if (this.dragging) {
	                    this.activeDrops.dropzones = this.activeDrops.elements = this.activeDrops.rects = null;
	                }
	            }
	
	            this.clearTargets();
	
	            this.pointerIsDown = this.snapStatus.locked = this.dragging = this.resizing = this.gesturing = false;
	            this.prepared.name = this.prevEvent = null;
	            this.inertiaStatus.resumeDx = this.inertiaStatus.resumeDy = 0;
	
	            // remove pointers if their ID isn't in this.pointerIds
	            for (var i = 0; i < this.pointers.length; i++) {
	                if (indexOf(this.pointerIds, getPointerId(this.pointers[i])) === -1) {
	                    this.pointers.splice(i, 1);
	                }
	            }
	        },
	
	        inertiaFrame: function () {
	            var inertiaStatus = this.inertiaStatus,
	                options = this.target.options[this.prepared.name].inertia,
	                lambda = options.resistance,
	                t = new Date().getTime() / 1000 - inertiaStatus.t0;
	
	            if (t < inertiaStatus.te) {
	
	                var progress =  1 - (Math.exp(-lambda * t) - inertiaStatus.lambda_v0) / inertiaStatus.one_ve_v0;
	
	                if (inertiaStatus.modifiedXe === inertiaStatus.xe && inertiaStatus.modifiedYe === inertiaStatus.ye) {
	                    inertiaStatus.sx = inertiaStatus.xe * progress;
	                    inertiaStatus.sy = inertiaStatus.ye * progress;
	                }
	                else {
	                    var quadPoint = getQuadraticCurvePoint(
	                            0, 0,
	                            inertiaStatus.xe, inertiaStatus.ye,
	                            inertiaStatus.modifiedXe, inertiaStatus.modifiedYe,
	                            progress);
	
	                    inertiaStatus.sx = quadPoint.x;
	                    inertiaStatus.sy = quadPoint.y;
	                }
	
	                this.pointerMove(inertiaStatus.startEvent, inertiaStatus.startEvent);
	
	                inertiaStatus.i = reqFrame(this.boundInertiaFrame);
	            }
	            else {
	                inertiaStatus.ending = true;
	
	                inertiaStatus.sx = inertiaStatus.modifiedXe;
	                inertiaStatus.sy = inertiaStatus.modifiedYe;
	
	                this.pointerMove(inertiaStatus.startEvent, inertiaStatus.startEvent);
	                this.pointerEnd(inertiaStatus.startEvent, inertiaStatus.startEvent);
	
	                inertiaStatus.active = inertiaStatus.ending = false;
	            }
	        },
	
	        smoothEndFrame: function () {
	            var inertiaStatus = this.inertiaStatus,
	                t = new Date().getTime() - inertiaStatus.t0,
	                duration = this.target.options[this.prepared.name].inertia.smoothEndDuration;
	
	            if (t < duration) {
	                inertiaStatus.sx = easeOutQuad(t, 0, inertiaStatus.xe, duration);
	                inertiaStatus.sy = easeOutQuad(t, 0, inertiaStatus.ye, duration);
	
	                this.pointerMove(inertiaStatus.startEvent, inertiaStatus.startEvent);
	
	                inertiaStatus.i = reqFrame(this.boundSmoothEndFrame);
	            }
	            else {
	                inertiaStatus.ending = true;
	
	                inertiaStatus.sx = inertiaStatus.xe;
	                inertiaStatus.sy = inertiaStatus.ye;
	
	                this.pointerMove(inertiaStatus.startEvent, inertiaStatus.startEvent);
	                this.pointerEnd(inertiaStatus.startEvent, inertiaStatus.startEvent);
	
	                inertiaStatus.smoothEnd =
	                  inertiaStatus.active = inertiaStatus.ending = false;
	            }
	        },
	
	        addPointer: function (pointer) {
	            var id = getPointerId(pointer),
	                index = this.mouse? 0 : indexOf(this.pointerIds, id);
	
	            if (index === -1) {
	                index = this.pointerIds.length;
	            }
	
	            this.pointerIds[index] = id;
	            this.pointers[index] = pointer;
	
	            return index;
	        },
	
	        removePointer: function (pointer) {
	            var id = getPointerId(pointer),
	                index = this.mouse? 0 : indexOf(this.pointerIds, id);
	
	            if (index === -1) { return; }
	
	            this.pointers   .splice(index, 1);
	            this.pointerIds .splice(index, 1);
	            this.downTargets.splice(index, 1);
	            this.downTimes  .splice(index, 1);
	            this.holdTimers .splice(index, 1);
	        },
	
	        recordPointer: function (pointer) {
	            var index = this.mouse? 0: indexOf(this.pointerIds, getPointerId(pointer));
	
	            if (index === -1) { return; }
	
	            this.pointers[index] = pointer;
	        },
	
	        collectEventTargets: function (pointer, event, eventTarget, eventType) {
	            var pointerIndex = this.mouse? 0 : indexOf(this.pointerIds, getPointerId(pointer));
	
	            // do not fire a tap event if the pointer was moved before being lifted
	            if (eventType === 'tap' && (this.pointerWasMoved
	                // or if the pointerup target is different to the pointerdown target
	                || !(this.downTargets[pointerIndex] && this.downTargets[pointerIndex] === eventTarget))) {
	                return;
	            }
	
	            var targets = [],
	                elements = [],
	                element = eventTarget;
	
	            function collectSelectors (interactable, selector, context) {
	                var els = ie8MatchesSelector
	                        ? context.querySelectorAll(selector)
	                        : undefined;
	
	                if (interactable._iEvents[eventType]
	                    && isElement(element)
	                    && inContext(interactable, element)
	                    && !testIgnore(interactable, element, eventTarget)
	                    && testAllow(interactable, element, eventTarget)
	                    && matchesSelector(element, selector, els)) {
	
	                    targets.push(interactable);
	                    elements.push(element);
	                }
	            }
	
	            while (element) {
	                if (interact.isSet(element) && interact(element)._iEvents[eventType]) {
	                    targets.push(interact(element));
	                    elements.push(element);
	                }
	
	                interactables.forEachSelector(collectSelectors);
	
	                element = parentElement(element);
	            }
	
	            // create the tap event even if there are no listeners so that
	            // doubletap can still be created and fired
	            if (targets.length || eventType === 'tap') {
	                this.firePointers(pointer, event, eventTarget, targets, elements, eventType);
	            }
	        },
	
	        firePointers: function (pointer, event, eventTarget, targets, elements, eventType) {
	            var pointerIndex = this.mouse? 0 : indexOf(this.pointerIds, getPointerId(pointer)),
	                pointerEvent = {},
	                i,
	                // for tap events
	                interval, createNewDoubleTap;
	
	            // if it's a doubletap then the event properties would have been
	            // copied from the tap event and provided as the pointer argument
	            if (eventType === 'doubletap') {
	                pointerEvent = pointer;
	            }
	            else {
	                pointerExtend(pointerEvent, event);
	                if (event !== pointer) {
	                    pointerExtend(pointerEvent, pointer);
	                }
	
	                pointerEvent.preventDefault           = preventOriginalDefault;
	                pointerEvent.stopPropagation          = InteractEvent.prototype.stopPropagation;
	                pointerEvent.stopImmediatePropagation = InteractEvent.prototype.stopImmediatePropagation;
	                pointerEvent.interaction              = this;
	
	                pointerEvent.timeStamp       = new Date().getTime();
	                pointerEvent.originalEvent   = event;
	                pointerEvent.originalPointer = pointer;
	                pointerEvent.type            = eventType;
	                pointerEvent.pointerId       = getPointerId(pointer);
	                pointerEvent.pointerType     = this.mouse? 'mouse' : !supportsPointerEvent? 'touch'
	                                                    : isString(pointer.pointerType)
	                                                        ? pointer.pointerType
	                                                        : [,,'touch', 'pen', 'mouse'][pointer.pointerType];
	            }
	
	            if (eventType === 'tap') {
	                pointerEvent.dt = pointerEvent.timeStamp - this.downTimes[pointerIndex];
	
	                interval = pointerEvent.timeStamp - this.tapTime;
	                createNewDoubleTap = !!(this.prevTap && this.prevTap.type !== 'doubletap'
	                       && this.prevTap.target === pointerEvent.target
	                       && interval < 500);
	
	                pointerEvent.double = createNewDoubleTap;
	
	                this.tapTime = pointerEvent.timeStamp;
	            }
	
	            for (i = 0; i < targets.length; i++) {
	                pointerEvent.currentTarget = elements[i];
	                pointerEvent.interactable = targets[i];
	                targets[i].fire(pointerEvent);
	
	                if (pointerEvent.immediatePropagationStopped
	                    ||(pointerEvent.propagationStopped && elements[i + 1] !== pointerEvent.currentTarget)) {
	                    break;
	                }
	            }
	
	            if (createNewDoubleTap) {
	                var doubleTap = {};
	
	                extend(doubleTap, pointerEvent);
	
	                doubleTap.dt   = interval;
	                doubleTap.type = 'doubletap';
	
	                this.collectEventTargets(doubleTap, event, eventTarget, 'doubletap');
	
	                this.prevTap = doubleTap;
	            }
	            else if (eventType === 'tap') {
	                this.prevTap = pointerEvent;
	            }
	        },
	
	        validateSelector: function (pointer, event, matches, matchElements) {
	            for (var i = 0, len = matches.length; i < len; i++) {
	                var match = matches[i],
	                    matchElement = matchElements[i],
	                    action = validateAction(match.getAction(pointer, event, this, matchElement), match);
	
	                if (action && withinInteractionLimit(match, matchElement, action)) {
	                    this.target = match;
	                    this.element = matchElement;
	
	                    return action;
	                }
	            }
	        },
	
	        setSnapping: function (pageCoords, status) {
	            var snap = this.target.options[this.prepared.name].snap,
	                targets = [],
	                target,
	                page,
	                i;
	
	            status = status || this.snapStatus;
	
	            if (status.useStatusXY) {
	                page = { x: status.x, y: status.y };
	            }
	            else {
	                var origin = getOriginXY(this.target, this.element);
	
	                page = extend({}, pageCoords);
	
	                page.x -= origin.x;
	                page.y -= origin.y;
	            }
	
	            status.realX = page.x;
	            status.realY = page.y;
	
	            page.x = page.x - this.inertiaStatus.resumeDx;
	            page.y = page.y - this.inertiaStatus.resumeDy;
	
	            var len = snap.targets? snap.targets.length : 0;
	
	            for (var relIndex = 0; relIndex < this.snapOffsets.length; relIndex++) {
	                var relative = {
	                    x: page.x - this.snapOffsets[relIndex].x,
	                    y: page.y - this.snapOffsets[relIndex].y
	                };
	
	                for (i = 0; i < len; i++) {
	                    if (isFunction(snap.targets[i])) {
	                        target = snap.targets[i](relative.x, relative.y, this);
	                    }
	                    else {
	                        target = snap.targets[i];
	                    }
	
	                    if (!target) { continue; }
	
	                    targets.push({
	                        x: isNumber(target.x) ? (target.x + this.snapOffsets[relIndex].x) : relative.x,
	                        y: isNumber(target.y) ? (target.y + this.snapOffsets[relIndex].y) : relative.y,
	
	                        range: isNumber(target.range)? target.range: snap.range
	                    });
	                }
	            }
	
	            var closest = {
	                    target: null,
	                    inRange: false,
	                    distance: 0,
	                    range: 0,
	                    dx: 0,
	                    dy: 0
	                };
	
	            for (i = 0, len = targets.length; i < len; i++) {
	                target = targets[i];
	
	                var range = target.range,
	                    dx = target.x - page.x,
	                    dy = target.y - page.y,
	                    distance = hypot(dx, dy),
	                    inRange = distance <= range;
	
	                // Infinite targets count as being out of range
	                // compared to non infinite ones that are in range
	                if (range === Infinity && closest.inRange && closest.range !== Infinity) {
	                    inRange = false;
	                }
	
	                if (!closest.target || (inRange
	                    // is the closest target in range?
	                    ? (closest.inRange && range !== Infinity
	                        // the pointer is relatively deeper in this target
	                        ? distance / range < closest.distance / closest.range
	                        // this target has Infinite range and the closest doesn't
	                        : (range === Infinity && closest.range !== Infinity)
	                            // OR this target is closer that the previous closest
	                            || distance < closest.distance)
	                    // The other is not in range and the pointer is closer to this target
	                    : (!closest.inRange && distance < closest.distance))) {
	
	                    if (range === Infinity) {
	                        inRange = true;
	                    }
	
	                    closest.target = target;
	                    closest.distance = distance;
	                    closest.range = range;
	                    closest.inRange = inRange;
	                    closest.dx = dx;
	                    closest.dy = dy;
	
	                    status.range = range;
	                }
	            }
	
	            var snapChanged;
	
	            if (closest.target) {
	                snapChanged = (status.snappedX !== closest.target.x || status.snappedY !== closest.target.y);
	
	                status.snappedX = closest.target.x;
	                status.snappedY = closest.target.y;
	            }
	            else {
	                snapChanged = true;
	
	                status.snappedX = NaN;
	                status.snappedY = NaN;
	            }
	
	            status.dx = closest.dx;
	            status.dy = closest.dy;
	
	            status.changed = (snapChanged || (closest.inRange && !status.locked));
	            status.locked = closest.inRange;
	
	            return status;
	        },
	
	        setRestriction: function (pageCoords, status) {
	            var target = this.target,
	                restrict = target && target.options[this.prepared.name].restrict,
	                restriction = restrict && restrict.restriction,
	                page;
	
	            if (!restriction) {
	                return status;
	            }
	
	            status = status || this.restrictStatus;
	
	            page = status.useStatusXY
	                    ? page = { x: status.x, y: status.y }
	                    : page = extend({}, pageCoords);
	
	            if (status.snap && status.snap.locked) {
	                page.x += status.snap.dx || 0;
	                page.y += status.snap.dy || 0;
	            }
	
	            page.x -= this.inertiaStatus.resumeDx;
	            page.y -= this.inertiaStatus.resumeDy;
	
	            status.dx = 0;
	            status.dy = 0;
	            status.restricted = false;
	
	            var rect, restrictedX, restrictedY;
	
	            if (isString(restriction)) {
	                if (restriction === 'parent') {
	                    restriction = parentElement(this.element);
	                }
	                else if (restriction === 'self') {
	                    restriction = target.getRect(this.element);
	                }
	                else {
	                    restriction = closest(this.element, restriction);
	                }
	
	                if (!restriction) { return status; }
	            }
	
	            if (isFunction(restriction)) {
	                restriction = restriction(page.x, page.y, this.element);
	            }
	
	            if (isElement(restriction)) {
	                restriction = getElementRect(restriction);
	            }
	
	            rect = restriction;
	
	            if (!restriction) {
	                restrictedX = page.x;
	                restrictedY = page.y;
	            }
	            // object is assumed to have
	            // x, y, width, height or
	            // left, top, right, bottom
	            else if ('x' in restriction && 'y' in restriction) {
	                restrictedX = Math.max(Math.min(rect.x + rect.width  - this.restrictOffset.right , page.x), rect.x + this.restrictOffset.left);
	                restrictedY = Math.max(Math.min(rect.y + rect.height - this.restrictOffset.bottom, page.y), rect.y + this.restrictOffset.top );
	            }
	            else {
	                restrictedX = Math.max(Math.min(rect.right  - this.restrictOffset.right , page.x), rect.left + this.restrictOffset.left);
	                restrictedY = Math.max(Math.min(rect.bottom - this.restrictOffset.bottom, page.y), rect.top  + this.restrictOffset.top );
	            }
	
	            status.dx = restrictedX - page.x;
	            status.dy = restrictedY - page.y;
	
	            status.changed = status.restrictedX !== restrictedX || status.restrictedY !== restrictedY;
	            status.restricted = !!(status.dx || status.dy);
	
	            status.restrictedX = restrictedX;
	            status.restrictedY = restrictedY;
	
	            return status;
	        },
	
	        checkAndPreventDefault: function (event, interactable, element) {
	            if (!(interactable = interactable || this.target)) { return; }
	
	            var options = interactable.options,
	                prevent = options.preventDefault;
	
	            if (prevent === 'auto' && element && !/^(input|select|textarea)$/i.test(event.target.nodeName)) {
	                // do not preventDefault on pointerdown if the prepared action is a drag
	                // and dragging can only start from a certain direction - this allows
	                // a touch to pan the viewport if a drag isn't in the right direction
	                if (/down|start/i.test(event.type)
	                    && this.prepared.name === 'drag' && options.drag.axis !== 'xy') {
	
	                    return;
	                }
	
	                // with manualStart, only preventDefault while interacting
	                if (options[this.prepared.name] && options[this.prepared.name].manualStart
	                    && !this.interacting()) {
	                    return;
	                }
	
	                event.preventDefault();
	                return;
	            }
	
	            if (prevent === 'always') {
	                event.preventDefault();
	                return;
	            }
	        },
	
	        calcInertia: function (status) {
	            var inertiaOptions = this.target.options[this.prepared.name].inertia,
	                lambda = inertiaOptions.resistance,
	                inertiaDur = -Math.log(inertiaOptions.endSpeed / status.v0) / lambda;
	
	            status.x0 = this.prevEvent.pageX;
	            status.y0 = this.prevEvent.pageY;
	            status.t0 = status.startEvent.timeStamp / 1000;
	            status.sx = status.sy = 0;
	
	            status.modifiedXe = status.xe = (status.vx0 - inertiaDur) / lambda;
	            status.modifiedYe = status.ye = (status.vy0 - inertiaDur) / lambda;
	            status.te = inertiaDur;
	
	            status.lambda_v0 = lambda / status.v0;
	            status.one_ve_v0 = 1 - inertiaOptions.endSpeed / status.v0;
	        },
	
	        autoScrollMove: function (pointer) {
	            if (!(this.interacting()
	                && checkAutoScroll(this.target, this.prepared.name))) {
	                return;
	            }
	
	            if (this.inertiaStatus.active) {
	                autoScroll.x = autoScroll.y = 0;
	                return;
	            }
	
	            var top,
	                right,
	                bottom,
	                left,
	                options = this.target.options[this.prepared.name].autoScroll,
	                container = options.container || getWindow(this.element);
	
	            if (isWindow(container)) {
	                left   = pointer.clientX < autoScroll.margin;
	                top    = pointer.clientY < autoScroll.margin;
	                right  = pointer.clientX > container.innerWidth  - autoScroll.margin;
	                bottom = pointer.clientY > container.innerHeight - autoScroll.margin;
	            }
	            else {
	                var rect = getElementClientRect(container);
	
	                left   = pointer.clientX < rect.left   + autoScroll.margin;
	                top    = pointer.clientY < rect.top    + autoScroll.margin;
	                right  = pointer.clientX > rect.right  - autoScroll.margin;
	                bottom = pointer.clientY > rect.bottom - autoScroll.margin;
	            }
	
	            autoScroll.x = (right ? 1: left? -1: 0);
	            autoScroll.y = (bottom? 1:  top? -1: 0);
	
	            if (!autoScroll.isScrolling) {
	                // set the autoScroll properties to those of the target
	                autoScroll.margin = options.margin;
	                autoScroll.speed  = options.speed;
	
	                autoScroll.start(this);
	            }
	        },
	
	        _updateEventTargets: function (target, currentTarget) {
	            this._eventTarget    = target;
	            this._curEventTarget = currentTarget;
	        }
	
	    };
	
	    function getInteractionFromPointer (pointer, eventType, eventTarget) {
	        var i = 0, len = interactions.length,
	            mouseEvent = (/mouse/i.test(pointer.pointerType || eventType)
	                          // MSPointerEvent.MSPOINTER_TYPE_MOUSE
	                          || pointer.pointerType === 4),
	            interaction;
	
	        var id = getPointerId(pointer);
	
	        // try to resume inertia with a new pointer
	        if (/down|start/i.test(eventType)) {
	            for (i = 0; i < len; i++) {
	                interaction = interactions[i];
	
	                var element = eventTarget;
	
	                if (interaction.inertiaStatus.active && interaction.target.options[interaction.prepared.name].inertia.allowResume
	                    && (interaction.mouse === mouseEvent)) {
	                    while (element) {
	                        // if the element is the interaction element
	                        if (element === interaction.element) {
	                            return interaction;
	                        }
	                        element = parentElement(element);
	                    }
	                }
	            }
	        }
	
	        // if it's a mouse interaction
	        if (mouseEvent || !(supportsTouch || supportsPointerEvent)) {
	
	            // find a mouse interaction that's not in inertia phase
	            for (i = 0; i < len; i++) {
	                if (interactions[i].mouse && !interactions[i].inertiaStatus.active) {
	                    return interactions[i];
	                }
	            }
	
	            // find any interaction specifically for mouse.
	            // if the eventType is a mousedown, and inertia is active
	            // ignore the interaction
	            for (i = 0; i < len; i++) {
	                if (interactions[i].mouse && !(/down/.test(eventType) && interactions[i].inertiaStatus.active)) {
	                    return interaction;
	                }
	            }
	
	            // create a new interaction for mouse
	            interaction = new Interaction();
	            interaction.mouse = true;
	
	            return interaction;
	        }
	
	        // get interaction that has this pointer
	        for (i = 0; i < len; i++) {
	            if (contains(interactions[i].pointerIds, id)) {
	                return interactions[i];
	            }
	        }
	
	        // at this stage, a pointerUp should not return an interaction
	        if (/up|end|out/i.test(eventType)) {
	            return null;
	        }
	
	        // get first idle interaction
	        for (i = 0; i < len; i++) {
	            interaction = interactions[i];
	
	            if ((!interaction.prepared.name || (interaction.target.options.gesture.enabled))
	                && !interaction.interacting()
	                && !(!mouseEvent && interaction.mouse)) {
	
	                return interaction;
	            }
	        }
	
	        return new Interaction();
	    }
	
	    function doOnInteractions (method) {
	        return (function (event) {
	            var interaction,
	                eventTarget = getActualElement(event.path
	                                               ? event.path[0]
	                                               : event.target),
	                curEventTarget = getActualElement(event.currentTarget),
	                i;
	
	            if (supportsTouch && /touch/.test(event.type)) {
	                prevTouchTime = new Date().getTime();
	
	                for (i = 0; i < event.changedTouches.length; i++) {
	                    var pointer = event.changedTouches[i];
	
	                    interaction = getInteractionFromPointer(pointer, event.type, eventTarget);
	
	                    if (!interaction) { continue; }
	
	                    interaction._updateEventTargets(eventTarget, curEventTarget);
	
	                    interaction[method](pointer, event, eventTarget, curEventTarget);
	                }
	            }
	            else {
	                if (!supportsPointerEvent && /mouse/.test(event.type)) {
	                    // ignore mouse events while touch interactions are active
	                    for (i = 0; i < interactions.length; i++) {
	                        if (!interactions[i].mouse && interactions[i].pointerIsDown) {
	                            return;
	                        }
	                    }
	
	                    // try to ignore mouse events that are simulated by the browser
	                    // after a touch event
	                    if (new Date().getTime() - prevTouchTime < 500) {
	                        return;
	                    }
	                }
	
	                interaction = getInteractionFromPointer(event, event.type, eventTarget);
	
	                if (!interaction) { return; }
	
	                interaction._updateEventTargets(eventTarget, curEventTarget);
	
	                interaction[method](event, event, eventTarget, curEventTarget);
	            }
	        });
	    }
	
	    function InteractEvent (interaction, event, action, phase, element, related) {
	        var client,
	            page,
	            target      = interaction.target,
	            snapStatus  = interaction.snapStatus,
	            restrictStatus  = interaction.restrictStatus,
	            pointers    = interaction.pointers,
	            deltaSource = (target && target.options || defaultOptions).deltaSource,
	            sourceX     = deltaSource + 'X',
	            sourceY     = deltaSource + 'Y',
	            options     = target? target.options: defaultOptions,
	            origin      = getOriginXY(target, element),
	            starting    = phase === 'start',
	            ending      = phase === 'end',
	            coords      = starting? interaction.startCoords : interaction.curCoords;
	
	        element = element || interaction.element;
	
	        page   = extend({}, coords.page);
	        client = extend({}, coords.client);
	
	        page.x -= origin.x;
	        page.y -= origin.y;
	
	        client.x -= origin.x;
	        client.y -= origin.y;
	
	        var relativePoints = options[action].snap && options[action].snap.relativePoints ;
	
	        if (checkSnap(target, action) && !(starting && relativePoints && relativePoints.length)) {
	            this.snap = {
	                range  : snapStatus.range,
	                locked : snapStatus.locked,
	                x      : snapStatus.snappedX,
	                y      : snapStatus.snappedY,
	                realX  : snapStatus.realX,
	                realY  : snapStatus.realY,
	                dx     : snapStatus.dx,
	                dy     : snapStatus.dy
	            };
	
	            if (snapStatus.locked) {
	                page.x += snapStatus.dx;
	                page.y += snapStatus.dy;
	                client.x += snapStatus.dx;
	                client.y += snapStatus.dy;
	            }
	        }
	
	        if (checkRestrict(target, action) && !(starting && options[action].restrict.elementRect) && restrictStatus.restricted) {
	            page.x += restrictStatus.dx;
	            page.y += restrictStatus.dy;
	            client.x += restrictStatus.dx;
	            client.y += restrictStatus.dy;
	
	            this.restrict = {
	                dx: restrictStatus.dx,
	                dy: restrictStatus.dy
	            };
	        }
	
	        this.pageX     = page.x;
	        this.pageY     = page.y;
	        this.clientX   = client.x;
	        this.clientY   = client.y;
	
	        this.x0        = interaction.startCoords.page.x - origin.x;
	        this.y0        = interaction.startCoords.page.y - origin.y;
	        this.clientX0  = interaction.startCoords.client.x - origin.x;
	        this.clientY0  = interaction.startCoords.client.y - origin.y;
	        this.ctrlKey   = event.ctrlKey;
	        this.altKey    = event.altKey;
	        this.shiftKey  = event.shiftKey;
	        this.metaKey   = event.metaKey;
	        this.button    = event.button;
	        this.buttons   = event.buttons;
	        this.target    = element;
	        this.t0        = interaction.downTimes[0];
	        this.type      = action + (phase || '');
	
	        this.interaction = interaction;
	        this.interactable = target;
	
	        var inertiaStatus = interaction.inertiaStatus;
	
	        if (inertiaStatus.active) {
	            this.detail = 'inertia';
	        }
	
	        if (related) {
	            this.relatedTarget = related;
	        }
	
	        // end event dx, dy is difference between start and end points
	        if (ending) {
	            if (deltaSource === 'client') {
	                this.dx = client.x - interaction.startCoords.client.x;
	                this.dy = client.y - interaction.startCoords.client.y;
	            }
	            else {
	                this.dx = page.x - interaction.startCoords.page.x;
	                this.dy = page.y - interaction.startCoords.page.y;
	            }
	        }
	        else if (starting) {
	            this.dx = 0;
	            this.dy = 0;
	        }
	        // copy properties from previousmove if starting inertia
	        else if (phase === 'inertiastart') {
	            this.dx = interaction.prevEvent.dx;
	            this.dy = interaction.prevEvent.dy;
	        }
	        else {
	            if (deltaSource === 'client') {
	                this.dx = client.x - interaction.prevEvent.clientX;
	                this.dy = client.y - interaction.prevEvent.clientY;
	            }
	            else {
	                this.dx = page.x - interaction.prevEvent.pageX;
	                this.dy = page.y - interaction.prevEvent.pageY;
	            }
	        }
	        if (interaction.prevEvent && interaction.prevEvent.detail === 'inertia'
	            && !inertiaStatus.active
	            && options[action].inertia && options[action].inertia.zeroResumeDelta) {
	
	            inertiaStatus.resumeDx += this.dx;
	            inertiaStatus.resumeDy += this.dy;
	
	            this.dx = this.dy = 0;
	        }
	
	        if (action === 'resize' && interaction.resizeAxes) {
	            if (options.resize.square) {
	                if (interaction.resizeAxes === 'y') {
	                    this.dx = this.dy;
	                }
	                else {
	                    this.dy = this.dx;
	                }
	                this.axes = 'xy';
	            }
	            else {
	                this.axes = interaction.resizeAxes;
	
	                if (interaction.resizeAxes === 'x') {
	                    this.dy = 0;
	                }
	                else if (interaction.resizeAxes === 'y') {
	                    this.dx = 0;
	                }
	            }
	        }
	        else if (action === 'gesture') {
	            this.touches = [pointers[0], pointers[1]];
	
	            if (starting) {
	                this.distance = touchDistance(pointers, deltaSource);
	                this.box      = touchBBox(pointers);
	                this.scale    = 1;
	                this.ds       = 0;
	                this.angle    = touchAngle(pointers, undefined, deltaSource);
	                this.da       = 0;
	            }
	            else if (ending || event instanceof InteractEvent) {
	                this.distance = interaction.prevEvent.distance;
	                this.box      = interaction.prevEvent.box;
	                this.scale    = interaction.prevEvent.scale;
	                this.ds       = this.scale - 1;
	                this.angle    = interaction.prevEvent.angle;
	                this.da       = this.angle - interaction.gesture.startAngle;
	            }
	            else {
	                this.distance = touchDistance(pointers, deltaSource);
	                this.box      = touchBBox(pointers);
	                this.scale    = this.distance / interaction.gesture.startDistance;
	                this.angle    = touchAngle(pointers, interaction.gesture.prevAngle, deltaSource);
	
	                this.ds = this.scale - interaction.gesture.prevScale;
	                this.da = this.angle - interaction.gesture.prevAngle;
	            }
	        }
	
	        if (starting) {
	            this.timeStamp = interaction.downTimes[0];
	            this.dt        = 0;
	            this.duration  = 0;
	            this.speed     = 0;
	            this.velocityX = 0;
	            this.velocityY = 0;
	        }
	        else if (phase === 'inertiastart') {
	            this.timeStamp = interaction.prevEvent.timeStamp;
	            this.dt        = interaction.prevEvent.dt;
	            this.duration  = interaction.prevEvent.duration;
	            this.speed     = interaction.prevEvent.speed;
	            this.velocityX = interaction.prevEvent.velocityX;
	            this.velocityY = interaction.prevEvent.velocityY;
	        }
	        else {
	            this.timeStamp = new Date().getTime();
	            this.dt        = this.timeStamp - interaction.prevEvent.timeStamp;
	            this.duration  = this.timeStamp - interaction.downTimes[0];
	
	            if (event instanceof InteractEvent) {
	                var dx = this[sourceX] - interaction.prevEvent[sourceX],
	                    dy = this[sourceY] - interaction.prevEvent[sourceY],
	                    dt = this.dt / 1000;
	
	                this.speed = hypot(dx, dy) / dt;
	                this.velocityX = dx / dt;
	                this.velocityY = dy / dt;
	            }
	            // if normal move or end event, use previous user event coords
	            else {
	                // speed and velocity in pixels per second
	                this.speed = interaction.pointerDelta[deltaSource].speed;
	                this.velocityX = interaction.pointerDelta[deltaSource].vx;
	                this.velocityY = interaction.pointerDelta[deltaSource].vy;
	            }
	        }
	
	        if ((ending || phase === 'inertiastart')
	            && interaction.prevEvent.speed > 600 && this.timeStamp - interaction.prevEvent.timeStamp < 150) {
	
	            var angle = 180 * Math.atan2(interaction.prevEvent.velocityY, interaction.prevEvent.velocityX) / Math.PI,
	                overlap = 22.5;
	
	            if (angle < 0) {
	                angle += 360;
	            }
	
	            var left = 135 - overlap <= angle && angle < 225 + overlap,
	                up   = 225 - overlap <= angle && angle < 315 + overlap,
	
	                right = !left && (315 - overlap <= angle || angle <  45 + overlap),
	                down  = !up   &&   45 - overlap <= angle && angle < 135 + overlap;
	
	            this.swipe = {
	                up   : up,
	                down : down,
	                left : left,
	                right: right,
	                angle: angle,
	                speed: interaction.prevEvent.speed,
	                velocity: {
	                    x: interaction.prevEvent.velocityX,
	                    y: interaction.prevEvent.velocityY
	                }
	            };
	        }
	    }
	
	    InteractEvent.prototype = {
	        preventDefault: blank,
	        stopImmediatePropagation: function () {
	            this.immediatePropagationStopped = this.propagationStopped = true;
	        },
	        stopPropagation: function () {
	            this.propagationStopped = true;
	        }
	    };
	
	    function preventOriginalDefault () {
	        this.originalEvent.preventDefault();
	    }
	
	    function getActionCursor (action) {
	        var cursor = '';
	
	        if (action.name === 'drag') {
	            cursor =  actionCursors.drag;
	        }
	        if (action.name === 'resize') {
	            if (action.axis) {
	                cursor =  actionCursors[action.name + action.axis];
	            }
	            else if (action.edges) {
	                var cursorKey = 'resize',
	                    edgeNames = ['top', 'bottom', 'left', 'right'];
	
	                for (var i = 0; i < 4; i++) {
	                    if (action.edges[edgeNames[i]]) {
	                        cursorKey += edgeNames[i];
	                    }
	                }
	
	                cursor = actionCursors[cursorKey];
	            }
	        }
	
	        return cursor;
	    }
	
	    function checkResizeEdge (name, value, page, element, interactableElement, rect, margin) {
	        // false, '', undefined, null
	        if (!value) { return false; }
	
	        // true value, use pointer coords and element rect
	        if (value === true) {
	            // if dimensions are negative, "switch" edges
	            var width = isNumber(rect.width)? rect.width : rect.right - rect.left,
	                height = isNumber(rect.height)? rect.height : rect.bottom - rect.top;
	
	            if (width < 0) {
	                if      (name === 'left' ) { name = 'right'; }
	                else if (name === 'right') { name = 'left' ; }
	            }
	            if (height < 0) {
	                if      (name === 'top'   ) { name = 'bottom'; }
	                else if (name === 'bottom') { name = 'top'   ; }
	            }
	
	            if (name === 'left'  ) { return page.x < ((width  >= 0? rect.left: rect.right ) + margin); }
	            if (name === 'top'   ) { return page.y < ((height >= 0? rect.top : rect.bottom) + margin); }
	
	            if (name === 'right' ) { return page.x > ((width  >= 0? rect.right : rect.left) - margin); }
	            if (name === 'bottom') { return page.y > ((height >= 0? rect.bottom: rect.top ) - margin); }
	        }
	
	        // the remaining checks require an element
	        if (!isElement(element)) { return false; }
	
	        return isElement(value)
	                    // the value is an element to use as a resize handle
	                    ? value === element
	                    // otherwise check if element matches value as selector
	                    : matchesUpTo(element, value, interactableElement);
	    }
	
	    function defaultActionChecker (pointer, interaction, element) {
	        var rect = this.getRect(element),
	            shouldResize = false,
	            action = null,
	            resizeAxes = null,
	            resizeEdges,
	            page = extend({}, interaction.curCoords.page),
	            options = this.options;
	
	        if (!rect) { return null; }
	
	        if (actionIsEnabled.resize && options.resize.enabled) {
	            var resizeOptions = options.resize;
	
	            resizeEdges = {
	                left: false, right: false, top: false, bottom: false
	            };
	
	            // if using resize.edges
	            if (isObject(resizeOptions.edges)) {
	                for (var edge in resizeEdges) {
	                    resizeEdges[edge] = checkResizeEdge(edge,
	                                                        resizeOptions.edges[edge],
	                                                        page,
	                                                        interaction._eventTarget,
	                                                        element,
	                                                        rect,
	                                                        resizeOptions.margin || margin);
	                }
	
	                resizeEdges.left = resizeEdges.left && !resizeEdges.right;
	                resizeEdges.top  = resizeEdges.top  && !resizeEdges.bottom;
	
	                shouldResize = resizeEdges.left || resizeEdges.right || resizeEdges.top || resizeEdges.bottom;
	            }
	            else {
	                var right  = options.resize.axis !== 'y' && page.x > (rect.right  - margin),
	                    bottom = options.resize.axis !== 'x' && page.y > (rect.bottom - margin);
	
	                shouldResize = right || bottom;
	                resizeAxes = (right? 'x' : '') + (bottom? 'y' : '');
	            }
	        }
	
	        action = shouldResize
	            ? 'resize'
	            : actionIsEnabled.drag && options.drag.enabled
	                ? 'drag'
	                : null;
	
	        if (actionIsEnabled.gesture
	            && interaction.pointerIds.length >=2
	            && !(interaction.dragging || interaction.resizing)) {
	            action = 'gesture';
	        }
	
	        if (action) {
	            return {
	                name: action,
	                axis: resizeAxes,
	                edges: resizeEdges
	            };
	        }
	
	        return null;
	    }
	
	    // Check if action is enabled globally and the current target supports it
	    // If so, return the validated action. Otherwise, return null
	    function validateAction (action, interactable) {
	        if (!isObject(action)) { return null; }
	
	        var actionName = action.name,
	            options = interactable.options;
	
	        if ((  (actionName  === 'resize'   && options.resize.enabled )
	            || (actionName      === 'drag'     && options.drag.enabled  )
	            || (actionName      === 'gesture'  && options.gesture.enabled))
	            && actionIsEnabled[actionName]) {
	
	            if (actionName === 'resize' || actionName === 'resizeyx') {
	                actionName = 'resizexy';
	            }
	
	            return action;
	        }
	        return null;
	    }
	
	    var listeners = {},
	        interactionListeners = [
	            'dragStart', 'dragMove', 'resizeStart', 'resizeMove', 'gestureStart', 'gestureMove',
	            'pointerOver', 'pointerOut', 'pointerHover', 'selectorDown',
	            'pointerDown', 'pointerMove', 'pointerUp', 'pointerCancel', 'pointerEnd',
	            'addPointer', 'removePointer', 'recordPointer', 'autoScrollMove'
	        ];
	
	    for (var i = 0, len = interactionListeners.length; i < len; i++) {
	        var name = interactionListeners[i];
	
	        listeners[name] = doOnInteractions(name);
	    }
	
	    // bound to the interactable context when a DOM event
	    // listener is added to a selector interactable
	    function delegateListener (event, useCapture) {
	        var fakeEvent = {},
	            delegated = delegatedEvents[event.type],
	            eventTarget = getActualElement(event.path
	                                           ? event.path[0]
	                                           : event.target),
	            element = eventTarget;
	
	        useCapture = useCapture? true: false;
	
	        // duplicate the event so that currentTarget can be changed
	        for (var prop in event) {
	            fakeEvent[prop] = event[prop];
	        }
	
	        fakeEvent.originalEvent = event;
	        fakeEvent.preventDefault = preventOriginalDefault;
	
	        // climb up document tree looking for selector matches
	        while (isElement(element)) {
	            for (var i = 0; i < delegated.selectors.length; i++) {
	                var selector = delegated.selectors[i],
	                    context = delegated.contexts[i];
	
	                if (matchesSelector(element, selector)
	                    && nodeContains(context, eventTarget)
	                    && nodeContains(context, element)) {
	
	                    var listeners = delegated.listeners[i];
	
	                    fakeEvent.currentTarget = element;
	
	                    for (var j = 0; j < listeners.length; j++) {
	                        if (listeners[j][1] === useCapture) {
	                            listeners[j][0](fakeEvent);
	                        }
	                    }
	                }
	            }
	
	            element = parentElement(element);
	        }
	    }
	
	    function delegateUseCapture (event) {
	        return delegateListener.call(this, event, true);
	    }
	
	    interactables.indexOfElement = function indexOfElement (element, context) {
	        context = context || document;
	
	        for (var i = 0; i < this.length; i++) {
	            var interactable = this[i];
	
	            if ((interactable.selector === element
	                && (interactable._context === context))
	                || (!interactable.selector && interactable._element === element)) {
	
	                return i;
	            }
	        }
	        return -1;
	    };
	
	    interactables.get = function interactableGet (element, options) {
	        return this[this.indexOfElement(element, options && options.context)];
	    };
	
	    interactables.forEachSelector = function (callback) {
	        for (var i = 0; i < this.length; i++) {
	            var interactable = this[i];
	
	            if (!interactable.selector) {
	                continue;
	            }
	
	            var ret = callback(interactable, interactable.selector, interactable._context, i, this);
	
	            if (ret !== undefined) {
	                return ret;
	            }
	        }
	    };
	
	    /*\
	     * interact
	     [ method ]
	     *
	     * The methods of this variable can be used to set elements as
	     * interactables and also to change various default settings.
	     *
	     * Calling it as a function and passing an element or a valid CSS selector
	     * string returns an Interactable object which has various methods to
	     * configure it.
	     *
	     - element (Element | string) The HTML or SVG Element to interact with or CSS selector
	     = (object) An @Interactable
	     *
	     > Usage
	     | interact(document.getElementById('draggable')).draggable(true);
	     |
	     | var rectables = interact('rect');
	     | rectables
	     |     .gesturable(true)
	     |     .on('gesturemove', function (event) {
	     |         // something cool...
	     |     })
	     |     .autoScroll(true);
	    \*/
	    function interact (element, options) {
	        return interactables.get(element, options) || new Interactable(element, options);
	    }
	
	    /*\
	     * Interactable
	     [ property ]
	     **
	     * Object type returned by @interact
	    \*/
	    function Interactable (element, options) {
	        this._element = element;
	        this._iEvents = this._iEvents || {};
	
	        var _window;
	
	        if (trySelector(element)) {
	            this.selector = element;
	
	            var context = options && options.context;
	
	            _window = context? getWindow(context) : window;
	
	            if (context && (_window.Node
	                    ? context instanceof _window.Node
	                    : (isElement(context) || context === _window.document))) {
	
	                this._context = context;
	            }
	        }
	        else {
	            _window = getWindow(element);
	
	            if (isElement(element, _window)) {
	
	                if (supportsPointerEvent) {
	                    events.add(this._element, pEventTypes.down, listeners.pointerDown );
	                    events.add(this._element, pEventTypes.move, listeners.pointerHover);
	                }
	                else {
	                    events.add(this._element, 'mousedown' , listeners.pointerDown );
	                    events.add(this._element, 'mousemove' , listeners.pointerHover);
	                    events.add(this._element, 'touchstart', listeners.pointerDown );
	                    events.add(this._element, 'touchmove' , listeners.pointerHover);
	                }
	            }
	        }
	
	        this._doc = _window.document;
	
	        if (!contains(documents, this._doc)) {
	            listenToDocument(this._doc);
	        }
	
	        interactables.push(this);
	
	        this.set(options);
	    }
	
	    Interactable.prototype = {
	        setOnEvents: function (action, phases) {
	            if (action === 'drop') {
	                if (isFunction(phases.ondrop)          ) { this.ondrop           = phases.ondrop          ; }
	                if (isFunction(phases.ondropactivate)  ) { this.ondropactivate   = phases.ondropactivate  ; }
	                if (isFunction(phases.ondropdeactivate)) { this.ondropdeactivate = phases.ondropdeactivate; }
	                if (isFunction(phases.ondragenter)     ) { this.ondragenter      = phases.ondragenter     ; }
	                if (isFunction(phases.ondragleave)     ) { this.ondragleave      = phases.ondragleave     ; }
	                if (isFunction(phases.ondropmove)      ) { this.ondropmove       = phases.ondropmove      ; }
	            }
	            else {
	                action = 'on' + action;
	
	                if (isFunction(phases.onstart)       ) { this[action + 'start'         ] = phases.onstart         ; }
	                if (isFunction(phases.onmove)        ) { this[action + 'move'          ] = phases.onmove          ; }
	                if (isFunction(phases.onend)         ) { this[action + 'end'           ] = phases.onend           ; }
	                if (isFunction(phases.oninertiastart)) { this[action + 'inertiastart'  ] = phases.oninertiastart  ; }
	            }
	
	            return this;
	        },
	
	        /*\
	         * Interactable.draggable
	         [ method ]
	         *
	         * Gets or sets whether drag actions can be performed on the
	         * Interactable
	         *
	         = (boolean) Indicates if this can be the target of drag events
	         | var isDraggable = interact('ul li').draggable();
	         * or
	         - options (boolean | object) #optional true/false or An object with event listeners to be fired on drag events (object makes the Interactable draggable)
	         = (object) This Interactable
	         | interact(element).draggable({
	         |     onstart: function (event) {},
	         |     onmove : function (event) {},
	         |     onend  : function (event) {},
	         |
	         |     // the axis in which the first movement must be
	         |     // for the drag sequence to start
	         |     // 'xy' by default - any direction
	         |     axis: 'x' || 'y' || 'xy',
	         |
	         |     // max number of drags that can happen concurrently
	         |     // with elements of this Interactable. Infinity by default
	         |     max: Infinity,
	         |
	         |     // max number of drags that can target the same element+Interactable
	         |     // 1 by default
	         |     maxPerElement: 2
	         | });
	        \*/
	        draggable: function (options) {
	            if (isObject(options)) {
	                this.options.drag.enabled = options.enabled === false? false: true;
	                this.setPerAction('drag', options);
	                this.setOnEvents('drag', options);
	
	                if (/^x$|^y$|^xy$/.test(options.axis)) {
	                    this.options.drag.axis = options.axis;
	                }
	                else if (options.axis === null) {
	                    delete this.options.drag.axis;
	                }
	
	                return this;
	            }
	
	            if (isBool(options)) {
	                this.options.drag.enabled = options;
	
	                return this;
	            }
	
	            return this.options.drag;
	        },
	
	        setPerAction: function (action, options) {
	            // for all the default per-action options
	            for (var option in options) {
	                // if this option exists for this action
	                if (option in defaultOptions[action]) {
	                    // if the option in the options arg is an object value
	                    if (isObject(options[option])) {
	                        // duplicate the object
	                        this.options[action][option] = extend(this.options[action][option] || {}, options[option]);
	
	                        if (isObject(defaultOptions.perAction[option]) && 'enabled' in defaultOptions.perAction[option]) {
	                            this.options[action][option].enabled = options[option].enabled === false? false : true;
	                        }
	                    }
	                    else if (isBool(options[option]) && isObject(defaultOptions.perAction[option])) {
	                        this.options[action][option].enabled = options[option];
	                    }
	                    else if (options[option] !== undefined) {
	                        // or if it's not undefined, do a plain assignment
	                        this.options[action][option] = options[option];
	                    }
	                }
	            }
	        },
	
	        /*\
	         * Interactable.dropzone
	         [ method ]
	         *
	         * Returns or sets whether elements can be dropped onto this
	         * Interactable to trigger drop events
	         *
	         * Dropzones can receive the following events:
	         *  - `dropactivate` and `dropdeactivate` when an acceptable drag starts and ends
	         *  - `dragenter` and `dragleave` when a draggable enters and leaves the dropzone
	         *  - `dragmove` when a draggable that has entered the dropzone is moved
	         *  - `drop` when a draggable is dropped into this dropzone
	         *
	         *  Use the `accept` option to allow only elements that match the given CSS selector or element.
	         *
	         *  Use the `overlap` option to set how drops are checked for. The allowed values are:
	         *   - `'pointer'`, the pointer must be over the dropzone (default)
	         *   - `'center'`, the draggable element's center must be over the dropzone
	         *   - a number from 0-1 which is the `(intersection area) / (draggable area)`.
	         *       e.g. `0.5` for drop to happen when half of the area of the
	         *       draggable is over the dropzone
	         *
	         - options (boolean | object | null) #optional The new value to be set.
	         | interact('.drop').dropzone({
	         |   accept: '.can-drop' || document.getElementById('single-drop'),
	         |   overlap: 'pointer' || 'center' || zeroToOne
	         | }
	         = (boolean | object) The current setting or this Interactable
	        \*/
	        dropzone: function (options) {
	            if (isObject(options)) {
	                this.options.drop.enabled = options.enabled === false? false: true;
	                this.setOnEvents('drop', options);
	
	                if (/^(pointer|center)$/.test(options.overlap)) {
	                    this.options.drop.overlap = options.overlap;
	                }
	                else if (isNumber(options.overlap)) {
	                    this.options.drop.overlap = Math.max(Math.min(1, options.overlap), 0);
	                }
	                if ('accept' in options) {
	                  this.options.drop.accept = options.accept;
	                }
	                if ('checker' in options) {
	                  this.options.drop.checker = options.checker;
	                }
	
	                return this;
	            }
	
	            if (isBool(options)) {
	                this.options.drop.enabled = options;
	
	                return this;
	            }
	
	            return this.options.drop;
	        },
	
	        dropCheck: function (dragEvent, event, draggable, draggableElement, dropElement, rect) {
	            var dropped = false;
	
	            // if the dropzone has no rect (eg. display: none)
	            // call the custom dropChecker or just return false
	            if (!(rect = rect || this.getRect(dropElement))) {
	                return (this.options.drop.checker
	                    ? this.options.drop.checker(dragEvent, event, dropped, this, dropElement, draggable, draggableElement)
	                    : false);
	            }
	
	            var dropOverlap = this.options.drop.overlap;
	
	            if (dropOverlap === 'pointer') {
	                var page = getPageXY(dragEvent),
	                    origin = getOriginXY(draggable, draggableElement),
	                    horizontal,
	                    vertical;
	
	                page.x += origin.x;
	                page.y += origin.y;
	
	                horizontal = (page.x > rect.left) && (page.x < rect.right);
	                vertical   = (page.y > rect.top ) && (page.y < rect.bottom);
	
	                dropped = horizontal && vertical;
	            }
	
	            var dragRect = draggable.getRect(draggableElement);
	
	            if (dropOverlap === 'center') {
	                var cx = dragRect.left + dragRect.width  / 2,
	                    cy = dragRect.top  + dragRect.height / 2;
	
	                dropped = cx >= rect.left && cx <= rect.right && cy >= rect.top && cy <= rect.bottom;
	            }
	
	            if (isNumber(dropOverlap)) {
	                var overlapArea  = (Math.max(0, Math.min(rect.right , dragRect.right ) - Math.max(rect.left, dragRect.left))
	                                  * Math.max(0, Math.min(rect.bottom, dragRect.bottom) - Math.max(rect.top , dragRect.top ))),
	                    overlapRatio = overlapArea / (dragRect.width * dragRect.height);
	
	                dropped = overlapRatio >= dropOverlap;
	            }
	
	            if (this.options.drop.checker) {
	                dropped = this.options.drop.checker(dragEvent, event, dropped, this, dropElement, draggable, draggableElement);
	            }
	
	            return dropped;
	        },
	
	        /*\
	         * Interactable.dropChecker
	         [ method ]
	         *
	         * DEPRECATED. Use interactable.dropzone({ checker: function... }) instead.
	         *
	         * Gets or sets the function used to check if a dragged element is
	         * over this Interactable.
	         *
	         - checker (function) #optional The function that will be called when checking for a drop
	         = (Function | Interactable) The checker function or this Interactable
	         *
	         * The checker function takes the following arguments:
	         *
	         - dragEvent (InteractEvent) The related dragmove or dragend event
	         - event (TouchEvent | PointerEvent | MouseEvent) The user move/up/end Event related to the dragEvent
	         - dropped (boolean) The value from the default drop checker
	         - dropzone (Interactable) The dropzone interactable
	         - dropElement (Element) The dropzone element
	         - draggable (Interactable) The Interactable being dragged
	         - draggableElement (Element) The actual element that's being dragged
	         *
	         > Usage:
	         | interact(target)
	         | .dropChecker(function(dragEvent,         // related dragmove or dragend event
	         |                       event,             // TouchEvent/PointerEvent/MouseEvent
	         |                       dropped,           // bool result of the default checker
	         |                       dropzone,          // dropzone Interactable
	         |                       dropElement,       // dropzone elemnt
	         |                       draggable,         // draggable Interactable
	         |                       draggableElement) {// draggable element
	         |
	         |   return dropped && event.target.hasAttribute('allow-drop');
	         | }
	        \*/
	        dropChecker: function (checker) {
	            if (isFunction(checker)) {
	                this.options.drop.checker = checker;
	
	                return this;
	            }
	            if (checker === null) {
	                delete this.options.getRect;
	
	                return this;
	            }
	
	            return this.options.drop.checker;
	        },
	
	        /*\
	         * Interactable.accept
	         [ method ]
	         *
	         * Deprecated. add an `accept` property to the options object passed to
	         * @Interactable.dropzone instead.
	         *
	         * Gets or sets the Element or CSS selector match that this
	         * Interactable accepts if it is a dropzone.
	         *
	         - newValue (Element | string | null) #optional
	         * If it is an Element, then only that element can be dropped into this dropzone.
	         * If it is a string, the element being dragged must match it as a selector.
	         * If it is null, the accept options is cleared - it accepts any element.
	         *
	         = (string | Element | null | Interactable) The current accept option if given `undefined` or this Interactable
	        \*/
	        accept: function (newValue) {
	            if (isElement(newValue)) {
	                this.options.drop.accept = newValue;
	
	                return this;
	            }
	
	            // test if it is a valid CSS selector
	            if (trySelector(newValue)) {
	                this.options.drop.accept = newValue;
	
	                return this;
	            }
	
	            if (newValue === null) {
	                delete this.options.drop.accept;
	
	                return this;
	            }
	
	            return this.options.drop.accept;
	        },
	
	        /*\
	         * Interactable.resizable
	         [ method ]
	         *
	         * Gets or sets whether resize actions can be performed on the
	         * Interactable
	         *
	         = (boolean) Indicates if this can be the target of resize elements
	         | var isResizeable = interact('input[type=text]').resizable();
	         * or
	         - options (boolean | object) #optional true/false or An object with event listeners to be fired on resize events (object makes the Interactable resizable)
	         = (object) This Interactable
	         | interact(element).resizable({
	         |     onstart: function (event) {},
	         |     onmove : function (event) {},
	         |     onend  : function (event) {},
	         |
	         |     edges: {
	         |       top   : true,       // Use pointer coords to check for resize.
	         |       left  : false,      // Disable resizing from left edge.
	         |       bottom: '.resize-s',// Resize if pointer target matches selector
	         |       right : handleEl    // Resize if pointer target is the given Element
	         |     },
	         |
	         |     // Width and height can be adjusted independently. When `true`, width and
	         |     // height are adjusted at a 1:1 ratio.
	         |     square: false,
	         |
	         |     // Width and height can be adjusted independently. When `true`, width and
	         |     // height maintain the aspect ratio they had when resizing started.
	         |     preserveAspectRatio: false,
	         |
	         |     // a value of 'none' will limit the resize rect to a minimum of 0x0
	         |     // 'negate' will allow the rect to have negative width/height
	         |     // 'reposition' will keep the width/height positive by swapping
	         |     // the top and bottom edges and/or swapping the left and right edges
	         |     invert: 'none' || 'negate' || 'reposition'
	         |
	         |     // limit multiple resizes.
	         |     // See the explanation in the @Interactable.draggable example
	         |     max: Infinity,
	         |     maxPerElement: 1,
	         | });
	        \*/
	        resizable: function (options) {
	            if (isObject(options)) {
	                this.options.resize.enabled = options.enabled === false? false: true;
	                this.setPerAction('resize', options);
	                this.setOnEvents('resize', options);
	
	                if (/^x$|^y$|^xy$/.test(options.axis)) {
	                    this.options.resize.axis = options.axis;
	                }
	                else if (options.axis === null) {
	                    this.options.resize.axis = defaultOptions.resize.axis;
	                }
	
	                if (isBool(options.preserveAspectRatio)) {
	                    this.options.resize.preserveAspectRatio = options.preserveAspectRatio;
	                }
	                else if (isBool(options.square)) {
	                    this.options.resize.square = options.square;
	                }
	
	                return this;
	            }
	            if (isBool(options)) {
	                this.options.resize.enabled = options;
	
	                return this;
	            }
	            return this.options.resize;
	        },
	
	        /*\
	         * Interactable.squareResize
	         [ method ]
	         *
	         * Deprecated. Add a `square: true || false` property to @Interactable.resizable instead
	         *
	         * Gets or sets whether resizing is forced 1:1 aspect
	         *
	         = (boolean) Current setting
	         *
	         * or
	         *
	         - newValue (boolean) #optional
	         = (object) this Interactable
	        \*/
	        squareResize: function (newValue) {
	            if (isBool(newValue)) {
	                this.options.resize.square = newValue;
	
	                return this;
	            }
	
	            if (newValue === null) {
	                delete this.options.resize.square;
	
	                return this;
	            }
	
	            return this.options.resize.square;
	        },
	
	        /*\
	         * Interactable.gesturable
	         [ method ]
	         *
	         * Gets or sets whether multitouch gestures can be performed on the
	         * Interactable's element
	         *
	         = (boolean) Indicates if this can be the target of gesture events
	         | var isGestureable = interact(element).gesturable();
	         * or
	         - options (boolean | object) #optional true/false or An object with event listeners to be fired on gesture events (makes the Interactable gesturable)
	         = (object) this Interactable
	         | interact(element).gesturable({
	         |     onstart: function (event) {},
	         |     onmove : function (event) {},
	         |     onend  : function (event) {},
	         |
	         |     // limit multiple gestures.
	         |     // See the explanation in @Interactable.draggable example
	         |     max: Infinity,
	         |     maxPerElement: 1,
	         | });
	        \*/
	        gesturable: function (options) {
	            if (isObject(options)) {
	                this.options.gesture.enabled = options.enabled === false? false: true;
	                this.setPerAction('gesture', options);
	                this.setOnEvents('gesture', options);
	
	                return this;
	            }
	
	            if (isBool(options)) {
	                this.options.gesture.enabled = options;
	
	                return this;
	            }
	
	            return this.options.gesture;
	        },
	
	        /*\
	         * Interactable.autoScroll
	         [ method ]
	         **
	         * Deprecated. Add an `autoscroll` property to the options object
	         * passed to @Interactable.draggable or @Interactable.resizable instead.
	         *
	         * Returns or sets whether dragging and resizing near the edges of the
	         * window/container trigger autoScroll for this Interactable
	         *
	         = (object) Object with autoScroll properties
	         *
	         * or
	         *
	         - options (object | boolean) #optional
	         * options can be:
	         * - an object with margin, distance and interval properties,
	         * - true or false to enable or disable autoScroll or
	         = (Interactable) this Interactable
	        \*/
	        autoScroll: function (options) {
	            if (isObject(options)) {
	                options = extend({ actions: ['drag', 'resize']}, options);
	            }
	            else if (isBool(options)) {
	                options = { actions: ['drag', 'resize'], enabled: options };
	            }
	
	            return this.setOptions('autoScroll', options);
	        },
	
	        /*\
	         * Interactable.snap
	         [ method ]
	         **
	         * Deprecated. Add a `snap` property to the options object passed
	         * to @Interactable.draggable or @Interactable.resizable instead.
	         *
	         * Returns or sets if and how action coordinates are snapped. By
	         * default, snapping is relative to the pointer coordinates. You can
	         * change this by setting the
	         * [`elementOrigin`](https://github.com/taye/interact.js/pull/72).
	         **
	         = (boolean | object) `false` if snap is disabled; object with snap properties if snap is enabled
	         **
	         * or
	         **
	         - options (object | boolean | null) #optional
	         = (Interactable) this Interactable
	         > Usage
	         | interact(document.querySelector('#thing')).snap({
	         |     targets: [
	         |         // snap to this specific point
	         |         {
	         |             x: 100,
	         |             y: 100,
	         |             range: 25
	         |         },
	         |         // give this function the x and y page coords and snap to the object returned
	         |         function (x, y) {
	         |             return {
	         |                 x: x,
	         |                 y: (75 + 50 * Math.sin(x * 0.04)),
	         |                 range: 40
	         |             };
	         |         },
	         |         // create a function that snaps to a grid
	         |         interact.createSnapGrid({
	         |             x: 50,
	         |             y: 50,
	         |             range: 10,              // optional
	         |             offset: { x: 5, y: 10 } // optional
	         |         })
	         |     ],
	         |     // do not snap during normal movement.
	         |     // Instead, trigger only one snapped move event
	         |     // immediately before the end event.
	         |     endOnly: true,
	         |
	         |     relativePoints: [
	         |         { x: 0, y: 0 },  // snap relative to the top left of the element
	         |         { x: 1, y: 1 },  // and also to the bottom right
	         |     ],  
	         |
	         |     // offset the snap target coordinates
	         |     // can be an object with x/y or 'startCoords'
	         |     offset: { x: 50, y: 50 }
	         |   }
	         | });
	        \*/
	        snap: function (options) {
	            var ret = this.setOptions('snap', options);
	
	            if (ret === this) { return this; }
	
	            return ret.drag;
	        },
	
	        setOptions: function (option, options) {
	            var actions = options && isArray(options.actions)
	                    ? options.actions
	                    : ['drag'];
	
	            var i;
	
	            if (isObject(options) || isBool(options)) {
	                for (i = 0; i < actions.length; i++) {
	                    var action = /resize/.test(actions[i])? 'resize' : actions[i];
	
	                    if (!isObject(this.options[action])) { continue; }
	
	                    var thisOption = this.options[action][option];
	
	                    if (isObject(options)) {
	                        extend(thisOption, options);
	                        thisOption.enabled = options.enabled === false? false: true;
	
	                        if (option === 'snap') {
	                            if (thisOption.mode === 'grid') {
	                                thisOption.targets = [
	                                    interact.createSnapGrid(extend({
	                                        offset: thisOption.gridOffset || { x: 0, y: 0 }
	                                    }, thisOption.grid || {}))
	                                ];
	                            }
	                            else if (thisOption.mode === 'anchor') {
	                                thisOption.targets = thisOption.anchors;
	                            }
	                            else if (thisOption.mode === 'path') {
	                                thisOption.targets = thisOption.paths;
	                            }
	
	                            if ('elementOrigin' in options) {
	                                thisOption.relativePoints = [options.elementOrigin];
	                            }
	                        }
	                    }
	                    else if (isBool(options)) {
	                        thisOption.enabled = options;
	                    }
	                }
	
	                return this;
	            }
	
	            var ret = {},
	                allActions = ['drag', 'resize', 'gesture'];
	
	            for (i = 0; i < allActions.length; i++) {
	                if (option in defaultOptions[allActions[i]]) {
	                    ret[allActions[i]] = this.options[allActions[i]][option];
	                }
	            }
	
	            return ret;
	        },
	
	
	        /*\
	         * Interactable.inertia
	         [ method ]
	         **
	         * Deprecated. Add an `inertia` property to the options object passed
	         * to @Interactable.draggable or @Interactable.resizable instead.
	         *
	         * Returns or sets if and how events continue to run after the pointer is released
	         **
	         = (boolean | object) `false` if inertia is disabled; `object` with inertia properties if inertia is enabled
	         **
	         * or
	         **
	         - options (object | boolean | null) #optional
	         = (Interactable) this Interactable
	         > Usage
	         | // enable and use default settings
	         | interact(element).inertia(true);
	         |
	         | // enable and use custom settings
	         | interact(element).inertia({
	         |     // value greater than 0
	         |     // high values slow the object down more quickly
	         |     resistance     : 16,
	         |
	         |     // the minimum launch speed (pixels per second) that results in inertia start
	         |     minSpeed       : 200,
	         |
	         |     // inertia will stop when the object slows down to this speed
	         |     endSpeed       : 20,
	         |
	         |     // boolean; should actions be resumed when the pointer goes down during inertia
	         |     allowResume    : true,
	         |
	         |     // boolean; should the jump when resuming from inertia be ignored in event.dx/dy
	         |     zeroResumeDelta: false,
	         |
	         |     // if snap/restrict are set to be endOnly and inertia is enabled, releasing
	         |     // the pointer without triggering inertia will animate from the release
	         |     // point to the snaped/restricted point in the given amount of time (ms)
	         |     smoothEndDuration: 300,
	         |
	         |     // an array of action types that can have inertia (no gesture)
	         |     actions        : ['drag', 'resize']
	         | });
	         |
	         | // reset custom settings and use all defaults
	         | interact(element).inertia(null);
	        \*/
	        inertia: function (options) {
	            var ret = this.setOptions('inertia', options);
	
	            if (ret === this) { return this; }
	
	            return ret.drag;
	        },
	
	        getAction: function (pointer, event, interaction, element) {
	            var action = this.defaultActionChecker(pointer, interaction, element);
	
	            if (this.options.actionChecker) {
	                return this.options.actionChecker(pointer, event, action, this, element, interaction);
	            }
	
	            return action;
	        },
	
	        defaultActionChecker: defaultActionChecker,
	
	        /*\
	         * Interactable.actionChecker
	         [ method ]
	         *
	         * Gets or sets the function used to check action to be performed on
	         * pointerDown
	         *
	         - checker (function | null) #optional A function which takes a pointer event, defaultAction string, interactable, element and interaction as parameters and returns an object with name property 'drag' 'resize' or 'gesture' and optionally an `edges` object with boolean 'top', 'left', 'bottom' and right props.
	         = (Function | Interactable) The checker function or this Interactable
	         *
	         | interact('.resize-drag')
	         |   .resizable(true)
	         |   .draggable(true)
	         |   .actionChecker(function (pointer, event, action, interactable, element, interaction) {
	         |
	         |   if (interact.matchesSelector(event.target, '.drag-handle') {
	         |     // force drag with handle target
	         |     action.name = drag;
	         |   }
	         |   else {
	         |     // resize from the top and right edges
	         |     action.name  = 'resize';
	         |     action.edges = { top: true, right: true };
	         |   }
	         |
	         |   return action;
	         | });
	        \*/
	        actionChecker: function (checker) {
	            if (isFunction(checker)) {
	                this.options.actionChecker = checker;
	
	                return this;
	            }
	
	            if (checker === null) {
	                delete this.options.actionChecker;
	
	                return this;
	            }
	
	            return this.options.actionChecker;
	        },
	
	        /*\
	         * Interactable.getRect
	         [ method ]
	         *
	         * The default function to get an Interactables bounding rect. Can be
	         * overridden using @Interactable.rectChecker.
	         *
	         - element (Element) #optional The element to measure.
	         = (object) The object's bounding rectangle.
	         o {
	         o     top   : 0,
	         o     left  : 0,
	         o     bottom: 0,
	         o     right : 0,
	         o     width : 0,
	         o     height: 0
	         o }
	        \*/
	        getRect: function rectCheck (element) {
	            element = element || this._element;
	
	            if (this.selector && !(isElement(element))) {
	                element = this._context.querySelector(this.selector);
	            }
	
	            return getElementRect(element);
	        },
	
	        /*\
	         * Interactable.rectChecker
	         [ method ]
	         *
	         * Returns or sets the function used to calculate the interactable's
	         * element's rectangle
	         *
	         - checker (function) #optional A function which returns this Interactable's bounding rectangle. See @Interactable.getRect
	         = (function | object) The checker function or this Interactable
	        \*/
	        rectChecker: function (checker) {
	            if (isFunction(checker)) {
	                this.getRect = checker;
	
	                return this;
	            }
	
	            if (checker === null) {
	                delete this.options.getRect;
	
	                return this;
	            }
	
	            return this.getRect;
	        },
	
	        /*\
	         * Interactable.styleCursor
	         [ method ]
	         *
	         * Returns or sets whether the action that would be performed when the
	         * mouse on the element are checked on `mousemove` so that the cursor
	         * may be styled appropriately
	         *
	         - newValue (boolean) #optional
	         = (boolean | Interactable) The current setting or this Interactable
	        \*/
	        styleCursor: function (newValue) {
	            if (isBool(newValue)) {
	                this.options.styleCursor = newValue;
	
	                return this;
	            }
	
	            if (newValue === null) {
	                delete this.options.styleCursor;
	
	                return this;
	            }
	
	            return this.options.styleCursor;
	        },
	
	        /*\
	         * Interactable.preventDefault
	         [ method ]
	         *
	         * Returns or sets whether to prevent the browser's default behaviour
	         * in response to pointer events. Can be set to:
	         *  - `'always'` to always prevent
	         *  - `'never'` to never prevent
	         *  - `'auto'` to let interact.js try to determine what would be best
	         *
	         - newValue (string) #optional `true`, `false` or `'auto'`
	         = (string | Interactable) The current setting or this Interactable
	        \*/
	        preventDefault: function (newValue) {
	            if (/^(always|never|auto)$/.test(newValue)) {
	                this.options.preventDefault = newValue;
	                return this;
	            }
	
	            if (isBool(newValue)) {
	                this.options.preventDefault = newValue? 'always' : 'never';
	                return this;
	            }
	
	            return this.options.preventDefault;
	        },
	
	        /*\
	         * Interactable.origin
	         [ method ]
	         *
	         * Gets or sets the origin of the Interactable's element.  The x and y
	         * of the origin will be subtracted from action event coordinates.
	         *
	         - origin (object | string) #optional An object eg. { x: 0, y: 0 } or string 'parent', 'self' or any CSS selector
	         * OR
	         - origin (Element) #optional An HTML or SVG Element whose rect will be used
	         **
	         = (object) The current origin or this Interactable
	        \*/
	        origin: function (newValue) {
	            if (trySelector(newValue)) {
	                this.options.origin = newValue;
	                return this;
	            }
	            else if (isObject(newValue)) {
	                this.options.origin = newValue;
	                return this;
	            }
	
	            return this.options.origin;
	        },
	
	        /*\
	         * Interactable.deltaSource
	         [ method ]
	         *
	         * Returns or sets the mouse coordinate types used to calculate the
	         * movement of the pointer.
	         *
	         - newValue (string) #optional Use 'client' if you will be scrolling while interacting; Use 'page' if you want autoScroll to work
	         = (string | object) The current deltaSource or this Interactable
	        \*/
	        deltaSource: function (newValue) {
	            if (newValue === 'page' || newValue === 'client') {
	                this.options.deltaSource = newValue;
	
	                return this;
	            }
	
	            return this.options.deltaSource;
	        },
	
	        /*\
	         * Interactable.restrict
	         [ method ]
	         **
	         * Deprecated. Add a `restrict` property to the options object passed to
	         * @Interactable.draggable, @Interactable.resizable or @Interactable.gesturable instead.
	         *
	         * Returns or sets the rectangles within which actions on this
	         * interactable (after snap calculations) are restricted. By default,
	         * restricting is relative to the pointer coordinates. You can change
	         * this by setting the
	         * [`elementRect`](https://github.com/taye/interact.js/pull/72).
	         **
	         - options (object) #optional an object with keys drag, resize, and/or gesture whose values are rects, Elements, CSS selectors, or 'parent' or 'self'
	         = (object) The current restrictions object or this Interactable
	         **
	         | interact(element).restrict({
	         |     // the rect will be `interact.getElementRect(element.parentNode)`
	         |     drag: element.parentNode,
	         |
	         |     // x and y are relative to the the interactable's origin
	         |     resize: { x: 100, y: 100, width: 200, height: 200 }
	         | })
	         |
	         | interact('.draggable').restrict({
	         |     // the rect will be the selected element's parent
	         |     drag: 'parent',
	         |
	         |     // do not restrict during normal movement.
	         |     // Instead, trigger only one restricted move event
	         |     // immediately before the end event.
	         |     endOnly: true,
	         |
	         |     // https://github.com/taye/interact.js/pull/72#issue-41813493
	         |     elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
	         | });
	        \*/
	        restrict: function (options) {
	            if (!isObject(options)) {
	                return this.setOptions('restrict', options);
	            }
	
	            var actions = ['drag', 'resize', 'gesture'],
	                ret;
	
	            for (var i = 0; i < actions.length; i++) {
	                var action = actions[i];
	
	                if (action in options) {
	                    var perAction = extend({
	                            actions: [action],
	                            restriction: options[action]
	                        }, options);
	
	                    ret = this.setOptions('restrict', perAction);
	                }
	            }
	
	            return ret;
	        },
	
	        /*\
	         * Interactable.context
	         [ method ]
	         *
	         * Gets the selector context Node of the Interactable. The default is `window.document`.
	         *
	         = (Node) The context Node of this Interactable
	         **
	        \*/
	        context: function () {
	            return this._context;
	        },
	
	        _context: document,
	
	        /*\
	         * Interactable.ignoreFrom
	         [ method ]
	         *
	         * If the target of the `mousedown`, `pointerdown` or `touchstart`
	         * event or any of it's parents match the given CSS selector or
	         * Element, no drag/resize/gesture is started.
	         *
	         - newValue (string | Element | null) #optional a CSS selector string, an Element or `null` to not ignore any elements
	         = (string | Element | object) The current ignoreFrom value or this Interactable
	         **
	         | interact(element, { ignoreFrom: document.getElementById('no-action') });
	         | // or
	         | interact(element).ignoreFrom('input, textarea, a');
	        \*/
	        ignoreFrom: function (newValue) {
	            if (trySelector(newValue)) {            // CSS selector to match event.target
	                this.options.ignoreFrom = newValue;
	                return this;
	            }
	
	            if (isElement(newValue)) {              // specific element
	                this.options.ignoreFrom = newValue;
	                return this;
	            }
	
	            return this.options.ignoreFrom;
	        },
	
	        /*\
	         * Interactable.allowFrom
	         [ method ]
	         *
	         * A drag/resize/gesture is started only If the target of the
	         * `mousedown`, `pointerdown` or `touchstart` event or any of it's
	         * parents match the given CSS selector or Element.
	         *
	         - newValue (string | Element | null) #optional a CSS selector string, an Element or `null` to allow from any element
	         = (string | Element | object) The current allowFrom value or this Interactable
	         **
	         | interact(element, { allowFrom: document.getElementById('drag-handle') });
	         | // or
	         | interact(element).allowFrom('.handle');
	        \*/
	        allowFrom: function (newValue) {
	            if (trySelector(newValue)) {            // CSS selector to match event.target
	                this.options.allowFrom = newValue;
	                return this;
	            }
	
	            if (isElement(newValue)) {              // specific element
	                this.options.allowFrom = newValue;
	                return this;
	            }
	
	            return this.options.allowFrom;
	        },
	
	        /*\
	         * Interactable.element
	         [ method ]
	         *
	         * If this is not a selector Interactable, it returns the element this
	         * interactable represents
	         *
	         = (Element) HTML / SVG Element
	        \*/
	        element: function () {
	            return this._element;
	        },
	
	        /*\
	         * Interactable.fire
	         [ method ]
	         *
	         * Calls listeners for the given InteractEvent type bound globally
	         * and directly to this Interactable
	         *
	         - iEvent (InteractEvent) The InteractEvent object to be fired on this Interactable
	         = (Interactable) this Interactable
	        \*/
	        fire: function (iEvent) {
	            if (!(iEvent && iEvent.type) || !contains(eventTypes, iEvent.type)) {
	                return this;
	            }
	
	            var listeners,
	                i,
	                len,
	                onEvent = 'on' + iEvent.type,
	                funcName = '';
	
	            // Interactable#on() listeners
	            if (iEvent.type in this._iEvents) {
	                listeners = this._iEvents[iEvent.type];
	
	                for (i = 0, len = listeners.length; i < len && !iEvent.immediatePropagationStopped; i++) {
	                    funcName = listeners[i].name;
	                    listeners[i](iEvent);
	                }
	            }
	
	            // interactable.onevent listener
	            if (isFunction(this[onEvent])) {
	                funcName = this[onEvent].name;
	                this[onEvent](iEvent);
	            }
	
	            // interact.on() listeners
	            if (iEvent.type in globalEvents && (listeners = globalEvents[iEvent.type]))  {
	
	                for (i = 0, len = listeners.length; i < len && !iEvent.immediatePropagationStopped; i++) {
	                    funcName = listeners[i].name;
	                    listeners[i](iEvent);
	                }
	            }
	
	            return this;
	        },
	
	        /*\
	         * Interactable.on
	         [ method ]
	         *
	         * Binds a listener for an InteractEvent or DOM event.
	         *
	         - eventType  (string | array | object) The types of events to listen for
	         - listener   (function) The function to be called on the given event(s)
	         - useCapture (boolean) #optional useCapture flag for addEventListener
	         = (object) This Interactable
	        \*/
	        on: function (eventType, listener, useCapture) {
	            var i;
	
	            if (isString(eventType) && eventType.search(' ') !== -1) {
	                eventType = eventType.trim().split(/ +/);
	            }
	
	            if (isArray(eventType)) {
	                for (i = 0; i < eventType.length; i++) {
	                    this.on(eventType[i], listener, useCapture);
	                }
	
	                return this;
	            }
	
	            if (isObject(eventType)) {
	                for (var prop in eventType) {
	                    this.on(prop, eventType[prop], listener);
	                }
	
	                return this;
	            }
	
	            if (eventType === 'wheel') {
	                eventType = wheelEvent;
	            }
	
	            // convert to boolean
	            useCapture = useCapture? true: false;
	
	            if (contains(eventTypes, eventType)) {
	                // if this type of event was never bound to this Interactable
	                if (!(eventType in this._iEvents)) {
	                    this._iEvents[eventType] = [listener];
	                }
	                else {
	                    this._iEvents[eventType].push(listener);
	                }
	            }
	            // delegated event for selector
	            else if (this.selector) {
	                if (!delegatedEvents[eventType]) {
	                    delegatedEvents[eventType] = {
	                        selectors: [],
	                        contexts : [],
	                        listeners: []
	                    };
	
	                    // add delegate listener functions
	                    for (i = 0; i < documents.length; i++) {
	                        events.add(documents[i], eventType, delegateListener);
	                        events.add(documents[i], eventType, delegateUseCapture, true);
	                    }
	                }
	
	                var delegated = delegatedEvents[eventType],
	                    index;
	
	                for (index = delegated.selectors.length - 1; index >= 0; index--) {
	                    if (delegated.selectors[index] === this.selector
	                        && delegated.contexts[index] === this._context) {
	                        break;
	                    }
	                }
	
	                if (index === -1) {
	                    index = delegated.selectors.length;
	
	                    delegated.selectors.push(this.selector);
	                    delegated.contexts .push(this._context);
	                    delegated.listeners.push([]);
	                }
	
	                // keep listener and useCapture flag
	                delegated.listeners[index].push([listener, useCapture]);
	            }
	            else {
	                events.add(this._element, eventType, listener, useCapture);
	            }
	
	            return this;
	        },
	
	        /*\
	         * Interactable.off
	         [ method ]
	         *
	         * Removes an InteractEvent or DOM event listener
	         *
	         - eventType  (string | array | object) The types of events that were listened for
	         - listener   (function) The listener function to be removed
	         - useCapture (boolean) #optional useCapture flag for removeEventListener
	         = (object) This Interactable
	        \*/
	        off: function (eventType, listener, useCapture) {
	            var i;
	
	            if (isString(eventType) && eventType.search(' ') !== -1) {
	                eventType = eventType.trim().split(/ +/);
	            }
	
	            if (isArray(eventType)) {
	                for (i = 0; i < eventType.length; i++) {
	                    this.off(eventType[i], listener, useCapture);
	                }
	
	                return this;
	            }
	
	            if (isObject(eventType)) {
	                for (var prop in eventType) {
	                    this.off(prop, eventType[prop], listener);
	                }
	
	                return this;
	            }
	
	            var eventList,
	                index = -1;
	
	            // convert to boolean
	            useCapture = useCapture? true: false;
	
	            if (eventType === 'wheel') {
	                eventType = wheelEvent;
	            }
	
	            // if it is an action event type
	            if (contains(eventTypes, eventType)) {
	                eventList = this._iEvents[eventType];
	
	                if (eventList && (index = indexOf(eventList, listener)) !== -1) {
	                    this._iEvents[eventType].splice(index, 1);
	                }
	            }
	            // delegated event
	            else if (this.selector) {
	                var delegated = delegatedEvents[eventType],
	                    matchFound = false;
	
	                if (!delegated) { return this; }
	
	                // count from last index of delegated to 0
	                for (index = delegated.selectors.length - 1; index >= 0; index--) {
	                    // look for matching selector and context Node
	                    if (delegated.selectors[index] === this.selector
	                        && delegated.contexts[index] === this._context) {
	
	                        var listeners = delegated.listeners[index];
	
	                        // each item of the listeners array is an array: [function, useCaptureFlag]
	                        for (i = listeners.length - 1; i >= 0; i--) {
	                            var fn = listeners[i][0],
	                                useCap = listeners[i][1];
	
	                            // check if the listener functions and useCapture flags match
	                            if (fn === listener && useCap === useCapture) {
	                                // remove the listener from the array of listeners
	                                listeners.splice(i, 1);
	
	                                // if all listeners for this interactable have been removed
	                                // remove the interactable from the delegated arrays
	                                if (!listeners.length) {
	                                    delegated.selectors.splice(index, 1);
	                                    delegated.contexts .splice(index, 1);
	                                    delegated.listeners.splice(index, 1);
	
	                                    // remove delegate function from context
	                                    events.remove(this._context, eventType, delegateListener);
	                                    events.remove(this._context, eventType, delegateUseCapture, true);
	
	                                    // remove the arrays if they are empty
	                                    if (!delegated.selectors.length) {
	                                        delegatedEvents[eventType] = null;
	                                    }
	                                }
	
	                                // only remove one listener
	                                matchFound = true;
	                                break;
	                            }
	                        }
	
	                        if (matchFound) { break; }
	                    }
	                }
	            }
	            // remove listener from this Interatable's element
	            else {
	                events.remove(this._element, eventType, listener, useCapture);
	            }
	
	            return this;
	        },
	
	        /*\
	         * Interactable.set
	         [ method ]
	         *
	         * Reset the options of this Interactable
	         - options (object) The new settings to apply
	         = (object) This Interactable
	        \*/
	        set: function (options) {
	            if (!isObject(options)) {
	                options = {};
	            }
	
	            this.options = extend({}, defaultOptions.base);
	
	            var i,
	                actions = ['drag', 'drop', 'resize', 'gesture'],
	                methods = ['draggable', 'dropzone', 'resizable', 'gesturable'],
	                perActions = extend(extend({}, defaultOptions.perAction), options[action] || {});
	
	            for (i = 0; i < actions.length; i++) {
	                var action = actions[i];
	
	                this.options[action] = extend({}, defaultOptions[action]);
	
	                this.setPerAction(action, perActions);
	
	                this[methods[i]](options[action]);
	            }
	
	            var settings = [
	                    'accept', 'actionChecker', 'allowFrom', 'deltaSource',
	                    'dropChecker', 'ignoreFrom', 'origin', 'preventDefault',
	                    'rectChecker', 'styleCursor'
	                ];
	
	            for (i = 0, len = settings.length; i < len; i++) {
	                var setting = settings[i];
	
	                this.options[setting] = defaultOptions.base[setting];
	
	                if (setting in options) {
	                    this[setting](options[setting]);
	                }
	            }
	
	            return this;
	        },
	
	        /*\
	         * Interactable.unset
	         [ method ]
	         *
	         * Remove this interactable from the list of interactables and remove
	         * it's drag, drop, resize and gesture capabilities
	         *
	         = (object) @interact
	        \*/
	        unset: function () {
	            events.remove(this._element, 'all');
	
	            if (!isString(this.selector)) {
	                events.remove(this, 'all');
	                if (this.options.styleCursor) {
	                    this._element.style.cursor = '';
	                }
	            }
	            else {
	                // remove delegated events
	                for (var type in delegatedEvents) {
	                    var delegated = delegatedEvents[type];
	
	                    for (var i = 0; i < delegated.selectors.length; i++) {
	                        if (delegated.selectors[i] === this.selector
	                            && delegated.contexts[i] === this._context) {
	
	                            delegated.selectors.splice(i, 1);
	                            delegated.contexts .splice(i, 1);
	                            delegated.listeners.splice(i, 1);
	
	                            // remove the arrays if they are empty
	                            if (!delegated.selectors.length) {
	                                delegatedEvents[type] = null;
	                            }
	                        }
	
	                        events.remove(this._context, type, delegateListener);
	                        events.remove(this._context, type, delegateUseCapture, true);
	
	                        break;
	                    }
	                }
	            }
	
	            this.dropzone(false);
	
	            interactables.splice(indexOf(interactables, this), 1);
	
	            return interact;
	        }
	    };
	
	    function warnOnce (method, message) {
	        var warned = false;
	
	        return function () {
	            if (!warned) {
	                window.console.warn(message);
	                warned = true;
	            }
	
	            return method.apply(this, arguments);
	        };
	    }
	
	    Interactable.prototype.snap = warnOnce(Interactable.prototype.snap,
	         'Interactable#snap is deprecated. See the new documentation for snapping at http://interactjs.io/docs/snapping');
	    Interactable.prototype.restrict = warnOnce(Interactable.prototype.restrict,
	         'Interactable#restrict is deprecated. See the new documentation for resticting at http://interactjs.io/docs/restriction');
	    Interactable.prototype.inertia = warnOnce(Interactable.prototype.inertia,
	         'Interactable#inertia is deprecated. See the new documentation for inertia at http://interactjs.io/docs/inertia');
	    Interactable.prototype.autoScroll = warnOnce(Interactable.prototype.autoScroll,
	         'Interactable#autoScroll is deprecated. See the new documentation for autoScroll at http://interactjs.io/docs/#autoscroll');
	    Interactable.prototype.squareResize = warnOnce(Interactable.prototype.squareResize,
	         'Interactable#squareResize is deprecated. See http://interactjs.io/docs/#resize-square');
	
	    Interactable.prototype.accept = warnOnce(Interactable.prototype.accept,
	         'Interactable#accept is deprecated. use Interactable#dropzone({ accept: target }) instead');
	    Interactable.prototype.dropChecker = warnOnce(Interactable.prototype.dropChecker,
	         'Interactable#dropChecker is deprecated. use Interactable#dropzone({ dropChecker: checkerFunction }) instead');
	    Interactable.prototype.context = warnOnce(Interactable.prototype.context,
	         'Interactable#context as a method is deprecated. It will soon be a DOM Node instead');
	
	    /*\
	     * interact.isSet
	     [ method ]
	     *
	     * Check if an element has been set
	     - element (Element) The Element being searched for
	     = (boolean) Indicates if the element or CSS selector was previously passed to interact
	    \*/
	    interact.isSet = function(element, options) {
	        return interactables.indexOfElement(element, options && options.context) !== -1;
	    };
	
	    /*\
	     * interact.on
	     [ method ]
	     *
	     * Adds a global listener for an InteractEvent or adds a DOM event to
	     * `document`
	     *
	     - type       (string | array | object) The types of events to listen for
	     - listener   (function) The function to be called on the given event(s)
	     - useCapture (boolean) #optional useCapture flag for addEventListener
	     = (object) interact
	    \*/
	    interact.on = function (type, listener, useCapture) {
	        if (isString(type) && type.search(' ') !== -1) {
	            type = type.trim().split(/ +/);
	        }
	
	        if (isArray(type)) {
	            for (var i = 0; i < type.length; i++) {
	                interact.on(type[i], listener, useCapture);
	            }
	
	            return interact;
	        }
	
	        if (isObject(type)) {
	            for (var prop in type) {
	                interact.on(prop, type[prop], listener);
	            }
	
	            return interact;
	        }
	
	        // if it is an InteractEvent type, add listener to globalEvents
	        if (contains(eventTypes, type)) {
	            // if this type of event was never bound
	            if (!globalEvents[type]) {
	                globalEvents[type] = [listener];
	            }
	            else {
	                globalEvents[type].push(listener);
	            }
	        }
	        // If non InteractEvent type, addEventListener to document
	        else {
	            events.add(document, type, listener, useCapture);
	        }
	
	        return interact;
	    };
	
	    /*\
	     * interact.off
	     [ method ]
	     *
	     * Removes a global InteractEvent listener or DOM event from `document`
	     *
	     - type       (string | array | object) The types of events that were listened for
	     - listener   (function) The listener function to be removed
	     - useCapture (boolean) #optional useCapture flag for removeEventListener
	     = (object) interact
	     \*/
	    interact.off = function (type, listener, useCapture) {
	        if (isString(type) && type.search(' ') !== -1) {
	            type = type.trim().split(/ +/);
	        }
	
	        if (isArray(type)) {
	            for (var i = 0; i < type.length; i++) {
	                interact.off(type[i], listener, useCapture);
	            }
	
	            return interact;
	        }
	
	        if (isObject(type)) {
	            for (var prop in type) {
	                interact.off(prop, type[prop], listener);
	            }
	
	            return interact;
	        }
	
	        if (!contains(eventTypes, type)) {
	            events.remove(document, type, listener, useCapture);
	        }
	        else {
	            var index;
	
	            if (type in globalEvents
	                && (index = indexOf(globalEvents[type], listener)) !== -1) {
	                globalEvents[type].splice(index, 1);
	            }
	        }
	
	        return interact;
	    };
	
	    /*\
	     * interact.enableDragging
	     [ method ]
	     *
	     * Deprecated.
	     *
	     * Returns or sets whether dragging is enabled for any Interactables
	     *
	     - newValue (boolean) #optional `true` to allow the action; `false` to disable action for all Interactables
	     = (boolean | object) The current setting or interact
	    \*/
	    interact.enableDragging = warnOnce(function (newValue) {
	        if (newValue !== null && newValue !== undefined) {
	            actionIsEnabled.drag = newValue;
	
	            return interact;
	        }
	        return actionIsEnabled.drag;
	    }, 'interact.enableDragging is deprecated and will soon be removed.');
	
	    /*\
	     * interact.enableResizing
	     [ method ]
	     *
	     * Deprecated.
	     *
	     * Returns or sets whether resizing is enabled for any Interactables
	     *
	     - newValue (boolean) #optional `true` to allow the action; `false` to disable action for all Interactables
	     = (boolean | object) The current setting or interact
	    \*/
	    interact.enableResizing = warnOnce(function (newValue) {
	        if (newValue !== null && newValue !== undefined) {
	            actionIsEnabled.resize = newValue;
	
	            return interact;
	        }
	        return actionIsEnabled.resize;
	    }, 'interact.enableResizing is deprecated and will soon be removed.');
	
	    /*\
	     * interact.enableGesturing
	     [ method ]
	     *
	     * Deprecated.
	     *
	     * Returns or sets whether gesturing is enabled for any Interactables
	     *
	     - newValue (boolean) #optional `true` to allow the action; `false` to disable action for all Interactables
	     = (boolean | object) The current setting or interact
	    \*/
	    interact.enableGesturing = warnOnce(function (newValue) {
	        if (newValue !== null && newValue !== undefined) {
	            actionIsEnabled.gesture = newValue;
	
	            return interact;
	        }
	        return actionIsEnabled.gesture;
	    }, 'interact.enableGesturing is deprecated and will soon be removed.');
	
	    interact.eventTypes = eventTypes;
	
	    /*\
	     * interact.debug
	     [ method ]
	     *
	     * Returns debugging data
	     = (object) An object with properties that outline the current state and expose internal functions and variables
	    \*/
	    interact.debug = function () {
	        var interaction = interactions[0] || new Interaction();
	
	        return {
	            interactions          : interactions,
	            target                : interaction.target,
	            dragging              : interaction.dragging,
	            resizing              : interaction.resizing,
	            gesturing             : interaction.gesturing,
	            prepared              : interaction.prepared,
	            matches               : interaction.matches,
	            matchElements         : interaction.matchElements,
	
	            prevCoords            : interaction.prevCoords,
	            startCoords           : interaction.startCoords,
	
	            pointerIds            : interaction.pointerIds,
	            pointers              : interaction.pointers,
	            addPointer            : listeners.addPointer,
	            removePointer         : listeners.removePointer,
	            recordPointer        : listeners.recordPointer,
	
	            snap                  : interaction.snapStatus,
	            restrict              : interaction.restrictStatus,
	            inertia               : interaction.inertiaStatus,
	
	            downTime              : interaction.downTimes[0],
	            downEvent             : interaction.downEvent,
	            downPointer           : interaction.downPointer,
	            prevEvent             : interaction.prevEvent,
	
	            Interactable          : Interactable,
	            interactables         : interactables,
	            pointerIsDown         : interaction.pointerIsDown,
	            defaultOptions        : defaultOptions,
	            defaultActionChecker  : defaultActionChecker,
	
	            actionCursors         : actionCursors,
	            dragMove              : listeners.dragMove,
	            resizeMove            : listeners.resizeMove,
	            gestureMove           : listeners.gestureMove,
	            pointerUp             : listeners.pointerUp,
	            pointerDown           : listeners.pointerDown,
	            pointerMove           : listeners.pointerMove,
	            pointerHover          : listeners.pointerHover,
	
	            eventTypes            : eventTypes,
	
	            events                : events,
	            globalEvents          : globalEvents,
	            delegatedEvents       : delegatedEvents,
	
	            prefixedPropREs       : prefixedPropREs
	        };
	    };
	
	    // expose the functions used to calculate multi-touch properties
	    interact.getPointerAverage = pointerAverage;
	    interact.getTouchBBox     = touchBBox;
	    interact.getTouchDistance = touchDistance;
	    interact.getTouchAngle    = touchAngle;
	
	    interact.getElementRect         = getElementRect;
	    interact.getElementClientRect   = getElementClientRect;
	    interact.matchesSelector        = matchesSelector;
	    interact.closest                = closest;
	
	    /*\
	     * interact.margin
	     [ method ]
	     *
	     * Deprecated. Use `interact(target).resizable({ margin: number });` instead.
	     * Returns or sets the margin for autocheck resizing used in
	     * @Interactable.getAction. That is the distance from the bottom and right
	     * edges of an element clicking in which will start resizing
	     *
	     - newValue (number) #optional
	     = (number | interact) The current margin value or interact
	    \*/
	    interact.margin = warnOnce(function (newvalue) {
	        if (isNumber(newvalue)) {
	            margin = newvalue;
	
	            return interact;
	        }
	        return margin;
	    },
	    'interact.margin is deprecated. Use interact(target).resizable({ margin: number }); instead.') ;
	
	    /*\
	     * interact.supportsTouch
	     [ method ]
	     *
	     = (boolean) Whether or not the browser supports touch input
	    \*/
	    interact.supportsTouch = function () {
	        return supportsTouch;
	    };
	
	    /*\
	     * interact.supportsPointerEvent
	     [ method ]
	     *
	     = (boolean) Whether or not the browser supports PointerEvents
	    \*/
	    interact.supportsPointerEvent = function () {
	        return supportsPointerEvent;
	    };
	
	    /*\
	     * interact.stop
	     [ method ]
	     *
	     * Cancels all interactions (end events are not fired)
	     *
	     - event (Event) An event on which to call preventDefault()
	     = (object) interact
	    \*/
	    interact.stop = function (event) {
	        for (var i = interactions.length - 1; i >= 0; i--) {
	            interactions[i].stop(event);
	        }
	
	        return interact;
	    };
	
	    /*\
	     * interact.dynamicDrop
	     [ method ]
	     *
	     * Returns or sets whether the dimensions of dropzone elements are
	     * calculated on every dragmove or only on dragstart for the default
	     * dropChecker
	     *
	     - newValue (boolean) #optional True to check on each move. False to check only before start
	     = (boolean | interact) The current setting or interact
	    \*/
	    interact.dynamicDrop = function (newValue) {
	        if (isBool(newValue)) {
	            //if (dragging && dynamicDrop !== newValue && !newValue) {
	                //calcRects(dropzones);
	            //}
	
	            dynamicDrop = newValue;
	
	            return interact;
	        }
	        return dynamicDrop;
	    };
	
	    /*\
	     * interact.pointerMoveTolerance
	     [ method ]
	     * Returns or sets the distance the pointer must be moved before an action
	     * sequence occurs. This also affects tolerance for tap events.
	     *
	     - newValue (number) #optional The movement from the start position must be greater than this value
	     = (number | Interactable) The current setting or interact
	    \*/
	    interact.pointerMoveTolerance = function (newValue) {
	        if (isNumber(newValue)) {
	            pointerMoveTolerance = newValue;
	
	            return this;
	        }
	
	        return pointerMoveTolerance;
	    };
	
	    /*\
	     * interact.maxInteractions
	     [ method ]
	     **
	     * Returns or sets the maximum number of concurrent interactions allowed.
	     * By default only 1 interaction is allowed at a time (for backwards
	     * compatibility). To allow multiple interactions on the same Interactables
	     * and elements, you need to enable it in the draggable, resizable and
	     * gesturable `'max'` and `'maxPerElement'` options.
	     **
	     - newValue (number) #optional Any number. newValue <= 0 means no interactions.
	    \*/
	    interact.maxInteractions = function (newValue) {
	        if (isNumber(newValue)) {
	            maxInteractions = newValue;
	
	            return this;
	        }
	
	        return maxInteractions;
	    };
	
	    interact.createSnapGrid = function (grid) {
	        return function (x, y) {
	            var offsetX = 0,
	                offsetY = 0;
	
	            if (isObject(grid.offset)) {
	                offsetX = grid.offset.x;
	                offsetY = grid.offset.y;
	            }
	
	            var gridx = Math.round((x - offsetX) / grid.x),
	                gridy = Math.round((y - offsetY) / grid.y),
	
	                newX = gridx * grid.x + offsetX,
	                newY = gridy * grid.y + offsetY;
	
	            return {
	                x: newX,
	                y: newY,
	                range: grid.range
	            };
	        };
	    };
	
	    function endAllInteractions (event) {
	        for (var i = 0; i < interactions.length; i++) {
	            interactions[i].pointerEnd(event, event);
	        }
	    }
	
	    function listenToDocument (doc) {
	        if (contains(documents, doc)) { return; }
	
	        var win = doc.defaultView || doc.parentWindow;
	
	        // add delegate event listener
	        for (var eventType in delegatedEvents) {
	            events.add(doc, eventType, delegateListener);
	            events.add(doc, eventType, delegateUseCapture, true);
	        }
	
	        if (supportsPointerEvent) {
	            if (PointerEvent === win.MSPointerEvent) {
	                pEventTypes = {
	                    up: 'MSPointerUp', down: 'MSPointerDown', over: 'mouseover',
	                    out: 'mouseout', move: 'MSPointerMove', cancel: 'MSPointerCancel' };
	            }
	            else {
	                pEventTypes = {
	                    up: 'pointerup', down: 'pointerdown', over: 'pointerover',
	                    out: 'pointerout', move: 'pointermove', cancel: 'pointercancel' };
	            }
	
	            events.add(doc, pEventTypes.down  , listeners.selectorDown );
	            events.add(doc, pEventTypes.move  , listeners.pointerMove  );
	            events.add(doc, pEventTypes.over  , listeners.pointerOver  );
	            events.add(doc, pEventTypes.out   , listeners.pointerOut   );
	            events.add(doc, pEventTypes.up    , listeners.pointerUp    );
	            events.add(doc, pEventTypes.cancel, listeners.pointerCancel);
	
	            // autoscroll
	            events.add(doc, pEventTypes.move, listeners.autoScrollMove);
	        }
	        else {
	            events.add(doc, 'mousedown', listeners.selectorDown);
	            events.add(doc, 'mousemove', listeners.pointerMove );
	            events.add(doc, 'mouseup'  , listeners.pointerUp   );
	            events.add(doc, 'mouseover', listeners.pointerOver );
	            events.add(doc, 'mouseout' , listeners.pointerOut  );
	
	            events.add(doc, 'touchstart' , listeners.selectorDown );
	            events.add(doc, 'touchmove'  , listeners.pointerMove  );
	            events.add(doc, 'touchend'   , listeners.pointerUp    );
	            events.add(doc, 'touchcancel', listeners.pointerCancel);
	
	            // autoscroll
	            events.add(doc, 'mousemove', listeners.autoScrollMove);
	            events.add(doc, 'touchmove', listeners.autoScrollMove);
	        }
	
	        events.add(win, 'blur', endAllInteractions);
	
	        try {
	            if (win.frameElement) {
	                var parentDoc = win.frameElement.ownerDocument,
	                    parentWindow = parentDoc.defaultView;
	
	                events.add(parentDoc   , 'mouseup'      , listeners.pointerEnd);
	                events.add(parentDoc   , 'touchend'     , listeners.pointerEnd);
	                events.add(parentDoc   , 'touchcancel'  , listeners.pointerEnd);
	                events.add(parentDoc   , 'pointerup'    , listeners.pointerEnd);
	                events.add(parentDoc   , 'MSPointerUp'  , listeners.pointerEnd);
	                events.add(parentWindow, 'blur'         , endAllInteractions );
	            }
	        }
	        catch (error) {
	            interact.windowParentError = error;
	        }
	
	        // prevent native HTML5 drag on interact.js target elements
	        events.add(doc, 'dragstart', function (event) {
	            for (var i = 0; i < interactions.length; i++) {
	                var interaction = interactions[i];
	
	                if (interaction.element
	                    && (interaction.element === event.target
	                        || nodeContains(interaction.element, event.target))) {
	
	                    interaction.checkAndPreventDefault(event, interaction.target, interaction.element);
	                    return;
	                }
	            }
	        });
	
	        if (events.useAttachEvent) {
	            // For IE's lack of Event#preventDefault
	            events.add(doc, 'selectstart', function (event) {
	                var interaction = interactions[0];
	
	                if (interaction.currentAction()) {
	                    interaction.checkAndPreventDefault(event);
	                }
	            });
	
	            // For IE's bad dblclick event sequence
	            events.add(doc, 'dblclick', doOnInteractions('ie8Dblclick'));
	        }
	
	        documents.push(doc);
	    }
	
	    listenToDocument(document);
	
	    function indexOf (array, target) {
	        for (var i = 0, len = array.length; i < len; i++) {
	            if (array[i] === target) {
	                return i;
	            }
	        }
	
	        return -1;
	    }
	
	    function contains (array, target) {
	        return indexOf(array, target) !== -1;
	    }
	
	    function matchesSelector (element, selector, nodeList) {
	        if (ie8MatchesSelector) {
	            return ie8MatchesSelector(element, selector, nodeList);
	        }
	
	        // remove /deep/ from selectors if shadowDOM polyfill is used
	        if (window !== realWindow) {
	            selector = selector.replace(/\/deep\//g, ' ');
	        }
	
	        return element[prefixedMatchesSelector](selector);
	    }
	
	    function matchesUpTo (element, selector, limit) {
	        while (isElement(element)) {
	            if (matchesSelector(element, selector)) {
	                return true;
	            }
	
	            element = parentElement(element);
	
	            if (element === limit) {
	                return matchesSelector(element, selector);
	            }
	        }
	
	        return false;
	    }
	
	    // For IE8's lack of an Element#matchesSelector
	    // taken from http://tanalin.com/en/blog/2012/12/matches-selector-ie8/ and modified
	    if (!(prefixedMatchesSelector in Element.prototype) || !isFunction(Element.prototype[prefixedMatchesSelector])) {
	        ie8MatchesSelector = function (element, selector, elems) {
	            elems = elems || element.parentNode.querySelectorAll(selector);
	
	            for (var i = 0, len = elems.length; i < len; i++) {
	                if (elems[i] === element) {
	                    return true;
	                }
	            }
	
	            return false;
	        };
	    }
	
	    // requestAnimationFrame polyfill
	    (function() {
	        var lastTime = 0,
	            vendors = ['ms', 'moz', 'webkit', 'o'];
	
	        for(var x = 0; x < vendors.length && !realWindow.requestAnimationFrame; ++x) {
	            reqFrame = realWindow[vendors[x]+'RequestAnimationFrame'];
	            cancelFrame = realWindow[vendors[x]+'CancelAnimationFrame'] || realWindow[vendors[x]+'CancelRequestAnimationFrame'];
	        }
	
	        if (!reqFrame) {
	            reqFrame = function(callback) {
	                var currTime = new Date().getTime(),
	                    timeToCall = Math.max(0, 16 - (currTime - lastTime)),
	                    id = setTimeout(function() { callback(currTime + timeToCall); },
	                  timeToCall);
	                lastTime = currTime + timeToCall;
	                return id;
	            };
	        }
	
	        if (!cancelFrame) {
	            cancelFrame = function(id) {
	                clearTimeout(id);
	            };
	        }
	    }());
	
	    /* global exports: true, module, define */
	
	    // http://documentcloud.github.io/underscore/docs/underscore.html#section-11
	    if (true) {
	        if (typeof module !== 'undefined' && module.exports) {
	            exports = module.exports = interact;
	        }
	        exports.interact = interact;
	    }
	    // AMD
	    else if (typeof define === 'function' && define.amd) {
	        define('interact', function() {
	            return interact;
	        });
	    }
	    else {
	        realWindow.interact = interact;
	    }
	
	} (typeof window === 'undefined'? undefined : window));


/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "\n<div v-el:item\n         class=\"vue-grid-item\"\n         :class=\"{ 'vue-resizable' : isResizable, 'resizing' : isResizing, 'vue-draggable-dragging' : isDragging, 'cssTransforms' : useCssTransforms }\"\n         :style=\"style\"\n    >\n    <slot></slot>\n    <!--<pre>\n        x: {{ x | json}}\n        y: {{ y | json}}\n        w: {{ w | json}}\n        h: {{ h | json}}\n    </pre>-->\n    <span v-if=\"isResizable\" v-el:handle class=\"vue-resizable-handle\"></span>\n</div>\n";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(50)
	__vue_script__ = __webpack_require__(52)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\GridLayout.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(66)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-66d6d8cb/GridLayout.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(51);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./GridLayout.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./GridLayout.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.vue-grid-layout {\n    position: relative;\n    -webkit-transition: height 200ms ease;\n    transition: height 200ms ease;\n}\n", "", {"version":3,"sources":["/./src/GridLayout.vue?f5d44fae"],"names":[],"mappings":";;;;;;;;;;;;;;;;AAgBA;IACA,mBAAA;IACA,sCAAA;IAAA,8BAAA;CACA","file":"GridLayout.vue","sourcesContent":["<template>\r\n    <!--<pre>{{$data|json}}</pre>\r\n    <br/>\r\n    <br/>-->\r\n    <div v-el:item class=\"vue-grid-layout\" :style=\"mergedStyle\">\r\n        <slot></slot>\r\n        <grid-item class=\"vue-grid-placeholder\"\r\n                   v-if=\"isDragging\"\r\n                   :x=\"placeholder.x\"\r\n                   :y=\"placeholder.y\"\r\n                   :w=\"placeholder.w\"\r\n                   :h=\"placeholder.h\"\r\n                   :i=\"placeholder.i\"></grid-item>\r\n    </div>\r\n</template>\r\n<style>\r\n    .vue-grid-layout {\r\n        position: relative;\r\n        transition: height 200ms ease;\r\n    }\r\n</style>\r\n<script>\r\n    var elementResizeDetectorMaker = require(\"element-resize-detector\");\r\n\r\n    import {bottom, compact, getLayoutItem, moveElement, validateLayout} from './utils';\r\n    import GridItem from './GridItem.vue'\r\n\r\n    export default {\r\n        name: \"GridLayout\",\r\n        components: {\r\n            GridItem,\r\n        },\r\n        props: {\r\n            // If true, the container height swells and contracts to fit contents\r\n            autoSize: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n            colNum: {\r\n                type: Number,\r\n                default: 12\r\n            },\r\n            rowHeight: {\r\n                type: Number,\r\n                default: 150\r\n            },\r\n            maxRows: {\r\n                type: Number,\r\n                default: Infinity\r\n            },\r\n            margin: {\r\n                type: Array,\r\n                default: function () {\r\n                    return [10, 10];\r\n                }\r\n            },\r\n            isDraggable: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n            isResizable: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n            useCssTransforms: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n            verticalCompact: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n\r\n            layout: [],\r\n        },\r\n        data: function () {\r\n            return {\r\n                width: null,\r\n                mergedStyle: {},\r\n                lastLayoutLength: 0,\r\n                isDragging: false,\r\n                placeholder: {\r\n                    x: 0,\r\n                    y: 0,\r\n                    w: 0,\r\n                    h: 0,\r\n                    i: 0\r\n                },\r\n            };\r\n        },\r\n        ready() {\r\n            validateLayout(this.layout);\r\n            var self = this;\r\n            this.$nextTick(function() {\r\n                if (self.width === null) {\r\n                    self.onWindowResize();\r\n                    //self.width = self.$el.offsetWidth;\r\n                    window.addEventListener('resize', self.onWindowResize);\r\n                }\r\n                compact(self.layout, self.verticalCompact);\r\n\r\n                self.updateHeight();\r\n                self.$nextTick(function () {\r\n                    var erd = elementResizeDetectorMaker({\r\n                        strategy: \"scroll\" //<- For ultra performance.\r\n                    });\r\n                    erd.listenTo(self.$els.item, function (element) {\r\n                        self.onWindowResize();\r\n                    });\r\n                });\r\n            });\r\n            window.onload = function() {\r\n                if (self.width === null) {\r\n                    self.onWindowResize();\r\n                    //self.width = self.$el.offsetWidth;\r\n                    window.addEventListener('resize', self.onWindowResize);\r\n                }\r\n                compact(self.layout, self.verticalCompact);\r\n\r\n                self.updateHeight();\r\n                self.$nextTick(function () {\r\n                    var erd = elementResizeDetectorMaker({\r\n                        strategy: \"scroll\" //<- For ultra performance.\r\n                    });\r\n                    erd.listenTo(self.$els.item, function (element) {\r\n                        self.onWindowResize();\r\n                    });\r\n                });\r\n\r\n            };\r\n        },\r\n        watch: {\r\n            width: function () {\r\n                this.$nextTick(function () {\r\n                    this.$broadcast(\"updateWidth\", this.width);\r\n                    this.updateHeight();\r\n                });\r\n            },\r\n            layout: function () {\r\n                if (this.layout !== undefined && this.layout.length !== this.lastLayoutLength) {\r\n                    this.lastLayoutLength = this.layout.length;\r\n                    compact(this.layout, this.verticalCompact);\r\n\r\n                    this.$broadcast(\"updateWidth\", this.width);\r\n                    this.updateHeight();\r\n                }\r\n            }\r\n        },\r\n        methods: {\r\n            updateHeight: function () {\r\n                this.mergedStyle = {\r\n                    height: this.containerHeight()\r\n                };\r\n            },\r\n            onWindowResize: function () {\r\n                if (this.$els !== null && this.$els.item !== null) {\r\n                    this.width = this.$els.item.offsetWidth;\r\n                }\r\n            },\r\n            containerHeight: function () {\r\n                if (!this.autoSize) return;\r\n                return bottom(this.layout) * (this.rowHeight + this.margin[1]) + this.margin[1] + 'px';\r\n            }\r\n        },\r\n        events: {\r\n            dragEvent: function (eventName, id, x, y, w, h) {\r\n                if (eventName == \"dragmove\" || eventName == \"dragstart\") {\r\n                    this.isDragging = true;\r\n                    this.placeholder.i = id;\r\n                    this.placeholder.x = x;\r\n                    this.placeholder.y = y;\r\n                    this.placeholder.w = w;\r\n                    this.placeholder.h = h;\r\n                    this.$broadcast(\"updateWidth\", this.width);\r\n                } else {\r\n                    this.isDragging = false;\r\n                }\r\n                //console.log(eventName + \" id=\" + id + \", x=\" + x + \", y=\" + y);\r\n                var l = getLayoutItem(this.layout, id);\r\n                // Move the element to the dragged location.\r\n                this.layout = moveElement(this.layout, l, x, y, true);\r\n                compact(this.layout, this.verticalCompact);\r\n                // needed because vue can't detect changes on array element properties\r\n                this.$broadcast(\"compact\", this.layout);\r\n                this.updateHeight();\r\n            },\r\n            resizeEvent: function (eventName, id, x, y, h, w) {\r\n                if (eventName == \"resizestart\" || eventName == \"resizemove\") {\r\n                    this.isDragging = true;\r\n                    this.placeholder.i = id;\r\n                    this.placeholder.x = x;\r\n                    this.placeholder.y = y;\r\n                    this.placeholder.w = w;\r\n                    this.placeholder.h = h;\r\n                    this.$broadcast(\"updateWidth\", this.width);\r\n                } else {\r\n                    this.isDragging = false;\r\n                }\r\n                compact(this.layout, this.verticalCompact);\r\n                this.$broadcast(\"compact\", this.layout);\r\n                this.updateHeight();\r\n            },\r\n        }\r\n    }\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 52 */
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
	//     <!--<pre>{{$data|json}}</pre>
	//     <br/>
	//     <br/>-->
	//     <div v-el:item class="vue-grid-layout" :style="mergedStyle">
	//         <slot></slot>
	//         <grid-item class="vue-grid-placeholder"
	//                    v-if="isDragging"
	//                    :x="placeholder.x"
	//                    :y="placeholder.y"
	//                    :w="placeholder.w"
	//                    :h="placeholder.h"
	//                    :i="placeholder.i"></grid-item>
	//     </div>
	// </template>
	// <style>
	//     .vue-grid-layout {
	//         position: relative;
	//         transition: height 200ms ease;
	//     }
	// </style>
	// <script>
	var elementResizeDetectorMaker = __webpack_require__(53);
	
	exports.default = {
	    name: "GridLayout",
	    components: {
	        GridItem: _GridItem2.default
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
	        useCssTransforms: {
	            type: Boolean,
	            default: true
	        },
	        verticalCompact: {
	            type: Boolean,
	            default: true
	        },
	
	        layout: []
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
	                i: 0
	            }
	        };
	    },
	    ready: function ready() {
	        (0, _utils.validateLayout)(this.layout);
	        var self = this;
	        this.$nextTick(function () {
	            if (self.width === null) {
	                self.onWindowResize();
	                //self.width = self.$el.offsetWidth;
	                window.addEventListener('resize', self.onWindowResize);
	            }
	            (0, _utils.compact)(self.layout, self.verticalCompact);
	
	            self.updateHeight();
	            self.$nextTick(function () {
	                var erd = elementResizeDetectorMaker({
	                    strategy: "scroll" //<- For ultra performance.
	                });
	                erd.listenTo(self.$els.item, function (element) {
	                    self.onWindowResize();
	                });
	            });
	        });
	        window.onload = function () {
	            if (self.width === null) {
	                self.onWindowResize();
	                //self.width = self.$el.offsetWidth;
	                window.addEventListener('resize', self.onWindowResize);
	            }
	            (0, _utils.compact)(self.layout, self.verticalCompact);
	
	            self.updateHeight();
	            self.$nextTick(function () {
	                var erd = elementResizeDetectorMaker({
	                    strategy: "scroll" //<- For ultra performance.
	                });
	                erd.listenTo(self.$els.item, function (element) {
	                    self.onWindowResize();
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
	
	                this.$broadcast("updateWidth", this.width);
	                this.updateHeight();
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
	        dragEvent: function dragEvent(eventName, id, x, y, w, h) {
	            if (eventName == "dragmove" || eventName == "dragstart") {
	                this.isDragging = true;
	                this.placeholder.i = id;
	                this.placeholder.x = x;
	                this.placeholder.y = y;
	                this.placeholder.w = w;
	                this.placeholder.h = h;
	                this.$broadcast("updateWidth", this.width);
	            } else {
	                this.isDragging = false;
	            }
	            //console.log(eventName + " id=" + id + ", x=" + x + ", y=" + y);
	            var l = (0, _utils.getLayoutItem)(this.layout, id);
	            // Move the element to the dragged location.
	            this.layout = (0, _utils.moveElement)(this.layout, l, x, y, true);
	            (0, _utils.compact)(this.layout, this.verticalCompact);
	            // needed because vue can't detect changes on array element properties
	            this.$broadcast("compact", this.layout);
	            this.updateHeight();
	        },
	        resizeEvent: function resizeEvent(eventName, id, x, y, h, w) {
	            if (eventName == "resizestart" || eventName == "resizemove") {
	                this.isDragging = true;
	                this.placeholder.i = id;
	                this.placeholder.x = x;
	                this.placeholder.y = y;
	                this.placeholder.w = w;
	                this.placeholder.h = h;
	                this.$broadcast("updateWidth", this.width);
	            } else {
	                this.isDragging = false;
	            }
	            (0, _utils.compact)(this.layout, this.verticalCompact);
	            this.$broadcast("compact", this.layout);
	            this.updateHeight();
	        }
	    }
	};
	// </script>
	/* generated by vue-loader */

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var forEach                 = __webpack_require__(54).forEach;
	var elementUtilsMaker       = __webpack_require__(55);
	var listenerHandlerMaker    = __webpack_require__(56);
	var idGeneratorMaker        = __webpack_require__(57);
	var idHandlerMaker          = __webpack_require__(58);
	var reporterMaker           = __webpack_require__(59);
	var browserDetector         = __webpack_require__(60);
	var batchProcessorMaker     = __webpack_require__(61);
	var stateHandler            = __webpack_require__(63);
	
	//Detection strategies.
	var objectStrategyMaker     = __webpack_require__(64);
	var scrollStrategyMaker     = __webpack_require__(65);
	
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


/***/ },
/* 54 */
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
/* 55 */
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
/* 56 */
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


/***/ },
/* 57 */
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
/* 58 */
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
/* 59 */
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
/* 60 */
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var utils = __webpack_require__(62);
	
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
/* 62 */
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
/* 63 */
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Resize detection strategy that injects objects to elements in order to detect resize events.
	 * Heavily inspired by: http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/
	 */
	
	"use strict";
	
	var browserDetector = __webpack_require__(60);
	
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Resize detection strategy that injects divs to elements in order to detect resize events on scroll events.
	 * Heavily inspired by: https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
	 */
	
	"use strict";
	
	var forEach = __webpack_require__(54).forEach;
	
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
	
	                    positionScrollbars(element, width, height);
	                });
	
	                if (done) {
	                    batchProcessor.add(2, function () {
	                        if (!getState(element)) {
	                            debug("Aborting because element has been uninstalled");
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


/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "\n<!--<pre>{{$data|json}}</pre>\n<br/>\n<br/>-->\n<div v-el:item class=\"vue-grid-layout\" :style=\"mergedStyle\">\n    <slot></slot>\n    <grid-item class=\"vue-grid-placeholder\"\n               v-if=\"isDragging\"\n               :x=\"placeholder.x\"\n               :y=\"placeholder.y\"\n               :w=\"placeholder.w\"\n               :h=\"placeholder.h\"\n               :i=\"placeholder.i\"></grid-item>\n</div>\n";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(68)
	__vue_script__ = __webpack_require__(70)
	if (Object.keys(__vue_script__).some(function (key) { return key !== "default" && key !== "__esModule" })) {
	  console.warn("[vue-loader] src\\ResponsiveGridLayout.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(72)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6d0d2fdf/ResponsiveGridLayout.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(69);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ResponsiveGridLayout.vue", function() {
				var newContent = require("!!../node_modules/css-loader/index.js?sourceMap!../node_modules/vue-loader/lib/style-rewriter.js!../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ResponsiveGridLayout.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n.vue-grid-layout {\n    position: relative;\n    -webkit-transition: height 200ms ease;\n    transition: height 200ms ease;\n}\n", "", {"version":3,"sources":["/./src/ResponsiveGridLayout.vue?75ac06a0"],"names":[],"mappings":";;;;;;;;;;;;;AAaA;IACA,mBAAA;IACA,sCAAA;IAAA,8BAAA;CACA","file":"ResponsiveGridLayout.vue","sourcesContent":["<template>\r\n    <!--<pre>{{lastLayoutLength|json}}</pre>\r\n    <pre>{{layout.length|json}}</pre>-->\r\n    <!--<pre>{{breakpoint|json}}</pre>\r\n    <pre>{{layouts|json}}</pre>-->\r\n    <!--<pre>{{layout|json}}</pre>-->\r\n    <!--<pre>width: {{width | json}}</pre>\r\n    <pre>mergedStyle: {{mergedStyle | json}}</pre>-->\r\n    <div v-el:item class=\"vue-grid-layout\" :style=\"mergedStyle\">\r\n        <slot></slot>\r\n    </div>\r\n</template>\r\n<style>\r\n    .vue-grid-layout {\r\n        position: relative;\r\n        transition: height 200ms ease;\r\n    }\r\n</style>\r\n<script>\r\n    var elementResizeDetectorMaker = require(\"element-resize-detector\");\r\n\r\n    import {bottom, compact, getLayoutItem, moveElement, validateLayout, findItemInArray, findAndRemove} from './utils';\r\n    import {getBreakpointFromWidth, getColsFromBreakpoint, findOrGenerateResponsiveLayout, generateResponsiveLayout} from './responsiveUtils';\r\n    import GridItem from './GridItem.vue'\r\n\r\n    export default {\r\n        name: \"ResponsiveGridLayout\",\r\n        components: {\r\n            GridItem,\r\n        },\r\n        props: {\r\n            autoSize: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n            colNum: {\r\n                type: Number,\r\n                required: false,\r\n                default: 0\r\n            },\r\n            rowHeight: {\r\n                type: Number,\r\n                default: 150\r\n            },\r\n            maxRows: {\r\n                type: Number,\r\n                default: Infinity\r\n            },\r\n            // Margin between items [x, y] in px\r\n            margin: {\r\n                type: Array,\r\n                default: function () { return [10, 10]; }\r\n            },\r\n            isDraggable: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n            isResizable: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n            useCssTransforms: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n            verticalCompact: {\r\n                type: Boolean,\r\n                default: true\r\n            },\r\n\r\n            // Optional, but if you are managing width yourself you may want to set the breakpoint\r\n            // yourself as well.\r\n/*\r\n            breakpoint: {\r\n                type: String,\r\n                required: false,\r\n                default: \"lg\"\r\n            },\r\n*/\r\n            // {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}\r\n/*\r\n            breakpoints: {\r\n                type: Object,\r\n                required: false,\r\n                default: function() {return {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}\r\n            },\r\n\r\n            // # of cols. This is a breakpoint -> cols map\r\n            cols: {\r\n                type: Object,\r\n                required: false,\r\n                default: function() {return {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}\r\n            },\r\n*/\r\n\r\n            layout: [],\r\n\r\n        },\r\n        data: function() {\r\n            return {\r\n                originalCols: null,\r\n                width: null,\r\n                mergedStyle: {},\r\n                lastLayoutLength: 0,\r\n            };\r\n        },\r\n        ready() {\r\n            validateLayout(this.layout);\r\n            this.originalCols = this.colNum;\r\n            var self = this;\r\n            window.onload = function() {\r\n                self.onWindowResize();\r\n                //self.width = self.$el.offsetWidth;\r\n                window.addEventListener('resize', self.onWindowResize);\r\n                compact(self.layout, self.verticalCompact);\r\n                self.updateHeight();\r\n                self.$nextTick(function() {\r\n//                    self.onWindowResize();\r\n                    var erd = elementResizeDetectorMaker({\r\n                        strategy: \"scroll\" //<- For ultra performance.\r\n                    });\r\n                    erd.listenTo(self.$els.item, function(element) {\r\n                        self.onWindowResize();\r\n                        /*var width = element.offsetWidth;\r\n                         var height = element.offsetHeight;\r\n                         console.log(\"Size: \" + width + \"x\" + height);*/\r\n                    });\r\n                });\r\n            }\r\n        },\r\n        watch: {\r\n            width: function() {\r\n                if (this.width > 768) {\r\n                    this.colNum = this.originalCols;\r\n                } else {\r\n                    this.colNum = 2;\r\n                }\r\n                this.$nextTick(function() {\r\n                    this.$broadcast(\"updateWidth\", this.width, this.colNum);\r\n                    this.updateHeight();\r\n                    compact(this.layout, this.verticalCompact);\r\n                });\r\n            },\r\n            layout: function() {\r\n                if (this.layout !== undefined && this.layout.length !== this.lastLayoutLength) {\r\n                    this.lastLayoutLength = this.layout.length;\r\n                    compact(this.layout, this.verticalCompact);\r\n\r\n                    //this.$nextTick(function () {\r\n                    this.$broadcast(\"updateWidth\", this.width);\r\n                    this.updateHeight();\r\n                    //});\r\n                }\r\n            }\r\n        },\r\n        methods: {\r\n            onWindowResize: function() {\r\n                if (this.$els !== null && this.$els.item !== null) {\r\n                    this.width = this.$els.item.offsetWidth;\r\n                }\r\n            },\r\n            updateHeight: function() {\r\n                this.mergedStyle = {\r\n                    height: this.containerHeight()\r\n                };\r\n            },\r\n            containerHeight: function() {\r\n                if (!this.autoSize) return;\r\n                return bottom(this.layout) * (this.rowHeight + this.margin[1]) + this.margin[1] + 'px';\r\n            },\r\n        },\r\n        events: {\r\n            dragEvent: function(eventName, id, x, y) {\r\n//                console.log(eventName + \" id=\" + id + \", x=\" + x + \", y=\" + y);\r\n                var l = getLayoutItem(this.layout, id);\r\n                // Move the element to the dragged location.\r\n                this.layout = moveElement(this.layout, l, x, y, true);\r\n                compact(this.layout, this.verticalCompact);\r\n                // needed because vue can't detect changes on array element properties\r\n                this.$broadcast(\"compact\", this.layout);\r\n                this.updateHeight();\r\n            },\r\n            resizeEvent: function(eventName, id, h, w) {\r\n                /*if (eventName === \"drag\" && h < -40 && w < -40) {\r\n                 return;\r\n                 }*/\r\n//                console.log(eventName + \" id=\" + id);\r\n                // Move the element to the dragged location.\r\n                compact(this.layout, this.verticalCompact);\r\n                this.$broadcast(\"compact\", this.layout);\r\n                this.updateHeight();\r\n            },\r\n        }\r\n    }\r\n</script>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(7);
	
	var _responsiveUtils = __webpack_require__(71);
	
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
	var elementResizeDetectorMaker = __webpack_require__(53);
	
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
	        colNum: {
	            type: Number,
	            required: false,
	            default: 0
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
	        /*
	                    breakpoint: {
	                        type: String,
	                        required: false,
	                        default: "lg"
	                    },
	        */
	        // {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}
	        /*
	                    breakpoints: {
	                        type: Object,
	                        required: false,
	                        default: function() {return {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
	                    },
	        
	                    // # of cols. This is a breakpoint -> cols map
	                    cols: {
	                        type: Object,
	                        required: false,
	                        default: function() {return {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
	                    },
	        */
	
	        layout: []
	
	    },
	    data: function data() {
	        return {
	            originalCols: null,
	            width: null,
	            mergedStyle: {},
	            lastLayoutLength: 0
	        };
	    },
	    ready: function ready() {
	        (0, _utils.validateLayout)(this.layout);
	        this.originalCols = this.colNum;
	        var self = this;
	        window.onload = function () {
	            self.onWindowResize();
	            //self.width = self.$el.offsetWidth;
	            window.addEventListener('resize', self.onWindowResize);
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
	            if (this.width > 768) {
	                this.colNum = this.originalCols;
	            } else {
	                this.colNum = 2;
	            }
	            this.$nextTick(function () {
	                this.$broadcast("updateWidth", this.width, this.colNum);
	                this.updateHeight();
	                (0, _utils.compact)(this.layout, this.verticalCompact);
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
	        onWindowResize: function onWindowResize() {
	            if (this.$els !== null && this.$els.item !== null) {
	                this.width = this.$els.item.offsetWidth;
	            }
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
	        dragEvent: function dragEvent(eventName, id, x, y) {
	            //                console.log(eventName + " id=" + id + ", x=" + x + ", y=" + y);
	            var l = (0, _utils.getLayoutItem)(this.layout, id);
	            // Move the element to the dragged location.
	            this.layout = (0, _utils.moveElement)(this.layout, l, x, y, true);
	            (0, _utils.compact)(this.layout, this.verticalCompact);
	            // needed because vue can't detect changes on array element properties
	            this.$broadcast("compact", this.layout);
	            this.updateHeight();
	        },
	        resizeEvent: function resizeEvent(eventName, id, h, w) {
	            /*if (eventName === "drag" && h < -40 && w < -40) {
	             return;
	             }*/
	            //                console.log(eventName + " id=" + id);
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
/* 71 */
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
/* 72 */
/***/ function(module, exports) {

	module.exports = "\n<!--<pre>{{lastLayoutLength|json}}</pre>\n<pre>{{layout.length|json}}</pre>-->\n<!--<pre>{{breakpoint|json}}</pre>\n<pre>{{layouts|json}}</pre>-->\n<!--<pre>{{layout|json}}</pre>-->\n<!--<pre>width: {{width | json}}</pre>\n<pre>mergedStyle: {{mergedStyle | json}}</pre>-->\n<div v-el:item class=\"vue-grid-layout\" :style=\"mergedStyle\">\n    <slot></slot>\n</div>\n";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-grid-layout.js.map
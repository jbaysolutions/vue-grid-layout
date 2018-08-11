# vue-grid-layout

vue-grid-layout is a grid layout system, like [Gridster](http://dsmorse.github.io/gridster.js/), for Vue.js. **Heavily inspired in [React-Grid-Layout](https://github.com/STRML/react-grid-layout)**

### **Current version:** 2.1.13 (Supports Vue 2.2+)

### **For Vue 2.1.10 and below use version [2.1.3](https://github.com/jbaysolutions/vue-grid-layout/tree/2.1.3)**
### **For Vue 1 use version [1.0.3](https://github.com/jbaysolutions/vue-grid-layout/tree/1.0.3)** 

<br/>

[**[Demo](https://jbaysolutions.github.io/vue-grid-layout/examples/01-basic.html) | [Changelog](/CHANGELOG.md)**]

<!--
## Table of Contents

- [Demos](#demos)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [TODO List](#todo-list)

## Demos


TODO UPDATE DOCS
-->

#### Projects using vue-grid-layout

- [Draxed](https://www.draxed.com/?utm_source=github&utm_medium=web&utm_campaign=vue-grid-layout)

*Know of others? Create a PR to let me know!*

## Features

* Draggable widgets
* Resizable widgets
* Bounds checking for dragging and resizing
* Widgets may be added or removed without rebuilding grid
* Layout can be serialized and restored
* Automatic RTL support


## Getting Started

### Installation

Install the vue-grid-layout [package](https://www.npmjs.org/package/vue-grid-layout) package using [npm](https://www.npmjs.com/):

	npm install vue-grid-layout


### Usage

    npm install vue-grid-layout

or include the script in your html (download from [releases](https://github.com/jbaysolutions/vue-grid-layout/releases)):
 
```html
    <script src="vue-grid-layout.min.js"></script>
```` 

```javascript

	var testLayout = [
	    {"x":0,"y":0,"w":2,"h":2,"i":"0"},
	    {"x":2,"y":0,"w":2,"h":4,"i":"1"},
	    {"x":4,"y":0,"w":2,"h":5,"i":"2"},
	    {"x":6,"y":0,"w":2,"h":3,"i":"3"},
	    {"x":8,"y":0,"w":2,"h":3,"i":"4"},
	    {"x":10,"y":0,"w":2,"h":3,"i":"5"},
	    {"x":0,"y":5,"w":2,"h":5,"i":"6"},
	    {"x":2,"y":5,"w":2,"h":5,"i":"7"},
	    {"x":4,"y":5,"w":2,"h":5,"i":"8"},
	    {"x":6,"y":4,"w":2,"h":4,"i":"9"},
	    {"x":8,"y":4,"w":2,"h":4,"i":"10"},
	    {"x":10,"y":4,"w":2,"h":4,"i":"11"},
	    {"x":0,"y":10,"w":2,"h":5,"i":"12"},
	    {"x":2,"y":10,"w":2,"h":5,"i":"13"},
	    {"x":4,"y":8,"w":2,"h":4,"i":"14"},
	    {"x":6,"y":8,"w":2,"h":4,"i":"15"},
	    {"x":8,"y":10,"w":2,"h":5,"i":"16"},
	    {"x":10,"y":4,"w":2,"h":2,"i":"17"},
	    {"x":0,"y":9,"w":2,"h":3,"i":"18"},
	    {"x":2,"y":6,"w":2,"h":2,"i":"19"}
	];
	
	var GridLayout = VueGridLayout.GridLayout;
	var GridItem = VueGridLayout.GridItem;
	
	new Vue({
	    el: '#app',
	    components: {
	        GridLayout,
	        GridItem,
	    },
	    data: {
	        layout: testLayout,
	    },
	});
```` 


````html

    <grid-layout
            :layout="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
            :fixed-width="false"
    >

        <grid-item v-for="item in layout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i">
            {{item.i}}
        </grid-item>
    </grid-layout>
```` 


### Documentation

#### Properties

##### GridLayout

* **layout**
    
    * type: `Array`
    * required: `true`

    This is the initial layout of the grid.

    The value must be an `Array` of `Object` items. Each item must have `i`, `x`, `y`, `w` and `h` proprties. Please refer to `GridItem` documentation below for more informations.

* **colNum**
    
    * type: `Number`
    * required: `false`
    * default: `12`

    Says how many columns the grid has.

    The value should be a _natural number_. 

* **rowHeight**
    
    * type: `Number`
    * required: `false`
    * default: `150`

    Says what is a height of a single row in pixels.

* **maxRows**
    
    * type: `Number`
    * required: `false`
    * default: `Infinity`

    Says what is a maximal number of rows in the grid.

* **margin**
    
    * type: `Array`
    * required: `false`
    * default: `[10, 10]`

    Says what are the margins of elements inside the grid.

    The value must be a two-element `Array` of `Number`. Each value is expressed in pixels. The first element is a margin horizontally, the second element is a vertical margin.

* **isDraggable**
    
    * type: `Boolean`
    * required: `false`
    * default: `true`

    Says if the grids items are draggable.

* **isResizable**
    
    * type: `Boolean`
    * required: `false`
    * default: `true`

    Says if the grids items are resizable.

* **isMirrored**
    
    * type: `Boolean`
    * required: `false`
    * default: `false`

    Says if the RTL/LTR should be reversed.

* **autoSize**
    
    * type: `Boolean`
    * required: `false`
    * default: `true`

    Says if the container height should swells and contracts to fit contents.

* **verticalCompact**
    
    * type: `Boolean`
    * required: `false`
    * default: `true`

    Says if the layout should be compact vertically.

* **useCssTransforms**
    
    * type: `Boolean`
    * required: `false`
    * default: `true`

    Says if the CSS `transition-property: transform;` should be used.

* **fixedWidth**
    
    * type: `Boolean`
    * required: `false`
    * default: `false`

    Says if the elements should have fixed width. If true the width will be same as rowHeight.


##### GridItem

* **i**
    
    * type: `String`
    * required: `true`

    This is the unique identifier of the item.

* **x**
    
    * type: `Number`
    * required: `true`

    Says what is a initial horizontal position of the item (in which column it should be placed).

    The value must be a _whole number_. 

* **y**
    
    * type: `Number`
    * required: `true`

    Says what is a initial vertical position of the item (in which row it should be placed).

    The value must be a _whole number_. 

* **w**
    
    * type: `Number`
    * required: `true`

    Says what is a initial width of the item.

    The value is a number that is multiplied by `colWidth`.

* **h**
    
    * type: `Number`
    * required: `true`

    Says what is a initial height of the item.

    The value is a number that is multiplied by `rowHeight`.

* **minW**
    
    * type: `Number`
    * required: `false`
    * default: `1`

    Says what is a minimal width of the item. If `w` will be smaller then `minW` then `w` will be set to `minW`.

    The value is a number that is multiplied by `colWidth`.

* **minH**
    
    * type: `Number`
    * required: `false`
    * default: `1`

    Says what is a minimal hieght of the item. If `h` will be smaller then `minH` then `h` will be set to `minH`.

    The value is a number that is multiplied by `rowHeight`.

* **maxW**
    
    * type: `Number`
    * required: `false`
    * default: `Infinity`

    Says what is a maximal width of the item. If `w` will be bigger then `maxW` then `w` will be set to `maxW`.

    The value is a number that is multiplied by `colWidth`.

* **maxH**
    
    * type: `Number`
    * required: `false`
    * default: `Infinity`

    Says what is a maximal height of the item. If `h` will be bigger then `maxH` then `h` will be set to `maxH`.

    The value is a number that is multiplied by `rowHeight`

* **isDraggable**
    
    * type: `Boolean`
    * required: `false`
    * default: `null`

    Says if item is draggable.

    If default value is `null` then it's inherited from parent.

* **isResizable**
    
    * type: `Boolean`
    * required: `false`
    * default: `null`

    Says if item is resizable.

    If default value is `null` then it's inherited from parent.

* **dragIgnoreFrom**
    
    * type: `String`
    * required: `false`
    * default: `'a, button'`

    Says which elements of the item shouldn't trigger drag event of the item.

    The value is `css-like` selector string.

    For more info please refer to `ignoreFrom` in [interact.js docs](http://interactjs.io/docs/#ignorable-selectors).

* **dragAllowFrom**
    
    * type: `String`
    * required: `false`
    * default: `null`

    Says which elements of the item should trigger drag event of the item.

    The value is `css-like` selector string.
    
    If `null` then one can drag by any (excluding `dragIgnoreFrom`) element of the item.

    For more info please refer to `allowFrom` in [interact.js docs](http://interactjs.io/docs/#ignorable-selectors).

* **resizeIgnoreFrom**
    
    * type: `String`
    * required: `false`
    * default: `'a, button'`

    Says which elements of the item shouldn't trigger resize event of the item.

    The value is `css-like` selector string.

    For more info please refer to `ignoreFrom` in [interact.js docs](http://interactjs.io/docs/#ignorable-selectors).



#### Events

Move and resize event listeners can be added to each grid-item, so that the parent Vue can be notified when a grid element is being moved or resized.
Moved and resized event listeners can be added, if the only notification needed is when an item is finished moving or resizing.

Working example [here](https://jbaysolutions.github.io/vue-grid-layout/examples/02-events.html)   

````html

    <grid-layout
            :layout="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
            @layout-updated="layoutUpdatedEvent"
    >

        <grid-item v-for="item in layout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   @resize="resizeEvent"
                   @move="moveEvent"
                   @resized="resizedEvent"
                   @moved="movedEvent">
            {{item.i}}
        </grid-item>
    </grid-layout>
```` 

* **layoutUpdatedEvent**

    Layout updated event

    Every time the layout has finished updating and positions of all grid-items are recalculated

```javascript
    layoutUpdatedEvent: function(newLayout){
      console.log("Updated layout: ", newLayout)
    }
```

* **moveEvent**

    Move event

    Every time an item is being moved and changes position

```javascript
    moveEvent: function(i, newX, newY){
        console.log("MOVE i=" + i + ", X=" + newX + ", Y=" + newY);
    },
```

* **resizeEvent**

    Resize event

    Every time an item is being resized and changes size
 
```javascript
    resizeEvent: function(i, newH, newW, newHPx, newWPx){
        console.log("RESIZE i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
    },
``` 

* **movedEvent**

    Moved event

    Every time an item is finished being moved and changes position

```javascript
    movedEvent: function(i, newX, newY){
        console.log("MOVED i=" + i + ", X=" + newX + ", Y=" + newY);
    },
```

* **resizedEvent**

    Resized event

    Every time an item is finished being resized and changes size
 
```javascript
    /**
     * 
     * @param i the item id/index
     * @param newH new height in grid rows 
     * @param newW new width in grid columns
     * @param newHPx new height in pixels
     * @param newWPx new width in pixels
     * 
     */
    resizedEvent: function(i, newH, newW, newHPx, newWPx){
        console.log("RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
    },
``` 


## Contribute

If you have a feature request, please add it as an issue or make a pull request.


## TODO List

- [x] Basic grid layout
- [ ] Responsive
- [x] Draggable grid items
- [x] Resizable grid items
- [ ] Static elements
- [x] Min/max w/h per item

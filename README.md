# vue-grid-layout

**WORK IN PROGRESS: USE AT YOUR OWN RISK!**

vue-grid-layout is a grid layout system, like [Gridster](http://gridster.net), for Vue.js.

**Heavily inspired in [React-Grid-Layout](https://github.com/STRML/react-grid-layout)**

[**[Demo](https://jbaysolutions.github.io/vue-grid-layout/examples/1-basic.html) | [Changelog](/CHANGELOG.md)**]

<!--
## Table of Contents

- [Demos](#demos)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [TODO List](#todo-list)

## Demos


-->

#### Projects based on vue-grid-layout

- [Draxed](https://www.draxed.com/?utm_source=github&utm_medium=web&utm_campaign=vue-grid-layout)

*Know of others? Create a PR to let me know!*

## Features

* Draggable widgets
* Resizable widgets
* Bounds checking for dragging and resizing
* Widgets may be added or removed without rebuilding grid
* Layout can be serialized and restored


## Installation

Install the vue-grid-layout [package](https://www.npmjs.org/package/vue-grid-layout) package using [npm](https://www.npmjs.com/):

	npm install react-grid-layout


## Usage

npm install react-grid-layout

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
            :layout.sync="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
    >

        <grid-item v-for="item in layout"
                   :x.sync="item.x"
                   :y.sync="item.y"
                   :w.sync="item.w"
                   :h.sync="item.h"
                   :i="item.i">
            {{item.i}}
        </grid-item>
    </grid-layout>
```` 


## Contribute

If you have a feature request, please add it as an issue or make a pull request.


## TODO List

- [x] Basic grid layout
- [ ] Responsive
- [x] Draggable grid items
- [x] Resizable grid items
- [ ] Static elements
- [x] Min/max w/h per item
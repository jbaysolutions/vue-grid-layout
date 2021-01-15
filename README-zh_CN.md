<h1 align="center">vue-grid-layout</h1>

<p align="center">
<a href="https://www.npmjs.com/package/vue-grid-layout"><img src="https://img.shields.io/npm/v/vue-grid-layout.svg"/> <img src="https://img.shields.io/npm/dm/vue-grid-layout.svg"/></a> <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/vue-2.2.x-brightgreen.svg"/></a>
</p>

vue-grid-layout是一个类似于[Gridster](http://dsmorse.github.io/gridster.js/)的栅格布局系统, 适用于Vue.js。 **灵感源自于 [React-Grid-Layout](https://github.com/STRML/react-grid-layout)**

### **当前版本:** 2.3.11 (支持 Vue 2.2+)

### **Vue 2.1.10 及以下请使用 [2.1.3](https://github.com/jbaysolutions/vue-grid-layout/tree/2.1.3)**
### **Vue 1 请使用 [1.0.3](https://github.com/jbaysolutions/vue-grid-layout/tree/1.0.3)**

<br/>

[**[在线演示](https://jbaysolutions.github.io/vue-grid-layout/examples/01-basic.html) | [更新日志](/CHANGELOG.md)**]

[English](./README.md) | 简体中文

<!--
## Table of Contents

- [特性](#%e7%89%b9%e6%80%a7)
- [入门指南](#%e5%85%a5%e9%97%a8%e6%8c%87%e5%8d%97)
  - [安装](#%e5%ae%89%e8%a3%85)
    - [npm](#npm)
- [如何贡献](#%e5%a6%82%e4%bd%95%e8%b4%a1%e7%8c%ae)
- [待办事项](#%e5%be%85%e5%8a%9e%e4%ba%8b%e9%a1%b9)

## Demos


TODO UPDATE DOCS

Used guide for vue cli build: https://medium.com/justfrontendthings/how-to-create-and-publish-your-own-vuejs-component-library-on-npm-using-vue-cli-28e60943eed3
Also check https://cli.vuejs.org/guide/build-targets.html#library

-->

#### 成功案例

- [Draxed](https://www.draxed.com/?utm_source=github&utm_medium=web&utm_campaign=vue-grid-layout)
- [cryptotiles](https://www.cryptotiles.io/?utm_source=github&utm_medium=web&utm_campaign=vue-grid-layout)
- [Data Providers](https://www.dataproviders.io/?utm_source=github&utm_medium=web&utm_campaign=vue-grid-layout)
- [Cataholic](https://cataholic.glitch.me/)

*您还知悉其他项目? 请创建一个PR，谢谢!*

## 特性

* 可拖拽
* 可调整大小
* 静态部件（不可拖拽、调整大小）
* 拖拽和调整大小时进行边界检查
* 增减部件时避免重建栅格
* 可序列化和还原的布局
* 自动化 RTL 支持
* 响应式


## 入门指南

### 安装

#### npm

    # 使用 npm
	npm install vue-grid-layout --save

    # 使用 yarn
    yarn add vue-grid-layout


引入

```javascript
    import VueGridLayout from 'vue-grid-layout';
```

加入到 Vue 组件

 ```javascript
    export default {
        components: {
            GridLayout: VueGridLayout.GridLayout,
            GridItem: VueGridLayout.GridItem
        },
    // ... data, methods, mounted (), etc.
    }

```

#### 浏览器

在页面中使用已打包好的 [文件](https://github.com/jbaysolutions/vue-grid-layout/releases)。 此时组件已为可用状态。

```html
    <script src="vue-grid-layout.umd.min.js"></script>
```

### 使用

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
	    {"x":6,"y":3,"w":2,"h":4,"i":"9"},
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

	new Vue({
	    el: '#app',
	    data: {
	        layout: testLayout,
	    },
	});
```


```html

    <grid-layout
            :layout.sync="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
    >

        <grid-item v-for="item in layout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :key="item.i">
            {{item.i}}
        </grid-item>
    </grid-layout>
```


### 文档

#### 属性

##### GridLayout

* **layout**

    * type: `Array`
    * required: `true`

    数据源。值必须为 `Array`，其数据项为 `Object`。 每条数据项必须有 `i`, `x`, `y`, `w` 和 `h` 属性。 请参考下面的 `GridItem`。

* **responsiveLayouts**

    * type: `Object`
    * required: `false`
    * default: `{}`

    如果 `responsive` 设置为 `true`，该配置将作为栅格中每个断点的初始布局。键值是断点名称，每项的值都是类似 `layout` 属性定义的数据结构，值必须为 `Array`，其数据项为 `Object`。例如： `{lg: [layout items], md: [layout items]}`。需要注意的是，在创建栅格布局后设置该属性无效。

* **colNum**

    * type: `Number`
    * required: `false`
    * default: `12`

    定义栅格系统的列数，其值需为自然数。

* **rowHeight**

    * type: `Number`
    * required: `false`
    * default: `150`

    每行的高度，单位像素。

* **maxRows**

    * type: `Number`
    * required: `false`
    * default: `Infinity`

    定义最大行数。

* **margin**

    * type: `Array`
    * required: `false`
    * default: `[10, 10]`

    定义栅格中的元素边距。

    值必须是包含两个 `Number`的数组，数组中第一个元素表示水平边距，第二个表示垂直边距，单位为像素。

* **isDraggable**

    * type: `Boolean`
    * required: `false`
    * default: `true`

    标识栅格中的元素是否可拖拽。

* **isResizable**

    * type: `Boolean`
    * required: `false`
    * default: `true`

    标识栅格中的元素是否可调整大小。

* **isMirrored**

    * type: `Boolean`
    * required: `false`
    * default: `false`

    标识栅格中的元素是否可镜像反转。

* **autoSize**

    * type: `Boolean`
    * required: `false`
    * default: `true`

    标识容器是否自动调整大小。

* **verticalCompact**

    * type: `Boolean`
    * required: `false`
    * default: `true`

    标识布局是否垂直压缩。

* **useCssTransforms**

    * type: `Boolean`
    * required: `false`
    * default: `true`

    标识是否使用CSS属性 `transition-property: transform;`。

* **responsive**

    * type: `Boolean`
    * required: `false`
    * default: `false`

    标识布局是否为响应式。

* **breakpoints**

    * type: `Object`
    * required: `false`
    * default: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }

    为响应式布局设置断点，其中参数代表不同设备的宽度：lg（large），md（medium），sm（small），xs（extra small）。

* **cols**

    * type: `Object`
    * required: `false`
    * default: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }

    设置每个断点对应的列数。

* **useStyleCursor**

    * type: `Boolean`
    * required: `false`
    * default: `true`

    标识是否使用动态鼠标指针样式。当拖动出现卡顿时，将此值设为 `false`也许可以缓解布局问题。

 * **preventCollision**

    * type: `Boolean`
    * default: `false`

    值设置为ture时，栅格只能拖动至空白处。

##### GridItem

* **i**

    * type: `String`
    * required: `true`

    栅格中元素的ID。

* **x**

    * type: `Number`
    * required: `true`

    标识栅格元素位于第几列，需为自然数。

* **y**

    * type: `Number`
    * required: `true`

    标识栅格元素位于第几行，需为自然数。

* **w**

    * type: `Number`
    * required: `true`

    标识栅格元素的初始宽度，值为`colWidth`的倍数。

* **h**

    * type: `Number`
    * required: `true`

    标识栅格元素的初始高度，值为`rowHeight`的倍数。

* **minW**

    * type: `Number`
    * required: `false`
    * default: `1`

    栅格元素的最小宽度，值为`colWidth`的倍数。

    如果`w`小于`minW`，则`minW`的值会被`w`覆盖。

* **minH**

    * type: `Number`
    * required: `false`
    * default: `1`

    栅格元素的最小高度，值为`rowHeight`的倍数。

    如果`h`小于`minH`，则`minH`的值会被`h`覆盖。

* **maxW**

    * type: `Number`
    * required: `false`
    * default: `Infinity`

    栅格元素的最大宽度，值为`colWidth`的倍数。

    如果`w`大于`maxW`，则`maxW`的值会被`w`覆盖。

* **maxH**

    * type: `Number`
    * required: `false`
    * default: `Infinity`

    栅格元素的最大高度，值为`rowHeight`的倍数。

    如果`h`大于`maxH`，则`maxH`的值会被`h`覆盖。

* **isDraggable**

    * type: `Boolean`
    * required: `false`
    * default: `null`

    标识栅格元素是否可拖拽。如果值为`null`则取决于父容器。

* **isResizable**

    * type: `Boolean`
    * required: `false`
    * default: `null`

    标识栅格元素是否可调整大小。如果值为`null`则取决于父容器。

* **static**

    * type: `Boolean`
    * required: `false`
    * default: `false`

    标识栅格元素是否为静态的（无法拖拽、调整大小或被其他元素移动）。

* **dragIgnoreFrom**

    * type: `String`
    * required: `false`
    * default: `'a, button'`

    标识栅格元素中哪些子元素无法触发拖拽事件，值为`css-like`选择器。

    请参考 [interact.js docs](http://interactjs.io/docs/#ignorable-selectors)中的`ignoreFrom`。

* **dragAllowFrom**

    * type: `String`
    * required: `false`
    * default: `null`

    标识栅格元素中哪些子元素可以触发拖拽事件，值为`css-like`选择器。

    如果值为`null`则表示所有子元素（`dragIgnoreFrom`的除外）。

    请参考 [interact.js docs](http://interactjs.io/docs/#ignorable-selectors)中的`allowFrom`。

* **resizeIgnoreFrom**

    * type: `String`
    * required: `false`
    * default: `'a, button'`

    标识栅格元素中哪些子元素无法触发调整大小的事件，值为`css-like`选择器。

    请参考 [interact.js docs](http://interactjs.io/docs/#ignorable-selectors)中的`ignoreFrom`。



#### 事件

每一个栅格元素`grid-item`上都可以添加监听器，用于监听移动和调整大小事件，这样父级Vue对象就可以收到通知。

 [示例](https://jbaysolutions.github.io/vue-grid-layout/examples/02-events.html)

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
            @layout-created="layoutCreatedEvent"
            @layout-before-mount="layoutBeforeMountEvent"
            @layout-mounted="layoutMountedEvent"
            @layout-ready="layoutReadyEvent"
            @layout-updated="layoutUpdatedEvent"
    >

        <grid-item v-for="item in layout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :key="item.i"
                   @resize="resizeEvent"
                   @move="moveEvent"
                   @resized="resizedEvent"
                   @moved="movedEvent">
            {{item.i}}
        </grid-item>
    </grid-layout>
````

* **layoutCreatedEvent**

    对应Vue生命周期的`created`

```javascript
    layoutCreatedEvent: function(newLayout){
      console.log("Created layout: ", newLayout)
    }
```

* **layoutBeforeMountEvent**

    对应Vue生命周期的`beforeMount`

```javascript
    layoutBeforeMountEvent: function(newLayout){
      console.log("beforeMount layout: ", newLayout)
    }
```

* **layoutMountedEvent**

    对应Vue生命周期的`mounted`

```javascript
    layoutMountedEvent: function(newLayout){
      console.log("Mounted layout: ", newLayout)
    }
```

* **layoutReadyEvent**

    当完成mount中的所有操作时生成的事件

```javascript
    layoutReadyEvent: function(newLayout){
      console.log("Ready layout: ", newLayout)
    }
```

* **layoutUpdatedEvent**

    更新事件（布局更新或栅格元素的位置重新计算）

```javascript
    layoutUpdatedEvent: function(newLayout){
      console.log("Updated layout: ", newLayout)
    }
```

* **moveEvent**

    移动时的事件

```javascript
    moveEvent: function(i, newX, newY){
        console.log("MOVE i=" + i + ", X=" + newX + ", Y=" + newY);
    },
```

* **resizeEvent**

    调整大小时的事件

```javascript
    resizeEvent: function(i, newH, newW, newHPx, newWPx){
        console.log("RESIZE i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
    },
```

* **movedEvent**

    移动后的事件

```javascript
    movedEvent: function(i, newX, newY){
        console.log("MOVED i=" + i + ", X=" + newX + ", Y=" + newY);
    },
```

* **resizedEvent**

    调整大小后的事件

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


## 如何贡献

请提交issue或PR。


## 待办事项

- [x] 基础栅格布局
- [x] 响应式
- [x] 可拖拽的栅格元素
- [x] 可调整大小的栅格元素
- [x] 静态元素
- [x] 每个元素的Min/max w/h

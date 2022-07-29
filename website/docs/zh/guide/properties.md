# 属性

## GridLayout

### layout

   
* type: `Array`
* required: `true`

这是栅格的初始布局。

数据源。值必须为 `Array`，其数据项为 `Object`。 每条数据项必须有 `i, x, y, w 和 h` 属性。 请参考下面的 `GridItem`。

### responsiveLayouts

* type: `Object`
* required: `false`
* default : `{}`

如果 `responsive` 设置为 `true`，该配置将作为栅格中每个断点的初始布局。键值是断点名称，每项的值都是类似 `layout` 属性定义的数据结构，值必须为 `Array`，其数据项为 `Object`。例如： `{lg: [layout items], md: [layout items]}`。需要注意的是，在创建栅格布局后设置该属性无效。
在创建GridLayout之后设置prop无效。

可以查看 [responsive](#responsive), [breakpoints](#breakpoints) 和 [cols](#cols)

### colNum
    
* type: `Number`
* required: `false`
* default: `12`

定义栅格系统的列数，其值需为自然数。

### rowHeight
    
* type: `Number`
* required: `false`
* default: `150`

每行的高度，单位像素。

### maxRows
    
* type: `Number`
* required: `false`
* default: `Infinity`

定义最大行数。

### margin
    
* type: `Array`
* required: `false`
* default: `[10, 10]`

定义栅格中的元素边距。

值必须是包含两个 `Number`的数组，数组中第一个元素表示水平边距，第二个表示垂直边距，单位为像素。

### isDraggable
    
* type: `Boolean`
* required: `false`
* default: `true`

标识栅格中的元素是否可拖拽。

### isResizable
    
* type: `Boolean`
* required: `false`
* default: `true`

标识栅格中的元素是否可调整大小。

### isMirrored
    
* type: `Boolean`
* required: `false`
* default: `false`

标识栅格中的元素是否可镜像反转。

### autoSize
    
* type: `Boolean`
* required: `false`
* default: `true`

标识容器是否自动调整大小。

### verticalCompact
    
* type: `Boolean`
* required: `false`
* default: `true`

标识布局是否垂直压缩。

### preventCollision
    
* type: `Boolean`
* required: `false`
* default: `false`

防止碰撞属性，值设置为`ture`时，栅格只能拖动至空白处。

### useCssTransforms
    
* type: `Boolean`
* required: `false`
* default: `true`

标识是否使用CSS属性 `transition-property: transform;`。

### responsive
    
* type: `Boolean`
* required: `false`
* default: `false`

标识布局是否为响应式。

可以查看 [responsiveLayouts](#responsivelayouts)、[breakpoints](#breakpoints)和 [cols](#cols)


### breakpoints

* type: `Object`
* required: `false`
* default: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }

为响应式布局设置断点。

可以查看 [responsiveLayouts](#responsivelayouts) 和 [cols](#cols)

### cols

* type: `Object`
* required: `false`
* default: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }

设置每个断点对应的列数。

### useStyleCursor

* type: `Boolean`
* required: `false`
* default: `true`

标识是否使用动态鼠标指针样式。当拖动出现卡顿时，将此值设为 `false`也许可以缓解布局问题。 
**此属性无效**

## GridItem

### i
    
* type: `String`
* required: `true`

栅格中元素的ID。

### x
    
* type: `Number`
* required: `true`

标识栅格元素位于第几列，需为自然数。

### y
    
* type: `Number`
* required: `true`

标识栅格元素位于第几行，需为自然数。

### w
    
* type: `Number`
* required: `true`

标识栅格元素的初始宽度，值为`colWidth`的倍数。

### h
    
* type: `Number`
* required: `true`

标识栅格元素的初始高度，值为`rowHeight`的倍数。

### minW
    
* type: `Number`
* required: `false`
* default: `1`

栅格元素的最小宽度，值为`colWidth`的倍数。

如果`w`小于`minW`，则`minW`的值会被`w`覆盖。

### minH
    
* type: `Number`
* required: `false`
* default: `1`

栅格元素的最小高度，值为`rowHeight`的倍数。

如果`h`小于`minH`，则`minH`的值会被h覆盖。

### maxW
    
* type: `Number`
* required: `false`
* default: `Infinity`

栅格元素的最大宽度，值为`colWidth`的倍数。

如果`w`大于`maxW`，则`maxW`的值会被`w`覆盖。

### maxH
    
* type: `Number`
* required: `false`
* default: `Infinity`

栅格元素的最大高度，值为`rowHeight`的倍数。

如果`h`大于`maxH`，则`maxH`的值会被`h`覆盖。

### isDraggable
    
* type: `Boolean`
* required: `false`
* default: `null`

标识栅格元素是否可拖拽。如果值为`null`则取决于父容器。

### isResizable
    
* type: `Boolean`
* required: `false`
* default: `null`

标识栅格元素是否可调整大小。如果值为`null`则取决于父容器。

### static
    
* type: `Boolean`
* required: `false`
* default: `false`

标识栅格元素是否为静态的（无法拖拽、调整大小或被其他元素移动）。

### dragIgnoreFrom

* type: `String`
* required: `false`
* default: `'a, button'`

标识栅格元素中哪些子元素无法触发拖拽事件，值为`css-like`选择器。

请参考[interact.js docs](http://interactjs.io/docs/#ignorable-selectors)中的`ignoreFrom`。

### dragAllowFrom
    
* type: `String`
* required: `false`
* default: `null`

标识栅格元素中哪些子元素可以触发拖拽事件，值为`css-like`选择器。

如果值为`null`则表示所有子元素（`dragIgnoreFrom`的除外）。

请参考[interact.js docs](http://interactjs.io/docs/#ignorable-selectors)中的`allowFrom`。

### resizeIgnoreFrom
    
* type: `String`
* required: `false`
* default: `'a, button'`

标识栅格元素中哪些子元素无法触发调整大小的事件，值为`css-like`选择器。

请参考[interact.js docs](http://interactjs.io/docs/#ignorable-selectors)中的`ignoreFrom`。

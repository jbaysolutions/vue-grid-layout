# Properties

## GridLayout

### layout

   
* type: `Array`
* required: `true`

This is the initial layout of the grid.

The value must be an `Array` of `Object` items. Each item must have `i`, `x`, `y`, `w` and `h` properties. Please refer to the documentation for `GridItem` below for more information.

### responsiveLayouts

* type: `Object`
* required: `false`
* default : `{}`

This is the initial layouts of the grid per breakpoint if `responsive` is set to `true`.
The keys of the `Object` are breakpoint names and each value is an `Array` of `Object` items as defined by `layout` prop. eg:{ lg:[layout items], md:[layout items] }.
Setting the prop after the creation of the GridLayout has no effect.

See also [responsive](#responsive), [breakpoints](#breakpoints) and [cols](#cols)

### colNum
    
* type: `Number`
* required: `false`
* default: `12`

Says how many columns the grid has.

The value should be a _natural number_. 

### rowHeight
    
* type: `Number`
* required: `false`
* default: `150`

Says what is a height of a single row in pixels.

### maxRows
    
* type: `Number`
* required: `false`
* default: `Infinity`

Says what is a maximal number of rows in the grid.

### margin
    
* type: `Array`
* required: `false`
* default: `[10, 10]`

Says what are the margins of elements inside the grid.

The value must be a two-element `Array` of `Number`. Each value is expressed in pixels. The first element is a margin horizontally, the second element is a vertical margin.

### isDraggable
    
* type: `Boolean`
* required: `false`
* default: `true`

Says if the grids items are draggable.

### isResizable
    
* type: `Boolean`
* required: `false`
* default: `true`

Says if the grids items are resizable.

### isMirrored
    
* type: `Boolean`
* required: `false`
* default: `false`

Says if the RTL/LTR should be reversed.

### autoSize
    
* type: `Boolean`
* required: `false`
* default: `true`

Says if the container height should swells and contracts to fit contents.

### verticalCompact
    
* type: `Boolean`
* required: `false`
* default: `true`

Says if the layout should be compact vertically.

### preventCollision
    
* type: `Boolean`
* required: `false`
* default: `false`

Says if grid items will move when being dragged over.

### useCssTransforms
    
* type: `Boolean`
* required: `false`
* default: `true`

Says if the CSS `transition-property: transform;` should be used.

### responsive
    
* type: `Boolean`
* required: `false`
* default: `false`

Says if the layout should be responsive to window width

See also [responsiveLayouts](#responsivelayouts), [breakpoints](#breakpoints) and [cols](#cols)


### breakpoints

* type: `Object`
* required: `false`
* default: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }

Breakpoints defined for responsive layout, the parameter represents the width of different devices:lg(large), md(medium), sm(small), xs(extra small). Sets widths on wich column number changes

See also [responsiveLayouts](#responsivelayouts) and [cols](#cols)

### cols

* type: `Object`
* required: `false`
* default: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }

Defines number of columns for each breakpoint

### useStyleCursor

* type: `Boolean`
* required: `false`
* default: `true`

Says if set the `styleCursor` option to true. When dragging freezes, setting this value to `false` may alleviate problems. 
**This property is not reactive**

## GridItem

### i
    
* type: `String`
* required: `true`

This is the unique identifier of the item.

### x
    
* type: `Number`
* required: `true`

Says what is a initial horizontal position of the item (in which column it should be placed).

The value must be a _whole number_. 

### y
    
* type: `Number`
* required: `true`

Says what is a initial vertical position of the item (in which row it should be placed).

The value must be a _whole number_. 

### w
    
* type: `Number`
* required: `true`

Says what is a initial width of the item.

The value is a number that is multiplied by `colWidth`.

### h
    
* type: `Number`
* required: `true`

Says what is a initial height of the item.

The value is a number that is multiplied by `rowHeight`.

### minW
    
* type: `Number`
* required: `false`
* default: `1`

Says what is a minimal width of the item. If `w` will be smaller then `minW` then `w` will be set to `minW`.

The value is a number that is multiplied by `colWidth`.

### minH
    
* type: `Number`
* required: `false`
* default: `1`

Says what is a minimal hieght of the item. If `h` will be smaller then `minH` then `h` will be set to `minH`.

The value is a number that is multiplied by `rowHeight`.

### maxW
    
* type: `Number`
* required: `false`
* default: `Infinity`

Says what is a maximal width of the item. If `w` will be bigger then `maxW` then `w` will be set to `maxW`.

The value is a number that is multiplied by `colWidth`.

### maxH
    
* type: `Number`
* required: `false`
* default: `Infinity`

Says what is a maximal height of the item. If `h` will be bigger then `maxH` then `h` will be set to `maxH`.

The value is a number that is multiplied by `rowHeight`

### isDraggable
    
* type: `Boolean`
* required: `false`
* default: `null`

Says if item is draggable.

If default value is `null` then it's inherited from parent.

### isResizable
    
* type: `Boolean`
* required: `false`
* default: `null`

Says if item is resizable.

If default value is `null` then it's inherited from parent.

### static
    
* type: `Boolean`
* required: `false`
* default: `false`

Says if item is static (won't be draggable, resizable or moved by other items).


### dragIgnoreFrom

* type: `String`
* required: `false`
* default: `'a, button'`

Says which elements of the item shouldn't trigger drag event of the item.

The value is `css-like` selector string.

For more info please refer to `ignoreFrom` in [interact.js docs](http://interactjs.io/docs/#ignorable-selectors).

### dragAllowFrom
    
* type: `String`
* required: `false`
* default: `null`

Says which elements of the item should trigger drag event of the item.

The value is `css-like` selector string.

If `null` then one can drag by any (excluding `dragIgnoreFrom`) element of the item.

For more info please refer to `allowFrom` in [interact.js docs](http://interactjs.io/docs/#ignorable-selectors).

### resizeIgnoreFrom
    
* type: `String`
* required: `false`
* default: `'a, button'`

Says which elements of the item shouldn't trigger resize event of the item.

The value is `css-like` selector string.

For more info please refer to `ignoreFrom` in [interact.js docs](http://interactjs.io/docs/#ignorable-selectors).


### preserveAspectRatio

* type: `Boolean`
* required: `false`
* default: `false`

If 'true', forces the GridItem to preserve its aspect ratio when resizing. 

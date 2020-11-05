# Events

Move and resize event listeners can be added to each grid-item, so that the parent Vue can be notified when a grid element is being moved or resized.
Moved and resized event listeners can be added, if the only notification needed is when an item is finished moving or resizing.

Working example [here](../guide/02-events.md)   

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
            @breakpoint-changed="breakpointChangedEvent"
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
                   @container-resized="containerResizedEvent"
                   @moved="movedEvent">
            {{item.i}}
        </grid-item>
    </grid-layout>
```` 

## GridLayout

### layoutCreatedEvent

Layout created event

Emited on the component created lifecycle hook

```javascript
    layoutCreatedEvent: function(newLayout){
      console.log("Created layout: ", newLayout)
    }
```

### layoutBeforeMountEvent

Layout beforeMount event

Emited on the component beforeMount lifecycle hook

```javascript
    layoutBeforeMountEvent: function(newLayout){
      console.log("beforeMount layout: ", newLayout)
    }
```

### layoutMountedEvent

Layout mounted event

Emited on the component mounted lifecycle hook

```javascript
    layoutMountedEvent: function(newLayout){
      console.log("Mounted layout: ", newLayout)
    }
```

### layoutReadyEvent

Layout ready event

Emited when all the operations on the mount hook finish

```javascript
    layoutReadyEvent: function(newLayout){
      console.log("Ready layout: ", newLayout)
    }
```

### layoutUpdatedEvent

Layout updated event

Every time the layout has finished updating and positions of all grid-items are recalculated

```javascript
    layoutUpdatedEvent: function(newLayout){
      console.log("Updated layout: ", newLayout)
    }
```


### breakpointChangedEvent

Breakpoint Changed event

Every time the breakpoint value changes due to window resize
 
```javascript
    /**
     * 
     * @param newBreakpoint the breakpoint name
     * @param newLayout the chosen layout for the breakpoint
     * 
     */
    breakpointChangedEvent: function(newBreakpoint, newLayout){
        console.log("BREAKPOINT CHANGED breakpoint=", newBreakpoint, ", layout: ", newLayout );
    },
``` 


## GridItem

### moveEvent

Move event

Every time an item is being moved and changes position

```javascript
    moveEvent: function(i, newX, newY){
        console.log("MOVE i=" + i + ", X=" + newX + ", Y=" + newY);
    },
```

### resizeEvent

Resize event

Every time an item is being resized and changes size
 
```javascript
    resizeEvent: function(i, newH, newW, newHPx, newWPx){
        console.log("RESIZE i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
    },
``` 

### movedEvent

Moved event

Every time an item is finished being moved and changes position

```javascript
    movedEvent: function(i, newX, newY){
        console.log("MOVED i=" + i + ", X=" + newX + ", Y=" + newY);
    },
```

### resizedEvent

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

### containerResizedEvent

Container Resized event

Every time the grid item/layout container changes size (browser window or other)
 
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
    containerResizedEvent: function(i, newH, newW, newHPx, newWPx){
        console.log("CONTAINER RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
    },
``` 


# 事件

每一个栅格元素grid-item上都可以添加监听器，用于监听移动和调整大小事件，这样父级Vue对象就可以收到通知。

示例 [点击这里](../guide/02-events.md)   

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

对应Vue生命周期的created

```javascript
    layoutCreatedEvent: function(newLayout){
      console.log("Created layout: ", newLayout)
    }
```

### layoutBeforeMountEvent

对应Vue生命周期的beforeMount

```javascript
    layoutBeforeMountEvent: function(newLayout){
      console.log("beforeMount layout: ", newLayout)
    }
```

### layoutMountedEvent

对应Vue生命周期的mounted

```javascript
    layoutMountedEvent: function(newLayout){
      console.log("Mounted layout: ", newLayout)
    }
```

### layoutReadyEvent

当完成mount中的所有操作时生成的事件

```javascript
    layoutReadyEvent: function(newLayout){
      console.log("Ready layout: ", newLayout)
    }
```

### layoutUpdatedEvent

布局updated事件

更新事件（布局更新或栅格元素的位置重新计算）

```javascript
    layoutUpdatedEvent: function(newLayout){
      console.log("Updated layout: ", newLayout)
    }
```


### breakpointChangedEvent

断点更改事件

每次断点值由于窗口调整大小而改变

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

移动时的事件

```javascript
    moveEvent: function(i, newX, newY){
        console.log("MOVE i=" + i + ", X=" + newX + ", Y=" + newY);
    },
```

### resizeEvent

调整大小时的事件
 
```javascript
    resizeEvent: function(i, newH, newW, newHPx, newWPx){
        console.log("RESIZE i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
    },
``` 

### movedEvent

移动后的事件

```javascript
    movedEvent: function(i, newX, newY){
        console.log("MOVED i=" + i + ", X=" + newX + ", Y=" + newY);
    },
```

### resizedEvent

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

### containerResizedEvent

栅格元素/栅格容器更改大小的事件（浏览器窗口或其他）

 
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


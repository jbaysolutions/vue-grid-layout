<template>
  <div ref="item" class="vue-grid-item" :class="classObj" :style="style">
    <slot></slot>
    <span
      v-if="resizableAndNotStatic"
      ref="handle"
      :class="resizableHandleClass"
    ></span>
  </div>
</template>
<style>
.vue-grid-item {
  transition: all 200ms ease;
  transition-property: left, top, right;
}

.vue-grid-item.no-touch {
  -ms-touch-action: none;
  touch-action: none;
}

.vue-grid-item.cssTransforms {
  transition-property: transform;
  left: 0;
  right: auto;
}

.vue-grid-item.cssTransforms.render-rtl {
  left: auto;
  right: 0;
}

.vue-grid-item.resizing {
  opacity: 0.6;
  z-index: 3;
}

.vue-grid-item.vue-draggable-dragging {
  transition: none;
  z-index: 3;
}

.vue-grid-item.vue-grid-placeholder {
  background: red;
  opacity: 0.2;
  transition-duration: 100ms;
  z-index: 2;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.vue-grid-item > .vue-resizable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  bottom: 0;
  right: 0;
  background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=");
  background-position: bottom right;
  padding: 0 3px 3px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: se-resize;
}

.vue-grid-item > .vue-rtl-resizable-handle {
  bottom: 0;
  left: 0;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAuMDAwMDAwMDAwMDAwMDAyIiBoZWlnaHQ9IjEwLjAwMDAwMDAwMDAwMDAwMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDwhLS0gQ3JlYXRlZCB3aXRoIE1ldGhvZCBEcmF3IC0gaHR0cDovL2dpdGh1Yi5jb20vZHVvcGl4ZWwvTWV0aG9kLURyYXcvIC0tPgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSIxMiIgd2lkdGg9IjEyIiB5PSItMSIgeD0iLTEiLz4KICA8ZyBkaXNwbGF5PSJub25lIiBvdmVyZmxvdz0idmlzaWJsZSIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIgaWQ9ImNhbnZhc0dyaWQiPgogICA8cmVjdCBmaWxsPSJ1cmwoI2dyaWRwYXR0ZXJuKSIgc3Ryb2tlLXdpZHRoPSIwIiB5PSIwIiB4PSIwIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIi8+CiAgPC9nPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxsaW5lIGNhbnZhcz0iI2ZmZmZmZiIgY2FudmFzLW9wYWNpdHk9IjEiIHN0cm9rZS1saW5lY2FwPSJ1bmRlZmluZWQiIHN0cm9rZS1saW5lam9pbj0idW5kZWZpbmVkIiBpZD0ic3ZnXzEiIHkyPSItNzAuMTc4NDA3IiB4Mj0iMTI0LjQ2NDE3NSIgeTE9Ii0zOC4zOTI3MzciIHgxPSIxNDQuODIxMjg5IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIi8+CiAgPGxpbmUgc3Ryb2tlPSIjNjY2NjY2IiBzdHJva2UtbGluZWNhcD0idW5kZWZpbmVkIiBzdHJva2UtbGluZWpvaW49InVuZGVmaW5lZCIgaWQ9InN2Z181IiB5Mj0iOS4xMDY5NTciIHgyPSIwLjk0NzI0NyIgeTE9Ii0wLjAxODEyOCIgeDE9IjAuOTQ3MjQ3IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz4KICA8bGluZSBzdHJva2UtbGluZWNhcD0idW5kZWZpbmVkIiBzdHJva2UtbGluZWpvaW49InVuZGVmaW5lZCIgaWQ9InN2Z183IiB5Mj0iOSIgeDI9IjEwLjA3MzUyOSIgeTE9IjkiIHgxPSItMC42NTU2NCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiM2NjY2NjYiIGZpbGw9Im5vbmUiLz4KIDwvZz4KPC9zdmc+);
  background-position: bottom left;
  padding-left: 3px;
  background-repeat: no-repeat;
  background-origin: content-box;
  cursor: sw-resize;
  right: auto;
}

.vue-grid-item.disable-userselect {
  user-select: none;
}
</style>
<script lang="ts">
import {
  defineComponent,
  inject,
  watch,
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
} from "vue";
import interact from "interactjs";
import {
  setTopLeft,
  setTopRight,
  setTransform,
  setTransformRtl,
  Emitter,
} from "../helpers/utils";
import { createCoreData, getControlPosition } from "../helpers/draggableUtils";
import { getDocumentDir } from "../helpers/DOM";
//    var eventBus = require('./eventBus');

export default defineComponent({
  name: "GridItem",
  props: {
    isDraggable: {
      type: Boolean,
      required: false,
      default: null,
    },
    isResizable: {
      type: Boolean,
      required: false,
      default: null,
    },
    static: {
      type: Boolean,
      required: false,
      default: false,
    },
    minH: {
      type: Number,
      required: false,
      default: 1,
    },
    minW: {
      type: Number,
      required: false,
      default: 1,
    },
    maxH: {
      type: Number,
      required: false,
      default: Infinity,
    },
    maxW: {
      type: Number,
      required: false,
      default: Infinity,
    },
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
    w: {
      type: Number,
      required: true,
    },
    h: {
      type: Number,
      required: true,
    },
    i: {
      required: true,
    },
    dragIgnoreFrom: {
      type: String,
      required: false,
      default: "a, button",
    },
    dragAllowFrom: {
      type: String,
      required: false,
      default: null,
    },
    resizeIgnoreFrom: {
      type: String,
      required: false,
      default: "a, button",
    },
  },
  setup(props, content) {
    onMounted(() => {
      cols.value = layout.colNum;
      rowHeight.value = layout.rowHeight;
      containerWidth.value = layout.width !== null ? layout.width : 100;
      margin = layout.margin !== undefined ? layout.margin : [10, 10];
      maxRows = layout.maxRows;
      if (props.isDraggable === null) {
        draggable.value = layout.isDraggable;
      } else {
        draggable.value = props.isDraggable;
      }
      if (props.isResizable === null) {
        resizable.value = layout.isResizable;
      } else {
        resizable.value = props.isResizable;
      }
      useCssTransforms = layout.useCssTransforms;
      createStyle();
    });

    onBeforeUnmount(() => {
      eventBus.off("updateWidth", updateWidthHandler);
      eventBus.off("compact", compactHandler);
      eventBus.off("setDraggable", setDraggableHandler);
      eventBus.off("setResizable", setResizableHandler);
      eventBus.off("setRowHeight", setRowHeightHandler);
      eventBus.off("setMaxRows", setMaxRowsHandler);
      eventBus.off("directionchange", directionchangeHandler);
      eventBus.off("setColNum", setColNum);
      if (interactObj) {
        interactObj.unset(); // destroy interact intance
      }
    });

    const eventBus: Emitter = inject("eventBus");
    const layout: any = inject("layout");
    const item = ref(null);
    let interactObj = null;
    let cols = ref(1);
    let containerWidth = ref(100);
    let rowHeight = ref(30);
    let margin = [10, 10];
    let maxRows = Infinity;
    let draggable = ref(null);
    let resizable = ref(null);
    let useCssTransforms = true;
    let isDragging = ref(false);
    let dragging = null;
    let isResizing = ref(false);
    let resizing = null;
    let lastX = NaN;
    let lastY = NaN;
    let lastW = NaN;
    let lastH = NaN;
    const style = ref({});
    let rtl = false;
    let dragEventSet = false;
    let resizeEventSet = false;
    let previousW = null;
    let previousH = null;
    let previousX = null;
    let previousY = null;
    let innerX = props.x;
    let innerY = props.y;
    let innerW = props.w;
    let innerH = props.h;

    const renderRtl = computed(() => {
      return layout.isMirrored ? !rtl : rtl;
    });

    const classObj = computed(() => {
      return {
        "vue-resizable": resizableAndNotStatic.value,
        static: props.static,
        resizing: isResizing.value,
        "vue-draggable-dragging": isDragging.value,
        cssTransforms: useCssTransforms,
        "render-rtl": renderRtl.value,
        "disable-userselect": isDragging.value,
        "no-touch": isAndroid.value && draggableOrResizableAndNotStatic.value,
      };
    });

    const resizableAndNotStatic = computed(
      () => resizable.value && !props.static
    );

    const isAndroid = computed(
      () => navigator.userAgent.toLowerCase().indexOf("android") !== -1
    );
    const draggableOrResizableAndNotStatic = computed(
      () => (draggable.value || resizable.value) && !props.static
    );

    const resizableHandleClass = computed(() => {
      if (renderRtl.value) {
        return "vue-resizable-handle vue-rtl-resizable-handle";
      } else {
        return "vue-resizable-handle";
      }
    });

    const updateWidthHandler = (width) => {
      updateWidth(width);
    };
    const compactHandler = (layout) => {
      compact();
    };
    const setDraggableHandler = (isDraggable: Boolean) => {
      if (props.isDraggable === null) {
        //props.isDraggable = isDraggable;
        draggable.value = isDraggable;
      }
    };
    const setResizableHandler = (isResizable) => {
      if (props.isResizable === null) {
        resizable.value = isResizable;
      }
    };
    const setRowHeightHandler = (height) => {
      rowHeight.value = height;
    };
    const setMaxRowsHandler = (maxRow) => {
      maxRows = maxRow;
    };
    const directionchangeHandler = () => {
      rtl = getDocumentDir() === "rtl";
      compact();
    };
    const setColNum = (colNum) => {
      cols.value = parseInt(colNum);
    };

    eventBus.on("updateWidth", updateWidthHandler);
    eventBus.on("compact", compactHandler);
    eventBus.on("setDraggable", setDraggableHandler);
    eventBus.on("setResizable", setResizableHandler);
    eventBus.on("setRowHeight", setRowHeightHandler);
    eventBus.on("setMaxRows", setMaxRowsHandler);
    eventBus.on("directionchange", directionchangeHandler);
    eventBus.on("setColNum", setColNum);

    function updateWidth(width, colNum = null) {
      containerWidth.value = width;
      if (colNum !== undefined && colNum !== null) {
        cols.value = colNum;
      }
    }
    function compact() {
      createStyle();
    }

    function createStyle() {
      if (props.x + props.w > cols.value) {
        innerX = 0;
        innerW = props.w > cols.value ? cols.value : props.w;
      } else {
        innerX = props.x;
        innerW = props.w;
      }
      let pos = calcPosition(innerX, innerY, innerW, innerH);

      if (isDragging.value) {
        pos.top = dragging.top;
        //                    Add rtl support
        if (renderRtl.value) {
          pos.right = dragging.left;
        } else {
          pos.left = dragging.left;
        }
      }
      if (isResizing.value) {
        pos.width = resizing.width;
        pos.height = resizing.height;
      }

      let styleValue;
      // CSS Transforms support (default)
      if (useCssTransforms) {
        //                    Add rtl support
        if (renderRtl.value) {
          styleValue = setTransformRtl(
            pos.top,
            pos.right,
            pos.width,
            pos.height
          );
        } else {
          styleValue = setTransform(pos.top, pos.left, pos.width, pos.height);
        }
      } else {
        // top,left (slow)
        //                    Add rtl support
        if (renderRtl.value) {
          styleValue = setTopRight(pos.top, pos.right, pos.width, pos.height);
        } else {
          styleValue = setTopLeft(pos.top, pos.left, pos.width, pos.height);
        }
      }
      style.value = styleValue;
    }

    function calcPosition(x: number, y: number, w: number, h: number) {
      const colWidth = calcColWidth();
      // add rtl support
      let out;
      if (renderRtl.value) {
        out = {
          right: Math.round(colWidth * x + (x + 1) * margin[0]),
          top: Math.round(rowHeight.value * y + (y + 1) * margin[1]),
          // 0 * Infinity === NaN, which causes problems with resize constriants;
          // Fix this if it occurs.
          // Note we do it here rather than later because Math.round(Infinity) causes deopt
          width:
            w === Infinity
              ? w
              : Math.round(colWidth * w + Math.max(0, w - 1) * margin[0]),
          height:
            h === Infinity
              ? h
              : Math.round(
                  rowHeight.value * h + Math.max(0, h - 1) * margin[1]
                ),
        };
      } else {
        out = {
          left: Math.round(colWidth * x + (x + 1) * margin[0]),
          top: Math.round(rowHeight.value * y + (y + 1) * margin[1]),
          // 0 * Infinity === NaN, which causes problems with resize constriants;
          // Fix this if it occurs.
          // Note we do it here rather than later because Math.round(Infinity) causes deopt
          width:
            w === Infinity
              ? w
              : Math.round(colWidth * w + Math.max(0, w - 1) * margin[0]),
          height:
            h === Infinity
              ? h
              : Math.round(
                  rowHeight.value * h + Math.max(0, h - 1) * margin[1]
                ),
        };
      }

      return out;
    }

    function calcColWidth() {
      return (containerWidth.value - margin[0] * (cols.value + 1)) / cols.value;
    }

    function emitContainerResized() {
      // this.style has width and height with trailing 'px'. The
      // resized event is without them
      let styleProps: { height: number; width: number } = {
        height: 0,
        width: 0,
      };
      for (let prop of ["width", "height"]) {
        let val = style.value[prop];
        let matches = val.match(/^(\d+)px$/);
        if (!matches) return;
        styleProps[prop] = matches[1];
      }
      content.emit(
        "container-resized",
        props.i,
        props.h,
        props.w,
        styleProps.height,
        styleProps.width
      );
    }

    function handleResize(event: MouseEvent) {
      if (props.static) return;
      const position = getControlPosition(event);
      // Get the current drag point from the event. This is used as the offset.
      if (position == null) return; // not possible but satisfies flow
      const { x, y } = position;

      const newSize = { width: 0, height: 0 };
      let pos;
      switch (event.type) {
        case "resizestart": {
          previousW = innerW;
          previousH = innerH;
          pos = calcPosition(innerX, innerY, innerW, innerH);
          newSize.width = pos.width;
          newSize.height = pos.height;
          resizing = newSize;
          isResizing.value = true;
          break;
        }
        case "resizemove": {
          const coreEvent = createCoreData(lastW, lastH, x, y);
          if (renderRtl.value) {
            newSize.width = resizing.width - coreEvent.deltaX;
          } else {
            newSize.width = resizing.width + coreEvent.deltaX;
          }
          newSize.height = resizing.height + coreEvent.deltaY;

          ///console.log("### resize => " + event.type + ", deltaX=" + coreEvent.deltaX + ", deltaY=" + coreEvent.deltaY);
          resizing = newSize;
          break;
        }
        case "resizeend": {
          //console.log("### resize end => x=" +this.innerX + " y=" + this.innerY + " w=" + this.innerW + " h=" + this.innerH);
          pos = calcPosition(innerX, innerY, innerW, innerH);
          newSize.width = pos.width;
          newSize.height = pos.height;
          //                        console.log("### resize end => " + JSON.stringify(newSize));
          resizing = null;
          isResizing.value = false;
          break;
        }
      }

      // Get new WH
      pos = calcWH(newSize.height, newSize.width);
      if (pos.w < props.minW) {
        pos.w = props.minW;
      }
      if (pos.w > props.maxW) {
        pos.w = props.maxW;
      }
      if (pos.h < props.minH) {
        pos.h = props.minH;
      }
      if (pos.h > props.maxH) {
        pos.h = props.maxH;
      }

      if (pos.h < 1) {
        pos.h = 1;
      }
      if (pos.w < 1) {
        pos.w = 1;
      }

      lastW = x;
      lastH = y;

      if (innerW !== pos.w || innerH !== pos.h) {
        content.emit(
          "resize",
          props.i,
          pos.h,
          pos.w,
          newSize.height,
          newSize.width
        );
      }
      if (
        event.type === "resizeend" &&
        (previousW !== innerW || previousH !== innerH)
      ) {
        content.emit(
          "resized",
          props.i,
          pos.h,
          pos.w,
          newSize.height,
          newSize.width
        );
      }
      eventBus.emit("resizeEvent", {
        eventType: event.type,
        i: props.i,
        x: innerX,
        y: innerY,
        h: pos.h,
        w: pos.w,
      });
    }

    function handleDrag(event: MouseEvent) {
      if (props.static) return;
      if (isResizing.value) return;

      const position = getControlPosition(event);

      // Get the current drag point from the event. This is used as the offset.
      if (position === null) return; // not possible but satisfies flow
      const { x, y } = position;

      // let shouldUpdate = false;
      let newPosition = { top: 0, left: 0 };
      switch (event.type) {
        case "dragstart": {
          previousX = innerX;
          previousY = innerY;

          let parentRect = (event.target as HTMLElement).offsetParent.getBoundingClientRect();
          let clientRect = (event.target as HTMLElement).getBoundingClientRect();
          if (renderRtl.value) {
            newPosition.left = (clientRect.right - parentRect.right) * -1;
          } else {
            newPosition.left = clientRect.left - parentRect.left;
          }
          newPosition.top = clientRect.top - parentRect.top;
          dragging = newPosition;
          isDragging.value = true;
          break;
        }
        case "dragend": {
          if (!isDragging.value) return;
          let parentRect = (event.target as HTMLElement).offsetParent.getBoundingClientRect();
          let clientRect = (event.target as HTMLElement).getBoundingClientRect();
          //                        Add rtl support
          if (renderRtl.value) {
            newPosition.left = (clientRect.right - parentRect.right) * -1;
          } else {
            newPosition.left = clientRect.left - parentRect.left;
          }
          newPosition.top = clientRect.top - parentRect.top;
          dragging = null;
          isDragging.value = false;
          // shouldUpdate = true;
          break;
        }
        case "dragmove": {
          const coreEvent = createCoreData(lastX, lastY, x, y);
          //                        Add rtl support
          if (renderRtl.value) {
            newPosition.left = dragging.left - coreEvent.deltaX;
          } else {
            newPosition.left = dragging.left + coreEvent.deltaX;
          }
          newPosition.top = dragging.top + coreEvent.deltaY;
          dragging = newPosition;
          break;
        }
      }

      // Get new XY
      let pos;
      if (renderRtl.value) {
        pos = calcXY(newPosition.top, newPosition.left);
      } else {
        pos = calcXY(newPosition.top, newPosition.left);
      }

      lastX = x;
      lastY = y;

      if (innerX !== pos.x || innerY !== pos.y) {
        content.emit("move", props.i, pos.x, pos.y);
      }
      if (
        event.type === "dragend" &&
        (previousX !== innerX || previousY !== innerY)
      ) {
        content.emit("moved", props.i, pos.x, pos.y);
      }
      eventBus.emit("dragEvent", {
        eventType: event.type,
        i: props.i,
        x: pos.x,
        y: pos.y,
        h: innerH,
        w: innerW,
      });
    }

    function calcXY(top: number, left: number) {
      const colWidth = calcColWidth();

      let x = Math.round((left - margin[0]) / (colWidth + margin[0]));
      let y = Math.round((top - margin[1]) / (rowHeight.value + margin[1]));

      // Capping
      x = Math.max(Math.min(x, cols.value - innerW), 0);
      y = Math.max(Math.min(y, maxRows - innerH), 0);

      return { x, y };
    }

    function calcWH(height: number, width: number, autoSizeFlag = false) {
      const colWidth = calcColWidth();

      let w = Math.round((width + margin[0]) / (colWidth + margin[0]));
      let h = 0;
      if (!autoSizeFlag) {
        h = Math.round((height + margin[1]) / (rowHeight.value + margin[1]));
      } else {
        h = Math.ceil((height + margin[1]) / (rowHeight.value + margin[1]));
      }

      // Capping
      w = Math.max(Math.min(w, cols.value - innerX), 0);
      h = Math.max(Math.min(h, maxRows - innerY), 0);
      return { w, h };
    }

    function tryMakeDraggable() {
      if (interactObj === null || interactObj === undefined) {
        interactObj = interact(item.value);
      }
      if (draggable.value && !props.static) {
        const opts = {
          ignoreFrom: props.dragIgnoreFrom,
          allowFrom: props.dragAllowFrom,
        };
        interactObj.draggable(opts);
        /*this.interactObj.draggable({allowFrom: '.vue-draggable-handle'});*/
        if (!dragEventSet) {
          dragEventSet = true;
          interactObj.on("dragstart dragmove dragend", function (event) {
            handleDrag(event);
          });
        }
      } else {
        interactObj.draggable({
          enabled: false,
        });
      }
    }
    function tryMakeResizable() {
      if (interactObj === null || interactObj === undefined) {
        interactObj = interact(item.value);
      }
      if (resizable.value && !props.static) {
        let maximum = calcPosition(0, 0, props.maxW, props.maxH);
        let minimum = calcPosition(0, 0, props.minW, props.minH);

        // console.log("### MAX " + JSON.stringify(maximum));
        // console.log("### MIN " + JSON.stringify(minimum));

        const opts = {
          preserveAspectRatio: true,
          // allowFrom: "." + this.resizableHandleClass,
          edges: {
            left: false,
            right: "." + resizableHandleClass.value,
            bottom: "." + resizableHandleClass.value,
            top: false,
          },
          ignoreFrom: props.resizeIgnoreFrom,
          restrictSize: {
            min: {
              height: minimum.height,
              width: minimum.width,
            },
            max: {
              height: maximum.height,
              width: maximum.width,
            },
          },
        };

        interactObj.resizable(opts);
        if (!resizeEventSet) {
          resizeEventSet = true;
          interactObj.on("resizestart resizemove resizeend", function (event) {
            handleResize(event);
          });
        }
      } else {
        interactObj.resizable({
          enabled: false,
        });
      }
    }

    watch(
      () => props.isDraggable,
      (newValue) => {
        draggable.value = newValue;
      }
    );

    watch(
      () => props.static,
      () => {
        tryMakeDraggable();
        tryMakeResizable();
      }
    );

    watch(draggable, () => {
      tryMakeDraggable();
    });

    watch(
      () => props.isResizable,
      (newValue) => {
        resizable.value = newValue;
      }
    );

    watch(resizable, () => {
      tryMakeResizable();
    });

    watch(rowHeight, () => {
      createStyle();
      emitContainerResized();
    });

    watch([containerWidth, cols], () => {
      tryMakeResizable();
      createStyle();
      emitContainerResized();
    });

    watch(
      () => props.x,
      (newVal) => {
        innerX = newVal;
        createStyle();
      }
    );

    watch(
      () => props.y,
      (newVal) => {
        innerY = newVal;
        createStyle();
      }
    );

    watch(
      () => props.h,
      (newVal) => {
        innerH = newVal;
        createStyle();
      }
    );

    watch(
      () => props.w,
      (newVal) => {
        innerW = newVal;
        createStyle();
      }
    );

    watch(renderRtl, () => {
      tryMakeResizable();
      createStyle();
    });

    watch(
      [() => props.minH, () => props.maxH, () => props.minW, () => props.maxW],
      () => {
        tryMakeResizable();
      }
    );

    watch(
      () => layout.margin,
      () => {
        if (!margin || (margin[0] == margin[0] && margin[1] == margin[1])) {
          return;
        }
        margin = margin.map((m) => Number(m));
        createStyle();
        emitContainerResized();
      }
    );

    return {
      item,
      classObj,
      style,
      resizableAndNotStatic,
      resizableHandleClass,
    };
  },
});
</script>

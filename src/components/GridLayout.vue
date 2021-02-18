<template>
  <div ref="item" class="vue-grid-layout" :style="mergedStyle">
    <slot></slot>
    <grid-item
      class="vue-grid-placeholder"
      v-show="isDragging"
      :x="placeholder.x"
      :y="placeholder.y"
      :w="placeholder.w"
      :h="placeholder.h"
      :i="placeholder.i"
    ></grid-item>
  </div>
</template>
<style>
.vue-grid-layout {
  position: relative;
  transition: height 200ms ease;
}
</style>
<script lang="ts">
import mitt from "mitt";
import elementResizeDetectorMaker from "element-resize-detector";

import {
  bottom,
  LayoutItem,
  cloneLayout,
  compact,
  getAllCollisions,
  getLayoutItem,
  moveElement,
  validateLayout,
} from "../helpers/utils";
import {
  findOrGenerateResponsiveLayout,
  getBreakpointFromWidth,
  getColsFromBreakpoint,
} from "../helpers/responsiveUtils";
import GridItem from "./GridItem.vue";
import {
  addWindowEventListener,
  removeWindowEventListener,
} from "../helpers/DOM";

import {
  defineComponent,
  provide,
  nextTick,
  watch,
  reactive,
  ref,
  onMounted,
  onBeforeMount,
  onBeforeUnmount,
} from "vue";
//var eventBus = require('./eventBus');

export default defineComponent({
  name: "GridLayout",
  components: {
    GridItem,
  },
  props: {
    autoSize: {
      type: Boolean,
      default: true,
    },
    colNum: {
      type: Number,
      default: 12,
    },
    rowHeight: {
      type: Number,
      default: 150,
    },
    maxRows: {
      type: Number,
      default: Infinity,
    },
    margin: {
      type: Array,
      default: () => {
        return [10, 10];
      },
    },
    isDraggable: {
      type: Boolean,
      default: true,
    },
    isResizable: {
      type: Boolean,
      default: true,
    },
    isMirrored: {
      type: Boolean,
      default: false,
    },
    useCssTransforms: {
      type: Boolean,
      default: true,
    },
    verticalCompact: {
      type: Boolean,
      default: true,
    },
    layout: {
      type: Array,
      required: true,
      default: [],
    },
    responsive: {
      type: Boolean,
      default: false,
    },
    responsiveLayouts: {
      type: Object,
      default: () => {
        return {};
      },
    },
    breakpoints: {
      type: Object,
      default: () => {
        return { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
      },
    },
    cols: {
      type: Object,
      default: () => {
        return { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
      },
    },
    preventCollision: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, content) {
    onMounted(() => {
      content.emit("layout-mounted", props.layout);
      nextTick(() => {
        validateLayout(props.layout as Array<LayoutItem>);

        originalLayout = props.layout;
        nextTick(() => {
          onWindowResize();

          initResponsiveFeatures();

          //self.width = self.$el.offsetWidth;
          addWindowEventListener("resize", onWindowResize);

          compact(props.layout as Array<LayoutItem>, props.verticalCompact);

          content.emit("layout-updated", props.layout);

          updateHeight();
          nextTick(() => {
            erd = elementResizeDetectorMaker({
              strategy: "scroll", //<- For ultra performance.
              // See https://github.com/wnr/element-resize-detector/issues/110 about callOnAdd.
              callOnAdd: false,
            });
            debugger
            erd.listenTo(item.value, () => {
              onWindowResize();
            });
          });
        });
      });
    });

    onBeforeMount(() => {
      content.emit("layout-before-mount", props.layout);
    });

    onBeforeUnmount(() => {
      eventBus.off("resizeEvent", resizeEventHandler);
      eventBus.off("dragEvent", dragEventHandler);
      removeWindowEventListener("resize", onWindowResize);
      erd.uninstall(item.value);
    });

    const eventBus = mitt();
    provide("eventBus", eventBus);
    provide("layout", props);
    const placeholder = reactive({
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      i: -1,
    });
    const isDragging = ref(false);
    const mergedStyle = ref({});
    const item = ref(null);
    const width = ref(null);
    let originalLayout = null;
    let lastLayoutLength = 0;
    let layouts = {};
    let lastBreakpoint = null;
    let erd = null;

    watch(width, (newValue, oldval) => {
      nextTick(() => {
        eventBus.emit("updateWidth", newValue);
        if (oldval === null) {
          /*
              If oldval == null is when the width has never been
              set before. That only occurs when mouting is
              finished, and onWindowResize has been called and
              this.width has been changed the first time after it
              got set to null in the constructor. It is now time
              to issue layout-ready events as the GridItems have
              their sizes configured properly.

              The reason for emitting the layout-ready events on
              the next tick is to allow for the newly-emitted
              updateWidth event (above) to have reached the
              children GridItem-s and had their effect, so we're
              sure that they have the final size before we emit
              layout-ready (for this GridLayout) and
              item-layout-ready (for the GridItem-s).

              This way any client event handlers can reliably
              invistigate stable sizes of GridItem-s.
          */
          nextTick(() => {
            content.emit("layout-ready", props.layout);
          });
        }
        updateHeight();
      })
    });

    watch([() => props.layout.length, () => props.layout], () => {
      layoutUpdate();
    });

    watch(() => props.colNum, (val) => {
      eventBus.emit("setColNum", val);
    })

    watch(() => props.rowHeight, (newValue) => {
      eventBus.emit("setRowHeight", newValue);
    });
    
    watch(() => props.isDraggable, (newValue) => {
      eventBus.emit("setDraggable", newValue);
    });
    
    watch(() => props.isResizable, (newValue) => {
      eventBus.emit("setResizable", newValue);
    });
    
    watch(() => props.responsive, (newValue) => {
      if (!newValue) {
        content.emit("update:layout", originalLayout);
        eventBus.emit("setColNum", props.colNum);
      }
      onWindowResize();
    });

    watch(() => props.maxRows, (newValue) => {
      eventBus.emit("setMaxRows", newValue);
    });
    
    watch(() => props.margin, () => {
      updateHeight()
    });

    // Accessible refernces of functions for removing in beforeDestroy
    const resizeEventHandler = ({ eventType, i, x, y, h, w }) => {
      resizeEvent(eventType, i, x, y, h, w);
    };

    const dragEventHandler = ({ eventType, i, x, y, h, w }) => {
      dragEvent(eventType, i, x, y, h, w);
    };

    eventBus.on("resizeEvent", resizeEventHandler);
    eventBus.on("dragEvent", dragEventHandler);
    content.emit("layout-created", props.layout);

    function layoutUpdate() {
      if (props.layout !== undefined && originalLayout !== null) {
        if (props.layout.length !== originalLayout.length) {
          // console.log("### LAYOUT UPDATE!", this.layout.length, this.originalLayout.length);

          let diff = findDifference(props.layout, originalLayout);
          if (diff.length > 0) {
            // console.log(diff);
            if (props.layout.length > originalLayout.length) {
              originalLayout = originalLayout.concat(diff);
            } else {
              originalLayout = originalLayout.filter((obj) => {
                return !diff.some((obj2) => {
                  return obj.i === obj2.i;
                });
              });
            }
          }

          lastLayoutLength = props.layout.length;
          initResponsiveFeatures();
        }

        compact(props.layout as Array<LayoutItem>, props.verticalCompact);
        eventBus.emit("updateWidth", width.value);
        updateHeight();

        content.emit("layout-updated", props.layout);
      }
    }

    function updateHeight() {
      mergedStyle.value = {
        height: containerHeight(),
      };
    }

    function onWindowResize() {
      if (item.value !== null && item.value !== undefined) {
        width.value = item.value.offsetWidth;
      }
      eventBus.emit("resizeEvent", {});
    }

    function containerHeight() {
      if (!props.autoSize) return;
      // console.log("bottom: " + bottom(this.layout))
      // console.log("rowHeight + margins: " + (this.rowHeight + this.margin[1]) + this.margin[1])
      return (
        bottom(props.layout as Array<LayoutItem>) *
          (props.rowHeight + Number(props.margin[1])) +
        Number(props.margin[1]) +
        "px"
      );
    }

    function dragEvent(eventName, id, x, y, h, w) {
      //console.log(eventName + " id=" + id + ", x=" + x + ", y=" + y);
      let l = getLayoutItem(props.layout as Array<LayoutItem>, id);
      //GetLayoutItem sometimes returns null object
      if (l === undefined || l === null) {
        l = { x: 0, y: 0 };
      }

      if (eventName === "dragmove" || eventName === "dragstart") {
        placeholder.i = id;
        placeholder.x = l.x;
        placeholder.y = l.y;
        placeholder.w = w;
        placeholder.h = h;
        nextTick(() => {
          isDragging.value = true;
        });
        //this.$broadcast("updateWidth", this.width);
        eventBus.emit("updateWidth", width.value);
      } else {
        nextTick(() => {
          isDragging.value = false;
        });
      }

      // Move the element to the dragged location.
      moveElement(
        props.layout as Array<LayoutItem>,
        l,
        x,
        y,
        true,
        props.preventCollision
      );
      compact(props.layout as Array<LayoutItem>, props.verticalCompact);
      // needed because vue can't detect changes on array element properties
      eventBus.emit("compact");
      updateHeight();
      if (eventName === "dragend") content.emit("layout-updated", props.layout);
    }

    function resizeEvent(eventName, id, x, y, h, w) {
      let l = getLayoutItem(props.layout as Array<LayoutItem>, id);
      //GetLayoutItem sometimes return null object
      if (l === undefined || l === null) {
        l = { h: 0, w: 0 };
      }

      let hasCollisions;
      if (props.preventCollision) {
        const collisions = getAllCollisions(props.layout as Array<LayoutItem>, {
          ...l,
          w,
          h,
        }).filter((layoutItem) => layoutItem.i !== l.i);
        hasCollisions = collisions.length > 0;

        // If we're colliding, we need adjust the placeholder.
        if (hasCollisions) {
          // adjust w && h to maximum allowed space
          let leastX = Infinity,
            leastY = Infinity;
          collisions.forEach((layoutItem) => {
            if (layoutItem.x > l.x) leastX = Math.min(leastX, layoutItem.x);
            if (layoutItem.y > l.y) leastY = Math.min(leastY, layoutItem.y);
          });

          if (Number.isFinite(leastX)) l.w = leastX - l.x;
          if (Number.isFinite(leastY)) l.h = leastY - l.y;
        }
      }

      if (!hasCollisions) {
        // Set new width and height.
        l.w = w;
        l.h = h;
      }

      if (eventName === "resizestart" || eventName === "resizemove") {
        placeholder.i = id;
        placeholder.x = x;
        placeholder.y = y;
        placeholder.w = l.w;
        placeholder.h = l.h;
        nextTick(() => {
          isDragging.value = true;
        });
        //this.$broadcast("updateWidth", this.width);
        eventBus.emit("updateWidth", width.value);
      } else {
        nextTick(() => {
          isDragging.value = false;
        });
      }

      if (props.responsive) responsiveGridLayout();

      compact(props.layout as Array<LayoutItem>, props.verticalCompact);
      eventBus.emit("compact");
      updateHeight();

      if (eventName === "resizeend")
        content.emit("layout-updated", props.layout);
    }

    // finds or generates new layouts for set breakpoints
    function responsiveGridLayout() {
      let newBreakpoint = getBreakpointFromWidth(
        props.breakpoints,
        width.value
      );
      let newCols = getColsFromBreakpoint(newBreakpoint, props.cols);

      // save actual layout in layouts
      if (lastBreakpoint != null && !layouts[lastBreakpoint])
        layouts[lastBreakpoint] = cloneLayout(
          props.layout as Array<LayoutItem>
        );

      // Find or generate a new layout.
      let layout = findOrGenerateResponsiveLayout(
        originalLayout,
        layouts,
        props.breakpoints,
        newBreakpoint,
        lastBreakpoint,
        newCols,
        props.verticalCompact
      );

      // Store the new layout.
      layouts[newBreakpoint] = layout;

      if (lastBreakpoint !== newBreakpoint) {
        content.emit("breakpoint-changed", newBreakpoint, layout);
      }

      // new prop sync
      content.emit("update:layout", layout);

      lastBreakpoint = newBreakpoint;
      eventBus.emit(
        "setColNum",
        getColsFromBreakpoint(newBreakpoint, props.cols)
      );
    }

    // clear all responsive layouts
    function initResponsiveFeatures() {
      // clear layouts
      layouts = Object.assign({}, props.responsiveLayouts);
    }

    // find difference in layouts
    function findDifference(layout, originalLayout) {
      //Find values that are in result1 but not in result2
      let uniqueResultOne = layout.filter((obj) => {
        return !originalLayout.some((obj2) => {
          return obj.i === obj2.i;
        });
      });

      //Find values that are in result2 but not in result1
      let uniqueResultTwo = originalLayout.filter((obj) => {
        return !layout.some((obj2) => {
          return obj.i === obj2.i;
        });
      });

      //Combine the two arrays of unique entries#
      return uniqueResultOne.concat(uniqueResultTwo);
    }

    return {
      placeholder,
      isDragging,
      mergedStyle,
      item,
    };
  }
});
</script>

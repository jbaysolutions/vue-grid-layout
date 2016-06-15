<template>
    <div v-el:item
             class="vue-grid-item"
             :class="{ 'vue-resizable' : isResizable, 'vue-draggable-dragging' : isDragging, 'cssTransforms' : useCssTransforms }"
             :style="style"
        >
        <slot></slot>
        <!--span class="text">{{id}}</span-->
            <!--<span class="text">{{i}}</span>-->
            <!--<pre>
                x: {{ x | json}}
                y: {{ y | json}}
                w: {{ w | json}}
                h: {{ h | json}}
            </pre>-->
            <span v-if="isResizable" v-el:handle class="vue-resizable-handle"></span>
        </div>
    </div>
</template>
<style>
    .vue-grid-item {
        transition: all 200ms ease;
        transition-property: left, top;
    }
    .vue-grid-item.cssTransforms {
        transition-property: transform;
    }
    .vue-grid-item.resizing {
        z-index: 1;
        opacity: 0.9;
    }

    .vue-grid-item.vue-draggable-dragging {
        /*transition: none;*/
        /*background-color: red;*/
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
        background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');
        background-position: bottom right;
        padding: 0 3px 3px 0;
        background-repeat: no-repeat;
        background-origin: content-box;
        box-sizing: border-box;
        cursor: se-resize;
    }

    .vue-resizable {
        position: relative;
    }
    .vue-resizable-handle {
        z-index: 5000;
        position: absolute;
        width: 20px;
        height: 20px;
        bottom: 0;
        right: 0;
        background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');
        background-position: bottom right;
        padding: 0 3px 3px 0;
        background-repeat: no-repeat;
        background-origin: content-box;
        box-sizing: border-box;
        cursor: se-resize;
    }

    .vue-grid-item:not(.vue-grid-placeholder) {
        background: #ccc;
        border: 1px solid black;
    }

    .vue-grid-item.static {
        background: #cce;
    }
    .vue-grid-item .text {
        font-size: 24px;
        text-align: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: 24px;
    }
    .vue-grid-item .minMax {
        font-size: 12px;
    }
    .vue-grid-item .add {
        cursor: pointer;
    }

</style>
<script>
    import {setTopLeft, setTransform, createMarkup, getLayoutItem} from './utils';

    import {getControlPosition, offsetXYFromParentOf, createCoreData} from './draggableUtils';
    var VueDragDrop = require('vue-drag-and-drop');
    var Vue = require('vue');
    Vue.use(VueDragDrop);

    export default {
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
            },*/
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
            id: {
                required: true
            },
        },
        data: function() {
            return {
                cols: 1,
                containerWidth: 100,
                rowHeight: 30,
                margin: [10, 10],
                maxRows: Infinity,
                minH: 1,
                minW: 1,
                maxH: Infinity,
                maxW: Infinity,
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
                className: "",
                style: ""
            }
        },
        ready: function() {
            this.cols = this.$parent.colNum;
            this.rowHeight = this.$parent.rowHeight;
            this.margin = this.$parent.margin;
            this.maxRows = this.$parent.maxRows;
            this.minH = this.$parent.minH;
            this.minW = this.$parent.minW;
            this.maxH = this.$parent.maxH;
            this.maxW = this.$parent.maxW;
            this.isDraggable = this.$parent.isDraggable;
            this.isResizable = this.$parent.isResizable;
            this.useCssTransforms = this.$parent.useCssTransforms;
            this.createStyle();
//            var self = this;
            if (this.isDraggable) {
                var element = this.$els.item;
                element.setAttribute('draggable', 'true');
                element.addEventListener('dragstart', this.handleDragStart, false);
                element.addEventListener('drag', this.handleDrag, false);
                element.addEventListener('dragend', this.handleDragEnd, false);
            }
            if (this.isResizable) {
                var resizeHandle = this.$els.handle;
                resizeHandle.setAttribute('draggable', 'true');
                resizeHandle.addEventListener('dragstart', this.handleResize, false);
                resizeHandle.addEventListener('drag', this.handleResize, false);
                resizeHandle.addEventListener('dragend', this.handleResize, false);
            }
            //this.pos = this.calcPosition();
        },
        watch: {
            cols: function() {
                this.createStyle();
            },
            containerWidth: function() {
                this.createStyle();
            },
            x: function() {
                this.createStyle();
            },
            y: function() {
                this.createStyle();
            },
            h: function() {
                this.createStyle();
            },
            w: function() {
                this.createStyle();
            }
        },
        computed: {
            /*createStyle: function() {
                var pos = this.calcPosition(this.x, this.y, this.w, this.h);
                //const {usePercentages, containerWidth, useCssTransforms} = this.props;

                let style;
                // CSS Transforms support (default)
                if (this.useCssTransforms) {
                    style = setTransform(pos.top, pos.left, pos.width, pos.height);
                }
                // top,left (slow)
                else {
                    style = setTopLeft(pos.top, pos.left, pos.width, pos.height);
                }

                return createMarkup(style);
            },*/
        },
        methods: {
            createStyle: function() {
                var pos = this.calcPosition(this.x, this.y, this.w, this.h);
                //const {usePercentages, containerWidth, useCssTransforms} = this.props;

                let style;
                // CSS Transforms support (default)
                if (this.useCssTransforms) {
                    style = setTransform(pos.top, pos.left, pos.width, pos.height);
                }
                // top,left (slow)
                else {
                    style = setTopLeft(pos.top, pos.left, pos.width, pos.height);
                }

                this.style = createMarkup(style);
            },
            handleResize: function(event) {
                const position = getControlPosition(event);
                // Get the current drag point from the event. This is used as the offset.
                if (position == null) return; // not possible but satisfies flow
                const {x, y} = position;

                if (x < 100 && y < 100) {
//                    console.log("### NO => x=" + x + ", y=" + y);
                    return;
                }
                const newSize = {width: 0, height: 0};
                switch (event.type) {
                    case "dragstart":
                        var pos = this.calcPosition(this.x, this.y, this.w, this.h);
                        newSize.width = pos.width;
                        newSize.height = pos.height;
                        this.resizing = newSize;
                        this.isResizing = true;
                        break;
                    case "dragend":
                        //console.log("### resize end => x=" +this.x + " y=" + this.y + " w=" + this.w + " h=" + this.h);
                        var pos = this.calcPosition(this.x, this.y, this.w, this.h);
                        newSize.width = pos.width;
                        newSize.height = pos.height;
//                        console.log("### resize end => " + JSON.stringify(newSize));
                        this.resizing = null;
                        this.isResizing = false;
                        break;
                    case "drag":
//                        console.log("### resize => " + event.type + ", lastW=" + this.lastW + ", lastH=" + this.lastH);
                        const coreEvent = createCoreData(this.lastW, this.lastH, x, y);
//                                console.log("### DRAG: " + JSON.stringify(coreEvent));
                        newSize.width = this.resizing.width + coreEvent.deltaX;
                        newSize.height = this.resizing.height + coreEvent.deltaY;

                        ///console.log("### resize => " + event.type + ", deltaX=" + coreEvent.deltaX + ", deltaY=" + coreEvent.deltaY);
                        this.resizing = newSize;
                        break;
                }
/*
                const coreEvent = createCoreData(self.lastW, self.lastH, x, y);
                let width = this.width + coreEvent.deltaX, height = this.height + coreEvent.deltaY;
*/
                // Get new WH
                var pos = this.calcWH(newSize.height, newSize.width);
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

                var shouldUpdate = false;
                if (this.lastW !== x && this.lastH !== y) {
                    shouldUpdate = true;
                }

                this.lastW = x;
                this.lastH = y;

                if (shouldUpdate) {
                    this.$dispatch("resizeEvent", event.type, this.id, this.h, this.w);
                }

            },
            handleDragStart: function(event) {
//                console.log("### DRAG START");
                this.dragHandler(event, "dragstart");
                /*// Create an event object with all the data parents need to make a decision here.
                const coreEvent = createCoreData(this, x, y);*/


            },
            handleDrag: function(event) {
                this.dragHandler(event, "drag");
            },
            handleDragEnd: function(event) {
//                console.log("### DRAG END");
                this.dragHandler(event, "dragend");
            },
            dragHandler(event, type) {
                if (this.isResizing) return;

                const position = getControlPosition(event);
//                var eventName = event.type;
                var eventName = type;

                // Get the current drag point from the event. This is used as the offset.
                if (position == null) return; // not possible but satisfies flow
                const {x, y} = position;

                var shouldUpdate = false;

                const newPosition = {top: 0, left: 0};
                switch (eventName) {
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
                    case "drag":
                        const coreEvent = createCoreData(this.lastX, this.lastY, x, y);
                        newPosition.left = this.dragging.left + coreEvent.deltaX;
                        newPosition.top = this.dragging.top + coreEvent.deltaY;
                        this.dragging = newPosition;
                        break;
                }

                // Get new XY
                var pos = this.calcXY(newPosition.top, newPosition.left);
                this.x = pos.x;
                this.y = pos.y;

                if (this.lastX !== x && this.lastY !== y) {
                    shouldUpdate = true;
                }

                this.lastX = x;
                this.lastY = y;

                if (shouldUpdate) {
                    this.$dispatch("dragEvent", eventName, this.id, this.x, this.y);
                }
            },
            calcPosition: function(x, y, w, h) {
                const colWidth = this.calcColWidth();

                const out = {
                    left: Math.round(colWidth * x + (x + 1) * this.margin[0]),
                    top: Math.round(this.rowHeight * y + (y + 1) * this.margin[1]),
                    // 0 * Infinity === NaN, which causes problems with resize constriants;
                    // Fix this if it occurs.
                    // Note we do it here rather than later because Math.round(Infinity) causes deopt
                    width: w === Infinity ? w : Math.round(colWidth * w + Math.max(0, w - 1) * this.margin[0]),
                    height: h === Infinity ? h : Math.round(this.rowHeight * h + Math.max(0, h - 1) * this.margin[1])
                };

                /*if (state && state.resizing) {
                 out.width = Math.round(state.resizing.width);
                 out.height = Math.round(state.resizing.height);
                 }

                 if (state && state.dragging) {
                 out.top = Math.round(state.dragging.top);
                 out.left = Math.round(state.dragging.left);
                 }*/

                return out;
            },
            /**
             * Translate x and y coordinates from pixels to grid units.
             * @param  {Number} top  Top position (relative to parent) in pixels.
             * @param  {Number} left Left position (relative to parent) in pixels.
             * @return {Object} x and y in grid units.
             */
            calcXY(top, left) {
                const colWidth = this.calcColWidth();

                // left = colWidth * x + margin * (x + 1)
                // l = cx + m(x+1)
                // l = cx + mx + m
                // l - m = cx + mx
                // l - m = x(c + m)
                // (l - m) / (c + m) = x
                // x = (left - margin) / (coldWidth + margin)
                let x = Math.round((left - this.margin[0]) / (colWidth + this.margin[0]));
                let y = Math.round((top - this.margin[1]) / (this.rowHeight + this.margin[1]));

                // Capping
                x = Math.max(Math.min(x, this.cols - this.w), 0);
                y = Math.max(Math.min(y, this.maxRows - this.h), 0);

                return {x, y};
            },
            // Helper for generating column width
            calcColWidth() {
                var colWidth = (this.containerWidth - (this.margin[0] * (this.cols + 1))) / this.cols;
//                console.log("### COLS=" + this.cols + " COL WIDTH=" + colWidth);
                return colWidth;
            },

            /**
             * Given a height and width in pixel values, calculate grid units.
             * @param  {Number} height Height in pixels.
             * @param  {Number} width  Width in pixels.
             * @return {Object} w, h as grid units.
             */
            calcWH(height, width) {
                const colWidth = this.calcColWidth();

                // width = colWidth * w - (margin * (w - 1))
                // ...
                // w = (width + margin) / (colWidth + margin)
                let w = Math.round((width + this.margin[0]) / (colWidth + this.margin[0]));
                let h = Math.round((height + this.margin[1]) / (this.rowHeight + this.margin[1]));

                // Capping
                w = Math.max(Math.min(w, this.cols - this.x), 0);
                h = Math.max(Math.min(h, this.maxRows - this.y), 0);
                return {w, h};
            }
        },
        events: {
            updateWidth: function(width) {
                this.containerWidth = width;
            },
            compact: function(layout) {
                var l = getLayoutItem(layout, this.id);
                this.x = l.x;
                this.y = l.y;
                this.h = l.h;
                this.w = l.w;
            }
        }
    }
</script>
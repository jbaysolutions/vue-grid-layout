<template>
    <!--<pre>{{layout | json}}</pre>-->
    Current Breakpoint: {{breakpoint}} ({{colNum}} columns)
    <div class="vue-grid-layout container" :style="mergedStyle">
        <slot></slot>
    </div>
</template>
<style>
    .vue-grid-layout {
        position: relative;
        transition: height 200ms ease;
    }
</style>
<script>
    var Vue = require('vue');

    import {bottom, compact, getLayoutItem, moveElement, validateLayout} from './utils';
    import {getBreakpointFromWidth, getColsFromBreakpoint, findOrGenerateResponsiveLayout} from './responsiveUtils';
    import GridItem from './GridItem.vue'

    export default {
        name: "ResponsiveGridLayout",
        components: {
            GridItem,
        },
        props: {
            autoSize: {
                type: Boolean,
                default: true
            },
            rowHeight: {
                type: Number,
                default: 150
            },
            maxRows: {
                type: Number,
                default: Infinity
            },
            // Margin between items [x, y] in px
            margin: {
                type: Array,
                default: function () { return [10, 10]; }
            },
            isDraggable: {
                type: Boolean,
                default: true
            },
            isResizable: {
                type: Boolean,
                default: true
            },
            useCssTransforms: {
                type: Boolean,
                default: true
            },
            verticalCompact: {
                type: Boolean,
                default: true
            },

            // Optional, but if you are managing width yourself you may want to set the breakpoint
            // yourself as well.
            /*breakpoint: {
                type: String,
                required: false,
                default: "lg"
            },*/
            // {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}
            breakpoints: {
                type: Object,
                required: false,
                default: function() {return {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
            },

            // # of cols. This is a breakpoint -> cols map
            cols: {
                type: Object,
                required: false,
                default: function() {return {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
            },

            // layouts is an object mapping breakpoints to layouts.
            // e.g. {lg: Layout, md: Layout, ...}
            layouts: {
                type: Object,
                required: true
            },

            layout: []
        },
        data: function() {
            return {
                width: null,
                colNum: 0,
                breakpoint: "lg",
                lastBreakpoint: null,
                mergedStyle: {}
            };
        },
        ready() {
            //Object.keys(this.layouts).forEach((key) => validateLayout(self.layouts[key], 'layouts.' + key));
//            this.width = this.$parent.$el.offsetWidth - (this.margin[0] * 2);
            if (this.width === null) {
                this.onWindowResize();

                this.breakpoint = getBreakpointFromWidth(this.breakpoints, this.width);

                this.colNum = getColsFromBreakpoint(this.breakpoint, this.cols);
                // Get the initial layout. This can tricky; we try to generate one however possible if one doesn't exist
                // for this layout.
                this.layout = findOrGenerateResponsiveLayout(this.layouts, this.breakpoints, this.breakpoint,
                        this.breakpoint, this.colNum, this.verticalCompact);
                this.lastBreakpoint = this.breakpoint;
                compact(this.layout, this.verticalCompact);
            }

            window.addEventListener('resize', this.onWindowResize);
        },
        watch: {
            width: function() {
                this.onWidthChange();
            },
            /*breakpoint: function() {
                this.onWidthChange();
            },*/
            breakpoints: function() {
                this.onWidthChange();
            },
            cols: function() {
                this.onWidthChange();
            },
            /*layouts: function() {
                this.onWidthChange();
            }*/
        },
        methods: {
            onWindowResize: function() {
                this.$nextTick(function() {
                    if (this.$parent !== null && this.$parent.$el.offsetWidth !== undefined) {
                        this.width = this.$parent.$el.offsetWidth;
                    }
                });
            },
            onWidthChange: function() {
                this.lastBreakpoint = this.breakpoint;
                this.breakpoint = getBreakpointFromWidth(this.breakpoints, this.width);
                // Find or generate a new one.
                const newColNum: number = getColsFromBreakpoint(this.breakpoint, this.cols);
                let layout = findOrGenerateResponsiveLayout(this.layouts, this.breakpoints, this.breakpoint,
                        this.lastBreakpoint, newColNum, this.verticalCompact);

                // Store this new layout as well.
                this.layouts[this.breakpoint] = layout;

                this.layout = layout;
                this.colNum = newColNum;

//                console.log("#### COLS => " + this.colNum);
                this.$children.forEach(function(item) {
                    item.cols = newColNum;
                });
//                this.lastBreakpoint = this.breakpoint;
                compact(this.layout, this.verticalCompact);

                this.$nextTick(function() {
                    this.$broadcast("updateWidth", this.width);
                    this.updateHeight();
                });

            },
            updateHeight: function() {
                this.mergedStyle = {
                    height: this.containerHeight()
                };
            },
            containerHeight: function() {
                if (!this.autoSize) return;
                return bottom(this.layout) * (this.rowHeight + this.margin[1]) + this.margin[1] + 'px';
            },
        },
        events: {
            dragEvent: function(eventName, id, x, y) {
                if (eventName === "drag" && x == 0 && y == 0) {
                    return;
                }
//                console.log(eventName + " id=" + id + ", x=" + x + ", y=" + y);
                var l = getLayoutItem(this.layout, id);

                /*
                 // Create placeholder (display only)
                 var placeholder = {
                 w: l.w, h: l.h, x: l.x, y: l.y, placeholder: true, id: id
                 };
                 */

                // Move the element to the dragged location.
                this.layout = moveElement(this.layout, l, x, y, true);
                this.layout = compact(this.layout, this.verticalCompact);

                // needed because vue can't detect changes on array element properties
                this.$broadcast("compact", this.layout);
                this.updateHeight();
            },
            resizeEvent: function(eventName, id, h, w) {
                if (eventName === "drag" && h < -40 && w < -40) {
                    return;
                }

                /*
                 // Create placeholder (display only)
                 var placeholder = {
                 w: l.w, h: l.h, x: l.x, y: l.y, placeholder: true, id: id
                 };
                 */

                // Move the element to the dragged location.
                this.layout = compact(this.layout, this.verticalCompact);
                this.updateHeight();
            },
        }
    }
</script>
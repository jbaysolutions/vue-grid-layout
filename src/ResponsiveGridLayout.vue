<template>
    <!--<pre>{{lastLayoutLength|json}}</pre>
    <pre>{{layout.length|json}}</pre>-->
    <!--<pre>{{breakpoint|json}}</pre>
    <pre>{{layouts|json}}</pre>-->
    <!--<pre>{{layout|json}}</pre>-->
    <!--<pre>width: {{width | json}}</pre>
    <pre>mergedStyle: {{mergedStyle | json}}</pre>-->
    <div v-el:item class="vue-grid-layout" :style="mergedStyle">
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

    var elementResizeDetectorMaker = require("element-resize-detector");

    import {bottom, compact, getLayoutItem, moveElement, validateLayout, findItemInArray, findAndRemove} from './utils';
    import {getBreakpointFromWidth, getColsFromBreakpoint, findOrGenerateResponsiveLayout, generateResponsiveLayout} from './responsiveUtils';
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
            breakpoint: {
                type: String,
                required: false,
                default: "lg"
            },
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

            colNum: {
                type: Number,
                required: false,
                default: 0
            },

            layout: [],

        },
        data: function() {
            return {
                width: null,
                lastBreakpoint: null,
                mergedStyle: {},
                lastLayoutLength: 0,
            };
        },
        ready() {
            validateLayout(this.layout);
            var self = this;
            window.onload = function() {
                if (self.width === null) {
                    self.onWindowResize();
                    //self.width = self.$el.offsetWidth;
                    window.addEventListener('resize', self.onWindowResize);
                }
                self.breakpoint = getBreakpointFromWidth(self.breakpoints, self.width);

                self.colNum = getColsFromBreakpoint(self.breakpoint, self.cols);

                self.lastBreakpoint = self.breakpoint;

                // Get the initial layout
                self.layout = findOrGenerateResponsiveLayout(self.layouts, self.layout, self.breakpoints, self.breakpoint,
                        self.lastBreakpoint, self.colNum, self.verticalCompact);

                self.updateHeight();
                self.$nextTick(function() {
//                    self.onWindowResize();
                    var erd = elementResizeDetectorMaker({
                        strategy: "scroll" //<- For ultra performance.
                    });
                    erd.listenTo(self.$els.item, function(element) {
                        self.onWindowResize();
                        /*var width = element.offsetWidth;
                        var height = element.offsetHeight;
                        console.log("Size: " + width + "x" + height);*/
                    });
                });
            }
        },
        watch: {
            width: function() {
                this.onWidthChange();
            },
            breakpoints: function() {
                this.onWidthChange();
            },
            cols: function() {
                this.onWidthChange();
            },
            layout: function() {
                if (this.layout.length !== this.lastLayoutLength) {
                    var self = this;
                    var keys = Object.keys(this.layouts);

//                    console.log("#### item ADDED OR REMOVED! => " + JSON.stringify(this.layout));
//                    console.log("breakpoint: " + this.breakpoint + ", length=" + this.layout.length + ", lastLength=" + this.lastLayoutLength);
                    keys.forEach(function(key) {
                        if (key !== self.breakpoint) {
                            var layout = self.layouts[key];
                            if (self.layout.length > self.lastLayoutLength) {
                                // add to other layouts
                                layout.forEach(function(item) {
                                    if (!findItemInArray(layout, "i", item.i)) {
                                        layout.push(item);
                                    }
                                });
                            } else {
                                // remove from other layouts
                                layout.forEach(function(item) {
                                    if (!findItemInArray(self.layout, "i", item.i)) {
                                        findAndRemove(layout, "i", item.i);
                                        //layout.splice(layout.indexOf(item), 1);
                                    }
                                });
                            }
                        }
                    });

                    this.lastLayoutLength = this.layout.length;
                    //this.onWidthChange();

                    /*this.layout = generateResponsiveLayout(this.layout, this.breakpoints, this.breakpoint,
                            this.lastBreakpoint, this.colNum, this.verticalCompact);

                    this.$nextTick(function () {*/
                    compact(this.layout, this.verticalCompact);
                    this.$broadcast("updateWidth", this.width);
                    this.updateHeight();
                }
            }
        },
        methods: {
            onWindowResize: function() {
                if (this.$els !== null && this.$els.item !== null) {
                    this.width = this.$els.item.offsetWidth;
                }
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
            dragEvent: function(eventName, i, x, y) {
                if (eventName === "drag" && x == 0 && y == 0) {
                    return;
                }
//                console.log(eventName + " id=" + id + ", x=" + x + ", y=" + y);
                var l = getLayoutItem(this.layout, i);

                /*
                 // Create placeholder (display only)
                 var placeholder = {
                 w: l.w, h: l.h, x: l.x, y: l.y, placeholder: true, id: id
                 };
                 */

                // Move the element to the dragged location.
                this.layout = moveElement(this.layout, l, x, y, true);
                compact(this.layout, this.verticalCompact);

                // needed because vue can't detect changes on array element properties
                this.$broadcast("compact", this.layout);
                this.updateHeight();
            },
            resizeEvent: function(eventName, i, h, w) {
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
                compact(this.layout, this.verticalCompact);
                this.updateHeight();
            },
        }
    }
</script>
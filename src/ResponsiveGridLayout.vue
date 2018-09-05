<template>
    <div ref="item" class="vue-grid-layout" :style="mergedStyle">
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
    import {addWindowEventListener, removeWindowEventListener} from "./DOM";

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
            colNum: {
                type: Number,
                required: false,
                default: 0
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
/*
            breakpoint: {
                type: String,
                required: false,
                default: "lg"
            },
*/
            // {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}
/*
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
*/

            layout: [],

        },
        data: function() {
            return {
                originalCols: null,
                width: null,
                mergedStyle: {},
                lastLayoutLength: 0,
            };
        },
        beforeDestroy: function(){
            //Remove listeners
            removeWindowEventListener("resize", self.onWindowResize)
        },
        mounted() {
            this.$nextTick(function () {
                validateLayout(this.layout);
                this.originalCols = this.colNum;
                addWindowEventListener("load", self.onWindowLoad.bind(this));
                
            });
        },
        watch: {
            width: function() {
                if (this.width > 768) {
                    this.colNum = this.originalCols;
                } else {
                    this.colNum = 2;
                }
                this.$nextTick(function() {
                    //this.$broadcast("updateWidth", this.width, this.colNum);
                    var self = this;
                    this.$children.forEach(function(child) {
                        child.updateWidth(self.width);
                    });
                    this.updateHeight();
                    compact(this.layout, this.verticalCompact);
                });
            },
            layout: function() {
                if (this.layout !== undefined && this.layout.length !== this.lastLayoutLength) {
                    this.lastLayoutLength = this.layout.length;
                    compact(this.layout, this.verticalCompact);

                    //this.$nextTick(function () {
                    //this.$broadcast("updateWidth", this.width);
                    var self = this;
                    this.$children.forEach(function(child) {
                        child.updateWidth(self.width);
                    });

                    this.updateHeight();
                    //});
                }
            }
        },
        methods: {
            onWindowLoad: function(){
                var self = this;
                this.onWindowResize();
                //self.width = self.$el.offsetWidth;
                addWindowEventListener('resize', self.onWindowResize);
                compact(self.layout, self.verticalCompact);
                self.updateHeight();
                self.$nextTick(function() {
                    //self.onWindowResize();
                    var erd = elementResizeDetectorMaker({
                        strategy: "scroll" //<- For ultra performance.
                    });
                    erd.listenTo(self.$refs.item, function(element) {
                        self.onWindowResize();
                        /*var width = element.offsetWidth;
                        var height = element.offsetHeight;
                        console.log("Size: " + width + "x" + height);*/
                    });
                });
                
            },
            onWindowResize: function() {
                if (this.$refs !== null && this.$refs.item !== null) {
                    this.width = this.$refs.item.offsetWidth;
                }
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
            dragEvent: function(eventName, id, x, y) {
                var self = this;
//                console.log(eventName + " id=" + id + ", x=" + x + ", y=" + y);
                var l = getLayoutItem(this.layout, id);
                // Move the element to the dragged location.
                this.layout = moveElement(this.layout, l, x, y, true);
                compact(this.layout, this.verticalCompact);
                // needed because vue can't detect changes on array element properties
                //this.$broadcast("compact", this.layout);
                this.$children.forEach(function(child) {
                    child.compact(self.layout);
                });

                this.updateHeight();
            },
            resizeEvent: function(eventName, id, h, w) {
                var self = this;
                /*if (eventName === "drag" && h < -40 && w < -40) {
                 return;
                 }*/
//                console.log(eventName + " id=" + id);
                // Move the element to the dragged location.
                compact(this.layout, this.verticalCompact);
                //this.$broadcast("compact", this.layout);
                this.$children.forEach(function(child) {
                    child.compact(self.layout);
                });

                this.updateHeight();
            },
        },
        /*events: {
        }*/
    }
</script>
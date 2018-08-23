<template>
    <div ref="item" class="vue-grid-layout" :style="mergedStyle">
        <template v-for="item in layout">
            <div :key="item.i">
                <slot :item="item"></slot>
            </div>
        </template>
        <grid-item class="vue-grid-placeholder"
                   v-show="isDragging"
                   :x="placeholder.x"
                   :y="placeholder.y"
                   :w="placeholder.w"
                   :h="placeholder.h"
                   :i="placeholder.i"></grid-item>
    </div>
</template>
<style>
    .vue-grid-layout {
        position: relative;
        transition: height 200ms ease;
    }
</style>
<script>
    import Vue from 'vue';
    var elementResizeDetectorMaker = require("element-resize-detector");

    import {bottom, compact, getLayoutItem, moveElement, validateLayout, cloneLayout, correctBounds, arrayUnique} from './new_utils';
    import {synchronizeLayoutWithChildren, getBreakpointFromWidth, getColsFromBreakpoint, findOrGenerateResponsiveLayout} from "./new_responsiveUtils";
    //var eventBus = require('./eventBus');
    import GridItem from './GridItem.vue'

    export default {
        name: "ResponsiveGridLayout",
        provide() {
            return {
                eventBus: null
            }
        },
        components: {
            GridItem,
        },
        props: {
            // If true, the container height swells and contracts to fit contents
            autoSize: {
                type: Boolean,
                default: true
            },
            colNum: {
                type: Number,
                default: 12
            },
            rowHeight: {
                type: Number,
                default: 150
            },
            maxRows: {
                type: Number,
                default: Infinity
            },
            margin: {
                type: Array,
                default: function () {
                    return [10, 10];
                }
            },
            isDraggable: {
                type: Boolean,
                default: true
            },
            isResizable: {
                type: Boolean,
                default: true
            },
            isMirrored: {
                type: Boolean,
                default: false
            },
            useCssTransforms: {
                type: Boolean,
                default: true
            },
            compactType: {
                type: String,
                default: 'vertical'
            },
            layout: {
                type: Array,
                required: true,
            },
            breakpoints:{
                type: Object,
                default: function(){return{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            },
            cols:{
                type: Object,
                default: function(){return{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }},
            },
        },
        data: function () {
            return {
                width: null,
                mergedStyle: {},
                lastLayoutLength: 0,
                lastBreakpoint: null,
                isDragging: false,
                layouts: {},
                length: 0,
                originalLayout: null,
                placeholder: {
                    x: 0,
                    y: 0,
                    w: 0,
                    h: 0,
                    i: -1
                },
            };
        },
        created () {
            var self = this;

            // Accessible refernces of functions for removing in beforeDestroy
            self.resizeEventHandler = function(eventType, i, x, y, h, w) {
                self.resizeEvent(eventType, i, x, y, h, w);
            };

            self.dragEventHandler = function(eventType, i, x, y, h, w) {
                self.dragEvent(eventType, i, x, y, h, w);
            };

            self._provided.eventBus =  new Vue();
            self.eventBus = self._provided.eventBus;
            // listeners
            self.eventBus.$on('resizeEvent', self.resizeEventHandler);
            self.eventBus.$on('dragEvent', self.dragEventHandler);
        },
        beforeDestroy: function(){
            //Remove listeners
            this.eventBus.$off('resizeEvent', self.resizeEventHandler);
            this.eventBus.$off('dragEvent', self.dragEventHandler);
            window.removeEventListener("resize", self.onWindowResize)
        },
        mounted: function() {
            this.$nextTick(function () {
                validateLayout(this.layout);

                this.length = this.layout.length;
                this.originalLayout = this.layout;

                var self = this;
                this.$nextTick(function() {
                    if (self.width === null) {
                        self.onWindowResize();
                        //self.width = self.$el.offsetWidth;
                        window.addEventListener('resize', self.onWindowResize);
                    }

                    self.updateHeight();
                    self.$nextTick(function () {
                        var erd = elementResizeDetectorMaker({
                            strategy: "scroll" //<- For ultra performance.
                        });
                        erd.listenTo(self.$refs.item, function (element) {
                            self.onWindowResize();
                        });
                    });
                });
                window.onload = function() {
                    if (self.width === null) {
                        self.onWindowResize();
                        //self.width = self.$el.offsetWidth;
                        window.addEventListener('resize', self.onWindowResize);
                    }

                    self.updateHeight();
                    self.$nextTick(function () {
                        var erd = elementResizeDetectorMaker({
                            strategy: "scroll" //<- For ultra performance.
                        });
                        erd.listenTo(self.$refs.item, function (element) {
                            self.onWindowResize();
                        });
                    });

                };
            });
        },
        watch: {
            width: function () {
                this.$nextTick(function () {
                    this.eventBus.$emit("updateWidth", this.width);
                    this.responsiveGridLayout();
                });
            },
            layout: function(val){
                if(val.length != this.length){
                    this.responsiveGridLayout();
                    this.length = val.length;
                }
            },
            colNum: function (val) {
                this.eventBus.$emit("setColNum", val);
            },
            rowHeight: function() {
                this.eventBus.$emit("setRowHeight", this.rowHeight);
            },
            isDraggable: function() {
                this.eventBus.$emit("setDraggable", this.isDraggable);
            },
            isResizable: function() {
                this.eventBus.$emit("setResizable", this.isResizable);
            }
        },
        methods: {
            responsiveGridLayout(){
                let newBreakpoint = getBreakpointFromWidth(this.breakpoints, this.width);
                let newCols = getColsFromBreakpoint(newBreakpoint, this.cols);

                // if breakpoint wasnt viewed already
                if(!this.layouts[newBreakpoint]){
                    this.layouts[newBreakpoint] = cloneLayout(this.originalLayout);
                }
                // save actual layout in layouts
                this.layouts[this.lastBreakpoint] = cloneLayout(this.layout);


                // Find or generate a new layout.
                let layout = findOrGenerateResponsiveLayout(
                    this.layout,
                    this.layouts,
                    this.breakpoints,
                    newBreakpoint,
                    this.lastBreakpoint,
                    newCols,
                    this.compactType
                );

                // compact layout
                compact(layout, self.compactType, self.cols);
                // new prop sync
                this.$emit('update:layout', layout);

                this.layoutUpdate();
                this.lastBreakpoint = newBreakpoint;
                this.eventBus.$emit("setColNum", getColsFromBreakpoint(newBreakpoint, this.cols));
            },
            layoutUpdate() {
                if (this.layout !== undefined) {
                    if (this.layout.length !== this.lastLayoutLength) {
                        //console.log("### LAYOUT UPDATE!");
                        this.lastLayoutLength = this.layout.length;
                    }

                    this.eventBus.$emit("compact");
                    this.eventBus.$emit("updateWidth", this.width);
                    this.updateHeight();
                }
            },
            updateHeight: function () {
                this.mergedStyle = {
                    height: this.containerHeight()
                };
            },
            onWindowResize: function () {
                if (this.$refs !== null && this.$refs.item !== null && this.$refs.item !== undefined) {
                    this.width = this.$refs.item.offsetWidth;
                }
            },
            containerHeight: function () {
                if (!this.autoSize) return;
                return bottom(this.layout) * (this.rowHeight + this.margin[1]) + this.margin[1] + 'px';
            },
            dragEvent: function (eventName, id, x, y, h, w) {
                if (eventName === "dragmove" || eventName === "dragstart") {
                    this.placeholder.i = id;
                    this.placeholder.x = x;
                    this.placeholder.y = y;
                    this.placeholder.w = w;
                    this.placeholder.h = h;
                    this.$nextTick(function() {
                        this.isDragging = true;
                    });
                    //this.$broadcast("updateWidth", this.width);
                    this.eventBus.$emit("updateWidth", this.width);
                } else {
                    this.$nextTick(function() {
                        this.isDragging = false;
                    });
                }
                //console.log(eventName + " id=" + id + ", x=" + x + ", y=" + y);
                var l = getLayoutItem(this.layout, id);
                //GetLayoutItem sometimes returns null object
                if (l === undefined || l === null){
                    l = {x:0, y:0}
                }
                l.x = x;
                l.y = y;
                // Move the element to the dragged location.
                moveElement(this.layout, l, x, y, true);
                this.responsiveGridLayout();

                if (eventName === 'dragend') this.$emit('layout-updated', this.layout);
            },
            resizeEvent: function (eventName, id, x, y, h, w) {
                if (eventName === "resizestart" || eventName === "resizemove") {
                    this.placeholder.i = id;
                    this.placeholder.x = x;
                    this.placeholder.y = y;
                    this.placeholder.w = w;
                    this.placeholder.h = h;
                    this.$nextTick(function() {
                        this.isDragging = true;
                    });
                    //this.$broadcast("updateWidth", this.width);
                    this.eventBus.$emit("updateWidth", this.width);
                } else {
                    this.$nextTick(function() {
                        this.isDragging = false;
                    });
                }
                var l = getLayoutItem(this.layout, id);
                //GetLayoutItem sometimes return null object
                if (l === undefined || l === null){
                    l = {h:0, w:0}
                }
                l.h = h;
                l.w = w;
                this.responsiveGridLayout();

                if (eventName === 'resizeend') this.$emit('layout-updated', this.layout);
            },
        },
    }
</script>

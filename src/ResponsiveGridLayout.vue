<template>
    <!--<pre>{{layout | json}}</pre>-->
    Current Breakpoint: {{breakpoint}} ({{colNum}} columns)
    <grid-layout :width="width" :layout="layout" :cols="colNum" :row-height="rowHeight" :is-draggable="isDraggable" :vertical-compact="verticalCompact">
        <slot></slot>
    </grid-layout>
</template>
<style>
</style>
<script>
    var Vue = require('vue');

    import {compact, validateLayout} from './utils';
    import {getBreakpointFromWidth, getColsFromBreakpoint, findOrGenerateResponsiveLayout} from './responsiveUtils';
    import GridLayout from './GridLayout.vue'

    export default {
        name: "ResponsiveGridLayout",
        components: {
            GridLayout,
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
                width: 100,
                colNum: 0,
                breakpoint: "lg",
                lastBreakpoint: null,
            };
        },
        ready() {
            //Object.keys(this.layouts).forEach((key) => validateLayout(self.layouts[key], 'layouts.' + key));
            this.width = this.$parent.$el.offsetWidth - (this.margin[0] * 2);
            this.breakpoint = getBreakpointFromWidth(this.breakpoints, this.width);

            this.colNum = getColsFromBreakpoint(this.breakpoint, this.cols);
            // Get the initial layout. This can tricky; we try to generate one however possible if one doesn't exist
            // for this layout.
            this.layout = findOrGenerateResponsiveLayout(this.layouts, this.breakpoints, this.breakpoint,
                    this.breakpoint, this.colNum, this.verticalCompact);
            this.lastBreakpoint = this.breakpoint;
            compact(this.layout, this.verticalCompact);
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
                this.width = this.$parent.$el.offsetWidth - (this.margin[0] * 2);
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

                console.log("#### COLS => " + this.colNum);
                this.$children.forEach(function(item) {
                    item.cols = newColNum;
                });
//                this.lastBreakpoint = this.breakpoint;
                compact(this.layout, this.verticalCompact);
            }
        },
    }
</script>
<template>
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

    import {bottom, compact, getLayoutItem, moveElement} from './utils';
    import GridItem from './GridItem.vue'

    export default {
        name: "GridLayout",
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
            width: {
                type: Number,
                required: false,
                default: null
            },

            layout: [],
        },
        data: function() {
            return {
                mergedStyle: {
                }
            };
        },
        ready() {
            if (this.width === null) {
                this.$nextTick(function() {
//                    this.width = this.$parent.$el.offsetWidth - (this.margin[0] * 2);
                    this.width = this.$parent.$el.offsetWidth;
                    window.addEventListener('resize', this.onWindowResize);
                });
            }
            this.layout = compact(this.layout, this.verticalCompact);

            this.updateHeight();
        },
        watch: {
            width: function() {
                this.$nextTick(function() {
                    this.$broadcast("updateWidth", this.width);
                    this.updateHeight();
                });
            },
        },
        methods: {
            updateHeight: function() {
                this.mergedStyle = {
                    height: this.containerHeight()
                };
            },
            onWindowResize: function() {
                if (this.$parent !== null && this.$parent.$el.offsetWidth !== undefined) {
                    this.width = this.$parent.$el.offsetWidth;
                }
            },
            containerHeight: function() {
                if (!this.autoSize) return;
                return bottom(this.layout) * (this.rowHeight + this.margin[1]) + this.margin[1] + 'px';
            }
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
//                console.log(eventName + " id=" + id);

                /*
                 // Create placeholder (display only)
                 var placeholder = {
                     w: l.w, h: l.h, x: l.x, y: l.y, placeholder: true, id: id
                 };
                 */

                // Move the element to the dragged location.
                this.layout = compact(this.layout, this.verticalCompact);
                this.$broadcast("compact", this.layout);
            },
        }
    }
</script>
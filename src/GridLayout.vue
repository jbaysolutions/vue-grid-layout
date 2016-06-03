<template>
    <div id="content">
        <div class="vue-grid-layout container" style="{{mergedStyle}}">
            <grid-item v-for="layout in layouts"
                       :cols="cols"
                       :container-width="width"
                       :margin="margin"
                       :max-rows="maxRows"
                       :row-height="rowHeight"
                       :is-draggable="isDraggable"
                       :is-resizable="isResizable"
                       :use-css-transforms="useCssTransforms"
                       :x="layout.x"
                       :y="layout.y"
                       :w="layout.w"
                       :h="layout.h"
                       :i="layout.i"
            ></grid-item>
        </div>
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
//    var VueDragula = require('vue-dragula');

//    Vue.use(VueDragula);

    import {bottom, compact, getLayoutItem} from './utils';
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
            cols: {
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

            layouts: [],
        },
        data: function() {
            return {
                width: 100,
                activeDrag: null,
                dragging: false,
            };
        },
        ready() {
            var self = this;
            console.log("##### READYYYY!");

            this.width = this.$el.offsetWidth;
            this.layout = compact(this.layouts, true);
            /*this.$nextTick(function() {
            });*/
            /*Vue.vueDragula.eventBus.$on('drag', function (args) {
                console.log('drag: ' + args[0]);
                //if (!self.dragging) {
                    self.dragging = true;
                    var dragEl = args[1];
                    var obj = getLayoutItem(self.layouts, dragEl.getAttribute("data-id"));
                    //if (obj === null || obj === undefined) return;
                    self.activeDrag = obj;
                    console.log("activeDrag: " + JSON.stringify(self.activeDrag));
                    console.log("activeDrag: " + JSON.stringify(self.activeDrag));

                /!*} else {
                    //other stuf
                }*!/
            });
            Vue.vueDragula.eventBus.$on('drop', function (args) {
                console.log('drop: ' + args[0]);
                self.dragging = false;
                self.activeDrag = null;
                self.layout = compact(self.layouts, true);
            });
            Vue.vueDragula.eventBus.$on('cancel', function (args) {
                console.log('cancel: ' + args[0]);
                self.dragging = false;
                self.activeDrag = null;
            });
            Vue.vueDragula.eventBus.$on('dropModel', function (args) {
                console.log('dropModel: ' + args[0])
            });*/
        },
        computed: {
            mergedStyle: function() {
                return "height: " + this.containerHeight() + ";";
            }
        },
        methods: {
            containerHeight: function() {
                if (!this.autoSize) return;
                return bottom(this.layouts) * (this.rowHeight + this.margin[1]) + this.margin[1] + 'px';
            }
        },
        events: {
            dragStart: function(elem) {
                console.log("dragStart=" + elem.getAttribute("data-id"));
            },
            dragEnd: function(elem) {
                console.log("dragEnd=" + elem.getAttribute("data-id"));
            },
            handleDrop: function(elem1, elem2) {
                console.log("handleDrop 1=" + elem1 + " \n2="+ elem2);
            }
        }
    }
</script>
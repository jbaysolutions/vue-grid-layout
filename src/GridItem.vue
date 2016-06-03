<template>
    <div class="vue-grid-item" data-id="{{i}}" style="{{createStyle}}"
         <!--v-drag-and-drop
         drag-start="handleDragStart"
         drag-over="handleDragOver"
         drag-enter="handleDragEnter"
         drag-leave="handleDragLeave"
         drag-end="handleDragEnd"
         drop="handleDrop"-->
    >
        <span class="text">{{i}}</span>
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
        background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');
        background-position: bottom right;
        padding: 0 3px 3px 0;
        background-repeat: no-repeat;
        background-origin: content-box;
        box-sizing: border-box;
        cursor: se-resize;
    }
</style>
<script>
    import {setTopLeft, createMarkup} from './utils';
    var VueDragDrop = require('vue-drag-and-drop');
    var Vue = require('vue');
    Vue.use(VueDragDrop);

    export default {

        name: "GridItem",
        props: {
            cols: {
                type: Number,
                required: true
            },
            containerWidth: {
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
            },
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
            i: {
                default: ""
            }
        },
        watch: {
        },
        ready: function() {
            this.$el.setAttribute('draggable', 'true');
            this.$el.addEventListener('dragstart', this.handleDragStart, false);
            this.$el.addEventListener('dragend', this.handleDragEnd, false);
            //this.pos = this.calcPosition();
        },
        computed: {
            createStyle: function() {
                var pos = this.calcPosition();
                //const {usePercentages, containerWidth, useCssTransforms} = this.props;

                let style;
                // CSS Transforms support (default)
                /*if (useCssTransforms) {
                 style = setTransform(pos);
                 }
                 // top,left (slow)
                 else {*/
                style = setTopLeft(pos.top, pos.left, pos.width, pos.height);

                // This is used for server rendering.
                /*if (usePercentages) {
                 style.left = perc(pos.left / containerWidth);
                 style.width = perc(pos.width / containerWidth);
                 }*/
                //}

                return createMarkup(style);
            },
        },
        methods: {
            handleDragStart: function(event) {
                console.log("### DRAG START: ");
            },
            handleDragEnd: function(event) {
                console.log("### DRAG END: ");
            },
            calcColWidth: function() {
                return (this.containerWidth - (this.margin[0] * (this.cols + 1))) / this.cols;
            },
            calcPosition: function() {
                const colWidth = this.calcColWidth();

                const out = {
                    left: Math.round(colWidth * this.x + (this.x + 1) * this.margin[0]),
                    top: Math.round(this.rowHeight * this.y + (this.y + 1) * this.margin[1]),
                    // 0 * Infinity === NaN, which causes problems with resize constriants;
                    // Fix this if it occurs.
                    // Note we do it here rather than later because Math.round(Infinity) causes deopt
                    width: this.w === Infinity ? this.w : Math.round(colWidth * this.w + Math.max(0, this.w - 1) * this.margin[0]),
                    height: this.h === Infinity ? this.h : Math.round(this.rowHeight * this.h + Math.max(0, this.h - 1) * this.margin[1])
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
            handleDragStart: function(elem) {
                 console.log('handleDragStart', elem);
//                this.loggedEvent = 'handleDragStart';
            },
            handleDragOver: function(elem) {
//                 console.log('handleDragOver', elem);
//                this.loggedEvent = 'handleDragOver';
            },
            handleDragEnter: function(elem) {
                 console.log('handleDragEnter', elem);
//                this.loggedEvent = 'handleDragEnter';
            },
            handleDragLeave: function(elem) {
                console.log('handleDragLeave', elem);
//                this.loggedEvent = 'handleDragLeave';
            },
            handleDragEnd: function(elem) {
                 console.log('handleDragEnd', elem);
                console.log("LEFT: " + this.$el.offsetLeft);
                console.log("TOP: " + this.$el.offsetTop);
//                this.loggedEvent = 'handleDragEnd';
            },
            handleDrop: function(itemOne, itemTwo) {
                console.log('handleDrop', itemOne, itemTwo);
                this.$dispatch("handleDrop", itemOne, itemTwo);
//                this.loggedEvent = 'handleDrop';
                /*var dummy = this.tasks[itemOne.id];
                this.tasks.$set(itemOne.id, this.tasks[itemTwo.id]);
                this.tasks.$set(itemTwo.id, dummy);*/
            }
        }
    }
</script>
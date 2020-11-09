<template>
    <div style="width:100%;height:2000px;">
        <div class="layoutJSON">
            Displayed as <code>[x, y, w, h]</code>:
            <div class="columns">
                <div v-for="item in layout">
                    <b>{{item.i}}</b>: [{{item.x}}, {{item.y}}, {{item.w}}, {{item.h}}]
                </div>
            </div>
        </div>
        <hr/>
        <input type="checkbox" v-model="draggable"/> Draggable
        <input type="checkbox" v-model="resizable"/> Resizable
        <input type="checkbox" v-model="responsive"/> Responsive
        <br/>
        <div style="width:100%;margin-top: 10px;height:100%;">
            <grid-layout :layout.sync="layout"
                         :col-num="12"
                         :row-height="30"
                         :is-draggable="draggable"
                         :is-resizable="resizable"
                         :responsive="responsive"
                         :vertical-compact="true"
                         :use-css-transforms="true"
            >
                <grid-item v-for="item in layout"
                           :static="item.static"
                           :x="item.x"
                           :y="item.y"
                           :w="item.w"
                           :h="item.h"
                           :i="item.i"
                >
                    <span class="text">{{item.i}}</span>
                </grid-item>
            </grid-layout>
        </div>
    </div>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout"

export default {
    components: {
        GridLayout,
        GridItem
    },
    data() {
        return {
            layout: [
                {"x":0,"y":0,"w":2,"h":2,"i":"0"},
                {"x":2,"y":0,"w":2,"h":4,"i":"1"},
                {"x":4,"y":0,"w":2,"h":5,"i":"2"},
                {"x":6,"y":0,"w":2,"h":3,"i":"3"},
                {"x":8,"y":0,"w":2,"h":3,"i":"4"},
                {"x":10,"y":0,"w":2,"h":3,"i":"5"},
                {"x":0,"y":5,"w":2,"h":5,"i":"6"},
                {"x":2,"y":5,"w":2,"h":5,"i":"7"},
                {"x":4,"y":5,"w":2,"h":5,"i":"8"},
                {"x":6,"y":4,"w":2,"h":4,"i":"9"},
                {"x":8,"y":4,"w":2,"h":4,"i":"10"},
                {"x":10,"y":4,"w":2,"h":4,"i":"11"},
                {"x":0,"y":10,"w":2,"h":5,"i":"12"},
                {"x":2,"y":10,"w":2,"h":5,"i":"13"},
                {"x":4,"y":8,"w":2,"h":4,"i":"14"},
                {"x":6,"y":8,"w":2,"h":4,"i":"15"},
                {"x":8,"y":10,"w":2,"h":5,"i":"16"},
                {"x":10,"y":4,"w":2,"h":2,"i":"17"},
                {"x":0,"y":9,"w":2,"h":3,"i":"18"},
                {"x":2,"y":6,"w":2,"h":2,"i":"19"}
            ],
            draggable: true,
            resizable: true,
            responsive: true,
            index: 0
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.vue-grid-layout {
    background: #eee;
}

.vue-grid-item:not(.vue-grid-placeholder) {
    background: #ccc;
    border: 1px solid black;
}

.vue-grid-item .resizing {
    opacity: 0.9;
}

.vue-grid-item .static {
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
    height: 100%;
    width: 100%;
}

.vue-grid-item .no-drag {
    height: 100%;
    width: 100%;
}

.vue-grid-item .minMax {
    font-size: 12px;
}

.vue-grid-item .add {
    cursor: pointer;
}

.vue-draggable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
    background-position: bottom right;
    padding: 0 8px 8px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: pointer;
}

.layoutJSON {
    background: #ddd;
    border: 1px solid black;
    margin-top: 10px;
    padding: 10px;
}

.columns {
    -moz-columns: 120px;
    -webkit-columns: 120px;
    columns: 120px;
}

</style>

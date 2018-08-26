<template>
    <div id="app">
        <h1>Vue Grid Layout</h1>
        <!--<pre>{{ layout | json }}</pre>-->
        <div>
            <div class="layoutJSON">
                Displayed as <code>[x, y, w, h]</code>:
                <div class="columns">
                    <div class="layoutItem" v-for="item in layout">
                        <b>{{item.i}}</b>: [{{item.x}}, {{item.y}}, {{item.w}}, {{item.h}}]
                    </div>
                </div>
            </div>
            <div class="layoutJSON">
                Displayed as <code>[x, y, w, h]</code>:
                <div class="columns">
                    <div class="layoutItem" v-for="item in layout2">
                        <b>{{item.i}}</b>: [{{item.x}}, {{item.y}}, {{item.w}}, {{item.h}}]
                    </div>
                </div>
            </div>
        </div>
        <div id="content">
            <button @click="decreaseWidth">Decrease Width</button>
            <button @click="increaseWidth">Increase Width</button>
            <button @click="addItem">Add an item</button>
            <!-- Add to show rtl support -->
            <button @click="changeDirection">Change Direction</button>
            <input type="checkbox" v-model="draggable"/> Draggable
            <input type="checkbox" v-model="resizable"/> Resizable
            <input type="checkbox" v-model="mirrored"/> Mirrored
            <br/>
            Row Height: <input type="number" v-model="rowHeight"/> Col nums: <input type="number" v-model="colNum"/>
            <br/>
            <grid-layout
                    :layout="layout"
                    :col-num="parseInt(colNum)"
                    :row-height="rowHeight"
                    :is-draggable="draggable"
                    :is-resizable="resizable"
                    :is-mirrored="mirrored"
                    :vertical-compact="true"
                    :use-css-transforms="true"
            >
                <grid-item v-for="item in layout" :key="item.i"
                           :x="item.x"
                           :y="item.y"
                           :w="item.w"
                           :h="item.h"
                           :min-w="2"
                           :min-h="2"
                           :i="item.i"
                           @resize="resize"
                           @move="move"
                           @resized="resized"
                           @moved="moved"
                >
                    <!--<custom-drag-element :text="item.i"></custom-drag-element>-->
                    <test-element :text="item.i"></test-element>
                    <!--<button @click="clicked">CLICK ME!</button>-->
                </grid-item>
            </grid-layout>
            <hr/>
            <!--<grid-layout
                    :layout="layout2"
                    :col-num="12"
                    :row-height="rowHeight"
                    :is-draggable="draggable"
                    :is-resizable="resizable"
                    :vertical-compact="true"
                    :use-css-transforms="true"
            >
                <grid-item v-for="item in layout2" :key="item.i"
                           :x="item.x"
                           :y="item.y"
                           :w="item.w"
                           :h="item.h"
                           :min-w="2"
                           :min-h="2"
                           :i="item.i"
                           :is-draggable="item.draggable"
                           :is-resizable="item.resizable"
                >
                    <test-element :text="item.i"></test-element>
                </grid-item>
            </grid-layout>-->
        </div>
    </div>
</template>

<script>
    import GridItem from './GridItem.vue';
    import GridLayout from './GridLayout.vue';
    //import ResponsiveGridLayout from './ResponsiveGridLayout.vue';
    import TestElement from './TestElement.vue';
    import CustomDragElement from './CustomDragElement.vue';
    import {getDocumentDir, setDocumentDir} from "./DOM";
    //var eventBus = require('./eventBus');

    var testLayout = [
        {"x":0,"y":0,"w":2,"h":2,"i":"0", resizable: true, draggable: true},
        {"x":2,"y":0,"w":2,"h":4,"i":"1", resizable: null, draggable: null},
        {"x":4,"y":0,"w":2,"h":5,"i":"2", resizable: false, draggable: false},
        {"x":6,"y":0,"w":2,"h":3,"i":"3", resizable: false, draggable: false},
        {"x":8,"y":0,"w":2,"h":3,"i":"4", resizable: false, draggable: false},
        {"x":10,"y":0,"w":2,"h":3,"i":"5", resizable: false, draggable: false},
        {"x":0,"y":5,"w":2,"h":5,"i":"6", resizable: false, draggable: false},
        {"x":2,"y":5,"w":2,"h":5,"i":"7", resizable: false, draggable: false},
        {"x":4,"y":5,"w":2,"h":5,"i":"8", resizable: false, draggable: false},
        {"x":6,"y":4,"w":2,"h":4,"i":"9", resizable: false, draggable: false},
        {"x":8,"y":4,"w":2,"h":4,"i":"10", resizable: false, draggable: false},
        {"x":10,"y":4,"w":2,"h":4,"i":"11", resizable: false, draggable: false},
        {"x":0,"y":10,"w":2,"h":5,"i":"12", resizable: false, draggable: false},
        {"x":2,"y":10,"w":2,"h":5,"i":"13", resizable: false, draggable: false},
        {"x":4,"y":8,"w":2,"h":4,"i":"14", resizable: false, draggable: false},
        {"x":6,"y":8,"w":2,"h":4,"i":"15", resizable: false, draggable: false},
        {"x":8,"y":10,"w":2,"h":5,"i":"16", resizable: false, draggable: false},
        {"x":10,"y":4,"w":2,"h":2,"i":"17", resizable: false, draggable: false},
        {"x":0,"y":9,"w":2,"h":3,"i":"18", resizable: false, draggable: false},
        {"x":2,"y":6,"w":2,"h":2,"i":"19", resizable: false, draggable: false}
    ];

    export default {
        name: 'app',
        components: {
            //ResponsiveGridLayout,
            GridLayout,
            GridItem,
            TestElement,
            CustomDragElement,
        },
        data () {
            return {
                layout: JSON.parse(JSON.stringify(testLayout)),
                layout2: JSON.parse(JSON.stringify(testLayout)),
                draggable: true,
                resizable: true,
                mirrored: false,
                rowHeight: 30,
                colNum: 12,
                index: 0
            }
        },
        mounted: function () {
            this.index = this.layout.length;
        },
        methods: {
            clicked: function() {
                window.alert("CLICK!");
            },
            increaseWidth: function(item) {
                var width = document.getElementById("content").offsetWidth;
                width += 20;
                document.getElementById("content").style.width = width+"px";
            },
            decreaseWidth: function(item) {

                var width = document.getElementById("content").offsetWidth;
                width -= 20;
                document.getElementById("content").style.width = width+"px";
            },
            removeItem: function(item) {
                //console.log("### REMOVE " + item.i);
                this.layout.splice(this.layout.indexOf(item), 1);
            },
            addItem: function() {
                var self = this;
                //console.log("### LENGTH: " + this.layout.length);
                var item = {"x":0,"y":0,"w":2,"h":2,"i":this.index+"", whatever: "bbb"};
                this.index++;
                this.layout.push(item);
            },
            move: function(i, newX, newY){
                console.log("MOVE i=" + i + ", X=" + newX + ", Y=" + newY);
            },
            resize: function(i, newH, newW){
                console.log("RESIZE i=" + i + ", H=" + newH + ", W=" + newW);
            },
            moved: function(i, newX, newY){
                console.log("### MOVED i=" + i + ", X=" + newX + ", Y=" + newY);
            },
            resized: function(i, newH, newW, newHPx, newWPx){
                console.log("### RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
            },
            /**
             * Add change direction button
             */
            changeDirection() {
                let documentDirection = getDocumentDir();
                let toggle = "";
                if (documentDirection == "rtl") {
                    toggle = "ltr"
                } else {
                    toggle = "rtl"
                }
                setDocumentDir(toggle);
                //eventBus.$emit('directionchange');
            }
        },
    }
</script>

<style>
/*    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }*/
</style>

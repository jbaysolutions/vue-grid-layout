<template>
    <grid-layout :layout.sync="layout"
                 :col-num="12"
                 :row-height="30"
                 :is-draggable="draggable"
                 :is-resizable="resizable"
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
            <div v-if="item.i === '2'" class="docsfold-features">
                <img src="assets/img/docsfold-logo-sm.png" alt="DocsFold" style="max-width: 100%;"/>
                <div class="content">
                    <h2>API to generate image and PDF documents</h2>
                    <div style="padding:10px 0;">

                        <a href="https://www.docsfold.com?utm_source=vue-grid-layout-website&utm_medium=web&utm_campaign=vue-grid-layout" target="_blank" class="btn-read-more">Get started for FREE</a>
                    </div>
                </div>
            </div>
            <!--            <div v-if="item.i === '999'" style="width: 90%;margin-left: auto;margin-right: auto;margin-top: 5px;height: 90%;">
                            <iframe src="https://github.com/sponsors/jbaysolutions/card" title="Sponsor jbaysolutions" height="100%" width="100%" style="border: 0;"></iframe>
            &lt;!&ndash;                <iframe src="https://github.com/sponsors/jbaysolutions/button" title="Sponsor jbaysolutions" height="35" width="100%" style="border: 0; margin-left:auto;margin-right: auto;"></iframe>&ndash;&gt;
                        </div>-->
            <span v-else class="text">{{ itemTitle(item) }}</span>
        </grid-item>
    </grid-layout>
</template>

<script>
import {GridLayout, GridItem} from "vue-grid-layout"

export default {
	name: "HomepageGrid",
	components: {
		GridLayout,
		GridItem
	},
	data() {
		return {
			layout: [
				{"x": 0, "y": 0, "w": 2, "h": 2, "i": "0", static: false},
				{"x": 10, "y": 0, "w": 2, "h": 4, "i": "1", static: true},
				{"x": 2, "y": 0, "w": 8, "h": 4, "i": "2", static: false},
				{"x": 6, "y": 4, "w": 2, "h": 3, "i": "3", static: false},
				{"x": 8, "y": 4, "w": 2, "h": 3, "i": "4", static: false},
				{"x": 10, "y": 4, "w": 2, "h": 3, "i": "5", static: false},
				{"x": 0, "y": 2, "w": 2, "h": 5, "i": "6", static: false},
				{"x": 2, "y": 4, "w": 2, "h": 5, "i": "7", static: false},
				{"x": 4, "y": 4, "w": 2, "h": 5, "i": "8", static: false},
				{"x": 6, "y": 7, "w": 2, "h": 4, "i": "9", static: true},
				{"x": 8, "y": 7, "w": 2, "h": 4, "i": "10", static: false},
				{"x": 10, "y": 7, "w": 2, "h": 4, "i": "11", static: false},
				{"x": 0, "y": 10, "w": 2, "h": 5, "i": "12", static: false},
				{"x": 2, "y": 11, "w": 2, "h": 5, "i": "13", static: false},
				{"x": 4, "y": 9, "w": 2, "h": 4, "i": "14", static: false},
				{"x": 6, "y": 11, "w": 2, "h": 4, "i": "15", static: false},
				{"x": 8, "y": 11, "w": 2, "h": 5, "i": "16", static: false},
				{"x": 10, "y": 11, "w": 2, "h": 2, "i": "17", static: false},
				{"x": 0, "y": 7, "w": 2, "h": 3, "i": "18", static: false},
				{"x": 2, "y": 9, "w": 2, "h": 2, "i": "19", static: false}
			],
			draggable: true,
			resizable: true,
			index: 0
		}
	},
	methods: {
		itemTitle(item) {
			let result = item.i;
			if (item.static) {
				result += " - Static";
			}
			return result;
		}
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


.docsfold-features {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    /*margin-top: 5px;*/
    height: 90%;
    /*text-align: center!important;*/
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.docsfold-features img {
    width: 30%;
    height: auto;
    object-fit: contain;
}

.docsfold-features .content {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    align-items: center;
    padding: 10px;
}

.docsfold-features h2 {
    font-size: 18px;
    margin-bottom: 10px;
    border:0;
}

.docsfold-features .btn-read-more:hover {
    background: #4104f1;
}

.docsfold-features .btn-read-more {
    line-height: 0;
    /*padding: 15px 40px;*/
    padding: 10px 20px;
    border-radius: 4px;
    transition: 0.5s;
    color: #fff;
    background: #4154f1;
    box-shadow: 0px 5px 25px rgba(65, 84, 241, 0.3);
    /*cursor: pointer;*/
}

.docsfold-features .btn-read-more span {
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
}

.docsfold-features .btn-read-more i {
    margin-left: 5px;
    font-size: 18px !important;
    transition: 0.3s;
    color: #fff !important;
}

.docsfold-features .btn-read-more:hover i {
    transform: translateX(5px);
}


</style>

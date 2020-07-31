var testLayouts = {
    md: [
        {"x":0, "y":0, "w":2, "h":2, "i":"0"},
        {"x":2, "y":0, "w":2, "h":4, "i":"1"},
        {"x":4, "y":0, "w":2, "h":5, "i":"2"},
        {"x":6, "y":0, "w":2, "h":3, "i":"3"},
        {"x":2, "y":4, "w":2, "h":3, "i":"4"},
        {"x":4, "y":5, "w":2, "h":3, "i":"5"},
        {"x":0, "y":2, "w":2, "h":5, "i":"6"},
        {"x":2, "y":7, "w":2, "h":5, "i":"7"},
        {"x":4, "y":8, "w":2, "h":5, "i":"8"},
        {"x":6, "y":3, "w":2, "h":4, "i":"9"},
        {"x":0, "y":7, "w":2, "h":4, "i":"10"},
        {"x":2, "y":19, "w":2, "h":4, "i":"11"},
        {"x":0, "y":14, "w":2, "h":5, "i":"12"},
        {"x":2, "y":14, "w":2, "h":5, "i":"13"},
        {"x":4, "y":13, "w":2, "h":4, "i":"14"},
        {"x":6, "y":7, "w":2, "h":4, "i":"15"},
        {"x":0, "y":19, "w":2, "h":5, "i":"16"},
        {"x":8, "y":0, "w":2, "h":2, "i":"17"},
        {"x":0, "y":11, "w":2, "h":3, "i":"18"},
        {"x":2, "y":12, "w":2, "h":2, "i":"19"}
        ],
    lg: [
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
};

// var GridLayout = VueGridLayout.GridLayout;
// var GridItem = VueGridLayout.GridItem;

new Vue({
    el: '#app',
    // components: {
    //     "GridLayout": GridLayout,
    //     "GridItem": GridItem
    // },
    data: {
        layouts: testLayouts,
        layout: testLayouts["lg"],
        draggable: true,
        resizable: true,
        responsive: true,
        index: 0
    },
    mounted: function () {
        // this.index = this.layout.length;
    },
    methods: {
        breakpointChangedEvent: function(newBreakpoint, newLayout){
            console.log("BREAKPOINT CHANGED breakpoint=", newBreakpoint, ", layout: ", newLayout );
        }
    }
});




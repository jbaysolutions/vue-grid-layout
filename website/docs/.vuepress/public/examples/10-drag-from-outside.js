var testLayout = [
    {"x":0,"y":0,"w":2,"h":2,"i":"0"},
    {"x":2,"y":0,"w":2,"h":4,"i":"1"},
    {"x":4,"y":0,"w":2,"h":5,"i":"2"},
    {"x":6,"y":0,"w":2,"h":3,"i":"3"},
    {"x":8,"y":0,"w":2,"h":3,"i":"4"},
    {"x":10,"y":0,"w":2,"h":3,"i":"5"},
    {"x":0,"y":5,"w":2,"h":5,"i":"6"},
    {"x":2,"y":5,"w":2,"h":5,"i":"7"},
    {"x":4,"y":5,"w":2,"h":5,"i":"8"}, 
    {"x":5,"y":10,"w":4,"h":3,"i":"9"},
];
var mouseXY={"x":null,"y":null};
var DragPos = {"x":null,"y":null,"w":1,"h":1,"i":null};

document.addEventListener("dragover", function(e) {
    mouseXY.x=e.clientX;
    mouseXY.y=e.clientY;
}, false);

new Vue({
    el: '#app',
    data: {
        layout: testLayout,
    },  
});


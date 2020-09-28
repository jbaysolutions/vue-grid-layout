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
    methods: {
        drag:function(e){
            let parentRect = document.getElementById('content').getBoundingClientRect();
            let mouseInGrid=false;
            if (((mouseXY.x>parentRect.left) && (mouseXY.x<parentRect.right)) && ((mouseXY.y>parentRect.top)  && (mouseXY.y<parentRect.bottom))){
                mouseInGrid=true;
            }
            if (mouseInGrid==true && (this.layout.findIndex(item => item.i === 'drop')) == -1){
                this.layout.push({
                    x: (this.layout.length * 2) % (this.colNum || 12),
                    y: this.layout.length + (this.colNum || 12), // puts it at the bottom
                    w: 1,
                    h: 1,
                    i: 'drop',
                }); 
            }
            let index=this.layout.findIndex(item => item.i === 'drop');
            if (index!=-1){
                try {  
                    this.$refs.gridLayout.$children[this.layout.length].$refs.item.style.display="none";
                } catch {
                }
                let el=this.$refs.gridLayout.$children[index]; 
                el.dragging={"top":mouseXY.y-parentRect.top,"left":mouseXY.x-parentRect.left};
                let new_pos=el.calcXY(mouseXY.y-parentRect.top, mouseXY.x-parentRect.left);
               
                if (mouseInGrid==true){
                    this.$refs.gridLayout.dragEvent('dragstart', 'drop', new_pos.x,new_pos.y,1,1); 
                    DragPos.i=String(index); DragPos.x=this.layout[index].x; DragPos.y=this.layout[index].y;  
                }
                if (mouseInGrid==false){
                    this.$refs.gridLayout.dragEvent('dragend', 'drop', new_pos.x,new_pos.y,1,1);
                    this.layout = this.layout.filter(obj => obj.i !=='drop');
                }
            }  
        },  
        dragend:function(e){
            let parentRect = document.getElementById('content').getBoundingClientRect();
            let mouseInGrid=false;
            if (((mouseXY.x>parentRect.left) && (mouseXY.x<parentRect.right)) && ((mouseXY.y>parentRect.top)  && (mouseXY.y<parentRect.bottom))){
                mouseInGrid=true;
            }
            if (mouseInGrid==true){
                    alert(`Dropped element props:\n${JSON.stringify(DragPos, ['x', 'y', 'w', 'h'], 2)}`); 
                    this.$refs.gridLayout.dragEvent('dragend', 'drop', DragPos.x,DragPos.y,1,1);
                    this.layout = this.layout.filter(obj => obj.i !=='drop');
                    
                    // UNCOMMENT below if you want to add a grid-item
                    /*
                    this.layout.push({
                        x: DragPos.x,
                        y: DragPos.y,
                        w: 1,
                        h: 1,
                        i: DragPos.i,
                    }); 
                    this.$refs.gridLayout.dragEvent('dragend', DragPos.i, DragPos.x,DragPos.y,1,1);
                    try {  
                        this.$refs.gridLayout.$children[this.layout.length].$refs.item.style.display="block";
                    } catch {
                    }  
                    */   
            }
        },  
    },  
});


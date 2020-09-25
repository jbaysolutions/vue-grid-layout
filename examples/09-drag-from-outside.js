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

new Vue({
    el: '#app',
    data: {
        layout: testLayout,
    },
    methods: {
        drag:function(e){
            let divGridLayout=document.getElementById('content'),
            divGridLayout_left = divGridLayout.getBoundingClientRect().left + divGridLayout.ownerDocument.defaultView.pageXOffset-window.window.scrollX,
            divGridLayout_top = divGridLayout.getBoundingClientRect().top + divGridLayout.ownerDocument.defaultView.pageYOffset-window.window.scrollY,  
            divGridLayout_width = divGridLayout.getBoundingClientRect().width,
            divGridLayout_height = divGridLayout.getBoundingClientRect().height
            ;      
            let mouseInGrid=false;
            if (((e.x>divGridLayout_left) && (e.x<divGridLayout_left+divGridLayout_width)) 
               && ((e.y>divGridLayout_top)  && (e.y<divGridLayout_top+divGridLayout_height)))
                    mouseInGrid=true;

            if (mouseInGrid==true && (this.layout.findIndex(item => item.i === 'drop')) == -1){
                this.layout.push({
                    x: (this.layout.length * 2) % (this.colNum || 12),
                    y: this.layout.length + (this.colNum || 12), // puts it at the bottom
                    w: 1,
                    h: 1,
                    i: 'drop',
                });     
            }
            setTimeout(() => {  
                let index=this.layout.findIndex(item => item.i === 'drop');
                if (index!=-1){
                    this.$refs.gridLayout.$children[this.layout.length].$refs.item.style.display="none";
                    let el=this.$refs.gridLayout.$children[index]; 
                    
                    el.dragging={"left":e.x-divGridLayout_left,"top":e.y-divGridLayout_top};
                    let new_pos=el.calcXY(e.y-divGridLayout_top, e.x-divGridLayout_left);
                    
                    if (mouseInGrid==true){
                        this.$refs.gridLayout.dragEvent('dragstart', 'drop', new_pos.x,new_pos.y,1,1);
                    }
                    if (mouseInGrid==false){
                        this.$refs.gridLayout.dragEvent('dragend', 'drop', new_pos.x,new_pos.y,1,1);
                        this.layout = this.layout.filter(obj => obj.i !=='drop');  
                    }
                }
            }, 100);
        },  
        dragstart:function(e){
            e.dataTransfer.setData('text/plain', ''); 
        },  
        dragend:function(e){
            let divGridLayout=document.getElementById('content'),
            divGridLayout_left = divGridLayout.getBoundingClientRect().left + divGridLayout.ownerDocument.defaultView.pageXOffset-window.window.scrollX,
            divGridLayout_top = divGridLayout.getBoundingClientRect().top + divGridLayout.ownerDocument.defaultView.pageYOffset-window.window.scrollY,  
            divGridLayout_width = divGridLayout.getBoundingClientRect().width,
            divGridLayout_height = divGridLayout.getBoundingClientRect().height
            ;       
            let mouseInGrid=false;
            if (((e.x>divGridLayout_left) && (e.x<divGridLayout_left+divGridLayout_width)) 
            && ((e.y>divGridLayout_top)  && (e.y<divGridLayout_top+divGridLayout_height)))
                    mouseInGrid=true;

            if (mouseInGrid==true){
                let el=this.$refs.gridLayout.$children[this.layout.length]; 
                el.dragging={"left":e.x-divGridLayout_left,"top":e.y-divGridLayout_top};
                let new_pos=el.calcXY(e.y-divGridLayout_top, e.x-divGridLayout_left);
                this.$refs.gridLayout.dragEvent('dragend', 'drop', new_pos.x,new_pos.y,1,1);
                index=this.layout.length;
                
                alert(`Dropped element props:\n${JSON.stringify(this.$refs.gridLayout.$children[index], ['x', 'y', 'w', 'h'], 2)}`);   

                /* UNCOMMENT the bottom lines IF YOU WANT to add an item */
                /*
                x=this.$refs.gridLayout.$children[index].x;
                y=this.$refs.gridLayout.$children[index].y;
                this.layout.push({
                    x: x,
                    y: y,
                    w: 1,
                    h: 1,
                    i: String(index-1),
                });
                setTimeout(() => {  
                        this.$refs.gridLayout.$children[this.layout.length].$refs.item.style.display="block";
                }, 100);  
                */
            }    
        },
    },  
});


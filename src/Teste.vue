<template>
    <div>
        <slot name="onome">DASSSS</slot>
        <button @click="addItem">Add an item</button>
    </div>
</template>
<script>
    export default {
        name: "Teste",
        template: '#teste',
        props: {
            items: {
                type: Array,
                required: true
            }
        },
        methods: {
            addItem: function() {
                var item = {"x":0,"y":0,"w":2,"h":2,"i":(this.items.length+1)+"", whatever: "bbb"};
                this.index++;
                this.items.push(item);
            }
        }
    };
</script>
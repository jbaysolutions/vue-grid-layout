<template>
    <div>
        <span class="text">
            {{text}}
        </span>
        <span class="remove" @click="$emit('removeItem', text)">x</span>
    </div>
</template>
<style>
.remove {
    position: absolute;
    right: 15px;
    top: 5px;
    cursor: pointer;
}
</style>
<script>
    export default {
        name: "TestElement",
        props: {
            text : {
                type: String,
                default: "x",
            },
        },
        data: function() {
            return {
            }
        },
        mounted: function() {
            console.log("### " + this.text + " ready!");
        },
    }
</script>

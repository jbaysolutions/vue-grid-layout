<template>
    <span class="text" style="height: 20px;">
        {{text}}
    </span>
</template>
<style>
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
            this.$parent.autoSize();
        },
    }
</script>
<template>
    <span class="text">
        {{text}}
    </span>
</template>
<style>
</style>
<script>
    export default {
        name: "TestElement",
        props: {
            text: "x",
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
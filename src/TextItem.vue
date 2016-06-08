<template>
    <span class="text">{{text}}</span>
</template>
<style>
</style>
<script>
    export default {
        name: "TextItem",
        props: {
            text: {
                type: String,
//                required: true,
                default: "X"
            },
        }
    }
</script>
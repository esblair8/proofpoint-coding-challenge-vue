<template>
    <h3 class="title">{{ titleMessage }}</h3>
</template>

<script>
    export default {
        props: ['title-message']
    }
</script>

<style scoped>
    .title {
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>

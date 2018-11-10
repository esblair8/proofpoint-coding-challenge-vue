<template>
    <h2 class="title">{{ titleMessage }}</h2>
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

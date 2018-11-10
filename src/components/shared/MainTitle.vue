<template>
    <h1 class="title">{{ titleMessage }}</h1>
</template>

<script>
    export default {
        props: ['title-message']
    }
</script>

<style scoped>
    .title {
        padding-top: 100px;
    }
</style>
<template>
    <h1 class="ui huge header title">{{ titleMessage }}</h1>
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

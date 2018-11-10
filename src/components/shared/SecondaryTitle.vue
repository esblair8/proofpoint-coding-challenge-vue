<template>
    <h3 class="title">{{ title }}</h3>
</template>

<script>
    export default {
        props: ['title']
    }
</script>

<style scoped>
    .title {
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>

<template>
    <div :class="['ui', 'large', messageColour, 'message']">
        <div class="header"> {{ messageText }}</div>
    </div>
</template>

<script>
    export default {
        props: ['message-text', 'message-colour']
    }
</script>

<style>
</style>

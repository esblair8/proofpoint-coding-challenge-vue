<template>
    <div :class="['ui', 'large', resultColour, 'message']">
        <div class="header"> {{ resultText }}</div>
    </div>
</template>

<script>
    export default {
        props: ['result-text', 'result-colour']
    }
</script>
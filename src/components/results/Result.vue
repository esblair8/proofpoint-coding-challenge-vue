<template>
    <transition
    name="message-transition"
    enter-active-class="animated bounceInRight"
    leave-active-class="animated bounceOutLeft"
    transition-delay: 300ms>
        <div :class="['ui', 'large', resultColour, 'message']">
            <div class="header"> {{ resultText }}</div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: ['result-text', 'result-colour']
    }
</script>
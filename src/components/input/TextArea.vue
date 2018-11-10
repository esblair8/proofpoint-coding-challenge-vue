<template>
    <textarea :value="initialValue" @input="$emit('sentenceEvent', $event.target.value)"></textarea>
</template>

<script>
export default {
    props: ['value'],
    computed: {
        initialValue() {
            return this.value
        }
    }
}
</script>

<template>
<section>
    <MainTitle title-message="String Validator" />
    <div class="ui three column stackable centered grid">
        <InputSubSection /> 
        <ResultsSubSection />
    </div>
</section>
</template>

<script>
    import MainTitle from '../shared/MainTitle.vue'
    import InputSubSection from '../input/InputSubSection.vue'
    import ResultsSubSection from '../results/ResultsSubSection.vue'

    export default {
        components: {
            MainTitle,
            InputSubSection,
            ResultsSubSection
        }
    }
</script>

<style>
    .column {
        padding: 10px;
        flex: 1;
        flex-basis: 0;
    }
</style>

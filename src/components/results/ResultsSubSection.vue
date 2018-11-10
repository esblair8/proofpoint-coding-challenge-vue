<template>
    <section class="column bottom-spacing">
        <div class="ui container">
            <SecondaryTitle title-message="Results" />
                <div v-if="results.complete">
                    <div class="result-spacing" v-for="(result, key, index) in results.results" :key="key">
                        <div v-if="result === null"></div>
                        <Result v-else-if="!result" :result-text="negativeResults[index]" result-colour="red"/>
                        <Result v-else :result-text="positiveResults[index]" result-colour="green"/>
                    </div>
                </div>
                <Result v-else result-text="Enter a sentence and click validate to see results." result-colour="blue"/>
        </div> 
    </section>
</template>

<script>
    import { mapGetters } from 'vuex'
    import SecondaryTitle from '../shared/SecondaryTitle.vue'
    import Result from './Result.vue'
    
    export default {
        components: {
            SecondaryTitle,
            Result
        },
        data() {
            return {
                negativeResults: [
                    'The sentence does not start with capital letter.',
                    'The sentence does not end with a full stop.',
                    'The sentence has an unequal number of "quotes".',
                    'The numbers in the sentence below 13 are not words (if any present)'
                ],
                positiveResults: [
                    'The sentence starts with capital letter.',
                    'The sentence ends with a full stop.',
                    'The sentence has an equal number of "quotes".',
                    'The numbers in the sentence below 13 are words (if any present)'
                ]
            }
        },
        computed: {
            ...mapGetters({
                results: 'getResults'
            })
        }
    }
</script>

<style scoped>
 .result-spacing {
    margin-bottom: 20px;
 }

 .bottom-spacing {
    margin-bottom: 80px;
 }
</style>

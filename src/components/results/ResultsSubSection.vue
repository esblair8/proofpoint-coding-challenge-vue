<template>
    <section class="column">
        <div class="ui container">
            <SecondaryTitle title="Results" />
            <div v-if="results.complete">
                <div  class="bottom-spacing" v-for="(result, key, index) in results.results" :key="key">
                    <div v-if="result === null"></div>
                    <Result v-else-if="!result" :result-text="negativeresults[index]" result-colour="red"/>
                    <Result v-else :result-text="positiveresults[index]" result-colour="green"/>
                </div>
            </div>
            <Result v-else result-text="Enter a sentence and click validate to see results." result-colour="blue"/>
            <br>
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
                negativeresults: [
                    "The sentence does not start with capital letter.",
                    "The sentence does not end with a full stop.",
                    "The sentence has an unequal number of 'Quotes'.",
                    "The numbers in the sentence below 13 are not words (if any present)."
                ],
                positiveresults: [
                    "The sentence starts with capital letter.",
                    "The sentence ends with a full stop.",
                    "The sentence has an equal number of 'Quotes'.",
                    "The numbers in the sentence below 13 are words (if any present)."
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

<style>
 .bottom-spacing {
     margin-bottom: 20px;
 }
</style>

<template>
    <section class="column">
        <div class="ui container">
            <SecondaryTitle title="Results" />
            <div v-if="results.complete">
                <div  class="bottom-spacing" v-for="(result, key, index) in results.results" :key="key">
                    <div v-if="result === null"></div>
                    <Message v-else-if="!result" :message-text="negativeMessages[index]" message-colour="red"/>
                    <Message v-else :message-text="positiveMessages[index]" message-colour="green"/>
                </div>
            </div>
            <Message v-else message-text="Enter a sentence and click validate to see results." message-colour="blue"/>
            <br>
        </div> 
       
    </section>
</template>

<script>
    import { mapGetters } from 'vuex'
    import SecondaryTitle from '../shared/SecondaryTitle.vue'
    import Message from '../shared/Message.vue'
    
    export default {
        components: {
            SecondaryTitle,
            Message
        },
        data() {
            return {
                negativeMessages: [
                    "The sentence does not start with capital letter.",
                    "The sentence does not end with a full stop.",
                    "The sentence has an unequal number of 'Quotes'.",
                    "The numbers in the sentence below 13 are not words (if any present)."
                ],
                positiveMessages: [
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

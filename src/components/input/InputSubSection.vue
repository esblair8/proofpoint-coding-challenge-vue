<template>
    <section class="column">
        <div class="ui container">
            <div class="ui form">
                <div class="field">
                    <SecondaryTitle title="Enter sentence here" />
                    <text-area :value="sentence" @sentenceEvent="save($event)"/>
                    <div v-if="sentenceError">
                        <ErrorMessage :error-message="sentenceErrorMessage"/> 
                    </div>
                    <SecondaryTitle title-message="Select validations to apply" /> <!-- So for each here and store validation in state-->
                    <div v-for="validation in validations" :key="validation.name" class="field">
                        <div class="ui purple toggle checkbox">
                            <input type="checkbox" v-model="validation.performValidation" :name="validation.name">
                            <label>{{ validation.description }}</label>
                        </div>
                    </div>
                    <div v-if="validationError">
                        <ErrorMessage :error-message="validationErrorMessage"/> 
                    </div>
                </div>
                <br>
                <div class="field">
                    <button @click="validate" id="validate" type="submit" class="ui inverted large purple button">Validate</button>
                    <button @click="discardSentence" id="discard" type="submit" class="ui inverted large orange button">Discard</button>
                    <button @click="reset" id="reset" type="submit" class="ui inverted large red button ">Reset</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import SecondaryTitle from '../shared/SecondaryTitle.vue'
import TextArea from './TextArea.vue'
import ErrorMessage from '../shared/ErrorMessage.vue'
import validateSentence  from '../../validator'

export default {
    components: {
        TextArea,
        SecondaryTitle,
        ErrorMessage
    },
    data() {
        return {
            sentence: 'The quick brown fox jumped over the three "lazy" dogs.',
            sentenceError: false,
            sentenceErrorMessage: 'Please type a sentence you want to validate',
            validationError: false,
            validationErrorMessage: 'Please select at least one validation',
            validationResults: {},
            validations: [
                {
                    name: 'capital-letter',
                    description: 'Sentence starts with capital letter.',
                    performValidation: true
                },
                {
                    name: 'full-stop',
                    description: 'Sentence ends with a full stop character.',
                    performValidation: true
                },
                {
                    name: 'no-other-full-stop',
                    description: 'Sentence has no other full sto pcharacters other than the last character',
                    performValidation: true
                },
                {
                    name: 'quotes',
                    description: 'Sentence has equal number of "quotes".',
                    performValidation: true
                },
                {
                    name: 'numbers',
                    description: 'Numbers below 13 are words (one two three etc).',
                    performValidation: true
                }
            ]
        }
    },
    computed: {
        getValidationsToPerform() {
            return this.validations.reduce((obj, item) => ({...obj, [item.name]: item.performValidation }), {})
        },
        checkAtLeastOneValidationSelected() {
            return  !this.validations[0].performValidation &&
                    !this.validations[1].performValidation &&
                    !this.validations[2].performValidation &&
                    !this.validations[3].performValidation &&
                    !this.validations[4].performValidation
        }
    },
    methods: {
        save(sentence) {
            this.sentenceError = false
            this.sentence = sentence
        },
        discardSentence() {
            this.sentenceError = true
            this.validationError = false
            this.sentence = ''
            this.validationResults = {}
            this.$store.dispatch('set_validation_results', '')
        },
        reset() {
            this.sentenceError = false
            this.sentence = 'The quick brown fox jumped over the three "lazy" dogs.'
            this.validationResults = {}
            this.$store.dispatch('set_validation_results', '')
            this.validations.forEach(validation => validation.performValidation = true)

        },
        validate(){
            if(!this.sentence){
                this.sentenceError = true
            } else if (this.checkAtLeastOneValidationSelected) {
                this.validationError = true
            } else {
                const results = validateSentence(this.sentence, this.getValidationsToPerform)
                this.validationResults = results
                this.validationError = false               
                this.$store.dispatch('set_validation_results', results)
            }
        }
    }
}
</script>

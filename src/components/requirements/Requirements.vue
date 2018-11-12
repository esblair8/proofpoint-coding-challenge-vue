<template>
    <section class="ui container top bottom-spacing">
        <MainTitle title-message="Essentials - Valid Sentence Coding Test" />

        <p>Please complete this coding assignment using any coding language that you feel is appropriate, and
        send to us via email when ready. We will review your code with you during the interview. Take as
        long as you need to complete the assignment to a quality level that you feel is ready to plug into
        software that ships to customers!</p>

        <h2 class="ui header">Coding Problem</h2>

        <p>Can you determine if a string is a “valid” sentence, based on a simple set of rules?
        For the purposes of this problem, a “valid” sentence is defined as:</P>
        
        <div class="ui list">
            <div class="item">String starts with a capital letter</div>
            <div class="item">String has an even number of quotation marks</div>
            <div class="item">String ends with a period character “."</div>
            <div class="item">String has no period characters other than the last character</div>
            <div class="item">Numbers below 13 are spelled out (”one”, “two”, "three”, etc…)</div>
        </div>

        <SecondaryTitle title-message="Here are some examples" />
    
        <div class="ui grid">
            <div class="column">
                <div>
                    <h4 class="ui header">Valid sentences</h4>

                    <p>The quick brown fox said “hello Mr lazy dog”.</p>
                    <p>The quick brown fox said hello Mr lazy dog.</p>
                    <p>One lazy dog is too few, 14 is too many.</p>
                    <p>One lazy dog is too few, thirteen is too many.</p>
                </div>
            </div>
            <div class="column">
                <div>
                    <h4 class="ui header">Invalid sentences</h4>

                    <p>The quick brown fox said "hello Mr. lazy dog".</p>
                    <p>the quick brown fox said “hello Mr lazy dog".</p>
                    <p>"The quick brown fox said “hello Mr lazy dog".</p>
                    <p>"One lazy dog is too few, 12 is too many."</p>
                </div>
        </div>
       </div>
       <br>
        <div class="ui large list">
            <div class="item"><strong>Write a function that determines if an input string is a “valid” sentence</strong></div>
            <div class="item"><strong>Optional: Add this validation to a simple UI</strong></div>
        </div>
        <br><br>
    </section>
</template>

<script>
import MainTitle from '../shared/MainTitle.vue'
import SecondaryTitle from '../shared/SecondaryTitle.vue'

    export default {
        components: {
            MainTitle,
            SecondaryTitle
        }
    }
</script>

<style scoped>
    .bottom-spacing {
        margin-bottom: 20px
    }
</style>

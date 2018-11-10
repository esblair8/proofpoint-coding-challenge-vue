import  capitalLetter from './capitalLetter'
import  fullStop from './fullStop'
import  quotationMarks from './quotationMarks'
import  numbersAreWords from './numbersAreWords'
import  validate from './wrapper'




 export default (sentence, validationsToPerform) => {     
    const capitalLetterValid = validationsToPerform['capital-letter'] ? validate(capitalLetter, sentence) : null
    const fullStopValid = validationsToPerform['full-stop'] ? validate(fullStop, sentence) : null
    const quotationMarksValid = validationsToPerform.quotes ? validate(quotationMarks, sentence) : null
    const numbersValid = validationsToPerform.numbers ? validate(numbersAreWords, sentence) : null
    const complete = true

    return {
        results: {
            capitalLetterValid,
            fullStopValid,
            quotationMarksValid,
            numbersValid
        },
        sentence,
        complete
    }
}
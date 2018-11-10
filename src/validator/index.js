import capitalLetter from './capitalLetter'
import fullStop from './fullStop'
import quotationMarks from './quotationMarks'
import numbersAreWords from './numbersAreWords'

import validate from './wrapper'

/**
 * Function that runs a series of validations on an inout sentence, depending on boolean flags in the validationsToPerform param
 *
 * @param  sentence - sentence that validations will be performed on 
 * @param  validationsToPerform - object containing boolean values. Used to decide whic validations to perform
 * @return Object containing a results object with atrributes of type boolean or null, the original sentence and a booelan flag indicating completion
 */
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
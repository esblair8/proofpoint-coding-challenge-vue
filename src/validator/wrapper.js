import sentenceIsString from './sentenceIsString'

/**
 * Function to run validation against a given sentence
 * The function will first check that the string is a valid string
 *
 * @param  subValidation - function that the wrapper will run
 * @param  sentence - the sentence tun run the validation on
 * @return boolean or error message that string is invalid (returned from sentenceIsString() )
 */
export default (subValidation, sentence) => {
    const validString = sentenceIsString(sentence)
    
    if(validString.isValid) {
        return subValidation(sentence)
    } else {
        return validString.error
    }  
}
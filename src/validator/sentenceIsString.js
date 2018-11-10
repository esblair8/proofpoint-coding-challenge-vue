/**
 * Function to tests that a string is in fact a valid string
 * Example the string is not another type, object or empty string
 * Strings should be longer than one character
 *
 * @param  sentence - the sentence tun run the validation on
 * @return validationResult Object - it has an error message and an 'isValid' boolean flag
 */
export default sentence => {
    let validationResult
    if (typeof sentence === 'string' && sentence === '') {
        validationResult = {
            isValid: false, 
            error: 'Sentence is an empty string'
        }
    } else if (typeof sentence !== 'string') {
        validationResult = {
            isValid: false, 
            error: 'Sentence is not a string'
        }     
    } 
    else if(sentence.length == 1){
        validationResult = {
            isValid: false, 
            error: 'Sentence must be more than once character long'
        }    
    }
    else {
        validationResult = {
            isValid: true, 
            error: 'Sentence OK'
        }
    }
    return validationResult
}
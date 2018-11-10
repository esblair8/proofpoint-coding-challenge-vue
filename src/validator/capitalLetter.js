/**
 * Function that tests if the first letter of an input string is uppercase
 * 
 * @param   sentence - the sentence to validate. The first letter must be within range a-z or A-Z
 * @return  boolean || null
 */
export default sentence => {
    // regex - first letter is a-z ignoring case
    if(! sentence[0].match(/[a-z]/i)){ 
        return null
    }
    let firstLetter = sentence[0]    
    return firstLetter === firstLetter.toUpperCase()
}
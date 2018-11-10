/**
 * Function that tests if the last chatacter of an input string is a full stop
 * 
 * @param   sentence - the sentence to validate
 * @return  boolean
 */
export default (sentence) => {
    return sentence.charAt(sentence.length - 1) === "."
}

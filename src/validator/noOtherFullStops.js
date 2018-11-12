/**
 * Function that tests if the there are any other full stops in the sentence
 * by first removing the last character regarldess of which character it is. 
 * This ensures the final full stop, if present, does not give a false positive result
 *
 * @param   sentence - the sentence to validate
 * @return  boolean
 */
export default sentence => {
    return !sentence
        .slice(0, -1)          
        .split('')
        .includes('.')
}

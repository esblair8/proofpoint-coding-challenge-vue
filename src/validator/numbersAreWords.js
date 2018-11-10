/**
 * Function to tests that a given sentence has no numbers in the range 0 - 13 inclusive
 * example: 0, 1, 2 ... 13 (numbers spelt in words will pass the test)
 * Function assumes that numbers above 13 are valid in either form (example: 14 and fourteen will both pass test)
 * negative numbers should be in number format for readability but will pass the test in either format)
 *
 * @param  sentence - the sentence to validate
 * @return boolean
 */
export default (sentence) => {
    const numbersArray = [...Array(14).keys()]

    return !numbersArray.some(number =>  
        // replace any punctuation for edge case like 10. 10, etc 
        // this wiill ensure matching with elements in array above
        sentence
            .replace(/[.",]/g, '')  
            .split(' ')
            .includes(String(number))
        )
}
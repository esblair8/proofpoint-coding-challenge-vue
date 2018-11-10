/**
 * Function that tests if a given function has an even number of quotation marks (double or single)
 * Apostrophes) are ignored
 * There must be an even number of single and double quotes to pass the test
 * Example: one single and one double will fail     
 * 
 * @param  sentence - the sentence to validate.
 * @return  boolean || null
 */
export default sentence => {

    let sentenceArry = sentence
        // replace word with apostrophes with a dash so they dont get counted
        .replace(/([\w]+['][\w]+)/gi, '-') 
        .split('')

    const { single, double } = partitionSentence(sentenceArry)    
    return ((single.length % 2 === 0) && (double.length % 2 === 0))
}

const partitionSentence = sentenceArray => {
    const single = []
    const double = []

    sentenceArray.forEach(char => {
        if(char === "'") {
            single.push(char)
        } else if (char === '"') {
            double.push(char)
        }
    })

    return {
        single,
        double
    }
}
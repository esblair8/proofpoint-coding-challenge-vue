export default (sentence) => {
    if (!sentence.includes('"')) {
        return null
    }
    let quoteArray = sentence
        .split('')
        .filter((char) => char === '"')
        
    return quoteArray.length % 2 === 0
}
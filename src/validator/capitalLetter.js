export default (sentence) => {
    if(! sentence[0].match(/[a-z]/i)){
        return null
    }
    let firstLetter = sentence[0]    
    return firstLetter === firstLetter.toUpperCase()
}
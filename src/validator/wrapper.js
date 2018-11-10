import sentenceIsString from './sentenceIsString'

export default (subValidation, sentence) => {
    const validString = sentenceIsString(sentence)
    
    if(validString.isValid) {
        return subValidation(sentence)
    } else {
        return validString.error
    }  
}
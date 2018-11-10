export default (sentence) => {
    const numbersArray = [...Array(14).keys()]

    return !numbersArray.some(number =>  
                sentence
                    .replace(/[.",]/g, '')
                    .split(' ')
                    .includes(String(number))
            )
}
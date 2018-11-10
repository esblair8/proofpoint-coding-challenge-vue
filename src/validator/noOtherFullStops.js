export default sentence => {
    return !sentence
        .slice(0, -1)          
        .split('')
        .includes('.')
}

import quotationMarks from '../../src/validator/quotationMarks'
/*
*  single quotes are allowed for words like won't etc
*/
describe('quotationMarks function validates numbers of quotes is even', () =>{

    test('sentence has correct number of double quotes (4)', () => {
        expect(quotationMarks("Hello \"World\"")).toBe(true)
        expect(quotationMarks('Hello "World"')).toBe(true)
        expect(quotationMarks('"Hello" "World"')).toBe(true)
    })

    test('sentence has no double or single quotes', () => {
        expect(quotationMarks("Hello World")).toBeNull
        expect(quotationMarks('Hello World')).toBeNull
    })


   test('sentence is only one quote', () => {
        expect(quotationMarks("\"")).toBe(false)
        expect(quotationMarks('"')).toBe(false)  
    })

    test('sentence is only two quote', () => {
        expect(quotationMarks("\"\"")).toBe(true)
        expect(quotationMarks('""')).toBe(true)  
    })

    test('sentence is only three quotes', () => {
        expect(quotationMarks('"""')).toBe(false)
        expect(quotationMarks("\"\"\"")).toBe(false)
    })


    test('sentence has one quote', () => {
        expect(quotationMarks("Hello \"World")).toBe(false)
        expect(quotationMarks('Hello "World')).toBe(false)
    })

    test('sentence has three quotes', () => {
        expect(quotationMarks("Hello\" \"World\"")).toBe(false)
        expect(quotationMarks('Hello" "World"')).toBe(false)  
    })

})
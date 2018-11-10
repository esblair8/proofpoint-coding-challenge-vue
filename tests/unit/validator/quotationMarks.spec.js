import quotationMarks from '@/validator/quotationMarks'
/*
*  single quotes are allowed for words like won't etc
*/
describe('quotationMarks function validates numbers of double quotes is even', () =>{

    test('sentence has correct number of double quotes', () => {
        expect(quotationMarks("Hello \"World\"")).toBe(true)
        expect(quotationMarks('Hello "World"')).toBe(true)
        expect(quotationMarks('"Hello" "World"')).toBe(true)
    })

    test('sentence has no double or single quotes', () => {
        expect(quotationMarks("Hello World")).toBeNull
        expect(quotationMarks('Hello World')).toBeNull
    })

    test('sentence has one double quote', () => {
        expect(quotationMarks("Hello \"World")).toBe(false)
        expect(quotationMarks('Hello "World')).toBe(false)
    })

    test('sentence has three double quotes', () => {
        expect(quotationMarks("Hello\" \"World\"")).toBe(false)
        expect(quotationMarks('Hello" "World"')).toBe(false)  
    })

})

describe('quotationMarks function validates numbers of single quotes is even', () =>{

    test('sentence has correct number of single quotes', () => {
        expect(quotationMarks("Hello 'World'")).toBe(true)
        expect(quotationMarks("Hello' 'World")).toBe(true)
    })

    test('sentence has no double or single quotes', () => {
        expect(quotationMarks('Hello World')).toBeNull
        expect(quotationMarks('Hello World')).toBeNull
    })

    test('sentence has one single quote', () => {
        expect(quotationMarks("Hello 'World")).toBe(false)
        expect(quotationMarks("'Hello World")).toBe(false)
        expect(quotationMarks("Hello World'")).toBe(false)

    })

    test('sentence has three single quotes', () => {
        expect(quotationMarks("'Hello' 'World")).toBe(false)  
    })

})

describe('quotationMarks function validates mixed quotes correctly', () =>{

    test('sentence has correct number of mixed quotes', () => {
        expect(quotationMarks('\'Hello\' "World"')).toBe(true)
        expect(quotationMarks(" \"Hello\" 'World'")).toBe(true)
    })
    
    test('sentence has incorrect number of mixed quotes', () => {
        expect(quotationMarks('\'Hello World"')).toBe(false)
        expect(quotationMarks("'Hello' \"World")).toBe(false)
        expect(quotationMarks("Hello\" 'World")).toBe(false)
    })

    test('sentence has correct number of mixed quotes and apostrophe', () => {
        expect(quotationMarks("'Hel'lo' World")).toBe(true)
    })
    
    test('sentence has incorrect number of mixed quotes anbd apostrophe', () => {
        expect(quotationMarks("Don't Hello' 'World'")).toBe(false)
    })
})
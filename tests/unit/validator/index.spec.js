import validate from '@/validator'


describe('Index', () => {

    const sentence = 'Valid "sentence" with thirteen in it.'
    const invalidSentence = 'invalid sentence" with 13 in it. and a full stop in the wrong place'

    test('should validate everything when no params are passed - uses default', () => {

        const expectedResults = {
            results: {
                capitalLetterValid: true,
                fullStopValid: true,
                noOtherFullStopValid: true,
                quotationMarksValid: true,
                numbersValid: true
            },
            sentence,
            complete: true
        }  

        expect(validate(sentence)).toEqual(expectedResults)
        expect(validate(sentence).complete).toBe(true)

  })

    test('should validate everything but capital-letter', () => {

        const params = {
            'capital-letter': false,
            'full-stop': true,
            'no-other-full-stop': true,
            quotes: true,
            numbers: true
        }

        const expectedResults = {
            results: {
                capitalLetterValid: null,
                fullStopValid: true,
                noOtherFullStopValid: true,
                quotationMarksValid: true,
                numbersValid: true
        },
        sentence,
        complete: true
        }  

        expect(validate(sentence, params)).toEqual(expectedResults)
        expect(validate(sentence, params).complete).toBe(true)
    })

    test('should validate everything but full-stop', () => {

        const params = {
            'capital-letter': true,
            'full-stop': false,
            'no-other-full-stop': true,
            quotes: true,
            numbers: true
        }

        const expectedResults = {
                results: {
                    capitalLetterValid: true,
                    fullStopValid: null,
                    noOtherFullStopValid: true,
                    quotationMarksValid: true,
                    numbersValid: true
            },
            sentence,
            complete: true
        }  

        expect(validate(sentence, params)).toEqual(expectedResults)
        expect(validate(sentence, params).complete).toBe(true)


    })

    test('should validate everything but no-other-full-stop', () => {

        const params = {
            'capital-letter': true,
            'full-stop': true,
            'no-other-full-stop': false,
            quotes: true,
            numbers: true
        }

        const expectedResults = {
                results: {
                    capitalLetterValid: true,
                    fullStopValid: true,
                    noOtherFullStopValid: null,
                    quotationMarksValid: true,
                    numbersValid: true
            },
            sentence,
            complete: true
        }  

        expect(validate(sentence, params)).toEqual(expectedResults)
        expect(validate(sentence, params).complete).toBe(true)
    })

    test('should validate everything but quotes', () => {

        const params = {
            'capital-letter': true,
            'full-stop': true,
            'no-other-full-stop': true,
            quotes: false,
            numbers: true
        }

        const expectedResults = {
                results: {
                    capitalLetterValid: true,
                    fullStopValid: true,
                    noOtherFullStopValid: true,
                    quotationMarksValid: null,
                    numbersValid: true
            },
            sentence,
            complete: true
        }  

        expect(validate(sentence, params)).toEqual(expectedResults)
        expect(validate(sentence, params).complete).toBe(true)
    })

    test('should validate everything but numbers', () => {

        const params = {
            'capital-letter': true,
            'full-stop': true,
            'no-other-full-stop': true,
            quotes: true,
            numbers: false
        }

        const expectedResults = {
                results: {
                    capitalLetterValid: true,
                    fullStopValid: true,
                    noOtherFullStopValid: true,
                    quotationMarksValid: true,
                    numbersValid: null
            },
            sentence,
            complete: true
        }  

        expect(validate(sentence, params)).toEqual(expectedResults)
        expect(validate(sentence, params).complete).toBe(true)
    })

    test('should validate everything while passing params and string completely invalid', () => {

        const params = {
            'capital-letter': true,
            'full-stop': true,
            'no-other-full-stop': true,
            quotes: true,
            numbers: true
        }

        const expectedResults = {
                results: {
                    capitalLetterValid: false,
                    fullStopValid: false,
                    noOtherFullStopValid: false,
                    quotationMarksValid: false,
                    numbersValid: false
            },
            sentence: invalidSentence,
            complete: true
        }  

        expect(validate(invalidSentence, params)).toEqual(expectedResults)
        expect(validate(invalidSentence, params).complete).toBe(true)
    })
})
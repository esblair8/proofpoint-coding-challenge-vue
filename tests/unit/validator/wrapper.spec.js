import validate from '@/validator/wrapper'

import capitalLetter from '@/validator/capitalLetter'
import quotationMarks from '@/validator/quotationMarks'
import numbersAreWords from '@/validator/numbersAreWords'
import fullStop from '@/validator/fullStop'

//unit tests
describe('validate wrapper runs sub validator correctly', () => {
  //mock function
  const testFunction = jest.fn(sentence => 'test')

  test('capital letter valid', () => {
    expect(validate(testFunction, 'Valid Sentence')).toBe('test')
    expect(testFunction).toHaveBeenCalled()
    expect(testFunction).toHaveBeenCalledWith('Valid Sentence')

  })
})

//Integrations tests 
describe('wrapper integrates with sub validators', () =>{

  test('capital letter valid', () => {
    expect(validate(capitalLetter, 'Valid Sentence')).toBe(true)
  })

  test('full stop valid', () => {
    expect(validate(fullStop, 'Valid Sentence.')).toBe(true)
  })

  test('numbers are words valid', () => {
    expect(validate(numbersAreWords, 'Valid number ten.')).toBe(true)
  })

  test('quotation marks valid', () => {
    expect(validate(quotationMarks, 'Valid number of "quotes".')).toBe(true)
  })



  test('capital letter invalid', () => {
    expect(validate(capitalLetter, 'invalid Sentence')).toBe(false)
  })

  test('full stop invalid', () => {
    expect(validate(fullStop, 'Valid Sentence')).toBe(false)
  })

  test('numbers are words invalid', () => {
    expect(validate(numbersAreWords, 'Valid number 10')).toBe(false)
  })

  test('quotation marks invalid ', () => {
    expect(validate(quotationMarks, 'Valid number of "quotes.')).toBe(false)
  })



  test('invalid string', () => {
    expect(validate(capitalLetter, '')).toBe("Sentence is an empty string")
  })
})
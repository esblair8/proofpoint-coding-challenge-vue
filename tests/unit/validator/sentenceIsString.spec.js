import sentenceIsString from '@/validator/sentenceIsString'

describe('sentenceIsString function validates sentence starts with capital letter', () =>{

  test('sentence is string', () => {
    expect(sentenceIsString('Hello world').isValid).toBe(true)
  })

  test('sentence is an empty string', () => {
    expect(sentenceIsString('').isValid).toBe(false)
  })

  test('sentence is null or undefined', () => {
    expect(sentenceIsString(null).isValid).toBe(false)
    expect(sentenceIsString(undefined).isValid).toBe(false)
  })

  test('sentence is an object', () => {
    expect(sentenceIsString({}).isValid).toBe(false)
  })

  test('sentence is a number', () => {
    expect(sentenceIsString(123).isValid).toBe(false)
    expect(sentenceIsString(-123000000).isValid).toBe(false)
  })

  test('sentence is a boolean', () => {
    expect(sentenceIsString(true).isValid).toBe(false)
    expect(sentenceIsString(false).isValid).toBe(false)

  })

  test('sentence is only one character long', () => {
    expect(sentenceIsString('.').isValid).toBe(false)
    expect(sentenceIsString('T').isValid).toBe(false)
    expect(sentenceIsString('t').isValid).toBe(false)
    expect(sentenceIsString('1').isValid).toBe(false)
    //boundary test - sentence with 2 characters pass
    expect(sentenceIsString('He').isValid).toBe(true)
  })

})
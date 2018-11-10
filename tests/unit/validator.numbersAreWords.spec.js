import numbersAreWords from '../../src/validator/numbersAreWords'

describe('numbersAreWords function validates numbers below 13 are spelled out in full', () =>{

  test('sentence has number three in it', () => {
    expect(numbersAreWords('sentence has number three in it')).toBe(true)
  })

  test('sentence has number 3 in it', () => {
    expect(numbersAreWords('sentence has number 3 in it')).toBe(false)
  })

  test('sentence has number no numbers in it', () => {
    expect(numbersAreWords('sentence has no numbers in it')).toBe(true)
  })

  test('sentence has fourteen in it', () => {
    expect(numbersAreWords('sentence has fourteen in it')).toBe(true)
  })

  test('sentence has 14 in it', () => {
    expect(numbersAreWords('sentence has 14 in it')).toBe(true)
  })  
  
  test('sentence has zero in it', () => {
    expect(numbersAreWords('sentence has zero in it')).toBe(true)
  })

  test('sentence has 0 in it', () => {
    expect(numbersAreWords('sentence has 0 in it')).toBe(false)
  })

  //keep -1 as numbers as not n range 0 to 13 (it also reads better than below test example)
  test('sentence has -1 in it', () => {
    expect(numbersAreWords('sentence has -1 in it')).toBe(true)
  })

  test('sentence has minus one in it', () => {
    expect(numbersAreWords('sentence has minus one in it')).toBe(true)
  })

  test('sentence has the number 10 at the end with a full stop', () => {
    expect(numbersAreWords('the number is 10.')).toBe(false)
  })

  test('sentence has the number ten at the end with a full stop', () => {
    expect(numbersAreWords('the number is ten.')).toBe(true)
  })

  test('sentence has the number "ten" at the end in quotes', () => {
    expect(numbersAreWords('the number is "ten"')).toBe(true)
  })

  test('sentence has the number "10" at the end in quotes', () => {
    expect(numbersAreWords('the number is "10"')).toBe(false)
  })

  test('sentence has the number "10" at the end in quotes with a full stop', () => {
    expect(numbersAreWords('the number is "10".')).toBe(false)
  })
})
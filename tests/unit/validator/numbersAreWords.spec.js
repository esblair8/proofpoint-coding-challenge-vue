import numbersAreWords from '@/validator/numbersAreWords'

describe('numbersAreWords', () =>{

  test('should validate sentence has number three in it', () => {
    expect(numbersAreWords('sentence has number three in it')).toBe(true)
  })

  test('should validate sentence has number 3 in it', () => {
    expect(numbersAreWords('sentence has number 3 in it')).toBe(false)
  })

  test('should validate sentence has number no numbers in it', () => {
    expect(numbersAreWords('sentence has no numbers in it')).toBe(true)
  })

  test('should validate sentence has fourteen in it', () => {
    expect(numbersAreWords('sentence has fourteen in it')).toBe(true)
  })

  test('should validate sentence has 14 in it', () => {
    expect(numbersAreWords('sentence has 14 in it')).toBe(true)
  })  
  
  test('should validate sentence has zero in it', () => {
    expect(numbersAreWords('sentence has zero in it')).toBe(true)
  })

  test('should validate sentence has 0 in it', () => {
    expect(numbersAreWords('sentence has 0 in it')).toBe(false)
  })

  //keep -1 as numbers as not n range 0 to 13 (it also reads better than below test example)
  test('should validate sentence has -1 in it', () => {
    expect(numbersAreWords('sentence has -1 in it')).toBe(true)
  })

  test('should validate sentence has minus one in it', () => {
    expect(numbersAreWords('sentence has minus one in it')).toBe(true)
  })

  test('should validate sentence has the number 10 at the end with a full stop', () => {
    expect(numbersAreWords('the number is 10.')).toBe(false)
  })

  test('should validate sentence has the number ten at the end with a full stop', () => {
    expect(numbersAreWords('the number is ten.')).toBe(true)
  })

  test('should validate sentence has the number "ten" at the end in quotes', () => {
    expect(numbersAreWords('the number is "ten"')).toBe(true)
  })

  test('should validate sentence has the number "10" at the end in quotes', () => {
    expect(numbersAreWords('the number is "10"')).toBe(false)
  })

  test('should validate sentence has the number "10" at the end in quotes with a full stop', () => {
    expect(numbersAreWords('the number is "10".')).toBe(false)
  })
})
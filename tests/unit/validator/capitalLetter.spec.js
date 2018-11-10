import capitalLetter from '@/validator/capitalLetter'

describe('capitalLetter function validates sentence starts with capital letter', () =>{

  test('sentence starts with capital letter', () => {
    expect(capitalLetter('Sentence with capital letter.')).toBe(true)
  })

  test('sentence starts with lowercase letter', () => {
    expect(capitalLetter('sentence without capital letter.')).toBe(false)
  })

  test('sentence is a number', () => {
    expect(capitalLetter('1000')).toBeNull
  })
  test('sentence starts with non alphabet character', () => {
    expect(capitalLetter('"sentence starts with quote')).toBeNull
  })
})
import fullStop from '@/validator/fullStop'

describe('fullStop function validates presence of full stop at the end', () =>{

  test('sentence with full stop is treu', () => {
    expect(fullStop('Sentence with full stop.')).toBe(true)
  })

  test('sentence without full stop is false', () => {
    expect(fullStop('Sentence without full stop')).toBe(false)
  })

  test('sentence with elipsis is true', () => {
    expect(fullStop('Sentence with full stop...')).toBe(true)
  })
})
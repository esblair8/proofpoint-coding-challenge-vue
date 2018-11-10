import fullStop from '../../src/validator/fullStop'

describe('fullStop function validates presence of full stop at the end', () =>{

  test('sentence with full stop', () => {
    expect(fullStop('Sentence with full stop.')).toBe(true)
  })

  test('sentence without full stop', () => {
    expect(fullStop('Sentence without full stop')).toBe(false)
  })

  test('sentence with elipsis', () => {
    expect(fullStop('Sentence with full stop...')).toBe(true)
  })
})
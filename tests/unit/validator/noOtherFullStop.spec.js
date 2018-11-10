import noOtherFullStop from '@/validator/noOtherFullStops'

describe('NoOtherFullStops', () => {
    
    test('should validate there are no other full stops aprt from last character', () => {
        expect(noOtherFullStop('Theres only a full stop at the end.')).toBe(true)
        expect(noOtherFullStop('Theres only a full. stop in the middle')).toBe(false)
        expect(noOtherFullStop('Theres are no full stops - this is tested seprately')).toBe(true)
        expect(noOtherFullStop('Theres are n2 full stops at the end..')).toBe(false)
        expect(noOtherFullStop('Theres is a full stop one character before the en.d')).toBe(false)
    })
})
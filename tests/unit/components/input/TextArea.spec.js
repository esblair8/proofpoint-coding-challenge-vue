import { mount } from '@vue/test-utils'
import TextArea from '@/components/input/TextArea.vue'

describe('TextArea', () => {
    
    test('should emit event correctly', () => {
        const wrapper = mount(TextArea)
        
        wrapper.vm.$emit('sentenceEvent', 'imagine this was input from the user')

        // assert event was in fact emitted
        expect(wrapper.emitted().sentenceEvent).toBeTruthy()
        // assert correct number of events
        expect(wrapper.emitted().sentenceEvent.length).toBe(1)
        // assert payload
        expect(wrapper.emitted().sentenceEvent[0]).toEqual(['imagine this was input from the user'])
    })
})
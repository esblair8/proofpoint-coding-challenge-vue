import { mount } from '@vue/test-utils'
import Requirements from '@/components/requirements/Requirements.vue'
import MainTitle from '@/components/shared/MainTitle.vue'
import SecondaryTitle from '@/components/shared/SecondaryTitle.vue'

describe('Requirements', () => {
    
    test('should render correctly', () => {
        const wrapper = mount(Requirements)
        
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find(MainTitle).exists()).toBe(true)
        expect(wrapper.find(SecondaryTitle).exists()).toBe(true)
    })
})
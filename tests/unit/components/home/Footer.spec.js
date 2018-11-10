import { mount } from '@vue/test-utils'
import Footer from '@/components/navigation/Footer.vue'

describe('Footer', () => {
    
    test('should render correctly', () => {
        const wrapper = mount(Footer)
        
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find('footer').exists()).toBe(true)
    })
})
import { mount } from '@vue/test-utils'
import Footer from '@/components/navigation/Footer.vue'

describe('Footer', () => {
    
    test('should render correctly', () => {
        const wrapper = mount(Footer)
        
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find('footer').exists()).toBe(true)

    })

    test('should show link to github', () => {
        const wrapper = mount(Footer)
        
        expect(wrapper.find('a').attributes('href')).toBe('https://github.com/esblair8/')
    })
})
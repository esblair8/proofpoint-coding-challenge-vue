import { mount } from '@vue/test-utils'
import SecondaryTitle from '@/components/shared/SecondaryTitle.vue'

describe('Secondary Title', () => {
    
    test('should render correctly', () => {
        const wrapper = mount(SecondaryTitle)
        
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find('h2').exists()).toBe(true)
    })

    test('should correctly show title passed as property', () => {
        const wrapper = mount(SecondaryTitle,  {
            propsData: {
                titleMessage: 'test string'
            }
        })
    
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find('h2').exists()).toBe(true)
        expect(wrapper.find('h2').text()).toEqual('test string')
    })
})
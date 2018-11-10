import { mount } from '@vue/test-utils'
import MainTitle from '@/components/shared/MainTitle.vue'

describe('MainTitle', () => {
    
    test('should render correctly', () => {
        const wrapper = mount(MainTitle)
        
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find('h1').exists()).toBe(true)
    })

    test('should correctly show title passed as property', () => {
        const wrapper = mount(MainTitle,  {
            propsData: {
                titleMessage: 'test string'
            }
        })

        expect(wrapper.find('h1').text()).toEqual('test string')
    })
})
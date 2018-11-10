import { mount } from '@vue/test-utils'
import ErrorMessage from '@/components/shared/ErrorMessage.vue'

describe('Error Message', () => {
    
    test('should render correctly', () => {
        const wrapper = mount(ErrorMessage)
        
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find('div').exists()).toBe(true)
    })

    test('should correctly show error message passed a sproperty', () => {
        const wrapper = mount(ErrorMessage,  {
            propsData: {
                errorMessage: 'test error string'
            }
        })
        
        expect(wrapper.find('div').text()).toEqual('test error string')
    })
})
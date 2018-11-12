import { mount } from '@vue/test-utils'
import Result from '@/components/results/Result.vue'

describe('Result', () => {
    
    
    test('should render correctly', () => {
        const wrapper = mount(Result)
        
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find('[class="header"]').exists()).toBe(true)
        expect(wrapper.findAll('div').wrappers.length).toBe(2)
    })

    test('should correctly show message passed as property', () => {
        const wrapper = mount(Result,  {
            propsData: {
                resultText: 'result string passed as props',
                resultColour: 'red'
            }
        })

        expect(wrapper.findAll('div').wrappers.length).toBe(2)
    })

    test('should apply colour classes correctly', () => {
        const wrapper = mount(Result,  {
            propsData: {
                resultText: 'result string',
                resultColour: 'red'
            }
        })
        
        expect(wrapper.find('[class="ui large red message"]').exists()).toBe(true)
        expect(wrapper.find('[class="ui large green message"]').exists()).toBe(false)

        //change property resultColout to green 
        wrapper.setProps({ resultColour: 'green' })

        expect(wrapper.find('[class="ui large green message"]').exists()).toBe(true)
        expect(wrapper.find('[class="ui large red message"]').exists()).toBe(false)
    })
})
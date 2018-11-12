import { shallowMount, createLocalVue } from '@vue/test-utils'
import InputSubSection from '@/components/input/InputSubSection.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('InputSubSection', () => {
    
    let actions
    let store

    //create a new vuex store before each test
    //mockout the actions and state can be empty object
    beforeEach(() => {
        actions = {
            set_validation_results: jest.fn(),
        }
        store = new Vuex.Store({
            state: {},
            actions
        })
    })

    test('should render correctly', () => {
        const wrapper = shallowMount(InputSubSection)
        
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find('section').exists()).toBe(true)
    })

    test('should return correct object with correct validation flags', () => {
        const wrapper = shallowMount(InputSubSection)
        
        wrapper.setData({validations: [
                {
                    name: 'capital-letter',
                    performValidation: true
                },
                {
                    name: 'full-stop',
                    performValidation: false
                },
                {
                    name: 'numbers',
                    performValidation: true
                },
                
            ]})

        const expected = {
            'capital-letter': true,
            'full-stop': false,
            'numbers': true

        }
        expect(wrapper.vm.getValidationsToPerform).toEqual(expected)
    })

    test('should check at least one validation selected (unhappy path)', () => {
        const wrapper = shallowMount(InputSubSection)
        
        wrapper.setData({validations: [
                {
                    name: 'capital-letter',
                    performValidation: false
                },
                {
                    name: 'full-stop',
                    performValidation: false
                },
                {
                    name: 'no-other-full-stop',
                    performValidation: false
                },
                {
                    name: 'quotes',
                    performValidation: false
                },
                {
                    name: 'numbers',
                    performValidation: false
                }
            ]})

        expect(wrapper.vm.checkAtLeastOneValidationSelected).toBe(true)
    })

    test('should check at least one validation selected (happy path)', () => {
        const wrapper = shallowMount(InputSubSection)
        
        wrapper.setData({validations: [
                {
                    name: 'capital-letter',
                    performValidation: true
                },
                {
                    name: 'full-stop',
                    performValidation: false
                },
                {
                    name: 'no-other-full-stop',
                    performValidation: false
                },
                {
                    name: 'quotes',
                    performValidation: false
                },
                {
                    name: 'numbers',
                    performValidation: false
                }
            ]})
        expect(wrapper.vm.checkAtLeastOneValidationSelected).toBe(false)
    })

    test('should call save on button click', () => {
        const wrapper = shallowMount(InputSubSection)

        wrapper.vm.save('test sentence')
        expect(wrapper.vm.$data.sentenceError).toBe(false)
        expect(wrapper.vm.$data.sentence).toBe('test sentence')
    })

    test('should call discard on button click', () => {
        const wrapper = shallowMount(InputSubSection)
        const discardMock = jest.fn()
        
        wrapper.setMethods({discardSentence: discardMock})

        wrapper.find('#discard').trigger('click')
        
        expect(discardMock.mock.calls.length).toBe(1)
    })

    test('should reset state on button click', () => {
        const wrapper = shallowMount(InputSubSection)
        const resetMock = jest.fn()
        
        wrapper.setMethods({reset: resetMock})

        wrapper.find('#reset').trigger('click')
        
        expect(resetMock.mock.calls.length).toBe(1)
    })

    test('should validate sentence on button click', () => {
        const wrapper = shallowMount(InputSubSection)
        const validateMock = jest.fn()
        
        wrapper.setMethods({validate: validateMock})

        wrapper.find('#validate').trigger('click')
        
        expect(validateMock.mock.calls.length).toBe(1)
    })
})
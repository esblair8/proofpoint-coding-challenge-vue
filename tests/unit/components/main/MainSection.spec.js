import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import MainSection from '@/components/main/MainSection.vue'
import MainTitle from '@/components/shared/MainTitle.vue'
import InputSubSection from '@/components/input/InputSubSection.vue'
import ResultsSubSection from '@/components/results/ResultsSubSection.vue'


const localVue = createLocalVue()
localVue.use(Vuex)

describe('MainSection', () => {

    let store

    beforeEach(() => {
        const getters = {
            getResults: jest.fn()
        }
        store = new Vuex.Store({
            state: {},
            getters
        })
    })

    test('should render correctly', () => {
        const wrapper = shallowMount(MainSection, { 
            store, 
            localVue,
            stubs: {
                RouterLink: RouterLinkStub
            } 
        })

        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find(MainTitle).exists()).toBe(true)
        expect(wrapper.find(InputSubSection).exists()).toBe(true)
        expect(wrapper.find(ResultsSubSection).exists()).toBe(true)
    })
})
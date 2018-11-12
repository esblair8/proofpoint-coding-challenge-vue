import { shallowMount , createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ResultsSubSection from '@/components/results/ResultsSubSection.vue'
import store from '@/store'

const localVue = createLocalVue()
localVue.use(Vuex)


describe('ResultsSubSection', () => {

    test('should render correctly', () => {
        const wrapper = shallowMount(ResultsSubSection, { 
            store, 
            localVue, 
        })
      
        expect(wrapper.exists()).toBe(true)
    })
})
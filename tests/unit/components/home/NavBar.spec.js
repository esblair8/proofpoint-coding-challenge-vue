import { mount , shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import NavBar from '@/components/navigation/NavBar.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('NavBar', () => {
    
    test('should render correctly', () => {
        const wrapper = mount(NavBar, {localVue, router})
        
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find('nav').exists()).toBe(true)
    })

    //TODO: test the router functions properly

    //   test('should render correctly', () => {
    //     const wrapper = mount(NavBar, {localVue, router})
        
    //     expect(true).toBe(false)
    // })
})
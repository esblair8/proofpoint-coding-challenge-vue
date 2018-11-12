import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import App from '@/components/App.vue'
import NavBar from '@/components/navigation/NavBar.vue'
import FooterBar from '@/components/navigation/Footer.vue'


describe('App', () => {

    const localVue = createLocalVue()
    localVue.use(VueRouter)
    
    const router = new VueRouter({})

    test('should render correctly', () => {
        const wrapper = mount(App, { localVue, router })
        
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find(NavBar).exists()).toBe(true)
        expect(wrapper.find(FooterBar).exists()).toBe(true)
    })
})
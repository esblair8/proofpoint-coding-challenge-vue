import Home from '../components/main/Home.vue'
import Main from '../components/main/MainSection.vue'
import VueRouter from 'vue-router'

const routes =  [
    { name: 'home', path: '/', component: Home },
    { name: 'string-validator', path: '/validate', component: Main}, 
    { path: '/*', redirect: '/'}
]

export default new VueRouter({
	mode: 'history',
    routes
})
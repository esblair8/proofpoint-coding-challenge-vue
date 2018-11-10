
import VueRouter from 'vue-router'
import Requirements from '../components/requirements/Requirements.vue'
import MainSection from '../components/main/MainSection.vue'

const routes =  [
    { name: 'requirements', path: '/requirements', component: Requirements },
    { name: 'home', path: '/', component: MainSection} , 
    { path: '/*', redirect: '/'}
]

// create new vue router with the above routes for clinet side routing
export default new VueRouter({
	mode: 'history',
    routes
})
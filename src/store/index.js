import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as actions from './actions'
import getters from './getters'

Vue.use(Vuex)

// holds state of application
const state = {
    results: {}
}

/** 
 * create new store with:
 * state object
 * state mutations
 * actions
 * getters
 */
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})

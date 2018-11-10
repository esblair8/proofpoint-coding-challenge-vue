import * as types from './mutation-types'

export const mutations = {
	[types.SET_VALIDATION_RESULTS] (state, results_payload) {
		state.results = results_payload
	}
}

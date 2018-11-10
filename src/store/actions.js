import * as types from './mutation-types'

// actions can be dispatched from components
// actions commit mutations which operate on the state
export const set_validation_results = ({ commit }, results_payload) => {
	commit(types.SET_VALIDATION_RESULTS, results_payload)
}
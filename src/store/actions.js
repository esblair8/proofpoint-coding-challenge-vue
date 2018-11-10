import * as types from './mutation-types'

export const set_validation_results = ({ commit }, results_payload) => {
	commit(types.SET_VALIDATION_RESULTS, results_payload)
}
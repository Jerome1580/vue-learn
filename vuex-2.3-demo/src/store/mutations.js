import {INCREMENT,DECREMENT} from './types.js'
import getters from './getters.js'
import state from './state.js'

const mutations={
	[INCREMENT](state){	
		state.count++;
	},
	[DECREMENT](state){
		state.count--;
	}
}

export default {
	state,
	mutations,
	getters
}
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from './mutations.js'
import state from './state.js'
import actions from './actions.js'

export default new Vuex.Store({
	actions,
	modules:{
		mutations
	},
	state
	
})
import getters from './getters.js'
import {HEAD} from './types.js'

const state = {
    headShow:true
}

const mutations = {
    [HEAD.showHead](state){

        state.headShow = true
    },
    [HEAD.hideHead](state){
        state.headShow = false
    }
}

export default {
    state,
    mutations,
    getters
}
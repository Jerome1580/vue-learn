import getters from './getters.js'
import {HEAD,CustomComponents} from './types.js'

const state = {
    headShow:true,
    showLoading:false
}

const mutations = {
    [HEAD.showHead](state){
        state.headShow = true
    },
    [HEAD.hideHead](state){
        state.headShow = false
    },
    [CustomComponents.showLoading](state){
        state.showLoading = true
    },
    [CustomComponents.hideLoading](state){
        state.showLoading = false
    }

}

export default {
    state,
    mutations,
    getters
}
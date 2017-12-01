import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    headShow:false
}

const mutations = {
    showHead(state){
        alert(1)
        state.headShow = true
    },
    hideHead(state){
        alert(2)
        state.headShow = false
    },
}

export default new Vuex.Store({
    state,
    mutations
})
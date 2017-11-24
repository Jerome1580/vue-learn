import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    count:60
}

const mutations = {
    jia(state,n) {
        state.count += n.a


    },
    jian(state) {
        state.count--
    }
}


export default new Vuex.Store({
    state,
    mutations
})
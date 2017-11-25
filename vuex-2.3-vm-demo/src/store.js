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

const getters = {
    count:function(state){
        return state.count += 200
    }
}

const actions = {
    jiaplus(context){
        context.commit('jia',{a:1});
        setTimeout(()=>{
             context.commit('jian')
        }, 3000);
    },
    jianplus({commit}){
        commit('jian')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
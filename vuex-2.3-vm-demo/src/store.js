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

/**
 * 这是modules写法，用管理很多模块数据，非大型项目不建议用，容易乱
 */

/*const moduleA = {
    state,
    mutations,
    getters,
    actions
}

// 假设B是从外面引入过来的
const moduleB = {
    state:{count:99}
}

export default new Vuex.Store({
    modules:{
        a:moduleA,
        b:moduleB
    }

})*/


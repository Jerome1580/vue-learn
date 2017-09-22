import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
	count:10
}

//处理状态（数据）的变化
const mutations = {  //action 中increment 触发了commit提交了increment_rj，提交到mutation中
	increment_rj(state){  //state 就是上面定义的数据
		state.count ++ ;

	},
	decrement_rj(state){
		state.count -- ;
	}
}

//处理什么时候要变化
const actions={
	//当点击的时候传了很多对象，其中有一个是commit对象，专门用来提交的
	increment:({commit})=>{  //处理你要干什么，异步请求，判断，流程控制
			commit('increment_rj')  //我要increment，增加
	},
	decrement:({commit})=>{
			commit('decrement_rj')  
	},
	clickOdd:({commit,state})=>{
		//还有一个对象是state,状态，所有的数据
		//alert(state.count)
		if(state.count %2 == 0){

			commit('increment_rj')  
		}
	},
	clickAsync:({commit})=>{
		new Promise((resolve)=>{
			setTimeout(function() {
				commit('increment_rj');

				resolve()
			}, 1000);
		});
	}
}

const getters = {
	count(state){
		return state.count;
	},
	getOdd(state){
		return state.count%2 == 0?'偶数':'奇数';
	},
}


//需要导出Store 对象

export default new Vuex.Store({
	actions,
	state,
	mutations,
	getters

})
<template>
  <div id="app">
  	<loading v-show="loading"></loading>
    <NavView v-show="headerShow"></NavView>
    <keep-alive>
    	<router-view class="router-view"></router-view>
    </keep-alive>
   
    <FooterView></FooterView>
  </div>
</template>
<script>
import NavView from './components/Nav.vue';
import FooterView from './components/Footer.vue';

import {mapGetters,mapActions} from 'vuex'

	export default{
		computed:mapGetters([
				'headerShow',
				'loading'
		]),
		watch:{
			$route(to,from){
				if(to.path == '/user-info'){
					this.$store.dispatch('hideHeader');
				}else{
					this.$store.dispatch('showHeader');
				}
			}
		},
		components:{
			NavView,
			FooterView
		},
		
	}
</script>
<style>
	@import './assets/css/index.css'
</style>

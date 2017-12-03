<template>
  <div id="app">
    <Loading v-show="showLoading"></Loading>
    <NavView v-show="headShow"></NavView>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
    <FooterView></FooterView>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

import NavView from '@/components/Nav.vue'
import FooterView from '@/components/Footer.vue'

export default {
  name: 'app',
  data(){
    return {

    }
  },
  computed:{
    ...mapGetters([
        'headShow',
        'showLoading'
    ])
  },
  components:{
    NavView,
    FooterView
  },
  watch:{
    $route(to,from){
      if(to.path == '/user-info'){
         this.$store.dispatch('hideHead')
      }else{
        this.$store.dispatch('showHead',{
          a:10
        })
      }
    }
  },
  methods:{
    ...mapActions([
        'showHead',
        'hideHead'
    ])
  }
}
</script>

<style>
@import './assets/css/index.css';


</style>

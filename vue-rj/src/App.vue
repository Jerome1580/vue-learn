<template>
  <div id="app">
    <NavView v-show="headShow"></NavView>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
    <FooterView></FooterView>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'

import NavView from '@/components/Nav.vue'
import FooterView from '@/components/Footer.vue'

export default {
  name: 'app',
  data(){
    return {

    }
  },
  computed:{
    ...mapState({

     })
  },
  components:{
    NavView,
    FooterView
  },
  watch:{
    $route(to,from){
      if(to.path == '/user-info'){
        this.hideHead()
      }else{
        this.showHead()
      }
    }
  },
  methods:{
    ...mapMutations([
        'showHead',
        'hideHead'
    ])
  }
}
</script>

<style>
@import './assets/css/index.css';


</style>

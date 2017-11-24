<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>{{ $store.state.count }} - {{ count }}</div>
    <p>
      <button @click="$store.commit('jia',{a:10})"> + </button>
      <button @click="jian"> - </button>
    </p>
    <router-view/>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'

export default {
  name: 'app',
  data(){
    return {
    }
  },
/*  computed:{
    count(){
      return this.$store.state.count + 1
    }
  }*/
/*  computed:mapState({
    count:state=>state.count  //  可以进行计算
  }),*/
  computed:mapState([
      'count'  //  不进行计算，直接输出
  ]),
  methods:mapMutations([
      'jia',
      'jian'
  ])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

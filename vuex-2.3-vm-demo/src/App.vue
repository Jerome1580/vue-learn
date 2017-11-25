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
import {mapState,mapMutations,mapGetters} from 'vuex'

export default {
  name: 'app',
  data(){
    return {
    }
  },
  computed:{
    ...mapState([
      'count'  //  不进行计算，直接输出
    ]),
  /*  count(){
      return this.$store.getters.count
    }*/
    ...mapGetters([
      'count'
    ])
  },
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

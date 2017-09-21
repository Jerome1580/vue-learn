<template>
  <div id="app">
    <h3>welcome Vue</h3>
    <input type="button" value="增加" @click="increment">
    <input type="button" value="减少" @click="decrement">
    <input type="button" value="偶数才能点击" @click="clickOdd">
    <input type="button" value="点击异步的" @click="clickAsync">

      <div>
       现在的数字为:{{ count }},它现在是{{ getOdd  }}
       <!-- 因为store是全局导出，所以这里可以用全局变量形式拿到数据 $store.state.count  -->
       <!-- 但一般不这么用，有点违背了vuex 的感觉，所以用mapGetters -->
      </div>
  </div>
  
</template>

<script>
import { mapGetters , mapActions } from 'vuex'

export default {
  computed:mapGetters([
      'count' ,  //  可以理解为这是count函数，是导出数据store中的mapGetters中的
      'getOdd'
    ]),
  methods:mapActions([
      'increment',
      'decrement',
      'clickOdd',
      'clickAsync'

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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <div>
       <button @click="houtui">后退</button>
       <button @click="qianjin">前进</button>
       <button @click="query">传参</button>
       <div>{{ $route.query.a}}</div>
       <router-link to="home">主页</router-link>
       <router-link to="news">新闻页</router-link>
       <router-link to="transition">过渡</router-link>
    </div>
    <div>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  watch:{
    $route(to,from){
      console.log(to);
      console.log(from);
    }
  },
  methods:{
    houtui(){
      this.$router.go(-1)
    },
    qianjin(){
       this.$router.go(1)
    },
    query(){
      this.$router.push({path:'/',query:{a:1,b:2}})
    }
  }
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

.fade-enter-active, .fade-leave-active{
    transition: opacity .5s;
}
.fade-enter,.fade-leave{
    opacity: 0;
}
</style>

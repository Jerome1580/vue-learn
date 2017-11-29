<template>
  <div id="app">
    <NavView></NavView>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
    <FooterView></FooterView>
  </div>
</template>

<script>

import NavView from '@/components/Nav.vue'
import FooterView from '@/components/Footer.vue'

export default {
  name: 'app',
  components:{
    NavView,
    FooterView
  }
}
</script>

<style>
@import './assets/css/index.css';


</style>

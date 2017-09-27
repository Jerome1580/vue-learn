<template>
  <div id="app">
    <el-button type="primary">主要按钮</el-button>
    <el-button type="danger">主要按钮</el-button>
    <el-button type="info" icon="close">主要按钮</el-button>
    <el-button type="success" icon="edit">主要按钮</el-button>
    <el-button type="warning" icon="search">主要按钮</el-button>

    <span class="el-icon-delete"></span>
    <span class="el-icon-loading"></span>
    
    <el-row>
      <el-col :span="12">
        <div class="my-grid"></div>
      </el-col>
      <el-col :span="12">
        <div class="my-grid"></div>
      </el-col>
    </el-row>
  
    <el-row>
      <el-col :span="8">
        <div class="my-grid">
          <Date></Date>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="my-grid"></div>
      </el-col>
       <el-col :span="8">
        <div class="my-grid"></div>
      </el-col>
    </el-row>

     <!-- button -->
     <myButton @click.native="get"></myButton>

     <div>
       {{myMessage}}
     </div>

  </div>
</template>

<script>
import Date from './components/Date.vue'

import myButton from './components/Button.vue'
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      myMessage:''
    }
  },
  components:{
    Date,
    myButton
  },
  mounted(){
    this.get();
  },
  methods:{
    get(){
      axios.get('https://api.github.com/users/itstrive')
      .then(function(res){
        this.myMessage=res.data;
      }.bind(this))
      .catch(function(err){
          console.log(err);
      })
    }
  }
}
</script>

<style scoped lang="less">
@color:red;
/* .h50(){
  height:50px;
}
 */

.height(@h){
  height:@h;
}

 .my-grid{
  .height(30px);
  border: 1px solid @color;
 }
</style>

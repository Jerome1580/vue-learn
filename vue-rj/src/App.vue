<template>
  <div id="app">
    <div class="nav">
      <ul>
          <li class="active"><a href="javascript:;">首页</a></li>
          <li><a href="javascript:;">关注</a></li>
          <li><a href="javascript:;">栏目</a></li>
        </ul>
    </div>
    <div class="content">
      <div class="banner">
            <ul class="clearfix">
                <li><img src="./assets/images/img_1.jpg" alt=""/>
                  <div class="text-box">
                      <h2>还可以降低首付款健身房11111</h2>
                        <p>刘德华11 / 文</p>
                    </div>
                </li>
                <li><img src="./assets/images/img_2.jpg" alt=""/>
                  <div class="text-box">
                      <h2>还可以降低首付款健身房2222</h2>
                        <p>刘德华22 / 文</p>
                    </div>
                </li>
                <li><img src="./assets/images/img_3.jpg" alt=""/>
                  <div class="text-box">
                      <h2>还可以降低首付款健身房333</h2>
                        <p>刘德华33 / 文</p>
                    </div>
                </li>
            </ul>
            <ol>
                <li class="active"></li>
                <li></li>
                <li></li>
            </ol>
        </div>
        <div class="newsList">
          <ul>
                <li>
                  <a href="conText.html">
                        <h2>还可以降低首付款健身房还可以降低首付款健身房还可以降低首付款健身房333</h2>
                        <p>还可以降低首付款健还可以降低首付款健身房还可以降低首付款健身房身房还可以降低首付款健还可以降低首付款健身房身房</p>
                    </a>
                </li>
                <li>
                  <a href="conText.html">
                        <h2>还可以降低首付款健身房还可以降低首付款健身房还可以降低首付款健身房333</h2>
                        <p>还可以降低首付款健还可以降低首付款健身房还可以降低首付款健身房身房还可以降低首付款健还可以降低首付款健身房身房</p>
                    </a>
                </li>
                <li>
                  <a href="conText.html">
                        <h2>还可以降低首付款健身房还可以降低首付款健身房还可以降低首付款健身房333</h2>
                        <p>还可以降低首付款健还可以降低首付款健身房还可以降低首付款健身房身房还可以降低首付款健还可以降低首付款健身房身房</p>
                    </a>
                </li>
                <li>
                  <a href="conText.html">
                        <h2>还可以降低首付款健身房还可以降低首付款健身房还可以降低首付款健身房333</h2>
                        <p>还可以降低首付款健还可以降低首付款健身房还可以降低首付款健身房身房还可以降低首付款健还可以降低首付款健身房身房</p>
                    </a>
                </li>
                <li>
                  <a href="conText.html">
                        <h2>还可以降低首付款健身房还可以降低首付款健身房还可以降低首付款健身房333</h2>
                        <p>还可以降低首付款健还可以降低首付款健身房还可以降低首付款健身房身房还可以降低首付款健还可以降低首付款健身房身房</p>
                    </a>
                </li>
                <li>
                  <a href="conText.html">
                        <h2>还可以降低首付款健身房还可以降低首付款健身房还可以降低首付款健身房333</h2>
                        <p>还可以降低首付款健还可以降低首付款健身房还可以降低首付款健身房身房还可以降低首付款健还可以降低首付款健身房身房</p>
                    </a>
                </li>
                <li>
                  <a href="conText.html">
                        <h2>还可以降低首付款健身房还可以降低首付款健身房还可以降低首付款健身房333</h2>
                        <p>还可以降低首付款健还可以降低首付款健身房还可以降低首付款健身房身房还可以降低首付款健还可以降低首付款健身房身房</p>
                    </a>
                </li>
                <li>
                  <a href="conText.html">
                        <h2>还可以降低首付款健身房还可以降低首付款健身房还可以降低首付款健身房333</h2>
                        <p>还可以降低首付款健还可以降低首付款健身房还可以降低首付款健身房身房还可以降低首付款健还可以降低首付款健身房身房</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="foot-btn">
      <ul>
          <li class="home"><a href="index.html"></a></li>
            <li class="write"><a href="javascript:;"></a></li>
            <li class="my"><a href="mydoc.html"></a></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted(){
      this.slider()
  },
  methods:{
    slider(){
            $(function (){
            var mySwipe=Swipe($('.banner')[0],{
              auto:2000,
              continuous:true,
              stopPropation:true,
              callback:function (index,element){
                $('.banner ol li').removeClass('active');
                $('.banner ol li').eq(index).addClass('active');
              }
            });
          });
    }
  }
}
</script>

<style>
@import './assets/css/index.css';


</style>

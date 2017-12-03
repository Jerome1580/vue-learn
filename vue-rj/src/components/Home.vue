<template>
    <div id="home">
        <div class="content">
           <BannerView></BannerView>
            <div class="newsList">
              <ul>
                    <li v-for="(content,index) in arrList">
                     <router-link :to="{path:'/article',query:{id:index}}">
                          <h2>{{ index + 1 }}.{{ content.title }}</h2>
                            <p>{{ content.detail }}</p>
                     </router-link>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import BannerView from '@/components/Banner.vue'

    export default {
        data(){
            return {
                arrList:[]
            }
        },
        components:{
            BannerView
        },
        mounted(){
            this.fetchData()
        },
        methods:{
             fetchData(){
                var _this = this;
                this.$http.get('src/mock/index.data').then(function(req){
                    _this.arrList = req.data
                }).catch(function(err){
                    console.log('Home',err)
                })
            }
        }
    }
</script>
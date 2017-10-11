<template>
	<div id="content">
		<div class="newsList mt30" >
	    	<ul>
	            <li v-for="(item,index) in arrList">
	                <router-link :to="'/article/'+item.id">
	                	<h2>{{index+1}} . {{item.title}}</h2>
	                    <p>{{item.detail}}</p>
	                </router-link>
	            </li>
	        </ul>
	    </div>
	</div>
</template>
<script>
import BannerView from './Banner.vue';

export default {
		data(){
			return{
				arrList:[]
			}
		},
		components:{
			BannerView
		},
		mounted(){
			//获取数据
			this.fetchData();
		},
		methods:{
			fetchData(){
				var _this = this;
				this.$http.get('src/data/follow.data').then(function(res){
					_this.arrList = res.data;
				}).catch(function(err){
					console.log('Home',err)
				})
			}
		}
	}

</script>
<style scoped>
	.mt30{
		margin-top: 30px;
	}
</style>
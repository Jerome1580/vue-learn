<template>
	<div id="content">
		<div class="newsList mt30">
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

</script>
<style scoped>
	.mt30{
		margin-top: 30px;
	}
</style>
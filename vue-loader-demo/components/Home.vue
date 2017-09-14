<template>
	<h3>我是主页</h3>
	<ul>
		<li><a v-link="{path:'/home/login'}">登录</a></li>
		<li><a v-link="{path:'/home/reg'}">注册</a></li>
	</ul>
	<div class="box">
		<router-view></router-view>
	</div>
</template>
<!-- scope指用于局部的样式 -->
<style scope>
	.box{
		border:1px dashed #f1f1f1;
	}
</style>
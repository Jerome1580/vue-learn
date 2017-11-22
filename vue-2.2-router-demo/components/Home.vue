<template>
    <div>
	   <h2>这是主页</h2>
	</div>
</template>
<script>
    export default {
        // 路由的钩子也可以加在组件中
        beforeRouteEnter:(to,from,next)=>{
            console.log(to.path)
            console.log(from.path)
            next()
        },
        beforeRouteLeave:(to,from,next)=>{
            console.log(to.path)
            console.log(from.path)
            next()
        }

    }
</script>
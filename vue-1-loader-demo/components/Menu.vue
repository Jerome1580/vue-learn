<template>
	<ul>
		<li v-for="val in list">
			{{ val }}
		</li>
	</ul>
</template>
<script>
	export default {
		data(){
			return {
				list:['apple','banana','orang']
			}
		}
	}
</script>
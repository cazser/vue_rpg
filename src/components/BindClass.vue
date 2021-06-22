<template>
	<div
  		class="static"
  		:class="{ active: isActive, 'text-danger': hasError }"
	>
	context
	</div>
	
</template>
<script>
	import { defineComponent } from 'vue'
	export default defineComponent({
	setup() {

	
	},
	data(){
		return{
		 isActive: true,
    	 hasError: false
		}
	},
	methods:{
	}
	})
</script>

<style scoped>
	.active{
		border: 5px solid red;
	}
</style>
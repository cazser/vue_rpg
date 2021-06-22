<template>
	<div id="bind-attribute">
  		<span v-bind:title="message">
    		鼠标悬停几秒钟查看此处动态绑定的提示信息！
  		</span>
	</div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
    	return {
      	message: 'You loaded this page on ' + new Date().toLocaleString()
    	}
  	},
	setup() {
		
	},
})
</script>

<template>
	<div id="event-handling">
  		<p>{{ message }}</p>
  		<button v-on:click="reverseMessage">反转 Message</button>
	</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		
	},
	data() {
    	return {
      		message: 'Hello Vue.js!'
    	}
  	},
  	methods: {
    	reverseMessage() {
      		this.message = this.message
        		.split('')
        		.reverse()
        	.join('')
    	}
  	}
})
</script>

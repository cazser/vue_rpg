<template>
	<div id="two-way-binding">
  	<p>{{ message }}</p>
  	<input v-model="message" />
	</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		
	},
	data() {
    	return {
      		message: 'Hello Vue!'
    	}
  	}
})
</script>

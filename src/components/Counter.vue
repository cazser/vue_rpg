<template>
	<div id="counter">
		Counter: {{counter}}
	</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: "Counter",
	data(){
		return({
			counter: 0
		}
		)
	},
	mounted(){
		 setInterval(() => {
      		this.counter++
    	 }, 1000)
	},
	setup() {
		
	},
})
</script>

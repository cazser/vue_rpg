<template>
	<span v-if="seen">现在你看到我了</span>
	<button v-on:click="toggleVisible">toggle</button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {
		
	},
	data(){
		return{
			seen: true
		}
	},
	methods:{
		toggleVisible(){
			this.seen = !this.seen;
		}
	}
})
</script>

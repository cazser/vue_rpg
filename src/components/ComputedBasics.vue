<template>
	<div id="computed-basics">
  		<p>Has published books:</p>
  		<span>{{ publishedBooksMessage }}</span>
	</div>
	
</template>
<script>
	import { defineComponent } from 'vue'
	export default defineComponent({
	setup() {

	
	},
	data(){
		return{
      		author: {
        	name: 'John Doe',
        	books: [
          		'Vue 2 - Advanced Guide',
          		'Vue 3 - Basic Guide',
          		'Vue 4 - The Mystery'
        	]
      		}
    	}
	},
	computed: {
    	// 计算属性的 getter
    	publishedBooksMessage() {
      		// `this` 指向 vm 实例
      		return this.author.books.length > 0 ? 'Yes' : 'No'
    		}
  	},
	methods:{
	}
	})
</script>
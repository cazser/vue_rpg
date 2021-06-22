<template>
	<div id="list-randering">
		<ol>
			<li v-for="todo in todos">
				{{todo.text}}
			</li>
		</ol>
	</div>
	
</template>
<script>
	import { defineComponent } from 'vue'
	export default defineComponent({
	setup() {

	
	},
	data(){
	return{
		todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
	}
	},
	methods:{
	}
	})
</script>
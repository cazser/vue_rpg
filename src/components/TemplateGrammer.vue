<template>
	<span>Message: {{msg}} </span>
	<span v-once>	这个将不会改变:{{msg}} </span>
	<button v-on:click="doSomething">change</button>
	<p>Using mustaches: {{ rawHtml }}</p>
	<p>Using v-html directive: <span v-html="rawHtml"></span></p>
	<a v-bind:href="this.url">知乎</a>
</template>
<script>
	import { defineComponent } from 'vue'
	export default defineComponent({
	setup() {

	
	},
	data(){
	return{
		msg: "message",
		rawHtml:"<span style='color: red'>This should be red.</span>",
		url:"https://www.zhihu.com/",
		attrbute:"href"
		}
	},
	methods:{
		doSomething(){
			this.msg+= "??";
		}
}
	})
</script>
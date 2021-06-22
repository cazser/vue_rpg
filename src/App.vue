<template>
  <h1>Hi, I am App.vue </h1>
  <p>test watch</p>
  <Hi/>
  <counter />
</template>

<script>
import Hi from './components/Hi.vue'
import Counter  from './components/Counter.vue'
export default {
  name: 'App',
  components: {
    Hi,
	Counter
  }
}
</script>

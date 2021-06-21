<template>
  <h1>Hi, I am App.vue </h1>
  <Hi/>
</template>

<script>
import Hi from './components/Hi.vue'

export default {
  name: 'App',
  components: {
    Hi
  }
}
</script>

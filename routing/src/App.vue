<template>
<div class="container">
  <h1 class="text-center main">Routing</h1>
  <hr>
  <app-header></app-header>
  <router-view></router-view>
</div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {
    appHeader: Header
  },
  data () {
    return {
    }
  }}
</script>

<style lang="sass">
</style>

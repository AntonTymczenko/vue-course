<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Directives Exercise</h1>
      <p v-oncustom:click="doo">CLKIV ME</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  directives: {
    'oncustom': {
      bind (el, binding, vnode) {
        el.addEventListener(binding.arg, binding.value)
      }
    }
  },
  methods: {
    doo () {
      alert('You\'ve clicked')
    }
  }
}
</script>

<style>
</style>

<template lang="html">
<div>
  <h3>new Quote</h3>
  <button @click="counter++">increase</button>
  <p>{{ counter }}</p>
</div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0
    }
  }
}
</script>

<style lang="css" scoped>
</style>

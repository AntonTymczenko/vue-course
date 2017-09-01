<template lang="html">
<div>
  <p>Server status: {{ status }} <button @click="changeStatus">change</button></p>
</div>
</template>

<script>
export default {
  data () {
    return {
      status: 'Critical'
    }
  },
  methods: {
    changeStatus () {
      this.status = 'Normal'
    }
  }
}
</script>

<style lang="css">
</style>

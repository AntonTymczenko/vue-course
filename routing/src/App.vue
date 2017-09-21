<template>
<div class="container">
  <h1 class="text-center main">Vue-resource</h1>
  <hr>
  <div class="row text-center">
    <div class="col-xs-6 mx-auto">

    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  },
  created (){
    this.resource = this.$resource('', {}, {
      save: {method: 'POST', url: 'user'},
      get: {url: 'users'}
    })
  }
}
</script>

<style lang="sass">
.form-group label
  font-weight: bold
  float: left

</style>

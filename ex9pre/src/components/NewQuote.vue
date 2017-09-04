<template lang="html">
<div class="row justify-content-center">
  <div class="col-sm-8 col-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
    <label>Quote</label>
    <textarea v-model="quote" rows="3" cols="80" class="form-control"></textarea>
  </div>
  <div class="w-100"></div>
  <div class="col-sm-4 col-sm-offset-5 col-lg-2 col-lg-offset 5 form-group">
    <button @click.prevent="createNew" type="button" name="button" class="btn btn-block">Add quote</button>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      quote: ''
    }
  },
  methods: {
    createNew () {
      this.$emit('quoteAdded', this.quote)
      this.quote = ''
    }
  }
}
</script>

<style lang="css">
</style>

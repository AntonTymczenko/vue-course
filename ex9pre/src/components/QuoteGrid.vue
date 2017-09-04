<template lang="html">
<div class="row">
  <quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">
    <p>{{ quote }}</p>
  </quote>
</div>
</template>

<script>
import Quote from './Quote.vue'

export default {
  props: ['quotes'],
  components: {
    Quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit('quoteDeleted', index )
    }
  }
}
</script>

<style lang="css">
</style>

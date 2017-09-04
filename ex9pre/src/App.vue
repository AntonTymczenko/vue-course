<template>
  <div class="container">
    <progress-bar :quotesCount="quotes.length" :maxQuotes="maxQuotes"></progress-bar>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          <p>Info: {{ showInfoMsg }}</p>
        </div>
      </div>
    </div>
    <new-quote @quoteAdded="newQuote"></new-quote>
    <quote-grid
      :quotes="quotes"
      @quoteDeleted="deleteQuote">
    </quote-grid>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'
import ProgressBar from './components/ProgressBar.vue'

export default {
  data () {
    return {
      maxQuotes: 10,
      quotes: ['Something to start with'],
      infoMsg: {
        normal: 'click on a Quote to delete it',
        full: 'please delete existing quotes first'
      }
    }
  },
  computed: {
    showInfoMsg () {
      if (this.quotes.length >= 10) {
        return this.infoMsg.full
      } else {
        return this.infoMsg.normal
      }
    }
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length < 10) {
        this.quotes.push(quote)
      }
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1)
    }
  },
  components: {
    QuoteGrid,
    NewQuote,
    ProgressBar
  }
}
</script>

<style>
</style>

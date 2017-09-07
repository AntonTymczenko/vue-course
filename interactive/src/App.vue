<template>
<div class="container">
  <h1 class="text-center main">The Super Quiz</h1>
  <hr>
  <div class="row text-center">
    <div class="col-xs-6 mx-auto">
      <div v-if="started" class="card">
        <div class="card-header">
          What's {{ a }} {{ operator }} {{ b }}?
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-sm-6" v-for="variant in variants">
              <button
                @click="checkVariant"
                class="btn btn-block btn-primary variant">
                {{ variant }}
              </button>
            </div>
          </div>
        </div>
        <div
          v-if="msg"
          class="alert"
          :class="{
            'alert-danger': msg == 'Wrong!'? true: false,
            'alert-success': msg == 'Right!'? true: false
        }">{{ msg }}</div>
        <div class="text-center" v-if="guessed">
          <button @click="startGame" class="btn btn-primary">
            Play again?
          </button>
        </div>
      </div>
      <button v-else @click="startGame" class="btn btn-primary">Start a game</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: '',
      guessed: false,
      a: 0,
      b: 0,
      operator: '+',
      started: false
    }
  },
  computed: {
    r () {
      let o = this.operator == '-'? -1 : 1
      return this.a + o * this.b
    },
    variants () {
      let vars = [this.r]
      for (let i = 0; i <= 2; i++) {
        vars.splice(Math.round(Math.random()*vars.length), 0, this.rand(this.r))
      }
      return vars
    }
  },
  methods: {
    rand (value) {
      let dif = 10
      while (dif == 10 ) {
        dif = Math.round(Math.random()*20)
      }
      return value + dif - 10
    },
    checkVariant(event){
      if (this.guessed) { return;}
      const btnClicked = event.target
      const answer = btnClicked.firstChild.nodeValue.trim()
      if (answer == this.r) {
        btnClicked.classList.remove('btn-primary')
        btnClicked.classList.add('btn-success')
        this.msg = 'Right!'
        this.guessed = true
      } else {
        btnClicked.classList.remove('btn-primary')
        btnClicked.classList.add('btn-danger')
        this.msg = 'Wrong!'
      }
    },
    startGame () {
      this.a = Math.floor(Math.random()*99)
      this.b = Math.floor(Math.random()*99)
      this.operator =  Math.round(Math.random()) == 0 ? '-' : '+'
      const variants = document.querySelectorAll('.variant')
      variants.forEach( variant => {
        variant.classList.remove('btn-danger')
        variant.classList.remove('btn-success')
        variant.classList.add('btn-primary')
      })
      this.guessed = false
      this.msg= ''
      this.started = true
    }
  }
}
</script>

<style>
.main { padding: 30px;}
.variant { margin: 10px; padding: 10px 20px; }
</style>

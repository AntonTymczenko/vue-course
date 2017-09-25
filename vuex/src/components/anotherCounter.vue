<template>
<div>
  <button class="btn btn-primary" @click="asyncIncrement({by: 10, time: 500})">Increment</button>
  <button class="btn btn-primary" @click="asyncDecrement({by: 10, time: 500})">Decrement</button>
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions([
      'asyncIncrement',
      'asyncDecrement'
    ])
  }
}
</script>

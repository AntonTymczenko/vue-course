<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Status: {{ selectedServer.status }}</p>
        <button
          v-if="selectedServer.id"
          @click="selectedServer.status = 'Normal'"
          class="btn" type="button" name="button">Change</button>
    </div>

</template>

<script>
export default {
  props: ['selectedServer'],
  data () {
    return {}
  },
  methods: {

  }
}
</script>

<style>

</style>

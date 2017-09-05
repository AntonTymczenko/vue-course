<template>
<div class="col-xs-12 col-sm-6">
  <ul class="list-group">
    <li
      @click="selectServer(server)"
      class="list-group-item"
      v-for="server in servers">
      Server #{{ server.id }}
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      servers: [
        {id: '1', status: 'Normal'},
        {id: '2', status: 'Critical'},
        {id: '3', status: 'Unknown'},
        {id: '4', status: 'Normal'}
      ]
    }
  },
  methods: {
    selectServer (server) {
      this.$emit('selectServer', server)
    }
  }
}
</script>

<style>

</style>

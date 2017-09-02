<template>
<div class="container">
  <header>
      <h1>Server Status</h1>
  </header>
  <hr>
  <ul class="server-list">
    <li v-for="index in 5">
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <p>Server #{{ index }}</p>
        </div>
        <div class="col-xs-12 col-sm-6">
          <server-status></server-status>
        </div>
      </div>
    </li>
  </ul>
  <hr>
  <footer>
    <p>All Servers are managed here</p>
  </footer>
</div>
</template>

<script>
import ServerStatus from './ServerStatus.vue'

export default {
  components: {
    'server-status': ServerStatus
  }

}
</script>

<style>
.server-list {
  list-style: none;
}
.server-list li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.server-list li:last-child {
  border: none;
}
</style>

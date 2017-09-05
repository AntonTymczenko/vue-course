<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <servers @selectServer="selectServer"></servers>
      <app-server-details :selectedServer="selectedServer"></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import Servers from './components/Server/Servers.vue';
import ServerDetails from './components/Server/ServerDetails.vue';

export default {
  data () {
    return {
      selectedServer: {
        status: 'Select a server'
      }
    }
  },
  components: {
    appHeader: Header,
    Servers,
    'app-server-details': ServerDetails,
    'app-footer': Footer
  },
  methods: {
    selectServer (server) {
      this.selectedServer = server
    }
  }
}
</script>

<style>

</style>

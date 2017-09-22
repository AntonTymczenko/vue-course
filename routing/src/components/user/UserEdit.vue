<template>
<div>
  <h3>Edit the User</h3>
  <hr>
  <p>Locale: {{ $route.query.locale }}</p>
  <p>Analytics: {{ $route.query.q }}</p>
  <button @click="confirmed = true" class="btn btn-primary">Confirm</button>
  <div style="height: 800px;"> </div>
  <p id="data">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
</template>

<script>
export default {
  data () {
    return {
      confirmed: false
    }
  },
  beforeRouteLeave (to, from, next) {
    if (this.confirmed) {
      next()
    } else {
      if (confirm('Are you sure?')) {
        next()
      } else {
        next(false)
      }
    }
  }
}
</script>

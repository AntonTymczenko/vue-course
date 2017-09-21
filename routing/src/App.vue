<template>
<div class="container">
  <h1 class="text-center main">Vue-resource</h1>
  <hr>
  <div class="row text-center">
    <div class="col-xs-6 mx-auto">
      <div class="form-group">
        <label>Username</label>
        <input type="text" class="form-control" v-model="user.username">
      </div>
      <div class="form-group">
        <label>Mail</label>
        <input type="email" class="form-control" v-model="user.email">
      </div>
      <button @click="submit" class="btn btn-primary">Submit</button>
      <hr>
      <button @click="fetch" class="btn btn-primary">Fetch</button>
      <ul class="list-group">
        <li class="list-group-item" v-for="u in users">{{ u.username }} – {{ u.email }}</li>
      </ul>

    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        email: ''
      },
      users: []
    }
  },
  methods: {
    submit() {
      this.resource.save({}, this.user)
        .then(resp => {
          console.log(' -------- saved ------------')
        })
        .catch(e => {
          if (JSON.parse(e.bodyText).message){
            console.log(JSON.parse(e.bodyText).message)
          } else {
            console.log(JSON.parse(e.bodyText).errmsg)
          }
        })
    },
    fetch () {
      this.$http.get('users')
        .then(response => {
          return response.json()
        })
        .then( data => {
          this.users = data
        })
    }
  },
  created (){
    this.resource = this.$resource('', {}, {
      save: {method: 'POST', url: 'user'},
      get: {url: 'users'}
    })
  }
}
</script>

<style lang="sass">
.form-group label
  font-weight: bold
  float: left

</style>

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
      }
    }
  },
  methods: {
    submit() {
      // console.log(this.user)
      this.$http.post('http://localhost:8081/user',
        this.user, { emulateJSON: true })
        .then(resp => {
          console.log(' -------- saved ------------')
          console.log(resp.bodyText)
        })
        .catch(e => {
          if (JSON.parse(e.bodyText).message){
            console.log(JSON.parse(e.bodyText).message)
          } else {
            console.log(JSON.parse(e.bodyText).errmsg)
          }
        })
    }
  }
}
</script>

<style lang="sass">
.form-group label
  font-weight: bold
  float: left

</style>

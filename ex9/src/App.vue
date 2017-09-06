<template>
<div class="container">
  <form v-if="!submitted">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <form @submit.prevent="submit" class="" action="index.html" method="post">
          <div class="form-group">
            <label for="name">
              First Name
              <input v-model="userData.firstName" class="form-control" type="text" name="firstName" value="">
            </label>
          </div>
          <div class="form-group">
            <label for="surname">
              Last Name
              <input v-model="userData.lastName" type="text" class="form-control" name="lastName" value="">
            </label>
          </div>
          <div class="form-group">
            <label for="email">
              Email
              <input v-model="userData.email" type="email" name="email" value="" class="form-control" >
            </label>
          </div>
          <div class="form-group">
            <label for="password">
              Password
              <input v-model="userData.password" class="form-control" type="password" name="password"  value="">
            </label>
          </div>
          <div class="form-group radio">
            <label for="">Store data?</label>
            <label for="storeData">
              <input
              v-model="userData.storeData"
              type="radio"
              id="storeData"
              value="Yes"> Yes
            </label>
            <label for="dontStoreData">
              <input
              v-model="userData.storeData"
              type="radio"
              id="dontStoreData"
              value="No"> No
            </label>
          </div>
          <button class="btn btn-default" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </form>
  <hr>
  <div v-if="submitted" class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4>Your Data</h4>
        </div>
        <div class="panel-body">
          <p>Full Name: {{ fullName }} </p>
          <p>Mail: {{ userData.email }}</p>
          <p>Password: {{ userData.password }}</p>
          <p>Store in Database?: {{ userData.storeData }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      submitted: false,
      userData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        storeData: 'Yes'
      }
    }
  },
  computed: {
    fullName () {
      return this.userData.firstName + ' ' + this.userData.lastName
    }
  },
  methods: {
    submit () {
      this.submitted = true
    }
  }
}
</script>

<style>
</style>

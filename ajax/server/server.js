// SERVER ------------------
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  {User} = require('./user'),
  _ = require('lodash')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// CORS middleware:
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// DATABASE: --------------------------------------------------------------
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
const dburl = process.env.DATABASEURL ||
  'mongodb://127.0.0.1:27017/vue-resource-test'
console.log('connecting to database: ' + dburl)
mongoose.connect(dburl, {useMongoClient: true})

// ROUTES: -------------------------------------------
// new
app.post('/user', (req, res) => {
  let body = _.pick(req.body, ['email', 'username']),
    user = new User(body)
  user.save()
    .then( u => {
      console.log('user saved')
      res.status(200).send(u)
    })
    .catch(e => {
      console.log('user not saved')
      res.status(400).send(e)
    })
})
app.get('/users', (req, res) => {
  User.find({}).exec()
    .then( users => {
      console.log('index sent')
      res.status(200).send(users)
    })
    .catch( e => {
      console.log('index not sent')
      res.status(404).send(e)
    })
})

// fire server: ---------------------------------------------------------
const port = process.env.PORT || 8081
const mode = process.env.NODE_ENV
app.listen(port, ()=>{
  console.log('Listening on port ' + port)
  console.log('Running in ' + mode + ' mode')
})

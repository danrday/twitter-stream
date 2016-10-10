'use strict'

const express = require('express')
const { Server } = require('http')
const socketio = require('socket.io')

const app = express()
const server = Server(app)
const io = socketio(server)

const PORT = process.env.PORT || 3000

var Twitter = require('twitter');

var twitterCreds = require('./private/twitterCreds');

var client = new Twitter(twitterCreds);

var stream = client.stream('statuses/filter', {track: 'javascript'});
stream.on('data', function(event) {
  io.emit('newTweet', event)
  console.log(event && event.text);
});

stream.on('error', function(error) {
  throw error;
});


//routes
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

//io

io.on('connect', socket => {
  console.log("socket connected:", socket.id)
})

server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))

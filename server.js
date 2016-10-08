'use strict'

var Twitter = require('twitter');

var twitterCreds = require('./private/twitterCreds');

var client = new Twitter(twitterCreds);

var stream = client.stream('statuses/filter', {track: 'javascript'});
stream.on('data', function(event) {
  console.log(event && event.text);
});

stream.on('error', function(error) {
  throw error;
});

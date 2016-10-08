'use strict'

var Twitter = require('twitter');

var twitterCreds = require('/private/twitterCreds');

var client = new Twitter(twitterCreds);

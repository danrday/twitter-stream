'use strict'

const socket = io();

//listener

socket.on('connect', () => {
  console.log(`User connected ${socket.id}`);
});

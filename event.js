const EventEmitter = require('node:events');

class EventEmitterA extends EventEmitter { }

const myAEvent = new EventEmitterA();


myAEvent.on('new_video', function(obj) {
    console.log("I got it!", obj.name)
    });

myAEvent.emit('new_video', {name: 'Welcome to my channel'});



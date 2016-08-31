var events = require('events');
var util = require('util');

var MyObject = function(){
    this.count = 0;
};

util.inherits(MyObject, events.EventEmitter);

MyObject.prototype.touch = function(){
    this.count++;
    this.emit('touch', this.count);
};

var myObj = new MyObject();

myObj.on('touch',function(count){
    console.log('Object was touched already. '+count);
});

myObj.touch();
myObj.touch();
myObj.touch();
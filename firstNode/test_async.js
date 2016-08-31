/*var async = require('async');

var arr = ['a','b','c'];

async.each(arr,function(item,next){
    console.log(item);
    next();
});
console.log('OK');*/
var a = 0;
var array = [1,2,3];
for(var i in array){
    a += array[i];
    console.log(array[i]);
}
console.log(a);
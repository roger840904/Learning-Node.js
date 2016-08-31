var object_module = require('./object_module');

console.log(object_module.name);

for(var i in object_module.support){
    console.log(object_module.support[i]);
}
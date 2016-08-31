//These two function are the same.
function add1(){
    return arguments[0]+arguments[1];
}

function add2(x,y){
    return x+y;
}

console.log(add1(3,4));
console.log(add2(3,4));
//scope is a area where you have only access it's own field.

let bonus=20;      //global scope,you can access everywhere.

function sum(x,y){
    let add=x+y; 
     if(add>10) {
         var mood="happy"
         console.log(mood);
     }      //it's scope,you can not access from outside if you use let or const .But (whesting) if you use type of var then you can access it and it's called whesting.
    return add;
}
const result=sum(10,30);
//console.log(add);      //you can not access this from outside because add is in scope field
console.log(result);
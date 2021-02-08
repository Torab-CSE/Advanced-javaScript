function stopWatch(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
 
//if I call a function or return the function from a function and it create the closed environment,then it called closer.

const clock1=stopWatch();
const clock2=stopWatch();

console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

console.log(clock2());
console.log(clock1());
console.log(clock2());
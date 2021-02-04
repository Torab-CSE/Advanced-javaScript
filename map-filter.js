/*const array=[2,5,7,8,9];   //here find the square value and push in array.
const output=[];
for (i=0;i<array.length;i++){
    const number=array[i];
    const result=number*number;
    output.push(result);
}
console.log(output);*/




//using MAP,we get the every element and add function for using the condition and finally will get our expected result of array.

numbers=[10,5,3,2,6];
// const result=numbers.map(function(element,index,array){    //In map,we can pass the three parameter .
//     return element,index,array;
// })

const result=numbers.map(function(element){
      return element*element
 })

// const result=numbers.map(element=>element*element);            // same work did in arrow function.
// console.log(result);

//arrow function
const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
const total=materials.map(material=>material.length); 
console.log(total);


//2.FILTER is working in element of array and it finds proper element through the condition and also give the result of array 

const container=[5,20,10,15];
const value=container.filter(element=>element>10);
console.log(value);

//3.find is similar to filter but it returns the first single element not array.

const   box=[10,30,50,40];
const bigger=box.find(x=>x>20);
console.log(bigger);


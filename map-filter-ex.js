const students=[
    {id:12,name:'omar sunny'},
    {id:22,name:'manna'},
    {id:42,name:'moyuri'},
    {id:52,name:'salman shah'}
]
//let studentName=[];
// for(let i=0;i<students.length;i++){
//     const student=students[i];
//     const sName=student.name;
//     studentName.push(sName);
// }

// const studentName=students.map(student=>student.name);
// const studentId=students.map(s=>s.id);

//const bigger=students.filter(s=>s.id > 40);
const biggerOne=students.find(s=>s.id>40);

// console.log(studentId);
// console.log(studentName);
//console.log(bigger);
console.log(biggerOne);
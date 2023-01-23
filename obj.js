const student = [{
    name:"Rahul",
    age: 25,
    marks: 50
},
{
    name:"Ajay",
    age: 23,
    marks: 70
},
{
    name:"Aman",
    age: 27,
    marks: 80
},
{
    name:"Rohit",
    age: 22,
    marks: 90
}]

for(i=0;i<student.length;i++){
    student[i].marks = student[i].marks-10
 console.log(student[i]);

}
;
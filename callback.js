console.log("this is run");

var students =[
    {
        name:"kaif",
        sub:"math"
    },
    {
        name:"sidra",
        sub:"eng"
    }
]


function enrollStudent(student ,callback){
    setTimeout(function(){
        students.push(student);
        callback();
    }, 3000);
    console.log("iam in enroll student")
}


function getStudent(student){
    setTimeout(function(){
    let str=" ";
    students.forEach(function(student) {
       str +=`<h1>${student.name}</h1>`
    } );
         document.getElementsByClassName("student").innerHTML = str;
         console.log("this is get student")
    }, 1000);
}
let std ={name:"taiba",sub:"urdu"};
enrollStudent(std,getStudent);

//getStudent();
// as further the two function run as callback();
//console.log(students)
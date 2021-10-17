function func19(){
    return new Promise(function(resolve,reject){
setTimeout(() => {
    const err=true;
    if(err){
     console.log("your promise is resolved");
     resolve();
    }else{
        console.log("your promise is NOT resolved");
        reject();
    }

}, 3000);
    })

}
func19().then(function() {
    console.log("thank you")
}).catch(function(){
 console.log("sorry")
})


// callback--promise
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
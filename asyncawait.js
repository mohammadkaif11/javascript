function fun1(){
    return "kaif";
}
let variabale=fun1();
console.log(variabale);

//async return promise 
//
async function fun2(){
    const response= await fetch("kaif.txt");
     const users=await response.text();
     return users;
}
let ar=fun2();


ar.then(data=>console.log(data));
console.log(ar)
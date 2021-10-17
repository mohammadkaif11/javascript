console.log("maps");
// maps  in javascript :we can use any type of for value

const mymapp= new Map();
const key1="str",key2={},key3= function(){};
mymapp.set(key1,"this is string");
mymapp.set(key2,"this is blank object");
mymapp.set(key3,"this is function");


console.log(mymapp)
// value of key1
let value1=mymapp.get(key1);
console.log(value1)

for(let [key ,value] of mymapp){
    console.log(key,value);
}

for(let [value] of mymapp.values()){
    console.log(value);
}
mymapp.forEach((value,key)=>{
    console.log(value,key);
});

console.log(mymapp.size);
//convert map form array
//  Array.from(mymapp)
//Array.from(mymapp.values())
// Array.from(mymapp.keys())
 
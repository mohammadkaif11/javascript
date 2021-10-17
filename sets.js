console.log("this is mohammad kaif");


const mySet =new Set();
mySet.add('mohammad kaif');
mySet.add('kaif');
mySet.add('kaif');
let mySet2=new Set([1,3,3,'kaif',{k:"a"}])

console.log(mySet)
console.log(mySet2)
console.log(mySet2.size)
console.log(mySet2.has(4))// it return ture or flase

console.log(mySet2)
console.log("before delete");
mySet2.delete(3);
console.log(mySet2)
console.log("after delete")


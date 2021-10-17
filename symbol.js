console.log("hii kaif");

//symbol-it is unique     

const sym=Symbol('my identifer');
console.log(sym)
// unique key
const key=Symbol('identifier for key1');
const key2=Symbol('identifier for key2');
myObj={};
myObj[key]="md";
myObj[key2]="kaif";
console.log(myObj);
console.log(myObj[key]);
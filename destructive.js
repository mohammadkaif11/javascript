console.log("this is kaif");
let a,b;
[a,b]=[34,55];
console.log(a,b);
// this is object destructing
[a,b,c,...d]=[1,23,33,345,544,556,4,45,6]
console.log(a,b,c,d)

//({a,b,c,d}={a:1,b:3,c:3,d:4})
//console.log(a,b,c,d);
//({a,...b}={a:1,b:3,c:3,d:4})
//console.log(a,b);

const fruits=['apple','banana']
[f1,f2]=fruits;
console.log(f2,f1);
const laptop={
    model:"mi",
    price:33333
}
const {model ,price}=laptop
console.log(model,price)
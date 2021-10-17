
 console.log("this is traversing");
// querySelector gives firts element child1
 let child=document.querySelector('.child');
     child=document.querySelector('.con')
console.log(child.childNodes);
console.log(child.children);
console.log(child.childNodes[1].nodeName);
console.log(child.childNodes[1].nodeType);



// let play with con
let con=document.querySelector('.con');
console.log(con.children[1].children[0].children);
console.log(con.firstChild);
console.log(con.lastChild);
console.log(con.firstElementChild);
console.log(con.childElementCount);
console.log(con.children);
console.log(con.firstElementChild.nextElementSibling);
console.log(con.children);

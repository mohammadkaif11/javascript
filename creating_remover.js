console.log("hii");
let ele=document.createElement('li');
let text=document.createTextNode("this is text node");
ele.appendChild(text);

ele.className='li-class';
ele.id='li-id';
console.log(ele);

 let ul=document.getElementsByClassName('ul');
 ul.appendChild(ele);
 console.log(ul)
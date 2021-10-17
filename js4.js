//string
 var mystring="kaif my";
 console.log(mystring);
 console.log(mystring.charAt(3));
 var str=mystring.concat("this is")
 console.log(str);
 console.log(mystring.indexOf("a"));
 console.log(mystring.lastIndexOf("m"));
 var text="mohammad kaif";
 var sttr=text.slice(0,4);
 console.log(sttr);
 // substring 
 // tolowwercase
 // touppercase
 

 //template littral
 let sim='kaif is  boy';
let tet=`welcome ${sim}`;
console.log(tet);

 let sn="sidra";
 let tn="taiba";

  let html =` <h1>${sn} and ${tn}</h1>`;
  document.body.innerHTML= html;
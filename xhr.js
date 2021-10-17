/*
AJAX use build-in XMLHTTPREQUEST(XHR)OBJECT TO SEND OR RECIVE INFORMATION OVER INTERNET
asynchornicejavascript
*/
function postreq(){
    console.log("post request");
    //create xhr object
    const xhr=new XMLHttpRequest();
    //open the xhr object
    //xhr.open('post and get' ,'url',' true' )
      xhr.open('post','kaif.txt',true)
      xhr.setRequestHeader('content-type','application.json');
    
      //on porgress
      xhr.onprogress=function(){
          console.log("on progress");
      }
      // on readystate
      xhr.onload=function(){
          if(this.status ===200){
              console.log(this.responseText);
          }else{
              console.log('error');
          }

      }
      parmas={name:"kaif",age:33}
      xhr.send(parmas);
}

function getreq(){
    console.log("get request");
    //create xhr object
    const xhr=new XMLHttpRequest();
    //open the xhr object
    //xhr.open('post and get' ,'url',' true' )
      xhr.open('get','kaif.txt',true)
    
    
      xhr.onload=function(){
          if(this.status ===200){

            let obj=JSON.parse(this.responseText);
    
              console.log(obj);
              let list=document.getElementsById('list');
              str="";
              for(key in obj){
                  str+=`<li> </li>`;

              }
              list.innerHTML=str;

          }else{
              console.log('error');
          }

      }
      xhr.send();
}

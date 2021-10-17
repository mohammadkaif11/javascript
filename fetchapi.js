// asynchornice
function getData(){
    const url="kaif.txt";
    fetch(url).then((Response)=>{
       return Response.text();
       //return Response.JSON()
    }).then((data)=>{
    console.log(data);
    })
}
getData();
function postData(){
    data="kaif"
    paramas={
        method="post",
        Headers:{
            'contect-type':"application"
        },
        body:JSON.stringify(data)


    }
    const url="kaif.txt";
    fetch(url,paramas).then(Response=>
 Response.JSON()).then( data=>
    console.log(data))
 } 

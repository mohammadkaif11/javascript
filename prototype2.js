
const proto={
    solgan: function(){
        return "this is solgan";
    },
     changename:function(name){
      return this.name;  
    }
}

const obj=Object.create(proto);
obj.name="kaif";
obj.role="programmar";
obj.changename="md kaif";

//console.log(obj)
function Employe(name,roll,salary){
    this.name=name,
    this.salary=salary,
    this.role=roll

}
Employe.prototype.solgan=function(){
 return "this is best";
}

function programmar(name,roll,salary,lang){
//inherit the employe
    Employe.call(this,name,roll,salary);
    this.lang=lang;
}
// inherit the protype
programmar.prototype=Object.create(Employe.prototype);
// manually set constructor
programmar.prototype.constructor=programmar
let obj1=new Employe("kaif","student",300);
console.log(obj1);
let obj2=new programmar("kaif ", "pro",50000,"javascript");
console.log(obj2);
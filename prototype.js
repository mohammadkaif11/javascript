// when  we create  obj by constructor then by default obj prototype is created
function obj(name){
    this.name=name;
}
car= new obj("audi");
console.log(car);

/*

 //  create prototype of constructor
 obj.prototype.prototypename =fucntion(){
 }
*/
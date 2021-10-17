// object litrals
let car ={
    name:"audi",
    topspeed:440,
    run:function (){
        console.log("car is running")
    }
}
console.log(car)

//  constructor of creating car object
function GenralCar(name,speed) {
    this.name=name,
    this.speed=speed,
    this.run=function () {
         console.log(`${name} is running `);
    }
    this.analyze=function(){
        console.log(`car name ${name} and speed${speed}`)
    }
}
car1=new GenralCar("audi",300);
console.log(car1);
console.log(car1.analyze());
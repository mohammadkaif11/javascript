class student{
    constructor(name,age,clss){
        this.name=name,
        this.age=age,
        this.clss=clss
    }
    call(){
        console.log(`then role is${this.name} `)
    }
    static name(){
    }
}

class progrmmar extends student{
    constructor(name,age,clss,lan){
        super(name,age,clss);
        this.lan=lan;
    }
}
class Student {
    constructor(name) {
        this.name=name;
    }
    hello(){
        console.log('hello'+this.name+'!')
    }
}
var xiaoming=new Student('小明');
xiaoming.hello();
class PrimaryStudent extends Student {
    constructor (name,grade){
        super(name);
        this.grade=grade;
    }
    myGrade(){
        alert('I am at grade' +this.grade)
    }
}
var xiaoxiao=new PrimaryStudent('xiaoxiao',13)
console.log(xiaoxiao)
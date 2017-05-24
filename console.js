function Student(name,age){
    this.name=name;
    this.age=age;
}
Student.prototype.run=function (){
    console.log('running')
}
var xiaoming=new Student('小明',13)
console.log(xiaoming.__proto__)

function student(name,age){
    this.name=name;
    this.age=age;
}
student.prototype.run=function (){
    console.log('running')
}
var xiaoming=new student('小明',13)
console.log(xiaoming.__proto__)

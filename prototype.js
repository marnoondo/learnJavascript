function student(name,age){
    this.name=name;
    this.age=age;
}
student.prototype.run=function(){
    console.log('running')
}
var xiaoming=new student('小明',20);
console.log(xiaoming.__proto__==student.prototype)
var arr=[1,2,3];
//原型链是arr--Array.prototype--Obj.prototype--null
function foo(){
    return 0;
}
//原型链是foo--Function.prototype--Obj.protype--null
function Student(name){
    this.name=name;
    this.hello=function(){
        alert('hello'+this.name+'!')
    }
}
var xiaoming=new Student('小明');
xiaoming.name;
console.log(xiaoming.__proto__)
console.log(Student.prototype)
console.log(xiaoming.__proto__.constructor===Student)
console.log(xiaoming.__proto__===Student.prototype)
//小明的原型链xiaoming--Student.prototype--Object.prototye--null
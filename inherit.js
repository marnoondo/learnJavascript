function Student(props) {
    this.name=props.name ||'Unnamed'
}
Student.prototype.hello=function (){
    alert('Hello,'+this.name+'!')
}
function PrimaryStudent(props){
    Student.call(this,props);
    this.grade=props.grade || 1;
}
function F() {

}
F.prototype=Student.prototype;
PrimaryStudent.prototype=new F();
PrimaryStudent.prototype.constructor=PrimaryStudent;
PrimaryStudent.prototype.constructor=function (){
    return this.grade;
}
var xiaoming=new PrimaryStudent({
    name:'小明',
    grade:2
})
console.log(xiaoming.name);
console.log(xiaoming.grade)
console.log(xiaoming.hello)
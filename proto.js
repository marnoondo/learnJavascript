var Student ={
    name:'Robot',
    height:1.2,
    run:function (){
        console.log(this.name +'is running')
    }
}
function createStudent(name){
    var s=Object.create(Student)
}
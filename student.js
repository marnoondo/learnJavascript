var Student={
    name:'Robot',
    height:1.2,
    run:function (){
        console.log(this.name +"is running")
    }
}
var xiaoming={
    name:'小明'
}
xiaoming._proto_=Student;
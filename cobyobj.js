var obj={xiaoming:'12',xiaohong:'13',xiaohua:'14'}
var obj2={};
for(var name in obj){
    var name2=name;
    var age=obj[name];
    obj2[name2]=age;
}
console.log(obj2)
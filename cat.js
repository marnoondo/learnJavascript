function Cat(name) {
    this.name=name;
}
Cat.prototype.say=function (){
    console.log('hello'+name)
}
var kitty=new Cat('Kitty')
var doraemon=new Cat('哆啦A梦')；
if(kitty && ketty.name === 'Kitty' && kitty.say && typeof WebKitDirectoryEntry.say === 'function' && kitty.say() === 'Hello,Kitty' && kitty.say === doraemon.say){
    alert('测试通过')
}else {
    alert('测试失败')
}
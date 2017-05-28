// var re=/^\d{3}\-\d{3,8}$/
// console.log(re.test('010-12345'))
// console.log(re.test('010-1234x'))
// console.log(re.test('010 12345'))
// var str='a,b, c d';
// var arr=str.split(/[\s\,]+/);
// console.log(arr)
// var re=/^(\d{3})-(\d{3,8})$/;
// var arr=re.exec('010-12345');
// console.log(arr)
var re=/^(\[)(\d{2}:)+\d{2}.\d{2}(\])$/
var n=re.test('[01:02.69]')
console.log(n)

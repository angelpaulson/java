// a=5
// console.log(a);
var Fname="tiy";
console.log(Fname.length);
console.log(typeof(Fname));

var data="hi, this is a txt message"
// console.log(data.length);
// console.log(data.indexOf('text'));
// console.log(data.replace("txt","text"));
// console.log(data);
// console.log(data.split(','));
console.log(data);
console.log(data.trim());
let fruits=["apple","mango","orange","graphes"];
console.log(Array.isArray(fruits));
//foreach
fruits.forEach(function(item){
    console.log(item)
});
let numb=[20,30,58,65];
numb.forEach(function(item,ind){
    numb[ind]=item<50
})
console.log(numb)



var obj1=JSON.parse('{"name":"tiya","age":10}');
console.log(obj1);
var obj2=JSON.stringify(obj1);
console.log(obj1);


function sum(a,b){
var s=a+b;
console.log(`the sum is ${s}`)
}
sum(10,20);


var add=(c,d)=>{
    console.log(`the sum is ${c+d}`);

}
add(10,1)

var sub=(e,f)=>{
    console.log(`the difference is ${e-f}`);

}
sub(30,10)



//spread operator
var a=[5,6,7,8,9,3];
var b=[1,2,3,4];
var c=[...a,...b];
console.log(c);
var d=[2,3,...b];
console.log(d);
 
//array destructuring
var[y,w,u]=[2,7,9];
console.log(y)

var[y,,u]=[2,7,9];
console.log(u)

var[y,,t,...i]=[2,7,9,7,9,2,1];
console.log(i)



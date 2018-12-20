var arr = [1,2,7,3,5,4,12,25,11,27];

//the following function return the second smallest number in the array
function find_nmin(arr){
var min = arr[0];
let min2 = arr[1];
for(var i = 0;arr.length;i++){
  if(min<arr[i]){
    min2 = min;
    min = arr[i];
  }else if(min2<arr[i]){
    min2 = arr[i];
  }
  return min2;
}
}
console.log(find_nmin(arr));



// arrow function
const myfunc = name => 'HI HHHHH +  ${name}';
console.log(myfunc('ssssss'));

//map
const myArr = ['apple','babanananana','guan',5];
let p1=myArr.map(function(item){
  return item;
});
console.log(p1);
p1 = myArr.map(item=>item);
console.log(p1);

const contacts ={
  fname:'hello',
  lname:'world',
  age:1990
}
let{fname:othername,lname,age}=contacts;
console.log(othername);

const dotfunc =(...anArr)=>{
  return anArr;
}
console.log(dotfunc(myArr));

// // console.log('welcome javascript');
// // // varaiable
// // var a=5;
// // // console.log(a);
// // // let c=10;
// // // console.log(c);
// // // {
// // //     // var a=23;
// // //     // console.log(a);
// // //     let c=6;
// // //     console.log(c)
// // // }
// // // console.log(c)
// // let firstName='anu'
// // console.log(typeof(firstName))
// // console.log(typeof(a))
// //  var b=true;
// // console.log(typeof(b))
// // // let unknown;
// // // console.log(typeof(unknown))
// // let unknown=null;
// // console.log(typeof(unknown))
// // let arr=[23,24,25,'anu']
// // arr.pop(1)
// // console.log(arr)

// // javascript object
// // let person={
// //     fName:'anu',
// //     age:22,
// //     gender:'male'
// // }
// // console.log(person.age)
// // // second type obj creation
// let car=new Object();
// car.model='polo'
// car.color='yellow'
// car.company="vv"
// console.log(car)
// // let arr_obj=[{fName:'anu',age:22},{fName:'samu',age:50}]
// // console.log(arr_obj[1].fName)
// // let a=3
// // a++
// // console.log(a)
//  let t=100;
// // let t1=t++
// // console.log(t1)
// // console.log(t)
// // let h=5
// // let h1=++h
// // console.log(h1)
// let s='90';
// // if (t==s) {
// //     console.log('if it is');
// // } else if(t>s) {
// //  console.log( 'greater') ;  
// // }
// // else{

// //     console.log('lessthan');
// // }
// // function

// // function add_s(s,t) {
// //     var result=s+t;
// //     // console.log('the result is '+result)
// //     return result;
// // }
//  var sum=add_s(22,30);
//  console.log('the result is '+sum)
// function sub_d(s,t) {
//     var result=s-t;
//     return result; 
// }
// var sub=sub_d(55,20)
// console.log('the sub is'+sub)

// // loops

// for (let i = 1; i <11; i++) {
//     console.log(i)
    
// }
// // for in
// for (const item in car) {
//   console.log(car[item])
// }
// // for off
// let arr=[22,55,'anu']
// for (const item of arr) {
//     console.log(item)
    
// }


// // while
// let g=2
// while ( g<5) 
//     {   
//      console.log(g+1)
//      g++;

//  }


// do {
//     console.log(g+1)
//     g++
// } while (g<10);
// function add(number) {
//     if (number <= 0) { 
//      return 0; 
//      } else { 
//      return number + add(number-1); 
//      }
//     }
//      var sum=add(3);
// console.log(sum)
// var x = 3;
// var y = 3;
// console.log(x + y)
// const a=20;
// a=a+1;
// a=a*2;
// console.log(a);
// var a = 42; 
// var b = 42; 
// console.log(a == b); 
// console.log(a === b);
// a = true; 
// console.log( typeof a);
// var a = 42;
// (function IIFE(){
// var a = 10; 
// console.log( a ); 
// }) ( ); 
// console.log( a );
function foo() { 
    var a = 1; 
    if (a >= 1) { 
    let b = 2; 
    while (b < 5) { 
    let c = b * 2; 
    b++; 
    console.log( a + c ); 
    } 
    } 
    } 
    foo();

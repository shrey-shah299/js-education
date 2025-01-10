"use strict"; // treat all JS code as newer version

// alert("hello") //we are using nodejs not browser

/*
number ->2 to power 53
bigint
string=>""
boolean =>true/false 
null =>standalone value //object
undefined //undefined
symbol =>unque

object
*/
let state= "hello"
let num=12
let car=null
console.log(typeof state);
console.table([typeof num,typeof  car,typeof undefined ]);
// primitive -7 types :string ,Number ,Boolean,Null ,undefined ,Symbol ,BigInt 

// reference type :Arrays ,Objects ,Functions (javascript is dynamically defined)
const id =Symbol('123' )
const anotherId =Symbol('123')

console.log(id ===anotherId); //not same

//object
 
let myObj={
    name :"shrey",
    age :22,
}

const myFunction =function(){
    console.log("Hello world");
}
//null ==>typeof value will give object.
//return tye of non-primitive datatypes is object functions 
console.log(typeof myObj);

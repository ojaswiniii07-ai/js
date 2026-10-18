"use strict" // treat all js code as newer version
// number= till 2 raise to the power 53
//bigint
//string
//boolean
//null=standalone value
//undefined
//symbol=used to find uniqueness

//object
console.log(typeof null);
//undefined
console.log(typeof undefined)
// primitive data types have their value stored in stack so their copy is sent to another is thier value is assigned to another variable
//arrays, objects, functions these are non primitive data types and their value is stored in heap so their reference is sent to stack memory)
const heros=[2,3,4]
let myobj={
    name:"ojaswini",
    batch:2025
}
let myfunction= function() {
    console.log("hello babe")
}
myfunction()
console.log(myobj.name)
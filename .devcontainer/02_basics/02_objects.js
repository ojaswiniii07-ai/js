//object literals
let mysym=Symbol("mysymbol")

const jsuser={
    name:'OJASWINI',
    location:"delhi",
    age:19,
    [mysym]:"my symbol value" //this is how we access symbol
}
console.log(jsuser['name'])
console.log(jsuser[mysym])
jsuser.age=20 //this is how we can change the value
//Object.freeze(jsuser) //by this we cant change the values

jsuser.greetings= function(){
    console.log("hellowww js user")
}
console.log(jsuser.greetings())
console.log(jsuser.greetings) // here the reference of a function will be printed only
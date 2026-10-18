let myarr=[1,2,3,4]
let myarr2=new Array(1,2,3,4)
console.log(myarr[0])

//array methods
//push
myarr.push(7)
console.log(myarr)

//pop
myarr.pop() //last value will be removed
console.log(myarr)

//unshift and shift
myarr2.unshift(9)// 9 will be added to the starting
console.log(myarr2)
myarr2.shift()
console.log(myarr2)// 9 will be removed to the starting

//includes
console.log(myarr2.includes(2))

//indexof
console.log(myarr2.indexOf(2))

//join=> will conver into string
console.log(myarr2.join())
console.log(myarr2.join(':')) // if we add something in parantheses then after every element of array that inbetween element will be added
//myarr3=["hey","ojas"]
//console.log(myarr2.join(myarr3))

//slice and splice
//slice=>it will not maipulate the originl array
//splice=>it will manipulate the original array
console.log(myarr)
const myslice=myarr.slice(1,3)//here 3 will not be included
console.log(myslice)
console.log(myarr)
const mysplice=myarr.splice(1,3)
console.log(myarr)

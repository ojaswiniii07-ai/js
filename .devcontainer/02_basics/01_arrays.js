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

//push and concat
console.log(myarr,myarr2)
//const mypush=myarr.push(myarr2)  // push will add changes to the original array and not return  new length array
//console.log(mypush)
const myconcat=myarr.concat(myarr2) //it join arrays
console.log(myconcat)  // concat will not add changes to the original array and return the new length new array

// if we want to concat more than 2 values
const myconcat2=[...myarr, ...myarr2]  //here we are using spread operator to concatenate more than 2 values
console.log(myconcat2) // it expands the array into indivisual elements and then then concatenate every element

// flat
myarr3=[1,2,[3,4,5,[6,7]]]
console.log(myarr3.flat(3)) //it will flatten the array upto the length given to it here=3, we can do it by giving the depth infinity too
 // isarray and from
 console.log(Array.isArray("hitesh")) //it will check whether the given element is array or not
 console.log(Array.from("hitesh")) //it will convert this string into array and return  new array // if will work only from strings
console.log(Array.isArray(myarr))

//of
console.log(Array.of(1,2,3,4)) //it will convert a new array from set of given elements


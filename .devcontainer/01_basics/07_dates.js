console.log(Date())
console.log(new Date())
let dates=new Date(2026,9,7)//year/month/date
console.log(dates.toString())
console.log(dates.toDateString())
console.log(dates.toLocaleString())
console.log(dates.toLocaleDateString())
console.log(typeof dates)
let newdate=new Date("10-17-2026")
console.log(newdate.toDateString())

let mytimestamp=Date.now()
console.log(mytimestamp)
console.log(dates.getTime())
console.log(mytimestamp-dates.getTime())
let newdate2=new Date()
console.log(newdate2.getFullYear())
let date3=newdate2.toLocaleString('en-IN',{
    era:"long",
    hour:"2-digit"
})
console.log(date3)
// Dates in js

let mydate = new Date(); 

// console.log(mydate)                  //2026-06-08T07:58:41.047Z
// console.log(mydate.toString());        //Mon Jun 08 2026 13:28:41 GMT+0530 (India Standard Time)
// console.log(mydate.toDateString());     //Mon Jun 08 2026
// console.log(mydate.toLocaleString());   //6/8/2026, 1:28:41 PM
// console.log(typeof mydate);             //object

let mycreateddate = new Date("2020-10-10"); 
// let mycreateddate = new Date(2007 , 0 ,25 , 3,25); 
console.log(mycreateddate.toDateString());  //Sat Oct 10 2020

let mytimeStamp = Date.now();
console.log(mytimeStamp); 
console.log(mycreateddate.getTime()); //1602288000000
console.log(Math.floor(Date.now()/1000));   //1780905521

let newDate = new Date();
console.log(newDate);                       //2026-06-08T07:58:41.116Z
console.log(newDate.getFullYear());         //2026
console.log(newDate.getMonth()+1);          //6
console.log(newDate.getDay());              //1
console.log(newDate.getDate());              //8


// console.log(`${newDate.getDay()} and the time`)

console.log(newDate.toLocaleString('default',{
    weekday:'long',
}))
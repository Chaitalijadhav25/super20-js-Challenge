// const tinderUser = new Object()  // Singleton Object

const tinderUser = {}          // non-Singleton Object

tinderUser.id = "123cj" 
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // {}

const regularUser = {
    email : "sam@g.com",
    fullname : {
        userfullname :{
            fname : "Chaitali",
            lname : "Jadhav"
        }
       
    }
}

console.log(regularUser.fullname.userfullname.fname)

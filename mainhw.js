//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        otherwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favFood(person){ 
    for(let i = 0; i<(Object.keys(person)).length; i++){
        console.log(person3[Object.keys(person)[i]])
    }
    return
}
favFood(person3)

         







//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
    

    this.printInfo = function () {
        console.log(`This person's name is ${this.name} and age is ${this.age}`)

    }
    this.happybirthday = function(){
        this.age = this.age + 1 
    }
}

const p1 = new Person('Kaile', 25)
console.log(p1.name)
p1.happybirthday() 
p1.happybirthday()
p1.happybirthday()
p1.printInfo()

const p2 = new Person('Shoha', 28)
console.log(p2.name)
p2.printInfo()



// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number" 
*/

function words (string) {

    return new Promise((resolve, reject)=>{
        if (string.length > 10){
            resolve("Big word")
        } else {
            reject("Small Number")
        }
    })
    
}

words("hi").then((result) => {
    console.log(result) 
})
.catch((result) => {
    console.log(result)
})


    


//
function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.bark = function() {
        console.log(`${this.name} just barked!`);
    }
}



///// decrease code duplication using apply, call
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numberOfWheels = 4;
}

function MotoCycle(make, model, year) {

    Car.call(this, make, model, year);
    this.numberOfWheels = 2; 
}

function MotoCycle(make, model, year) {

    Car.apply(this, [make, model, year]);
    this.numberOfWheels = 2; 
}

function MotoCycle() {

    Car.apply(this, arguments);
    this.numberOfWheels = 2; 
}


/// ex: 2

// 1 - Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber)

/* 2 - Add a function on the Person.prototype called fullName that returns the 
firstName and lastName property of an object created by the Person constructor concatenated together.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.fullName() // "Elie Schoppik"

*/

// 3 -  Add a property on the object created from the Person function called family which is an empty array. 
//This will involve you going back and adding an additional line of code to your Person constructor you previously 
//created in exercise 1.

/* 4 - Add a function on the Person.prototype called addToFamily which adds an object 
constructed from the Person constructor to the family array. To make sure that the object you are adding 
is an object construced from the Person constructor (HINT - take a look at the instanceof keyword). Make 
sure that your family array does not include duplicates! This method should return the length 
of the family array.


Examples: 
    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    var anotherPerson = new Person()
    person.addToFamily(anotherPerson); // 1
    person.addToFamily(anotherPerson); // 1
    person.family.length // 1
    
    person.addToFamily("test"); // 1
    person.addToFamily({}); // 1
    person.addToFamily([]); // 1
    person.addToFamily(false); // 1
    person.family.length // 1
*/

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.family = [];
}

Person.prototype.fullName = function() {
    return this.firstName + ' ' + this.lastName;
}

Person.prototype.addToFamily = function(person) {
    
    // if(typeof(person) !== "object" && person.length === 0) {
    //     return this.family.length;
    // }

    if(this.family.indexOf(person) === -1 && person instanceof Person) { // instance of check all of that typeof length etc
        this.family.push(person);
        return this.family.length;
    }
    return this.family.length;
}



//////////////////////////////REVERSE METHOD ////////////////////////

function reversed(str) {
    return str.split('').reverse().join('');
}

String.prototype.reverse = function() {
    var newStr = '';
    for (let i = this.length - 1; i >= 0; i--) {
        newStr += this[i];
    }
    return newStr;
}

Array.prototype.reverse1 = function() {
    var newArr = [];

    for (let i = this.length - 1 ; i >= 0; i--) {
        newArr.push(this[i]);
    }

    return newArr;
}

////////////////////////////// INHERITANCE!!!!!!!!!! ////////////////////////

// 1 - Create a constructor function for a Vehicle. Each vehicle should have a make, model and year property.

// 2 - Add a function to the Vehicle prototype called start which returns the string "VROOM!"

// 3 - Add a function to the Vehicle prototype called toString which returns the string 
//"The make, model, and year are" concatenated with the make, model and year property

/* Examples 
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

// 4 - Create a constructor function for a Car. Each object created from the Car function should 
//also have a make, model, and year and a property called numWheels which should be 4. The Car prototype should inherit 
//all of the methods from the Vehicle prototype


var Vehicle = function(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

Vehicle.prototype.start = function() {
    return "VROOM!";
}

Vehicle.prototype.toString = function() {
    return `The make, model, and year are ${this.make} ${this.model} and ${this.year}` ;
}

var Car = function(make, model, year) {
    Vehicle.apply(this, arguments);
    this.wheels = 4;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car; // set back constructor to car

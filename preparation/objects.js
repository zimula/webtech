//a simple object: a collection of related data. 
const objEeect = {
    item1: 1,
    itemDescription: "item2",
    itemDesire: `item3`,
    greeting(){
        console.log(`Hello, I am object ${this.item1}`);
    }
};

//object person
const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function(){
        console.log(`I'm ${this.age} years old.`);
    },
    //simpler way of writing a function
    introduceSelf(){
        console.log(`Hi!, i'm ${this.name[0]} ${this.name[1]}.`);
    }
};


//print all info on page(p)
let txt = "";
for(x in person){
    txt += person[x] + " => ";
};
document.getElementById("card1").innerHTML = txt;
//fetch element and display object. 

//objects within objects: 
const person2 = {
    name: {
        first: "Bob",
        last: "Smith"
    },
    introduceSelf(){
        console.log(this.name.first + this.name.last);
            //brackets can be used instead of ".".
    }
}
//example of bracket method
const person3 = {
    name: ["bob", "smith"],
    age: 32,
}

//***************FUNCTION TO GET DATA FROM OBJECT.
function find(dimension){
    //returns match from object. 
    console.log(dimension.age);
}
find(person3);3

        //find("name");
/*updating or changing objects
    person3.age = 45;
    person3["name"]["last"]="cratch"
    
    -adding members to objects
        person3["eyes"] = "hazel";
        person3.farewell = function() {
            console.log("bye");
        }*/

//****************FUNCTION TO UPDATE DATA IN OBJECT. 
function update3(x){
    person3.age = x;
}
//works but i need to target any attribute using the same function. 
update3(19);
console.log(person3.age);

//OBJECT CREATING FUNCTIONS.
    //create multiple objects using the same function. 

function createPerson(name){
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function(){
        console.log(`Hi! i'm ${this.name}`);
    }
    obj.fareWell = function(){
        console.log(`See you around!`);
    }
    return obj;//always returns the created object with all properties when called. 
}
//testing function on some names
const theMan = createPerson("Martin");
const noob = createPerson("NoobNoob");
theMan.introduceSelf();
noob.introduceSelf();
noob.fareWell();


//CONTSTRUCTORS:making object creation easier. Create empty objects. 
    //A simple constructor
function Person(name){
    this.name = name;
    this.introduceSelf = function(){
        console.log(`Hi! I'm ${this.name}.`);
    }
}
//testing constructor: requires "new" in order to work. 
const owner = new Person("Martin");
console.log(owner.name);
owner.introduceSelf();
const tester = new Person("Zack");
console.log(tester.name);
tester.introduceSelf();

//fun with objects. A simple car. 
const car = {
    make: "Chevy", 
    model: "Bel Air", 
    year: 1957, 
    color: "red", 
    passenger: 2, 
    convertible: false,
    mileage: 1021
}

console.log(car.make);
//use constructor to generate multiple cars
function randomCar(make, model, year, color, passenger, convertible, mileage){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passenger = passenger;
    this.convertible = convertible; 
    this.mileage = mileage;
    this.display = function(){
        console.log(this.make, this.model, this.year, this.color, this.passenger, this.convertible, this.mileage);
    }
    this.audit = function(){
        if(this.mileage > 100000){
            console.log(`Dump this ${this.model} as fast as possible!`);
        }else{
            console.log(`This ${this.model} is still worth holding.`);
        }
    }
}
//generate any car using the randomCar constructor.  
const taxi = new randomCar("Webville Motors", "Taxi", 1955, "yellow", 4, false, 200099);
taxi.display();
taxi.audit();

//OBJECT PROTOTYPES: an overview of classes, instances, inheritance and encapsulation. 
    //Class: contains properties and methods related to similar objects. 
    //Instance: an object created from a class. 
    //Constructor: a function used to create objects from a class.
    //Inheritance: classes referencing properties and methods from other classes.
            //a simple example of teachers and students are both people. 
            /*
            class person {
                name
                constructor person(name)
                introduceSelf()
            } 
            class teacher: extends person{
                teaches()
                constructor teacher(name, teaches)
                introduceSelf()
            }
            class student: extends person{
                year
                constructor student(name, year)
                introduceSelf()
            }
            - person is a super class, both teacher and student inherit from it. 
            - introduceSelf() is defined in all classes because people introduce themselves differently. 
            */
    //Polymorphism: method with same name but different implementation e.g introduceSelf.
    //Encapsulation: when an object's internal state can only be accessed by its own methods. 
            //in that way, changes can be made to the object, without worrying about the rest of the system.

            
//CLASSES

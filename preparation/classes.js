//CLASSES: simply templates for creating objects. 
    /*a simple class for people.
        - has a property name
        - a constructor for intanciation. Can be left out.
        - a greeting method*/ 
class Person{
    name;
    constructor(name){
        this.name = name;    
    }
    introduceSelf(){
        console.log(`Hello! I'm ${this.name}`);
    }
}
const rick = new Person("Rick");
const jack = new Person("Jack");
console.log(rick.name);
rick.introduceSelf();
console.log(jack.name);
jack.introduceSelf();

//SUB-CLASSES: add Student and Teacher classes.
    //keyword: EXTENDS:declare it as a subclass 
    //SUPER(): inherit properties from superclass. Use in constructor.
class teacher extends Person{
    teaches;
    constructor(name, teaches="somthing"){
        super(name);//inherited from Person class
        this.teaches = teaches;
    }
    introduceSelf(){
        console.log(`Hi! I'm ${this.name} and I teach ${this.teaches}`);
        //methods can be overriden (polymorphism).
    }
    grade(paper){
        const grade = Math.floor(Math.random()*(5-1) +1);
        console.log(grade);
    }
}
//objects from sub classes
const zee = new teacher("Zimula", "Biology");
zee.introduceSelf();
zee.grade();

//ENCAPSULATION: private or public attributes. Use # to make private. 
    //In this example, we will make "year" private. 
class Student extends Person{
    #year;
    constructor(name, year){
        super(name);
        this.#year = year;
    }
    introduceSelf(){
        console.log(`Hi! I'm ${this.name} and I'm in year ${this.#year}.`)
        //again, polymorphism as work. 
    }
    canStudyArchery(){
        return this.#year > 1;
    }
    #testPrivacy(){
        console.log(`Hello, this is private`);
    }
    transp(){
        return this.#testPrivacy();
    }
}
const james = new Student("James", 2);
console.log(james.name);
james.introduceSelf();
console.log(james.canStudyArchery());
console.log(james.year);//From the console, year can't be accessed from outside the class. 
//james.testPrivacy();//returns error unless transp is used. 

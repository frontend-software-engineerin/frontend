// Defining my class

class Person {
  constructor(name) {
    //function that is called when a new object is created
    this.name = name;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }"John"

  //   another function to eat by the human
  eat() {
    console.log("i am eating");
  }
}

// Creating an instance or object of the class
const John = new Person("John");
John.greet();
John.eat();

// class Dog {
//   //   name;
//   //   color;

//   // features
//   constructor(_name, _color) {
//     this.name = _name;

//     this._color = _color;
//   }

//   // methods: the functionalities
//   eat() {
//     alert("The dog is eating");
//   }

//   run() {
//     alert("The dog is running");
//   }

//   bark() {
//     alert("The dog is barking");
//   }
// }

// // Creating an object from the class Dog

// const Jackie = new Dog("jackie", "white");
// Jackie.bark();

class BankAccount {
  constructor(_accountNumber, _initialBalance) {
    this.accountNumber = _accountNumber;
    this.initialBalance = _initialBalance;
    console.log("Account Created Successful");
  }

  // function and since its
  deposit(amount) {
    this.balance += amount;
    console.log(
      `Deposited ${amount} into account. Total balance is ${
        this.initialBalance + amount
      }`
    );
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdrew ${amount} from account`);
    } else {
      console.log("Insufficient funds");
    }
  }
}

const Moses = new BankAccount(20201136767, 100);
// Moses.deposit(50);
// Moses.withdraw(90);

// Create a class of Person
// 1. the Person should have a name feature
// 2. also should an age (that is created immediately the object is created)

// 3. Let the Person have the ability (method) to walk

// 4. create an object using your name and a fake age
// 5. alert the walk method

// ERROR HANDLING

function divide(a, b) {
  try {
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  } catch (error) {
    return `Error occurred:, ${error.message}`;
  } finally {
    return "Execution complete.";
  }
}

alert(divide(18, 9));

// console.log("hello");

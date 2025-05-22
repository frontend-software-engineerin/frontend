class BankAccount {
  constructor(owner) {
    this.owner = owner;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  transfer(amount, receiver_account) {
    this.balance -= amount;
    receiver_account += amount;
  }
}

createAccBtn.onclick = () => {
  alert("hello");
};

//
// const Bisi = new BankAccount("Bisi");
// Bisi.deposit(400);

// const James = new BankAccount("James");

// Bisi.transfer(100, James);
// // Bisi's balance = 300
// Bisi.withdraw(250);
//Bisi's balance = 50

// DOM
const username = document.getElementById("user").value;
const createAccBtn = document.getElementById("create-acc-btn");

// Create an account
createAccBtn.addEventListener(
  "click",

  () => {
    const User = new BankAccount(username);
    alert(`${username} successfully created account`);
  }
);

// Make transfer

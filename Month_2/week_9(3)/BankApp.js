class BankAccount {
  constructor(_name) {
    this.name = _name;
    this.balance = 0;
  }

  DepositFunds(_amount) {
    this.balance + _amount;
    return this.balance;
  }

  WithdrawFunds(_funds) {
    this.balance - _funds;
    return this.balance;
  }
}
// data from the user that is creating account.
const username = document.getElementById("user");

// a new account object is created for the user
// const accountHolder = new BankAccount(username);

// CREATE AN ACCOUNT WHEN A BUTTON IS CLICKED
const createAccBtn = document.getElementById("acc-btn");
createAccBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // creates an account for the user
  new BankAccount(username.value);
  // alert(username.value);
});

// DEPOSIT FUNDS INTO ACCOUNT
const depositAmount = document.getElementById("deposit-amount");
const balance = document.getElementById("balance");
const depositBtn = document.getElementById("deposit-btn");
let overBalance = 0;
// checks if an action have been done on this element
depositBtn.addEventListener("click", (e) => {
  // e.preventDefault() tells the browser not to refresh
  e.preventDefault();
  balance.innerText = depositAmount.value;

  // Create a new bank account for a user called hello
  const user = new BankAccount("hello");
  // store the amount being deposited
  // into the account of the user
  depositAmount.value = "";
  user.depositAmount(depositAmount.value);
  overBalance = overBalance + depositAmount.value;
});

// WITHDRAW FUNDS
// //get the elements from the frontend / html
// // 1. get input element with the id of "Withdraw-amount"
// const withdrawAmount = document.getElementById("Withdraw-amount");

// // 2. get the button for the withdraw _funds
// const withdrawnBtn = document.getElementById("Withdraw-btn");

// // 3. when button is clicked, let amount be withdrawn from the balance
// // const balance = document.getElementById("balance");
// withdrawnBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   // withdraw the amount from my balance
//   balance - withdrawAmount.value;
//   overBalance = balance.value;

//   // update my balance with my overall balance
//   balance = overBalance;
// });

const withdrawAmount = document.getElementById("Withdraw-amount");
const withdrawnBtn = document.getElementById("Withdraw-btn");
const balanceElement = document.getElementById("balance");

withdrawnBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const withdrawValue = parseFloat(withdrawAmount.value);
  const currentBalance = parseFloat(balanceElement.textContent);

  // Validation
  if (isNaN(withdrawValue) || withdrawValue <= 0) {
    alert("Please enter a valid withdrawal amount.");
    return;
  }

  if (withdrawValue > currentBalance) {
    alert("Insufficient balance.");
    return;
  }

  // Deduct from balance
  const newBalance = currentBalance - withdrawValue;
  balanceElement.textContent = newBalance; // Keep 2 decimal places
  withdrawAmount.value = ""; // Clear input field
});
